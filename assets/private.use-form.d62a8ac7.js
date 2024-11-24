import{w as P,o as ye,g as N,p as R,O as we,m as B,c as w,a3 as Ne,ac as Be,r as F,P as be,D as re,B as se,I as Ge,q as X,ad as ue,k as Ee,a as Ie,a7 as Re,h as z,ae as Ve,v as Z,G as _e,R as je,x as Ue}from"./index.bb223e93.js";import{axios as Ke}from"./axios.851393ff.js";import{v as Qe,l as Ye,m as ce,n as Se,o as I,h as Xe,j as Je}from"./QBtn.9787f1ec.js";const Ze={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},et=["beforeShow","show","beforeHide","hide"];function tt({showing:e,canShow:t,hideOnRouteChange:n,handleShow:o,handleHide:i,processOnMount:c}){const l=N(),{props:r,emit:m,proxy:d}=l;let s;function g(h){e.value===!0?f(h):p(h)}function p(h){if(r.disable===!0||h!==void 0&&h.qAnchorHandled===!0||t!==void 0&&t(h)!==!0)return;const v=r["onUpdate:modelValue"]!==void 0;v===!0&&(m("update:modelValue",!0),s=h,R(()=>{s===h&&(s=void 0)})),(r.modelValue===null||v===!1)&&a(h)}function a(h){e.value!==!0&&(e.value=!0,m("beforeShow",h),o!==void 0?o(h):m("show",h))}function f(h){if(r.disable===!0)return;const v=r["onUpdate:modelValue"]!==void 0;v===!0&&(m("update:modelValue",!1),s=h,R(()=>{s===h&&(s=void 0)})),(r.modelValue===null||v===!1)&&C(h)}function C(h){e.value!==!1&&(e.value=!1,m("beforeHide",h),i!==void 0?i(h):m("hide",h))}function E(h){r.disable===!0&&h===!0?r["onUpdate:modelValue"]!==void 0&&m("update:modelValue",!1):h===!0!==e.value&&(h===!0?a:C)(s)}P(()=>r.modelValue,E),n!==void 0&&Qe(l)===!0&&P(()=>d.$route.fullPath,()=>{n.value===!0&&e.value===!0&&f()}),c===!0&&ye(()=>{E(r.modelValue)});const k={show:p,hide:f,toggle:g};return Object.assign(d,k),k}const nt=[Element,String],ot=[null,document,document.body,document.scrollingElement,document.documentElement];function it(e,t){let n=Ye(t);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return ot.includes(n)?window:n}function Gt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function It(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let G;function lt(){if(G!==void 0)return G;const e=document.createElement("p"),t=document.createElement("div");ce(e,{width:"100%",height:"200px"}),ce(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const n=e.offsetWidth;t.style.overflow="scroll";let o=e.offsetWidth;return n===o&&(o=t.clientWidth),t.remove(),G=n-o,G}function Rt(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}function at(){let e=null;const t=N();function n(){e!==null&&(clearTimeout(e),e=null)}return we(n),B(n),{removeTimeout:n,registerTimeout(o,i){n(),Se(t)===!1&&(e=setTimeout(()=>{e=null,o()},i))}}}const rt={dark:{type:Boolean,default:null}};function st(e,t){return w(()=>e.dark===null?t.dark.isActive:e.dark)}function ut(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Ne.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Vt=Be("counter",{state:()=>({forceMapCenter:![],selectedPOI:null,zoomToAll:![],drawerState:![],poi:[],poiLoading:![],rasterLayerSelected:"esritopomap",maptilerKey:"c0j1TUMyrEf9onYEldkv",rasterLayers:[{id:"osm",name:"Open Street Map",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",tileSize:256,type:"raster",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'},{id:"esritopomap",name:"Topographic",url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",tileSize:256,type:"raster",attribution:"Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"},{id:"esrisatellite",name:"Satellite",url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",tileSize:256,type:"raster",attribution:"Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"},{id:"hybrid",name:"Hybrid",url:"https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=c0j1TUMyrEf9onYEldkv",tileSize:512,type:"raster",attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'}]}),getters:{},actions:{async getPoi(){this.poiLoading=!![];try{const e=await Ke({method:"get",url:"data/poi.json",headers:{"Content-Type":"application/json"}});this.poi=e.data,this.poiLoading=![]}catch(e){console.log(e),this.poiLoading=![]}}}});var _t=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};const ct=[{code:"NOR",en:"Norway",ua:"\u041D\u043E\u0440\u0432\u0435\u0433\u0456\u044F",ru:"\u041D\u043E\u0440\u0432\u0435\u0433\u0438\u044F"},{code:"EST",en:"Estonia",ua:"\u0415\u0441\u0442\u043E\u043D\u0456\u044F",ru:"\u042D\u0441\u0442\u043E\u043D\u0438\u044F"},{code:"LVA",en:"Latvia",ua:"\u041B\u0430\u0442\u0432\u0456\u044F",ru:"\u041B\u0430\u0442\u0432\u0438\u044F"},{code:"ENG",en:"England",ua:"\u0410\u043D\u0433\u043B\u0456\u044F",ru:"\u0410\u043D\u0433\u043B\u0438\u044F"},{code:"POL",en:"Poland",ua:"\u041F\u043E\u043B\u044C\u0449\u0430",ru:"\u041F\u043E\u043B\u044C\u0448\u0430"},{code:"FIN",en:"Finland",ua:"\u0424\u0456\u043D\u043B\u044F\u043D\u0434\u0456\u044F",ru:"\u0424\u0438\u043D\u043B\u044F\u043D\u0434\u0438\u044F"},{code:"SCT",en:"Scotland",ua:"\u0428\u043E\u0442\u043B\u0430\u043D\u0434\u0456\u044F",ru:"\u0428\u043E\u0442\u043B\u0430\u043D\u0434\u0438\u044F"},{code:"GEO",en:"Georgia",ua:"\u0413\u0440\u0443\u0437\u0456\u044F",ru:"\u0413\u0440\u0443\u0437\u0438\u044F"},{code:"DEU",en:"Germany",ua:"\u041D\u0456\u043C\u0435\u0447\u0447\u0438\u043D\u0430",ru:"\u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F"},{code:"CYP",en:"Cyprus",ua:"\u041A\u0456\u043F\u0440",ru:"\u041A\u0438\u043F\u0440"},{code:"ITA",en:"Italy",ua:"\u0406\u0442\u0430\u043B\u0456\u044F",ru:"\u0418\u0442\u0430\u043B\u0438\u0438"},{code:"SWE",en:"Sweden",ua:"\u0428\u0432\u0435\u0446\u0456\u044F",ru:"\u0428\u0432\u0435\u0446\u0438\u044F"},{code:"LTU",en:"Lithuania",ua:"\u041B\u0438\u0442\u0432\u0430",ru:"\u041B\u0438\u0442\u0432\u0430"},{code:"ROU",en:"Romania",ua:"\u0420\u0443\u043C\u0443\u043D\u0456\u044F",ru:"\u0420\u0443\u043C\u044B\u043D\u0438\u044F"},{code:"DNK",en:"Denmark",ua:"\u0414\u0430\u043D\u0456\u044F",ru:"\u0414\u0430\u043D\u0438\u044F"}];function jt(e,t){const n=ct.filter(o=>o.code===e);if(n.length>0){const o=n[0];return o[t]?o[t]:o.en}else return""}function Ut(e,t){return e.properties.title[t]?e.properties.title[t]:e.properties.title.en}let M=[],D=[];function Te(e){D=D.filter(t=>t!==e)}function dt(e){Te(e),D.push(e)}function de(e){Te(e),D.length===0&&M.length!==0&&(M[M.length-1](),M=[])}function ft(e){D.length===0?e():M.push(e)}function Kt(e){M=M.filter(t=>t!==e)}const mt={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},ht={...mt,contextMenu:Boolean};function vt({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:o,proxy:i,emit:c}=N(),l=F(null);let r=null;function m(a){return l.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const d={};n===void 0&&(Object.assign(d,{hide(a){i.hide(a)},toggle(a){i.toggle(a),a.qAnchorHandled=!0},toggleKey(a){be(a,13)===!0&&d.toggle(a)},contextClick(a){i.hide(a),re(a),R(()=>{i.show(a),a.qAnchorHandled=!0})},prevent:re,mobileTouch(a){if(d.mobileCleanup(a),m(a)!==!0)return;i.hide(a),l.value.classList.add("non-selectable");const f=a.target;se(d,"anchor",[[f,"touchmove","mobileCleanup","passive"],[f,"touchend","mobileCleanup","passive"],[f,"touchcancel","mobileCleanup","passive"],[l.value,"contextmenu","prevent","notPassive"]]),r=setTimeout(()=>{r=null,i.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){l.value.classList.remove("non-selectable"),r!==null&&(clearTimeout(r),r=null),e.value===!0&&a!==void 0&&ut()}}),n=function(a=o.contextMenu){if(o.noParentEvent===!0||l.value===null)return;let f;a===!0?i.$q.platform.is.mobile===!0?f=[[l.value,"touchstart","mobileTouch","passive"]]:f=[[l.value,"mousedown","hide","passive"],[l.value,"contextmenu","contextClick","notPassive"]]:f=[[l.value,"click","toggle","passive"],[l.value,"keyup","toggleKey","passive"]],se(d,"anchor",f)});function s(){Ge(d,"anchor")}function g(a){for(l.value=a;l.value.classList.contains("q-anchor--skip");)l.value=l.value.parentNode;n()}function p(){if(o.target===!1||o.target===""||i.$el.parentNode===null)l.value=null;else if(o.target===!0)g(i.$el.parentNode);else{let a=o.target;if(typeof o.target=="string")try{a=document.querySelector(o.target)}catch{a=void 0}a!=null?(l.value=a.$el||a,n()):(l.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return P(()=>o.contextMenu,a=>{l.value!==null&&(s(),n(a))}),P(()=>o.target,()=>{l.value!==null&&s(),p()}),P(()=>o.noParentEvent,a=>{l.value!==null&&(a===!0?s():n())}),ye(()=>{p(),t!==!0&&o.modelValue===!0&&l.value===null&&c("update:modelValue",!1)}),B(()=>{r!==null&&clearTimeout(r),s()}),{anchorEl:l,canShow:m,anchorEvents:d}}function gt(e,t){const n=F(null);let o;function i(r,m){const d=`${m!==void 0?"add":"remove"}EventListener`,s=m!==void 0?m:o;r!==window&&r[d]("scroll",s,X.passive),window[d]("scroll",s,X.passive),o=m}function c(){n.value!==null&&(i(n.value),n.value=null)}const l=P(()=>e.noParentEvent,()=>{n.value!==null&&(c(),t())});return B(l),{localScrollTarget:n,unconfigureScrollTarget:c,changeScrollEvent:i}}let pt=1,xt=document.body;function yt(e,t){const n=document.createElement("div");if(n.id=t!==void 0?`q-portal--${t}--${pt++}`:e,ue.globalNodes!==void 0){const o=ue.globalNodes.class;o!==void 0&&(n.className=o)}return xt.appendChild(n),n}function wt(e){e.remove()}const q=[];function Qt(e){return q.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function Pe(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return I(e)}else if(e.__qPortal===!0){const n=I(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=I(e)}while(e!=null)}function Yt(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=Pe(e,t);continue}e.hide(t)}e=I(e)}}const bt=Ee({name:"QPortal",setup(e,{slots:t}){return()=>t.default()}});function Et(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function St(e,t,n,o){const i=F(!1),c=F(!1);let l=null;const r={},m=o==="dialog"&&Et(e);function d(g){if(g===!0){de(r),c.value=!0;return}c.value=!1,i.value===!1&&(m===!1&&l===null&&(l=yt(!1,o)),i.value=!0,q.push(e.proxy),dt(r))}function s(g){if(c.value=!1,g!==!0)return;de(r),i.value=!1;const p=q.indexOf(e.proxy);p!==-1&&q.splice(p,1),l!==null&&(wt(l),l=null)}return Ie(()=>{s(!0)}),e.proxy.__qPortal=!0,Re(e.proxy,"contentEl",()=>t.value),{showPortal:d,hidePortal:s,portalIsActive:i,portalIsAccessible:c,renderPortal:()=>m===!0?n():i.value===!0?[z(Ve,{to:l},z(bt,n))]:void 0}}const Tt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Pt(e,t=()=>{},n=()=>{}){return{transitionProps:w(()=>{const o=`q-transition--${e.transitionShow||t()}`,i=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${o}-enter-from`,enterActiveClass:`${o}-enter-active`,enterToClass:`${o}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:w(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Ct(){let e;const t=N();function n(){e=void 0}return we(n),B(n),{removeTick:n,registerTick(o){e=o,R(()=>{e===o&&(Se(t)===!1&&e(),e=void 0)})}}}const H=[];let $;function kt(e){$=e.keyCode===27}function Mt(){$===!0&&($=!1)}function Ht(e){$===!0&&($=!1,be(e,27)===!0&&H[H.length-1](e))}function Ce(e){window[e]("keydown",kt),window[e]("blur",Mt),window[e]("keyup",Ht),$=!1}function Lt(e){Z.is.desktop===!0&&(H.push(e),H.length===1&&Ce("addEventListener"))}function fe(e){const t=H.indexOf(e);t!==-1&&(H.splice(t,1),H.length===0&&Ce("removeEventListener"))}const L=[];function ke(e){L[L.length-1](e)}function At(e){Z.is.desktop===!0&&(L.push(e),L.length===1&&document.body.addEventListener("focusin",ke))}function Wt(e){const t=L.indexOf(e);t!==-1&&(L.splice(t,1),L.length===0&&document.body.removeEventListener("focusin",ke))}const{notPassiveCapture:V}=X,A=[];function _(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=q.length-1;for(;n>=0;){const o=q[n].$;if(o.type.name==="QTooltip"){n--;continue}if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;n--}for(let o=A.length-1;o>=0;o--){const i=A[o];if((i.anchorEl.value===null||i.anchorEl.value.contains(t)===!1)&&(t===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(t)===!1))e.qClickOutside=!0,i.onClickOutside(e);else return}}function qt(e){A.push(e),A.length===1&&(document.addEventListener("mousedown",_,V),document.addEventListener("touchstart",_,V))}function me(e){const t=A.findIndex(n=>n===e);t!==-1&&(A.splice(t,1),A.length===0&&(document.removeEventListener("mousedown",_,V),document.removeEventListener("touchstart",_,V)))}let he,ve;function ge(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ft(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const J={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{J[`${e}#ltr`]=e,J[`${e}#rtl`]=e});function pe(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:J[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function $t(e,t){let{top:n,left:o,right:i,bottom:c,width:l,height:r}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],o-=t[0],c+=t[1],i+=t[0],l+=t[0],r+=t[1]),{top:n,bottom:c,height:r,left:o,right:i,width:l,middle:o+(i-o)/2,center:n+(c-n)/2}}function Ot(e,t,n){let{top:o,left:i}=e.getBoundingClientRect();return o+=t.top,i+=t.left,n!==void 0&&(o+=n[1],i+=n[0]),{top:o,bottom:o+1,height:1,left:i,right:i+1,width:1,middle:i,center:o}}function zt(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function xe(e,t,n,o){return{top:e[n.vertical]-t[o.vertical],left:e[n.horizontal]-t[o.horizontal]}}function Me(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Me(e,t+1)},10);return}const{targetEl:n,offset:o,anchorEl:i,anchorOrigin:c,selfOrigin:l,absoluteOffset:r,fit:m,cover:d,maxHeight:s,maxWidth:g}=e;if(Z.is.ios===!0&&window.visualViewport!==void 0){const W=document.body.style,{offsetLeft:y,offsetTop:b}=window.visualViewport;y!==he&&(W.setProperty("--q-pe-left",y+"px"),he=y),b!==ve&&(W.setProperty("--q-pe-top",b+"px"),ve=b)}const{scrollLeft:p,scrollTop:a}=n,f=r===void 0?$t(i,d===!0?[0,0]:o):Ot(i,r,o);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:g,maxHeight:s,visibility:"visible"});const{offsetWidth:C,offsetHeight:E}=n,{elWidth:k,elHeight:h}=m===!0||d===!0?{elWidth:Math.max(f.width,C),elHeight:d===!0?Math.max(f.height,E):E}:{elWidth:C,elHeight:E};let v={maxWidth:g,maxHeight:s};(m===!0||d===!0)&&(v.minWidth=f.width+"px",d===!0&&(v.minHeight=f.height+"px")),Object.assign(n.style,v);const S=zt(k,h);let x=xe(f,S,c,l);if(r===void 0||o===void 0)Y(x,f,S,c,l);else{const{top:W,left:y}=x;Y(x,f,S,c,l);let b=!1;if(x.top!==W){b=!0;const T=2*o[1];f.center=f.top-=T,f.bottom-=T+2}if(x.left!==y){b=!0;const T=2*o[0];f.middle=f.left-=T,f.right-=T+2}b===!0&&(x=xe(f,S,c,l),Y(x,f,S,c,l))}v={top:x.top+"px",left:x.left+"px"},x.maxHeight!==void 0&&(v.maxHeight=x.maxHeight+"px",f.height>x.maxHeight&&(v.minHeight=v.maxHeight)),x.maxWidth!==void 0&&(v.maxWidth=x.maxWidth+"px",f.width>x.maxWidth&&(v.minWidth=v.maxWidth)),Object.assign(n.style,v),n.scrollTop!==a&&(n.scrollTop=a),n.scrollLeft!==p&&(n.scrollLeft=p)}function Y(e,t,n,o,i){const c=n.bottom,l=n.right,r=lt(),m=window.innerHeight-r,d=document.body.clientWidth;if(e.top<0||e.top+c>m)if(i.vertical==="center")e.top=t[o.vertical]>m/2?Math.max(0,m-c):0,e.maxHeight=Math.min(c,m);else if(t[o.vertical]>m/2){const s=Math.min(m,o.vertical==="center"?t.center:o.vertical===i.vertical?t.bottom:t.top);e.maxHeight=Math.min(c,s),e.top=Math.max(0,s-c)}else e.top=Math.max(0,o.vertical==="center"?t.center:o.vertical===i.vertical?t.top:t.bottom),e.maxHeight=Math.min(c,m-e.top);if(e.left<0||e.left+l>d)if(e.maxWidth=Math.min(l,d),i.horizontal==="middle")e.left=t[o.horizontal]>d/2?Math.max(0,d-l):0;else if(t[o.horizontal]>d/2){const s=Math.min(d,o.horizontal==="middle"?t.middle:o.horizontal===i.horizontal?t.right:t.left);e.maxWidth=Math.min(l,s),e.left=Math.max(0,s-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?t.middle:o.horizontal===i.horizontal?t.left:t.right),e.maxWidth=Math.min(l,d-e.left)}var Xt=Ee({name:"QMenu",inheritAttrs:!1,props:{...ht,...Ze,...rt,...Tt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:ge},self:{type:String,validator:ge},offset:{type:Array,validator:Ft},scrollTarget:nt,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...et,"click","escapeKey"],setup(e,{slots:t,emit:n,attrs:o}){let i=null,c,l,r;const m=N(),{proxy:d}=m,{$q:s}=d,g=F(null),p=F(!1),a=w(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),f=st(e,s),{registerTick:C,removeTick:E}=Ct(),{registerTimeout:k}=at(),{transitionProps:h,transitionStyle:v}=Pt(e),{localScrollTarget:S,changeScrollEvent:x,unconfigureScrollTarget:W}=gt(e,le),{anchorEl:y,canShow:b}=vt({showing:p}),{hide:T}=tt({showing:p,canShow:b,handleShow:qe,handleHide:Fe,hideOnRouteChange:a,processOnMount:!0}),{showPortal:ee,hidePortal:te,renderPortal:He}=St(m,g,Oe,"menu"),j={anchorEl:y,innerRef:g,onClickOutside(u){if(e.persistent!==!0&&p.value===!0)return T(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&Ue(u),!0}},ne=w(()=>pe(e.anchor||(e.cover===!0?"center middle":"bottom start"),s.lang.rtl)),Le=w(()=>e.cover===!0?ne.value:pe(e.self||"top start",s.lang.rtl)),Ae=w(()=>(e.square===!0?" q-menu--square":"")+(f.value===!0?" q-menu--dark q-dark":"")),We=w(()=>e.autoClose===!0?{onClick:$e}:{}),oe=w(()=>p.value===!0&&e.persistent!==!0);P(oe,u=>{u===!0?(Lt(K),qt(j)):(fe(K),me(j))});function U(){ft(()=>{let u=g.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function qe(u){if(i=e.noRefocus===!1?document.activeElement:null,At(ae),ee(),le(),c=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const Q=_e(u);if(Q.left!==void 0){const{top:ze,left:De}=y.value.getBoundingClientRect();c={left:Q.left-De,top:Q.top-ze}}}l===void 0&&(l=P(()=>s.screen.width+"|"+s.screen.height+"|"+e.self+"|"+e.anchor+"|"+s.lang.rtl,O)),e.noFocus!==!0&&document.activeElement.blur(),C(()=>{O(),e.noFocus!==!0&&U()}),k(()=>{s.platform.is.ios===!0&&(r=e.autoClose,g.value.click()),O(),ee(!0),n("show",u)},e.transitionDuration)}function Fe(u){E(),te(),ie(!0),i!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),k(()=>{te(!0),n("hide",u)},e.transitionDuration)}function ie(u){c=void 0,l!==void 0&&(l(),l=void 0),(u===!0||p.value===!0)&&(Wt(ae),W(),me(j),fe(K)),u!==!0&&(i=null)}function le(){(y.value!==null||e.scrollTarget!==void 0)&&(S.value=it(y.value,e.scrollTarget),x(S.value,O))}function $e(u){r!==!0?(Pe(d,u),n("click",u)):r=!1}function ae(u){oe.value===!0&&e.noFocus!==!0&&Je(g.value,u.target)!==!0&&U()}function K(u){n("escapeKey"),T(u)}function O(){Me({targetEl:g.value,offset:e.offset,anchorEl:y.value,anchorOrigin:ne.value,selfOrigin:Le.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Oe(){return z(je,h.value,()=>p.value===!0?z("div",{role:"menu",...o,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+Ae.value,o.class],style:[o.style,v.value],...We.value},Xe(t.default)):null)}return B(ie),Object.assign(d,{focus:U,updatePosition:O}),He}});const Jt={name:String};function Zt(e={}){return(t,n,o)=>{t[n](z("input",{class:"hidden"+(o||""),...e.value}))}}function en(e){return w(()=>e.name||e.for)}export{At as A,Lt as B,Jt as C,en as D,mt as E,ge as F,Ft as G,gt as H,vt as I,me as J,Me as K,pe as L,qt as M,Zt as N,Qt as O,Yt as P,Xt as Q,Gt as a,rt as b,ut as c,et as d,st as e,at as f,It as g,Rt as h,tt as i,it as j,lt as k,_t as l,Vt as m,ct as n,jt as o,Ut as p,ft as q,Kt as r,nt as s,Tt as t,Ze as u,Ct as v,Pt as w,St as x,Wt as y,fe as z};