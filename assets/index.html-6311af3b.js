import{_ as a,M as t,p as e,q as p,N as o,R as n,a1 as c}from"./framework-1a844b00.js";const i={},l=n("p",null,[n("a",{href:"/docs/community/contributions"},"Overview")],-1),u=c(`<p>In a multiuser session, typically objects are instantiated using instantiateSynced as such:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Behaviour<span class="token punctuation">,</span>GameObject<span class="token punctuation">,</span>serializable<span class="token punctuation">,</span>InstantiateOptions<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@needle-tools/engine&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Vector3<span class="token punctuation">,</span> Object3D<span class="token punctuation">,</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;three&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">InstantiateObjectForAll</span> <span class="token keyword">extends</span> <span class="token class-name">Behaviour</span>
<span class="token punctuation">{</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">serializable</span></span><span class="token punctuation">(</span>Object3D<span class="token punctuation">)</span>
    myPrefab<span class="token operator">?</span><span class="token operator">:</span> GameObject<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">makeObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>
         <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InstantiateOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         options<span class="token punctuation">.</span>context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">;</span>
         options<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vector3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         GameObject<span class="token punctuation">.</span><span class="token function">instantiateSynced</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>myPrefab<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token keyword">as</span> GameObject<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>My particular use-case was for generating programmatically a random scene made of cubes, and that scene had to be the same for all users of the same room. I had used the example above but for some unknown reasons sometimes the scenes were partially rendered when instantiating simultaneously &gt;400 objects. @Marcel of Needle suggested to generate a seed (position of all objects in the scene) and send that seed instead using :</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>connection<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>All users using :</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>connection<span class="token punctuation">.</span><span class="token function">beginListen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>would receive any seed previously sent, upon joining the same room, allowing them to instantiate cubes according to that seed (array of Vector3).</p><p>Here is a script illustrating the use of the send method and the beginListen counterpart:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token comment">//This is an example of sending the seed of a randomly generated scene made of cubes, for all other instances logging into the same room to create the same scene.</span>

<span class="token comment">//This script requires a prefab (e.g. a 1x1x1 Cube)</span>
<span class="token comment">//This script will generate and build randomly positioned cubes (random walk) as a child of the object it is attached to. </span>
<span class="token comment">//The generateSeed() method is in this script called via a button. The button is deactivated once the seed has been transmitted.</span>
<span class="token comment">//Any users joining the same room will receive the seed and build the exact same scene</span>


<span class="token keyword">import</span> <span class="token punctuation">{</span> Behaviour<span class="token punctuation">,</span>GameObject<span class="token punctuation">,</span>serializable<span class="token punctuation">,</span>InstantiateOptions<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@needle-tools/engine&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Vector3<span class="token punctuation">,</span> Object3D <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;three&quot;</span><span class="token punctuation">;</span>


<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">NetworkedSeed</span> <span class="token keyword">extends</span> <span class="token class-name">Behaviour</span>
<span class="token punctuation">{</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">serializable</span></span><span class="token punctuation">(</span>Object3D<span class="token punctuation">)</span>
    prefab<span class="token operator">?</span><span class="token operator">:</span> GameObject<span class="token punctuation">;</span>

    <span class="token decorator"><span class="token at operator">@</span><span class="token function">serializable</span></span><span class="token punctuation">(</span>Object3D<span class="token punctuation">)</span>
    generateButton<span class="token operator">?</span><span class="token operator">:</span> Object3D<span class="token punctuation">;</span>

    <span class="token keyword">public</span> seedSize<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span> 
   
    seed<span class="token operator">:</span> Vector3<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token function">onEnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>connection<span class="token punctuation">.</span><span class="token function">beginListen</span><span class="token punctuation">(</span><span class="token string">&quot;mySeed&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onDataReceived<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>generateButton<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>generateButton<span class="token punctuation">.</span>visible<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">onDisable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>connection<span class="token punctuation">.</span><span class="token function">stopListen</span><span class="token punctuation">(</span><span class="token string">&quot;mySeed&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onDataReceived<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function-variable function">onDataReceived</span> <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Received data:&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>mySeed<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>seed<span class="token punctuation">.</span>length<span class="token operator">===</span><span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">//prevent other generations of the seed</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>generateButton<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>generateButton<span class="token punctuation">.</span>visible<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">this</span><span class="token punctuation">.</span>seed<span class="token operator">=</span>data<span class="token punctuation">.</span>mySeed<span class="token punctuation">;</span>
            <span class="token comment">//build scene</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildScene</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>


    <span class="token comment">//generate and send seed to all from the button generateButton</span>
    <span class="token keyword">public</span> <span class="token function">generateSeed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>seed<span class="token punctuation">.</span>length<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">//no seed found =&gt; generate one</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>seed <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> uniquePositions <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            <span class="token comment">//start at origin</span>
            <span class="token keyword">const</span> startPosition <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vector3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>seed<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>startPosition<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            uniquePositions<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>startPosition<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            <span class="token comment">//go for a random walk of length : seedSize</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>seed<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>seedSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> lastPosition <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>seed<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>seed<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">let</span> newPosition<span class="token operator">:</span> Vector3<span class="token punctuation">;</span>
                
                <span class="token comment">//walk and add position, making sure they are unique</span>
                <span class="token keyword">do</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> direction <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRandomDirection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                newPosition <span class="token operator">=</span> lastPosition<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>direction<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>uniquePositions<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>newPosition<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                
                <span class="token keyword">this</span><span class="token punctuation">.</span>seed<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newPosition<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                uniquePositions<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>newPosition<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            
            <span class="token comment">//send the seed to all on the server</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sendSeed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//prevent other generations of the seed</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>generateButton<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>generateButton<span class="token punctuation">.</span>visible<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">//build scene locally</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildScene</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token function">sendSeed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>seed<span class="token punctuation">.</span>length<span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>connection<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;mySeed&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>guid<span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>guid<span class="token punctuation">,</span> mySeed<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>seed<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;------ SEED SENT -------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token function">buildScene</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>

        <span class="token comment">//check if the seed is not empty</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>seed<span class="token punctuation">.</span>length<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;array was empty&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">//check if the scene has already been built</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>gameObject<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span> 
        <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Scene already present&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    
        <span class="token comment">// Create cubes at each position of the random walk </span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token keyword">this</span><span class="token punctuation">.</span>seed<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InstantiateOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            option<span class="token punctuation">.</span>context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">;</span>
            option<span class="token punctuation">.</span>parent<span class="token operator">=</span><span class="token keyword">this</span><span class="token punctuation">.</span>gameObject<span class="token punctuation">;</span>
            option<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>seed<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>prefab<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">const</span> cube <span class="token operator">=</span> GameObject<span class="token punctuation">.</span><span class="token function">instantiate</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>prefab<span class="token punctuation">,</span> option<span class="token punctuation">)</span> <span class="token keyword">as</span> GameObject<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;----------- Scene Built ---------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token function">getRandomDirection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Vector3 <span class="token punctuation">{</span>
        <span class="token keyword">const</span> x <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0.5</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> y <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0.5</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> z <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0.5</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Vector3</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The above script is placed on an object (any Transform) and will generate an array of unique Vector3 positions for a specified length (seedSize) after generateSeed() is called (In this case it is called from a button: generateButton).</p><p>Once generated it will send the array to the server and build the scene. The building process consist of instantiating the prefab at each Vector3 position of the seed (this.seed) array.</p><p>Any user joining the same room after a seed has been generated and sent, will receive the seed from the server and trigger the callback onDataReceived() which will cache the seed array, disable the button, and build the scene with the prefab, according to the seed.</p><p>This gives a way to generate a scene and communicate the seed of that scene, for each user to build locally.</p><p>This was the solution I chose which worked better than instantiating a complex scene (&gt;400 objects) with instantiateSynced which would occasionally cause bugs.</p>`,14);function k(r,d){const s=t("contribution-header");return e(),p("div",null,[l,o(s,{url:"https://github.com/Web3Kev",author:"Web3Kev",page:"/docs/community/contributions/web3kev",profileImage:"https://avatars.githubusercontent.com/u/106066970?s=100&v=4",githubUrl:"https://github.com/needle-tools/needle-engine-support/discussions/153",title:"Network instantiation of multiple objects",gradient:"True"}),u])}const m=a(i,[["render",k],["__file","index.html.vue"]]);export{m as default};