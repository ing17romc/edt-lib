import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-D4lIrffr.js";import{c as R}from"./index-_oZgBBUR.js";const T="_button_ag2n7_51",h="_spin_ag2n7_1",a={button:T,"button--small":"_button--small_ag2n7_78","button--medium":"_button--medium_ag2n7_83","button--large":"_button--large_ag2n7_88","button--primary":"_button--primary_ag2n7_93","button--secondary":"_button--secondary_ag2n7_103","button--tertiary":"_button--tertiary_ag2n7_114","button--danger":"_button--danger_ag2n7_124","button--success":"_button--success_ag2n7_134","button--warning":"_button--warning_ag2n7_144","button--fullWidth":"_button--fullWidth_ag2n7_154","button--loading":"_button--loading_ag2n7_158",spin:h};var r=(e=>(e.PRIMARY="primary",e.SECONDARY="secondary",e.TERTIARY="tertiary",e.DANGER="danger",e.SUCCESS="success",e.WARNING="warning",e))(r||{}),l=(e=>(e.SMALL="small",e.MEDIUM="medium",e.LARGE="large",e))(l||{});const i=v.forwardRef(({children:e,variant:d=r.PRIMARY,size:c=l.MEDIUM,type:m="button",disabled:o=!1,loading:t=!1,fullWidth:p=!1,className:b,onClick:n,...f},_)=>{const g=R(a.button,a[`button--${d}`],a[`button--${c}`],{[a["button--loading"]]:t,[a["button--fullWidth"]]:p},b),y=s=>{if(t||o){s.preventDefault();return}n==null||n(s)};return u.jsxs("button",{ref:_,type:m,className:g,disabled:o||t,onClick:y,"aria-busy":t,...f,children:[t&&u.jsx("span",{className:"sr-only","aria-live":"polite",children:"Cargando..."}),e]})});i.displayName="Button";i.__docgenInfo={description:`Componente Button que representa un botón interactivo con múltiples variantes y tamaños.

@component
@example
// Uso básico
<Button variant="primary" size="medium" onClick={() => console.log('Clicked!')}>
  Hacer clic
</Button>

@example
// Botón con estado de carga
<Button variant="primary" loading={isLoading}>
  {isLoading ? 'Cargando...' : 'Enviar'}
</Button>`,methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Contenido del botón (texto o elementos React)"},variant:{required:!1,tsType:{name:"ButtonVariant"},description:`Variante visual del botón
@default 'primary'`,defaultValue:{value:"ButtonVariant.PRIMARY",computed:!0}},size:{required:!1,tsType:{name:"ButtonSize"},description:`Tamaño del botón
@default 'medium'`,defaultValue:{value:"ButtonSize.MEDIUM",computed:!0}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Si es true, el botón ocupa todo el ancho disponible
@default false`,defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:`Si es true, muestra un indicador de carga
@default false`,defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:`Tipo de botón HTML
@default 'button'`,defaultValue:{value:"'button'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Si es true, el botón está deshabilitado
@default false`,defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Clase CSS adicional para el botón"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Función que se ejecuta al hacer clic en el botón"}},composes:["Omit"]};export{l as B,r as a,i as b};
