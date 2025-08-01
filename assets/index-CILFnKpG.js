import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as C,R as E}from"./index-D4lIrffr.js";import{c}from"./classNames-CqjykrQM.js";import{C as V}from"./types-D2sN4igU.js";const w="_selectorWrapper_18fao_1",A="_selectorLabel_18fao_11",O="_selectorContainer_18fao_20",M="_selector_18fao_1",U="_selectorIcon_18fao_43",Y="_helperText_18fao_116",k="_requiredIndicator_18fao_126",z="_selectorLoading_18fao_131",D="_selectorLoadingSpinner_18fao_139",P="_spin_18fao_1",e={selectorWrapper:w,"selectorWrapper--fullWidth":"_selectorWrapper--fullWidth_18fao_7",selectorLabel:A,selectorContainer:O,selector:M,"selector--small":"_selector--small_18fao_38",selectorIcon:U,"selector--medium":"_selector--medium_18fao_48","selector--large":"_selector--large_18fao_58","selector--primary":"_selector--primary_18fao_68","selector--secondary":"_selector--secondary_18fao_75","selector--error":"_selector--error_18fao_85","selector--fullWidth":"_selector--fullWidth_18fao_98",helperText:Y,"helperText--error":"_helperText--error_18fao_122",requiredIndicator:k,selectorLoading:z,selectorLoadingSpinner:D,spin:P};var y=(s=>(s.PRIMARY="primary",s.SECONDARY="secondary",s.TERTIARY="tertiary",s.DANGER="danger",s.SUCCESS="success",s.WARNING="warning",s))(y||{});const x=C.forwardRef(({options:s=[],label:i,helperText:d,error:o=!1,errorMessage:t,variant:b=y.PRIMARY,size:h=V.MEDIUM,fullWidth:p=!1,loading:l=!1,disabled:u=!1,className:S,placeholder:m,onChange:n,value:f,defaultValue:T,..._},g)=>{const[q,j]=E.useState(T||""),v=f!==void 0,I=v?f:q,N=c(e.selector,e[`selector--${b}`],e[`selector--${h}`],{[e["selector--error"]]:o,[e["selector--fullWidth"]]:p,[e["selector--disabled"]]:u||l},S),L=c(e.selectorWrapper,{[e["selectorWrapper--fullWidth"]]:p}),R=!!i,W=(d||o&&t)&&!l;return r.jsxs("div",{className:L,children:[R&&r.jsxs("label",{className:e.selectorLabel,children:[i,_.required&&r.jsx("span",{className:e.requiredIndicator,children:"*"})]}),r.jsxs("div",{className:e.selectorContainer,children:[r.jsxs("select",{ref:g,className:N,disabled:u||l,"aria-invalid":o,"aria-describedby":o&&t?"error-message":void 0,value:I,onChange:a=>{v||j(a.target.value),n==null||n(a)},..._,children:[m&&r.jsx("option",{value:"",disabled:!0,children:m}),s.map(a=>r.jsx("option",{value:a.value,disabled:a.disabled,children:a.label},a.value))]}),l&&r.jsx("div",{className:e.selectorLoading,children:r.jsx("div",{className:e.selectorLoadingSpinner})}),!l&&r.jsx("div",{className:e.selectorIcon,children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polyline",{points:"6 9 12 15 18 9"})})})]}),W&&r.jsx("div",{className:c(e.helperText,{[e["helperText--error"]]:o}),id:o?"error-message":void 0,children:o&&t?t:d})]})});x.displayName="Selector";x.__docgenInfo={description:`Componente Selector que representa un menú desplegable con múltiples opciones.

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
@default 'primary'`,defaultValue:{value:"SelectorVariant.PRIMARY",computed:!0}},size:{required:!1,tsType:{name:"ComponentSize"},description:`Tamaño del selector
@default 'medium'`,defaultValue:{value:"ComponentSize.MEDIUM",computed:!0}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Si es true, el selector ocupa todo el ancho disponible
@default false`,defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:`Si es true, el selector está en estado de carga
@default false`,defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Texto a mostrar cuando no hay opciones"},readOnly:{required:!1,tsType:{name:"boolean"},description:`Si es true, el selector es de solo lectura
@default false`},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};export{y as S,x as a};
