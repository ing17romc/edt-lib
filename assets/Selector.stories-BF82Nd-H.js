import{S as q}from"./index-DS655mG4.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";import"./enums-Ca2RdD1G.js";const y=[{value:"option1",label:"Opción 1"},{value:"option2",label:"Opción 2"},{value:"option3",label:"Opción 3"}],D={title:"Controls/Selector",component:q,tags:["autodocs"],argTypes:{id:{control:"text",description:"ID único para el select (requerido)"},titleTop:{control:"text",description:"Título superior del selector"},titleBottom:{control:"text",description:"Título inferior del selector"},value:{control:"text",description:"Valor actual seleccionado"},required:{control:"boolean",description:"Si el selector es requerido",defaultValue:!1},disabled:{control:"boolean",description:"Si el selector está deshabilitado",defaultValue:!1},readOnly:{control:"boolean",description:"Si el selector es de solo lectura",defaultValue:!1},options:{control:"object",description:"Opciones disponibles para el selector"},eventChange:{action:"changed",description:"Función que se ejecuta cuando cambia la selección"}},args:{id:"storybook-selector",titleTop:"Selecciona una opción",value:"option2",options:y}},e={},o={args:{titleBottom:"Este es un texto de ayuda",titleTop:"Selector con título inferior"}},t={args:{required:!0,titleTop:"Selector requerido",value:""}},r={args:{disabled:!0,titleTop:"Selector deshabilitado"}},a={args:{readOnly:!0,titleTop:"Selector de solo lectura"}};var s,l,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,n,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    titleBottom: 'Este es un texto de ayuda',
    titleTop: 'Selector con título inferior'
  }
}`,...(d=(n=o.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var u,p,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    required: true,
    titleTop: 'Selector requerido',
    value: ''
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var S,b,g;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    disabled: true,
    titleTop: 'Selector deshabilitado'
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var T,f,O;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    titleTop: 'Selector de solo lectura'
  }
}`,...(O=(f=a.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};const R=["Default","WithBottomTitle","Required","Disabled","ReadOnly"];export{e as Default,r as Disabled,a as ReadOnly,t as Required,o as WithBottomTitle,R as __namedExportsOrder,D as default};
