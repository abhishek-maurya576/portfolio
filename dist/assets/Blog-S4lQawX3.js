import{j as t}from"./index-EyyUM3GC.js";import{d as i,m as o}from"./styling-JrEYv7ut.js";import{u as d}from"./index-CNwvuJSz.js";import"./vendor-IUCS5aZ6.js";const s=i(o.div)`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,c=i.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, ${({theme:e})=>e.primary}, ${({theme:e})=>e.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,l=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,m=i(o.article)`
  background: ${({theme:e})=>`rgba(${e.backgroundRgba}, 0.2)`};
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px -10px ${({theme:e})=>`rgba(${e.backgroundRgba}, 0.5)`};
  }
`,g=i.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;
  background: ${({theme:e})=>`rgba(${e.backgroundRgba}, 0.1)`};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      ${({theme:e})=>`rgba(${e.backgroundRgba}, 0.2)`} 100%
    );
  }
`,p=i.div`
  padding: 1.5rem;
`,b=i.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({theme:e})=>e.primary};
`,h=i.p`
  color: ${({theme:e})=>e.text};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`,x=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({theme:e})=>e.secondary};
  font-size: 0.9rem;
`,u=i.a`
  color: ${({theme:e})=>e.accent};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${({theme:e})=>e.primary};
  }
`,f=[{id:1,title:"Getting Started with Android Development",excerpt:"A comprehensive guide to starting your journey in Android app development using Kotlin and Android Studio.",image:"https://cdn.dribbble.com/users/1787323/screenshots/17460145/media/ca3e5c1e2caa9ce8a7ce58bbf104c87e.png",date:"Jan 15, 2024",readTime:"5 min read"},{id:2,title:"Building Real-time Chat Applications",excerpt:"Learn how to create a real-time chat application using Firebase and modern Android development practices.",image:"https://cdn.dribbble.com/users/1615584/screenshots/16969144/media/f7bd21298e7c7e5ef40e8e6d9631bed9.jpg",date:"Jan 10, 2024",readTime:"8 min read"},{id:3,title:"Implementing AI in Mobile Apps",excerpt:"Explore ways to integrate artificial intelligence features into your mobile applications.",image:"https://cdn.dribbble.com/users/1626229/screenshots/15638381/media/05f19e57f90c84b0426d5a0b92d48066.jpg",date:"Jan 5, 2024",readTime:"6 min read"}],$=()=>{const{ref:e,inView:a}=d({threshold:.2,triggerOnce:!0});return t.jsxs(s,{ref:e,initial:{opacity:0,y:50},animate:a?{opacity:1,y:0}:{},transition:{duration:.8},children:[t.jsx(c,{children:"Blog"}),t.jsx(l,{children:f.map((r,n)=>t.jsxs(m,{initial:{opacity:0,y:20},animate:a?{opacity:1,y:0}:{},transition:{duration:.5,delay:n*.1},children:[t.jsx(g,{children:t.jsx("img",{src:r.image,alt:r.title})}),t.jsxs(p,{children:[t.jsx(b,{children:r.title}),t.jsx(h,{children:r.excerpt}),t.jsxs(x,{children:[t.jsxs("span",{children:[r.date," · ",r.readTime]}),t.jsx(u,{href:"#",children:"Read More →"})]})]})]},r.id))})]})};export{$ as default};
