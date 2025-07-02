import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as o,a as s,b as r}from"./index-BMWPneJv.js";import"./index-D4lIrffr.js";import"./index-_oZgBBUR.js";const p={display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap",marginBottom:"16px"},a={display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",minWidth:"80px"},R=[{size:o.XSMALL,label:"XSmall"},{size:o.SMALL,label:"Small"},{size:o.MEDIUM,label:"Medium"},{size:o.LARGE,label:"Large"},{size:o.XLARGE,label:"XLarge"}],W={title:"Components/Icon",component:r,tags:["autodocs"],argTypes:{name:{control:"text",description:"Nombre del icono a mostrar"},size:{control:"select",options:Object.values(o),description:"Tamaño del icono",table:{defaultValue:{summary:o.MEDIUM}}},variant:{control:"select",options:Object.values(s),description:"Estilo del icono",table:{defaultValue:{summary:s.OUTLINE}}},color:{control:"color",description:"Color principal del icono"},secondaryColor:{control:"color",description:"Color secundario (solo para variante dual)"},inheritColor:{control:{type:"boolean"},description:"Si hereda el color del elemento padre",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{name:"home",size:o.MEDIUM,variant:s.OUTLINE}},n={args:{name:"home"}},t={render:()=>e.jsx("div",{style:p,children:R.map(({size:m,label:A})=>e.jsxs("div",{style:a,children:[e.jsx(r,{name:"home",size:m}),e.jsx("span",{children:A})]},m))}),parameters:{docs:{description:{story:"Muestra los diferentes tamaños disponibles para el componente Icon."}}}},i={render:()=>e.jsxs("div",{style:p,children:[e.jsxs("div",{style:a,children:[e.jsx(r,{name:"home",variant:s.OUTLINE}),e.jsx("span",{children:"Outline"})]}),e.jsxs("div",{style:a,children:[e.jsx(r,{name:"home",variant:s.SOLID,color:"#007bff"}),e.jsx("span",{children:"Solid"})]}),e.jsxs("div",{style:a,children:[e.jsx(r,{name:"home",variant:s.DUAL,color:"#ff5722",secondaryColor:"#4caf50"}),e.jsx("span",{children:"Dual"})]})]}),parameters:{docs:{description:{story:"Muestra las diferentes variantes de estilo disponibles para el componente Icon."}}}},l={args:{name:"star",color:"#ff5722"},parameters:{docs:{description:{story:"Ejemplo de un icono con un color personalizado."}}}},c={render:()=>e.jsxs("div",{style:{color:"purple"},children:[e.jsx("p",{children:"Este texto es morado, y el icono hereda el color:"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",marginTop:"8px"},children:[e.jsx(r,{name:"check",inheritColor:!0,size:o.LARGE}),e.jsx(r,{name:"star",inheritColor:!0,size:o.LARGE}),e.jsx(r,{name:"heart",inheritColor:!0,size:o.LARGE})]})]}),parameters:{docs:{description:{story:"Ejemplo de iconos que heredan el color del elemento padre."}}}},d={render:()=>e.jsxs("div",{style:p,children:[e.jsxs("div",{style:a,children:[e.jsx(r,{name:"home",disabled:!0}),e.jsx("span",{children:"Deshabilitado"})]}),e.jsxs("div",{style:a,children:[e.jsx(r,{name:"home"}),e.jsx("span",{children:"Habilitado"})]})]}),parameters:{docs:{description:{story:"Muestra el estado deshabilitado del icono."}}}};var u,h,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: 'home'
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var x,v,I;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={containerStyle}>
      {sizeOptions.map(({
      size,
      label
    }) => <div key={size} style={itemContainerStyle}>
          <Icon name="home" size={size} />
          <span>{label}</span>
        </div>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Muestra los diferentes tamaños disponibles para el componente Icon.'
      }
    }
  }
}`,...(I=(v=t.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var j,S,f;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={containerStyle}>
      <div style={itemContainerStyle}>
        <Icon name="home" variant={IconVariant.OUTLINE} />
        <span>Outline</span>
      </div>
      <div style={itemContainerStyle}>
        <Icon name="home" variant={IconVariant.SOLID} color="#007bff" />
        <span>Solid</span>
      </div>
      <div style={itemContainerStyle}>
        <Icon name="home" variant={IconVariant.DUAL} color="#ff5722" secondaryColor="#4caf50" />
        <span>Dual</span>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Muestra las diferentes variantes de estilo disponibles para el componente Icon.'
      }
    }
  }
}`,...(f=(S=i.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var b,g,z;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    name: 'star',
    color: '#ff5722'
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de un icono con un color personalizado.'
      }
    }
  }
}`,...(z=(g=l.parameters)==null?void 0:g.docs)==null?void 0:z.source}}};var C,E,L;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    color: 'purple'
  }}>
      <p>Este texto es morado, y el icono hereda el color:</p>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
      marginTop: '8px'
    }}>
        <Icon name="check" inheritColor size={IconSize.LARGE} />
        <Icon name="star" inheritColor size={IconSize.LARGE} />
        <Icon name="heart" inheritColor size={IconSize.LARGE} />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de iconos que heredan el color del elemento padre.'
      }
    }
  }
}`,...(L=(E=c.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var D,M,O;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={containerStyle}>
      <div style={itemContainerStyle}>
        <Icon name="home" disabled />
        <span>Deshabilitado</span>
      </div>
      <div style={itemContainerStyle}>
        <Icon name="home" />
        <span>Habilitado</span>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Muestra el estado deshabilitado del icono.'
      }
    }
  }
}`,...(O=(M=d.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const N=["Default","Sizes","Variants","WithCustomColor","WithInheritColor","DisabledState"];export{n as Default,d as DisabledState,t as Sizes,i as Variants,l as WithCustomColor,c as WithInheritColor,N as __namedExportsOrder,W as default};
