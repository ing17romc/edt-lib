import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{a as m}from"./index-CkItoSnp.js";import{I as e}from"./index-CtjJ_2z9.js";import"./index-D4lIrffr.js";import"./classNames-CqjykrQM.js";const T={tags:["autodocs"],argTypes:{icon:{control:{type:"text"},description:"Nombre del icono a mostrar"},size:{control:{type:"select"},options:["small","medium","large"],description:"Tamaño del botón",table:{type:{summary:"string"},defaultValue:{summary:'"medium"'}}},variant:{control:{type:"select"},options:["primary","secondary","tertiary","danger","success","warning"],description:"Variante visual del botón",table:{type:{summary:"string"},defaultValue:{summary:'"primary"'}}},disabled:{control:{type:"boolean"},description:"Si el botón está deshabilitado",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loading:{control:{type:"boolean"},description:"Si muestra un indicador de carga",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},fullWidth:{control:{type:"boolean"},description:"Si el botón ocupa todo el ancho disponible",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},iconVariant:{control:{type:"select"},options:["solid","outline","dual"],description:"Estilo del icono",table:{type:{summary:"string"},defaultValue:{summary:'"outline"'}}},iconColor:{control:{type:"color"},description:"Color personalizado para el icono",table:{type:{summary:"string"}}},onClick:{action:"clicked",description:"Manejador de clic",table:{type:{summary:"function"}}}},args:{icon:"home","aria-label":"Botón de ejemplo",size:"medium",variant:"primary",disabled:!1,loading:!1,fullWidth:!1,iconVariant:"outline"}},U=[{size:"small",label:"Pequeño"},{size:"medium",label:"Mediano"},{size:"large",label:"Grande"}],$=[{variant:"primary",label:"Primario"},{variant:"secondary",label:"Secundario"},{variant:"tertiary",label:"Terciario"},{variant:"danger",label:"Peligro"},{variant:"success",label:"Éxito"},{variant:"warning",label:"Advertencia"}],M={display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap",marginBottom:"16px"},A={display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",minWidth:"80px"},H={title:"Components/IconButton",...T,component:e},o={args:{"aria-label":"Botón de inicio"}},t={render:()=>a.jsx("div",{style:M,children:U.map(({size:r,label:n})=>a.jsxs("div",{style:A,children:[a.jsx(e,{icon:"home",size:r,"aria-label":`Botón ${n}`}),a.jsx("span",{children:n})]},r))}),parameters:{docs:{description:{story:"Muestra los diferentes tamaños disponibles para el componente IconButton."}}}},i={render:()=>a.jsx("div",{style:M,children:$.map(({variant:r,label:n})=>a.jsxs("div",{style:A,children:[a.jsx(e,{icon:"star",variant:r,"aria-label":`Botón ${n}`}),a.jsx("span",{children:n})]},r))}),parameters:{docs:{description:{story:"Muestra las diferentes variantes de estilo disponibles para el componente IconButton."}}}},s={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(e,{icon:"check","aria-label":"Normal"}),a.jsx(e,{icon:"check",disabled:!0,"aria-label":"Deshabilitado"}),a.jsx(e,{icon:"check",loading:!0,"aria-label":"Cargando"})]})},l={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(e,{icon:"home","aria-label":"Inicio"}),a.jsx(e,{icon:"settings",variant:"secondary","aria-label":"Configuración"}),a.jsx(e,{icon:"search",variant:"tertiary","aria-label":"Buscar"}),a.jsx(e,{icon:"heart",variant:"danger","aria-label":"Favorito"}),a.jsx(e,{icon:"download",variant:"success","aria-label":"Descargar"}),a.jsx(e,{icon:"bell",variant:"warning","aria-label":"Notificaciones"})]})},c={args:{icon:"favorite",iconColor:"#ff4081","aria-label":"Favorito rosa"}},d={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(e,{icon:"star",iconVariant:m.OUTLINE,"aria-label":"Contorno"}),a.jsx(e,{icon:"star",iconVariant:m.SOLID,"aria-label":"Sólido"}),a.jsx(e,{icon:"star",iconVariant:m.DUAL,"aria-label":"Dual"})]})},p={render:()=>a.jsxs("div",{style:{width:"300px"},children:[a.jsx(e,{icon:"add",fullWidth:!0,"aria-label":"Agregar",style:{marginBottom:"8px"}}),a.jsx(e,{icon:"delete",variant:"danger",fullWidth:!0,"aria-label":"Eliminar"})]})};var u,b,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Botón de inicio'
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var g,v,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,h,I;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(I=(h=i.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var B,j,S;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <IconButton icon="check" aria-label="Normal" />
      <IconButton icon="check" disabled aria-label="Deshabilitado" />
      <IconButton icon="check" loading aria-label="Cargando" />
    </div>
}`,...(S=(j=s.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var V,C,W;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(W=(C=l.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var z,D,k;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    icon: 'favorite',
    iconColor: '#ff4081',
    'aria-label': 'Favorito rosa'
  }
}`,...(k=(D=c.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var w,O,E;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <IconButton icon="star" iconVariant={IconVariant.OUTLINE} aria-label="Contorno" />
      <IconButton icon="star" iconVariant={IconVariant.SOLID} aria-label="Sólido" />
      <IconButton icon="star" iconVariant={IconVariant.DUAL} aria-label="Dual" />
    </div>
}`,...(E=(O=d.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var N,F,L;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <IconButton icon="add" fullWidth aria-label="Agregar" style={{
      marginBottom: '8px'
    }} />
      <IconButton icon="delete" variant="danger" fullWidth aria-label="Eliminar" />
    </div>
}`,...(L=(F=p.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};const J=["Default","Sizes","Variants","States","CustomIcons","WithCustomColor","WithIconVariant","FullWidth"];export{l as CustomIcons,o as Default,p as FullWidth,t as Sizes,s as States,i as Variants,c as WithCustomColor,d as WithIconVariant,J as __namedExportsOrder,H as default};
