import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{I,A as o}from"./index-CNg3QlUR.js";import{C as e}from"./enums-Ca2RdD1G.js";const A={title:"Controls/Icon",component:I,tags:["autodocs","controls"],parameters:{componentSubtitle:"Componente de ícono",docs:{description:{component:"Muestra un ícono de Material Icons con diferentes tamaños y estilos."}}},argTypes:{name:{description:"Nombre del ícono a mostrar",control:"select",options:Object.values(o),table:{type:{summary:"IconName"}}},size:{description:"Tamaño del ícono",control:"select",options:Object.values(e),table:{type:{summary:"IconSize"},defaultValue:{summary:e.MD}}}}},s={args:{name:o.ADD,size:e.MD}},r={args:{name:o.SEARCH,size:e.SM},parameters:{docs:{description:{story:"Ícono pequeño (SM)"}}}},a={args:{name:o.INFO,size:e.LG},parameters:{docs:{description:{story:"Ícono grande (LG)"}}}},t={render:()=>n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))",gap:"20px"},children:Object.values(o).map(i=>n.jsxs("div",{style:{textAlign:"center",padding:"10px"},children:[n.jsx(I,{name:i,size:e.MD}),n.jsx("div",{style:{marginTop:"8px",fontSize:"12px"},children:i})]},i))}),parameters:{docs:{description:{story:"Muestra todos los íconos disponibles en la biblioteca."}}}};var c,p,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: ALL_ICONS.ADD,
    size: ControlSize.MD
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,d,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: ALL_ICONS.SEARCH,
    size: ControlSize.SM
  },
  parameters: {
    docs: {
      description: {
        story: 'Ícono pequeño (SM)'
      }
    }
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,S,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: ALL_ICONS.INFO,
    size: ControlSize.LG
  },
  parameters: {
    docs: {
      description: {
        story: 'Ícono grande (LG)'
      }
    }
  }
}`,...(x=(S=a.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var y,z,C;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '20px'
  }}>
      {Object.values(ALL_ICONS).map(icon => <div key={icon} style={{
      textAlign: 'center',
      padding: '10px'
    }}>
          <Icon name={icon} size={ControlSize.MD} />
          <div style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>{icon}</div>
        </div>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Muestra todos los íconos disponibles en la biblioteca.'
      }
    }
  }
}`,...(C=(z=t.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const v=["Default","Small","Large","All_Icons"];export{t as All_Icons,s as Default,a as Large,r as Small,v as __namedExportsOrder,A as default};
