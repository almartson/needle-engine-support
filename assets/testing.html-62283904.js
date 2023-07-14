import{_ as a,M as r,p as l,q as s,R as e,t,N as n,a1 as i}from"./framework-1a844b00.js";const d="/docs/testing/switch-to-mkcert.webp",c={},h=i('<h2 id="testing-on-local-devices" tabindex="-1"><a class="header-anchor" href="#testing-on-local-devices" aria-hidden="true">#</a> Testing on local devices</h2><p>When using our templates, Needle Engine runs a local development server for you. Simply press play, and a website will open in your default browser, ready for testing on your local device. For testing on other devices in the same network, you may have to install a self-signed certificate (see below).</p><p>When using a custom setup / framework, please refer to your framework&#39;s documentation on how to run a secure local development server.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Our local server uses the IP address in your local network (e.g. <code>https://192.168.0.123:3000</code>) instead of <code>localhost:3000</code>. This allows you to quickly view and test your project from mobile devices, VR glasses, and other machines in the same network.</p><p>We&#39;re using HTTPS instead of the older HTTP, because modern powerful web APIs like WebXR require a secure connection – the S stands for &quot;secure&quot;.</p></div><h2 id="setting-up-a-self-signed-certificate-for-development" tabindex="-1"><a class="header-anchor" href="#setting-up-a-self-signed-certificate-for-development" aria-hidden="true">#</a> Setting up a self-signed certificate for development</h2><p>Different operating systems have different security requirements for local development. Typically, displaying a website will work even with a auto-generated untrusted certificate, but browsers may warn about the missing trust and some features are not available. Here&#39;s a summary:</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Installing trusted self-signed certificates on your development devices is recommended for a smooth development experience. Find the steps at the bottom of this page.</p></div>',7),u=e("strong",null,"Default – with auto-generated untrusted certificate",-1),p=e("br",null,null,-1),f=e("em",null,"Displays a certificate warning upon opening the project in a browser.",-1),m={href:"https://github.com/vitejs/vite-plugin-basic-ssl",target:"_blank",rel:"noopener noreferrer"},g=i("<p>We&#39;re using websocket connections to communicate between the browser and the local development server. Websockets require a secure connection (HTTPS) in order to work. Depending on the platform, you might need to set up a custom certificate for local development. Android and Windows don&#39;t need a custom certificate, but iOS and MacOS do.</p><table><thead><tr><th>OS</th><th>Viewing in the browser<br>(with a security warning)</th><th>Automatic reloads</th></tr></thead><tbody><tr><td>Windows</td><td>(✓)</td><td>✓</td></tr><tr><td>Linux</td><td>(✓)</td><td>✓</td></tr><tr><td>Android</td><td>(✓)</td><td>✓</td></tr><tr><td>macOS</td><td>(✓)</td><td>❌</td></tr><tr><td>iOS</td><td>(✓ Safari and Chrome, after page reload)<br>❌ Mozilla XR Viewer</td><td>❌</td></tr><tr><td>Xcode Simulators</td><td>(✓ after page reload)</td><td>❌</td></tr></tbody></table>",2),w=e("strong",null,"With a self-signed, trusted root certificate",-1),v=e("br",null,null,-1),y=e("em",null,"No security warning is displayed. You need to install the generated certificate on your device(s).",-1),b=e("br",null,null,-1),k={href:"https://github.com/liuweiGL/vite-plugin-mkcert",target:"_blank",rel:"noopener noreferrer"},_=i('<table><thead><tr><th>OS</th><th>Viewing in the browser</th><th>Automatic reloads</th></tr></thead><tbody><tr><td>Windows</td><td>✓</td><td>✓</td></tr><tr><td>Linux</td><td>✓</td><td>✓</td></tr><tr><td>Android</td><td>✓</td><td>✓</td></tr><tr><td>macOS</td><td>✓</td><td>✓</td></tr><tr><td>iOS</td><td>✓</td><td>✓</td></tr></tbody></table><h3 id="generating-a-self-signed-development-certificate" tabindex="-1"><a class="header-anchor" href="#generating-a-self-signed-development-certificate" aria-hidden="true">#</a> Generating a self-signed development certificate</h3><ul><li><p>in Unity/Blender, click on &quot;Open Workspace&quot; to open VS Code</p></li><li><p>check that you&#39;re using <code>vite-plugin-mkcert</code> instead of <code>vite-plugin-basic-ssl</code> (the latter doesn&#39;t generate a trusted root certificate, which we need) in your <code>vite.config.ts</code> file:</p><ul><li>open <code>package.json</code></li><li>remove the line with <code>&quot;@vitejs/plugin-basic-ssl&quot;</code> from <code>devDependencies</code></li><li>open a Terminal in VS Code and run <code>npm install vite-plugin-mkcert --save-dev</code> which will add the latest version</li><li>open <code>vite.config.ts</code> and replace <code>import basicSsl from &#39;@vitejs/plugin-basic-ssl&#39;</code> with <code>import mkcert from&#39;vite-plugin-mkcert&#39;</code></li><li>in <code>plugins: [</code>, replace <code>basicSsl(),</code> with <code>mkcert(),</code></li><li>package.json looks like this now: <img src="'+d+'" alt=""></li></ul></li><li><p>run <code>npm run start</code> once from VS Code&#39;s terminal</p><ul><li>on Windows, this will open a new window and guide you through the creation and installation of the certificate</li><li>on MacOS, the terminal prompts for your password and then generates and installs the certificate.</li><li>if you&#39;re getting an error <code>Error: Port 3000 is already in use</code>, please close the server that may still be running from Unity.</li></ul></li><li><p>the generated certificate will automatically be installed on the machine you generated it on.</p></li><li><p>you can stop the terminal process again.</p></li><li><p>from now on, pressing Play in Unity/Blender will use the generated certificate for the local server, and no &quot;security warning&quot; will be shown anymore, since your browser now trusts the local connection.</p></li></ul><h2 id="installing-the-certificate-on-your-development-devices" tabindex="-1"><a class="header-anchor" href="#installing-the-certificate-on-your-development-devices" aria-hidden="true">#</a> Installing the certificate on your development devices</h2><p>On your development devices, you need to <em>install</em> the generated certificate and allow the OS to <em>trust</em> it. This is different for each OS. For each of them, you&#39;ll need the rootCA.pem file that was generated, and send it to the device you want to authenticate.</p><p><strong>On Windows:</strong> find the certificate in <code>Users/&lt;your-user&gt;/.vite-plugin-mkcert/rootCA.pem</code><br><strong>On MacOS:</strong> find the certificate in <code>Users/&lt;your-user&gt;/.vite-plugin-mkcert/rootCA.pem</code></p><p>Send the device to yourself (e.g. via E-Mail, AirDrop, iCloud, USB, Slack, ...) so that you can access it on your development devices.</p><h3 id="installing-the-certificate-on-android" tabindex="-1"><a class="header-anchor" href="#installing-the-certificate-on-android" aria-hidden="true">#</a> Installing the certificate on Android</h3><ol><li>Open the file. You&#39;ll be prompted to install the certificate.</li></ol><h3 id="installing-the-certificate-on-ios-ipados-visionos" tabindex="-1"><a class="header-anchor" href="#installing-the-certificate-on-ios-ipados-visionos" aria-hidden="true">#</a> Installing the certificate on iOS / iPadOS / VisionOS</h3><ol><li>Open the file.</li><li>You&#39;ll be prompted to <em>add</em> the profile to your device. Confirm.</li><li>Go to Settings</li><li>There will be a new entry &quot;Profile&quot;. Select it and allow the profile to be <em>active</em> for this device.</li><li>On iOS / iPadOS, you also need to allow &quot;Root Certificate Trust&quot;. For this, search for <code>Trust</code> or go to <code>Settings &gt; General &gt; About &gt; Info &gt; Certificate Trust Settings</code> and enable full trust for the root certificate.</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The certificate is automatically installed on the machine you generated it on. For other machines in the local network, follow the steps below to also establish a trusted connection.</p></div><h3 id="installing-the-certificate-on-another-macos-machine" tabindex="-1"><a class="header-anchor" href="#installing-the-certificate-on-another-macos-machine" aria-hidden="true">#</a> Installing the certificate on another MacOS machine</h3><ol><li>Open the file. Keychain Access will open and allow you to install the certificate.</li><li>You may have to set &quot;Trust&quot; to &quot;Always allow&quot;.</li></ol><h3 id="installing-the-certificate-on-another-windows-machine" tabindex="-1"><a class="header-anchor" href="#installing-the-certificate-on-another-windows-machine" aria-hidden="true">#</a> Installing the certificate on another Windows machine</h3><ol><li>Open <code>certmgr</code> (&quot;Manage user certificates&quot;) by typing <kbd>Windows key</kbd> + <code>certmgr</code>.</li><li>In the left sidebar, select &quot;Trusted Root Certification Authorities&quot;.</li><li>Right-click on &quot;Certificates&quot; and select &quot;All Tasks &gt; Import&quot;.</li><li>Select the <code>rootCA.pem</code> file (you may have to change the file type to &quot;all&quot;) and follow the instructions.</li></ol>',16);function S(q,O){const o=r("ExternalLinkIcon");return l(),s("div",null,[h,e("p",null,[u,p,f,e("em",null,[t("Uses the "),e("a",m,[t("vite-plugin-basic-ssl"),n(o)]),t(" npm package.")])]),g,e("p",null,[w,v,y,b,e("em",null,[t("Uses the "),e("a",k,[t("vite-plugin-mkcert"),n(o)]),t(" npm package.")])]),_])}const x=a(c,[["render",S],["__file","testing.html.vue"]]);export{x as default};
