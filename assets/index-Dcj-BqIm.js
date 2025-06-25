import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-D4lIrffr.js";const o=h.forwardRef(({id:e,label:l,required:n=!1,disabled:a=!1,readOnly:t=!1,checked:s=!1,className:u="",eventChange:c},d)=>{const i=()=>a?"disabled":t?"read-only":n&&!s?"required":"";return r.jsxs("div",{className:`checkbutton ${i()} ${u}`.trim(),role:"group","aria-label":l,"data-testid":`checkbutton-${e}`,children:[r.jsx("input",{type:"checkbox",id:e,name:e,required:!a&&n&&!s,disabled:a,checked:s,readOnly:t,ref:d,onChange:f=>{t||c(f)},"aria-checked":s,"aria-disabled":a,"aria-readonly":t}),r.jsx("label",{htmlFor:e,children:l})]})});o.displayName="CheckButton";o.__docgenInfo={description:`CheckButton component that provides a styled and accessible checkbox input.
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
\`\`\``,methods:[],displayName:"CheckButton",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},checked:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};export{o as C};
