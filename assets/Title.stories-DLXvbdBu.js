import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as B}from"./index-D4lIrffr.js";const t=({level:c=1,className:A="",style:M,children:O,...U})=>{const k=`h${c}`;return e.jsxs("div",{children:[B.createElement(k,{className:`title title--level-${c} ${A}`.trim(),style:M,...U},O),e.jsx("div",{className:"line"})]})};t.__docgenInfo={description:"",methods:[],displayName:"Title",props:{level:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"Nivel del heading (h1-h6)",defaultValue:{value:"1",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Clase CSS adicional",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Estilos CSS en línea"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Contenido del título"}},composes:["HTMLAttributes"]};const K={title:"Controls/Title",component:t,tags:["autodocs","controls"],parameters:{componentSubtitle:"Componente de título personalizable",docs:{description:{component:"Un componente de título que puede representarse como h1-h6 con estilos personalizables."}}},argTypes:{level:{control:{type:"select"},options:[1,2,3,4,5,6],description:"Nivel del heading (h1-h6)",table:{type:{summary:"1 | 2 | 3 | 4 | 5 | 6"},defaultValue:{summary:"1"}}},className:{control:"text",description:"Clase CSS adicional para personalizar el estilo",table:{type:{summary:"string"}}},style:{control:"object",description:"Estilos CSS en línea",table:{type:{summary:"React.CSSProperties"}}},children:{control:"text",description:"Contenido del título",table:{type:{summary:"React.ReactNode"}}}},args:{level:1,children:"Título principal"}},l={},o={args:{level:2,children:"Título de nivel 2"}},s={args:{level:3,className:"custom-title",children:"Título con clase personalizada"}},a={args:{level:4,style:{color:"#007bff",fontStyle:"italic"},children:"Título con estilos en línea"}},r={args:{level:5,className:"custom-title",style:{color:"#28a745",textDecoration:"underline"},children:"Título completamente personalizado"}},n={render:c=>e.jsxs(e.Fragment,{children:[e.jsx(t,{level:1,children:"Título h1"}),e.jsx(t,{level:2,children:"Título h2"}),e.jsx(t,{level:3,children:"Título h3"}),e.jsx(t,{level:4,children:"Título h4"}),e.jsx(t,{level:5,children:"Título h5"}),e.jsx(t,{level:6,children:"Título h6"})]})},i={args:{level:2,className:"custom-title",style:{color:"tomato",fontWeight:"bold"},children:"Título personalizado"}};var d,u,m,p,h;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(u=l.parameters)==null?void 0:u.docs)==null?void 0:m.source},description:{story:"Título de nivel 1 por defecto",...(h=(p=l.parameters)==null?void 0:p.docs)==null?void 0:h.description}}};var T,v,y,g,S;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    level: 2,
    children: 'Título de nivel 2'
  }
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source},description:{story:"Título con nivel personalizado",...(S=(g=o.parameters)==null?void 0:g.docs)==null?void 0:S.description}}};var f,C,N,x,z;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    level: 3,
    className: 'custom-title',
    children: 'Título con clase personalizada'
  }
}`,...(N=(C=s.parameters)==null?void 0:C.docs)==null?void 0:N.source},description:{story:"Título con clase personalizada",...(z=(x=s.parameters)==null?void 0:x.docs)==null?void 0:z.description}}};var b,j,R,W,q;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    level: 4,
    style: {
      color: '#007bff',
      fontStyle: 'italic'
    },
    children: 'Título con estilos en línea'
  }
}`,...(R=(j=a.parameters)==null?void 0:j.docs)==null?void 0:R.source},description:{story:"Título con estilos en línea",...(q=(W=a.parameters)==null?void 0:W.docs)==null?void 0:q.description}}};var E,P,D,_,w;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    level: 5,
    className: 'custom-title',
    style: {
      color: '#28a745',
      textDecoration: 'underline'
    },
    children: 'Título completamente personalizado'
  }
}`,...(D=(P=r.parameters)==null?void 0:P.docs)==null?void 0:D.source},description:{story:"Título con todas las personalizaciones",...(w=(_=r.parameters)==null?void 0:_.docs)==null?void 0:w.description}}};var F,I,L;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <>
      <Title level={1}>Título h1</Title>
      <Title level={2}>Título h2</Title>
      <Title level={3}>Título h3</Title>
      <Title level={4}>Título h4</Title>
      <Title level={5}>Título h5</Title>
      <Title level={6}>Título h6</Title>
    </>
}`,...(L=(I=n.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var V,$,H;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    level: 2,
    className: 'custom-title',
    style: {
      color: 'tomato',
      fontWeight: 'bold'
    },
    children: 'Título personalizado'
  }
}`,...(H=($=i.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};const Q=["Default","WithCustomLevel","WithCustomClass","WithInlineStyles","FullyCustomized","Niveles","Personalizado"];export{l as Default,r as FullyCustomized,n as Niveles,i as Personalizado,s as WithCustomClass,o as WithCustomLevel,a as WithInlineStyles,Q as __namedExportsOrder,K as default};
