import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as aa}from"./index-D4lIrffr.js";import{c as ea}from"./index-Bckx9Gcf.js";import{I as oa,A as ia}from"./index-CNg3QlUR.js";import{C as m}from"./enums-Ca2RdD1G.js";const na="_iconButton_1uc0s_51",ra="_spin_1uc0s_1",i={iconButton:na,"iconButton--small":"_iconButton--small_1uc0s_75","iconButton--medium":"_iconButton--medium_1uc0s_81","iconButton--large":"_iconButton--large_1uc0s_87","iconButton--primary":"_iconButton--primary_1uc0s_93","iconButton--secondary":"_iconButton--secondary_1uc0s_103","iconButton--tertiary":"_iconButton--tertiary_1uc0s_114","iconButton--danger":"_iconButton--danger_1uc0s_124","iconButton--success":"_iconButton--success_1uc0s_134","iconButton--warning":"_iconButton--warning_1uc0s_144","iconButton--loading":"_iconButton--loading_1uc0s_154",spin:ra,"iconButton--fullWidth":"_iconButton--fullWidth_1uc0s_168"},e=aa.forwardRef(({icon:p,size:b="medium",variant:R="primary",fullWidth:M=!1,loading:o=!1,disabled:g=!1,iconSize:O,className:G,iconClassName:L,buttonStyle:$,iconStyle:U,"aria-label":H,...J},K)=>{const Q=O||(()=>{switch(b){case"small":return m.SM;case"large":return m.LG;case"medium":default:return m.MD}})(),X=(Z=>Object.values(ia).includes(Z))(p)?p:"help_outline",Y=ea(i.iconButton,i[`iconButton--${b}`],i[`iconButton--${R}`],{[i["iconButton--loading"]]:o,[i["iconButton--fullWidth"]]:M},G);return a.jsx("button",{ref:K,type:"button",className:Y,disabled:g||o,"aria-label":o?"Cargando...":H,"aria-busy":o,"aria-disabled":g||o,style:$,...J,children:!o&&a.jsx("div",{className:L,style:U,children:a.jsx(oa,{name:X,size:Q,"aria-hidden":"true"})})})});e.displayName="IconButton";e.__docgenInfo={description:`Componente de botón que muestra únicamente un icono.
Combina la funcionalidad de Button e Icon en un solo componente.

@component
@example
// Uso básico
<IconButton 
  icon="home" 
  variant="primary" 
  aria-label="Inicio" 
  onClick={() => console.log('Click')} 
/>`,methods:[],displayName:"IconButton",props:{icon:{required:!0,tsType:{name:"string"},description:"Nombre del icono a mostrar"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`Tamaño del botón
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'danger' | 'success' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:`Variante visual del botón
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Si el botón ocupa todo el ancho disponible
@default false`,defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:`Si muestra un indicador de carga
@default false`,defaultValue:{value:"false",computed:!1}},iconColor:{required:!1,tsType:{name:"string"},description:"Color del icono"},iconSize:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Tamaño del icono. Si no se especifica, se calcula en base al tamaño del botón"},iconVariant:{required:!1,tsType:{name:"IconVariant"},description:`Estilo del icono
@default 'outline'`},className:{required:!1,tsType:{name:"string"},description:"Clase CSS adicional para el botón"},iconClassName:{required:!1,tsType:{name:"string"},description:"Clase CSS adicional para el icono"},buttonStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Estilos en línea para el botón"},iconStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Estilos en línea para el icono"},"aria-label":{required:!0,tsType:{name:"string"},description:"Texto accesible para lectores de pantalla"},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const pa={title:"Components/IconButton",component:e,tags:["autodocs"],argTypes:{icon:{control:"text",description:"Nombre del icono a mostrar"},size:{control:"select",options:["small","medium","large"],description:"Tamaño del botón",table:{defaultValue:{summary:"medium"}}},variant:{control:"select",options:["primary","secondary","tertiary","danger","success","warning"],description:"Variante visual del botón",table:{defaultValue:{summary:"primary"}}},disabled:{control:"boolean",description:"Si el botón está deshabilitado",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},loading:{control:"boolean",description:"Si muestra un indicador de carga",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},fullWidth:{control:"boolean",description:"Si el botón ocupa todo el ancho disponible",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},iconVariant:{control:"select",options:["solid","outline","dual"],description:"Estilo del icono",table:{defaultValue:{summary:"outline"}}},iconColor:{control:"color",description:"Color personalizado para el icono"},onClick:{action:"clicked",description:"Manejador de clic"}},args:{icon:"home","aria-label":"Botón de ejemplo",size:"medium",variant:"primary",disabled:!1,loading:!1,fullWidth:!1,iconVariant:"outline"}},n={args:{"aria-label":"Botón de inicio"}},r={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(e,{icon:"home",size:"small","aria-label":"Pequeño"}),a.jsx(e,{icon:"home",size:"medium","aria-label":"Mediano"}),a.jsx(e,{icon:"home",size:"large","aria-label":"Grande"})]})},t={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(e,{icon:"star",variant:"primary","aria-label":"Primario"}),a.jsx(e,{icon:"star",variant:"secondary","aria-label":"Secundario"}),a.jsx(e,{icon:"star",variant:"tertiary","aria-label":"Terciario"}),a.jsx(e,{icon:"star",variant:"danger","aria-label":"Peligro"}),a.jsx(e,{icon:"star",variant:"success","aria-label":"Éxito"}),a.jsx(e,{icon:"star",variant:"warning","aria-label":"Advertencia"})]})},l={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(e,{icon:"check","aria-label":"Normal"}),a.jsx(e,{icon:"check",disabled:!0,"aria-label":"Deshabilitado"}),a.jsx(e,{icon:"check",loading:!0,"aria-label":"Cargando"})]})},s={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(e,{icon:"home","aria-label":"Inicio"}),a.jsx(e,{icon:"settings",variant:"secondary","aria-label":"Configuración"}),a.jsx(e,{icon:"search",variant:"tertiary","aria-label":"Buscar"}),a.jsx(e,{icon:"heart",variant:"danger","aria-label":"Favorito"}),a.jsx(e,{icon:"download",variant:"success","aria-label":"Descargar"}),a.jsx(e,{icon:"bell",variant:"warning","aria-label":"Notificaciones"})]})},c={args:{icon:"favorite",iconColor:"#ff4081","aria-label":"Favorito rosa"}},d={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(e,{icon:"star",iconVariant:"outline","aria-label":"Contorno"}),a.jsx(e,{icon:"star",iconVariant:"solid","aria-label":"Sólido"}),a.jsx(e,{icon:"star",iconVariant:"dual","aria-label":"Dual"})]})},u={render:()=>a.jsxs("div",{style:{width:"300px"},children:[a.jsx(e,{icon:"add",fullWidth:!0,"aria-label":"Agregar",style:{marginBottom:"8px"}}),a.jsx(e,{icon:"delete",variant:"danger",fullWidth:!0,"aria-label":"Eliminar"})]})};var f,y,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Botón de inicio'
  }
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,B,h;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <IconButton icon="home" size="small" aria-label="Pequeño" />
      <IconButton icon="home" size="medium" aria-label="Mediano" />
      <IconButton icon="home" size="large" aria-label="Grande" />
    </div>
}`,...(h=(B=r.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var I,_,S;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(S=(_=t.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var C,j,V;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <IconButton icon="check" aria-label="Normal" />
      <IconButton icon="check" disabled aria-label="Deshabilitado" />
      <IconButton icon="check" loading aria-label="Cargando" />
    </div>
}`,...(V=(j=l.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var w,T,q;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(q=(T=s.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var z,W,N;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    icon: 'favorite',
    iconColor: '#ff4081',
    'aria-label': 'Favorito rosa'
  }
}`,...(N=(W=c.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var k,P,D;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <IconButton icon="star" iconVariant="outline" aria-label="Contorno" />
      <IconButton icon="star" iconVariant="solid" aria-label="Sólido" />
      <IconButton icon="star" iconVariant="dual" aria-label="Dual" />
    </div>
}`,...(D=(P=d.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var E,A,F;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <IconButton icon="add" fullWidth aria-label="Agregar" style={{
      marginBottom: '8px'
    }} />
      <IconButton icon="delete" variant="danger" fullWidth aria-label="Eliminar" />
    </div>
}`,...(F=(A=u.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const ba=["Default","Sizes","Variants","States","CustomIcons","WithCustomColor","WithIconVariant","FullWidth"];export{s as CustomIcons,n as Default,u as FullWidth,r as Sizes,l as States,t as Variants,c as WithCustomColor,d as WithIconVariant,ba as __namedExportsOrder,pa as default};
