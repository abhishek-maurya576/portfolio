import{j as i}from"./index-d1cPc047.js";import{d as t,m as n}from"./styling-JrEYv7ut.js";import{u as d}from"./index-CNwvuJSz.js";import"./vendor-IUCS5aZ6.js";const m=t(n.div)`
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`,s=t.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, ${({theme:e})=>e.primary}, ${({theme:e})=>e.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`,c=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,l=t(n.article)`
  background: ${({theme:e})=>`rgba(${e.backgroundRgba}, 0.2)`};
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    margin: 0 0.5rem;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px -10px ${({theme:e})=>`rgba(${e.backgroundRgba}, 0.5)`};
  
    @media (max-width: 768px) {
      transform: translateY(-5px);
    }
  }
`,p=t.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;
  background: ${({theme:e})=>`rgba(${e.backgroundRgba}, 0.1)`};
  
  @media (max-width: 768px) {
    height: 200px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.1);
  }
`,g=t.div`
  padding: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,x=t.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({theme:e})=>e.primary};
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,h=t.p`
  color: ${({theme:e})=>e.text};
  margin-bottom: 1.5rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`,b=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({theme:e})=>e.secondary};
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
`,f=t.a`
  color: ${({theme:e})=>e.accent};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${({theme:e})=>e.primary};
  }
`,u=[{id:1,title:"Getting Started with Android Development",excerpt:"A comprehensive guide to starting your journey in Android app development using Kotlin and Android Studio.",image:"https://cdn.dribbble.com/users/1787323/screenshots/17460145/media/ca3e5c1e2caa9ce8a7ce58bbf104c87e.png",date:"Jan 15, 2024",readTime:"5 min read"},{id:2,title:"Building Real-time Chat Applications",excerpt:"Learn how to create a real-time chat application using Firebase and modern Android development practices.",image:"https://cdn.dribbble.com/users/1615584/screenshots/16969144/media/f7bd21298e7c7e5ef40e8e6d9631bed9.jpg",date:"Jan 10, 2024",readTime:"8 min read"},{id:3,title:"Implementing AI in Mobile Apps",excerpt:"Explore ways to integrate artificial intelligence features into your mobile applications.",image:"https://cdn.dribbble.com/users/1626229/screenshots/15638381/media/05f19e57f90c84b0426d5a0b92d48066.jpg",date:"Jan 5, 2024",readTime:"6 min read"}],$=()=>{const{ref:e,inView:a}=d({threshold:.2,triggerOnce:!0});return i.jsxs(m,{ref:e,initial:{opacity:0,y:50},animate:a?{opacity:1,y:0}:{},transition:{duration:.8},children:[i.jsx(s,{children:"Blog"}),i.jsx(c,{children:u.map((r,o)=>i.jsxs(l,{initial:{opacity:0,y:20},animate:a?{opacity:1,y:0}:{},transition:{duration:.5,delay:o*.1},children:[i.jsx(p,{children:i.jsx("img",{src:r.image,alt:r.title})}),i.jsxs(g,{children:[i.jsx(x,{children:r.title}),i.jsx(h,{children:r.excerpt}),i.jsxs(b,{children:[i.jsxs("span",{children:[r.date," · ",r.readTime]}),i.jsx(f,{href:"#",children:"Read More →"})]})]})]},r.id))})]})};export{$ as default};
