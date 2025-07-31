const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-WSfCPB5Q.js","assets/styling-JrEYv7ut.js","assets/vendor-IUCS5aZ6.js","assets/SkillsSection-ChX2XRgZ.js","assets/index-CNwvuJSz.js","assets/linkzy-chat-BL2xj726.js","assets/About-BzTWBKqQ.js","assets/Projects-BMy4sg0w.js","assets/Contact-C7UFCtIA.js","assets/Blog-Cufq3kyv.js"])))=>i.map(i=>d[i]);
import{r as p,a as I,u as O,L as S,R as z,B as A,b as T,c as B}from"./vendor-IUCS5aZ6.js";import{d,m as u,a as j,u as C,f as D,o as W}from"./styling-JrEYv7ut.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();var E={exports:{}},x={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N=p,U=Symbol.for("react.element"),F=Symbol.for("react.fragment"),Y=Object.prototype.hasOwnProperty,H=N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M={key:!0,ref:!0,__self:!0,__source:!0};function _(e,r,s){var i,a={},o=null,n=null;s!==void 0&&(o=""+s),r.key!==void 0&&(o=""+r.key),r.ref!==void 0&&(n=r.ref);for(i in r)Y.call(r,i)&&!M.hasOwnProperty(i)&&(a[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return{$$typeof:U,type:e,key:o,ref:n,props:a,_owner:H.current}}x.Fragment=F;x.jsx=_;x.jsxs=_;E.exports=x;var t=E.exports,h={},k=I;h.createRoot=k.createRoot,h.hydrateRoot=k.hydrateRoot;const V=d(u.button)`
  cursor: pointer;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  
  /* Enhanced glass morphism */
  background: ${({theme:e})=>e.glass.background};
  backdrop-filter: ${({theme:e})=>e.glass.backdrop};
  -webkit-backdrop-filter: ${({theme:e})=>e.glass.backdrop};
  border: 1px solid ${({theme:e})=>e.glass.border};
  box-shadow: ${({theme:e})=>e.shadows.glass.sm};
  
  transition: all ${({theme:e})=>e.transitions.normal};
  
  &:hover {
    background: ${({theme:e})=>e.glass.backgroundStrong};
    border-color: ${({theme:e})=>e.glass.borderStrong};
    box-shadow: ${({theme:e})=>e.shadows.glass.md};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`,q=d(u.div)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.text};
  font-size: ${({theme:e})=>e.fontSize.lg};
  
  /* Add subtle glow effect */
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`,G=({isDarkMode:e,toggleTheme:r})=>t.jsx(V,{onClick:r,whileHover:{scale:1.1},whileTap:{scale:.9},children:t.jsx(q,{initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{duration:.2},children:e?"🌙":"☀️"})}),J=d(u.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({theme:e})=>e.spacing[8]};
  
  /* Enhanced glass morphism */
  background: ${({theme:e})=>e.glass.background};
  backdrop-filter: ${({theme:e})=>e.glass.backdropStrong};
  -webkit-backdrop-filter: ${({theme:e})=>e.glass.backdropStrong};
  border-bottom: 1px solid ${({theme:e})=>e.glass.border};
  box-shadow: ${({theme:e})=>e.shadows.glass.md};
  
  z-index: ${({theme:e})=>e.zIndex.sticky};
  transition: all ${({theme:e})=>e.transitions.normal};
  
  /* Responsive padding */
  @media (max-width: 768px) {
    padding: 0 ${({theme:e})=>e.spacing[4]};
    height: 64px;
  }
  
  /* Hover effect */
  &:hover {
    background: ${({theme:e})=>e.glass.backgroundStrong};
    border-bottom-color: ${({theme:e})=>e.glass.borderStrong};
  }
`,X=d(S)`
  font-size: ${({theme:e})=>e.fontSize["2xl"]};
  font-weight: 800;
  letter-spacing: -0.02em;
  text-decoration: none;
  
  /* Enhanced gradient text */
  background: ${({theme:e})=>e.gradients.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  /* Smooth transitions */
  transition: all ${({theme:e})=>e.transitions.normal};
  
  /* Hover effect */
  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
  
  /* Responsive sizing */
  @media (max-width: 768px) {
    font-size: ${({theme:e})=>e.fontSize.xl};
  }
`,K=d.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[8]};
  align-items: center;
  
  @media (max-width: 768px) {
    gap: ${({theme:e})=>e.spacing[6]};
  }
  
  @media (max-width: 640px) {
    gap: ${({theme:e})=>e.spacing[4]};
  }
`,m=d(S)`
  position: relative;
  color: ${({theme:e,$isActive:r})=>r?e.primary:e.text};
  text-decoration: none;
  font-weight: ${({$isActive:e})=>e?"600":"500"};
  font-size: ${({theme:e})=>e.fontSize.sm};
  letter-spacing: -0.01em;
  padding: ${({theme:e})=>`${e.spacing[2]} ${e.spacing[3]}`};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  
  /* Glass morphism background for active state */
  background: ${({theme:e,$isActive:r})=>r?e.glass.backgroundWeak:"transparent"};
  border: 1px solid ${({theme:e,$isActive:r})=>r?e.glass.border:"transparent"};
  
  transition: all ${({theme:e})=>e.transitions.normal};

  /* Enhanced underline effect */
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: ${({$isActive:e})=>e?"80%":"0"};
    height: 2px;
    background: ${({theme:e})=>e.gradients.primary};
    border-radius: ${({theme:e})=>e.borderRadius.full};
    transition: all ${({theme:e})=>e.transitions.normal};
  }

  &:hover {
    color: ${({theme:e})=>e.primary};
    background: ${({theme:e})=>e.glass.backgroundWeak};
    border-color: ${({theme:e})=>e.glass.border};
    transform: translateY(-1px);
    
    &::after {
      width: 80%;
    }
  }
  
  /* Active state enhancements */
  ${({$isActive:e,theme:r})=>e&&`
    color: ${r.primary};
    box-shadow: ${r.shadows.glass.sm};
  `}
  
  @media (max-width: 640px) {
    font-size: ${({theme:e})=>e.fontSize.xs};
    padding: ${({theme:e})=>`${e.spacing[1.5]} ${e.spacing[2]}`};
  }
`,Q=({toggleTheme:e,isDarkMode:r})=>{const s=O();return t.jsxs(J,{initial:{y:-100},animate:{y:0},transition:{duration:.5},children:[t.jsx(X,{to:"/",children:"My Portfolio"}),t.jsxs(K,{children:[t.jsx(m,{to:"/about",$isActive:s.pathname==="/about",children:"About"}),t.jsx(m,{to:"/projects",$isActive:s.pathname==="/projects",children:"Projects"}),t.jsx(m,{to:"/contact",$isActive:s.pathname==="/contact",children:"Contact"}),t.jsx(m,{to:"/blog",$isActive:s.pathname==="/blog",children:"Blog"})]}),t.jsx(G,{isDarkMode:r,toggleTheme:e})]})},$=j`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Z=j`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`,ee=d.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${({theme:e})=>e.background};
  background-image: ${({theme:e})=>e.gradients.mesh};
  background-attachment: fixed;
  background-size: 100% 100%;
`,re=d.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Glass morphism background */
  background: ${({theme:e})=>e.glass.background};
  backdrop-filter: ${({theme:e})=>e.glass.backdropStrong};
  -webkit-backdrop-filter: ${({theme:e})=>e.glass.backdropStrong};
  border: 1px solid ${({theme:e})=>e.glass.border};
  border-radius: ${({theme:e})=>e.borderRadius["2xl"]};
  box-shadow: ${({theme:e})=>e.shadows.glass.xl};
  
  padding: ${({theme:e})=>e.spacing[12]};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
`,te=d.div`
  width: 60px;
  height: 60px;
  border: 4px solid transparent;
  border-top: 4px solid ${({theme:e})=>e.primary};
  border-right: 4px solid ${({theme:e})=>e.accent};
  border-radius: 50%;
  animation: ${$} 1s linear infinite;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border: 2px solid transparent;
    border-top: 2px solid ${({theme:e})=>e.primary}40;
    border-radius: 50%;
    animation: ${$} 2s linear infinite reverse;
  }
`,ae=d.div`
  color: ${({theme:e})=>e.text};
  font-size: ${({theme:e})=>e.fontSize.lg};
  font-weight: 600;
  letter-spacing: -0.01em;
  animation: ${Z} 2s ease-in-out infinite;
  
  /* Gradient text */
  background: ${({theme:e})=>e.gradients.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,oe=()=>t.jsxs(ee,{children:[t.jsx(re,{children:t.jsx(te,{})}),t.jsx(ae,{children:"Loading..."})]}),ne=d(u.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${({theme:e})=>e.primary};
  transform-origin: 0%;
  z-index: 1001;
`,se=()=>{const{scrollYProgress:e}=C();return t.jsx(ne,{style:{scaleX:e}})},ie=d.div`
  padding: 2rem;
  text-align: center;
`,de=d.h2`
  color: ${({theme:e})=>e.primary};
  margin-bottom: 1rem;
`;class le extends z.Component{constructor(r){super(r),this.state={hasError:!1}}static getDerivedStateFromError(r){return{hasError:!0}}componentDidCatch(r,s){console.error("Error:",r,s)}render(){return this.state.hasError?t.jsxs(ie,{children:[t.jsx(de,{children:"Something went wrong."}),t.jsx("button",{onClick:()=>window.location.reload(),children:"Refresh Page"})]}):this.props.children}}const w={fontSize:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem","7xl":"4.5rem"},spacing:{px:"1px",.5:"0.125rem",1:"0.25rem",1.5:"0.375rem",2:"0.5rem",2.5:"0.625rem",3:"0.75rem",3.5:"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",11:"2.75rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem"},borderRadius:{none:"0",sm:"0.125rem",base:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","4xl":"2rem",full:"9999px"},shadows:{glass:{sm:"0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.08)",md:"0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.12)",lg:"0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.16)",xl:"0 16px 64px rgba(0, 0, 0, 0.16), 0 8px 32px rgba(0, 0, 0, 0.20)"},colored:{primary:"0 8px 32px rgba(99, 102, 241, 0.24)",accent:"0 8px 32px rgba(59, 130, 246, 0.24)",success:"0 8px 32px rgba(34, 197, 94, 0.24)",warning:"0 8px 32px rgba(251, 191, 36, 0.24)",error:"0 8px 32px rgba(239, 68, 68, 0.24)"},inner:{sm:"inset 0 1px 2px rgba(0, 0, 0, 0.05)",md:"inset 0 2px 4px rgba(0, 0, 0, 0.08)",lg:"inset 0 4px 8px rgba(0, 0, 0, 0.12)"}},transitions:{fast:"150ms cubic-bezier(0.4, 0, 0.2, 1)",normal:"300ms cubic-bezier(0.4, 0, 0.2, 1)",slow:"500ms cubic-bezier(0.4, 0, 0.2, 1)",bounce:"300ms cubic-bezier(0.68, -0.55, 0.265, 1.55)"},zIndex:{hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},y={light:{...w,colors:{primary:{50:"#f0f4ff",100:"#e0e9ff",200:"#c7d6fe",300:"#a5b8fc",400:"#8b93f8",500:"#6366f1",600:"#5b52e7",700:"#4c46d3",800:"#413ba8",900:"#3a3485"},accent:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},success:{50:"#f0fdf4",500:"#22c55e",600:"#16a34a"},warning:{50:"#fffbeb",500:"#f59e0b",600:"#d97706"},error:{50:"#fef2f2",500:"#ef4444",600:"#dc2626"},info:{50:"#f0f9ff",500:"#06b6d4",600:"#0891b2"}},primary:"#6366f1",accent:"#3b82f6",text:"#1f2937",background:"#ffffff",backgroundRgba:"255, 255, 255",secondary:"#6b7280",cardBg:"rgba(255, 255, 255, 0.7)",error:"#ef4444",success:"#22c55e",warning:"#f59e0b",info:"#06b6d4",shadow:"0 4px 16px rgba(0, 0, 0, 0.08)",glass:{background:"rgba(255, 255, 255, 0.25)",backgroundStrong:"rgba(255, 255, 255, 0.4)",backgroundWeak:"rgba(255, 255, 255, 0.1)",border:"rgba(255, 255, 255, 0.18)",borderStrong:"rgba(255, 255, 255, 0.3)",shadow:"0 8px 32px rgba(31, 38, 135, 0.37)",backdrop:"blur(8px)",backdropStrong:"blur(16px)"},gradients:{primary:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",accent:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",hero:"linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",card:"linear-gradient(145deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)",text:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",button:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",mesh:"radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)"}},dark:{...w,colors:{primary:{50:"#1e1b4b",100:"#312e81",200:"#3730a3",300:"#4338ca",400:"#5b21b6",500:"#7c3aed",600:"#8b5cf6",700:"#a78bfa",800:"#c4b5fd",900:"#e9d5ff"},accent:{50:"#0c4a6e",100:"#075985",200:"#0369a1",300:"#0284c7",400:"#0ea5e9",500:"#38bdf8",600:"#7dd3fc",700:"#a7f3d0",800:"#bae6fd",900:"#e0f2fe"},neutral:{50:"#0a0a0a",100:"#171717",200:"#262626",300:"#404040",400:"#525252",500:"#737373",600:"#a3a3a3",700:"#d4d4d4",800:"#e5e5e5",900:"#f5f5f5"},success:{50:"#064e3b",500:"#10b981",600:"#059669"},warning:{50:"#451a03",500:"#f59e0b",600:"#d97706"},error:{50:"#7f1d1d",500:"#f87171",600:"#ef4444"},info:{50:"#164e63",500:"#22d3ee",600:"#06b6d4"}},primary:"#7c3aed",accent:"#38bdf8",text:"#f9fafb",background:"#0f0f23",backgroundRgba:"15, 15, 35",secondary:"#9ca3af",cardBg:"rgba(15, 15, 35, 0.7)",error:"#f87171",success:"#10b981",warning:"#fbbf24",info:"#22d3ee",shadow:"0 4px 16px rgba(0, 0, 0, 0.4)",glass:{background:"rgba(15, 15, 35, 0.25)",backgroundStrong:"rgba(15, 15, 35, 0.4)",backgroundWeak:"rgba(15, 15, 35, 0.1)",border:"rgba(255, 255, 255, 0.1)",borderStrong:"rgba(255, 255, 255, 0.2)",shadow:"0 8px 32px rgba(0, 0, 0, 0.6)",backdrop:"blur(8px)",backdropStrong:"blur(16px)"},gradients:{primary:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",accent:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",hero:"linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",card:"linear-gradient(145deg, rgba(15,15,35,0.25) 0%, rgba(15,15,35,0.1) 100%)",text:"linear-gradient(135deg, #7c3aed 0%, #38bdf8 100%)",button:"linear-gradient(135deg, #7c3aed 0%, #38bdf8 100%)",mesh:"radial-gradient(at 40% 20%, hsla(28,100%,74%,0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,0.3) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,0.2) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,0.3) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,77%,0.2) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,0.3) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,0.2) 0px, transparent 50%)"}}},ce=D`
  /* Import modern fonts */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: ${({theme:e})=>e.fontSize.base};
    line-height: 1.6;
    letter-spacing: -0.01em;
    
    /* Enhanced background with mesh gradient */
    background: ${({theme:e})=>e.background};
    background-image: ${({theme:e})=>e.gradients.mesh};
    background-attachment: fixed;
    background-size: 100% 100%;
    
    color: ${({theme:e})=>e.text};
    min-height: 100vh;
    overflow-x: hidden;
    
    /* Smooth transitions */
    transition: all ${({theme:e})=>e.transitions.normal};
    
    /* Prevent horizontal scroll */
    max-width: 100vw;
  }

  /* Enhanced scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.glass.backgroundWeak};
    border-radius: ${({theme:e})=>e.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.glass.background};
    border-radius: ${({theme:e})=>e.borderRadius.full};
    backdrop-filter: ${({theme:e})=>e.glass.backdrop};
    border: 1px solid ${({theme:e})=>e.glass.border};
    
    &:hover {
      background: ${({theme:e})=>e.glass.backgroundStrong};
    }
  }

  /* Firefox scrollbar */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({theme:e})=>e.glass.background} ${({theme:e})=>e.glass.backgroundWeak};
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all ${({theme:e})=>e.transitions.normal};
    
    &:hover {
      text-decoration: none;
    }
    
    &:focus {
      outline: 2px solid ${({theme:e})=>e.primary};
      outline-offset: 2px;
      border-radius: ${({theme:e})=>e.borderRadius.sm};
    }
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    background: none;
    font-family: inherit;
    font-size: inherit;
    transition: all ${({theme:e})=>e.transitions.normal};
    
    &:focus {
      outline: 2px solid ${({theme:e})=>e.primary};
      outline-offset: 2px;
      border-radius: ${({theme:e})=>e.borderRadius.sm};
    }
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: ${({theme:e})=>e.borderRadius.lg};
  }

  /* Enhanced Typography */
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    margin-bottom: ${({theme:e})=>e.spacing[4]};
    color: ${({theme:e})=>e.text};
    font-weight: 600;
    letter-spacing: -0.025em;
    transition: all ${({theme:e})=>e.transitions.normal};
  }

  h1 {
    font-size: ${({theme:e})=>e.fontSize["5xl"]};
    font-weight: 800;
    
    @media (max-width: 768px) {
      font-size: ${({theme:e})=>e.fontSize["3xl"]};
    }
  }

  h2 {
    font-size: ${({theme:e})=>e.fontSize["4xl"]};
    font-weight: 700;
    
    @media (max-width: 768px) {
      font-size: ${({theme:e})=>e.fontSize["2xl"]};
    }
  }

  h3 {
    font-size: ${({theme:e})=>e.fontSize["3xl"]};
    font-weight: 600;
    
    @media (max-width: 768px) {
      font-size: ${({theme:e})=>e.fontSize.xl};
    }
  }

  h4 {
    font-size: ${({theme:e})=>e.fontSize["2xl"]};
    font-weight: 600;
  }

  h5 {
    font-size: ${({theme:e})=>e.fontSize.xl};
    font-weight: 500;
  }

  h6 {
    font-size: ${({theme:e})=>e.fontSize.lg};
    font-weight: 500;
  }

  p {
    margin-bottom: ${({theme:e})=>e.spacing[4]};
    transition: all ${({theme:e})=>e.transitions.normal};
    color: ${({theme:e})=>e.secondary};
    line-height: 1.7;
  }

  /* Enhanced selection */
  ::selection {
    background: ${({theme:e})=>e.primary};
    color: white;
    text-shadow: none;
  }

  ::-moz-selection {
    background: ${({theme:e})=>e.primary};
    color: white;
    text-shadow: none;
  }

  /* Focus styles for accessibility */
  :focus-visible {
    outline: 2px solid ${({theme:e})=>e.primary};
    outline-offset: 2px;
    border-radius: ${({theme:e})=>e.borderRadius.sm};
  }

  /* Utility classes for glass morphism */
  .glass {
    background: ${({theme:e})=>e.glass.background};
    backdrop-filter: ${({theme:e})=>e.glass.backdrop};
    -webkit-backdrop-filter: ${({theme:e})=>e.glass.backdrop};
    border: 1px solid ${({theme:e})=>e.glass.border};
    box-shadow: ${({theme:e})=>e.glass.shadow};
  }

  .glass-strong {
    background: ${({theme:e})=>e.glass.backgroundStrong};
    backdrop-filter: ${({theme:e})=>e.glass.backdropStrong};
    -webkit-backdrop-filter: ${({theme:e})=>e.glass.backdropStrong};
    border: 1px solid ${({theme:e})=>e.glass.borderStrong};
    box-shadow: ${({theme:e})=>e.shadows.glass.lg};
  }

  .glass-weak {
    background: ${({theme:e})=>e.glass.backgroundWeak};
    backdrop-filter: ${({theme:e})=>e.glass.backdrop};
    -webkit-backdrop-filter: ${({theme:e})=>e.glass.backdrop};
    border: 1px solid ${({theme:e})=>e.glass.border};
    box-shadow: ${({theme:e})=>e.shadows.glass.sm};
  }

  /* Animation utilities */
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }

  .animate-slide-up {
    animation: slideUp 0.6s ease-out forwards;
  }

  .animate-scale-in {
    animation: scaleIn 0.4s ease-out forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  /* Responsive design helpers */
  @media (max-width: 640px) {
    html {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 13px;
    }
  }

  /* Reduce motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .glass,
    .glass-strong,
    .glass-weak {
      border-width: 2px;
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
    }
  }
`,ge="modulepreload",pe=function(e){return"/portfolio/"+e},v={},b=function(r,s,i){let a=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),l=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));a=Promise.allSettled(s.map(c=>{if(c=pe(c),c in v)return;v[c]=!0;const f=c.endsWith(".css"),R=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${R}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":ge,f||(g.as="script"),g.crossOrigin="",g.href=c,l&&g.setAttribute("nonce",l),document.head.appendChild(g),f)return new Promise((L,P)=>{g.addEventListener("load",L),g.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(n){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=n,window.dispatchEvent(l),!l.defaultPrevented)throw n}return a.then(n=>{for(const l of n||[])l.status==="rejected"&&o(l.reason);return r().catch(o)})},be=p.lazy(()=>b(()=>import("./Home-WSfCPB5Q.js"),__vite__mapDeps([0,1,2,3,4,5]))),fe=p.lazy(()=>b(()=>import("./About-BzTWBKqQ.js"),__vite__mapDeps([6,1,2,3,4]))),me=p.lazy(()=>b(()=>import("./Projects-BMy4sg0w.js"),__vite__mapDeps([7,1,2,5]))),ue=p.lazy(()=>b(()=>import("./Contact-C7UFCtIA.js"),__vite__mapDeps([8,1,2]))),xe=p.lazy(()=>b(()=>import("./Blog-Cufq3kyv.js"),__vite__mapDeps([9,1,2,4]))),he=[{path:"/",element:t.jsx(be,{})},{path:"/about",element:t.jsx(fe,{})},{path:"/projects",element:t.jsx(me,{})},{path:"/contact",element:t.jsx(ue,{})},{path:"/blog",element:t.jsx(xe,{})}];function ke(){const[e,r]=p.useState(!1),s=()=>{r(!e)};return t.jsx(le,{children:t.jsxs(W,{theme:e?y.dark:y.light,children:[t.jsx(ce,{}),t.jsx(se,{}),t.jsxs(A,{basename:"/portfolio",children:[t.jsx(Q,{toggleTheme:s,isDarkMode:e}),t.jsx(p.Suspense,{fallback:t.jsx(oe,{}),children:t.jsx(T,{children:he.map(i=>t.jsx(B,{path:i.path,element:i.element},i.path))})})]})]})})}h.createRoot(document.getElementById("root")).render(t.jsx(z.StrictMode,{children:t.jsx(ke,{})}));export{t as j};
