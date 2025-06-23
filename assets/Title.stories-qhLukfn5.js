import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as j}from"./index-D4lIrffr.js";const l=({level:o=1,className:h="",style:v,children:g,...f})=>{const x=`h${o}`;return e.jsxs("div",{children:[j.createElement(x,{className:`title title--level-${o} ${h}`.trim(),style:v,...f},g),e.jsx("div",{className:"line"})]})};l.__docgenInfo={description:"",methods:[],displayName:"Title",props:{level:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"",defaultValue:{value:"1",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const S={title:"Controls/Title",component:l,tags:["autodocs"],argTypes:{level:{control:{type:"select"},options:[1,2,3,4,5,6],description:"Nivel del heading (h1-h6)"},className:{control:"text",description:"Clase CSS adicional"},style:{control:"object",description:"Estilos CSS en línea"},children:{control:"text",description:"Contenido del título"}},args:{level:1,children:"Título principal"}},t={args:{level:1,children:"Título principal"}},a={render:o=>e.jsxs(e.Fragment,{children:[e.jsx(l,{level:1,children:"Título h1"}),e.jsx(l,{level:2,children:"Título h2"}),e.jsx(l,{level:3,children:"Título h3"}),e.jsx(l,{level:4,children:"Título h4"}),e.jsx(l,{level:5,children:"Título h5"}),e.jsx(l,{level:6,children:"Título h6"})]})},r={args:{level:2,className:"custom-title",style:{color:"tomato",fontWeight:"bold"},children:"Título personalizado"}};var s,n,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: 'Título principal'
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,d,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <>
      <Title level={1}>Título h1</Title>
      <Title level={2}>Título h2</Title>
      <Title level={3}>Título h3</Title>
      <Title level={4}>Título h4</Title>
      <Title level={5}>Título h5</Title>
      <Title level={6}>Título h6</Title>
    </>
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,m,T;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    level: 2,
    className: 'custom-title',
    style: {
      color: 'tomato',
      fontWeight: 'bold'
    },
    children: 'Título personalizado'
  }
}`,...(T=(m=r.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};const R=["Default","Niveles","Personalizado"];export{t as Default,a as Niveles,r as Personalizado,R as __namedExportsOrder,S as default};
