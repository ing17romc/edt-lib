import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-D4lIrffr.js";import{c as v}from"./classNames-CqjykrQM.js";const x="_button_ujxwg_1",w="_spin_ujxwg_1",t={button:x,"button--small":"_button--small_ujxwg_27","button--medium":"_button--medium_ujxwg_33","button--large":"_button--large_ujxwg_39","button--primary":"_button--primary_ujxwg_45","button--secondary":"_button--secondary_ujxwg_55","button--tertiary":"_button--tertiary_ujxwg_66","button--danger":"_button--danger_ujxwg_76","button--success":"_button--success_ujxwg_86","button--warning":"_button--warning_ujxwg_96","button--fullWidth":"_button--fullWidth_ujxwg_106","button--loading":"_button--loading_ujxwg_110",spin:w};var u=(e=>(e.PRIMARY="primary",e.SECONDARY="secondary",e.TERTIARY="tertiary",e.DANGER="danger",e.SUCCESS="success",e.WARNING="warning",e))(u||{}),l=(e=>(e.SMALL="small",e.MEDIUM="medium",e.LARGE="large",e))(l||{});const s=y.forwardRef(({children:e,variant:r=u.PRIMARY,size:i=l.MEDIUM,type:d="button",disabled:n=!1,fullWidth:m=!1,className:c,onClick:a,...p},b)=>{const f=v(t.button,t[`button--${r}`],t[`button--${i}`],{[t["button--fullWidth"]]:m},c),_=o=>{if(n){o.preventDefault();return}a&&a(o)};return g.jsx("button",{ref:b,type:d,className:f,disabled:n,onClick:_,...p,children:e})});s.displayName="Button";s.__docgenInfo={description:`Componente Button altamente personalizable que proporciona una interfaz de usuario interactiva
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
</form>`,methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Contenido del botón (texto o elementos React)"},variant:{required:!1,tsType:{name:"ButtonVariant"},description:`Variante visual del botón
@default 'primary'`,defaultValue:{value:"ButtonVariant.PRIMARY",computed:!0}},size:{required:!1,tsType:{name:"ButtonSize"},description:`Tamaño del botón
@default 'medium'`,defaultValue:{value:"ButtonSize.MEDIUM",computed:!0}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Si es true, el botón ocupa todo el ancho disponible
@default false`,defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:`Tipo de botón HTML
@default 'button'`,defaultValue:{value:"'button'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Si es true, el botón está deshabilitado
@default false`,defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:`Si es true, el botón está cargando
@default false`},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"Manejador de clic del botón"},className:{required:!1,tsType:{name:"string"},description:"Clase CSS adicional para el botón"}},composes:["Omit"]};export{l as B,u as a,s as b};
