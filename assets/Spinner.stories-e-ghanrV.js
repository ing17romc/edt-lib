import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./index-D4lIrffr.js";import{c as P}from"./index-_oZgBBUR.js";var s=(e=>(e.XSMALL="xsmall",e.SMALL="small",e.MEDIUM="medium",e.LARGE="large",e.XLARGE="xlarge",e))(s||{}),n=(e=>(e.PRIMARY="primary",e.SECONDARY="secondary",e.TERTIARY="tertiary",e.DANGER="danger",e.SUCCESS="success",e.WARNING="warning",e.LIGHT="light",e.DARK="dark",e))(n||{});const G="_spinner_1a55c_1",V="_spinner__inner_1a55c_50",Y="_spin_1a55c_1",U="_pulse_1a55c_1",i={spinner:G,"spinner--xsmall":"_spinner--xsmall_1a55c_6","spinner--small":"_spinner--small_1a55c_10","spinner--medium":"_spinner--medium_1a55c_14","spinner--large":"_spinner--large_1a55c_18","spinner--xlarge":"_spinner--xlarge_1a55c_22","spinner--primary":"_spinner--primary_1a55c_26","spinner--secondary":"_spinner--secondary_1a55c_29","spinner--tertiary":"_spinner--tertiary_1a55c_32","spinner--danger":"_spinner--danger_1a55c_35","spinner--success":"_spinner--success_1a55c_38","spinner--warning":"_spinner--warning_1a55c_41","spinner--light":"_spinner--light_1a55c_44","spinner--dark":"_spinner--dark_1a55c_47",spinner__inner:V,spin:Y,"spinner--pulse":"_spinner--pulse_1a55c_61",pulse:U},r=D.forwardRef(({size:e=s.MEDIUM,variant:I=n.PRIMARY,pulse:C=!1,className:L,"aria-label":z="Cargando...",...T},j)=>{const N=P(i.spinner,i[`spinner--${e}`],i[`spinner--${I}`],{[i["spinner--pulse"]]:C},L);return a.jsx("div",{ref:j,className:N,role:"status","aria-live":"polite","aria-label":z,...T,children:a.jsx("div",{className:i.spinner__inner,"aria-hidden":"true"})})});r.displayName="Spinner";r.__docgenInfo={description:`Componente Spinner que muestra un indicador de carga.
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
}`,...(m=(u=l.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var _,S,g;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(g=(S=t.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var x,b,f;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(b=p.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var R,y,v;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    pulse: true
  }
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var A,E,M;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Espere mientras se cargan los datos...'
  }
}`,...(M=(E=c.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const W=["Default","Sizes","Variants","Pulse","WithCustomLabel"];export{l as Default,o as Pulse,t as Sizes,p as Variants,c as WithCustomLabel,W as __namedExportsOrder,X as default};
