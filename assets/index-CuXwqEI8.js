import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-D4lIrffr.js";import{b as r}from"./enums-Ca2RdD1G.js";const u=p.forwardRef(({id:e,label:n,required:o=!1,disabled:t=!1,readOnly:a=!1,checked:s=!1,className:c="",eventChange:d},f)=>{const i=()=>t?r.DISABLED:a?r.READ_ONLY:o&&!s?r.REQUIRED:r.NONE;return l.jsxs("div",{className:`checkbutton ${i()} ${c}`.trim(),role:"group","aria-label":n,"data-testid":`checkbutton-${e}`,children:[l.jsx("input",{type:"checkbox",id:e,name:e,required:!t&&o&&!s,disabled:t,checked:s,readOnly:a,ref:f,onChange:m=>{a||d(m)},"aria-checked":s,"aria-disabled":t,"aria-readonly":a}),l.jsx("label",{htmlFor:e,children:n})]})});u.displayName="CheckButton";u.__docgenInfo={description:`CheckButton component that provides a styled and accessible checkbox input.
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
\`\`\``,methods:[],displayName:"CheckButton",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},checked:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};export{u as C};
