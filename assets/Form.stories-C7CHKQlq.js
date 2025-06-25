import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-D4lIrffr.js";import{B as $}from"./index-DEGu--FC.js";import{C as X}from"./index-Dcj-BqIm.js";import{S as x,T as Q}from"./index-RnacDOmr.js";import{S as G}from"./index-BFvASQ2C.js";import{T as K}from"./index-Dp0Xzw04.js";import{T as W}from"./index-BNkp-o0C.js";import{T as Z}from"./index-xOzdGBUs.js";import"./index-BjEFWTkP.js";import"./index-BGoeR8wK.js";import"./index-D548qw57.js";const ee=[{key:"0",value:"Solter@"},{key:"1",value:"Casad@"},{key:"2",value:"Viud@"}],ae=r=>{if(r&&r.target){if(r.target.tagName.toLowerCase()==="input")return r.target.type.toLowerCase()==="checkbox"?{key:r.target.name,value:r.target.checked}:r.target.type.toLowerCase()==="radio"?{key:r.target.name,value:r.target.id}:{key:r.target.name,value:r.target.value};if(r.target.tagName.toLowerCase()==="button")return{key:r.target.id,value:""};if(r.target.tagName.toLowerCase()==="textarea"||r.target.tagName.toLowerCase()==="select")return{key:r.target.id,value:r.target.value}}else return r?{key:r.id,value:r.value}:null},te={getValueInput:ae},R=u.forwardRef(({id:r,name:t,label:o,disabled:p=!1,required:i=!1,readOnly:a=!1,value:s,eventChange:l,...f},y)=>{const v=()=>p?x.DISABLED:a?x.READ_ONLY:i&&!s?x.REQUIRED:"";return e.jsxs("div",{className:`radiobutton ${v()}`,children:[e.jsx("input",{type:"radio",id:r,name:t,required:i&&!p,disabled:p,value:s,checked:r===s,onChange:b=>{!a&&l&&l(b)},ref:y,"aria-label":o,"aria-disabled":p,...f}),e.jsx("label",{htmlFor:r,children:o})]})});R.displayName="RadioButton";R.__docgenInfo={description:`Componente RadioButton que proporciona un botón de radio con múltiples opciones de configuración.
Permite crear grupos de botones de radio personalizados con diferentes estados.

@param {RadioButtonProps} props - Propiedades del componente
@param {string} props.id - ID único para el botón de radio (requerido)
@param {string} props.name - Nombre del grupo de botones de radio (requerido)
@param {string} props.label - Texto de la etiqueta del botón (requerido)
@param {boolean} [props.disabled=false] - Si el botón está deshabilitado
@param {boolean} [props.required=false] - Si el botón es requerido
@param {boolean} [props.readOnly=false] - Si el botón es de solo lectura
@param {string} props.value - Valor del botón (requerido)
@param {(e: React.ChangeEvent<HTMLInputElement>) => void} [props.eventChange] - Evento de cambio
@param {Ref<HTMLInputElement>} [props.ref] - Referencia al elemento input
@returns {JSX.Element} Elemento radio button con configuración personalizada`,methods:[],displayName:"RadioButton",props:{id:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!0,tsType:{name:"string"},description:""},eventChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},ref:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""}}};const D=u.forwardRef(({id:r,titleTop:t,titleBottom:o,value:p,required:i=!1,disabled:a=!1,readOnly:s=!1,eventChange:l,options:f=[],...y},v)=>{const b=g=>{l&&!a&&l(g)},h=()=>a?x.DISABLED:s?x.READ_ONLY:i&&!p?x.REQUIRED:"";return e.jsx("div",{className:"body-selector",children:e.jsxs("div",{className:"grid-primary",children:[e.jsx("div",{className:"start-1 size-12",children:t&&e.jsx("h3",{className:"title-selector",children:t})}),e.jsx("div",{className:"start-1 size-12 padding-v-10",children:e.jsx("select",{id:r,name:r,value:p,onChange:b,disabled:a||s,required:i,className:h(),"aria-label":t||"Selector","aria-required":i,"aria-disabled":a,"aria-readonly":s,ref:v,...y,children:f.map((g,C)=>e.jsx("option",{value:g.value,"aria-label":g.label,children:g.label},C))})}),o&&e.jsx("div",{className:"start-1 size-12 padding-v-10",children:e.jsx("h3",{className:"title-selector",children:o})})]})})});D.displayName="Selector";D.__docgenInfo={description:`Componente Selector que proporciona un menú desplegable con múltiples opciones de configuración.
Permite crear selectores personalizados con títulos y diferentes estados.

