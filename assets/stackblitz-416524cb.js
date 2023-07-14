import{_ as h,p as E,q as f,R as g,s as b}from"./framework-1a844b00.js";function w(e){return e.startsWith("@code")?e.replace(/^@code/,"./code-samples/"):e}async function x(e,n,t,o){let s=await(await fetch(n)).text();o&&(s=o(s)),t[e]=s}async function c(e,n,t,o,a){e.push(x(n,t,o,a))}async function y(e,n){const t=[];c(t,"package.json","https://raw.githubusercontent.com/needle-engine/vite-template/main/package.json",e),c(t,"package-lock.json","https://raw.githubusercontent.com/needle-engine/vite-template/main/package-lock.json",e),c(t,"src/styles/style.css","https://raw.githubusercontent.com/needle-engine/vite-template/main/src/styles/style.css",e),c(t,"vite.config.js","https://raw.githubusercontent.com/needle-engine/vite-template/main/vite.config.js",e,o=>o.replace("needlePlugins(command, needleConfig)","needlePlugins(command, needleConfig, { noPoster: true })")),c(t,"tsconfig.json","https://raw.githubusercontent.com/needle-engine/vite-template/main/tsconfig.json",e),c(t,"index.html","https://raw.githubusercontent.com/needle-engine/vite-template/main/index.html",e,o=>o.replace(/\<needle-engine ?\>/,`<needle-engine camera-controls src="${n}">`)),await Promise.all(t)}async function j(e,n){var p,u;let t=`// Generated via ${window.location.href} at ${new Date().toISOString()}
import * as NEEDLE from '@needle-tools/engine';
import * as THREE from 'three';

NEEDLE.ContextRegistry.addContextCreatedCallback((args) => {
  const context = args.context;
  const scene = context.scene;

  const grid = new THREE.GridHelper();
  scene.add(grid);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({ color: 0xdddddd });
  const cube = new THREE.Mesh(geometry, material);
  cube.name = "Cube";
  cube.position.y += 0.5;
  scene.add(cube);
  onAttachExampleScript(cube);

  const remoteSkybox = new NEEDLE.RemoteSkybox();
  remoteSkybox.background = false;
  remoteSkybox.url =
    'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/cyclorama_hard_light_1k.hdr';
  NEEDLE.GameObject.addComponent(grid, remoteSkybox);
});
`;const o=w(n),a=window.location,s=a.pathname.split("/").slice(0,-1).join("/"),i=`${a.origin}${s}/${o}`,r=await(await fetch(i)).text(),d="src/main.ts",l=r.match(/export class\s+?(?<component_name>.+?)\s+extends Behaviour/),m=(u=(p=l==null?void 0:l.groups)==null?void 0:p.component_name)==null?void 0:u.trim();return console.log(m),t+=`

`+r,t+=`
function onAttachExampleScript(obj : THREE.Object3D){
  NEEDLE.GameObject.addComponent(obj, new ${m}());
  `,r.includes("IPointerClickHandler")&&(t+="NEEDLE.GameObject.addNewComponent(obj, NEEDLE.ObjectRaycaster);"),t+=`
}`,e[d]=t,d}const _={props:{file:String},methods:{async openProject(){const e={};await y(e,"https://github.com/needle-engine/vite-template/raw/main/assets/basic.glb");const n=await j(e,this.file),t=n.split("/").pop();StackBlitzSDK.openProject({files:{...e,"index.ts":`import './src/main';
import '${n}';`},template:"node",title:`${t}`,description:"This is a generated project via https://docs.needle.engine. Please note that this feature is experimental(!) and the project might not work as expected."},{newWindow:!0,openFile:n})}}},k={class:"code"};function v(e,n,t,o,a,s){return E(),f("div",null,[g("button",{onClick:n[0]||(n[0]=(...i)=>s.openProject&&s.openProject(...i))}," Open in StackBlitz (Experimental) "),g("div",k,[b(e.$slots,"default")])])}const C=h(_,[["render",v],["__file","stackblitz.vue"]]);export{C as default};
