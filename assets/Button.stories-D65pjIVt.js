import{B as E}from"./index-CEGhxr3c.js";import{C as O,a as j}from"./enums-Ca2RdD1G.js";import"./jsx-runtime-D_zvdyIk.js";const _={title:"Controls/Button",component:E,parameters:{layout:"centered",docs:{description:{component:"A customizable button component with various styles and sizes."}}},argTypes:{title:{control:"text",description:"The text displayed on the button"},buttonType:{control:{type:"select",options:Object.values(j)},description:"The style variant of the button"},size:{control:{type:"select",options:Object.values(O)},description:"The size of the button"},disabled:{control:"boolean",description:"Disables the button when true"},onClick:{action:"clicked",description:"Function called when the button is clicked"}}},e={args:{title:"Primary Button",buttonType:"primary",size:"md"}},t={args:{title:"Secondary Button",buttonType:"secondary",size:"md"}},r={args:{title:"Large Button",buttonType:"primary",size:"lg"}},o={args:{title:"Medium Button",buttonType:"primary",size:"md"}},s={args:{title:"Small Button",buttonType:"primary",size:"sm"}},a={args:{title:"XS Button",buttonType:"primary",size:"xs"}},n={args:{title:"Click Me",buttonType:"primary",size:"md",onClick:()=>console.log("Button clicked!")}},i={args:{title:"Disabled Button",buttonType:"primary",size:"md",disabled:!0}};var c,l,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Primary Button',
    buttonType: 'primary',
    size: 'md'
  }
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Secondary Button',
    buttonType: 'secondary',
    size: 'md'
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var y,b,g;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Large Button',
    buttonType: 'primary',
    size: 'lg'
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var S,z,T;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Medium Button',
    buttonType: 'primary',
    size: 'md'
  }
}`,...(T=(z=o.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var B,h,k;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: 'Small Button',
    buttonType: 'primary',
    size: 'sm'
  }
}`,...(k=(h=s.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var C,x,M;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'XS Button',
    buttonType: 'primary',
    size: 'xs'
  }
}`,...(M=(x=a.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var f,D,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Click Me',
    buttonType: 'primary',
    size: 'md',
    onClick: () => console.log('Button clicked!')
  }
}`,...(v=(D=n.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var L,P,w;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: 'Disabled Button',
    buttonType: 'primary',
    size: 'md',
    disabled: true
  }
}`,...(w=(P=i.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};const A=["Primary","Secondary","Large","Medium","Small","ExtraSmall","WithClickHandler","Disabled"];export{i as Disabled,a as ExtraSmall,r as Large,o as Medium,e as Primary,t as Secondary,s as Small,n as WithClickHandler,A as __namedExportsOrder,_ as default};
