const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-CXTu8pr_.js","assets/styling-JrEYv7ut.js","assets/vendor-IUCS5aZ6.js","assets/SkillsSection-vyuc726k.js","assets/index-CNwvuJSz.js","assets/linkzy-chat-CwFeYayl.js","assets/About-BJiySm6J.js","assets/Projects-CX6Ft0Kx.js","assets/Contact-DDX_OAtd.js","assets/Blog-S4lQawX3.js"])))=>i.map(i=>d[i]);
import{r as m,a as P,u as A,L as E,R as w,b as L,c as B,B as O}from"./vendor-IUCS5aZ6.js";import{d as c,m as g,a as C,f as T,u as I,o as D}from"./styling-JrEYv7ut.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}})();var k={exports:{}},x={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z=m,N=Symbol.for("react.element"),U=Symbol.for("react.fragment"),V=Object.prototype.hasOwnProperty,q=z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M={key:!0,ref:!0,__self:!0,__source:!0};function F(e,r,a){var n,o={},i=null,s=null;a!==void 0&&(i=""+a),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(s=r.ref);for(n in r)V.call(r,n)&&!M.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps,r)o[n]===void 0&&(o[n]=r[n]);return{$$typeof:N,type:e,key:i,ref:s,props:o,_owner:q.current}}x.Fragment=U;x.jsx=F;x.jsxs=F;k.exports=x;var t=k.exports,b={},y=P;b.createRoot=y.createRoot,b.hydrateRoot=y.hydrateRoot;const H=c(g.button)`
  background: none;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,W=c(g.div)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.text};
