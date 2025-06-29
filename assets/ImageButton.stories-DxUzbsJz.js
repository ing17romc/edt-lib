import{I as S}from"./index-DF8RCVmG.js";import{A as r}from"./index-Uj7DPBUV.js";import{C as s}from"./enums-Ca2RdD1G.js";import"./jsx-runtime-D_zvdyIk.js";const h={title:"Controls/ImageButton",component:S,parameters:{layout:"centered",docs:{description:{component:"A button component that displays an icon with optional text. It can be used for various actions in the application."}}},argTypes:{id:{control:"text",description:"Unique identifier for the button",table:{type:{summary:"string"},defaultValue:{summary:"required"}}},text:{control:"text",description:"Text to display as the button label",table:{type:{summary:"string"},defaultValue:{summary:"required"}}},icon:{control:"select",options:Object.values(r),description:"Icon to display on the button",table:{type:{summary:"IconName"},defaultValue:{summary:"required"}}},size:{control:"select",options:Object.values(s),description:"Size of the button and icon",table:{type:{summary:"IconSize"},defaultValue:{summary:s.MD}}},disabled:{control:"boolean",description:"Whether the button is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onClick:{action:"clicked",description:"Click event handler",table:{type:{summary:"function"},defaultValue:{summary:"undefined"}}}}},e={args:{id:"default-button",text:"Click me",icon:r.ADD,size:s.MD,disabled:!1}},t={args:{...e.args,id:"disabled-button",text:"Disabled Button",disabled:!0}},a={args:{...e.args,id:"large-button",text:"Large Button",size:s.LG}},o={args:{...e.args,id:"custom-icon-button",text:"Settings",icon:r.SETTINGS}};var n,i,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    id: 'default-button',
    text: 'Click me',
    icon: ALL_ICONS.ADD,
    size: ControlSize.MD,
    disabled: false
  }
}`,...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var c,l,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: 'disabled-button',
    text: 'Disabled Button',
    disabled: true
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,p,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: 'large-button',
    text: 'Large Button',
    size: ControlSize.LG
  }
}`,...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var g,f,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: 'custom-icon-button',
    text: 'Settings',
    icon: ALL_ICONS.SETTINGS
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const L=["Default","Disabled","Large","WithCustomIcon"];export{e as Default,t as Disabled,a as Large,o as WithCustomIcon,L as __namedExportsOrder,h as default};
