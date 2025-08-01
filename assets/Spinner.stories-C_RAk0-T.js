import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./index-D4lIrffr.js";import{c as V}from"./classNames-CqjykrQM.js";import{C as s}from"./types-D2sN4igU.js";var n=(r=>(r.PRIMARY="primary",r.SECONDARY="secondary",r.TERTIARY="tertiary",r.DANGER="danger",r.SUCCESS="success",r.WARNING="warning",r.LIGHT="light",r.DARK="dark",r))(n||{});const Y="_spinner_4z2r9_1",G="_spinner__inner_4z2r9_42",h="_spin_4z2r9_1",L="_pulse_4z2r9_1",i={spinner:Y,"spinner--small":"_spinner--small_4z2r9_6","spinner--medium":"_spinner--medium_4z2r9_10","spinner--large":"_spinner--large_4z2r9_14","spinner--primary":"_spinner--primary_4z2r9_18","spinner--secondary":"_spinner--secondary_4z2r9_21","spinner--tertiary":"_spinner--tertiary_4z2r9_24","spinner--danger":"_spinner--danger_4z2r9_27","spinner--success":"_spinner--success_4z2r9_30","spinner--warning":"_spinner--warning_4z2r9_33","spinner--light":"_spinner--light_4z2r9_36","spinner--dark":"_spinner--dark_4z2r9_39",spinner__inner:G,spin:h,"spinner--pulse":"_spinner--pulse_4z2r9_53",pulse:L},a=D.forwardRef(({size:r=s.MEDIUM,variant:E=n.PRIMARY,pulse:I=!1,className:M,"aria-label":T="Cargando...",...j},N)=>{const P=V(i.spinner,i[`spinner--${r}`],i[`spinner--${E}`],{[i["spinner--pulse"]]:I},M);return e.jsx("div",{ref:N,className:P,role:"status","aria-live":"polite","aria-label":T,...j,children:e.jsx("div",{className:i.spinner__inner,"aria-hidden":"true"})})});a.displayName="Spinner";a.__docgenInfo={description:`Componente Spinner que muestra un indicador de carga.
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
<Spinner pulse />`,methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"ComponentSize"},description:`Tamaño del spinner
@default 'medium'`,defaultValue:{value:"ComponentSize.MEDIUM",computed:!0}},variant:{required:!1,tsType:{name:"SpinnerVariant"},description:`Variante de color del spinner
@default 'primary'`,defaultValue:{value:"SpinnerVariant.PRIMARY",computed:!0}},pulse:{required:!1,tsType:{name:"boolean"},description:`Si es true, el spinner será de tipo "pulso" en lugar de giratorio
@default false`,defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:`Texto accesible para lectores de pantalla
@default 'Cargando...'`,defaultValue:{value:"'Cargando...'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada"}},composes:["HTMLAttributes"]};const w={title:"Components/Spinner",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:Object.values(s),description:"Tamaño",table:{type:{summary:Object.values(s).join(" | ")},defaultValue:{summary:s.MEDIUM}}},variant:{control:"select",options:Object.values(n),description:"Variante de color del spinner",table:{defaultValue:{summary:n.PRIMARY}}},pulse:{control:{type:"boolean"},description:"Si es true, muestra un spinner de tipo pulso",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},"aria-label":{control:"text",description:"Texto accesible para lectores de pantalla",table:{type:{summary:"string"},defaultValue:{summary:"Cargando..."}}}},args:{size:s.MEDIUM,variant:n.PRIMARY,pulse:!1,"aria-label":"Cargando..."}},t={args:{}},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center"},children:[e.jsx(a,{size:s.SMALL,"aria-label":"Pequeño"}),e.jsx(a,{size:s.MEDIUM,"aria-label":"Mediano"}),e.jsx(a,{size:s.LARGE,"aria-label":"Grande"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center"},children:[e.jsx(a,{variant:n.PRIMARY,"aria-label":"Primario"}),e.jsx(a,{variant:n.SECONDARY,"aria-label":"Secundario"}),e.jsx(a,{variant:n.TERTIARY,"aria-label":"Terciario"}),e.jsx(a,{variant:n.DANGER,"aria-label":"Peligro"}),e.jsx(a,{variant:n.SUCCESS,"aria-label":"Éxito"}),e.jsx(a,{variant:n.WARNING,"aria-label":"Advertencia"})]})},p={args:{pulse:!0}},d={args:{"aria-label":"Espere mientras se cargan los datos..."}};var c,u,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var _,S,g;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  }}>
      <Spinner size={ComponentSize.SMALL} aria-label="Pequeño" />
      <Spinner size={ComponentSize.MEDIUM} aria-label="Mediano" />
      <Spinner size={ComponentSize.LARGE} aria-label="Grande" />
    </div>
}`,...(g=(S=l.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var b,f,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,z,R;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    pulse: true
  }
}`,...(R=(z=p.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var x,C,A;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Espere mientras se cargan los datos...'
  }
}`,...(A=(C=d.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const k=["Default","Sizes","Variants","Pulse","WithCustomLabel"];export{t as Default,p as Pulse,l as Sizes,o as Variants,d as WithCustomLabel,k as __namedExportsOrder,w as default};
