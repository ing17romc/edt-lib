import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as r,a as s,b as o}from"./index-C33rcGra.js";import{C as p}from"./types-D2sN4igU.js";import"./index-D4lIrffr.js";import"./classNames-CqjykrQM.js";const m={display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap",marginBottom:"16px"},a={display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",minWidth:"80px"},U=[{size:r.XSMALL,label:"XSmall"},{size:r.SMALL,label:"Small"},{size:r.MEDIUM,label:"Medium"},{size:r.LARGE,label:"Large"},{size:r.XLARGE,label:"XLarge"}],X={title:"Components/Icon",component:o,tags:["autodocs"],argTypes:{name:{control:"text",description:"Nombre del icono a mostrar"},size:{control:"select",options:Object.values(p),description:"Tamaño",table:{type:{summary:Object.values(p).join(" | ")},defaultValue:{summary:p.MEDIUM}}},variant:{control:"select",options:Object.values(s),description:"Estilo del icono",table:{defaultValue:{summary:s.OUTLINE}}},color:{control:"color",description:"Color principal del icono"},secondaryColor:{control:"color",description:"Color secundario (solo para variante dual)"},inheritColor:{control:{type:"boolean"},description:"Si hereda el color del elemento padre",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{name:"home",size:r.MEDIUM,variant:s.OUTLINE}},n={args:{name:"home"}},t={render:()=>e.jsx("div",{style:m,children:U.map(({size:u,label:R})=>e.jsxs("div",{style:a,children:[e.jsx(o,{name:"home",size:u}),e.jsx("span",{children:R})]},u))}),parameters:{docs:{description:{story:"Muestra los diferentes tamaños disponibles para el componente Icon."}}}},i={render:()=>e.jsxs("div",{style:m,children:[e.jsxs("div",{style:a,children:[e.jsx(o,{name:"home",variant:s.OUTLINE}),e.jsx("span",{children:"Outline"})]}),e.jsxs("div",{style:a,children:[e.jsx(o,{name:"home",variant:s.SOLID,color:"#007bff"}),e.jsx("span",{children:"Solid"})]}),e.jsxs("div",{style:a,children:[e.jsx(o,{name:"home",variant:s.DUAL,color:"#ff5722",secondaryColor:"#4caf50"}),e.jsx("span",{children:"Dual"})]})]}),parameters:{docs:{description:{story:"Muestra las diferentes variantes de estilo disponibles para el componente Icon."}}}},l={args:{name:"star",color:"#ff5722"},parameters:{docs:{description:{story:"Ejemplo de un icono con un color personalizado."}}}},c={render:()=>e.jsxs("div",{style:{color:"purple"},children:[e.jsx("p",{children:"Este texto es morado, y el icono hereda el color:"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",marginTop:"8px"},children:[e.jsx(o,{name:"check",inheritColor:!0,size:r.LARGE}),e.jsx(o,{name:"star",inheritColor:!0,size:r.LARGE}),e.jsx(o,{name:"heart",inheritColor:!0,size:r.LARGE})]})]}),parameters:{docs:{description:{story:"Ejemplo de iconos que heredan el color del elemento padre."}}}},d={render:()=>e.jsxs("div",{style:m,children:[e.jsxs("div",{style:a,children:[e.jsx(o,{name:"home",disabled:!0}),e.jsx("span",{children:"Deshabilitado"})]}),e.jsxs("div",{style:a,children:[e.jsx(o,{name:"home"}),e.jsx("span",{children:"Habilitado"})]})]}),parameters:{docs:{description:{story:"Muestra el estado deshabilitado del icono."}}}};var y,h,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    name: 'home'
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var v,I,j;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(I=t.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var S,f,b;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var C,z,g;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(g=(z=l.parameters)==null?void 0:z.docs)==null?void 0:g.source}}};var E,L,D;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(L=c.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var M,O,A;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(O=d.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const k=["Default","Sizes","Variants","WithCustomColor","WithInheritColor","DisabledState"];export{n as Default,d as DisabledState,t as Sizes,i as Variants,l as WithCustomColor,c as WithInheritColor,k as __namedExportsOrder,X as default};
