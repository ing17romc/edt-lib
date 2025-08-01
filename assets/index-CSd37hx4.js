import{j as f}from"./jsx-runtime-D_zvdyIk.js";import{r as _}from"./index-D4lIrffr.js";import{c as g}from"./classNames-CqjykrQM.js";import{a as y,C as v}from"./types-D2sN4igU.js";const x="_button_ujxwg_1",B="_spin_ujxwg_1",e={button:x,"button--small":"_button--small_ujxwg_27","button--medium":"_button--medium_ujxwg_33","button--large":"_button--large_ujxwg_39","button--primary":"_button--primary_ujxwg_45","button--secondary":"_button--secondary_ujxwg_55","button--tertiary":"_button--tertiary_ujxwg_66","button--danger":"_button--danger_ujxwg_76","button--success":"_button--success_ujxwg_86","button--warning":"_button--warning_ujxwg_96","button--fullWidth":"_button--fullWidth_ujxwg_106","button--loading":"_button--loading_ujxwg_110",spin:B},o=_.forwardRef(({children:u,variant:i=y.PRIMARY,size:l=v.MEDIUM,type:s="button",disabled:t=!1,fullWidth:r=!1,className:d,onClick:n,...m},p)=>{const c=g(e.button,e[`button--${i}`],e[`button--${l}`],{[e["button--fullWidth"]]:r},d),b=a=>{if(t){a.preventDefault();return}n&&n(a)};return f.jsx("button",{ref:p,type:s,className:c,disabled:t,onClick:b,...m,children:u})});o.displayName="Button";o.__docgenInfo={description:`Componente Button altamente personalizable que proporciona una interfaz de usuario interactiva
con múltiples variantes de estilo, tamaños y estados.

@component

@example
// Ejemplo básico
<Button onClick={() => console.log('Click')}>
  Botón Primario
</Button>

@example
// Botón con variante secundaria y tamaño grande
<Button variant="secondary" size="large">
  Acción Secundaria
</Button>

@example
// Botón deshabilitado de ancho completo
<Button 
  variant="danger" 
  disabled 
  fullWidth
  onClick={handleDelete}
>
  Eliminar permanentemente
</Button>

@example
// Botón de tipo submit en un formulario
<form onSubmit={handleSubmit}>
  <Button type="submit">Enviar</Button>
</form>`,methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Contenido del botón (texto o elementos React)"},variant:{required:!1,tsType:{name:"ComponentVariant"},description:`Variante visual del botón
@default 'primary'`,defaultValue:{value:"ComponentVariant.PRIMARY",computed:!0}},size:{required:!1,tsType:{name:"ComponentSize"},description:`Tamaño del botón
@default 'medium'`,defaultValue:{value:"ComponentSize.MEDIUM",computed:!0}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Si es true, el botón ocupa todo el ancho disponible
@default false`,defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:`Tipo de botón HTML
@default 'button'`,defaultValue:{value:"'button'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Si es true, el botón está deshabilitado
@default false`,defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:`Si es true, el botón está cargando
@default false`},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"Manejador de clic del botón"},className:{required:!1,tsType:{name:"string"},description:"Clase CSS adicional para el botón"}},composes:["Omit"]};export{o as B};
