import{_ as n,M as o,p as d,q as a,R as t,t as e,N as s}from"./framework-1a844b00.js";const r={},u=t("p",null,[e("The "),t("code",null,"<needle-engine>"),e(" web-component comes with a nice collection of built-in attributes that can be used to modify the look and feel of the loaded scene without the need to add or edit the three.js scene directly."),t("br"),e(" The table below shows a list of the most important ones:")],-1),c=t("thead",null,[t("tr",null,[t("th",null,"Attribute"),t("th",null,"Description")])],-1),i=t("tr",null,[t("td",null,[t("strong",null,"Loading")]),t("td")],-1),h=t("tr",null,[t("td",null,[t("code",null,"src")]),t("td",null,[e("Path to one or multiple glTF or glb files."),t("br"),e("Supported types are "),t("code",null,"string"),e(", "),t("code",null,"string[]"),e(" or a stringified array ("),t("code",null,","),e(" separated)")])],-1),_=t("tr",null,[t("td",null,[t("code",null,"dracoDecoderPath")]),t("td",null,"URL to the draco decoder")],-1),g=t("td",null,[t("code",null,"dracoDecoderType")],-1),m=t("code",null,"wasm",-1),f=t("code",null,"js",-1),p={href:"https://threejs.org/docs/#examples/en/loaders/DRACOLoader.setDecoderConfig",target:"_blank",rel:"noopener noreferrer"},b=t("tr",null,[t("td",null,[t("code",null,"ktx2DecoderPath")]),t("td",null,"URL to the KTX2 decoder")],-1),y=t("tr",null,[t("td",null,[t("strong",null,"Rendering")]),t("td")],-1),v=t("tr",null,[t("td",null,[t("code",null,"skybox-image")]),t("td",null,"URL to a skybox image (background image)")],-1),w=t("tr",null,[t("td",null,[t("code",null,"environment-image")]),t("td",null,"optional, URL to a environment image (environment light)")],-1),x=t("tr",null,[t("td",null,[t("strong",null,"Interaction")]),t("td")],-1),k=t("tr",null,[t("td",null,[t("code",null,"autoplay")]),t("td",null,[e("add or set to "),t("code",null,"true"),e(" to auto play animations e.g. "),t("code",null,"<needle-engine autoplay")])],-1),L=t("tr",null,[t("td",null,[t("code",null,"camera-controls")]),t("td",null,[e("add or set to "),t("code",null,"true"),e(" to automatically add OrbitControls if no camera controls are found in the scene")])],-1),N=t("tr",null,[t("td",null,[t("code",null,"auto-rotate")]),t("td",null,[e("add to enable auto-rotate (only used with "),t("code",null,"camera-controls"),e(")")])],-1),D=t("tr",null,[t("td",null,[t("strong",null,"Events")]),t("td")],-1),R=t("tr",null,[t("td",null,[t("code",null,"loadstart")]),t("td",null,[e("Name of the function to call when loading starts. Note that the arguments are "),t("code",null,"(ctx:Context, evt:Event)"),e(". You can call "),t("code",null,"evt.preventDefault()"),e(" to hide the default loading overlay")])],-1),E=t("tr",null,[t("td",null,[t("code",null,"progress")]),t("td",null,"Name of the function to call when loading updates")],-1),T=t("tr",null,[t("td",null,[t("code",null,"loadfinished")]),t("td",null,"Name of the function to call when loading finishes")],-1),C=t("tr",null,[t("td",null,[t("strong",null,"Internal")]),t("td")],-1),U=t("tr",null,[t("td",null,[t("code",null,"hash")]),t("td",null,"Used internally, is appended to the files being loaded to force an update (e.g. when the browser has cached a glb file). Should not be edited manually.")],-1);function j(I,A){const l=o("ExternalLinkIcon");return d(),a("div",null,[u,t("table",null,[c,t("tbody",null,[i,h,_,t("tr",null,[g,t("td",null,[e("draco decoder type. Options are "),m,e(" or "),f,e(". See "),t("a",p,[e("three.js documentation"),s(l)])])]),b,y,v,w,x,k,L,N,D,R,E,T,C,U])])])}const O=n(r,[["render",j],["__file","needle-engine-attributes.html.vue"]]);export{O as default};