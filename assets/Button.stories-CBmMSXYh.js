import{B as E}from"./index-DEGu--FC.js";import"./jsx-runtime-D_zvdyIk.js";const O={title:"Controls/Button",component:E,parameters:{layout:"centered",docs:{description:{component:"A customizable button component with various styles and sizes."}}},argTypes:{title:{control:"text",description:"The text displayed on the button"},type:{control:{type:"select",options:["PRIMARY","SECONDARY","DANGER","SUCCESS","WARNING","INFO"]},description:"The style variant of the button"},size:{control:{type:"select",options:["SM","MD","LG"]},description:"The size of the button"},disabled:{control:"boolean",description:"Disables the button when true"},onClick:{action:"clicked",description:"Function called when the button is clicked"}}},e={title:"Click me",type:"PRIMARY",size:"MD"},t={args:{...e}},r={args:{...e,type:"SECONDARY",title:"Secondary Button"}},s={args:{...e,type:"DANGER",title:"Danger Button"}},a={args:{...e,disabled:!0,title:"Disabled Button"}},o={args:{...e,size:"SM",title:"Small Button"}},n={args:{...e,size:"LG",title:"Large Button"}},c={args:{...e,title:"Click Me",onClick:()=>alert("Button clicked!")}};var i,l,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,p,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    type: 'SECONDARY',
    title: 'Secondary Button'
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,S,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    type: 'DANGER',
    title: 'Danger Button'
  }
}`,...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var A,D,b;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true,
    title: 'Disabled Button'
  }
}`,...(b=(D=a.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var B,C,h;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    size: 'SM',
    title: 'Small Button'
  }
}`,...(h=(C=o.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var f,k,R;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    size: 'LG',
    title: 'Large Button'
  }
}`,...(R=(k=n.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var z,M,N;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    title: 'Click Me',
    onClick: () => alert('Button clicked!')
  }
}`,...(N=(M=c.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const Y=["Primary","Secondary","Danger","Disabled","Small","Large","WithClickHandler"];export{s as Danger,a as Disabled,n as Large,t as Primary,r as Secondary,o as Small,c as WithClickHandler,Y as __namedExportsOrder,O as default};
