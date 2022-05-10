var We=Object.defineProperty,qe=Object.defineProperties;var Ue=Object.getOwnPropertyDescriptors;var me=Object.getOwnPropertySymbols;var He=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable;var re=(e,t,n)=>t in e?We(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))He.call(t,n)&&re(e,n,t[n]);if(me)for(var n of me(t))Xe.call(t,n)&&re(e,n,t[n]);return e},C=(e,t)=>qe(e,Ue(t));var fe=(e,t,n)=>(re(e,typeof t!="symbol"?t+"":t,n),n);import{X as ye,C as Ye,p as ge,a as Ze,S as Je,T as Ke,Q as Qe,o as se,b as et,c as tt,Z as nt,H as ot,M as we,d as K,G as rt,I as st,e as at,f as Q,s as it,w as lt,g as ct,u as D,j as a,h as F,r as N,D as dt,O as ut,i as B,V as ht,k as pt,l as q,A as mt,m as P,n as $,F as G,q as k,N as ae,t as xe,P as ie,v as le,x as M,y as ce,z as be,B as Ce,E as ve,L as ft,R as _e,J as yt,K as gt,U as wt,W as xt,Y as Pe,_ as bt,$ as Se,a0 as Ct,a1 as vt,a2 as _t,a3 as Pt}from"./vendor.bb7c3d5f.js";const St=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};St();const Lt="modulepreload",Le={},kt="./",T=function(t,n){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=`${kt}${o}`,o in Le)return;Le[o]=!0;const r=o.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${s}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":Lt,r||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),r)return new Promise((l,c)=>{i.addEventListener("load",l),i.addEventListener("error",c)})})).then(()=>t())},zt=C(g({},ye.defaultProps),{loaders:{type:"array",value:[],compare:!0},spacer:{type:"number",value:5,compare:!0},rows:{type:"number",value:0,compare:!0},columns:{type:"number",value:0,compare:!0},concurrency:{type:"number",value:10,compare:!1},text:{type:"boolean",value:!1,compare:!0},onClick:{type:"function",value:null,compare:!0},onHover:{type:"function",value:null,compare:!0}});function It(e,t,n=[0,0],o=1){const[r,s]=n,i=e*o+r,l=t*o+s;return[r,l,i,s]}function Et(e){const[t]=e,{width:n,height:o}=t.data;return e.forEach(({data:r})=>{if((r==null?void 0:r.width)!==n||(r==null?void 0:r.height)!==o)throw new Error("Grid data is not same shape.")}),{width:n,height:o}}function ke(e){const{loaders:t,selections:n=[]}=e;let{concurrency:o}=e;return o&&n.length>0&&(o=Math.ceil(o/n.length)),ge(t,async s=>{const i=n.map(c=>s.loader.getRaster({selection:c})),l=await Promise.all(i);return C(g({},s),{data:{data:l.map(c=>c.data),width:l[0].width,height:l[0].height}})},{concurrency:o})}class de extends Ye{initializeState(){this.state={gridData:[],width:0,height:0},ke(this.props).then(t=>{const{width:n,height:o}=Et(t);this.setState({gridData:t,width:n,height:o})})}updateState({props:t,oldProps:n,changeFlags:o}){const{propsChanged:r}=o,s=typeof r=="string"&&r.includes("props.loaders"),i=t.selections!==n.selections;(s||i)&&ke(this.props).then(l=>{this.setState({gridData:l})})}getPickingInfo({info:t}){if(!t.coordinate)return t;const n=this.props.spacer||0,{width:o,height:r}=this.state,[s,i]=t.coordinate,l=Math.floor(i/(r+n)),c=Math.floor(s/(o+n));return t.gridCoord={row:l,column:c},t}renderLayers(){const{gridData:t,width:n,height:o}=this.state;if(n===0||o===0)return null;const{rows:r,columns:s,spacer:i=0,id:l=""}=this.props,c=t.map(d=>{const h=d.row*(o+i),u=d.col*(n+i),m={channelData:d.data,bounds:It(n,o,[u,h]),id:`${l}-GridLayer-${d.row}-${d.col}`,dtype:d.loader.dtype||"Uint16",pickable:!1,extensions:[new Ze]};return new ye(g(g({},this.props),m))});if(this.props.pickable){const[d,h]=[0,0],u=r*(o+i),m=s*(n+i),p={data:[{polygon:[[h,d],[m,d],[m,u],[h,u]]}],getPolygon:S=>S.polygon,getFillColor:[0,0,0,0],getLineColor:[0,0,0,0],pickable:!0,id:`${l}-GridLayer-picking`},v=new Je(g(g({},this.props),p));c.push(v)}if(this.props.text){const d=new Ke({id:`${l}-GridLayer-text`,data:t,getPosition:h=>[h.col*(n+i),h.row*(o+i)],getText:h=>h.name,getColor:[255,255,255,255],getSize:16,getAngle:0,getTextAnchor:"start",getAlignmentBaseline:"top"});c.push(d)}return c}}de.layerName="GridLayer";de.defaultProps=zt;class Rt{constructor(t,n=100){fe(this,"cache");this.store=t,this.cache=new Qe({maxSize:n})}getItem(...t){const[n,o]=t;if(this.cache.has(n))return this.cache.get(n);const r=this.store.getItem(n,o).catch(s=>{throw this.cache.delete(n),s});return this.cache.set(n,r),r}async containsItem(t){return this.cache.has(t)||this.store.containsItem(t)}keys(){return this.store.keys()}deleteItem(t){throw new Error("deleteItem not implemented")}setItem(t,n){throw new Error("setItem not implemented")}}const Y=6,j={cyan:"#00FFFF",yellow:"#FFFF00",magenta:"#FF00FF",red:"#FF0000",green:"#00FF00",blue:"#0000FF",white:"#FFFFFF"},Ot=[j.magenta,j.green],Mt=[j.red,j.green,j.blue],ze=Object.values(j).slice(0,-2);async function Dt(e){let t;if(typeof e=="string"){let n;if(e.endsWith(".json")){const[{ReferenceStore:o},r]=await Promise.all([T(()=>import("./index.949b4e0f.js"),[]),fetch(e).then(s=>s.json())]);n=o.fromJSON(r)}else{const o=new URL(e);n=new ot(o.origin),t=o.pathname.slice(1)}return{store:new Rt(n),path:t}}return{store:e,path:t}}async function At(e){const{store:t,path:n}=await Dt(e);return se(t,n).catch(o=>{if(o instanceof et)return tt({store:t});throw o})}const $t=new TextDecoder;function Ie(e,t){return e.store.getItem(U(e.path,t,".zattrs")).then(n=>$t.decode(n)).then(n=>JSON.parse(n))}async function Ee(e,t){const{datasets:n}=t[0]||[{path:"0"}],o=await Promise.all(n.map(({path:r})=>e.getItem(r)));if(o.every(r=>r instanceof nt))return o;throw Error("Multiscales metadata included a path to a group.")}function ue(e){e.startsWith("#")&&(e=e.slice(1));const t=parseInt(e.slice(0,2),16),n=parseInt(e.slice(2,4),16),o=parseInt(e.slice(4,6),16);return[t,n,o]}function Z(e){return Array.from({length:e},(t,n)=>n)}function jt(e,t=" "){for(;e.length>0&&t.includes(e.charAt(e.length-1));)e=e.substr(0,e.length-1);return e}function U(...e){return e.filter(Boolean).map(t=>jt(t,"/")).join("/")}function Ft(e,t){return(!t||t.length!=e.shape.length)&&(t=e.shape.slice(0,-2).map((o,r)=>""+r).concat(["y","x"])),t}function ee(e){const t=[{type:"time",name:"t"},{type:"channel",name:"c"},{type:"space",name:"z"},{type:"space",name:"y"},{type:"space",name:"x"}];function n(r){return r==="t"?"time":r==="c"?"channel":"space"}let o=t;return e[0].axes&&(o=e[0].axes.map(r=>{if(typeof r=="string")return{name:r,type:n(r)};const{name:s,type:i}=r;return{name:s,type:i!=null?i:n(s)}})),o}function te(e){return e.map(n=>n.name)}function Re(e,t){return t||(e<=Y?t=Array(e).fill(!0):t=[...Array(Y).fill(!0),...Array(e-Y).fill(!1)]),t}function Oe(e,t){let n=[];if(e==1)n=[j.white];else if(e==2)n=Ot;else if(e===3)n=Mt;else if(e<=Y)n=ze.slice(0,e);else{n=Array(e).fill(j.white);const o=t.flatMap((r,s)=>r?s:[]);for(const[r,s]of o.entries())n[s]=ze[r]}return n}function Me(e){const t=e[e.length-1];return t===3||t===4}function ne(e){const t=Me(e.shape),[n,o]=e.chunks.slice(t?-3:-2),r=Math.min(n,o);return 2**Math.floor(Math.log2(r))}function Nt([e,t],[n,o],r,s){const i=(n-s*2)/e,l=(o-s*2)/t;return{zoom:Math.min(r,Math.log2(Math.min(i,l))),target:[e/2,t/2,0]}}function Tt(e){return Array.isArray(e)?e.length===16&&e.every(t=>typeof t=="number"):!1}function J(e){if(!e)return we.IDENTITY;const t=new we;try{const n=typeof e=="string"?JSON.parse(e):e;if(!Tt(n))throw Error("Invalid modelMatrix size. Must be 16.");t.setRowMajor(...n)}catch{const n=`Failed to parse modelMatrix. Got ${JSON.stringify(e)}, using identity.`;console.warn(n)}return t}async function he(e,t){if(e.dtype==="Uint8")return[0,255];const{data:n}=await e.getRaster({selection:t});let o=1/0,r=-1/0;for(let s=0;s<n.length;s++)n[s]>r&&(r=n[s]),n[s]<o&&(o=n[s]);return o===r&&(o=0,r=1),[o,r]}async function De(e,t,n,o){const r=o!=null?o:e.shape.map(()=>0);if(e.shape[t]!==n.length)throw new Error("provided visibilities don't match number of channels");return Promise.all(n.map(async(i,l)=>{if(!i)return;const c=[...r];return c[t]=l,he(e,c)}))}async function Vt(e,t,n){var _,R,x,I;const o=e.acquisition?parseInt(e.acquisition):void 0;let r=[];if(!(n==null?void 0:n.images))throw Error("Well .zattrs missing images");if(!t.path)throw Error("Cannot inspect zarr path to open well.");const[s,i]=t.path.split("/").filter(Boolean).slice(-2);let{images:l}=n;const c=l.flatMap(b=>b.acquisition?[b.acquisition]:[]);if(c.length>1){const b=t.path.replace(`${s}/${i}`,""),O=await(await se(t.store,b)).attrs.asObject();r=(R=(_=O==null?void 0:O.plate)==null?void 0:_.acquisitions)!=null?R:[],o&&c.includes(o)&&(l=l.filter(W=>W.acquisition===o))}const d=l.map(b=>b.path),h=Math.ceil(Math.sqrt(d.length)),u=Math.ceil(d.length/h),m=await t.getItem(d[0]).then(b=>b.attrs.asObject());if(!("multiscales"in m))throw Error("Path for image is not valid.");let w=m.multiscales[0].datasets[0].path;const p=d.map(b=>t.getItem(U(b,w))),v=await Promise.all(p),S=ee(m.multiscales),z=te(S),E=ne(v[0]),L=Z(u).flatMap(b=>Z(h).map(A=>{const O=A+b*h;return{name:String(O),row:b,col:A,loader:new K(v[O],z,E)}}));let f;"omero"in m?f=pe(m.omero,S):f=await $e(L[0].loader,z);const y=C(g({loaders:L},f),{axis_labels:z,loader:[L[0].loader],model_matrix:J(e.model_matrix),defaults:{selection:f.defaultSelection,colormap:(x=e.colormap)!=null?x:"",opacity:(I=e.opacity)!=null?I:1},name:`Well ${s}${i}`});return r.length>0&&(y.acquisitions=r,y.acquisitionId=o||-1),y.rows=u,y.columns=h,y.onClick=b=>{let A=b.gridCoord;if(!A)return;const{row:O,column:W}=A;let V;if(typeof e.source=="string"&&t.path&&!isNaN(O)&&!isNaN(W)){const X=O*h+W;V=U(e.source,d[X])}e.onClick?(delete b.layer,b.imageSource=V,e.onClick(b)):V&&window.open(window.location.origin+window.location.pathname+"?source="+V)},y}async function Ae(e,t,n){var _,R;if(!("columns"in n)||!("rows"in n))throw Error("Plate .zattrs missing columns or rows");const o=n.rows.map(x=>x.name),r=n.columns.map(x=>x.name),s=n.wells.map(x=>x.path),i=await Ie(t,s[0]);if(!("well"in i))throw Error("Path for image is not valid, not a well.");const l=i.well.images[0].path,c=await t.getItem(U(s[0],l)).then(x=>x.attrs.asObject());if(!("multiscales"in c))throw Error("Path for image is not valid.");const{datasets:d}=c.multiscales[0],h=d[d.length-1].path;async function u(x){const I=await Ie(t,x);return U(x,I.well.images[0].path)}const m=await Promise.all(s.map(u)),w=([x,I])=>t.getItem(I).then(b=>[x,b]),p=await ge(m.map(x=>[x,U(x,h)]),w,{concurrency:10}),v=await Promise.all(p),S=ee(c.multiscales),z=te(S),E=ne(v[0][1]),L=v.map(x=>{const[I,b]=x[0].split("/");return{name:`${I}${b}`,row:o.indexOf(I),col:r.indexOf(b),loader:new K(x[1],z,E)}});let f;"omero"in c?f=pe(c.omero,S):f=await $e(L[0].loader,z);const y=C(g({loaders:L},f),{axis_labels:z,loader:[L[0].loader],model_matrix:J(e.model_matrix),defaults:{selection:f.defaultSelection,colormap:(_=e.colormap)!=null?_:"",opacity:(R=e.opacity)!=null?R:1},name:n.name||"Plate",rows:o.length,columns:r.length});return y.onClick=x=>{let I=x.gridCoord;if(!I)return;const{row:b,column:A}=I;let O;typeof e.source=="string"&&t.path&&!isNaN(b)&&!isNaN(A)&&(O=U(e.source,o[b],r[A])),e.onClick?(delete x.layer,x.imageSource=O,e.onClick(x)):O&&window.open(window.location.origin+window.location.pathname+"?source="+O)},y}async function Bt(e,t,n){var m;const{name:o,opacity:r=1,colormap:s=""}=e,i=await Ee(t,n.multiscales),l=ee(n.multiscales),c=te(l),d=pe(n.omero,l),h=ne(i[0]),u=i.map(w=>new K(w,c,h));return C(g({loader:u,axis_labels:c,model_matrix:J(e.model_matrix),defaults:{selection:d.defaultSelection,colormap:s,opacity:r}},d),{name:(m=d.name)!=null?m:o})}async function $e(e,t){const n=t.indexOf("c"),o=e.shape[n],r=Re(o),s=await De(e,n,r),i=Oe(o,r);return{name:"Image",names:Z(o).map(l=>`channel_${l}`),colors:i,contrast_limits:s,visibilities:r,channel_axis:t.includes("c")?t.indexOf("c"):null,defaultSelection:t.map(()=>0)}}function pe({rdefs:e,channels:t,name:n},o){var m,w;const r=(m=e.defaultT)!=null?m:0,s=(w=e.defaultZ)!=null?w:0,i=[],l=[],c=[],d=[];t.forEach((p,v)=>{i.push(p.color),l.push([p.window.start,p.window.end]),c.push(p.active),d.push(p.label||""+v)});const h=o.map(p=>p.type=="time"?r:p.name=="z"?s:0),u=o.findIndex(p=>p.type==="channel");return{name:n,names:d,colors:i,contrast_limits:l,visibilities:c,channel_axis:u,defaultSelection:h}}async function Gt(e,t){const{color:n,contrast_limits:o,visibility:r,name:s,colormap:i="",opacity:l=1}=e,c=t[t.length-1],d=Array(t[0].shape.length).fill(0),h=o!=null?o:await(()=>he(c,d))();return{loader:t,name:s,channel_axis:null,colors:[n!=null?n:j.white],names:["channel_0"],contrast_limits:[h],visibilities:[r!=null?r:!0],model_matrix:J(e.model_matrix),defaults:{selection:d,colormap:i,opacity:l},axis_labels:t[0].labels}}async function Wt(e,t,n){const{names:o,contrast_limits:r,name:s,model_matrix:i,opacity:l=1,colormap:c=""}=e;let{visibilities:d,colors:h}=e;const u=t[0].shape[n];for(const w of[r,d,o,h])if(w&&w.length!==u){const p=Object.keys({channelProp:w})[0];throw Error(`channel_axis is length ${u} and provided channel_axis property ${p} is different size.`)}d=d||Re(u),h=h||Oe(u,d);const m=r!=null?r:await(()=>De(t[t.length-1],n,d))();return{loader:t,name:s,channel_axis:n,colors:h,names:o!=null?o:Z(u).map(w=>`channel_${w}`),contrast_limits:m,visibilities:d,model_matrix:J(i),defaults:{selection:Array(t[0].shape.length).fill(0),colormap:c,opacity:l},axis_labels:t[0].labels}}async function qt(e){var h;const t=await At(e.source);let n,o;if(t instanceof rt){const u=await t.attrs.asObject();if("plate"in u)return Ae(e,t,u.plate);if("well"in u)return Vt(e,t,u.well);if("omero"in u)return Bt(e,t,u);if(Object.keys(u).length===0&&t.path){const m=t.path.slice(0,t.path.lastIndexOf("/")),w=await se(t.store,m),p=await w.attrs.asObject();if("plate"in p)return Ae(e,w,p.plate)}if(!("multiscales"in u))throw Error("Group is missing multiscales specification.");n=await Ee(t,u.multiscales),u.multiscales[0].axes&&(o=ee(u.multiscales))}else n=[t];const{channel_axis:r,labels:s}=Ut(e,o,n[0]),i=ne(n[0]),l=n.map(u=>new K(u,s,i)),[c]=l;if("channel_axis"in e||r>-1)return e=e,Wt(e,l,Number((h=e.channel_axis)!=null?h:r));if(c.shape.length===2||!("channel_axis"in e))return Gt(e,l);throw Error("Failed to load image.")}function Ut(e,t,n){const o=e.axis_labels,r="channel_axis"in e?Number(e.channel_axis):void 0;if(t){const l=o!=null?o:te(t),c=r!=null?r:t.findIndex(d=>d.type==="channel");return{labels:l,channel_axis:c}}const s=o!=null?o:Ft(n),i=r!=null?r:s.indexOf("c");return{labels:s,channel_axis:i}}function je(e){var h;const{selection:t,opacity:n,colormap:o}=e.defaults,r=[],s=[],i=[],l=[],c=e.visibilities.flatMap((u,m)=>u?m:[]);for(const u of c){const m=[...t];Number.isInteger(e.channel_axis)&&(m[e.channel_axis]=u),r.push(m),s.push(ue(e.colors[u])),i.push((h=e.contrast_limits[u])!=null?h:[0,255]),l.push(!0)}const d={id:e.id,selections:r,colors:s,contrastLimits:i,contrastLimitsRange:[...i],channelsVisible:l,opacity:n,colormap:o,modelMatrix:e.model_matrix,onClick:e.onClick};return"loaders"in e?{Layer:de,layerProps:C(g({},d),{loader:e.loader,loaders:e.loaders,columns:e.columns,rows:e.rows}),on:!0}:e.loader.length===1?{Layer:st,layerProps:C(g({},d),{loader:e.loader[0]}),on:!0}:{Layer:at,layerProps:C(g({},d),{loader:e.loader}),on:!0}}var Ht=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",createSourceData:qt,initLayerStateFromSource:je});const Xt={zoom:0,target:[0,0,0],default:!0},Fe=Q([]),Ne=Q(Xt),Te=it(Fe),Ve=ct(e=>Q(C(g({},je(e)),{id:e.id})),(e,t)=>e.id===t.id),Yt=Q(e=>{const t=e(Te);if(t.length===0)return[];const n=t.map(o=>Ve(e(o)));return e(lt(n))});function Zt(e){const{loader:t}=e,[n,o]=Array.isArray(t)?[t[0],t.length]:[t,0],r=Me(n.shape);let[s,i]=n.shape.slice(r?-3:-2);if("loaders"in e&&e.rows&&e.columns){const l=5;s=(s+l)*e.rows,i=(i+l)*e.columns}return{height:s,width:i,maxZoom:o}}function Jt({layers:e}){var s,i;const[t,n]=F(Ne),o=N.exports.useRef(null);if(o.current&&(t==null?void 0:t.default)&&((i=(s=e[0])==null?void 0:s.props)==null?void 0:i.loader)){const{deck:l}=o.current,{width:c,height:d,maxZoom:h}=Zt(e[0].props),u=l.width<400?10:l.width<600?30:50,{zoom:m,target:w}=Nt([c,d],[l.width,l.height],h,u);n({zoom:m,target:w})}const r={preserveDrawingBuffer:!0};return a(dt,{ref:o,layers:e,viewState:t,onViewStateChange:l=>n(l.viewState),views:[new ut({id:"ortho",controller:!0})],glOptions:r})}function Kt(){const t=D(Yt).map(n=>n.on?new n.Layer(n.layerProps):null);return a(Jt,{layers:t})}function Qt({sourceAtom:e,layerAtom:t}){const n=D(e),[o,r]=F(t),s=i=>{i.stopPropagation(),r(l=>{const c=!l.on;return C(g({},l),{on:c})})};return a(B,{"aria-label":`toggle-layer-visibility-${n.id}`,onClick:s,style:{backgroundColor:"transparent",marginTop:"2px",color:`rgb(255, 255, 255, ${o.on?1:.5})`},children:o.on?a(ht,{}):a(pt,{})})}const en=q({root:{borderBottom:"1px solid rgba(150, 150, 150, .125)",backgroundColor:"rgba(150, 150, 150, 0.25)",display:"block",padding:"0 3px",height:27,minHeight:27,overflow:"hidden",transition:"none","&$expanded":{minHeight:27}},content:{margin:0,"&$expanded":{margin:0}},expanded:{}})(mt);function tn({sourceAtom:e,layerAtom:t,name:n}){const r=`layer-controller-${D(e).id}`;return a(en,{"aria-controls":r,id:r,children:P("div",{style:{display:"flex",flexDirection:"row"},children:[a(Qt,{sourceAtom:e,layerAtom:t}),a($,{style:{marginTop:"4px",marginLeft:"5px"},variant:"body2",children:n})]})})}function nn({sourceAtom:e}){const t=D(e),{acquisitionId:n,acquisitions:o}=t;return o?a(G,{children:a(k,{children:P(ae,{fullWidth:!0,style:{fontSize:"0.7em"},onChange:s=>{let i=s.target.value;const l=new URL(window.location.href);i==="-1"?l.searchParams.delete("acquisition"):l.searchParams.set("acquisition",i),window.location.href=decodeURIComponent(l.href)},value:n,children:[a("option",{value:"-1",children:"Filter by Acquisition"},"-1"),o.map(s=>(s=s,P("option",{value:s.id,children:["Acquisition: ",s.name]},s.id)))]})})}):null}function on({sourceAtom:e,layerAtom:t}){const[n,o]=F(e),[r,s]=F(t),[i,l]=N.exports.useState(null),c=p=>{l(p.currentTarget)},d=()=>{l(null)},h=async p=>{d();const v=+p.target.value,S=[...n.defaults.selection];n.channel_axis&&(S[n.channel_axis]=v);let z;if(n.contrast_limits[v])z=n.contrast_limits[v];else{const{loader:E}=r.layerProps,L=Array.isArray(E)?E[E.length-1]:E;z=await he(L,S),o(f=>{const y=[...f.contrast_limits];return y[v]=z,C(g({},f),{contrast_limits:y})})}s(E=>{const{layerProps:L}=E,f=[...L.selections,S],y=[...L.colors,ue(n.colors[v])],_=[...L.contrastLimitsRange,z],R=[...L.channelsVisible,!0];return C(g({},E),{layerProps:C(g({},L),{selections:f,colors:y,contrastLimits:_,contrastLimitsRange:[..._],channelsVisible:R})})})},{names:u}=n,m=Boolean(i),w=m?`layer-${n.id}-add-channel`:void 0;return P(G,{children:[a(B,{onClick:c,"aria-describedby":w,style:{backgroundColor:"transparent",padding:0,zIndex:2,cursor:"pointer"},disabled:r.layerProps.selections.length===Y,children:a(xe,{})}),a(ie,{id:w,open:m,anchorEl:i,onClose:d,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:P(le,{style:{padding:"0px 4px",marginBottom:4,width:"8em"},children:[a($,{variant:"caption",children:"selection: "}),a(M,{}),P(ae,{fullWidth:!0,style:{fontSize:"0.7em"},id:`layer-${n.id}-channel-select`,onChange:h,children:[a("option",{"aria-label":"None",value:"",children:"None"}),u.map((p,v)=>a("option",{value:v,children:p},p))]})]})})]})}const rn=q({root:{color:"white",padding:"10px 0px 5px 0px",marginRight:"5px"},active:{boxshadow:"0px 0px 0px 8px rgba(158, 158, 158, 0.16)"}})(ce);function sn({layerAtom:e}){const[t,n]=F(e),o=(r,s)=>{const i=s;n(l=>C(g({},l),{layerProps:C(g({},l.layerProps),{opacity:i})}))};return a(rn,{value:t.layerProps.opacity,onChange:o,min:0,max:1,step:.01})}const an=q({root:{width:"5.5em",fontSize:"0.7em"}})(be);function ln({sourceAtom:e,layerAtom:t,axisIndex:n,max:o}){const r=D(e),[s,i]=F(t),[l,c]=N.exports.useState(null),d=v=>{c(v.currentTarget)},h=()=>{c(null)},u=v=>{let S=+v.target.value;S<0&&(S=0),S>o&&(S=o),i(z=>{let E=g({},z.layerProps);return E.selections=E.selections.map(L=>{let f=[...L];return f[n]=S,f}),C(g({},z),{layerProps:E})})},m=Boolean(l),w=m?`${n}-index-${r.id}-options`:void 0,p=s.layerProps.selections[0]?s.layerProps.selections[0][n]:1;return P(G,{children:[a(B,{onClick:d,"aria-describedby":w,style:{backgroundColor:"transparent",padding:0,zIndex:2,cursor:"pointer"},children:a(Ce,{})}),a(ie,{id:w,open:m,anchorEl:l,onClose:h,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:P(le,{style:{padding:"0px 4px",marginBottom:4},children:[a($,{variant:"caption",children:"Index:"}),a(M,{}),a(an,{value:p,onChange:u,type:"number",id:"max",fullWidth:!1}),a(M,{})]})})]})}const cn=q({root:{color:"white",padding:"10px 0px 5px 0px",marginRight:"5px"},active:{boxshadow:"0px 0px 0px 8px rgba(158, 158, 158, 0.16)"}})(ce);function dn({sourceAtom:e,layerAtom:t,axisIndex:n,max:o}){const[r,s]=F(t),i=D(e),{axis_labels:l}=i;let c=l[n];(c==="t"||c==="z")&&(c=c.toUpperCase());const[d,h]=N.exports.useState(0);return N.exports.useEffect(()=>{h(r.layerProps.selections[0]?r.layerProps.selections[0][n]:1)},[r.layerProps.selections]),P(G,{children:[P(k,{children:[P(k,{container:!0,justifyContent:"space-between",children:[a(k,{item:!0,xs:10,children:a("div",{style:{width:165,overflow:"hidden",textOverflow:"ellipsis"},children:P($,{variant:"caption",noWrap:!0,children:[c,": ",d,"/",o]})})}),a(k,{item:!0,xs:1,children:a(ln,{sourceAtom:e,layerAtom:t,axisIndex:n,max:o})})]}),a(k,{container:!0,justifyContent:"space-between",children:a(k,{item:!0,xs:12,children:a(cn,{value:d,onChange:(w,p)=>{h(p)},onChangeCommitted:()=>{s(w=>{let p=g({},w.layerProps);return p.selections=p.selections.map(v=>{let S=[...v];return S[n]=d,S}),C(g({},w),{layerProps:p})})},min:0,max:o,step:1})})})]}),a(M,{})]})}function un({sourceAtom:e,layerAtom:t}){const n=D(e),{axis_labels:o,channel_axis:r,loader:s}=n,i=o.slice(0,-2).map((l,c)=>[l,c,s[0].shape[c]]).filter(l=>l[1]===r?!1:l[2]>1).map(([l,c,d])=>a(dn,{sourceAtom:e,layerAtom:t,axisIndex:c,max:d-1},l));return i.length===0?null:P(G,{children:[a(k,{children:i}),a(M,{})]})}const hn=ve(()=>({container:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"2px"},button:{padding:"3px",width:"16px",height:"16px"}})),pn=Object.entries(j).map(([e,t])=>[e,ue(t)]);function mn({handleChange:e}){const t=hn();return a("div",{className:t.container,"aria-label":"color-swatch",children:pn.map(([n,o])=>a(B,{className:t.button,onClick:()=>e(o),children:a(ft,{fontSize:"small",style:{color:`rgb(${o})`}})},n))})}const Be=q({root:{width:"5.5em",fontSize:"0.7em"}})(be);function fn({sourceAtom:e,layerAtom:t,channelIndex:n}){const o=D(e),[r,s]=F(t),[i,l]=N.exports.useState(null),{channel_axis:c,names:d}=o,h=f=>{l(f.currentTarget)},u=()=>{l(null)},m=f=>{s(y=>{const _=[...y.layerProps.colors];return _[n]=f,C(g({},y),{layerProps:C(g({},y.layerProps),{colors:_})})})},w=f=>{const y=f.target.id;let _=+f.target.value;_<0&&(_=0),s(R=>{const x=[...R.layerProps.contrastLimitsRange],I=[...R.layerProps.contrastLimits],[b,A]=x[n],[O,W]=I[n],[V,X]=y==="min"?[_,A]:[b,_];return V>O&&(I[n]=[V,W]),X<W&&(I[n]=[O,X]),x[n]=[V,X],C(g({},R),{layerProps:C(g({},R.layerProps),{contrastLimits:I,contrastLimitsRange:x})})})},p=()=>{s(f=>{const{layerProps:y}=f,_=[...y.colors],R=[...y.contrastLimits],x=[...y.contrastLimitsRange],I=[...y.selections],b=[...y.channelsVisible];return _.splice(n,1),R.splice(n,1),x.splice(n,1),I.splice(n,1),b.splice(n,1),C(g({},f),{layerProps:C(g({},y),{colors:_,selections:I,channelsVisible:b,contrastLimits:R,contrastLimitsRange:x})})})},v=f=>{s(y=>{const _=[...y.layerProps.selections],R=[..._[n]];return Number.isInteger(c)&&(R[c]=+f.target.value,_[n]=R),C(g({},y),{layerProps:C(g({},y.layerProps),{selections:_})})})},S=Boolean(i),z=S?`channel-${n}-${o.name}-options`:void 0,[E,L]=r.layerProps.contrastLimitsRange[n];return P(G,{children:[a(B,{onClick:h,"aria-describedby":z,style:{backgroundColor:"transparent",padding:0,zIndex:2,cursor:"pointer"},children:a(Ce,{})}),a(ie,{id:z,open:S,anchorEl:i,onClose:u,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:P(le,{style:{padding:"0px 4px",marginBottom:4},children:[P("div",{style:{display:"flex",justifyContent:"space-between"},children:[a($,{variant:"caption",children:"remove:"}),a(B,{onClick:p,children:a(_e,{})})]}),a(M,{}),a($,{variant:"caption",children:"selection:"}),a(M,{}),a(ae,{fullWidth:!0,style:{fontSize:"0.7em"},id:`layer-${o.name}-channel-select`,onChange:v,value:r.layerProps.selections[n][c],children:d.map((f,y)=>P("option",{value:y,children:["(",y,") ",f]},f))}),a(M,{}),a($,{variant:"caption",children:"contrast limits:"}),a(M,{}),a(Be,{value:E,onChange:w,type:"number",id:"min",fullWidth:!1}),a(Be,{value:L,onChange:w,type:"number",id:"max",fullWidth:!1}),a(M,{}),a($,{variant:"caption",children:"color:"}),a(M,{}),a("div",{style:{display:"flex",justifyContent:"center"},children:a(mn,{handleChange:m})})]})})]})}function yn({sourceAtom:e,layerAtom:t,channelIndex:n}){const o=D(e),[r,s]=F(t),i=(L,f)=>{s(y=>{const _=[...y.layerProps.contrastLimits];return _[n]=f,C(g({},y),{layerProps:C(g({},y.layerProps),{contrastLimits:_})})})},l=()=>{s(L=>{const f=[...L.layerProps.channelsVisible];return f[n]=!f[n],C(g({},L),{layerProps:C(g({},L.layerProps),{channelsVisible:f})})})},c=r.layerProps,d=[...c.contrastLimits[n]],h=`rgb(${c.colormap?[255,255,255]:c.colors[n]})`,u=c.channelsVisible[n],[m,w]=c.contrastLimitsRange[n],{channel_axis:p,names:v}=o,S=c.selections[n],z=Number.isInteger(p)?S[p]:0,E=v[z];return P(G,{children:[P(k,{container:!0,justifyContent:"space-between",wrap:"nowrap",children:[a(k,{item:!0,xs:10,children:a("div",{style:{width:165,overflow:"hidden",textOverflow:"ellipsis"},children:a($,{variant:"caption",noWrap:!0,children:E})})}),a(k,{item:!0,xs:1,children:a(fn,{sourceAtom:e,layerAtom:t,channelIndex:n})})]}),P(k,{container:!0,justifyContent:"space-between",children:[a(k,{item:!0,xs:2,children:a(B,{style:{color:h,backgroundColor:"transparent",padding:0,zIndex:2},onClick:l,children:u?a(yt,{}):a(gt,{})})}),a(k,{item:!0,xs:10,children:a(ce,{value:d,onChange:i,min:m,max:w,step:.01,style:{padding:"10px 0px 5px 0px",color:h}})})]})]})}const gn=q({root:{padding:"2px 5px",borderLeft:"1px solid rgba(150, 150, 150, .2)",borderRight:"1px solid rgba(150, 150, 150, .2)"}})(wt);function wn({sourceAtom:e,layerAtom:t}){const o=D(t).layerProps.selections.length;return a(gn,{children:P(k,{container:!0,direction:"column",children:[a(nn,{sourceAtom:e,layerAtom:t}),a(k,{children:P(k,{container:!0,justifyContent:"space-between",children:[a(k,{item:!0,xs:3,children:a($,{variant:"caption",children:"opacity:"})}),a(k,{item:!0,xs:8,children:a(sn,{sourceAtom:e,layerAtom:t})})]})}),a(M,{}),a(un,{sourceAtom:e,layerAtom:t}),P(k,{container:!0,justifyContent:"space-between",children:[a(k,{item:!0,xs:3,children:a($,{variant:"caption",children:"channels:"})}),a(k,{item:!0,xs:1,children:a(on,{sourceAtom:e,layerAtom:t})})]}),a(M,{}),a(k,{children:Z(o).map(r=>a(yn,{sourceAtom:e,layerAtom:t,channelIndex:r},r))})]})})}const xn=q({root:{borderBottom:"1px solid rgba(150, 150, 150, .2)",width:200,boxshadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:0,padding:0}},expanded:{padding:1}})(xt);function bn({sourceAtom:e}){const t=D(e),n=Ve(t),{name:o=""}=t;return P(xn,{defaultExpanded:!0,children:[a(tn,{sourceAtom:e,layerAtom:n,name:o}),a(wn,{sourceAtom:e,layerAtom:n})]})}const Cn=ve({root:{zIndex:1,position:"absolute",backgroundColor:"rgba(0, 0, 0, 0.7)",borderRadius:"5px",left:"5px",top:"5px"},scroll:{maxHeight:500,overflowX:"hidden",overflowY:"scroll","&::-webkit-scrollbar":{display:"none",background:"transparent"},scrollbarWidth:"none",flexDirection:"column"}});function vn(){const e=D(Te),[t,n]=N.exports.useReducer(r=>!r,!1),o=Cn();return a("div",{className:o.root,style:{padding:`0px 5px ${t?0:5}px 5px`},children:P(k,{container:!0,direction:"column",alignItems:"flex-start",children:[a(B,{style:{backgroundColor:"transparent",padding:0},onClick:n,children:t?a(xe,{}):a(_e,{})}),a("div",{className:o.scroll,style:{display:t?"none":"flex"},children:e.map(r=>a(bn,{sourceAtom:r},`${r}`))})]})})}const Ge="0.3.0";function _n(){const e=Pe(Fe),t=Pe(Ne);async function n(o){const{createSourceData:r}=await T(()=>Promise.resolve().then(function(){return Ht}),void 0),s=Math.random().toString(36).slice(2),i=await r(o);e(l=>(i.name||(i.name=`image_${Object.keys(l).length}`),[...l,g({id:s},i)]))}return N.exports.useEffect(()=>{const o=new URLSearchParams(window.location.search);if(o.has("source")){const r={};for(const[l,c]of o)r[l]=c;r.source=decodeURIComponent(r.source),n(r);const s=new URL(window.location.href);s.searchParams.set("source",r.source);const i=decodeURIComponent(s.toString());window.location.href!==i&&window.history.pushState(null,"",i)}},[]),N.exports.useEffect(()=>{async function o(){const{imjoyRPC:r}=await T(()=>import("./index.326d27d5.js").then(function(c){return c.i}),[]),s=await r.setupRPC({name:"vizarr",description:"A minimal, purely client-side program for viewing Zarr-based images with Viv & ImJoy.",version:Ge}),i=async c=>n(c),l=async c=>t(c);s.export({add_image:i,set_view_state:l})}window.self!==window.top&&o()},[]),P(G,{children:[a(vn,{}),a(Kt,{})]})}var Pn=bt({palette:{type:"dark",primary:Se,secondary:Se},props:{MuiButton:{size:"small"},MuiButtonBase:{disableRipple:!0},MuiFilledInput:{margin:"dense"},MuiFormControl:{margin:"dense"},MuiFormHelperText:{margin:"dense"},MuiIconButton:{size:"small"},MuiInputBase:{margin:"dense"},MuiInputLabel:{margin:"dense"},MuiOutlinedInput:{margin:"dense"}},overrides:{MuiSlider:{thumb:{"&:focus, &:hover":{boxShadow:"none"},height:11,width:5,borderRadius:"15%",marginLeft:-1}},MuiInput:{underline:{"&&&&:hover:before":{borderBottom:"1px solid #fff"}}},MuiPaper:{root:{backgroundColor:"rgba(0, 0, 0, 0.8)"}},MuiSvgIcon:{root:{width:"0.7em",height:"0.7em"}}}});const oe=new Map;function H(e,t){Ct(e,()=>{if(!oe.has(e)){const o=t().then(r=>r.default).catch(r=>{throw oe.delete(e),r});oe.set(e,o)}return oe.get(e)})}H("lz4",()=>T(()=>import("./lz4.87389b44.js"),[]));H("gzip",()=>T(()=>import("./gzip.87321722.js"),["gzip.87321722.js","pako.esm-856454b6.df899be9.js"]));H("zlib",()=>T(()=>import("./zlib.c77211ff.js"),["zlib.c77211ff.js","pako.esm-856454b6.df899be9.js"]));H("zstd",()=>T(()=>import("./zstd.d76669c6.js"),[]));H("blosc",()=>T(()=>import("./blosc.4ec40f1c.js"),[]));H("jpeg2k",()=>T(()=>import("./jpeg2k.effd323e.js"),[]));console.log(`vizarr v${Ge}: https://github.com/hms-dbmi/vizarr`);vt.render(a(_t,{theme:Pn,children:a(Pt,{children:a(_n,{})})}),document.getElementById("root"));
