import{r as e,t}from"./iframe-YpqvHZo3.js";import{t as n}from"./jsx-runtime-ChNUh70B.js";import{t as r}from"./classNames-DYb3CZs3.js";import{n as i,t as a}from"./types-BTwUNDvM.js";var o=`_button_ujxwg_1`,s=`_spin_ujxwg_1`,c={button:o,"button--small":`_button--small_ujxwg_27`,"button--medium":`_button--medium_ujxwg_33`,"button--large":`_button--large_ujxwg_39`,"button--primary":`_button--primary_ujxwg_45`,"button--secondary":`_button--secondary_ujxwg_55`,"button--tertiary":`_button--tertiary_ujxwg_66`,"button--danger":`_button--danger_ujxwg_76`,"button--success":`_button--success_ujxwg_86`,"button--warning":`_button--warning_ujxwg_96`,"button--fullWidth":`_button--fullWidth_ujxwg_106`,"button--loading":`_button--loading_ujxwg_110`,spin:s},l=e(t(),1),u=n(),d=(0,l.forwardRef)(({children:e,variant:t=i.PRIMARY,size:n=a.MEDIUM,type:o=`button`,disabled:s=!1,fullWidth:l=!1,className:d,onClick:f,...p},m)=>{let h=r(c.button,c[`button--${t}`],c[`button--${n}`],{[c[`button--fullWidth`]]:l},d);return(0,u.jsx)(`button`,{ref:m,type:o,className:h,disabled:s,onClick:e=>{if(s){e.preventDefault();return}f&&f(e)},...p,children:e})});d.displayName=`Button`,d.__docgenInfo={description:`Componente Button altamente personalizable que proporciona una interfaz de usuario interactiva\r
con múltiples variantes de estilo, tamaños y estados.\r
\r
@component\r
\r
@example\r
// Ejemplo básico\r
<Button onClick={() => console.log('Click')}>\r
  Botón Primario\r
</Button>\r
\r
@example\r
// Botón con variante secundaria y tamaño grande\r
<Button variant="secondary" size="large">\r
  Acción Secundaria\r
</Button>\r
\r
@example\r
// Botón deshabilitado de ancho completo\r
<Button \r
  variant="danger" \r
  disabled \r
  fullWidth\r
  onClick={handleDelete}\r
>\r
  Eliminar permanentemente\r
</Button>\r
\r
@example\r
// Botón de tipo submit en un formulario\r
<form onSubmit={handleSubmit}>\r
  <Button type="submit">Enviar</Button>\r
</form>`,methods:[],displayName:`Button`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:`Contenido del botón (texto o elementos React)`},variant:{required:!1,tsType:{name:`ComponentVariant`},description:`Variante visual del botón\r
@default 'primary'`,defaultValue:{value:`ComponentVariant.PRIMARY`,computed:!0}},size:{required:!1,tsType:{name:`ComponentSize`},description:`Tamaño del botón\r
@default 'medium'`,defaultValue:{value:`ComponentSize.MEDIUM`,computed:!0}},fullWidth:{required:!1,tsType:{name:`boolean`},description:`Si es true, el botón ocupa todo el ancho disponible\r
@default false`,defaultValue:{value:`false`,computed:!1}},type:{required:!1,tsType:{name:`union`,raw:`'button' | 'submit' | 'reset'`,elements:[{name:`literal`,value:`'button'`},{name:`literal`,value:`'submit'`},{name:`literal`,value:`'reset'`}]},description:`Tipo de botón HTML\r
@default 'button'`,defaultValue:{value:`'button'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Si es true, el botón está deshabilitado\r
@default false`,defaultValue:{value:`false`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:`Si es true, el botón está cargando\r
@default false`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.MouseEvent<HTMLButtonElement>) => void`,signature:{arguments:[{type:{name:`ReactMouseEvent`,raw:`React.MouseEvent<HTMLButtonElement>`,elements:[{name:`HTMLButtonElement`}]},name:`event`}],return:{name:`void`}}},description:`Manejador de clic del botón`},className:{required:!1,tsType:{name:`string`},description:`Clase CSS adicional para el botón`}},composes:[`Omit`]};export{d as t};