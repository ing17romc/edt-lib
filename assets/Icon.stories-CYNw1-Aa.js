import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as V}from"./index-D4lIrffr.js";import{c as R}from"./index-Bckx9Gcf.js";var s=(o=>(o.XSMALL="xsmall",o.SMALL="small",o.MEDIUM="medium",o.LARGE="large",o.XLARGE="xlarge",o))(s||{}),r=(o=>(o.SOLID="solid",o.OUTLINE="outline",o.DUAL="dual",o))(r||{});const X="_icon_19hqa_51",w="_icon__svg_19hqa_88",n={icon:X,"icon--xsmall":"_icon--xsmall_19hqa_60","icon--small":"_icon--small_19hqa_65","icon--medium":"_icon--medium_19hqa_70","icon--large":"_icon--large_19hqa_75","icon--xlarge":"_icon--xlarge_19hqa_80","icon--inherit-color":"_icon--inherit-color_19hqa_85",icon__svg:w,"icon__path--primary":"_icon__path--primary_19hqa_94","icon__path--secondary":"_icon__path--secondary_19hqa_97"},a=V.forwardRef(({name:o,size:p=s.MEDIUM,variant:i=r.OUTLINE,color:u,inheritColor:h=!1,className:q,style:T,...U},A)=>{const O=R(n.icon,{[n[`icon--${p}`]]:p,[n[`icon--${i}`]]:i,[n["icon--inherit-color"]]:h},q),b={...u&&!h?{color:u}:{},...T},N=()=>e.jsxs("svg",{className:n.icon__svg,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",className:n.icon__path,style:{fill:i===r.SOLID?"currentColor":"none",stroke:i!==r.SOLID?"currentColor":"none",strokeWidth:2}}),e.jsx("text",{x:"12",y:"16",textAnchor:"middle",fill:i===r.SOLID?"white":"currentColor",style:{fontSize:"12px",fontWeight:"bold",fontFamily:"sans-serif"},children:o.charAt(0).toUpperCase()})]});return e.jsx("span",{ref:A,className:O,style:b,role:"img","aria-label":o,...U,children:N()})});a.displayName="Icon";a.__docgenInfo={description:`Componente de icono que soporta múltiples tamaños y variantes.
Utiliza SVG para renderizar los iconos de manera escalable.`,methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Nombre del icono a mostrar"},size:{required:!1,tsType:{name:"IconSize"},description:`Tamaño del icono
@default 'medium'`,defaultValue:{value:"IconSize.MEDIUM",computed:!0}},variant:{required:!1,tsType:{name:"IconVariant"},description:`Estilo del icono
@default 'outline'`,defaultValue:{value:"IconVariant.OUTLINE",computed:!0}},color:{required:!1,tsType:{name:"string"},description:`Color principal del icono
@default 'currentColor'`},secondaryColor:{required:!1,tsType:{name:"string"},description:"Color secundario (solo aplica para variante 'dual')"},inheritColor:{required:!1,tsType:{name:"boolean"},description:`Si es true, el icono hereda el color del elemento padre
@default false`,defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Estilos en línea"}},composes:["HTMLAttributes"]};const P={title:"Components/Icon",component:a,tags:["autodocs"],argTypes:{name:{control:"text",description:"Nombre del icono a mostrar"},size:{control:"select",options:Object.values(s),description:"Tamaño del icono",table:{defaultValue:{summary:s.MEDIUM}}},variant:{control:"select",options:Object.values(r),description:"Estilo del icono",table:{defaultValue:{summary:r.OUTLINE}}},color:{control:"color",description:"Color principal del icono"},secondaryColor:{control:"color",description:"Color secundario (solo para variante dual)"},inheritColor:{control:{type:"boolean"},description:"Si hereda el color del elemento padre",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}},args:{name:"home",size:s.MEDIUM,variant:r.OUTLINE}},l={args:{name:"home"}},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{name:"home",size:s.XSMALL}),e.jsx("span",{children:"XSmall"}),e.jsx(a,{name:"home",size:s.SMALL}),e.jsx("span",{children:"Small"}),e.jsx(a,{name:"home",size:s.MEDIUM}),e.jsx("span",{children:"Medium"}),e.jsx(a,{name:"home",size:s.LARGE}),e.jsx("span",{children:"Large"}),e.jsx(a,{name:"home",size:s.XLARGE}),e.jsx("span",{children:"XLarge"})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{name:"home",variant:r.OUTLINE}),e.jsx("span",{children:"Outline"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{name:"home",variant:r.SOLID,color:"#007bff"}),e.jsx("span",{children:"Solid"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{name:"home",variant:r.DUAL,color:"#ff5722",secondaryColor:"#4caf50"}),e.jsx("span",{children:"Dual"})]})]})},d={args:{name:"star",color:"#ff5722"}},m={render:()=>e.jsxs("div",{style:{color:"purple"},children:[e.jsx("p",{children:"Este texto es morado, y el icono hereda el color:"}),e.jsx(a,{name:"check",inheritColor:!0})]})};var x,f,y;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'home'
  }
}`,...(y=(f=l.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var g,I,_;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(_=(I=t.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var v,L,S;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(L=c.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var j,C,E;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    name: 'star',
    color: '#ff5722'
  }
}`,...(E=(C=d.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var D,M,z;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    color: 'purple'
  }}>
      <p>Este texto es morado, y el icono hereda el color:</p>
      <Icon name="check" inheritColor />
    </div>
}`,...(z=(M=m.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};const $=["Default","Sizes","Variants","WithCustomColor","WithInheritColor"];export{l as Default,t as Sizes,c as Variants,d as WithCustomColor,m as WithInheritColor,$ as __namedExportsOrder,P as default};