@param {SelectorProps} props - Propiedades del componente
@param {string} props.id - ID único para el select (requerido)
@param {string} [props.titleTop] - Título superior del selector
@param {string} [props.titleBottom] - Título inferior del selector
@param {string | number} props.value - Valor actual seleccionado
@param {boolean} [props.required=false] - Si el selector es requerido
@param {boolean} [props.disabled=false] - Si el selector está deshabilitado
@param {boolean} [props.readOnly=false] - Si el selector es de solo lectura
@param {(e: React.ChangeEvent<HTMLSelectElement>) => void} [props.eventChange] - Evento de cambio
@param {SelectorOption[]} [props.options=[]] - Opciones disponibles para el selector
@param {Ref<HTMLSelectElement>} [props.ref] - Referencia al elemento select
@returns {JSX.Element} Elemento select con opciones personalizadas`,methods:[],displayName:"Selector",props:{id:{required:!0,tsType:{name:"string"},description:""},titleTop:{required:!1,tsType:{name:"string"},description:""},titleBottom:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},eventChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"e"}],return:{name:"void"}}},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectorOption"}],raw:"SelectorOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},ref:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},description:""}}};const V=({id:r,title:t,value:o,eventChange:p,disabled:i=!1,readOnly:a=!1,required:s=!1,ref:l})=>{const[f,y]=u.useState(""),[v,b]=u.useState(""),[h,g]=u.useState(""),[C,F]=u.useState([]),w=new Date().getFullYear();let M=w;if(o&&/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(o)){const n=o.split("/");M=Math.max(w,parseInt(n[2],10))}const H=Array.from({length:100},(n,c)=>M-99+c);u.useEffect(()=>{if(o&&Date.parse(o)){const n=new Date(o);y(n.getDate().toString()),b((n.getMonth()+1).toString()),g(n.getFullYear().toString())}},[o]),u.useEffect(()=>{F(Array.from({length:31},(n,c)=>c+1))},[]);const E=(n,c,m)=>`${n}/${c}/${m}`,Y=n=>{const c=n.target.value;y(()=>{const m=c;if(v&&m&&h){const j=E(v,m,h);N(j)}return m})},_=n=>{const c=n.target.value;b(()=>{const m=c;if(m&&f&&h){const j=E(m,f,h);N(j)}return m})},J=n=>{const c=n.target.value;g(()=>{const m=c;if(v&&f&&m){const j=E(v,f,m);N(j)}return m})},N=n=>{n!==o&&p(n)},U=()=>i?"disabled":a?"read-only":s&&(!o||o==="0/0/0")?"required":"";return e.jsxs("div",{className:`date-picker ${U()}`,role:"group","aria-label":t,children:[e.jsx("label",{htmlFor:r,children:t}),e.jsxs("div",{className:"date-picker-container",children:[e.jsxs("select",{id:r,name:r,value:v,onChange:_,disabled:i,required:!i&&s,"aria-label":"Mes",ref:l,"aria-disabled":i,"aria-readonly":a,children:[e.jsx("option",{value:"",children:"Mes"}),["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"].map((n,c)=>e.jsx("option",{value:c.toString(),children:n},c))]}),e.jsxs("select",{value:f,onChange:Y,disabled:i,required:!i&&s,"aria-label":"Día","aria-disabled":i,"aria-readonly":a,children:[e.jsx("option",{value:"",children:"Día"}),C.map(n=>e.jsx("option",{value:n.toString(),children:n},n))]}),e.jsxs("select",{value:h,onChange:J,disabled:i,required:!i&&s,"aria-label":"Año","aria-disabled":i,"aria-readonly":a,children:[e.jsx("option",{value:"",children:"Año"}),H.map(n=>e.jsx("option",{value:n.toString(),children:n},n))]})]})]})};V.__docgenInfo={description:`Componente DatePicker que proporciona un selector de fecha personalizado.
Permite seleccionar día, mes y año de manera independiente.

