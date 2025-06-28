import{I as f}from"./index-BfdlDSkr.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DtnG7Kr2.js";import"./enums-Ca2RdD1G.js";const I={title:"Controls/ImageButton",component:f,parameters:{layout:"centered",docs:{description:{component:"A button component that displays an icon with optional text. It can be used for various actions in the application."}}},argTypes:{id:{control:"text",description:"Unique identifier for the button",table:{type:{summary:"string"},defaultValue:{summary:"required"}}},text:{control:"text",description:"Text to display as the button label",table:{type:{summary:"string"},defaultValue:{summary:"required"}}},icon:{control:"select",options:["add","remove","edit","delete","search","save","cancel","check","warning","info","help","close"],description:"Icon to display on the button",table:{type:{summary:"IconName"},defaultValue:{summary:"required"}}},size:{control:"select",options:["SM","MD","LG","XL"],description:"Size of the button and icon",table:{type:{summary:"IconSize"},defaultValue:{summary:"MD"}}},disabled:{control:"boolean",description:"Whether the button is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onClick:{action:"clicked",description:"Click event handler",table:{type:{summary:"function"},defaultValue:{summary:"undefined"}}}}},e={args:{id:"default-button",text:"Click me",icon:"add",size:"MD",disabled:!1}},t={args:{...e.args,id:"disabled-button",text:"Disabled Button",disabled:!0}},a={args:{...e.args,id:"large-button",text:"Large Button",size:"LG"}},o={args:{...e.args,id:"custom-icon-button",text:"Settings",icon:"settings"}};var s,n,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    id: 'default-button',
    text: 'Click me',
    icon: 'add' as IconName,
    size: 'MD',
    disabled: false
  }
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var i,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: 'disabled-button',
    text: 'Disabled Button',
    disabled: true
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,l,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: 'large-button',
    text: 'Large Button',
    size: 'LG'
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,b,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: 'custom-icon-button',
    text: 'Settings',
    icon: 'settings' as IconName
  }
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const S=["Default","Disabled","Large","WithCustomIcon"];export{e as Default,t as Disabled,a as Large,o as WithCustomIcon,S as __namedExportsOrder,I as default};
