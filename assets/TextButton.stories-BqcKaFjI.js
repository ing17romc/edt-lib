import{j as t}from"./jsx-runtime-D_zvdyIk.js";const r=({id:e,text:I,disabled:n=!1,onClick:d,type:C="PRIMARY"})=>{const v=()=>`textButton ${C} ${n?"DISABLED":""}`;return t.jsx("button",{className:v(),id:e,type:d?"button":"submit",name:e,disabled:n,"aria-disabled":n,onClick:P=>{!n&&d&&d(P)},children:I})};r.__docgenInfo={description:`Componente TextButton que muestra un botón de texto con diferentes estilos.
Permite crear botones de texto con diferentes estados y funcionalidades.

@param {TextButtonProps} props - Propiedades del componente
@param {string} props.id - ID único para el botón (requerido)
@param {string} props.text - Texto que se mostrará en el botón (requerido)
@param {boolean} [props.disabled=false] - Si el botón está deshabilitado
@param {(e: React.MouseEvent) => void} [props.onClick] - Función que se ejecuta al hacer clic
@param {ControlStyle} [props.type='PRIMARY'] - Estilo del botón (PRIMARY, SECONDARY, DANGER, SUCCESS, WARNING, INFO)
@returns {JSX.Element} Elemento button con texto y estilos personalizados`,methods:[],displayName:"TextButton",props:{id:{required:!0,tsType:{name:"string"},description:""},text:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},type:{required:!1,tsType:{name:"union",raw:"'PRIMARY' | 'SECONDARY' | 'DANGER' | 'SUCCESS' | 'WARNING' | 'INFO'",elements:[{name:"literal",value:"'PRIMARY'"},{name:"literal",value:"'SECONDARY'"},{name:"literal",value:"'DANGER'"},{name:"literal",value:"'SUCCESS'"},{name:"literal",value:"'WARNING'"},{name:"literal",value:"'INFO'"}]},description:"",defaultValue:{value:"'PRIMARY'",computed:!1}}}};const T={title:"Controls/TextButton",component:r,parameters:{layout:"centered",docs:{description:{component:"A customizable text button component that supports different styles and states."}}},argTypes:{type:{control:"select",options:["PRIMARY","SECONDARY","DANGER","SUCCESS","WARNING","INFO"],description:"The style variant of the button",table:{type:{summary:"ControlStyle"},defaultValue:{summary:"PRIMARY"}}},disabled:{control:"boolean",description:"Disables the button if true",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onClick:{action:"clicked",description:"Function to call when button is clicked",table:{type:{summary:"() => void"}}},text:{control:"text",description:"The text to display on the button",table:{type:{summary:"string"}}},id:{control:"text",description:"Unique identifier for the button",table:{type:{summary:"string"}}}}},a={args:{id:"primary-button",text:"Primary Button",type:"PRIMARY"}},o={args:{...a.args,id:"secondary-button",text:"Secondary Button",type:"SECONDARY"}},s={args:{...a.args,id:"danger-button",text:"Danger Button",type:"DANGER"}},i={args:{...a.args,id:"disabled-button",text:"Disabled Button",disabled:!0}},Y={render:e=>t.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[t.jsx(r,{...e,text:"Primary",type:"PRIMARY",id:"btn1"}),t.jsx(r,{...e,text:"Secondary",type:"SECONDARY",id:"btn2"}),t.jsx(r,{...e,text:"Danger",type:"DANGER",id:"btn3"}),t.jsx(r,{...e,text:"Success",type:"SUCCESS",id:"btn4"}),t.jsx(r,{...e,text:"Warning",type:"WARNING",id:"btn5"}),t.jsx(r,{...e,text:"Info",type:"INFO",id:"btn6"})]})},l={...Y,parameters:{docs:{description:{story:"All available button variants in a row"}}}};var u,p,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'primary-button',
    text: 'Primary Button',
    type: 'PRIMARY'
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,y,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    id: 'secondary-button',
    text: 'Secondary Button',
    type: 'SECONDARY'
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var x,R,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    id: 'danger-button',
    text: 'Danger Button',
    type: 'DANGER'
  }
}`,...(S=(R=s.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var A,g,N;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    id: 'disabled-button',
    text: 'Disabled Button',
    disabled: true
  }
}`,...(N=(g=i.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};var f,E,D;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Template,
  parameters: {
    docs: {
      description: {
        story: 'All available button variants in a row'
      }
    }
  }
}`,...(D=(E=l.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const M=["Primary","Secondary","Danger","Disabled","AllVariants"];export{l as AllVariants,s as Danger,i as Disabled,a as Primary,o as Secondary,M as __namedExportsOrder,T as default};
