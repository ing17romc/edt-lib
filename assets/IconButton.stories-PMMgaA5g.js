import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{I as e}from"./index-B4Al-k2z.js";import"./index-D4lIrffr.js";import"./index-_oZgBBUR.js";import"./index-kIl7L5_b.js";const A={tags:["autodocs"],argTypes:{icon:{control:{type:"text"},description:"Nombre del icono a mostrar"},size:{control:{type:"select"},options:["small","medium","large"],description:"Tamaño del botón",table:{type:{summary:"string"},defaultValue:{summary:"medium"}}},variant:{control:{type:"select"},options:["primary","secondary","tertiary","danger","success","warning"],description:"Variante visual del botón",table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},disabled:{control:{type:"boolean"},description:"Si el botón está deshabilitado",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},loading:{control:{type:"boolean"},description:"Si muestra un indicador de carga",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},fullWidth:{control:{type:"boolean"},description:"Si el botón ocupa todo el ancho disponible",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},iconVariant:{control:{type:"select"},options:["solid","outline","dual"],description:"Estilo del icono",table:{type:{summary:"string"},defaultValue:{summary:"outline"}}},iconColor:{control:{type:"color"},description:"Color personalizado para el icono",table:{type:{summary:"string"}}},onClick:{action:"clicked",description:"Manejador de clic",table:{type:{summary:"function"}}}},args:{icon:"home","aria-label":"Botón de ejemplo",size:"medium",variant:"primary",disabled:!1,loading:!1,fullWidth:!1,iconVariant:"outline"}},P=[{size:"small",label:"Pequeño"},{size:"medium",label:"Mediano"},{size:"large",label:"Grande"}],T=[{variant:"primary",label:"Primario"},{variant:"secondary",label:"Secundario"},{variant:"tertiary",label:"Terciario"},{variant:"danger",label:"Peligro"},{variant:"success",label:"Éxito"},{variant:"warning",label:"Advertencia"}],O={display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap",marginBottom:"16px"},$={display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",minWidth:"80px"},J={title:"Components/IconButton",...A,component:e},o={args:{"aria-label":"Botón de inicio"}},i={render:()=>a.jsx("div",{style:O,children:P.map(({size:r,label:n})=>a.jsxs("div",{style:$,children:[a.jsx(e,{icon:"home",size:r,"aria-label":`Botón ${n}`}),a.jsx("span",{children:n})]},r))}),parameters:{docs:{description:{story:"Muestra los diferentes tamaños disponibles para el componente IconButton."}}}},t={render:()=>a.jsx("div",{style:O,children:T.map(({variant:r,label:n})=>a.jsxs("div",{style:$,children:[a.jsx(e,{icon:"star",variant:r,"aria-label":`Botón ${n}`}),a.jsx("span",{children:n})]},r))}),parameters:{docs:{description:{story:"Muestra las diferentes variantes de estilo disponibles para el componente IconButton."}}}},s={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(e,{icon:"check","aria-label":"Normal"}),a.jsx(e,{icon:"check",disabled:!0,"aria-label":"Deshabilitado"}),a.jsx(e,{icon:"check",loading:!0,"aria-label":"Cargando"})]})},l={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(e,{icon:"home","aria-label":"Inicio"}),a.jsx(e,{icon:"settings",variant:"secondary","aria-label":"Configuración"}),a.jsx(e,{icon:"search",variant:"tertiary","aria-label":"Buscar"}),a.jsx(e,{icon:"heart",variant:"danger","aria-label":"Favorito"}),a.jsx(e,{icon:"download",variant:"success","aria-label":"Descargar"}),a.jsx(e,{icon:"bell",variant:"warning","aria-label":"Notificaciones"})]})},c={args:{icon:"favorite",iconColor:"#ff4081","aria-label":"Favorito rosa"}},d={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(e,{icon:"star",iconVariant:"outline","aria-label":"Contorno"}),a.jsx(e,{icon:"star",iconVariant:"solid","aria-label":"Sólido"}),a.jsx(e,{icon:"star",iconVariant:"dual","aria-label":"Dual"})]})},p={render:()=>a.jsxs("div",{style:{width:"300px"},children:[a.jsx(e,{icon:"add",fullWidth:!0,"aria-label":"Agregar",style:{marginBottom:"8px"}}),a.jsx(e,{icon:"delete",variant:"danger",fullWidth:!0,"aria-label":"Eliminar"})]})};var m,u,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Botón de inicio'
  }
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var y,g,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={containerStyle}>
      {sizeOptions.map(({
      size,
      label
    }) => <div key={size} style={itemContainerStyle}>
          <IconButton icon="home" size={size} aria-label={\`Botón \${label}\`} />
          <span>{label}</span>
        </div>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Muestra los diferentes tamaños disponibles para el componente IconButton.'
      }
    }
  }
}`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,f,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={containerStyle}>
      {variantOptions.map(({
      variant,
      label
    }) => <div key={variant} style={itemContainerStyle}>
          <IconButton icon="star" variant={variant} aria-label={\`Botón \${label}\`} />
          <span>{label}</span>
        </div>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Muestra las diferentes variantes de estilo disponibles para el componente IconButton.'
      }
    }
  }
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var I,B,j;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <IconButton icon="check" aria-label="Normal" />
      <IconButton icon="check" disabled aria-label="Deshabilitado" />
      <IconButton icon="check" loading aria-label="Cargando" />
    </div>
}`,...(j=(B=s.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var S,C,V;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <IconButton icon="home" aria-label="Inicio" />
      <IconButton icon="settings" variant="secondary" aria-label="Configuración" />
      <IconButton icon="search" variant="tertiary" aria-label="Buscar" />
      <IconButton icon="heart" variant="danger" aria-label="Favorito" />
      <IconButton icon="download" variant="success" aria-label="Descargar" />
      <IconButton icon="bell" variant="warning" aria-label="Notificaciones" />
    </div>
}`,...(V=(C=l.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var W,z,k;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    icon: 'favorite',
    iconColor: '#ff4081',
    'aria-label': 'Favorito rosa'
  }
}`,...(k=(z=c.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var w,D,F;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <IconButton icon="star" iconVariant="outline" aria-label="Contorno" />
      <IconButton icon="star" iconVariant="solid" aria-label="Sólido" />
      <IconButton icon="star" iconVariant="dual" aria-label="Dual" />
    </div>
}`,...(F=(D=d.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var M,E,N;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <IconButton icon="add" fullWidth aria-label="Agregar" style={{
      marginBottom: '8px'
    }} />
      <IconButton icon="delete" variant="danger" fullWidth aria-label="Eliminar" />
    </div>
}`,...(N=(E=p.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const K=["Default","Sizes","Variants","States","CustomIcons","WithCustomColor","WithIconVariant","FullWidth"];export{l as CustomIcons,o as Default,p as FullWidth,i as Sizes,s as States,t as Variants,c as WithCustomColor,d as WithIconVariant,K as __namedExportsOrder,J as default};
