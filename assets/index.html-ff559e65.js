import{_ as c,M as a,p as h,q as u,R as e,t,N as n,V as l,Q as p,a1 as s}from"./framework-1a844b00.js";const _={},m=e("p",null,"After following the steps below you will have a fully functional project ready for the web.",-1),g=e("h2",{id:"prerequisites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),t(" Prerequisites")],-1),b=e("p",null,"Below each tool, you find quick links to download the latest version at the time of writing.",-1),f=e("h3",{id:"install-these-tools-for-development",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install-these-tools-for-development","aria-hidden":"true"},"#"),t(" Install these tools for development")],-1),w=e("thead",null,[e("tr",null,[e("th",null,"Tool"),e("th"),e("th")])],-1),y=e("td",null,"Node.js (required)",-1),k=e("br",null,null,-1),v={href:"https://nodejs.org/dist/v18.16.0/node-v18.16.0-x64.msi",target:"_blank",rel:"noopener noreferrer"},x=e("br",null,null,-1),j={href:"https://nodejs.org/dist/v18.16.0/node-v18.16.0.pkg",target:"_blank",rel:"noopener noreferrer"},S=e("td",null,"For running a local development server",-1),N=e("td",null,"VS Code",-1),I=e("br",null,null,-1),E={href:"https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user",target:"_blank",rel:"noopener noreferrer"},T=e("br",null,null,-1),q={href:"https://code.visualstudio.com/sha/download?build=stable&os=darwin-universal",target:"_blank",rel:"noopener noreferrer"},C=e("td",null,"For code editing (optional)",-1),U=e("tr",null,[e("td",null,[e("strong",null,"Supported Editors")]),e("td"),e("td")],-1),A=e("td",null,"Unity",-1),B=e("br",null,null,-1),P=e("br",null,null,-1),O=e("br",null,null,-1),M={href:"https://unity.com/download",target:"_blank",rel:"noopener noreferrer"},D=e("td",null,"For setting up your scenes, components, animations...",-1),R=e("td",null,"Blender",-1),F=e("br",null,null,-1),V=e("br",null,null,-1),L=e("br",null,null,-1),W={href:"https://www.blender.org/download/",target:"_blank",rel:"noopener noreferrer"},Y=e("td",null,"For setting up your scenes, components, animations...",-1),z=e("h3",{id:"install-these-tools-for-production-builds",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install-these-tools-for-production-builds","aria-hidden":"true"},"#"),t(" Install these tools for production builds")],-1),G=e("thead",null,[e("tr",null,[e("th",null,"Tool"),e("th"),e("th")])],-1),Q=e("tr",null,[e("td"),e("td"),e("td")],-1),H=e("td",null,[e("strong",null,"toktx")],-1),K=e("br",null,null,-1),X={href:"https://fwd.needle.tools/needle-engine/toktx/win",target:"_blank",rel:"noopener noreferrer"},J=e("br",null,null,-1),Z={href:"https://fwd.needle.tools/needle-engine/toktx/osx",target:"_blank",rel:"noopener noreferrer"},$=e("br",null,null,-1),ee={href:"https://fwd.needle.tools/needle-engine/toktx/osx-silicon",target:"_blank",rel:"noopener noreferrer"},te=e("br",null,null,-1),ne={href:"https://github.com/KhronosGroup/KTX-Software/releases/tag/v4.1.0-rc3",target:"_blank",rel:"noopener noreferrer"},oe=e("br",null,null,-1),le=e("p",null,[t("After installing the tools above, you might have to restart your machine"),e("br"),t(" so that all environment variables are properly updated.")],-1),re=e("br",null,null,-1),se=e("br",null,null,-1),ae=e("h2",{id:"needle-engine-without-editor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#needle-engine-without-editor","aria-hidden":"true"},"#"),t(" Needle Engine without Editor")],-1),ie=e("p",null,[t("If you just want to work with the Needle Engine runtime and don't want to use any Editor integration just yet then go ahead and install it from npm by running:"),e("br"),e("br"),e("code",null,"npm i @needle-tools/engine")],-1),de={href:"https://engine.needle.tools/new",target:"_blank",rel:"noopener noreferrer"},ce=e("br",null,null,-1),he=e("em",null,"It creates a new project on StackBlitz",-1),ue=e("br",null,null,-1),pe=e("br",null,null,-1),_e=e("h2",{id:"needle-engine-with-unity",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#needle-engine-with-unity","aria-hidden":"true"},"#"),t(" Needle Engine with Unity")],-1),me={class:"custom-container details"},ge=e("summary",null,"Video: Starting from a fresh Unity project",-1),be=s('<h3 id="step-1-make-sure-node.js-and-unity-are-installed" tabindex="-1"><a class="header-anchor" href="#step-1-make-sure-node.js-and-unity-are-installed" aria-hidden="true">#</a> Step 1 • <strong>Make sure node.js and Unity are installed</strong></h3><h3 id="step-2-create-a-new-unity-project" tabindex="-1"><a class="header-anchor" href="#step-2-create-a-new-unity-project" aria-hidden="true">#</a> Step 2 • <strong>Create a new Unity project</strong></h3><p>Open Unity Hub and create a new project. 2021.3 recommended!<br> Make sure to switch it to Linear color space in <em>Project Settings / Player</em>.</p><h3 id="step-3-install-the-unity-integration" tabindex="-1"><a class="header-anchor" href="#step-3-install-the-unity-integration" aria-hidden="true">#</a> Step 3 • <strong>Install the Unity Integration</strong></h3><br>',5),fe=e("strong",null,"Download Needle Engine for Unity",-1),we={href:"https://package-installer.glitch.me/v1/installer/needle/com.needle.engine-exporter?registry=https://packages.needle.tools&scope=com.needle&scope=org.khronos",target:"_blank",rel:"noopener noreferrer"},ye=e("p",null,"Our installer is a .unitypackage that will set everything up for you.",-1),ke=e("p",null,[t("Drop the downloaded .unitypackage file into a Unity project (or double click to open) and confirm that you want to import it."),e("br"),t(" This will set up our Needle Engine Unity integration - wait for the installation and import to finish.")],-1),ve=e("p",null,[t("If the Installation has finished you seems not installed yet click "),e("em",null,"Assets > Refresh"),t(" once or focus another app and then focus Unity again.")],-1),xe=e("p",null,'A window may open stating that "A new scoped registry is now available in the Package Manager.". This is our Needle Package registry where packages are downloaded from. You can safely close that window and continue with the next step below.',-1),je=e("h3",{id:"step-4-create-a-new-scene-from-a-template",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#step-4-create-a-new-scene-from-a-template","aria-hidden":"true"},"#"),t(" Step 4 • "),e("strong",null,"Create a new scene from a template")],-1),Se=e("em",null,"File > New Scene",-1),Ne=e("br",null,null,-1),Ie={href:"https://needle-tiny-starter.glitch.me/",target:"_blank",rel:"noopener noreferrer"},Ee=s('<hr><details class="custom-container details"><summary>Create a new scene from a Scene Template</summary><p>We provide a number of Scene Templates for quickly starting new projects.<br> These allow you to go from idea to prototype in a few clicks.</p><ol><li>Click on <code>File &gt; New Scene</code></li><li>Select one of the templates with (needle) in their name and click <code>Create</code>.</li><li>Click Play to install and startup your new web project.</li></ol><p><img src="https://user-images.githubusercontent.com/2693840/185917275-a147cd90-d515-4086-950d-78358185b1ef.png" alt="20220822-140539-wqvW-Unity_oC0z-needle"></p></details>',2),Te={class:"custom-container details"},qe=s('<summary>Create a new scene from scratch</summary><p>If you don&#39;t want to start from a scene template, you can follow these steps.<br> Effectively, we&#39;re going to recreate the &quot;Minimal (Needle)&quot; template that&#39;s shipping with the package.</p><ol><li><p><strong>Create a new empty scene</strong></p></li><li><p><strong>Set up your scene for exporting</strong><br> Add an empty GameObject, name it &quot;Exporter&quot; and add an <code>ExportInfo</code> component to it.<br> In this component you create and quickly access your exported runtime project.<br> It also warns you if any of our packages and modules are outdated or not locally installed in your web project.</p></li></ol><div class="custom-container tip"><p class="custom-container-title">Note</p><p>By default, the project name matches the name of your scene. If you want to change that, you can enter a <code>Directory Name</code> where you want to create your new runtime project. The path is relative to your Unity project.</p></div>',4),Ce={start:"3"},Ue=e("strong",null,"Choose a web project template",-1),Ae={href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},Be=e("li",null,[e("p",null,"Click Play to install and start your new web project")],-1),Pe=s('<br><br><h2 id="needle-engine-with-blender" tabindex="-1"><a class="header-anchor" href="#needle-engine-with-blender" aria-hidden="true">#</a> Needle Engine with Blender</h2><h3 id="step-1-make-sure-node.js-and-blender-3.3-3.4-or-3.5-are-installed" tabindex="-1"><a class="header-anchor" href="#step-1-make-sure-node.js-and-blender-3.3-3.4-or-3.5-are-installed" aria-hidden="true">#</a> Step 1 • <strong>Make sure node.js and Blender 3.3, 3.4 or 3.5 are installed</strong></h3><h3 id="step-2-download-and-install-our-addon-for-blender" tabindex="-1"><a class="header-anchor" href="#step-2-download-and-install-our-addon-for-blender" aria-hidden="true">#</a> Step 2 • Download and Install our Addon for Blender</h3><br>',6),Oe=e("strong",null,"Download Needle Engine for Blender",-1),Me=e("p",null,[t("The Blender addon is downloaded as a zip file. In Blender go to "),e("em",null,"File / Settings / Add-ons"),t(" and click the "),e("code",null,"Install"),t(" button. Then select the downloaded zip to install it.")],-1),De={id:"step-3-read-needle-engine-for-blender-alpha",tabindex:"-1"},Re=e("a",{class:"header-anchor",href:"#step-3-read-needle-engine-for-blender-alpha","aria-hidden":"true"},"#",-1),Fe=s('<br><br><br><h2 id="questions" tabindex="-1"><a class="header-anchor" href="#questions" aria-hidden="true">#</a> Questions?</h2><details class="custom-container details"><summary>The local website shows a warning: website not secure</summary><p>You might see a warning in your browser about SSL Security depending on your local configuration.<br> This is because while the connection is encrypted, by default there&#39;s no SSL certificate that the browser can validate.<br> If that happens: click <code>Advanced</code> and <code>Proceed to Site</code>. Now you should see your scene in the browser!</p></details><details class="custom-container details"><summary>Something is not working as expected? Where can I see logs?</summary><p>Keep an eye for console warnings! We log useful details about recommended project settings and so on. For example, your project should be set to Linear color space (not Gamma), and we&#39;ll log an error to the Unity console if that&#39;s not the case.</p></details>',6),Ve=e("h2",{id:"what-s-next",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-s-next","aria-hidden":"true"},"#"),t(" What's next?")],-1),Le=e("li",null,[e("a",{href:"../deployment"},"Deploy your website to the web")],-1),We=e("br",null,null,-1),Ye={href:"https://discord.needle.tools",target:"_blank",rel:"noopener noreferrer"};function ze(Ge,Qe){const o=a("ExternalLinkIcon"),r=a("RouterLink"),i=a("video-embed"),d=a("needle-button");return h(),u("div",null,[m,g,b,f,e("table",null,[w,e("tbody",null,[e("tr",null,[y,e("td",null,[t("16.x or 18.x "),k,e("a",v,[t("Windows"),n(o)]),t(),x,t(),e("a",j,[t("MacOS"),n(o)])]),S]),e("tr",null,[N,e("td",null,[t("any version"),I,e("a",E,[t("Windows"),n(o)]),t(),T,t(),e("a",q,[t("MacOS"),n(o)])]),C]),U,e("tr",null,[A,e("td",null,[t("2020.3.16+ "),B,t("2021.3+ "),P,t("2022.2+"),O,e("a",M,[t("Get Unity Hub"),n(o)])]),D]),e("tr",null,[R,e("td",null,[t("3.3"),F,t("3.4"),V,t("3.5"),L,e("a",W,[t("Get Blender"),n(o)])]),Y])])]),z,e("table",null,[G,e("tbody",null,[Q,e("tr",null,[H,e("td",null,[t("4.1"),K,e("a",X,[t("Windows"),n(o)]),t(),J,t(),e("a",Z,[t("MacOS"),n(o)]),t(),$,t(),e("a",ee,[t("Mac OS Apple Silicon"),n(o)]),t(),te,t(),e("a",ne,[t("Other Releases"),n(o)])]),e("td",null,[t("For texture compression (recommended) "),oe,t("You can read more about that "),n(r,{to:"/getting-started/deployment.html#production-builds"},{default:l(()=>[t("here")]),_:1}),t(" in our docs")])])])]),le,re,se,ae,ie,e("p",null,[t("To quickly test Needle Engine in the browser use "),e("a",de,[t("engine.needle.tools/new"),n(o)]),ce,he]),ue,pe,_e,e("details",me,[ge,n(i,{src:"https://www.youtube.com/watch?v=gZX_sqrne8U",limit_height:""}),t(),n(i,{src:"https://www.youtube.com/watch?v=3dB-d1Jo_Mk",limit_height:""})]),be,n(d,{href:"https://engine.needle.tools/downloads/unity"},{default:l(()=>[fe]),_:1}),t(),e("a",we,[t("Alternative"),n(o)]),t(),ye,ke,ve,xe,je,e("p",null,[t("Select "),Se,t(" and choose from one of the Needle templates."),Ne,t(" We recommend the "),e("a",Ie,[t("Collab Sandbox"),n(o)]),t(" template which is a great way to get started with interactivity, multiplayer,and adding assets.")]),Ee,e("details",Te,[qe,e("ol",Ce,[e("li",null,[e("p",null,[Ue,t(" Now, select a web project template for your project. The default template is based on "),e("a",Ae,[t("Vite"),n(o)]),t(", a fast web app bundler.")])]),Be])]),Pe,n(d,{href:"https://engine.needle.tools/downloads/blender"},{default:l(()=>[Oe]),_:1}),Me,e("h3",De,[Re,t(" Step 3 • Read "),n(r,{to:"/blender/"},{default:l(()=>[t("Needle Engine for Blender Alpha")]),_:1})]),Fe,e("p",null,[t("Please also have a look at "),n(r,{to:"/faq.html"},{default:l(()=>[t("our FAQ")]),_:1}),t(" if your question is not answered here.")]),p(`
## Option 1: Quick Start — Starter Project ⚡
1. **Download or Clone this repository**  
   It's set up with the right packages and settings to get you started right away.  

   _Clone with HTTPS:_ \`\`https://github.com/needle-tools/needle-engine-support.git\`\`  
   _OR clone with SSH:_ \`\`git@github.com:needle-tools/needle-engine-support.git\`\`  
   _OR download directly:_ <a href="https://github.com/needle-tools/needle-engine-support/archive/refs/heads/main.zip" target="_blank">Download Repository</a>
   
  
2. **Open the starter project**  
  Open \`starter/Needle Engine Starter 2020_3\` for a full sandbox project that's ready to run (including a couple of simple example scenes for lightmaps and custom shaders).  
  This is a sandbox builder project! It already comes with multi-player capabilities, and works across mobile, desktop, VR and AR.  

3. **Press Play**  
  Make sure the scene CollaborativeSandbox is open, and press Play! This will automatically do some setup steps and start a local server.  
  Once the setup is complete, a browser window will open, and your project is live.  
  From now on, all changes you do in Unity will be immediately visible in your browser.  

    > **Note**: Your browser might warn you about an untrusted SSL connection. Don't worry, the connection is still encrypted – please click "Advance" if your browser asks you to verify that you're sure you want to visit your server.  

4. **Make it your own**  
  Add assets and components, play around with lighting, add scripts and logic – this is your world now!  
  You can also [publish it on the web for free](#deploy-your-project-to-glitch-) so that others can join you.  
`),Ve,e("ul",null,[e("li",null,[n(r,{to:"/export.html"},{default:l(()=>[t("Exporting 3D objects and content")]),_:1})]),e("li",null,[n(r,{to:"/project-structure.html"},{default:l(()=>[t("Project Structure")]),_:1})]),Le,e("li",null,[n(r,{to:"/getting-started/typescript-essentials.html"},{default:l(()=>[t("Typescript Essentials")]),_:1})]),e("li",null,[n(r,{to:"/getting-started/for-unity-developers.html"},{default:l(()=>[t("Needle Engine for Unity Developers")]),_:1})]),e("li",null,[n(r,{to:"/scripting.html"},{default:l(()=>[t("Scripting Reference")]),_:1})])]),e("p",null,[t("In case you need more troubleshooting help, please see the "),n(r,{to:"/faq.html"},{default:l(()=>[t("Questions and Answers")]),_:1}),t(" section."),We,t(" You can also join our "),e("a",Ye,[t("Discord Community"),n(o)])])])}const Ke=c(_,[["render",ze],["__file","index.html.vue"]]);export{Ke as default};
