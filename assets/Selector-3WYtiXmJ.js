import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-DoW-sQG_.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{n as i,t as a}from"./classNames-Bj-wXTiJ.js";import{r as o,t as s}from"./types-Duki_pzD.js";var c,l,u,d,f,p,m,h,g,_,v,y=t((()=>{c=`_selectorWrapper_18fao_1`,l=`_selectorLabel_18fao_11`,u=`_selectorContainer_18fao_20`,d=`_selector_18fao_1`,f=`_selectorIcon_18fao_43`,p=`_helperText_18fao_116`,m=`_requiredIndicator_18fao_126`,h=`_selectorLoading_18fao_131`,g=`_selectorLoadingSpinner_18fao_139`,_=`_spin_18fao_1`,v={selectorWrapper:c,"selectorWrapper--fullWidth":`_selectorWrapper--fullWidth_18fao_7`,selectorLabel:l,selectorContainer:u,selector:d,"selector--small":`_selector--small_18fao_38`,selectorIcon:f,"selector--medium":`_selector--medium_18fao_48`,"selector--large":`_selector--large_18fao_58`,"selector--primary":`_selector--primary_18fao_68`,"selector--secondary":`_selector--secondary_18fao_75`,"selector--error":`_selector--error_18fao_85`,"selector--fullWidth":`_selector--fullWidth_18fao_98`,helperText:p,"helperText--error":`_helperText--error_18fao_122`,requiredIndicator:m,selectorLoading:h,selectorLoadingSpinner:g,spin:_}})),b,x=t((()=>{b=function(e){return e.PRIMARY=`primary`,e.SECONDARY=`secondary`,e.TERTIARY=`tertiary`,e.DANGER=`danger`,e.SUCCESS=`success`,e.WARNING=`warning`,e}({})})),S,C,w,T=t((()=>{S=e(n(),1),i(),y(),x(),o(),C=r(),w=(0,S.forwardRef)(({options:e=[],label:t,helperText:n,error:r=!1,errorMessage:i,variant:o=b.PRIMARY,size:c=s.MEDIUM,fullWidth:l=!1,loading:u=!1,disabled:d=!1,className:f,placeholder:p,onChange:m,value:h,defaultValue:g,..._},y)=>{let[x,w]=S.useState(g||``),T=h!==void 0,E=T?h:x,D=a(v.selector,v[`selector--${o}`],v[`selector--${c}`],{[v[`selector--error`]]:r,[v[`selector--fullWidth`]]:l,[v[`selector--disabled`]]:d||u},f),O=a(v.selectorWrapper,{[v[`selectorWrapper--fullWidth`]]:l}),k=!!t,A=(n||r&&i)&&!u;return(0,C.jsxs)(`div`,{className:O,children:[k&&(0,C.jsxs)(`label`,{className:v.selectorLabel,children:[t,_.required&&(0,C.jsx)(`span`,{className:v.requiredIndicator,children:`*`})]}),(0,C.jsxs)(`div`,{className:v.selectorContainer,children:[(0,C.jsxs)(`select`,{ref:y,className:D,disabled:d||u,"aria-invalid":r,"aria-describedby":r&&i?`error-message`:void 0,value:E,onChange:e=>{T||w(e.target.value),m?.(e)},..._,children:[p&&(0,C.jsx)(`option`,{value:``,disabled:!0,children:p}),e.map(e=>(0,C.jsx)(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))]}),u&&(0,C.jsx)(`div`,{className:v.selectorLoading,children:(0,C.jsx)(`div`,{className:v.selectorLoadingSpinner})}),!u&&(0,C.jsx)(`div`,{className:v.selectorIcon,children:(0,C.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,C.jsx)(`polyline`,{points:`6 9 12 15 18 9`})})})]}),A&&(0,C.jsx)(`div`,{className:a(v.helperText,{[v[`helperText--error`]]:r}),id:r?`error-message`:void 0,children:r&&i?i:n})]})}),w.displayName=`Selector`,w.__docgenInfo={description:`Selector component that represents a dropdown menu with multiple options.\r
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