import{r as e,t}from"./iframe-BwpCWMiM.js";import{t as n}from"./jsx-runtime-BsbbwSUz.js";import{t as r}from"./classNames-DYb3CZs3.js";import{t as i}from"./types-BTwUNDvM.js";var a=`_selectorWrapper_18fao_1`,o=`_selectorLabel_18fao_11`,s=`_selectorContainer_18fao_20`,c=`_selector_18fao_1`,l=`_selectorIcon_18fao_43`,u=`_helperText_18fao_116`,d=`_requiredIndicator_18fao_126`,f=`_selectorLoading_18fao_131`,p=`_selectorLoadingSpinner_18fao_139`,m=`_spin_18fao_1`,h={selectorWrapper:a,"selectorWrapper--fullWidth":`_selectorWrapper--fullWidth_18fao_7`,selectorLabel:o,selectorContainer:s,selector:c,"selector--small":`_selector--small_18fao_38`,selectorIcon:l,"selector--medium":`_selector--medium_18fao_48`,"selector--large":`_selector--large_18fao_58`,"selector--primary":`_selector--primary_18fao_68`,"selector--secondary":`_selector--secondary_18fao_75`,"selector--error":`_selector--error_18fao_85`,"selector--fullWidth":`_selector--fullWidth_18fao_98`,helperText:u,"helperText--error":`_helperText--error_18fao_122`,requiredIndicator:d,selectorLoading:f,selectorLoadingSpinner:p,spin:m},g=function(e){return e.PRIMARY=`primary`,e.SECONDARY=`secondary`,e.TERTIARY=`tertiary`,e.DANGER=`danger`,e.SUCCESS=`success`,e.WARNING=`warning`,e}({}),_=e(t(),1),v=n(),y=(0,_.forwardRef)(({options:e=[],label:t,helperText:n,error:a=!1,errorMessage:o,variant:s=g.PRIMARY,size:c=i.MEDIUM,fullWidth:l=!1,loading:u=!1,disabled:d=!1,className:f,placeholder:p,onChange:m,value:y,defaultValue:b,...x},S)=>{let[C,w]=_.useState(b||``),T=y!==void 0,E=T?y:C,D=r(h.selector,h[`selector--${s}`],h[`selector--${c}`],{[h[`selector--error`]]:a,[h[`selector--fullWidth`]]:l,[h[`selector--disabled`]]:d||u},f),O=r(h.selectorWrapper,{[h[`selectorWrapper--fullWidth`]]:l}),k=!!t,A=(n||a&&o)&&!u;return(0,v.jsxs)(`div`,{className:O,children:[k&&(0,v.jsxs)(`label`,{className:h.selectorLabel,children:[t,x.required&&(0,v.jsx)(`span`,{className:h.requiredIndicator,children:`*`})]}),(0,v.jsxs)(`div`,{className:h.selectorContainer,children:[(0,v.jsxs)(`select`,{ref:S,className:D,disabled:d||u,"aria-invalid":a,"aria-describedby":a&&o?`error-message`:void 0,value:E,onChange:e=>{T||w(e.target.value),m?.(e)},...x,children:[p&&(0,v.jsx)(`option`,{value:``,disabled:!0,children:p}),e.map(e=>(0,v.jsx)(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))]}),u&&(0,v.jsx)(`div`,{className:h.selectorLoading,children:(0,v.jsx)(`div`,{className:h.selectorLoadingSpinner})}),!u&&(0,v.jsx)(`div`,{className:h.selectorIcon,children:(0,v.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,v.jsx)(`polyline`,{points:`6 9 12 15 18 9`})})})]}),A&&(0,v.jsx)(`div`,{className:r(h.helperText,{[h[`helperText--error`]]:a}),id:a?`error-message`:void 0,children:a&&o?o:n})]})});y.displayName=`Selector`,y.__docgenInfo={description:`Selector component that represents a dropdown menu with multiple options.\r
\r
@component\r
@example\r
// Basic usage\r
const options = [\r
  { value: '1', label: 'Option 1' },\r
  { value: '2', label: 'Option 2' },\r
];\r
\r
<Selector \r
  options={options}\r
  label="Select an option"\r
  onChange={(e) => console.log(e.target.value)}\r
/>\r
\r
@example\r
// Selector with error state\r
<Selector\r
  options={options}\r
  label="Select an option"\r
  error={true}\r
  errorMessage="Select a valid option"\r
/>`,methods:[],displayName:`Selector`,props:{options:{required:!1,tsType:{name:`Array`,elements:[{name:`SelectorOption`}],raw:`SelectorOption[]`},description:`Selector options`,defaultValue:{value:`[]`,computed:!1}},value:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Currently selected value`},defaultValue:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Default value of the selector`},label:{required:!1,tsType:{name:`string`},description:`Selector label`},helperText:{required:!1,tsType:{name:`string`},description:`Helper text or description`},error:{required:!1,tsType:{name:`boolean`},description:`If true, shows an error indicator\r
@default false`,defaultValue:{value:`false`,computed:!1}},errorMessage:{required:!1,tsType:{name:`string`},description:`Error message to display when there is an error`},variant:{required:!1,tsType:{name:`SelectorVariant`},description:`Visual variant of the selector\r
@default 'primary'`,defaultValue:{value:`SelectorVariant.PRIMARY`,computed:!0}},size:{required:!1,tsType:{name:`ComponentSize`},description:`Selector size\r
@default 'medium'`,defaultValue:{value:`ComponentSize.MEDIUM`,computed:!0}},fullWidth:{required:!1,tsType:{name:`boolean`},description:`If true, the selector takes up the full available width\r
@default false`,defaultValue:{value:`false`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:`If true, the selector is in a loading state\r
@default false`,defaultValue:{value:`false`,computed:!1}},placeholder:{required:!1,tsType:{name:`string`},description:`Text to display when there are no options`},readOnly:{required:!1,tsType:{name:`boolean`},description:`If true, the selector is read-only\r
@default false`},disabled:{defaultValue:{value:`false`,computed:!1},required:!1}},composes:[`Omit`]};export{g as n,y as t};