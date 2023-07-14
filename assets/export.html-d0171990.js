import{_ as r,M as o,p as l,q as c,R as t,t as e,N as a,V as d,a1 as s}from"./framework-1a844b00.js";const p={},h=s('<h1 id="exporting-assets-animations-prefabs-materials-lightmaps..." tabindex="-1"><a class="header-anchor" href="#exporting-assets-animations-prefabs-materials-lightmaps..." aria-hidden="true">#</a> Exporting Assets, Animations, Prefabs, Materials, Lightmaps...</h1><p>To mark any Unity scene as &quot;exportable&quot;, add an <code>ExportInfo</code> component to a root object. This component helps you to generate your new web project from a template, set up dependencies to other component libraries (we call them NpmDef) and to deploy your project.</p><p>By default, your scene is exported on save. This setting can be changed by disabling <code>Auto Export</code> in the <code>ExportInfo</code> component.</p><h2 id="exporting-gltf-files" tabindex="-1"><a class="header-anchor" href="#exporting-gltf-files" aria-hidden="true">#</a> 📦 Exporting glTF files</h2><p>To export meshes, materials, animations, textures (...) create a new GameObject in your hierarchy and add a <code>GltfObject</code> component to it. This is the root of a new glTF file. It will be exported whenever you make a change to the scene and save.</p><p>Only scripts and data on and inside those root objects is exported. Scripts and data outside of them are not exported.</p><p>Add a cube as a child of your root object and save your scene. Note that the output <code>assets/</code> folder (see <a href="#vite-project-structure">project structure</a>) now contains a new <code>.glb</code> file with the same name as your root GameObject.</p><p>You can enable the <code>Smart Export</code> setting (via <code>Edit/Project Settings/Needle</code> ) to only export when a change in this object&#39;s hierarchy is detected.</p><details class="custom-container details"><summary>How to prevent specific objects from being exported</summary><p>Objects with the <code>EditorOnly</code> tag will be ignored on export including their child hierarchy.<br> Be aware that this is preferred over disabling objects as disabled will still get exported in case they&#39;re turned on later.</p></details><h3 id="lazy-loading-and-multiple-levels-scenes" tabindex="-1"><a class="header-anchor" href="#lazy-loading-and-multiple-levels-scenes" aria-hidden="true">#</a> Lazy loading and multiple levels / scenes</h3>',10),u=t("code",null,"SceneSwitcher",-1),m={href:"https://needle.tools",target:"_blank",rel:"noopener noreferrer"},g=t("h3",{id:"recommended-complexity-per-gltf",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#recommended-complexity-per-gltf","aria-hidden":"true"},"#"),e(" Recommended Complexity per glTF")],-1),b=t("ul",null,[t("li",null,"Max. 50 MB export size uncompressed (usually ends up ~10-20 MB compressed)"),t("li",null,"Max. 500k vertices (less if you target mobile VR as well)"),t("li",null,"Max. 4x 2k lightmaps")],-1),f=t("p",null,"The scene complexity here is recommended to ensure good performance across a range of web-capable devices and bandwidths. There's no technical limitation to this beyond the capabilities of your device.",-1),y=t("h3",{id:"prefabs",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#prefabs","aria-hidden":"true"},"#"),e(" Prefabs")],-1),x={href:"https://fwd.needle.tools/needle-engine/docs/addressables",target:"_blank",rel:"noopener noreferrer"},v=s('<p>Exporting Prefabs works with nesting too: a component in a Prefab can reference another Prefab which will then also be exported.<br> This mechanism allows for composing scenes to be as lightweight as possible and loading the most important content first and defer loading of additional content.</p><h3 id="scene-assets" tabindex="-1"><a class="header-anchor" href="#scene-assets" aria-hidden="true">#</a> Scene Assets</h3><p>Similar to Prefab assets, you can reference other Scene assets.<br> To get started, create a component in Unity with a <code>UnityEditor.SceneAsset</code> field and add it to one of your GameObjects inside a GltfObject. The referenced scene will now be exported as a separate glTF file and can be loaded/deserialized as a <code>AssetReference</code> from TypeScript.</p><p>You can keep working inside a referenced scene and still update your main exporter scene/website. On scene save or play mode change we will detect if the current scene is being used by your currently running server and then trigger a re-export for only that glb. (This check is done by name - if a glb inside your <code>&lt;web_project&gt;/assets/</code> folder exists, it is exported again and the main scene reloads it.)</p>',4),k={href:"https://needle.tools",target:"_blank",rel:"noopener noreferrer"},w=s(`<p><img src="https://user-images.githubusercontent.com/5083203/185958983-71913c97-5eec-4cfd-99f5-76798582373e.png" alt="2022-08-22-172605_Needle_Website_-Website-_Windows,_Mac,Linux-_U"></p><h4 id="loading-a-prefab-or-scene-from-a-custom-script" tabindex="-1"><a class="header-anchor" href="#loading-a-prefab-or-scene-from-a-custom-script" aria-hidden="true">#</a> Loading a Prefab or Scene from a custom script</h4><p>If you want to reference and load a prefab from one of your scripts you can declare a <code>AssetReference</code> type.<br> Here is a minimal example:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Behaviour<span class="token punctuation">,</span> serializable<span class="token punctuation">,</span> AssetReference <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@needle-tools/engine&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token keyword">extends</span> <span class="token class-name">Behaviour</span> <span class="token punctuation">{</span>

    <span class="token comment">// if you export a prefab or scene as a reference from Unity you&#39;ll get a path to that asset</span>
    <span class="token comment">// which you can de-serialize to AssetReference for convenient loading</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">serializable</span></span><span class="token punctuation">(</span>AssetReference<span class="token punctuation">)</span>
    myPrefab<span class="token operator">?</span><span class="token operator">:</span> AssetReference<span class="token punctuation">;</span>
    
    <span class="token keyword">async</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// directly instantiate</span>
      <span class="token keyword">const</span> myInstance <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myPrefab<span class="token operator">?.</span><span class="token function">instantiate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// you can also just load and instantiate later</span>
      <span class="token comment">// const myInstance = await this.myPrefab.loadAssetAsync();</span>
      <span class="token comment">// this.gameObject.add(myInstance)</span>
      <span class="token comment">// this is useful if you know that you want to load this asset only once because it will not create a copy</span>
      <span class="token comment">// since \`\`instantiate()\`\` does create a copy of the asset after loading it</span>
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exporting-animations" tabindex="-1"><a class="header-anchor" href="#exporting-animations" aria-hidden="true">#</a> 🏇 Exporting Animations</h2><p>Needle Engine supports a considerable and powerful subset of Unity&#39;s animation features:</p><ul><li><strong>Timeline</strong> incl. activation tracks, animation tracks, track offsets</li><li><strong>Animator</strong> incl. top-level state transitions <ul><li>Blend trees are currently not supported.</li><li>Sub state machines are currently not supported.</li></ul></li><li><strong>AnimationClips</strong> incl. Loop modes</li><li><strong>Procedural Animations</strong> can be created via scripting</li></ul>`,7),_={href:"https://github.com/ux3d/glTF/tree/extensions/KHR_animation_pointer/extensions/2.0/Khronos/KHR_animation_pointer",target:"_blank",rel:"noopener noreferrer"},T=t("br",null,null,-1),S=s('<p>One current limitation is that materials won&#39;t be duplicated on export — if you want to animate the same material with different colors, for example, you currently need to split the material in two.</p><h2 id="exporting-the-skybox" tabindex="-1"><a class="header-anchor" href="#exporting-the-skybox" aria-hidden="true">#</a> 🌍 Exporting the Skybox</h2><p>The Unity skybox and custom reflection (if any) are baked into a texture on export and automatically exported inside the <code>NEEDLE_lightmaps</code> extension.</p><p>To change the skybox resolution you can add a <code>SkyboxExportSettings</code> component to your scene.</p><p><img src="https://user-images.githubusercontent.com/5083203/196030839-170a9496-9ed9-4ebc-bc1d-2df6c746f8c8.png" alt="image"></p><p>If you don&#39;t want to skybox to be exported at all in a glb file you can untick the <code>Embed Skybox</code> option on your <code>GltfObject</code> component</p><p><img src="https://user-images.githubusercontent.com/5083203/196030825-8a05037f-5acc-4795-9128-2bdacedd0d49.png" alt="image"></p><h2 id="exporting-materials" tabindex="-1"><a class="header-anchor" href="#exporting-materials" aria-hidden="true">#</a> ✨ Exporting Materials</h2><h3 id="physically-based-materials-pbr" tabindex="-1"><a class="header-anchor" href="#physically-based-materials-pbr" aria-hidden="true">#</a> Physically Based Materials (PBR)</h3><p>By default, materials are converted into glTF materials on export. glTF supports a physically based material model and has a number of extensions that help to represent complex materials.</p><p>For full control over what gets exported, it&#39;s highly recommended to use the glTF materials provided by UnityGltf:</p><ul><li>PBRGraph</li><li>UnlitGraph</li></ul><blockquote><p>These materials are exported as-is, with no conversion necessary. They allow for using advanced material properties such as refractive transmission and iridescence, which can be exported as well.</p></blockquote><p>Materials that can be converted out-of-the-box:</p><ul><li>BiRP/Standard</li><li>BiRP/Autodesk Interactive</li><li>BiRP/Unlit</li><li>URP/Lit</li><li>URP/Unlit</li></ul><p>Other materials are converted using a propery name heuristic. That means that depending on what property names your materials and shaders use, you might want to either refactor your custom shader&#39;s properties to use the property names of either URP/Lit or PBRGraph, or export the material as <a href="#custom-shaders">Custom Shader</a>.</p><h3 id="custom-shaders" tabindex="-1"><a class="header-anchor" href="#custom-shaders" aria-hidden="true">#</a> Custom Shaders</h3><p>To export custom shaders (e.g. ShaderGraph shaders), add an <code>ExportShader</code> Asset Label (see bottom of the inspector) to the shader you want to export.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Please see limitations listed below</p></div><p><img src="https://user-images.githubusercontent.com/5083203/185957781-9fae18c5-09ff-490f-8958-57e138aa0003.png" alt="2022-08-22-172029_Needle_Website_-CustomShaders-_Windows,_Mac,_Lin"></p><p>Note that <strong>Custom Shaders</strong> aren&#39;t part of the ratified glTF material model. The resulting GLB files will not display correctly in other viewers (the materials will most likely display white).</p><h4 id="current-limitations" tabindex="-1"><a class="header-anchor" href="#current-limitations" aria-hidden="true">#</a> Current limitations</h4><ul><li>We currently only support custom <strong>Unlit</strong> shaders — Lit shader conversion is not officially supported.</li><li>Custom Lit Shaders are currently experimental. Not all rendering modes are supported.</li><li>Shadow receiving on custom shaders is not supported</li><li>Skinned meshes with custom shaders are not supported</li><li>As there&#39;s multiple coordinate system changes when going from Unity to three.js and glTF, there might be some changes necessary to get advanced effects to work. We try to convert data on export but may not catch all cases where conversions are necessary.<br> These coordinate changes are <ul><li>UV coordinates in Unity start at the bottom left; in glTF they start at the top left.</li><li>X axis values are flipped in glTF compared to Unity (a variant of a left-handed to right-handed coordinate system change).</li></ul></li></ul><h2 id="exporting-lightmaps" tabindex="-1"><a class="header-anchor" href="#exporting-lightmaps" aria-hidden="true">#</a> 💡 Exporting Lightmaps</h2><p><img src="https://user-images.githubusercontent.com/5083203/185957005-d04c9530-07eb-40f5-b305-9822d13b79ab.png" alt="2022-08-22-171650_Needle_-_Google_Chrome"></p>',25),j={href:"https://docs.unity3d.com/Manual/Lightmapping.html",target:"_blank",rel:"noopener noreferrer"},A=s(`<p>When working on multiple scenes, disable &quot;Auto Generate&quot; and bake lightmaps explicitly. Otherwise, Unity will discard temporary lightmaps on scene change.</p><h3 id="recommended-lightmap-settings" tabindex="-1"><a class="header-anchor" href="#recommended-lightmap-settings" aria-hidden="true">#</a> Recommended Lightmap Settings</h3><ul><li>Lightmap Encoding: Normal Quality (adjust in Project Settings &gt; Player)</li><li>Progressive GPU (faster and usually accurate enough for small scenes)</li><li>Non-Directional Lightmaps</li><li>Max Lightmap Size 2k (you can go higher, but expect large files)</li><li>Max 4x 2k lightmaps per scene (you can go higher, but expect large files)</li><li>Compress Lightmaps OFF (increases quality; otherwise will be compressed again at export time)</li></ul><p><img src="https://user-images.githubusercontent.com/5083203/185956392-f4031f45-ad13-4e6d-a14c-c8ec5c1fcfd4.png" alt="2022-08-22-171356_Needle_Website_-Lightmaps-_Windows,_Mac,Linux-"></p><h3 id="mixing-baked-and-non-baked-objects" tabindex="-1"><a class="header-anchor" href="#mixing-baked-and-non-baked-objects" aria-hidden="true">#</a> Mixing Baked and Non-Baked Objects</h3><p>There&#39;s no 100% mapping between how Unity handles lights and environment and how three.js handle that. For example, Unity has entirely separate code paths for lightmapped and non-lightmapped objects (lightmapped objects don&#39;t receive ambient light since that is already baked into their maps), and three.js doesn&#39;t distinguish in that way.</p><p>This means that to get best results, we currently recommend specific settings if you&#39;re mixing baked and non-baked objects in a scene:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Environment Lighting: Skybox
Ambient Intensity: 1
Ambient Color: black
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2021.3+</strong><br><img src="https://user-images.githubusercontent.com/2693840/186947184-2446672f-420c-47e8-8f7d-970a7d52bf35.png" alt="20220826-175324-SqBL-Unity_pMXa-needle"></p><p><strong>2020.3+</strong><br><img src="https://user-images.githubusercontent.com/2693840/186947203-2d7d96c3-f566-44b4-889c-4103fac505d4.png" alt="20220826-175514-tnGc-Unity_mycs-needle"></p><p>If you have no baked objects in your scene, then the following settings should also yield correct results:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Environment Lighting: Color
Ambient Color: any
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function L(E,P){const n=o("ExternalLinkIcon"),i=o("RouterLink");return l(),c("div",null,[h,t("p",null,[e("If you want to split up your application into multiple levels or scenes then you can simply use the "),u,e(" component. You can then structure your application into multiple scenes or prefabs and add them to the SceneSwitcher array to be loaded and unloaded at runtime. This is a great way to avoid having to load all your content upfront and to keep loading times small (for example it is what we did on "),t("a",m,[e("needle.tools"),a(n)]),e(" by separating each section of your website into its own scene and only loading them when necessary)")]),g,b,t("p",null,[e("You can split up scenes and prefabs into multiple glTF files, and then load those on demand (only when needed). This keeps loading performance fast and file size small. See the "),a(i,{to:"/scripting.html#assetreference-and-addressables"},{default:d(()=>[e("AssetReference section in the Scripting docs")]),_:1}),e(".")]),f,y,t("p",null,[e("Prefabs can be exported as invidual glTF files and instantiated at runtime. To export a prefab as glTF just reference a prefab asset (from the project browser and not in the scene) "),t("a",x,[e("from one of your scripts"),a(n)]),e(".")]),v,t("p",null,[e("As an example on "),t("a",k,[e("our website"),a(n)]),e(" each section is setup as a separate scene and on export packed into multiple glb files that we load on demand:")]),w,t("p",null,[e("Needle Engine is one of the first to support the new "),t("a",_,[e("glTF extension KHR_ANIMATION_POINTER"),a(n)]),e("."),T,e(" This means that almost all properties, including script variables, are animatable.")]),S,t("p",null,[e("To export lightmaps simply "),t("a",j,[e("generate lightmaps"),a(n)]),e(" in Unity. Lightmaps will be automatically exported.")]),A])}const U=r(p,[["render",L],["__file","export.html.vue"]]);export{U as default};