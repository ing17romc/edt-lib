import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-D4lIrffr.js";import{b as p}from"./enums-Ca2RdD1G.js";const u=I.forwardRef(({id:m,titleTop:i,titleBottom:f,value:g,required:c=!1,disabled:r=!1,readOnly:d=!1,eventChange:S,options:V=[],...B},H)=>{const M=t=>{S&&!r&&S(t)},w=()=>r?p.DISABLED:d?p.READ_ONLY:c&&!g?p.REQUIRED:"";return e.jsx("div",{className:"body-selector",children:e.jsxs("div",{className:"grid-primary",children:[e.jsx("div",{className:"start-1 size-12",children:i&&e.jsx("h3",{className:"title-selector",children:i})}),e.jsx("div",{className:"start-1 size-12 padding-v-10",children:e.jsx("select",{id:m,name:m,value:g,onChange:M,disabled:r||d,required:c,className:w(),"aria-label":i||"Selector","aria-required":c,"aria-disabled":r,"aria-readonly":d,ref:H,...B,children:V.map((t,z)=>e.jsx("option",{value:t.value,"aria-label":t.label,children:t.label},z))})}),f&&e.jsx("div",{className:"start-1 size-12 padding-v-10",children:e.jsx("h3",{className:"title-selector",children:f})})]})})});u.displayName="Selector";u.__docgenInfo={description:`Componente Selector que proporciona un menú desplegable con múltiples opciones de configuración.
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
@returns {JSX.Element} Elemento select con opciones personalizadas`,methods:[],displayName:"Selector",props:{id:{required:!0,tsType:{name:"string"},description:""},titleTop:{required:!1,tsType:{name:"string"},description:""},titleBottom:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},eventChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"e"}],return:{name:"void"}}},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectorOption"}],raw:"SelectorOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},ref:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},description:""}}};const _=[{value:"option1",label:"Opción 1"},{value:"option2",label:"Opción 2"},{value:"option3",label:"Opción 3"}],W={title:"Controls/Selector",component:u,tags:["autodocs"],argTypes:{id:{control:"text",description:"ID único para el select (requerido)"},titleTop:{control:"text",description:"Título superior del selector"},titleBottom:{control:"text",description:"Título inferior del selector"},value:{control:"text",description:"Valor actual seleccionado"},required:{control:"boolean",description:"Si el selector es requerido",defaultValue:!1},disabled:{control:"boolean",description:"Si el selector está deshabilitado",defaultValue:!1},readOnly:{control:"boolean",description:"Si el selector es de solo lectura",defaultValue:!1},options:{control:"object",description:"Opciones disponibles para el selector"},eventChange:{action:"changed",description:"Función que se ejecuta cuando cambia la selección"}},args:{id:"storybook-selector",titleTop:"Selecciona una opción",value:"option2",options:_}},a={},o={args:{titleBottom:"Este es un texto de ayuda",titleTop:"Selector con título inferior"}},s={args:{required:!0,titleTop:"Selector requerido",value:""}},l={args:{disabled:!0,titleTop:"Selector deshabilitado"}},n={args:{readOnly:!0,titleTop:"Selector de solo lectura"}};var b,T,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(v=(T=a.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var y,h,q;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    titleBottom: 'Este es un texto de ayuda',
    titleTop: 'Selector con título inferior'
  }
}`,...(q=(h=o.parameters)==null?void 0:h.docs)==null?void 0:q.source}}};var E,x,O;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    required: true,
    titleTop: 'Selector requerido',
    value: ''
  }
}`,...(O=(x=s.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var R,j,C;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    disabled: true,
    titleTop: 'Selector deshabilitado'
  }
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var N,D,L;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    titleTop: 'Selector de solo lectura'
  }
}`,...(L=(D=n.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const F=["Default","WithBottomTitle","Required","Disabled","ReadOnly"];export{a as Default,l as Disabled,n as ReadOnly,s as Required,o as WithBottomTitle,F as __namedExportsOrder,W as default};
