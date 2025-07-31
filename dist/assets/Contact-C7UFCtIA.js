import{j as a}from"./index-d1cPc047.js";import{d as r,m as i}from"./styling-JrEYv7ut.js";import{r as u}from"./vendor-IUCS5aZ6.js";const y=r.div`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`,f=r(i.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(45deg, ${({theme:e})=>e.primary}, ${({theme:e})=>e.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,w=r(i.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
`,s=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,m=r.label`
  color: ${({theme:e})=>e.text};
  font-size: 1rem;
`,p=r.input`
  padding: 0.8rem;
  border: 2px solid ${({theme:e})=>e.secondary}40;
  border-radius: 8px;
  background: ${({theme:e})=>e.cardBg};
  color: ${({theme:e})=>e.text};
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.primary};
  }
`,j=r.textarea`
  padding: 0.8rem;
  border: 2px solid ${({theme:e})=>e.secondary}40;
  border-radius: 8px;
  background: ${({theme:e})=>e.cardBg};
  color: ${({theme:e})=>e.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.primary};
  }
`,$=r(i.button)`
  padding: 1rem 2rem;
  background: ${({theme:e})=>e.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  align-self: flex-start;
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,k=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`,v=r(i.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: ${({theme:e})=>e.cardBg};
  border-radius: 8px;
  box-shadow: ${({theme:e})=>e.shadow};
  transition: transform 0.3s ease;
  
  span {
    font-size: 1.5rem;
  }
`,F=()=>{const[e,l]=u.useState({name:"",email:"",message:""}),[c,d]=u.useState(!1),o=t=>{const{name:n,value:h}=t.target;l(b=>({...b,[n]:h}))},g=async t=>{t.preventDefault(),d(!0);try{await new Promise(n=>setTimeout(n,1e3)),alert("Message sent successfully!"),l({name:"",email:"",message:""})}catch{alert("Failed to send message. Please try again.")}finally{d(!1)}},x=[{name:"GitHub",icon:"💻",url:"https://github.com/abhishek-maurya576"},{name:"LinkedIn",icon:"👔",url:"https://www.linkedin.com/in/abhishekmaurya9118"},{name:"Instagram",icon:"📸",url:"https://www.instagram.com/b_for_bca"}];return a.jsxs(y,{children:[a.jsx(f,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Get In Touch"}),a.jsxs(w,{onSubmit:g,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[a.jsxs(s,{children:[a.jsx(m,{htmlFor:"name",children:"Name"}),a.jsx(p,{type:"text",id:"name",name:"name",value:e.name,onChange:o,required:!0})]}),a.jsxs(s,{children:[a.jsx(m,{htmlFor:"email",children:"Email"}),a.jsx(p,{type:"email",id:"email",name:"email",value:e.email,onChange:o,required:!0})]}),a.jsxs(s,{children:[a.jsx(m,{htmlFor:"message",children:"Message"}),a.jsx(j,{id:"message",name:"message",value:e.message,onChange:o,required:!0})]}),a.jsx($,{type:"submit",disabled:c,whileHover:{scale:1.05},whileTap:{scale:.95},children:c?"Sending...":"Send Message"})]}),a.jsx(k,{children:x.map((t,n)=>a.jsxs(v,{href:t.url,target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4+n*.1},whileHover:{y:-5},children:[a.jsx("span",{children:t.icon}),t.name]},t.name))})]})};export{F as default};
