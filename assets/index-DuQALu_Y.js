import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as A,R as C}from"./index-D4lIrffr.js";import{c}from"./classNames-CqjykrQM.js";const M="_selectorWrapper_18fao_1",V="_selectorLabel_18fao_11",w="_selectorContainer_18fao_20",O="_selector_18fao_1",U="_selectorIcon_18fao_43",D="_helperText_18fao_116",Y="_requiredIndicator_18fao_126",k="_selectorLoading_18fao_131",G="_selectorLoadingSpinner_18fao_139",P="_spin_18fao_1",e={selectorWrapper:M,"selectorWrapper--fullWidth":"_selectorWrapper--fullWidth_18fao_7",selectorLabel:V,selectorContainer:w,selector:O,"selector--small":"_selector--small_18fao_38",selectorIcon:U,"selector--medium":"_selector--medium_18fao_48","selector--large":"_selector--large_18fao_58","selector--primary":"_selector--primary_18fao_68","selector--secondary":"_selector--secondary_18fao_75","selector--error":"_selector--error_18fao_85","selector--fullWidth":"_selector--fullWidth_18fao_98",helperText:D,"helperText--error":"_helperText--error_18fao_122",requiredIndicator:Y,selectorLoading:k,selectorLoadingSpinner:G,spin:P};var y=(r=>(r.PRIMARY="primary",r.SECONDARY="secondary",r.TERTIARY="tertiary",r.DANGER="danger",r.SUCCESS="success",r.WARNING="warning",r))(y||{}),b=(r=>(r.SMALL="small",r.MEDIUM="medium",r.LARGE="large",r))(b||{});const x=A.forwardRef(({options:r=[],label:i,helperText:d,error:a=!1,errorMessage:t,variant:h=y.PRIMARY,size:T=b.MEDIUM,fullWidth:u=!1,loading:o=!1,disabled:p=!1,className:g,placeholder:m,onChange:n,value:f,defaultValue:S,..._},q)=>{const[L,j]=C.useState(S||""),v=f!==void 0,I=v?f:L,N=c(e.selector,e[`selector--${h}`],e[`selector--${T}`],{[e["selector--error"]]:a,[e["selector--fullWidth"]]:u,[e["selector--disabled"]]:p||o},g),R=c(e.selectorWrapper,{[e["selectorWrapper--fullWidth"]]:u}),W=!!i,E=(d||a&&t)&&!o;return s.jsxs("div",{className:R,children:[W&&s.jsxs("label",{className:e.selectorLabel,children:[i,_.required&&s.jsx("span",{className:e.requiredIndicator,children:"*"})]}),s.jsxs("div",{className:e.selectorContainer,children:[s.jsxs("select",{ref:q,className:N,disabled:p||o,"aria-invalid":a,"aria-describedby":a&&t?"error-message":void 0,value:I,onChange:l=>{v||j(l.target.value),n==null||n(l)},..._,children:[m&&s.jsx("option",{value:"",disabled:!0,children:m}),r.map(l=>s.jsx("option",{value:l.value,disabled:l.disabled,children:l.label},l.value))]}),o&&s.jsx("div",{className:e.selectorLoading,children:s.jsx("div",{className:e.selectorLoadingSpinner})}),!o&&s.jsx("div",{className:e.selectorIcon,children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("polyline",{points:"6 9 12 15 18 9"})})})]}),E&&s.jsx("div",{className:c(e.helperText,{[e["helperText--error"]]:a}),id:a?"error-message":void 0,children:a&&t?t:d})]})});x.displayName="Selector";x.__docgenInfo={description:`Componente Selector que representa un menú desplegable con múltiples opciones.

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
@default false`},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};export{b as S,y as a,x as b};
