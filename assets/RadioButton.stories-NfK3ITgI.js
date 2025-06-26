import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as j}from"./index-D4lIrffr.js";import{T as i}from"./index-Db1t3V4U.js";import"./constant-cm2ucuoM.js";const T={title:"Controls/RadioButton",component:i,parameters:{layout:"centered",docs:{description:{component:"A customizable radio button component that supports different states and configurations."}}},tags:["autodocs"],argTypes:{id:{control:"text"},name:{control:"text"},label:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},readOnly:{control:"boolean"},value:{control:"text"},eventChange:{action:"changed"}}},a={args:{id:"option1",name:"options",label:"Option 1",value:""}},S=()=>{const[d,l]=j.useState("option1");return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[o.jsx(i,{id:"option1",name:"options",label:"Option 1",value:d,eventChange:e=>l(e.target.id)}),o.jsx(i,{id:"option2",name:"options",label:"Option 2",value:d,eventChange:e=>l(e.target.id)}),o.jsx(i,{id:"option3",name:"options",label:"Option 3 (Disabled)",value:d,disabled:!0,eventChange:e=>l(e.target.id)})]})},r={render:()=>o.jsx(S,{})},n={args:{id:"disabled-option",name:"disabled-group",label:"Disabled Option",value:"",disabled:!0}},t={args:{id:"required-option",name:"required-group",label:"Required Option",value:"",required:!0}},s={args:{id:"readonly-option",name:"readonly-group",label:"Read-Only Option",value:"",readOnly:!0}};var p,u,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'option1',
    name: 'options',
    label: 'Option 1',
    value: ''
  }
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,g,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <RadioButtonGroup />
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var O,v,x;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    id: 'disabled-option',
    name: 'disabled-group',
    label: 'Disabled Option',
    value: '',
    disabled: true
  }
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,R,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: 'required-option',
    name: 'required-group',
    label: 'Required Option',
    value: '',
    required: true
  }
}`,...(f=(R=t.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var q,D,h;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    id: 'readonly-option',
    name: 'readonly-group',
    label: 'Read-Only Option',
    value: '',
    readOnly: true
  }
}`,...(h=(D=s.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};const V=["Default","Group","Disabled","Required","ReadOnly"];export{a as Default,n as Disabled,r as Group,s as ReadOnly,t as Required,V as __namedExportsOrder,T as default};
