import{j as t}from"./index-EyyUM3GC.js";import{d as e,m as n}from"./styling-JrEYv7ut.js";import{l as s,m as c,t as m}from"./linkzy-chat-CwFeYayl.js";import"./vendor-IUCS5aZ6.js";const l=e.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,p=e(n.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(45deg, ${({theme:i})=>i.primary}, ${({theme:i})=>i.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,g=e.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`,h=e(n.div)`
  background: ${({theme:i})=>i.cardBg};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${({theme:i})=>i.shadow};
`,x=e.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`,u=e.div`
  padding: 1.5rem;
`,b=e.h3`
  font-size: 1.5rem;
  color: ${({theme:i})=>i.primary};
  margin-bottom: 1rem;
`,y=e.p`
  color: ${({theme:i})=>i.text};
  margin-bottom: 1rem;
  line-height: 1.6;
`,v=e.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`,f=e.span`
  background: ${({theme:i})=>i.primary}20;
  color: ${({theme:i})=>i.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
`;e.div`
  color: ${({theme:i})=>i.secondary};
  font-size: 0.875rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${({theme:i})=>i.surface};
`;const A=()=>{const i=[{id:1,title:"Linkzy Chat App",description:"A real-time chatting app built with Firebase backend, featuring user authentication and live messaging capabilities.",tech:["Java","Firebase","Android Studio"],image:s},{id:2,title:"Muzic App",description:"Feature-rich music player with local playback, notification controls, and background playback support.",tech:["Java","Android Studio"],image:c},{id:3,title:"Tic Tac Toe Game",description:"An interactive Tic Tac Toe game for Android, created with AI assistance.",tech:["Java","Android Studio","AI"],image:m}],o={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},d={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return t.jsxs(l,{children:[t.jsx(p,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"My Projects"}),t.jsx(g,{variants:o,initial:"hidden",animate:"visible",children:i.map(a=>t.jsxs(h,{variants:d,initial:"hidden",animate:"visible",whileHover:{y:-10},children:[t.jsx(x,{children:t.jsx("img",{src:a.image,alt:a.title})}),t.jsxs(u,{children:[t.jsx(b,{children:a.title}),t.jsx(y,{children:a.description}),t.jsx(v,{children:a.tech.map(r=>t.jsx(f,{children:r},r))})]})]},a.id))})]})};export{A as default};
