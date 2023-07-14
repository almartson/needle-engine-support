import{_ as i,M as n,p,q as c,R as s,t as e,N as a,a1 as r}from"./framework-1a844b00.js";const l="/docs/showcase-mercedes/1_skybox.png",d="/docs/showcase-mercedes/2_paintjob_simple.jpg",h="/docs/showcase-mercedes/3_SpecularHighlights_off.jpg",u="/docs/showcase-mercedes/4_SpecularHighlights_on.jpg",m="/docs/showcase-mercedes/5_NoBackground.jpg",k="/docs/showcase-mercedes/6_MapBackground.png",g="/docs/showcase-mercedes/7_EnvShaderGraph.jpg",w="/docs/showcase-mercedes/8_Gradiant.png",b="/docs/showcase-mercedes/9_Rotator.png",v="/docs/showcase-mercedes/10_WheelsAndGrid.png",f="/docs/showcase-mercedes/11_GridShader.jpg",y="/docs/showcase-mercedes/12_WheelWithText.png",_="/docs/showcase-mercedes/13_WheelShader.jpg",x="/docs/showcase-mercedes/14_RearUI.jpg",j={},W=s("h2",{id:"about",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#about","aria-hidden":"true"},"#"),e(" About")],-1),T={href:"https://www.ishowroom.cz/home/",target:"_blank",rel:"noopener noreferrer"},R=r('<h2 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> Context</h2><p>I&#39;m not very well experienced with javascript, typescript or three.js, so my point of view is as a semi-experienced Unity developer trying out the simplest way how to create a web experience. For those who would suggest Unity WebGL, that sadly doesn&#39;t work and isn&#39;t flexible on mobile browsers. Needle is 💚</p><h2 id="lighting" tabindex="-1"><a class="header-anchor" href="#lighting" aria-hidden="true">#</a> Lighting</h2><p>Our lighting model is based on reflection probes in unity. We do not need any directional or point lights, only ambient lighting.</p><p>We&#39;re using this skybox:</p><p><img src="'+l+'" alt="Skybox"></p><p>Which looks like this on the paint job:</p><p><img src="'+d+'" alt="Paintjob"></p><p>Then to add a slight detail, i&#39;ve added 2 directional lights with an insignificant intensity (0.04) to create specular highlights. So before it looked like this:</p><p><img src="'+h+'" alt="Specular off"></p><p>But with the added directional lights it added a better dynamic. The effect could be deepened with higher intensity:</p><p><img src="'+u+'" alt="Specular on"></p><h2 id="background" tabindex="-1"><a class="header-anchor" href="#background" aria-hidden="true">#</a> Background</h2><p>The scene now looks like this:</p><p><img src="'+m+'" alt="No background"></p><p>The black background isn&#39;t very pretty. So to differentiate between visual and lighting skyboxes i&#39;ve added an inverse sphere which wraps the whole map.</p><p><img src="'+k+'" alt="With background"></p><p>Regarding the gradient goes from a slight gray to a white color..</p><p>This effect could be easily made with just a proper UV mapping and a single pixel high texture which would define the gradient.</p><p>I&#39;ve made an unlit shader in the shader graph:</p><p><img src="'+g+'" alt="Evironemnt shader"></p><p>I&#39;ve noticed a color banding issue, so i&#39;ve tried to implement dithering. Frankly, it didn&#39;t help the artefacts but i bet there&#39;s a simple solution to that issue. So the upper part of the shader does sample the gradient based on the Y axis in object space. And the lower part tries to negate the color banding.</p><p>By using shaders it&#39;s simpler to use and iterate the gradiant. By using Needle&#39;s Shadergraph markdown asset, it&#39;s even simpler! 🌵</p><p><img src="'+w+'" alt="Gradiant"></p><h2 id="car-fake-movement" tabindex="-1"><a class="header-anchor" href="#car-fake-movement" aria-hidden="true">#</a> Car fake movement</h2><p>The scene right now is static since nothing moves. We can negate that by adding a fake feeling of motion. Let&#39;s start by adding motion to the wheels.</p><p>With a simple component called Rotator, we define an axis and speed along it.</p><p><img src="'+b+`" alt="Rotator"></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Behaviour<span class="token punctuation">,</span> serializable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@needle-tools/engine&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">enum</span> RotationAxis <span class="token punctuation">{</span>
    <span class="token constant">X</span><span class="token punctuation">,</span> <span class="token constant">Y</span><span class="token punctuation">,</span> <span class="token constant">Z</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Rotator</span> <span class="token keyword">extends</span> <span class="token class-name">Behaviour</span> <span class="token punctuation">{</span>
    <span class="token comment">//@type RotationAxis</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">serializable</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    axis <span class="token operator">:</span> RotationAxis <span class="token operator">=</span> RotationAxis<span class="token punctuation">.</span><span class="token constant">X</span><span class="token punctuation">;</span>

    <span class="token decorator"><span class="token at operator">@</span><span class="token function">serializable</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    speed <span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> angle <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>speed <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>time<span class="token punctuation">.</span>deltaTime<span class="token punctuation">;</span>
        <span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>axis<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> RotationAxis<span class="token punctuation">.</span><span class="token constant">X</span><span class="token operator">:</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>gameObject<span class="token punctuation">.</span><span class="token function">rotateX</span><span class="token punctuation">(</span>angle<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> RotationAxis<span class="token punctuation">.</span><span class="token constant">Y</span><span class="token operator">:</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>gameObject<span class="token punctuation">.</span><span class="token function">rotateY</span><span class="token punctuation">(</span>angle<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> RotationAxis<span class="token punctuation">.</span><span class="token constant">Z</span><span class="token operator">:</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>gameObject<span class="token punctuation">.</span><span class="token function">rotateZ</span><span class="token punctuation">(</span>angle<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The user now sees a car driving in deep nothingness, the color doesn&#39;t resemble anything and the experience is dull. We want to ground the model and that&#39;s done by adding a grid and then shifting it so it seems the car is moving. This is what we want to achieve:</p><p><img src="`+v+'" alt="Motion"></p><p>The shader for the grid was comprised of two parts. A simple tiled texture of the grid that&#39;s being multipled by a circular gradient to make the edges fade off.</p><p><img src="'+f+'" alt="Grid"></p><h2 id="extra-elements" tabindex="-1"><a class="header-anchor" href="#extra-elements" aria-hidden="true">#</a> Extra elements</h2><p>This tech demo takes it&#39;s goal to showcase the car&#39;s capabilities.</p><p>Let&#39;s start by highlighting the wheels.</p><p><img src="'+y+'" alt="Wheel highlight"></p><p>Adding this shader to a plane will result in a dashed circle which is rotating by a defined speed. Combined with world space UI with a normal Text component this can highlight some interesting capabilities or parameters of the given product.</p><p><img src="'+_+'" alt="Wheel shader"></p><p>After showcasing the wheels we want to finish with a broad information about the product. In this case, that would be the car&#39;s full name and perhaps some available configurations.</p><p><img src="'+x+'" alt="Rear UI"></p><h2 id="wrap-up" tabindex="-1"><a class="header-anchor" href="#wrap-up" aria-hidden="true">#</a> Wrap up</h2><p>By using the Unity&#39;s timeline we can control when the wheel dashes and text will be shown. This is complemented by the camera animation.</p><h2 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion" aria-hidden="true">#</a> Conclusion</h2><p>Needle Engine seems to be a very good candidate for us!</p><p>There are a few features which we miss.</p><p>That would be for example proper support for the Lit Shader Graphs. But nothing stops us to create shaders the three.js way and create simmilar shaders in Unity for our content team to tweak the materials.</p><p>Using Needle was a blast! 🌵</p>',48);function S(A,B){const t=n("ExternalLinkIcon"),o=n("sample");return p(),c("div",null,[W,s("p",null,[e("Hello, my name is Kryštof and i did a research project about Needle. At "),s("a",T,[e("our company"),a(t)]),e(", we wanted to determine how Needle can help us in our workflow. We have one local client which focuses on reselling luxury cars. We already delivered a mobile app and VR experience using Unity. We have around 30 unique cars ready in the engine. We plan to expand the client's website with visually pleasing digital clones with more configuration options. Needle could achieve a perfect 1:1 conversion between unity and web visuals. It would be a massive benefit to our workflow. So that's what sparked our research.")]),a(o,{src:"https://engine.needle.tools/demos/mercedes-benz-demo/"}),R])}const I=i(j,[["render",S],["__file","showcase-mercedes-benz.html.vue"]]);export{I as default};