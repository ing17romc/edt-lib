import{a as e,n as t}from"./chunk-BneVvdWh.js";import{O as n,a as r,i,o as a}from"./iframe-BoT0I_bJ.js";import{r as o,t as s}from"./types-SSqGpC_M.js";var c,l,u,d,f,p,m,h,g,_,v,y=t((()=>{c=`_selectorWrapper_11jzm_1`,l=`_selectorLabel_11jzm_11`,u=`_selectorContainer_11jzm_20`,d=`_selector_11jzm_1`,f=`_selectorIcon_11jzm_43`,p=`_helperText_11jzm_116`,m=`_requiredIndicator_11jzm_126`,h=`_selectorLoading_11jzm_131`,g=`_selectorLoadingSpinner_11jzm_139`,_=`_spin_11jzm_1`,v={selectorWrapper:c,"selectorWrapper--fullWidth":`_selectorWrapper--fullWidth_11jzm_7`,selectorLabel:l,selectorContainer:u,selector:d,"selector--small":`_selector--small_11jzm_38`,selectorIcon:f,"selector--medium":`_selector--medium_11jzm_48`,"selector--large":`_selector--large_11jzm_58`,"selector--primary":`_selector--primary_11jzm_68`,"selector--secondary":`_selector--secondary_11jzm_75`,"selector--error":`_selector--error_11jzm_85`,"selector--fullWidth":`_selector--fullWidth_11jzm_98`,helperText:p,"helperText--error":`_helperText--error_11jzm_122`,requiredIndicator:m,selectorLoading:h,selectorLoadingSpinner:g,spin:_}})),b,x=t((()=>{b=function(e){return e.PRIMARY=`primary`,e.SECONDARY=`secondary`,e.TERTIARY=`tertiary`,e.DANGER=`danger`,e.SUCCESS=`success`,e.WARNING=`warning`,e}({})})),S,C,w,T=t((()=>{S=e(n(),1),a(),y(),x(),o(),C=i(),w=(0,S.forwardRef)(({options:e=[],label:t,helperText:n,error:i=!1,errorMessage:a,variant:o=b.PRIMARY,size:c=s.MEDIUM,fullWidth:l=!1,loading:u=!1,disabled:d=!1,className:f,placeholder:p,onChange:m,value:h,defaultValue:g,..._},y)=>{let[x,w]=S.useState(g||``),T=h!==void 0,E=T?h:x,D=r(v.selector,v[`selector--${o}`],v[`selector--${c}`],{[v[`selector--error`]]:i,[v[`selector--fullWidth`]]:l,[v[`selector--disabled`]]:d||u},f),O=r(v.selectorWrapper,{[v[`selectorWrapper--fullWidth`]]:l}),k=!!t,A=(n||i&&a)&&!u;return(0,C.jsxs)(`div`,{className:O,children:[k&&(0,C.jsxs)(`label`,{className:v.selectorLabel,children:[t,_.required&&(0,C.jsx)(`span`,{className:v.requiredIndicator,children:`*`})]}),(0,C.jsxs)(`div`,{className:v.selectorContainer,children:[(0,C.jsxs)(`select`,{ref:y,className:D,disabled:d||u,"aria-invalid":i,"aria-describedby":i&&a?`error-message`:void 0,value:E,onChange:e=>{T||w(e.target.value),m?.(e)},..._,children:[p&&(0,C.jsx)(`option`,{value:``,disabled:!0,children:p}),e.map(e=>(0,C.jsx)(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))]}),u&&(0,C.jsx)(`div`,{className:v.selectorLoading,children:(0,C.jsx)(`div`,{className:v.selectorLoadingSpinner})}),!u&&(0,C.jsx)(`div`,{className:v.selectorIcon,children:(0,C.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,C.jsx)(`polyline`,{points:`6 9 12 15 18 9`})})})]}),A&&(0,C.jsx)(`div`,{className:r(v.helperText,{[v[`helperText--error`]]:i}),id:i?`error-message`:void 0,children:i&&a?a:n})]})}),w.displayName=`Selector`,w.__docgenInfo={description:`Selector component that represents a dropdown menu with multiple options.\r
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
@default false`},disabled:{defaultValue:{value:`false`,computed:!1},required:!1}},composes:[`Omit`]}}));export{T as n,b as r,w as t};