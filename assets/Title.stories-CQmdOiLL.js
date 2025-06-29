import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as o}from"./index-_JWYNMue.js";import"./index-D4lIrffr.js";const B={title:"Controls/Title",component:o,tags:["autodocs","controls"],parameters:{componentSubtitle:"Componente de título personalizable",docs:{description:{component:"Un componente de título que puede representarse como h1-h6 con estilos personalizables."}}},argTypes:{level:{control:{type:"select"},options:[1,2,3,4,5,6],description:"Nivel del heading (h1-h6)",table:{type:{summary:"1 | 2 | 3 | 4 | 5 | 6"},defaultValue:{summary:"1"}}},className:{control:"text",description:"Clase CSS adicional para personalizar el estilo",table:{type:{summary:"string"}}},style:{control:"object",description:"Estilos CSS en línea",table:{type:{summary:"React.CSSProperties"}}},children:{control:"text",description:"Contenido del título",table:{type:{summary:"React.ReactNode"}}}},args:{level:1,children:"Título principal"}},t={},l={args:{level:2,children:"Título de nivel 2"}},s={args:{level:3,className:"custom-title",children:"Título con clase personalizada"}},r={args:{level:4,style:{color:"#007bff",fontStyle:"italic"},children:"Título con estilos en línea"}},a={args:{level:5,className:"custom-title",style:{color:"#28a745",textDecoration:"underline"},children:"Título completamente personalizado"}},n={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{level:1,children:"Título h1"}),e.jsx(o,{level:2,children:"Título h2"}),e.jsx(o,{level:3,children:"Título h3"}),e.jsx(o,{level:4,children:"Título h4"}),e.jsx(o,{level:5,children:"Título h5"}),e.jsx(o,{level:6,children:"Título h6"})]})},c={args:{level:2,className:"custom-title",style:{color:"tomato",fontWeight:"bold"},children:"Título personalizado"}};var i,d,p,m,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source},description:{story:"Título de nivel 1 por defecto",...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.description}}};var h,T,v,y,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    level: 2,
    children: 'Título de nivel 2'
  }
}`,...(v=(T=l.parameters)==null?void 0:T.docs)==null?void 0:v.source},description:{story:"Título con nivel personalizado",...(g=(y=l.parameters)==null?void 0:y.docs)==null?void 0:g.description}}};var S,z,f,x,C;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    level: 3,
    className: 'custom-title',
    children: 'Título con clase personalizada'
  }
}`,...(f=(z=s.parameters)==null?void 0:z.docs)==null?void 0:f.source},description:{story:"Título con clase personalizada",...(C=(x=s.parameters)==null?void 0:x.docs)==null?void 0:C.description}}};var b,N,j,W,D;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    level: 4,
    style: {
      color: '#007bff',
      fontStyle: 'italic'
    },
    children: 'Título con estilos en línea'
  }
}`,...(j=(N=r.parameters)==null?void 0:N.docs)==null?void 0:j.source},description:{story:"Título con estilos en línea",...(D=(W=r.parameters)==null?void 0:W.docs)==null?void 0:D.description}}};var R,E,F,P,I;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    level: 5,
    className: 'custom-title',
    style: {
      color: '#28a745',
      textDecoration: 'underline'
    },
    children: 'Título completamente personalizado'
  }
}`,...(F=(E=a.parameters)==null?void 0:E.docs)==null?void 0:F.source},description:{story:"Título con todas las personalizaciones",...(I=(P=a.parameters)==null?void 0:P.docs)==null?void 0:I.description}}};var L,_,q;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <>
      <Title level={1}>Título h1</Title>
      <Title level={2}>Título h2</Title>
      <Title level={3}>Título h3</Title>
      <Title level={4}>Título h4</Title>
      <Title level={5}>Título h5</Title>
      <Title level={6}>Título h6</Title>
    </>
}`,...(q=(_=n.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var O,U,V;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    level: 2,
    className: 'custom-title',
    style: {
      color: 'tomato',
      fontWeight: 'bold'
    },
    children: 'Título personalizado'
  }
}`,...(V=(U=c.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const G=["Default","WithCustomLevel","WithCustomClass","WithInlineStyles","FullyCustomized","Niveles","Personalizado"];export{t as Default,a as FullyCustomized,n as Niveles,c as Personalizado,s as WithCustomClass,l as WithCustomLevel,r as WithInlineStyles,G as __namedExportsOrder,B as default};
