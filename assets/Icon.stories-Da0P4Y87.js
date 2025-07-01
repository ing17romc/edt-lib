import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as r,a as o,b as a}from"./index-BsG5_q5-.js";import"./index-D4lIrffr.js";import"./index-_oZgBBUR.js";const M={title:"Components/Icon",component:a,tags:["autodocs"],argTypes:{name:{control:"text",description:"Nombre del icono a mostrar"},size:{control:"select",options:Object.values(o),description:"Tamaño del icono",table:{defaultValue:{summary:o.MEDIUM}}},variant:{control:"select",options:Object.values(r),description:"Estilo del icono",table:{defaultValue:{summary:r.OUTLINE}}},color:{control:"color",description:"Color principal del icono"},secondaryColor:{control:"color",description:"Color secundario (solo para variante dual)"},inheritColor:{control:{type:"boolean"},description:"Si hereda el color del elemento padre",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}},args:{name:"home",size:o.MEDIUM,variant:r.OUTLINE}},s={args:{name:"home"}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{name:"home",size:o.XSMALL}),e.jsx("span",{children:"XSmall"}),e.jsx(a,{name:"home",size:o.SMALL}),e.jsx("span",{children:"Small"}),e.jsx(a,{name:"home",size:o.MEDIUM}),e.jsx("span",{children:"Medium"}),e.jsx(a,{name:"home",size:o.LARGE}),e.jsx("span",{children:"Large"}),e.jsx(a,{name:"home",size:o.XLARGE}),e.jsx("span",{children:"XLarge"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{name:"home",variant:r.OUTLINE}),e.jsx("span",{children:"Outline"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{name:"home",variant:r.SOLID,color:"#007bff"}),e.jsx("span",{children:"Solid"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{name:"home",variant:r.DUAL,color:"#ff5722",secondaryColor:"#4caf50"}),e.jsx("span",{children:"Dual"})]})]})},l={args:{name:"star",color:"#ff5722"}},t={render:()=>e.jsxs("div",{style:{color:"purple"},children:[e.jsx("p",{children:"Este texto es morado, y el icono hereda el color:"}),e.jsx(a,{name:"check",inheritColor:!0})]})};var c,m,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: 'home'
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,x,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Icon name="home" size={IconSize.XSMALL} />
      <span>XSmall</span>
      <Icon name="home" size={IconSize.SMALL} />
      <span>Small</span>
      <Icon name="home" size={IconSize.MEDIUM} />
      <span>Medium</span>
      <Icon name="home" size={IconSize.LARGE} />
      <span>Large</span>
      <Icon name="home" size={IconSize.XLARGE} />
      <span>XLarge</span>
    </div>
}`,...(u=(x=n.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var h,I,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <Icon name="home" variant={IconVariant.OUTLINE} />
        <span>Outline</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <Icon name="home" variant={IconVariant.SOLID} color="#007bff" />
        <span>Solid</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <Icon name="home" variant={IconVariant.DUAL} color="#ff5722" secondaryColor="#4caf50" />
        <span>Dual</span>
      </div>
    </div>
}`,...(f=(I=i.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var g,y,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'star',
    color: '#ff5722'
  }
}`,...(v=(y=l.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var j,S,L;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    color: 'purple'
  }}>
      <p>Este texto es morado, y el icono hereda el color:</p>
      <Icon name="check" inheritColor />
    </div>
}`,...(L=(S=t.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};const b=["Default","Sizes","Variants","WithCustomColor","WithInheritColor"];export{s as Default,n as Sizes,i as Variants,l as WithCustomColor,t as WithInheritColor,b as __namedExportsOrder,M as default};
