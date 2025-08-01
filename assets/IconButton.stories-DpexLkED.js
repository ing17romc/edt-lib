import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{I as b}from"./index-CVGPx4tv.js";import{I as e}from"./index-iy3NPxfF.js";import{C as o,a as n}from"./types-D2sN4igU.js";import"./index-D4lIrffr.js";import"./classNames-CqjykrQM.js";const Y={tags:["autodocs"],argTypes:{icon:{control:{type:"text"},description:"Nombre del icono a mostrar"},size:{control:"select",options:Object.values(o),description:"Tamaño",table:{type:{summary:Object.values(o).join(" | ")},defaultValue:{summary:o.MEDIUM}}},variant:{control:{type:"select"},options:["primary","secondary","tertiary","danger","success","warning"],description:"Variante visual del botón",table:{type:{summary:"string"},defaultValue:{summary:'"primary"'}}},disabled:{control:{type:"boolean"},description:"Si el botón está deshabilitado",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loading:{control:{type:"boolean"},description:"Si muestra un indicador de carga",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},fullWidth:{control:{type:"boolean"},description:"Si el botón ocupa todo el ancho disponible",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},iconVariant:{control:{type:"select"},options:["solid","outline","dual"],description:"Estilo del icono",table:{type:{summary:"string"},defaultValue:{summary:'"outline"'}}},iconColor:{control:{type:"color"},description:"Color personalizado para el icono",table:{type:{summary:"string"}}},onClick:{action:"clicked",description:"Manejador de clic",table:{type:{summary:"function"}}}},args:{icon:"home","aria-label":"Botón de ejemplo",size:o.MEDIUM,variant:"primary",disabled:!1,loading:!1,fullWidth:!1,iconVariant:"outline"}},w=[{size:o.SMALL,label:"Pequeño"},{size:o.MEDIUM,label:"Mediano"},{size:o.LARGE,label:"Grande"}],F=[{variant:n.PRIMARY,label:"Primario"},{variant:n.SECONDARY,label:"Secundario"},{variant:n.TERTIARY,label:"Terciario"},{variant:n.DANGER,label:"Peligro"},{variant:n.SUCCESS,label:"Éxito"},{variant:n.WARNING,label:"Advertencia"}],U={display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap",marginBottom:"16px"},L={display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",minWidth:"80px"},K={title:"Components/IconButton",...Y,component:e},i={args:{"aria-label":"Botón de inicio"}},s={render:()=>a.jsx("div",{style:U,children:w.map(({size:r,label:t})=>a.jsxs("div",{style:L,children:[a.jsx(e,{icon:"home",size:r,"aria-label":`Botón ${t}`}),a.jsx("span",{children:t})]},r))}),parameters:{docs:{description:{story:"Muestra los diferentes tamaños disponibles para el componente IconButton."}}}},l={render:()=>a.jsx("div",{style:U,children:F.map(({variant:r,label:t})=>a.jsxs("div",{style:L,children:[a.jsx(e,{icon:"star",variant:r,"aria-label":`Botón ${t}`}),a.jsx("span",{children:t})]},r))}),parameters:{docs:{description:{story:"Muestra las diferentes variantes de estilo disponibles para el componente IconButton."}}}},c={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(e,{icon:"check","aria-label":"Normal"}),a.jsx(e,{icon:"check",disabled:!0,"aria-label":"Deshabilitado"}),a.jsx(e,{icon:"check",loading:!0,"aria-label":"Cargando"})]})},d={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(e,{icon:"home","aria-label":"Inicio"}),a.jsx(e,{icon:"settings",variant:n.SECONDARY,"aria-label":"Configuración"}),a.jsx(e,{icon:"search",variant:n.TERTIARY,"aria-label":"Buscar"}),a.jsx(e,{icon:"heart",variant:n.DANGER,"aria-label":"Favorito"}),a.jsx(e,{icon:"download",variant:n.SUCCESS,"aria-label":"Descargar"}),a.jsx(e,{icon:"bell",variant:n.WARNING,"aria-label":"Notificaciones"})]})},p={args:{icon:"favorite",iconColor:"#ff4081","aria-label":"Favorito rosa"}},m={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(e,{icon:"star",iconVariant:b.OUTLINE,"aria-label":"Contorno"}),a.jsx(e,{icon:"star",iconVariant:b.SOLID,"aria-label":"Sólido"}),a.jsx(e,{icon:"star",iconVariant:b.DUAL,"aria-label":"Dual"})]})},u={render:()=>a.jsxs("div",{style:{width:"300px"},children:[a.jsx(e,{icon:"add",fullWidth:!0,"aria-label":"Agregar",style:{marginBottom:"8px"}}),a.jsx(e,{icon:"delete",variant:n.DANGER,fullWidth:!0,"aria-label":"Eliminar"})]})};var y,v,g;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Botón de inicio'
  }
}`,...(g=(v=i.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var x,I,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(I=s.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var h,C,S;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(C=l.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var B,j,V;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <IconButton icon="check" aria-label="Normal" />
      <IconButton icon="check" disabled aria-label="Deshabilitado" />
      <IconButton icon="check" loading aria-label="Cargando" />
    </div>
}`,...(V=(j=c.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var E,D,A;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <IconButton icon="home" aria-label="Inicio" />
      <IconButton icon="settings" variant={ComponentVariant.SECONDARY} aria-label="Configuración" />
      <IconButton icon="search" variant={ComponentVariant.TERTIARY} aria-label="Buscar" />
      <IconButton icon="heart" variant={ComponentVariant.DANGER} aria-label="Favorito" />
      <IconButton icon="download" variant={ComponentVariant.SUCCESS} aria-label="Descargar" />
      <IconButton icon="bell" variant={ComponentVariant.WARNING} aria-label="Notificaciones" />
    </div>
}`,...(A=(D=d.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var N,R,W;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    icon: 'favorite',
    iconColor: '#ff4081',
    'aria-label': 'Favorito rosa'
  }
}`,...(W=(R=p.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var z,M,O;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <IconButton icon="star" iconVariant={IconVariant.OUTLINE} aria-label="Contorno" />
      <IconButton icon="star" iconVariant={IconVariant.SOLID} aria-label="Sólido" />
      <IconButton icon="star" iconVariant={IconVariant.DUAL} aria-label="Dual" />
    </div>
}`,...(O=(M=m.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var T,k,G;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <IconButton icon="add" fullWidth aria-label="Agregar" style={{
      marginBottom: '8px'
    }} />
      <IconButton icon="delete" variant={ComponentVariant.DANGER} fullWidth aria-label="Eliminar" />
    </div>
}`,...(G=(k=u.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};const Q=["Default","Sizes","Variants","States","CustomIcons","WithCustomColor","WithIconVariant","FullWidth"];export{d as CustomIcons,i as Default,u as FullWidth,s as Sizes,c as States,l as Variants,p as WithCustomColor,m as WithIconVariant,Q as __namedExportsOrder,K as default};
