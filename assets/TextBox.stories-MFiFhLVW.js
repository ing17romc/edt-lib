import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as ve}from"./index-D4lIrffr.js";const m=ve.forwardRef(({id:ie,titleTop:u,placeholder:f,titleBottom:y,value:de,required:b=!1,isPassword:le=!1,disabled:t=!1,readOnly:o=!1,noPaste:pe=!1,noCopy:ce=!1,size:ue=200,eventChange:x,eventFocus:v,eventBlur:g,eventKeyDown:T,...me},fe)=>{const ye=e=>{pe&&e.preventDefault()},be=e=>{ce&&e.preventDefault()},xe=e=>{e.key==="Enter"&&e.preventDefault(),T&&!t&&!o&&T(e)};return a.jsx("div",{className:"body-textbox",children:a.jsxs("div",{className:"grid-primary",children:[a.jsx("div",{className:"start-1 size-12",children:u&&a.jsx("h3",{className:"title-textbox",children:u})}),a.jsx("div",{className:"start-1 size-12 padding-v-10",children:a.jsx("input",{id:ie,type:le?"password":"text",placeholder:f,value:de,required:b,className:t?"DISABLED":o?"READ_ONLY":"",disabled:t,readOnly:o,onChange:e=>{x&&!t&&x(e)},onFocus:e=>{v&&!t&&!o&&v(e)},onBlur:e=>{g&&!t&&!o&&g(e)},onKeyDown:xe,ref:fe,onPaste:ye,onCopy:be,style:{width:`${ue}px`},"aria-label":u||f,"aria-required":b,"aria-disabled":t,"aria-readonly":o,...me})}),y&&a.jsx("div",{className:"start-1 size-12 padding-v-10",children:a.jsx("h3",{className:"title-textbox",children:y})})]})})});m.displayName="TextBox";m.__docgenInfo={description:`Componente TextBox que proporciona un campo de entrada de texto con múltiples opciones de configuración.
Permite crear campos de texto personalizados con títulos, placeholders y diferentes estados.

@param {TextBoxProps} props - Propiedades del componente
@param {string} props.id - ID único para el input (requerido)
@param {string} [props.titleTop] - Título superior del campo
@param {string} [props.placeholder] - Texto de placeholder
@param {string} [props.titleBottom] - Título inferior del campo
@param {string} props.value - Valor actual del input
@param {boolean} [props.required=false] - Si el campo es requerido
@param {boolean} [props.isPassword=false] - Si el campo es de tipo contraseña
@param {boolean} [props.disabled=false] - Si el campo está deshabilitado
@param {boolean} [props.readOnly=false] - Si el campo es de solo lectura
@param {boolean} [props.noPaste=false] - Si se permite pegar
@param {boolean} [props.noCopy=false] - Si se permite copiar
@param {number} [props.size=200] - Ancho del input en píxeles
@param {(e: React.ChangeEvent<HTMLInputElement>) => void} [props.eventChange] - Evento de cambio
@param {(e: React.FocusEvent<HTMLInputElement>) => void} [props.eventFocus] - Evento de enfoque
@param {(e: React.FocusEvent<HTMLInputElement>) => void} [props.eventBlur] - Evento de pérdida de enfoque
@param {(e: React.KeyboardEvent<HTMLInputElement>) => void} [props.eventKeyDown] - Evento de tecla presionada
@param {Ref<HTMLInputElement>} [props.ref] - Referencia al elemento input
@returns {JSX.Element} Elemento input con configuración personalizada`,methods:[],displayName:"TextBox",props:{id:{required:!0,tsType:{name:"string"},description:"ID único del campo de entrada"},titleTop:{required:!1,tsType:{name:"string"},description:"Título que aparece encima del campo"},placeholder:{required:!1,tsType:{name:"string"},description:"Texto de marcador de posición"},titleBottom:{required:!1,tsType:{name:"string"},description:"Texto descriptivo debajo del campo"},value:{required:!0,tsType:{name:"string"},description:"Valor actual del campo"},required:{required:!1,tsType:{name:"boolean"},description:"Indica si el campo es obligatorio",defaultValue:{value:"false",computed:!1}},isPassword:{required:!1,tsType:{name:"boolean"},description:"Indica si el campo es de tipo contraseña",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Indica si el campo está deshabilitado",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"Indica si el campo es de solo lectura",defaultValue:{value:"false",computed:!1}},noPaste:{required:!1,tsType:{name:"boolean"},description:"Indica si está deshabilitado el pegado de texto",defaultValue:{value:"false",computed:!1}},noCopy:{required:!1,tsType:{name:"boolean"},description:"Indica si está deshabilitada la copia de texto",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"number"},description:"Ancho del campo en píxeles",defaultValue:{value:"200",computed:!1}},eventChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:"Manejador del evento de cambio"},eventFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:"Manejador del evento de foco"},eventBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:"Manejador del evento de pérdida de foco"},eventKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:"Manejador del evento de tecla presionada"},ref:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Referencia al elemento input"}}};const Ee={title:"Controls/TextBox",component:m,parameters:{layout:"centered",docs:{description:{component:"Un componente de campo de texto personalizable con múltiples opciones de configuración."}}},argTypes:{id:{control:"text",description:"ID único para el campo de entrada",table:{type:{summary:"string"}}},value:{control:"text",description:"Valor actual del campo",table:{type:{summary:"string"}}},titleTop:{control:"text",description:"Título que aparece encima del campo",table:{type:{summary:"string"}}},titleBottom:{control:"text",description:"Texto descriptivo debajo del campo",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"Texto de marcador de posición",table:{type:{summary:"string"}}},required:{control:"boolean",description:"Indica si el campo es obligatorio",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isPassword:{control:"boolean",description:"Indica si el campo es de tipo contraseña",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Indica si el campo está deshabilitado",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readOnly:{control:"boolean",description:"Indica si el campo es de solo lectura",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},noPaste:{control:"boolean",description:"Indica si está deshabilitado el pegado de texto",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},noCopy:{control:"boolean",description:"Indica si está deshabilitada la copia de texto",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},size:{control:{type:"number",min:100,max:1e3,step:10},description:"Ancho del campo en píxeles",table:{type:{summary:"number"},defaultValue:{summary:"200"}}},eventChange:{action:"changed",description:"Manejador del evento de cambio",table:{type:{summary:"(e: React.ChangeEvent<HTMLInputElement>) => void"}}},eventFocus:{action:"focused",description:"Manejador del evento de foco",table:{type:{summary:"(e: React.FocusEvent<HTMLInputElement>) => void"}}},eventBlur:{action:"blurred",description:"Manejador del evento de pérdida de foco",table:{type:{summary:"(e: React.FocusEvent<HTMLInputElement>) => void"}}},eventKeyDown:{action:"keyDown",description:"Manejador del evento de tecla presionada",table:{type:{summary:"(e: React.KeyboardEvent<HTMLInputElement>) => void"}}}},args:{id:"default-textbox",value:"",placeholder:"Escribe algo...",size:200}},r={args:{id:"basic-textbox",value:"Texto de ejemplo"}},s={args:{id:"with-titles",titleTop:"Título superior",titleBottom:"Texto de ayuda o descripción",value:""}},n={args:{id:"disabled-textbox",value:"Campo deshabilitado",disabled:!0}},i={args:{id:"readonly-textbox",value:"Este texto no se puede modificar",readOnly:!0}},d={args:{id:"password-textbox",isPassword:!0,value:"micontraseña",placeholder:"Ingresa tu contraseña"}},l={args:{id:"restricted-textbox",value:"No se puede copiar ni pegar aquí",noCopy:!0,noPaste:!0}},p={args:{id:"custom-width-textbox",value:"Campo más ancho",size:300}},c={args:{id:"full-featured-textbox",titleTop:"Información personal",placeholder:"Escribe tu nombre completo",titleBottom:"Campo obligatorio",value:"Juan Pérez",required:!0,size:250}};var E,h,I,R,q;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    id: 'basic-textbox',
    value: 'Texto de ejemplo'
  }
}`,...(I=(h=r.parameters)==null?void 0:h.docs)==null?void 0:I.source},description:{story:"TextBox básico con las propiedades mínimas requeridas",...(q=(R=r.parameters)==null?void 0:R.docs)==null?void 0:q.description}}};var M,w,C,L,j;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    id: 'with-titles',
    titleTop: 'Título superior',
    titleBottom: 'Texto de ayuda o descripción',
    value: ''
  }
}`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source},description:{story:"TextBox con títulos superior e inferior",...(j=(L=s.parameters)==null?void 0:L.docs)==null?void 0:j.description}}};var B,H,P,D,z;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    id: 'disabled-textbox',
    value: 'Campo deshabilitado',
    disabled: true
  }
}`,...(P=(H=n.parameters)==null?void 0:H.docs)==null?void 0:P.source},description:{story:"TextBox deshabilitado",...(z=(D=n.parameters)==null?void 0:D.docs)==null?void 0:z.description}}};var F,V,S,N,K;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    id: 'readonly-textbox',
    value: 'Este texto no se puede modificar',
    readOnly: true
  }
}`,...(S=(V=i.parameters)==null?void 0:V.docs)==null?void 0:S.source},description:{story:"TextBox de solo lectura",...(K=(N=i.parameters)==null?void 0:N.docs)==null?void 0:K.description}}};var O,W,A,_,J;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    id: 'password-textbox',
    isPassword: true,
    value: 'micontraseña',
    placeholder: 'Ingresa tu contraseña'
  }
}`,...(A=(W=d.parameters)==null?void 0:W.docs)==null?void 0:A.source},description:{story:"Campo de contraseña",...(J=(_=d.parameters)==null?void 0:_.docs)==null?void 0:J.description}}};var k,U,X,Y,$;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    id: 'restricted-textbox',
    value: 'No se puede copiar ni pegar aquí',
    noCopy: true,
    noPaste: true
  }
}`,...(X=(U=l.parameters)==null?void 0:U.docs)==null?void 0:X.source},description:{story:"TextBox con restricciones de copiado y pegado",...($=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:$.description}}};var G,Q,Z,ee,ae;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    id: 'custom-width-textbox',
    value: 'Campo más ancho',
    size: 300
  }
}`,...(Z=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:Z.source},description:{story:"TextBox con ancho personalizado",...(ae=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:ae.description}}};var te,oe,re,se,ne;c.parameters={...c.parameters,docs:{...(te=c.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    id: 'full-featured-textbox',
    titleTop: 'Información personal',
    placeholder: 'Escribe tu nombre completo',
    titleBottom: 'Campo obligatorio',
    value: 'Juan Pérez',
    required: true,
    size: 250
  }
}`,...(re=(oe=c.parameters)==null?void 0:oe.docs)==null?void 0:re.source},description:{story:"TextBox con todas las propiedades",...(ne=(se=c.parameters)==null?void 0:se.docs)==null?void 0:ne.description}}};const he=["Default","WithTitles","Disabled","ReadOnly","Password","WithCopyPasteRestrictions","CustomWidth","FullFeatured"];export{p as CustomWidth,r as Default,n as Disabled,c as FullFeatured,d as Password,i as ReadOnly,l as WithCopyPasteRestrictions,s as WithTitles,he as __namedExportsOrder,Ee as default};
