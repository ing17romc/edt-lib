import{r as e,t}from"./iframe-BwpCWMiM.js";import{t as n}from"./jsx-runtime-BsbbwSUz.js";import{t as r}from"./classNames-DYb3CZs3.js";import{t as i}from"./types-BTwUNDvM.js";var a=e(t(),1),o=function(e){return e.PRIMARY=`primary`,e.SECONDARY=`secondary`,e.TERTIARY=`tertiary`,e.DANGER=`danger`,e.SUCCESS=`success`,e.WARNING=`warning`,e.LIGHT=`light`,e.DARK=`dark`,e}({}),s=`_spinner_4z2r9_1`,c=`_spinner__inner_4z2r9_42`,l=`_spin_4z2r9_1`,u=`_pulse_4z2r9_1`,d={spinner:s,"spinner--small":`_spinner--small_4z2r9_6`,"spinner--medium":`_spinner--medium_4z2r9_10`,"spinner--large":`_spinner--large_4z2r9_14`,"spinner--primary":`_spinner--primary_4z2r9_18`,"spinner--secondary":`_spinner--secondary_4z2r9_21`,"spinner--tertiary":`_spinner--tertiary_4z2r9_24`,"spinner--danger":`_spinner--danger_4z2r9_27`,"spinner--success":`_spinner--success_4z2r9_30`,"spinner--warning":`_spinner--warning_4z2r9_33`,"spinner--light":`_spinner--light_4z2r9_36`,"spinner--dark":`_spinner--dark_4z2r9_39`,spinner__inner:c,spin:l,"spinner--pulse":`_spinner--pulse_4z2r9_53`,pulse:u},f=n(),p=(0,a.forwardRef)(({size:e=i.MEDIUM,variant:t=o.PRIMARY,pulse:n=!1,className:a,"aria-label":s=`Loading...`,...c},l)=>(0,f.jsx)(`div`,{ref:l,className:r(d.spinner,d[`spinner--${e}`],d[`spinner--${t}`],{[d[`spinner--pulse`]]:n},a),role:`status`,"aria-live":`polite`,"aria-label":s,...c,children:(0,f.jsx)(`div`,{className:d.spinner__inner,"aria-hidden":`true`})}));p.displayName=`Spinner`,p.__docgenInfo={description:`Spinner component that displays a loading indicator.\r
Provides different styles and sizes to adapt to different contexts.\r
\r
@component\r
@example\r
// Basic usage\r
<Spinner />\r
\r
// With custom size\r
<Spinner size="large" />\r
\r
// With color variant\r
<Spinner variant="danger" />\r
\r
// Modo pulso\r
<Spinner pulse />`,methods:[],displayName:`Spinner`,props:{size:{required:!1,tsType:{name:`ComponentSize`},description:`Spinner size\r
@default 'medium'`,defaultValue:{value:`ComponentSize.MEDIUM`,computed:!0}},variant:{required:!1,tsType:{name:`SpinnerVariant`},description:`Spinner color variant\r
@default 'primary'`,defaultValue:{value:`SpinnerVariant.PRIMARY`,computed:!0}},pulse:{required:!1,tsType:{name:`boolean`},description:`If true, the spinner will be a "pulse" type instead of spinning\r
@default false`,defaultValue:{value:`false`,computed:!1}},"aria-label":{required:!1,tsType:{name:`string`},description:`Accessible text for screen readers\r
@default 'Loading...'`,defaultValue:{value:`'Loading...'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Custom CSS class`}},composes:[`HTMLAttributes`]},i.MEDIUM,o.PRIMARY;var m={size:{control:`select`,options:Object.values(i),description:`Size of the spinner indicator.`,table:{type:{summary:Object.values(i).join(` | `)},defaultValue:{summary:i.MEDIUM}}},variant:{control:`select`,options:Object.values(o),description:`Color variant of the spinner.`,table:{type:{summary:Object.values(o).join(` | `)},defaultValue:{summary:o.PRIMARY}}},pulse:{control:`boolean`,description:`When true, renders a pulsing animation instead of a rotating spinner.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},"aria-label":{control:`text`,description:`Accessible label for screen readers.`,table:{type:{summary:`string`},defaultValue:{summary:`Loading...`}}}},h={docs:{description:{component:`An animated loading indicator that signals to users that content is being processed. Supports multiple color variants, sizes, and a pulse animation mode.`}}};Object.values(o),Object.values(i);var g={title:`Components/Spinner`,component:p,tags:[`autodocs`],argTypes:m,parameters:h,args:{size:i.MEDIUM,variant:o.PRIMARY,pulse:!1,"aria-label":`Loading...`}},_={args:{}},v={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:`20px`,alignItems:`center`},children:[(0,f.jsx)(p,{size:i.SMALL,"aria-label":`Small`}),(0,f.jsx)(p,{size:i.MEDIUM,"aria-label":`Medium`}),(0,f.jsx)(p,{size:i.LARGE,"aria-label":`Large`})]})},y={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:`20px`,alignItems:`center`},children:[(0,f.jsx)(p,{variant:o.PRIMARY,"aria-label":`Primary`}),(0,f.jsx)(p,{variant:o.SECONDARY,"aria-label":`Secondary`}),(0,f.jsx)(p,{variant:o.TERTIARY,"aria-label":`Tertiary`}),(0,f.jsx)(p,{variant:o.DANGER,"aria-label":`Danger`}),(0,f.jsx)(p,{variant:o.SUCCESS,"aria-label":`Success`}),(0,f.jsx)(p,{variant:o.WARNING,"aria-label":`Warning`})]})},b={args:{pulse:!0}},x={args:{"aria-label":`Please wait while data is loading...`}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {}
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  }}>\r
      <Spinner size={ComponentSize.SMALL} aria-label="Small" />\r
      <Spinner size={ComponentSize.MEDIUM} aria-label="Medium" />\r
      <Spinner size={ComponentSize.LARGE} aria-label="Large" />\r
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  }}>\r
      <Spinner variant={SpinnerVariant.PRIMARY} aria-label="Primary" />\r
      <Spinner variant={SpinnerVariant.SECONDARY} aria-label="Secondary" />\r
      <Spinner variant={SpinnerVariant.TERTIARY} aria-label="Tertiary" />\r
      <Spinner variant={SpinnerVariant.DANGER} aria-label="Danger" />\r
      <Spinner variant={SpinnerVariant.SUCCESS} aria-label="Success" />\r
      <Spinner variant={SpinnerVariant.WARNING} aria-label="Warning" />\r
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    pulse: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Please wait while data is loading...'
  }
}`,...x.parameters?.docs?.source}}};var S=[`Default`,`Sizes`,`Variants`,`Pulse`,`WithCustomLabel`];export{_ as Default,b as Pulse,v as Sizes,y as Variants,x as WithCustomLabel,S as __namedExportsOrder,g as default};