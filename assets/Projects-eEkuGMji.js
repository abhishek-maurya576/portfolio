import{j as t}from"./three-BSiCeBfb.js";import{d as r,m as e}from"./styling-JrEYv7ut.js";import{l as d,m as l,t as g}from"./linkzy-chat-BL2xj726.js";import"./vendor-IUCS5aZ6.js";const c=r.div`
  min-height: 100vh;
  padding: ${({theme:a})=>a.spacing[20]} ${({theme:a})=>a.spacing[8]};
  
  /* Liquid glass morphism background */
  background: 
    /* Primary mesh gradient */
    ${({theme:a})=>a.gradients.mesh},
    /* Base background */
    ${({theme:a})=>a.background};
  background-attachment: fixed;
  background-size: 100% 100%;
  
  /* Multiple glass layers for depth */
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* Stronger glass effect */
    background: 
      radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.08) 0%, transparent 40%),
      radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.06) 0%, transparent 40%),
      ${({theme:a})=>a.glass.backgroundWeak};
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    pointer-events: none;
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* Additional frosted glass layer */
    background: 
      linear-gradient(45deg, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
      linear-gradient(-45deg, rgba(255, 255, 255, 0.01) 0%, transparent 50%);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    pointer-events: none;
    z-index: 0;
  }
`,p=r.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
`,b=r(e.h2)`
  font-size: ${({theme:a})=>a.fontSize["4xl"]};
  font-weight: 800;
  margin-bottom: ${({theme:a})=>a.spacing[12]};
  text-align: center;
  letter-spacing: -0.03em;
  
  /* Enhanced gradient text */
  background: ${({theme:a})=>a.gradients.hero};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: ${({theme:a})=>a.fontSize["3xl"]};
    margin-bottom: ${({theme:a})=>a.spacing[8]};
  }
`,u=r(e.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({theme:a})=>a.spacing[8]};
  padding: ${({theme:a})=>a.spacing[8]} 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({theme:a})=>a.spacing[6]};
    padding: ${({theme:a})=>a.spacing[6]} 0;
  }
`,f=r(e.div)`
  /* Liquid glass morphism card */
  background: 
    /* Multiple glass layers */
    linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%),
    ${({theme:a})=>a.glass.background};
  
  /* Enhanced backdrop blur */
  backdrop-filter: blur(25px) saturate(200%) brightness(110%);
  -webkit-backdrop-filter: blur(25px) saturate(200%) brightness(110%);
  
  /* Subtle border with gradient */
  border: 1px solid;
  border-image: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.3) 0%, 
    rgba(255, 255, 255, 0.1) 50%, 
    rgba(255, 255, 255, 0.2) 100%) 1;
  border-radius: ${({theme:a})=>a.borderRadius["3xl"]};
  
  /* Enhanced shadows */
  box-shadow: 
    /* Inner glow */
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    /* Outer shadow */
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.1),
    /* Colored shadow */
    0 4px 20px rgba(103, 126, 234, 0.1);
  
  overflow: hidden;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Liquid glass shimmer effect */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: 
      radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    opacity: 0;
    transition: all 0.6s ease;
    pointer-events: none;
    z-index: 1;
  }
  
  /* Gradient border animation */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    padding: 2px;
    background: linear-gradient(45deg, 
      rgba(103, 126, 234, 0.4) 0%, 
      rgba(240, 147, 251, 0.4) 25%,
      rgba(118, 75, 162, 0.4) 50%,
      rgba(59, 130, 246, 0.4) 75%,
      rgba(103, 126, 234, 0.4) 100%);
    border-radius: ${({theme:a})=>a.borderRadius["3xl"]};
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    /* Enhanced glass effect on hover */
    background: 
      linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%),
      ${({theme:a})=>a.glass.backgroundStrong};
    
    backdrop-filter: blur(30px) saturate(250%) brightness(120%);
    -webkit-backdrop-filter: blur(30px) saturate(250%) brightness(120%);
    
    box-shadow: 
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      0 30px 60px rgba(0, 0, 0, 0.15),
      0 12px 24px rgba(0, 0, 0, 0.15),
      0 6px 30px rgba(103, 126, 234, 0.2);
    
    transform: translateY(-12px) scale(1.03);
    
    &::before {
      opacity: 1;
      transform: rotate(45deg);
    }
    
    &::after {
      opacity: 0.6;
    }
  }
`,x=r.div`
  width: 100%;
  height: 260px;
  overflow: hidden;
  border-radius: ${({theme:a})=>a.borderRadius["3xl"]} ${({theme:a})=>a.borderRadius["3xl"]} 0 0;
  position: relative;
  
  /* Liquid glass overlay with multiple layers */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      /* Gradient overlay */
      linear-gradient(135deg, 
        rgba(255, 255, 255, 0.1) 0%, 
        rgba(255, 255, 255, 0.05) 50%, 
        rgba(255, 255, 255, 0.08) 100%),
      /* Frosted glass effect */
      ${({theme:a})=>a.glass.backgroundWeak};
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    opacity: 0.3;
    transition: all 0.4s ease;
    z-index: 1;
  }
  
  /* Shimmer effect */
  &::after {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    width: 300%;
    height: 300%;
    background: 
      linear-gradient(45deg, 
        transparent 30%, 
        rgba(255, 255, 255, 0.2) 50%, 
        transparent 70%);
    opacity: 0;
    transition: all 0.6s ease;
    z-index: 2;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    filter: brightness(1.1) contrast(1.1) saturate(1.2);
  }

  &:hover {
    img {
      transform: scale(1.1) rotate(1deg);
      filter: brightness(1.2) contrast(1.2) saturate(1.3);
    }
    
    &::before {
      opacity: 0.1;
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
    }
    
    &::after {
      opacity: 1;
      transform: translateX(100%) translateY(100%);
    }
  }
`,h=r.div`
  padding: ${({theme:a})=>a.spacing[6]};
  position: relative;
  z-index: 1;
`,m=r.h3`
  font-size: ${({theme:a})=>a.fontSize.xl};
  font-weight: 700;
  color: ${({theme:a})=>a.primary};
  margin-bottom: ${({theme:a})=>a.spacing[4]};
  letter-spacing: -0.02em;
`,k=r.p`
  color: ${({theme:a})=>a.text};
  margin-bottom: ${({theme:a})=>a.spacing[4]};
  line-height: 1.7;
  font-size: ${({theme:a})=>a.fontSize.sm};
  opacity: 0.9;
`,$=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:a})=>a.spacing[2]};
  margin-top: ${({theme:a})=>a.spacing[4]};
