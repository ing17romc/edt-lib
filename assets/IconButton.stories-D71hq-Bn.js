import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{I as e}from"./index-D-XJWJR2.js";import"./index-D4lIrffr.js";import"./index-_oZgBBUR.js";import"./index-BsG5_q5-.js";const q={title:"Components/IconButton",component:e,tags:["autodocs"],argTypes:{icon:{control:"text",description:"Nombre del icono a mostrar"},size:{control:"select",options:["small","medium","large"],description:"Tamaño del botón",table:{defaultValue:{summary:"medium"}}},variant:{control:"select",options:["primary","secondary","tertiary","danger","success","warning"],description:"Variante visual del botón",table:{defaultValue:{summary:"primary"}}},disabled:{control:"boolean",description:"Si el botón está deshabilitado",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},loading:{control:"boolean",description:"Si muestra un indicador de carga",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},fullWidth:{control:"boolean",description:"Si el botón ocupa todo el ancho disponible",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},iconVariant:{control:"select",options:["solid","outline","dual"],description:"Estilo del icono",table:{defaultValue:{summary:"outline"}}},iconColor:{control:"color",description:"Color personalizado para el icono"},onClick:{action:"clicked",description:"Manejador de clic"}},args:{icon:"home","aria-label":"Botón de ejemplo",size:"medium",variant:"primary",disabled:!1,loading:!1,fullWidth:!1,iconVariant:"outline"}},r={args:{"aria-label":"Botón de inicio"}},i={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(e,{icon:"home",size:"small","aria-label":"Pequeño"}),a.jsx(e,{icon:"home",size:"medium","aria-label":"Mediano"}),a.jsx(e,{icon:"home",size:"large","aria-label":"Grande"})]})},o={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(e,{icon:"star",variant:"primary","aria-label":"Primario"}),a.jsx(e,{icon:"star",variant:"secondary","aria-label":"Secundario"}),a.jsx(e,{icon:"star",variant:"tertiary","aria-label":"Terciario"}),a.jsx(e,{icon:"star",variant:"danger","aria-label":"Peligro"}),a.jsx(e,{icon:"star",variant:"success","aria-label":"Éxito"}),a.jsx(e,{icon:"star",variant:"warning","aria-label":"Advertencia"})]})},n={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(e,{icon:"check","aria-label":"Normal"}),a.jsx(e,{icon:"check",disabled:!0,"aria-label":"Deshabilitado"}),a.jsx(e,{icon:"check",loading:!0,"aria-label":"Cargando"})]})},t={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(e,{icon:"home","aria-label":"Inicio"}),a.jsx(e,{icon:"settings",variant:"secondary","aria-label":"Configuración"}),a.jsx(e,{icon:"search",variant:"tertiary","aria-label":"Buscar"}),a.jsx(e,{icon:"heart",variant:"danger","aria-label":"Favorito"}),a.jsx(e,{icon:"download",variant:"success","aria-label":"Descargar"}),a.jsx(e,{icon:"bell",variant:"warning","aria-label":"Notificaciones"})]})},l={args:{icon:"favorite",iconColor:"#ff4081","aria-label":"Favorito rosa"}},s={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(e,{icon:"star",iconVariant:"outline","aria-label":"Contorno"}),a.jsx(e,{icon:"star",iconVariant:"solid","aria-label":"Sólido"}),a.jsx(e,{icon:"star",iconVariant:"dual","aria-label":"Dual"})]})},c={render:()=>a.jsxs("div",{style:{width:"300px"},children:[a.jsx(e,{icon:"add",fullWidth:!0,"aria-label":"Agregar",style:{marginBottom:"8px"}}),a.jsx(e,{icon:"delete",variant:"danger",fullWidth:!0,"aria-label":"Eliminar"})]})};var d,u,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Botón de inicio'
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,b,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <IconButton icon="home" size="small" aria-label="Pequeño" />
      <IconButton icon="home" size="medium" aria-label="Mediano" />
      <IconButton icon="home" size="large" aria-label="Grande" />
    </div>
}`,...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var x,v,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <IconButton icon="star" variant="primary" aria-label="Primario" />
      <IconButton icon="star" variant="secondary" aria-label="Secundario" />
      <IconButton icon="star" variant="tertiary" aria-label="Terciario" />
      <IconButton icon="star" variant="danger" aria-label="Peligro" />
      <IconButton icon="star" variant="success" aria-label="Éxito" />
      <IconButton icon="star" variant="warning" aria-label="Advertencia" />
    </div>
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var f,h,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <IconButton icon="check" aria-label="Normal" />
      <IconButton icon="check" disabled aria-label="Deshabilitado" />
      <IconButton icon="check" loading aria-label="Cargando" />
    </div>
}`,...(I=(h=n.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var j,B,S;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(S=(B=t.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var V,C,W;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    icon: 'favorite',
    iconColor: '#ff4081',
    'aria-label': 'Favorito rosa'
  }
}`,...(W=(C=l.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var z,w,k;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <IconButton icon="star" iconVariant="outline" aria-label="Contorno" />
      <IconButton icon="star" iconVariant="solid" aria-label="Sólido" />
      <IconButton icon="star" iconVariant="dual" aria-label="Dual" />
    </div>
}`,...(k=(w=s.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var D,F,P;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <IconButton icon="add" fullWidth aria-label="Agregar" style={{
      marginBottom: '8px'
    }} />
      <IconButton icon="delete" variant="danger" fullWidth aria-label="Eliminar" />
    </div>
}`,...(P=(F=c.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};const G=["Default","Sizes","Variants","States","CustomIcons","WithCustomColor","WithIconVariant","FullWidth"];export{t as CustomIcons,r as Default,c as FullWidth,i as Sizes,n as States,o as Variants,l as WithCustomColor,s as WithIconVariant,G as __namedExportsOrder,q as default};
