import{j as t}from"./index-EyyUM3GC.js";import{d as r,m as o}from"./styling-JrEYv7ut.js";import{u as c}from"./index-CNwvuJSz.js";const m=r(o.section)`
  padding: 6rem 2rem;
  background: ${({theme:i})=>`rgba(${i.backgroundRgba}, 0.2)`};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  margin: 4rem auto;
  max-width: 1200px;
`,g=r.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, ${({theme:i})=>i.primary}, ${({theme:i})=>i.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,p=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,b=r(o.div)`
  padding: 2rem;
  background: ${({theme:i})=>`rgba(${i.backgroundRgba}, 0.3)`};
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: ${({theme:i})=>i.primary};
  }
`,x=r.ul`
  list-style: none;
  padding: 0;
`,u=r(o.li)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: ${({theme:i})=>i.text};

  &:before {
    content: '▹';
    color: ${({theme:i})=>i.accent};
    margin-right: 1rem;
  }
`,h=r.div`
  margin-top: 4rem;
  text-align: center;

  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: ${({theme:i})=>i.primary};
  }
`,y=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,f=r(o.div)`
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
`,k={"Languages & Frameworks":["Java","Kotlin","JavaScript","Node.js","React","Express","HTML5","CSS3"],"Development Tools":["Android Studio","IntelliJ IDEA","VS Code","Git & GitHub","Firebase","Docker"],"Other Skills":["RESTful APIs","Database Design","UI/UX Design","Agile Methodology","Problem Solving","Team Collaboration"]},S=[{title:"Postman API Fundamentals",issuer:"Postman",date:"2023"},{title:"C Programming Certification",issuer:"Coding Ninjas",date:"2023"}],v=()=>{const{ref:i,inView:a}=c({threshold:.2,triggerOnce:!0});return t.jsxs(m,{ref:i,initial:{opacity:0,y:50},animate:a?{opacity:1,y:0}:{},transition:{duration:.8},children:[t.jsx(g,{children:"Skills & Expertise"}),t.jsx(p,{children:Object.entries(k).map(([e,n],l)=>t.jsxs(b,{initial:{opacity:0,y:20},animate:a?{opacity:1,y:0}:{},transition:{duration:.5,delay:l*.1},children:[t.jsx("h3",{children:e}),t.jsx(x,{children:n.map((s,d)=>t.jsx(u,{initial:{opacity:0,x:-20},animate:a?{opacity:1,x:0}:{},transition:{duration:.5,delay:d*.1},children:s},s))})]},e))}),t.jsxs(h,{children:[t.jsx("h3",{children:"Certifications"}),t.jsx(y,{children:S.map((e,n)=>t.jsxs(f,{initial:{opacity:0,y:20},animate:a?{opacity:1,y:0}:{},transition:{duration:.5,delay:n*.1},whileHover:{y:-5},children:[t.jsx("h4",{children:e.title}),t.jsxs("p",{children:[e.issuer," • ",e.date]})]},e.title))})]})]})};export{v as S};
