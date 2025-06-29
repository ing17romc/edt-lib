import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as L}from"./index-D4lIrffr.js";import{b as c}from"./enums-Ca2RdD1G.js";const m=L.forwardRef(({id:n,name:o,label:e,disabled:r=!1,required:b=!1,readOnly:g=!1,value:u,eventChange:f,...H},M)=>{const V=()=>r?c.DISABLED:g?c.READ_ONLY:b&&!u?c.REQUIRED:"";return a.jsxs("div",{className:`radiobutton ${V()}`,children:[a.jsx("input",{type:"radio",id:n,name:o,required:b&&!r,disabled:r,value:u,checked:n===u,onChange:N=>{!g&&f&&f(N)},ref:M,"aria-label":e,"aria-disabled":r,...H}),a.jsx("label",{htmlFor:n,children:e})]})});m.displayName="RadioButton";const p=m;m.__docgenInfo={description:`Componente RadioButton que proporciona un botón de radio con múltiples opciones de configuración.
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
@returns {JSX.Element} Elemento radio button con configuración personalizada`,methods:[],displayName:"RadioButton",props:{id:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!0,tsType:{name:"string"},description:""},eventChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},ref:{required:!1,tsType:{name:"RefObject",elements:[{name:"HTMLInputElement"}],raw:"RefObject<HTMLInputElement>"},description:""}}};const A={title:"Controls/RadioButton",component:p,parameters:{layout:"centered",docs:{description:{component:"A customizable radio button component that supports different states and configurations."}}},tags:["autodocs"],argTypes:{id:{control:"text"},name:{control:"text"},label:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},readOnly:{control:"boolean"},value:{control:"text"},eventChange:{action:"changed"}}},t={args:{id:"option1",name:"options",label:"Option 1",value:""}},_=()=>{const[n,o]=L.useState("option1");return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[a.jsx(p,{id:"option1",name:"options",label:"Option 1",value:n,eventChange:e=>o(e.target.id)}),a.jsx(p,{id:"option2",name:"options",label:"Option 2",value:n,eventChange:e=>o(e.target.id)}),a.jsx(p,{id:"option3",name:"options",label:"Option 3 (Disabled)",value:n,disabled:!0,eventChange:e=>o(e.target.id)})]})},s={render:()=>a.jsx(_,{})},i={args:{id:"disabled-option",name:"disabled-group",label:"Disabled Option",value:"",disabled:!0}},d={args:{id:"required-option",name:"required-group",label:"Required Option",value:"",required:!0}},l={args:{id:"readonly-option",name:"readonly-group",label:"Read-Only Option",value:"",readOnly:!0}};var y,v,q;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: 'option1',
    name: 'options',
    label: 'Option 1',
    value: ''
  }
}`,...(q=(v=t.parameters)==null?void 0:v.docs)==null?void 0:q.source}}};var R,O,x;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <RadioButtonGroup />
}`,...(x=(O=s.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var E,h,T;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    id: 'disabled-option',
    name: 'disabled-group',
    label: 'Disabled Option',
    value: '',
    disabled: true
  }
}`,...(T=(h=i.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var S,C,D;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    id: 'required-option',
    name: 'required-group',
    label: 'Required Option',
    value: '',
    required: true
  }
}`,...(D=(C=d.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var j,B,I;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: 'readonly-option',
    name: 'readonly-group',
    label: 'Read-Only Option',
    value: '',
    readOnly: true
  }
}`,...(I=(B=l.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};const P=["Default","Group","Disabled","Required","ReadOnly"];export{t as Default,i as Disabled,s as Group,l as ReadOnly,d as Required,P as __namedExportsOrder,A as default};