`,y=r.span`
  /* Liquid glass morphism tech tags */
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%),
    ${({theme:a})=>a.glass.backgroundWeak};
  backdrop-filter: blur(15px) saturate(180%);
  -webkit-backdrop-filter: blur(15px) saturate(180%);
  
  color: ${({theme:a})=>a.primary};
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: ${({theme:a})=>`${a.spacing[2]} ${a.spacing[4]}`};
  border-radius: ${({theme:a})=>a.borderRadius.full};
  font-size: ${({theme:a})=>a.fontSize.xs};
  font-weight: 700;
  letter-spacing: 0.02em;
  
  /* Enhanced shadows */
  box-shadow: 
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    0 4px 8px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(103, 126, 234, 0.1);
  
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  
  /* Shimmer effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.3) 50%, 
      transparent 100%);
    transition: left 0.5s ease;
    border-radius: ${({theme:a})=>a.borderRadius.full};
  }
  
  &:hover {
    background: 
      linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%),
      ${({theme:a})=>a.glass.background};
    border-color: ${({theme:a})=>a.primary};
    color: ${({theme:a})=>a.primary};
    
    box-shadow: 
      inset 0 1px 0 rgba(255, 255, 255, 0.4),
      0 6px 12px rgba(0, 0, 0, 0.15),
      0 3px 6px rgba(103, 126, 234, 0.2);
    
    transform: translateY(-2px) scale(1.08);
    
    &::before {
      left: 100%;
    }
  }
`;r.div`
  color: ${({theme:a})=>a.secondary};
  font-size: ${({theme:a})=>a.fontSize.xs};
  margin-top: ${({theme:a})=>a.spacing[4]};
  padding-top: ${({theme:a})=>a.spacing[4]};
  border-top: 1px solid ${({theme:a})=>a.glass.border};
  opacity: 0.8;
`;const S=()=>{const a=[{id:1,title:"Linkzy Chat App",description:"A real-time chatting app built with Firebase backend, featuring user authentication and live messaging capabilities.",tech:["Flutter","Firebase","Android Studio"],image:d},{id:2,title:"Muzic App",description:"Feature-rich music player with local playback, notification controls, and background playback support.",tech:["Java","Android Studio"],image:l},{id:3,title:"Tic Tac Toe Game",description:"An interactive Tic Tac Toe game for Android, created with AI assistance.",tech:["Java","Android Studio","AI"],image:g}],o={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},s={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return t.jsx(c,{children:t.jsxs(p,{children:[t.jsx(b,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"My Projects"}),t.jsx(u,{variants:o,initial:"hidden",animate:"visible",children:a.map(i=>t.jsxs(f,{variants:s,initial:"hidden",animate:"visible",whileHover:{y:-8,scale:1.02},transition:{duration:.3},children:[t.jsx(x,{children:t.jsx("img",{src:i.image,alt:i.title})}),t.jsxs(h,{children:[t.jsx(m,{children:i.title}),t.jsx(k,{children:i.description}),t.jsx($,{children:i.tech.map(n=>t.jsx(y,{children:n},n))})]})]},i.id))})]})})};export{S as default};
