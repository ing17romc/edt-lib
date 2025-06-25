import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{T as e}from"./index-xOzdGBUs.js";const B={title:"Controls/TextButton",component:e,parameters:{layout:"centered",docs:{description:{component:"A customizable text button component that supports different styles and states."}}},argTypes:{type:{control:"select",options:["PRIMARY","SECONDARY","DANGER","SUCCESS","WARNING","INFO"],description:"The style variant of the button",table:{type:{summary:"ControlStyle"},defaultValue:{summary:"PRIMARY"}}},disabled:{control:"boolean",description:"Disables the button if true",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onClick:{action:"clicked",description:"Function to call when button is clicked",table:{type:{summary:"() => void"}}},text:{control:"text",description:"The text to display on the button",table:{type:{summary:"string"}}},id:{control:"text",description:"Unique identifier for the button",table:{type:{summary:"string"}}}}},r={args:{id:"primary-button",text:"Primary Button",type:"PRIMARY"}},n={args:{...r.args,id:"secondary-button",text:"Secondary Button",type:"SECONDARY"}},s={args:{...r.args,id:"danger-button",text:"Danger Button",type:"DANGER"}},o={args:{...r.args,id:"disabled-button",text:"Disabled Button",disabled:!0}},N={render:a=>t.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[t.jsx(e,{...a,text:"Primary",type:"PRIMARY",id:"btn1"}),t.jsx(e,{...a,text:"Secondary",type:"SECONDARY",id:"btn2"}),t.jsx(e,{...a,text:"Danger",type:"DANGER",id:"btn3"}),t.jsx(e,{...a,text:"Success",type:"SUCCESS",id:"btn4"}),t.jsx(e,{...a,text:"Warning",type:"WARNING",id:"btn5"}),t.jsx(e,{...a,text:"Info",type:"INFO",id:"btn6"})]})},i={...N,parameters:{docs:{description:{story:"All available button variants in a row"}}}};var d,c,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    id: 'primary-button',
    text: 'Primary Button',
    type: 'PRIMARY'
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,u,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    id: 'secondary-button',
    text: 'Secondary Button',
    type: 'SECONDARY'
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var y,b,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    id: 'danger-button',
    text: 'Danger Button',
    type: 'DANGER'
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var g,S,R;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    id: 'disabled-button',
    text: 'Disabled Button',
    disabled: true
  }
}`,...(R=(S=o.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var A,D,f;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Template,
  parameters: {
    docs: {
      description: {
        story: 'All available button variants in a row'
      }
    }
  }
}`,...(f=(D=i.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};const C=["Primary","Secondary","Danger","Disabled","AllVariants"];export{i as AllVariants,s as Danger,o as Disabled,r as Primary,n as Secondary,C as __namedExportsOrder,B as default};
