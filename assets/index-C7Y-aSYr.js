import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as A,R as C}from"./index-D4lIrffr.js";import{c}from"./index-_oZgBBUR.js";const M="_selectorWrapper_1voud_51",V="_selectorLabel_1voud_61",w="_selectorContainer_1voud_70",O="_selector_1voud_51",U="_selectorIcon_1voud_93",D="_helperText_1voud_166",Y="_requiredIndicator_1voud_176",k="_selectorLoading_1voud_181",G="_selectorLoadingSpinner_1voud_189",P="_spin_1voud_1",e={selectorWrapper:M,"selectorWrapper--fullWidth":"_selectorWrapper--fullWidth_1voud_57",selectorLabel:V,selectorContainer:w,selector:O,"selector--small":"_selector--small_1voud_88",selectorIcon:U,"selector--medium":"_selector--medium_1voud_98","selector--large":"_selector--large_1voud_108","selector--primary":"_selector--primary_1voud_118","selector--secondary":"_selector--secondary_1voud_125","selector--error":"_selector--error_1voud_135","selector--fullWidth":"_selector--fullWidth_1voud_148",helperText:D,"helperText--error":"_helperText--error_1voud_172",requiredIndicator:Y,selectorLoading:k,selectorLoadingSpinner:G,spin:P};var x=(r=>(r.PRIMARY="primary",r.SECONDARY="secondary",r.TERTIARY="tertiary",r.DANGER="danger",r.SUCCESS="success",r.WARNING="warning",r))(x||{}),y=(r=>(r.SMALL="small",r.MEDIUM="medium",r.LARGE="large",r))(y||{});const b=A.forwardRef(({options:r=[],label:i,helperText:d,error:l=!1,errorMessage:t,variant:h=x.PRIMARY,size:T=y.MEDIUM,fullWidth:u=!1,loading:a=!1,disabled:p=!1,className:g,placeholder:m,onChange:n,value:f,defaultValue:S,..._},q)=>{const[L,j]=C.useState(S||""),v=f!==void 0,I=v?f:L,R=c(e.selector,e[`selector--${h}`],e[`selector--${T}`],{[e["selector--error"]]:l,[e["selector--fullWidth"]]:u,[e["selector--disabled"]]:p||a},g),N=c(e.selectorWrapper,{[e["selectorWrapper--fullWidth"]]:u}),W=!!i,E=(d||l&&t)&&!a;return s.jsxs("div",{className:N,children:[W&&s.jsxs("label",{className:e.selectorLabel,children:[i,_.required&&s.jsx("span",{className:e.requiredIndicator,children:"*"})]}),s.jsxs("div",{className:e.selectorContainer,children:[s.jsxs("select",{ref:q,className:R,disabled:p||a,"aria-invalid":l,"aria-describedby":l&&t?"error-message":void 0,value:I,onChange:o=>{v||j(o.target.value),n==null||n(o)},..._,children:[m&&s.jsx("option",{value:"",disabled:!0,children:m}),r.map(o=>s.jsx("option",{value:o.value,disabled:o.disabled,children:o.label},o.value))]}),a&&s.jsx("div",{className:e.selectorLoading,children:s.jsx("div",{className:e.selectorLoadingSpinner})}),!a&&s.jsx("div",{className:e.selectorIcon,children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("polyline",{points:"6 9 12 15 18 9"})})})]}),E&&s.jsx("div",{className:c(e.helperText,{[e["helperText--error"]]:l}),id:l?"error-message":void 0,children:l&&t?t:d})]})});b.displayName="Selector";b.__docgenInfo={description:`Componente Selector que representa un menú desplegable con múltiples opciones.

@component
@example
// Uso básico
const options = [
  { value: '1', label: 'Opción 1' },
  { value: '2', label: 'Opción 2' },
];

<Selector 
  options={options}
  label="Selecciona una opción"
  onChange={(e) => console.log(e.target.value)}
/>

@example
// Selector con estado de error
<Selector
  options={options}
  label="Selecciona una opción"
  error={true}
  errorMessage="Selecciona una opción válida"
/>`,methods:[],displayName:"Selector",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectorOption"}],raw:"SelectorOption[]"},description:"Opciones del selector",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Valor seleccionado actualmente"},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Valor por defecto del selector"},label:{required:!1,tsType:{name:"string"},description:"Etiqueta del selector"},helperText:{required:!1,tsType:{name:"string"},description:"Texto de ayuda o descripción"},error:{required:!1,tsType:{name:"boolean"},description:`Si es true, muestra un indicador de error
@default false`,defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Mensaje de error a mostrar cuando hay un error"},variant:{required:!1,tsType:{name:"SelectorVariant"},description:`Variante visual del selector
@default 'primary'`,defaultValue:{value:"SelectorVariant.PRIMARY",computed:!0}},size:{required:!1,tsType:{name:"SelectorSize"},description:`Tamaño del selector
@default 'medium'`,defaultValue:{value:"SelectorSize.MEDIUM",computed:!0}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Si es true, el selector ocupa todo el ancho disponible
@default false`,defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:`Si es true, el selector está en estado de carga
@default false`,defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Texto a mostrar cuando no hay opciones"},readOnly:{required:!1,tsType:{name:"boolean"},description:`Si es true, el selector es de solo lectura
@default false`},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};export{y as S,x as a,b};
