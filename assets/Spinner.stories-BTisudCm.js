import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./index-D4lIrffr.js";import{c as P}from"./index-Bckx9Gcf.js";var s=(e=>(e.XSMALL="xsmall",e.SMALL="small",e.MEDIUM="medium",e.LARGE="large",e.XLARGE="xlarge",e))(s||{}),n=(e=>(e.PRIMARY="primary",e.SECONDARY="secondary",e.TERTIARY="tertiary",e.DANGER="danger",e.SUCCESS="success",e.WARNING="warning",e.LIGHT="light",e.DARK="dark",e))(n||{});const G="_spinner_csivx_51",V="_spinner__inner_csivx_100",Y="_spin_csivx_51",U="_pulse_csivx_1",i={spinner:G,"spinner--xsmall":"_spinner--xsmall_csivx_56","spinner--small":"_spinner--small_csivx_60","spinner--medium":"_spinner--medium_csivx_64","spinner--large":"_spinner--large_csivx_68","spinner--xlarge":"_spinner--xlarge_csivx_72","spinner--primary":"_spinner--primary_csivx_76","spinner--secondary":"_spinner--secondary_csivx_79","spinner--tertiary":"_spinner--tertiary_csivx_82","spinner--danger":"_spinner--danger_csivx_85","spinner--success":"_spinner--success_csivx_88","spinner--warning":"_spinner--warning_csivx_91","spinner--light":"_spinner--light_csivx_94","spinner--dark":"_spinner--dark_csivx_97",spinner__inner:V,spin:Y,"spinner--pulse":"_spinner--pulse_csivx_111",pulse:U},r=D.forwardRef(({size:e=s.MEDIUM,variant:I=n.PRIMARY,pulse:C=!1,className:L,"aria-label":z="Cargando...",...T},j)=>{const N=P(i.spinner,i[`spinner--${e}`],i[`spinner--${I}`],{[i["spinner--pulse"]]:C},L);return a.jsx("div",{ref:j,className:N,role:"status","aria-live":"polite","aria-label":z,...T,children:a.jsx("div",{className:i.spinner__inner,"aria-hidden":"true"})})});r.displayName="Spinner";r.__docgenInfo={description:`Componente Spinner que muestra un indicador de carga.
Proporciona diferentes estilos y tamaños para adaptarse a diferentes contextos.

@component
@example
// Uso básico
<Spinner />

// Con tamaño personalizado
<Spinner size="large" />

// Con variante de color
<Spinner variant="danger" />

// Modo pulso
<Spinner pulse />`,methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"SpinnerSize"},description:`Tamaño del spinner
@default 'medium'`,defaultValue:{value:"SpinnerSize.MEDIUM",computed:!0}},variant:{required:!1,tsType:{name:"SpinnerVariant"},description:`Variante de color del spinner
@default 'primary'`,defaultValue:{value:"SpinnerVariant.PRIMARY",computed:!0}},pulse:{required:!1,tsType:{name:"boolean"},description:`Si es true, el spinner será de tipo "pulso" en lugar de giratorio
@default false`,defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:`Texto accesible para lectores de pantalla
@default 'Cargando...'`,defaultValue:{value:"'Cargando...'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada"}},composes:["HTMLAttributes"]};const X={title:"Components/Spinner",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:Object.values(s),description:"Tamaño del spinner",table:{defaultValue:{summary:s.MEDIUM}}},variant:{control:"select",options:Object.values(n),description:"Variante de color del spinner",table:{defaultValue:{summary:n.PRIMARY}}},pulse:{control:{type:"boolean"},description:"Si es true, muestra un spinner de tipo pulso",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},"aria-label":{control:"text",description:"Texto accesible para lectores de pantalla",table:{type:{summary:"string"},defaultValue:{summary:"Cargando..."}}}},args:{size:s.MEDIUM,variant:n.PRIMARY,pulse:!1,"aria-label":"Cargando..."}},l={args:{}},t={render:()=>a.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center"},children:[a.jsx(r,{size:s.XSMALL,"aria-label":"Extra pequeño"}),a.jsx(r,{size:s.SMALL,"aria-label":"Pequeño"}),a.jsx(r,{size:s.MEDIUM,"aria-label":"Mediano"}),a.jsx(r,{size:s.LARGE,"aria-label":"Grande"}),a.jsx(r,{size:s.XLARGE,"aria-label":"Extra grande"})]})},p={render:()=>a.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center"},children:[a.jsx(r,{variant:n.PRIMARY,"aria-label":"Primario"}),a.jsx(r,{variant:n.SECONDARY,"aria-label":"Secundario"}),a.jsx(r,{variant:n.TERTIARY,"aria-label":"Terciario"}),a.jsx(r,{variant:n.DANGER,"aria-label":"Peligro"}),a.jsx(r,{variant:n.SUCCESS,"aria-label":"Éxito"}),a.jsx(r,{variant:n.WARNING,"aria-label":"Advertencia"})]})},o={args:{pulse:!0}},c={args:{"aria-label":"Espere mientras se cargan los datos..."}};var d,u,m;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {}
}`,...(m=(u=l.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var _,x,S;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  }}>
      <Spinner size={SpinnerSize.XSMALL} aria-label="Extra pequeño" />
      <Spinner size={SpinnerSize.SMALL} aria-label="Pequeño" />
      <Spinner size={SpinnerSize.MEDIUM} aria-label="Mediano" />
      <Spinner size={SpinnerSize.LARGE} aria-label="Grande" />
      <Spinner size={SpinnerSize.XLARGE} aria-label="Extra grande" />
    </div>
}`,...(S=(x=t.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var g,v,b;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  }}>
      <Spinner variant={SpinnerVariant.PRIMARY} aria-label="Primario" />
      <Spinner variant={SpinnerVariant.SECONDARY} aria-label="Secundario" />
      <Spinner variant={SpinnerVariant.TERTIARY} aria-label="Terciario" />
      <Spinner variant={SpinnerVariant.DANGER} aria-label="Peligro" />
      <Spinner variant={SpinnerVariant.SUCCESS} aria-label="Éxito" />
      <Spinner variant={SpinnerVariant.WARNING} aria-label="Advertencia" />
    </div>
}`,...(b=(v=p.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,R,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    pulse: true
  }
}`,...(y=(R=o.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var A,E,M;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Espere mientras se cargan los datos...'
  }
}`,...(M=(E=c.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const W=["Default","Sizes","Variants","Pulse","WithCustomLabel"];export{l as Default,o as Pulse,t as Sizes,p as Variants,c as WithCustomLabel,W as __namedExportsOrder,X as default};