@param {DatePickerProps} props - Propiedades del componente
@param {string} props.id - ID único para el componente
@param {string} props.title - Texto que se mostrará como etiqueta
@param {string} props.value - Valor inicial de la fecha (formato MM/DD/YYYY)
@param {(value: string) => void} props.eventChange - Función que se ejecuta al cambiar la fecha
@param {boolean} [props.disabled=false] - Si el componente está deshabilitado
@param {boolean} [props.readOnly=false] - Si el componente está en modo solo lectura
@param {boolean} [props.required=false] - Si el campo es requerido
@param {React.ForwardedRef} [props.ref] - Referencia al elemento select
@returns {JSX.Element} Elemento div con selectores para día, mes y año`,methods:[],displayName:"DatePicker",props:{id:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},eventChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},ref:{required:!1,tsType:{name:"ForwardedRef",elements:[{name:"HTMLSelectElement"}],raw:"ForwardedRef<HTMLSelectElement>"},description:""}}};var q={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var z;function re(){return z||(z=1,function(r){(function(){var t={}.hasOwnProperty;function o(){for(var a="",s=0;s<arguments.length;s++){var l=arguments[s];l&&(a=i(a,p(l)))}return a}function p(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return o.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var s="";for(var l in a)t.call(a,l)&&a[l]&&(s=i(s,l));return s}function i(a,s){return s?a?a+" "+s:a+s:a}r.exports?(o.default=o,r.exports=o):window.classNames=o})()}(q)),q.exports}re();const d={Button:$,CheckButton:X,RadioButton:R,Selector:D,TextBox:K,Title:W,TextButton:Z,TextArea:Q,DatePicker:V,Spinner:G},O=()=>{const{getValueInput:r}=te,[t,o]=u.useState({name:"Rafael Orlando",lastName:"Márquez Cedeño",dni:"MACR860512",civilStatus:"1",gender:"",noticePrivacy:!1,description:"",birthDate:"",disabled:!1,required:!1,readOnly:!1}),[p,i]=u.useState(!1),a=()=>{const l=r();l&&o({...t,[l.label]:l.value})},s=()=>{alert("Form submitted ")};return e.jsxs(e.Fragment,{children:[e.jsx(d.Spinner,{show:p,children:"Datos Personales"}),e.jsxs("form",{onSubmit:s,children:[e.jsx("div",{className:"container-body",children:e.jsxs("div",{className:"grid-primary",children:[e.jsx("div",{className:"start-1 size-12 padding-v-20",children:e.jsx(d.Title,{title:"Cliente",children:"Cliente"})}),e.jsxs("div",{className:"grid-secondary",children:[e.jsx("div",{className:"start-1 size-9 padding-v-20",children:e.jsx("h4",{children:"Datos Personales"})}),e.jsx("div",{className:"start-13 size-4 padding-v-20",children:e.jsx(d.CheckButton,{label:"Aviso de privacidad",id:"disabled",eventChange:a,checked:t.disabled})}),e.jsx("div",{className:"size-4 padding-v-20",children:e.jsx(d.CheckButton,{label:"Aviso de privacidad",id:"readOnly",eventChange:a,checked:t.readOnly})}),e.jsx("div",{className:"size-4 padding-v-20",children:e.jsx(d.CheckButton,{label:"Aviso de privacidad",id:"required",eventChange:a,checked:t.required})}),e.jsx("div",{className:"start-1 size-3 padding-v-20",children:"Genero"}),e.jsx("div",{className:"size-5 padding-v-20",children:e.jsx(d.RadioButton,{id:"man",name:"gender",value:t.gender,label:"Hombre",eventChange:a,disabled:t.disabled,readOnly:t.readOnly})}),e.jsx("div",{className:"size-4 padding-v-20",children:e.jsx(d.RadioButton,{id:"woman",name:"gender",value:t.gender,label:"Mujer",eventChange:a,disabled:t.disabled,readOnly:t.readOnly})}),e.jsx("div",{className:"start-1 size-6 padding-v-20",children:e.jsx(d.Selector,{id:"civilStatus",value:t.civilStatus,options:ee,eventChange:a,titleBottom:"Estado civil",disabled:t.disabled,readOnly:t.readOnly})}),e.jsx("div",{className:"size-6 padding-v-20",children:e.jsx(d.TextBox,{id:"dni",value:t.dni,eventChange:a,titleBottom:"Doc. Identificación",disabled:t.disabled,readOnly:t.readOnly})}),e.jsx("div",{className:"size-12 padding-v-20",children:e.jsx(d.DatePicker,{id:"birthDate",value:t.birthDate,eventChange:a,title:"Fecha de Nacimiento",disabled:t.disabled,readOnly:t.readOnly})}),e.jsx("div",{className:"start-1 size-12 padding-v-20",children:e.jsx(d.TextBox,{id:"name",value:t.name,eventChange:a,titleBottom:"Nombres",disabled:t.disabled,readOnly:t.readOnly})}),e.jsx("div",{className:"size-12 padding-v-20",children:e.jsx(d.TextBox,{id:"lastName",value:t.lastName,eventChange:a,titleBottom:"Apellidos",disabled:t.disabled,readOnly:t.readOnly})}),e.jsx("div",{className:"start-1 size-24 padding-v-20",children:e.jsx(d.TextArea,{rows:4,id:"description",value:t.description,placeholder:"Escriba aquí",eventChange:a,disabled:t.disabled,readOnly:t.readOnly})}),e.jsx("div",{className:"start-1 size-1 padding-v-20 center",children:e.jsx(d.CheckButton,{label:"Aviso de privacidad",id:"noticePrivacy",eventChange:a,checked:t.noticePrivacy,disabled:t.disabled,readOnly:t.readOnly})}),e.jsx("div",{className:"size-11 padding-v-20",children:e.jsx(d.TextButton,{id:"btnNoticePrivacy",text:"Aviso de privacidad ",onClick:()=>alert("clic Aviso privacidad"),disabled:t.disabled})})]})]})}),e.jsxs("div",{className:"grid-primary padding-v-10",children:[e.jsx("div",{className:"start-7 size-3 padding-v-10",children:e.jsx(d.Button,{title:"Cargando",type:"SECONDARY",onClick:()=>i(!0),disabled:t.disabled})}),e.jsx("div",{className:"size-3 padding-v-10",children:e.jsx(d.Button,{title:"Continue",type:"PRIMARY",disabled:t.disabled})})]})]})]})};O.__docgenInfo={description:`Form

