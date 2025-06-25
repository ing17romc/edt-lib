import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as v}from"./index-BjEFWTkP.js";const h={title:"Controls/Icon",component:v,tags:["autodocs","controls"],parameters:{componentSubtitle:"Componente de ícono",docs:{description:{component:"Muestra un ícono de Material Icons con diferentes tamaños y estilos."}}},argTypes:{name:{description:"Nombre del ícono a mostrar",control:"select",options:["add","remove","edit","delete","search","save","cancel","check","warning","info","help","close"],table:{type:{summary:"IconName"}}},size:{description:"Tamaño del ícono",control:"select",options:["SM","MD","LG"],table:{type:{summary:"IconSize"},defaultValue:{summary:"MD"}}}}},o={args:{name:"add",size:"MD"}},s={args:{name:"search",size:"SM"},parameters:{docs:{description:{story:"Ícono pequeño (SM)"}}}},a={args:{name:"info",size:"LG"},parameters:{docs:{description:{story:"Ícono grande (LG)"}}}},r={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))",gap:"20px"},children:["add","remove","edit","delete","search","save","cancel","check","warning","info","help","close"].map(n=>e.jsxs("div",{style:{textAlign:"center",padding:"10px"},children:[e.jsx(v,{name:n,size:"MD"}),e.jsx("div",{style:{marginTop:"8px",fontSize:"12px"},children:n})]},n))}),parameters:{docs:{description:{story:"Muestra todos los íconos disponibles en la biblioteca."}}}};var t,c,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    name: 'add',
    size: 'MD'
  }
}`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,p,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: 'search',
    size: 'SM'
  },
  parameters: {
    docs: {
      description: {
        story: 'Ícono pequeño (SM)'
      }
    }
  }
}`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,u,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: 'info',
    size: 'LG'
  },
  parameters: {
    docs: {
      description: {
        story: 'Ícono grande (LG)'
      }
    }
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,y,f;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '20px'
  }}>
      {['add', 'remove', 'edit', 'delete', 'search', 'save', 'cancel', 'check', 'warning', 'info', 'help', 'close'].map(icon => <div key={icon} style={{
      textAlign: 'center',
      padding: '10px'
    }}>
          <Icon name={icon as IconName} size="MD" />
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
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const z=["Default","Small","Large","AllIcons"];export{r as AllIcons,o as Default,a as Large,s as Small,z as __namedExportsOrder,h as default};
