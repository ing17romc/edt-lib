import{M as d}from"./index-DnlZc6Pr.js";import"./jsx-runtime-D_zvdyIk.js";const h=[{path:"/home",icon:"home",name:"Inicio"},{path:"/profile",icon:"person",name:"Perfil"}];jest.fn();const f={title:"Controls/Menu",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object",description:"Array of menu options to display"},getCurrentPath:{action:"pathChanged",description:"Callback function when a menu item is clicked"}}},t={args:{options:h,getCurrentPath:o=>console.log(`Navigating to: ${o}`)}},a={args:{options:[],getCurrentPath:o=>console.log(`Navigating to: ${o}`)}},e={args:{options:[{path:"/dashboard",icon:"dashboard",name:"Dashboard"}],getCurrentPath:o=>console.log(`Navigating to: ${o}`)}};var n,r,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    options: mockOptions,
    getCurrentPath: (path: string) => console.log(\`Navigating to: \${path}\`)
  }
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var i,c,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    options: [],
    getCurrentPath: (path: string) => console.log(\`Navigating to: \${path}\`)
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var g,m,l;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    options: [{
      path: '/dashboard',
      icon: 'dashboard',
      name: 'Dashboard'
    }],
    getCurrentPath: (path: string) => console.log(\`Navigating to: \${path}\`)
  }
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const b=["Default","Empty","SingleItem"];export{t as Default,a as Empty,e as SingleItem,b as __namedExportsOrder,f as default};