`,Y=({isDarkMode:e,toggleTheme:r})=>t.jsx(H,{onClick:r,whileHover:{scale:1.1},whileTap:{scale:.9},children:t.jsx(W,{initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{duration:.2},children:e?"🌙":"☀️"})}),G=c(g.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background: ${({theme:e})=>`rgba(${e.backgroundRgba}, 0.8)`};
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,J=c(E)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({theme:e})=>e.primary};
  background: linear-gradient(45deg, ${({theme:e})=>e.primary}, ${({theme:e})=>e.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
`,K=c.div`
  display: flex;
  gap: 2rem;
`,f=c(E)`
  color: ${({theme:e,$isActive:r})=>r?e.primary:e.text};
  text-decoration: none;
  font-weight: ${({$isActive:e})=>e?"600":"400"};
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${({$isActive:e})=>e?"100%":"0"};
    height: 2px;
    background: ${({theme:e})=>e.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({theme:e})=>e.primary};
    &::after {
      width: 100%;
    }
  }
`,X=({toggleTheme:e,isDarkMode:r})=>{const a=A();return t.jsxs(G,{initial:{y:-100},animate:{y:0},transition:{duration:.5},children:[t.jsx(J,{to:"/",children:"My Portfolio"}),t.jsxs(K,{children:[t.jsx(f,{to:"/about",$isActive:a.pathname==="/about",children:"About"}),t.jsx(f,{to:"/projects",$isActive:a.pathname==="/projects",children:"Projects"}),t.jsx(f,{to:"/contact",$isActive:a.pathname==="/contact",children:"Contact"}),t.jsx(f,{to:"/blog",$isActive:a.pathname==="/blog",children:"Blog"})]}),t.jsx(Y,{isDarkMode:r,toggleTheme:e})]})},Q=C`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Z=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`,ee=c.div`
  width: 50px;
  height: 50px;
  border: 5px solid ${({theme:e})=>e.secondary}20;
  border-top: 5px solid ${({theme:e})=>e.primary};
  border-radius: 50%;
  animation: ${Q} 1s linear infinite;
`,te=()=>t.jsx(Z,{children:t.jsx(ee,{})}),j={fontSize:{small:"0.875rem",medium:"1rem",large:"1.25rem",xlarge:"1.5rem",xxlarge:"2rem"},spacing:{small:"0.5rem",medium:"1rem",large:"1.5rem",xlarge:"2rem",xxlarge:"3rem"},borderRadius:{small:"4px",medium:"8px",large:"12px",round:"50%"}},_={light:{...j,primary:"#4169E1",accent:"#00A3FF",text:"#333333",background:"#FFFFFF",backgroundRgba:"255, 255, 255",secondary:"#666666",cardBg:"#F5F5F5",error:"#FF4444",success:"#00C851",warning:"#FFBB33",info:"#33B5E5",shadow:"0 2px 8px rgba(0, 0, 0, 0.1)"},dark:{...j,primary:"#4169E1",accent:"#00A3FF",text:"#FFFFFF",background:"#0A0A0A",backgroundRgba:"10, 10, 10",secondary:"#B3B3B3",cardBg:"#1A1A1A",error:"#FF4444",success:"#00C851",warning:"#FFBB33",info:"#33B5E5",shadow:"0 2px 8px rgba(0, 0, 0, 0.3)"}},re=T`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${({theme:e})=>e.background};
    color: ${({theme:e})=>e.text};
    line-height: 1.6;
    min-height: 100vh;
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    background: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    margin-bottom: 1rem;
    color: ${({theme:e})=>e.text};
    transition: color 0.3s ease;
  }

  p {
    margin-bottom: 1rem;
    transition: color 0.3s ease;
  }

  ::selection {
    background: ${({theme:e})=>e.primary};
    color: white;
  }
`,oe=c.div`
  padding: 2rem;
  text-align: center;
`,ne=c.h2`
  color: ${({theme:e})=>e.primary};
  margin-bottom: 1rem;
`;class ie extends w.Component{constructor(r){super(r),this.state={hasError:!1}}static getDerivedStateFromError(r){return{hasError:!0}}componentDidCatch(r,a){console.error("Error:",r,a)}render(){return this.state.hasError?t.jsxs(oe,{children:[t.jsx(ne,{children:"Something went wrong."}),t.jsx("button",{onClick:()=>window.location.reload(),children:"Refresh Page"})]}):this.props.children}}const se=c(g.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${({theme:e})=>e.primary};
  transform-origin: 0%;
  z-index: 1001;
`,ae=()=>{const{scrollYProgress:e}=I();return t.jsx(se,{style:{scaleX:e}})},ce="modulepreload",le=function(e){return"/portfolio/"+e},v={},p=function(r,a,n){let o=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(a.map(d=>{if(d=le(d),d in v)return;v[d]=!0;const h=d.endsWith(".css"),R=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${R}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":ce,h||(u.as="script"),u.crossOrigin="",u.href=d,l&&u.setAttribute("nonce",l),document.head.appendChild(u),h)return new Promise(($,S)=>{u.addEventListener("load",$),u.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return o.then(s=>{for(const l of s||[])l.status==="rejected"&&i(l.reason);return r().catch(i)})},de=m.lazy(()=>p(()=>import("./Home-CXTu8pr_.js"),__vite__mapDeps([0,1,2,3,4,5]))),ue=m.lazy(()=>p(()=>import("./About-BJiySm6J.js"),__vite__mapDeps([6,1,2,3,4]))),me=m.lazy(()=>p(()=>import("./Projects-CX6Ft0Kx.js"),__vite__mapDeps([7,1,2,5]))),pe=m.lazy(()=>p(()=>import("./Contact-DDX_OAtd.js"),__vite__mapDeps([8,1,2]))),he=m.lazy(()=>p(()=>import("./Blog-S4lQawX3.js"),__vite__mapDeps([9,1,2,4]))),fe=[{path:"/",element:t.jsx(de,{})},{path:"/about",element:t.jsx(ue,{})},{path:"/projects",element:t.jsx(me,{})},{path:"/contact",element:t.jsx(pe,{})},{path:"/blog",element:t.jsx(he,{})}];function ge(){const[e,r]=m.useState(!1),a=()=>{r(n=>!n)};return t.jsx(ie,{children:t.jsxs(D,{theme:e?_.dark:_.light,children:[t.jsx(re,{}),t.jsx(ae,{}),t.jsx(X,{toggleTheme:a,isDarkMode:e}),t.jsx(m.Suspense,{fallback:t.jsx(te,{}),children:t.jsx(L,{children:fe.map(n=>t.jsx(B,{path:n.path,element:n.element},n.path))})})]})})}b.createRoot(document.getElementById("root")).render(t.jsx(w.StrictMode,{children:t.jsx(O,{children:t.jsx(ge,{})})}));export{t as j};
