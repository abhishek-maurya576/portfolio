import{j as i}from"./three-BSiCeBfb.js";import{d as r,m as t}from"./styling-JrEYv7ut.js";import{S as g}from"./SkillsSection-D-JuCSbm.js";import"./vendor-IUCS5aZ6.js";import"./index-CNwvuJSz.js";const j=r.div`
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
`,s=r(t.section)`
  margin-bottom: 3rem;
`,a=r(t.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, ${({theme:e})=>e.primary}, ${({theme:e})=>e.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,p=r.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({theme:e})=>e.text};
  margin-bottom: 1.5rem;
`,u=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,d=r.div`
  background: ${({theme:e})=>e.cardBg};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: ${({theme:e})=>e.shadow};
`,l=r.h3`
  color: ${({theme:e})=>e.primary};
  margin-bottom: 1rem;
  font-size: 1.2rem;
`,c=r.ul`
  list-style: none;
  padding: 0;
`,n=r.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  
  &:before {
    content: "▹";
    color: ${({theme:e})=>e.primary};
    margin-right: 0.5rem;
  }
`,b=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`,m=r(t.div)`
  background: ${({theme:e})=>e.background};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,h=r.h4`
  color: ${({theme:e})=>e.primary};
  margin-bottom: 0.5rem;
`,x=r.p`
  color: ${({theme:e})=>e.secondary};
  font-size: 0.9rem;
`,k=()=>{const e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},o={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return i.jsx(j,{children:i.jsxs(t.div,{variants:e,initial:"hidden",animate:"visible",children:[i.jsxs(s,{variants:o,children:[i.jsx(a,{children:"About Me"}),i.jsx(p,{children:"I'm a BCA student at CMP Degree College with a passion for software development and creating innovative applications. My journey in tech began with a curiosity about how apps work, which led me to pursue app development and programming."}),i.jsx(p,{children:"Currently, I'm focused on expanding my knowledge in modern web technologies and mobile app development, while also exploring the fascinating world of AI and machine learning."})]}),i.jsxs(s,{variants:o,children:[i.jsx(a,{children:"Skills"}),i.jsxs(u,{children:[i.jsxs(d,{children:[i.jsx(l,{children:"Programming Languages"}),i.jsxs(c,{children:[i.jsx(n,{children:"C"}),i.jsx(n,{children:"Java"}),i.jsx(n,{children:"JavaScript"})]})]}),i.jsxs(d,{children:[i.jsx(l,{children:"Frameworks & Libraries"}),i.jsxs(c,{children:[i.jsx(n,{children:"React.js"}),i.jsx(n,{children:"Firebase"}),i.jsx(n,{children:"Android SDK"})]})]}),i.jsxs(d,{children:[i.jsx(l,{children:"Tools & Platforms"}),i.jsxs(c,{children:[i.jsx(n,{children:"Git & GitHub"}),i.jsx(n,{children:"Postman"}),i.jsx(n,{children:"Android Studio"})]})]})]})]}),i.jsxs(s,{variants:o,children:[i.jsx(a,{children:"Certifications"}),i.jsxs(b,{children:[i.jsxs(m,{whileHover:{y:-5},children:[i.jsx(h,{children:"Introduction to Artificial Intelligence"}),i.jsx(x,{children:"Infosys Springboard (2024)"})]}),i.jsxs(m,{whileHover:{y:-5},children:[i.jsx(h,{children:"Postman API Fundamentals Student Expert"}),i.jsx(x,{children:"Postman (2024)"})]}),i.jsxs(m,{whileHover:{y:-5},children:[i.jsx(h,{children:"C Programming Certification Test"}),i.jsx(x,{children:"KG Coding (2024)"})]})]})]}),i.jsx(g,{})]})})};export{k as default};
