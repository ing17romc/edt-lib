import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as L}from"./index-D4lIrffr.js";import{b as c}from"./enums-Ca2RdD1G.js";const h=L.forwardRef(({id:e,label:m,required:b=!1,disabled:a=!1,readOnly:r=!1,checked:s=!1,className:V="",eventChange:_},w)=>{const A=()=>a?c.DISABLED:r?c.READ_ONLY:b&&!s?c.REQUIRED:c.NONE;return i.jsxs("div",{className:`checkbutton ${A()} ${V}`.trim(),role:"group","aria-label":m,"data-testid":`checkbutton-${e}`,children:[i.jsx("input",{type:"checkbox",id:e,name:e,required:!a&&b&&!s,disabled:a,checked:s,readOnly:r,ref:w,onChange:$=>{r||_($)},"aria-checked":s,"aria-disabled":a,"aria-readonly":r}),i.jsx("label",{htmlFor:e,children:m})]})});h.displayName="CheckButton";h.__docgenInfo={description:`CheckButton component that provides a styled and accessible checkbox input.
Allows controlling the checked state and handles different UI states.

@component
@example
\`\`\`tsx
<CheckButton
  id="terms"
  label="I agree to the terms and conditions"
  required={true}
  checked={isChecked}
  eventChange={(e) => setIsChecked(e.target.checked)}
/>
\`\`\``,methods:[],displayName:"CheckButton",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},checked:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const Q={title:"Controls/CheckButton",component:h,tags:["autodocs"],argTypes:{eventChange:{action:"changed"}}},t={args:{id:"default-checkbox",label:"Default Checkbox"}},o={args:{id:"checked-checkbox",label:"Checked Checkbox",checked:!0}},n={args:{id:"disabled-checkbox",label:"Disabled Checkbox",disabled:!0}},l={args:{id:"readonly-checkbox",label:"Read Only Checkbox",readOnly:!0,checked:!0}},d={args:{id:"required-checkbox",label:"Required Checkbox",required:!0}},u={args:{id:"custom-class-checkbox",label:"Checkbox with Custom Class",className:"custom-checkbox"}};var p,k,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'default-checkbox',
    label: 'Default Checkbox'
  }
}`,...(f=(k=t.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var x,C,g;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: 'checked-checkbox',
    label: 'Checked Checkbox',
    checked: true
  }
}`,...(g=(C=o.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var q,y,R;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    id: 'disabled-checkbox',
    label: 'Disabled Checkbox',
    disabled: true
  }
}`,...(R=(y=n.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var D,v,N;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: 'readonly-checkbox',
    label: 'Read Only Checkbox',
    readOnly: true,
    checked: true
  }
}`,...(N=(v=l.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var S,E,B;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    id: 'required-checkbox',
    label: 'Required Checkbox',
    required: true
  }
}`,...(B=(E=d.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var O,I,j;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    id: 'custom-class-checkbox',
    label: 'Checkbox with Custom Class',
    className: 'custom-checkbox'
  }
}`,...(j=(I=u.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};const T=["Default","Checked","Disabled","ReadOnly","Required","WithCustomClass"];export{o as Checked,t as Default,n as Disabled,l as ReadOnly,d as Required,u as WithCustomClass,T as __namedExportsOrder,Q as default};
