import{_ as a,M as t,p,q as e,N as o,R as n,a1 as c}from"./framework-1a844b00.js";const i={},l=n("p",null,[n("a",{href:"/docs/community/contributions"},"Overview")],-1),u=c(`<p>The following code will enable Quest users (haven&#39;t tested with other devices) to move up and down with the right-joystick\`s y axis. (the x axis being used for snap-turns).</p><p>This code will interfere with the teleport script when accidentally pointing towards an object and trying to move up. It is recommended to remove the teleport script for that matter.</p><p>You can place this script anywhere.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Behaviour<span class="token punctuation">,</span> WebXR<span class="token punctuation">,</span> GameObject<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@needle-tools/engine&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Vector3<span class="token punctuation">,</span>Quaternion<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;three&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Mathf <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@needle-tools/engine&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">VerticalMove</span> <span class="token keyword">extends</span> <span class="token class-name">Behaviour</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> webXR<span class="token operator">?</span><span class="token operator">:</span> WebXR<span class="token punctuation">;</span>
    <span class="token keyword">private</span> joystickY<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> worldRot<span class="token operator">:</span> Quaternion <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Quaternion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>

        <span class="token keyword">let</span> _webxr<span class="token operator">=</span>GameObject<span class="token punctuation">.</span><span class="token function">findObjectOfType</span><span class="token punctuation">(</span>WebXR<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>_webxr<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>webXR<span class="token operator">=</span>_webxr<span class="token punctuation">;</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;webxr found&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>isInVR<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">//get y value from right joystick</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">verticalMove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">verticalMove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>webXR<span class="token operator">?.</span>RightController<span class="token operator">?.</span>input<span class="token operator">?.</span>gamepad<span class="token operator">?.</span>axes<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 
        <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>joystickY<span class="token operator">=</span><span class="token keyword">this</span><span class="token punctuation">.</span>webXR<span class="token punctuation">.</span>RightController<span class="token punctuation">.</span>input<span class="token punctuation">.</span>gamepad<span class="token punctuation">.</span>axes<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

            <span class="token keyword">const</span> speedFactor <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> powFactor <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> speed <span class="token operator">=</span> Mathf<span class="token punctuation">.</span><span class="token function">clamp01</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            <span class="token keyword">const</span> verticalDir <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>joystickY <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> vertical <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>joystickY<span class="token punctuation">,</span> powFactor<span class="token punctuation">)</span><span class="token punctuation">;</span>
            vertical <span class="token operator">*=</span> verticalDir<span class="token punctuation">;</span>
            vertical <span class="token operator">*=</span> speed<span class="token punctuation">;</span>

            <span class="token keyword">this</span><span class="token punctuation">.</span>webXR<span class="token punctuation">.</span>Rig<span class="token punctuation">.</span><span class="token function">getWorldQuaternion</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>worldRot<span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            <span class="token keyword">let</span> movementVector<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Vector3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            movementVector<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> vertical<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            movementVector<span class="token punctuation">.</span><span class="token function">applyQuaternion</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>webXR<span class="token punctuation">.</span>TransformOrientation<span class="token punctuation">)</span><span class="token punctuation">;</span>
            movementVector<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            movementVector<span class="token punctuation">.</span><span class="token function">applyQuaternion</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>worldRot<span class="token punctuation">)</span><span class="token punctuation">;</span>
            movementVector<span class="token punctuation">.</span><span class="token function">multiplyScalar</span><span class="token punctuation">(</span>speedFactor <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>time<span class="token punctuation">.</span>deltaTime<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">this</span><span class="token punctuation">.</span>webXR<span class="token punctuation">.</span>Rig<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>movementVector<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function r(k,d){const s=t("contribution-header");return p(),e("div",null,[l,o(s,{url:"https://github.com/Web3Kev",author:"Web3Kev",page:"/docs/community/contributions/web3kev",profileImage:"https://avatars.githubusercontent.com/u/106066970?s=100&v=4",githubUrl:"https://github.com/needle-tools/needle-engine-support/discussions/158",title:"Vertical Move in VR using the right joystick (Quest)",gradient:"True"}),u])}const m=a(i,[["render",r],["__file","index.html.vue"]]);export{m as default};