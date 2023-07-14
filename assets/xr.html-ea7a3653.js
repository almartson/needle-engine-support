import{_ as d,M as l,p,q as u,R as e,t as n,N as t,V as a,a1 as o}from"./framework-1a844b00.js";const h={},m=o('<h2 id="supported-devices" tabindex="-1"><a class="header-anchor" href="#supported-devices" aria-hidden="true">#</a> Supported Devices</h2><p>Theoretically all WebXR-capable devices and browsers should be supported. That being said, we&#39;ve tested the following configurations:</p><table><thead><tr><th>Tested VR Device</th><th>Browser</th><th>Notes</th></tr></thead><tbody><tr><td>Meta Quest 1</td><td>✔️ Meta Browser</td><td>hand tracking, support for sessiongranted<sup>1</sup></td></tr><tr><td>Meta Quest 2</td><td>✔️ Meta Browser</td><td>hand tracking, support for sessiongranted<sup>1</sup>, passthrough (black and white)</td></tr><tr><td>Meta Quest Pro</td><td>✔️ Meta Browser</td><td>hand tracking, support for sessiongranted<sup>1</sup>, passthrough</td></tr><tr><td>Pico Neo 3</td><td>✔️ Pico Browser</td><td>no hand tracking, inverted controller thumbsticks</td></tr><tr><td>Pico Neo 4</td><td>✔️ Pico Browser</td><td>passthrough, hand tracking<sup>2</sup></td></tr><tr><td>Oculus Rift 1/2</td><td>✔️ Chrome</td><td></td></tr><tr><td>Hololens 2</td><td>✔️ Edge</td><td>hand tracking, support for AR and VR (in VR mode, background is rendered as well)</td></tr><tr><td>Meta Quest 1/2 via Oculus Link</td><td>✔️ Chrome</td><td>no hand tracking, known issues with repeated refresh of a WebXR session in Chrome</td></tr><tr><td>Looking Glass Portrait</td><td>✔️ Chrome</td><td>requires shim, see samples</td></tr></tbody></table>',3),g=e("thead",null,[e("tr",null,[e("th",null,"Tested AR Device"),e("th",null,"Browser"),e("th",null,"Notes")])],-1),b=e("tr",null,[e("td",null,"Android 10+"),e("td",null,"✔️ Chrome"),e("td")],-1),_=e("tr",null,[e("td",null,"Android 10+"),e("td",null,"✔️ Firefox"),e("td")],-1),f=e("tr",null,[e("td",null,"iOS 15+"),e("td",null,"✔️ WebXR Viewer"),e("td",null,"does not fully implement standards, but supported")],-1),k=e("td",null,"iOS 15+",-1),v=e("td",null,[n("(✔️)"),e("sup",null,"3"),n(" Safari")],-1),y=e("tr",null,[e("td",null,"Hololens 2"),e("td",null,"✔️ Edge"),e("td")],-1),w=e("tr",null,[e("td",null,"Hololens 1"),e("td",null,"❌"),e("td",null,"no WebXR support")],-1),R=e("tr",null,[e("td",null,"Magic Leap 2"),e("td",null,"✔️"),e("td")],-1),A=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Not Tested but Should Work™️"),e("th",null,"Browser"),e("th",null,"Notes")])]),e("tbody",null,[e("tr",null,[e("td",null,"Magic Leap 1"),e("td"),e("td",null,"please let us know if you tried!")])])],-1),x=e("sup",null,"1",-1),T=e("code",null,"chrome://flags/#webxr-navigation-permission",-1),S=e("br",null,null,-1),E=e("sup",null,"2",-1),O=e("br",null,null,-1),j=e("sup",null,"3",-1),q=e("a",{href:"#augmented-reality-and-webxr-on-ios"},"other approaches",-1),W=e("h2",{id:"adding-vr-and-ar-capabilities-to-a-scene",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#adding-vr-and-ar-capabilities-to-a-scene","aria-hidden":"true"},"#"),n(" Adding VR and AR capabilities to a scene")],-1),C=e("p",null,"AR, VR and networking capabilites in Needle Engine are designed to be modular. You can choose to not support any of them, or add only specific features.",-1),X=e("h3",{id:"basic-capabilities",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#basic-capabilities","aria-hidden":"true"},"#"),n(" Basic capabilities")],-1),B=o('<li><p><strong>Enable AR and VR</strong><br> Add a <code>WebXR</code> component.<br><em>Optional:</em> you can set a custom avatar by referencing an <a href="#avatars">Avatar Prefab</a>.<br> By default a very basic <code>DefaultAvatar</code> is assigned.</p></li><li><p><strong>Enable Teleportation</strong><br> Add a <code>TeleportTarget</code> component to object hierarchies that can be teleported on.<br> To exclude specific objects, set their layer to <code>IgnoreRaycasting</code>.</p></li>',2),N=e("strong",null,"Enable going into Miniature Mode",-1),V=e("br",null,null,-1),M=e("br",null,null,-1),P=o('<h3 id="multiplayer" tabindex="-1"><a class="header-anchor" href="#multiplayer" aria-hidden="true">#</a> Multiplayer</h3><ul><li><p><strong>Enable Networking</strong><br> Add a <code>SyncedRoom</code> component.</p></li><li><p><strong>Enable Desktop Viewer Sync</strong><br> Add a <code>SyncedCamera</code> component.</p></li><li><p><strong>Enable XR Avatar Sync</strong><br> Add a <code>WebXRSync</code> component.</p></li><li><p><strong>Enable Voice Chat</strong><br> Add a <code>VoIP</code> component.</p></li></ul><blockquote><p><strong>Note</strong>: these components can be anywhere inside your <code>GltfObject</code> hierarchy. They can also all be on the same GameObject.</p></blockquote>',3),I={href:"https://castle.needle.tools/",target:"_blank",rel:"noopener noreferrer"},D=e("br",null,null,-1),L=o('<h3 id="special-ar-components" tabindex="-1"><a class="header-anchor" href="#special-ar-components" aria-hidden="true">#</a> Special AR Components</h3><ul><li><strong>Define the AR Session Root and Scale</strong><br> Add a <code>WebARSessionRoot</code> component to your root object.<br> Here you can define the user scale to shrink (&lt; 1) or enlarge (&gt; 1) the user in relation to the scene when entering AR.</li></ul><h3 id="controlling-object-display-for-xr" tabindex="-1"><a class="header-anchor" href="#controlling-object-display-for-xr" aria-hidden="true">#</a> Controlling object display for XR</h3><ul><li><p><strong>Define whether an object is visible in Browser, AR, VR, First Person, Third Person</strong><br> Add a <code>XR Flag</code> component to the object you want to control. Change options on the dropdown as needed.</p><p>Common usecases are</p><ul><li>hiding floors when entering AR</li><li>hiding Avatar parts in First or Third Person views (e.g. first-person head shouldn&#39;t be visible).</li></ul></li></ul><h3 id="travelling-between-vr-worlds" tabindex="-1"><a class="header-anchor" href="#travelling-between-vr-worlds" aria-hidden="true">#</a> Travelling between VR worlds</h3>',5),G={href:"https://github.com/immersive-web/navigation",target:"_blank",rel:"noopener noreferrer"},H=e("code",null,"sessiongranted",-1),F=e("p",null,[n("Currently, this is only supported on Oculus Quest 1 and 2 in the Oculus Browser. On other platforms, users will be kicked out of their current immersive session and have to enter VR again on the new page."),e("br"),n(" Requires enabling a browser flag: "),e("code",null,"chrome://flags/#webxr-navigation-permission")],-1),Q=e("strong",null,"Click on objects to open links",-1),U=e("br",null,null,-1),z={href:"https://github.com/needle-tools/needle-engine-samples",target:"_blank",rel:"noopener noreferrer"},K={href:"https://github.com/needle-tools/needle-engine-samples/blob/main/package/Runtime/Needle%20Engine%20Samples~/ClickToOpenWebsite.ts",target:"_blank",rel:"noopener noreferrer"},Y=e("code",null,"ClickToOpenWebsite",-1),Z=o(`<h2 id="avatars" tabindex="-1"><a class="header-anchor" href="#avatars" aria-hidden="true">#</a> Avatars</h2><p>While we don&#39;t currently provide an out-of-the-box integration external avatar systems, you can create application-specific avatars or custom systems.</p><ul><li><strong>Create a custom Avatar</strong><ul><li>Create an empty GameObject as avatar root</li><li>Add an object named <code>Head</code> and add a <code>XRFlag</code> that&#39;s set to Third Person</li><li>Add objects named <code>HandLeft</code> and <code>HandRight</code></li><li>Add your graphics below these objects.</li></ul></li></ul><h3 id="experimental-avatar-components" tabindex="-1"><a class="header-anchor" href="#experimental-avatar-components" aria-hidden="true">#</a> Experimental Avatar Components</h3><p>There&#39;s a number of experimental components to build more expressive Avatars. At this point we recommended duplicating them to make your own variants, since they might be changed or removed at a later point.</p><p><img src="https://user-images.githubusercontent.com/2693840/185243523-57c4b2a9-0ec7-4f88-b53b-585e879d504d.gif" alt="20220817-230858-87dG-Unity_PLjQ"><br><em>Example Avatar Rig with basic neck model and limb constraints</em></p><ul><li><p><strong>Random Player Colors</strong><br> As an example for avatar customization, you can add a <code>PlayerColor</code> component to your renderers.<br> This randomized color is synchronized between players.</p></li><li><p><strong>Eye Rotation</strong><br><code>AvatarEyeLook_Rotation</code> rotates GameObjects (eyes) to follow other avatars and a random target. This component is synchronized between players.</p></li><li><p><strong>Eye Blinking</strong><br><code>AvatarBlink_Simple</code> randomly hides GameObjects (eyes) every few seconds, emulating a blink.</p><p><img src="https://user-images.githubusercontent.com/2693840/185233753-e6de49f0-31c3-4851-9919-551309303ebd.png" alt="image"><br><em>Example Avatar Prefab hierarchy</em></p></li><li><p><strong>Offset Constraint</strong><br><code>OffsetConstraint</code> allows to shift an object in relation to another one in Avatar space. This allows, for example, to have a Body follow the Head but keep rotation levelled. It also allows to construct simple neck models.</p></li><li><p><strong>Limb Constraint</strong><br><code>BasicIKConstraint</code> is a very minimalistic constraint that takes two transforms and a hint. This is useful to construct simple arm or leg chains. As rotation is currently not properly implemented, arms and legs may need to be rotationally symmetric to &quot;look right&quot;. It&#39;s called &quot;Basic&quot; for a reason!</p></li></ul><h2 id="html-content-overlays-in-ar" tabindex="-1"><a class="header-anchor" href="#html-content-overlays-in-ar" aria-hidden="true">#</a> HTML Content Overlays in AR</h2><p>If you want to display different html content whether the client is using a regular browser or using AR or VR, you can just use a set of html classes.<br> This is controlled via HTML element classes. For example, to make content appear on desktop and in AR add a <code>&lt;div class=&quot;desktop ar&quot;&gt; ... &lt;/div&gt;</code> inside the <code>&lt;needle-engine&gt;</code> tag:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>needle-engine</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>desktop ar<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">pointer-events</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>positioning-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>your content for AR and desktop goes here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>only-in-ar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>This will only be visible in AR<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>needle-engine</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Content Overlays are implemented using the optional <code>dom-overlay</code> feature which is usually supported on screen-based AR devices (phones, tablets).</p>`,11),J=e("code",null,".ar-session-active",-1),$={href:"https://www.w3.org/TR/webxr-dom-overlays-1/#css-pseudo-class",target:"_blank",rel:"noopener noreferrer"},ee=e("code",null,":xr-overlay",-1),ne=o(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.only-in-ar</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.ar-session-active .only-in-ar</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>initial<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),te={href:"https://www.w3.org/TR/webxr-dom-overlays-1/#ua-style-sheet-defaults",target:"_blank",rel:"noopener noreferrer"},se=e("em",null,"inside",-1),ae=e("code",null,'class="ar"',-1),oe=e("h2",{id:"image-tracking",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#image-tracking","aria-hidden":"true"},"#"),n(" Image Tracking")],-1),re={href:"https://github.com/immersive-web/marker-tracking/blob/main/explainer.md",target:"_blank",rel:"noopener noreferrer"},le=e("br",null,null,-1),ie=e("ul",null,[e("li",null,[n("Enable "),e("code",null,"WebXR Incubations"),n(" in chrome")]),e("li",null,[n("Add the "),e("code",null,"WebXRImageTracking"),n(" component")])],-1),ce=e("p",null,[n("Without that spec, one can still request camera image access and run custom algorithms to determine device pose."),e("br"),n(" Libraries to add image tracking:")],-1),de={href:"https://github.com/AR-js-org/AR.js",target:"_blank",rel:"noopener noreferrer"},pe={href:"https://github.com/FireDragonGameStudio/NeedleAndARjs",target:"_blank",rel:"noopener noreferrer"},ue={href:"https://github.com/hiukim/mind-ar-js",target:"_blank",rel:"noopener noreferrer"},he=e("h2",{id:"augmented-reality-and-webxr-on-ios",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#augmented-reality-and-webxr-on-ios","aria-hidden":"true"},"#"),n(" Augmented Reality and WebXR on iOS")],-1),me=e("p",null,"Augmented Reality experiences on iOS are somewhat limited, due to Apple currently not supporting WebXR on iOS devices.",-1),ge=e("h3",{id:"musical-instrument-webxr-and-quicklook-support",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#musical-instrument-webxr-and-quicklook-support","aria-hidden":"true"},"#"),n(" Musical Instrument – WebXR and QuickLook support")],-1),be=e("p",null,"Here's an example for a musical instrument that uses Everywhere Actions and thus works in browsers and in AR on iOS devices. It uses spatial audio, animation, and tap interactions.",-1),_e=e("h3",{id:"everywhere-actions-and-other-options-for-ios-ar",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#everywhere-actions-and-other-options-for-ios-ar","aria-hidden":"true"},"#"),n(" Everywhere Actions and other options for iOS AR")],-1),fe=e("p",null,"There's also other options for guiding iOS users to even more capable interactive AR experiences:",-1),ke={start:"3"},ve=e("strong",null,"Exporting content on-the-fly as USDZ files.",-1),ye=e("br",null,null,-1),we={href:"https://castle.needle.tools",target:"_blank",rel:"noopener noreferrer"},Re={href:"https://accurate-tree-observation.glitch.me/",target:"_blank",rel:"noopener noreferrer"},Ae=e("br",null,null,-1),xe=e("strong",null,"Guiding users towards WebXR-compatible browsers on iOS.",-1),Te={href:"https://apps.apple.com/de/app/webxr-viewer/id1295998056",target:"_blank",rel:"noopener noreferrer"},Se=e("p",null,[e("strong",null,"Using camera access and custom algorithms on iOS devices."),e("br"),n(" One can request camera image access and run custom algorithms to determine device pose."),e("br"),n(" While we currently don't provide built-in components for this, here's a few references to libraries and frameworks that we want to try in the future:")],-1),Ee={href:"https://github.com/AR-js-org/AR.js",target:"_blank",rel:"noopener noreferrer"},Oe={href:"https://github.com/FireDragonGameStudio/NeedleAndARjs",target:"_blank",rel:"noopener noreferrer"},je={href:"https://github.com/hiukim/mind-ar-js",target:"_blank",rel:"noopener noreferrer"},qe={href:"https://www.8thwall.com/",target:"_blank",rel:"noopener noreferrer"},We=e("h2",{id:"references",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#references","aria-hidden":"true"},"#"),n(" References")],-1),Ce={href:"https://www.w3.org/TR/webxr/",target:"_blank",rel:"noopener noreferrer"},Xe=e("br",null,null,-1),Be={href:"https://caniuse.com/webxr",target:"_blank",rel:"noopener noreferrer"},Ne=e("br",null,null,-1),Ve={href:"https://developer.apple.com/augmented-reality/quick-look/",target:"_blank",rel:"noopener noreferrer"};function Me(Pe,Ie){const r=l("RouterLink"),c=l("kb"),s=l("ExternalLinkIcon"),i=l("sample");return p(),u("div",null,[m,e("table",null,[g,e("tbody",null,[b,_,f,e("tr",null,[k,v,e("td",null,[n("No full code support, but Needle "),t(r,{to:"/everywhere-actions.html"},{default:a(()=>[n("Everywhere Actions")]),_:1}),n(" are supported for creating dynamic, interactive USDZ files.")])]),y,w,R])]),A,e("p",null,[x,n(": Requires enabling a browser flag: "),T,S,E,n(": Requires enabling a toggle in the Developer settings"),O,j,n(": Uses "),t(r,{to:"/everywhere-actions.html"},{default:a(()=>[n("Everywhere Actions")]),_:1}),n(" or "),q]),W,C,X,e("ul",null,[B,e("li",null,[e("p",null,[N,V,n(" Pointing onto a surface and pressing "),t(c,null,{default:a(()=>[n("A")]),_:1}),n(" on a controller switches between 1:10 scale (miniature mode) and 1:1 scale."),M,n(" We're planning to add a component to have more control over this functionality.")])])]),P,e("blockquote",null,[e("p",null,[e("strong",null,[e("a",I,[n("Castle Builder"),t(s)])]),n(" uses all of the above for a cross-platform multiplayer sandbox experience."),D,n(" — #madebyneedle 💚")])]),L,e("p",null,[n("Needle Engine supports the "),e("a",G,[H,t(s)]),n(" state. This allows users to seamlessly traverse between WebXR applications without leaving an immersive session – they stay in VR or AR.")]),F,e("ul",null,[e("li",null,[Q,U,n(" The "),e("a",z,[n("samples repository"),t(s)]),n(" contains a small script "),e("a",K,[Y,t(s)]),n(" that makes it very easy to build connected worlds.")])]),Z,e("p",null,[n("Use the "),J,n(" class to show/hide specific content while in AR. The "),e("a",$,[ee,n(" pseudo class"),t(s)]),n(" shouldn't be used at this point because using it breaks Mozilla's WebXR Viewer.")]),ne,e("p",null,[n("It's worth noting that the overlay element "),e("a",te,[n("will be always displayed fullscreen while in XR"),t(s)]),n(", independent of styling that has been applied. If you want to align items differently, you should make a container "),se,n(" the "),ae,n(" element.")]),t(i,{src:"https://engine.needle.tools/samples/ar-overlay/"}),oe,e("p",null,[n('WebXR ImageTracking is still in "draft" phase: '),e("a",re,[n("Marker Tracking Explainer"),t(s)]),le,n(" But you can still use WebXR ImageTracking with Needle Engine today:")]),ie,e("p",null,[n("You can find additional documentation in the "),t(r,{to:"/everywhere-actions.html#image-tracking"},{default:a(()=>[n("Everywhere Actions")]),_:1}),n(" section")]),ce,e("ul",null,[e("li",null,[e("a",de,[n("AR.js"),t(s)]),n(" (open source) "),e("ul",null,[e("li",null,[e("a",pe,[n("Experimental AR.js integration"),t(s)]),n(" by FireDragonGameStudio")])])]),e("li",null,[e("a",ue,[n("Mind AR"),t(s)]),n(" (open source)")])]),he,me,e("p",null,[n("Needle Engine's "),t(r,{to:"/everywhere-actions.html"},{default:a(()=>[n("Everywhere Actions")]),_:1}),n(" are designed to fill that gap, bringing automatic interactive capabilities to iOS devices for scenes composed of specific components. They support a subset of the functionality that's available in WebXR, for example spatial audio, image tracking, animations, and more. See "),t(r,{to:"/everywhere-actions.html"},{default:a(()=>[n("the docs")]),_:1}),n(" for more information.")]),ge,be,t(i,{src:"https://engine.needle.tools/samples/musical-instrument"}),_e,fe,e("ol",ke,[e("li",null,[ve,ye,n(" These files can be displayed on iOS devices in AR. When exported from scenes with Everywhere Actions the interactivity is the same, more than sufficient for product configurators, narrative experiences and similar. An example is "),e("a",we,[n("Castle Builder"),t(s)]),n(" where creations (not the live session) can be viewed in AR.")])]),e("blockquote",null,[e("p",null,[e("strong",null,[e("a",Re,[n("Encryption in Space"),t(s)])]),n(" uses this approach. Players can collaboratively place text into the scene on their screens and then view the results in AR on iOS. On Android, they can also interact right in WebXR."),Ae,n(" — #madewithneedle by Katja Rempel 💚")])]),e("ol",null,[e("li",null,[e("p",null,[xe,n(" Depending on your target audience, you can guide users on iOS towards for example Mozilla's "),e("a",Te,[n("WebXR Viewer"),t(s)]),n(" to experience AR on iOS.")])]),e("li",null,[Se,e("ul",null,[e("li",null,[e("a",Ee,[n("AR.js"),t(s)]),n(" (open source) "),e("ul",null,[e("li",null,[e("a",Oe,[n("Experimental AR.js integration"),t(s)]),n(" by FireDragonGameStudio")])])]),e("li",null,[e("a",je,[n("Mind AR"),t(s)]),n(" (open source)")]),e("li",null,[e("a",qe,[n("8th Wall"),t(s)]),n(" (commercial)")])])])]),We,e("p",null,[e("a",Ce,[n("WebXR Device API"),t(s)]),Xe,e("a",Be,[n("caniuse: WebXR"),t(s)]),Ne,e("a",Ve,[n("Apple's Preliminary USD Behaviours"),t(s)])])])}const Le=d(h,[["render",Me],["__file","xr.html.vue"]]);export{Le as default};
