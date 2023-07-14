import{_ as e,M as t,p as o,q as p,R as n,t as c,N as i,a1 as s}from"./framework-1a844b00.js";const l={},r=s(`<p>The following table contains available Typescript decorators that Needle Engine provides.</p><p>You can think of them as Attributes on steroids (if you are familiar with C#) - they can be added to classes, fields or methods in Typescript to provide additional functionality.</p><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td><strong>Field &amp; Property Decorators</strong></td><td></td></tr><tr><td><code>@serializable()</code></td><td>Add to exposed / serialized fields. Is used when loading glTF files that have been exported with components from Unity or Blender.</td></tr><tr><td><code>@syncField()</code></td><td>Add to a field to network the value when it changes. You can pass in a method to be called when the field changes</td></tr><tr><td><code>@validate()</code></td><td>Add to receive callbacks in the component event method <code>onValidate</code> whenever the value changes. This behaves similar to Unity&#39;s onValidate.</td></tr><tr><td><strong>Method Decorators</strong></td><td></td></tr><tr><td><code>@prefix(&lt;type&gt;)</code> (experimental)</td><td>Can be used to easily inject custom code into other components. Optionally return <code>false</code> to prevent the original method from being executed. See the <a href="#prefix">example below</a></td></tr><tr><td><strong>Class Decorators</strong></td><td></td></tr><tr><td><code>@registerType</code></td><td>No argument. Can be added to a custom component class to be registered to the Needle Engine types and to enable hot reloading support.</td></tr></tbody></table><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><h3 id="serializable" tabindex="-1"><a class="header-anchor" href="#serializable" aria-hidden="true">#</a> Serializable</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ButtonObject</span> <span class="token keyword">extends</span> <span class="token class-name">Behaviour</span> <span class="token punctuation">{</span>
    <span class="token comment">// you can omit the type if it&#39;s a primitive </span>
    <span class="token comment">// e.g. Number, String or Bool</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">serializable</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    myNumber<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>

    <span class="token comment">// otherwise add the concrete type that you want to serialize to</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">serializable</span></span><span class="token punctuation">(</span>EventList<span class="token punctuation">)</span>
    onClick<span class="token operator">?</span><span class="token operator">:</span> EventList<span class="token punctuation">;</span>

    <span class="token decorator"><span class="token at operator">@</span><span class="token function">serializable</span></span><span class="token punctuation">(</span>SomeComponentType<span class="token punctuation">)</span>
    myComponent<span class="token operator">:</span> SomeComponentType<span class="token punctuation">;</span>

    <span class="token comment">// Note that for arrays you still add the concrete type (not the array)</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">serializable</span></span><span class="token punctuation">(</span>Object3D<span class="token punctuation">)</span>
    myObjects<span class="token operator">:</span> Object3D<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="syncfield" tabindex="-1"><a class="header-anchor" href="#syncfield" aria-hidden="true">#</a> SyncField</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyScript</span> <span class="token keyword">extends</span> <span class="token class-name">Behaviour</span> <span class="token punctuation">{</span>

    <span class="token decorator"><span class="token at operator">@</span><span class="token function">syncField</span></span><span class="token punctuation">(</span>MyScript<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>onNumberChanged<span class="token punctuation">)</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">serializable</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    myNumber<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token function">onNumberChanged</span><span class="token punctuation">(</span>newValue <span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> oldValue <span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Number changed from &quot;</span><span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> <span class="token string">&quot;to&quot;</span><span class="token punctuation">,</span> newValue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="validate" tabindex="-1"><a class="header-anchor" href="#validate" aria-hidden="true">#</a> Validate</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyScript</span> <span class="token keyword">extends</span> <span class="token class-name">Behaviour</span> <span class="token punctuation">{</span>

    <span class="token decorator"><span class="token at operator">@</span><span class="token function">validate</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">serializable</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    myNumber<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

    <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myNumber <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>

    <span class="token function">onValidate</span><span class="token punctuation">(</span>fieldName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Validate&quot;</span><span class="token punctuation">,</span> fieldName<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="prefix" tabindex="-1"><a class="header-anchor" href="#prefix" aria-hidden="true">#</a> Prefix</h3>`,11),u={href:"https://stackblitz.com/edit/needle-engine-prefix-example?file=src%2Fmain.ts",target:"_blank",rel:"noopener noreferrer"},d=s(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Camera <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@needle-tools/engine&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">YourClass</span> <span class="token punctuation">{</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">prefix</span></span><span class="token punctuation">(</span>Camera<span class="token punctuation">)</span> <span class="token comment">// &lt; this is type that has the method you want to change</span>
    <span class="token function">awake</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// &lt; this is the method name you want to change</span>

        <span class="token comment">// this is now called before the Camera.awake method runs</span>
        <span class="token comment">// NOTE: \`this\` does now refer to the Camera instance and NOT \`YourClass\` anymore. This allows you to access internal state of the component as well</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello camera:&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
        <span class="token comment">// optionally return false if you want to prevent the default behaviour</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function k(m,v){const a=t("ExternalLinkIcon");return o(),p("div",null,[r,n("p",null,[n("a",u,[c("Live example"),i(a)])]),d])}const h=e(l,[["render",k],["__file","typescript-decorators.html.vue"]]);export{h as default};