Componente de formulario para captura y edición de datos personales.
Incluye campos de texto, selectores, botones y controles de privacidad.
Utiliza controles personalizados y estado local para gestionar los datos del usuario.

@param {} props - Propiedades del componente (actualmente no recibe props)
@returns {JSX.Element} Formulario interactivo de datos personales`,methods:[],displayName:"Form"};const ge={title:"Examples/Form",component:O,tags:["autodocs","examples"],parameters:{componentSubtitle:"Formulario de datos personales",docs:{description:{component:`
Componente de formulario interactivo que incluye:
- Campos de texto para nombre, apellido, DNI, etc.
- Selectores para estado civil y género
- Checkbox para aceptar términos y condiciones
- Validación de campos requeridos
- Manejo de envío de formulario
        `}}}},S={args:{},parameters:{docs:{description:{story:"Vista por defecto del formulario con valores iniciales"}}}},T={render:()=>e.jsxs("div",{children:[e.jsx("p",{children:"Este es un ejemplo de cómo se vería el formulario deshabilitado."}),e.jsx("div",{style:{pointerEvents:"none",opacity:.6},children:e.jsx(O,{})})]}),parameters:{docs:{description:{story:"Ejemplo de formulario en estado deshabilitado"}}}};var B,k,I;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Vista por defecto del formulario con valores iniciales'
      }
    }
  }
}`,...(I=(k=S.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var L,A,P;T.parameters={...T.parameters,docs:{...(L=T.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    // Este ejemplo muestra cómo se vería el formulario deshabilitado
    // En una implementación real, esto se controlaría mediante props
    return <div>
        <p>Este es un ejemplo de cómo se vería el formulario deshabilitado.</p>
        <div style={{
        pointerEvents: 'none',
        opacity: 0.6
      }}>
          <Form />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de formulario en estado deshabilitado'
      }
    }
  }
}`,...(P=(A=T.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const he=["Default","Disabled"];export{S as Default,T as Disabled,he as __namedExportsOrder,ge as default};
