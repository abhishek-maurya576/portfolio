import{j as r}from"./three-BSiCeBfb.js";import{d as a,m as o}from"./styling-JrEYv7ut.js";import{u as g}from"./index-CNwvuJSz.js";const c=a(o.section)`
  padding: ${({theme:i})=>i.spacing[24]} ${({theme:i})=>i.spacing[8]};
  
  /* Enhanced glass morphism */
  background: ${({theme:i})=>i.glass.background};
  backdrop-filter: ${({theme:i})=>i.glass.backdropStrong};
  -webkit-backdrop-filter: ${({theme:i})=>i.glass.backdropStrong};
  border: 1px solid ${({theme:i})=>i.glass.border};
  border-radius: ${({theme:i})=>i.borderRadius["3xl"]};
  box-shadow: ${({theme:i})=>i.shadows.glass.xl};
  
  margin: ${({theme:i})=>i.spacing[16]} auto;
  max-width: 1200px;
  position: relative;
  
  /* Gradient border effect */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 1px;
    background: ${({theme:i})=>i.gradients.primary};
    border-radius: ${({theme:i})=>i.borderRadius["3xl"]};
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0.2;
  }
  
  @media (max-width: 768px) {
    padding: ${({theme:i})=>i.spacing[16]} ${({theme:i})=>i.spacing[4]};
    margin: ${({theme:i})=>i.spacing[12]} ${({theme:i})=>i.spacing[4]};
  }
`,p=a.h2`
  font-size: ${({theme:i})=>i.fontSize["4xl"]};
  font-weight: 800;
  text-align: center;
  margin-bottom: ${({theme:i})=>i.spacing[12]};
  letter-spacing: -0.03em;
  
  /* Enhanced gradient text */
  background: ${({theme:i})=>i.gradients.hero};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: ${({theme:i})=>i.fontSize["3xl"]};
    margin-bottom: ${({theme:i})=>i.spacing[8]};
  }
`,m=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${({theme:i})=>i.spacing[8]};
  margin-bottom: ${({theme:i})=>i.spacing[16]};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({theme:i})=>i.spacing[6]};
  }
`,b=a(o.div)`
  padding: ${({theme:i})=>i.spacing[8]};
  
  /* Enhanced glass morphism */
  background: ${({theme:i})=>i.glass.backgroundWeak};
  backdrop-filter: ${({theme:i})=>i.glass.backdrop};
  -webkit-backdrop-filter: ${({theme:i})=>i.glass.backdrop};
  border: 1px solid ${({theme:i})=>i.glass.border};
  border-radius: ${({theme:i})=>i.borderRadius["2xl"]};
  box-shadow: ${({theme:i})=>i.shadows.glass.md};
  
  position: relative;
  transition: all ${({theme:i})=>i.transitions.normal};
  
  &:hover {
    background: ${({theme:i})=>i.glass.background};
    border-color: ${({theme:i})=>i.glass.borderStrong};
    box-shadow: ${({theme:i})=>i.shadows.glass.lg};
    transform: translateY(-4px);
  }

  h3 {
    font-size: ${({theme:i})=>i.fontSize.xl};
    font-weight: 700;
    margin-bottom: ${({theme:i})=>i.spacing[6]};
    color: ${({theme:i})=>i.primary};
    letter-spacing: -0.02em;
  }
`,$=a.ul`
  list-style: none;
  padding: 0;
`,x=a(o.li)`
  display: flex;
  align-items: center;
  margin-bottom: ${({theme:i})=>i.spacing[3]};
  color: ${({theme:i})=>i.text};
  font-size: ${({theme:i})=>i.fontSize.sm};
  font-weight: 500;
  padding: ${({theme:i})=>`${i.spacing[2]} ${i.spacing[4]}`};
  border-radius: ${({theme:i})=>i.borderRadius.lg};
  
  /* Subtle glass background */
  background: ${({theme:i})=>i.glass.backgroundWeak};
  border: 1px solid ${({theme:i})=>i.glass.border};
  
  transition: all ${({theme:i})=>i.transitions.fast};
  
  &:hover {
    background: ${({theme:i})=>i.glass.background};
    border-color: ${({theme:i})=>i.primary};
    transform: translateX(4px);
  }

  &:before {
    content: '▹';
    color: ${({theme:i})=>i.accent};
    margin-right: ${({theme:i})=>i.spacing[3]};
    font-size: ${({theme:i})=>i.fontSize.base};
    font-weight: 600;
  }
`;a.div`
  margin-top: 4rem;
  text-align: center;

  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: ${({theme:i})=>i.primary};
  }
`;a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;a(o.div)`
  padding: 1.5rem;
  background: ${({theme:i})=>`rgba(${i.backgroundRgba}, 0.3)`};
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: ${({theme:i})=>i.accent};
  }

  p {
    color: ${({theme:i})=>i.secondary};
    font-size: 0.9rem;
  }
`;const f={"Programming Languages":["Java","Kotlin","Python","JavaScript","Dart","Flutter","C"],"Web Development":["HTML","CSS","Tailwind CSS","Material UI","Responsive Design"],"Data Science & AI:":["Machine Learning","Deep Learning","Python"],"Database Query Languages":["SQL","NoSQL"],"Operating Systems":["Linux","Windows"],"Version Control":["Git","GitHub"],"Development Tools":["Android Studio","IntelliJ IDEA","VS Code","Git & GitHub","Firebase","Docker","Kaggle","Project IDX","Postman","Figma","Adobe Photoshop","Capcut"],"Other Skills":["RESTful APIs","Database Design","UI/UX Design","MS Office","Problem Solving","Team Collaboration"]},S=()=>{const{ref:i,inView:t}=g({threshold:.2,triggerOnce:!0});return r.jsxs(c,{ref:i,initial:{opacity:0,y:50},animate:t?{opacity:1,y:0}:{},transition:{duration:.8},children:[r.jsx(p,{children:"Skills & Expertise"}),r.jsx(m,{children:Object.entries(f).map(([e,s],d)=>r.jsxs(b,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{},transition:{duration:.5,delay:d*.1},children:[r.jsx("h3",{children:e}),r.jsx($,{children:s.map((n,l)=>r.jsx(x,{initial:{opacity:0,x:-20},animate:t?{opacity:1,x:0}:{},transition:{duration:.5,delay:l*.1},children:n},n))})]},e))})]})};export{S};
