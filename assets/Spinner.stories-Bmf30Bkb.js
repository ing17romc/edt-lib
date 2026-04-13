import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-DoW-sQG_.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{n as i,t as a}from"./classNames-Bj-wXTiJ.js";import{r as o,t as s}from"./types-Duki_pzD.js";var c,l=t((()=>{c=function(e){return e.PRIMARY=`primary`,e.SECONDARY=`secondary`,e.TERTIARY=`tertiary`,e.DANGER=`danger`,e.SUCCESS=`success`,e.WARNING=`warning`,e.LIGHT=`light`,e.DARK=`dark`,e}({})})),u,d,f,p,m,h=t((()=>{u=`_spinner_4z2r9_1`,d=`_spinner__inner_4z2r9_42`,f=`_spin_4z2r9_1`,p=`_pulse_4z2r9_1`,m={spinner:u,"spinner--small":`_spinner--small_4z2r9_6`,"spinner--medium":`_spinner--medium_4z2r9_10`,"spinner--large":`_spinner--large_4z2r9_14`,"spinner--primary":`_spinner--primary_4z2r9_18`,"spinner--secondary":`_spinner--secondary_4z2r9_21`,"spinner--tertiary":`_spinner--tertiary_4z2r9_24`,"spinner--danger":`_spinner--danger_4z2r9_27`,"spinner--success":`_spinner--success_4z2r9_30`,"spinner--warning":`_spinner--warning_4z2r9_33`,"spinner--light":`_spinner--light_4z2r9_36`,"spinner--dark":`_spinner--dark_4z2r9_39`,spinner__inner:d,spin:f,"spinner--pulse":`_spinner--pulse_4z2r9_53`,pulse:p}})),g,_,v,y=t((()=>{g=e(n(),1),i(),l(),o(),h(),_=r(),v=(0,g.forwardRef)(({size:e=s.MEDIUM,variant:t=c.PRIMARY,pulse:n=!1,className:r,"aria-label":i=`Loading...`,...o},l)=>(0,_.jsx)(`div`,{ref:l,className:a(m.spinner,m[`spinner--${e}`],m[`spinner--${t}`],{[m[`spinner--pulse`]]:n},r),role:`status`,"aria-live":`polite`,"aria-label":i,...o,children:(0,_.jsx)(`div`,{className:m.spinner__inner,"aria-hidden":`true`})})),v.displayName=`Spinner`,v.__docgenInfo={description:`Spinner component that displays a loading indicator.\r
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
@default 'Loading...'`,defaultValue:{value:`'Loading...'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Custom CSS class`}},composes:[`HTMLAttributes`]}})),b,x,S=t((()=>{l(),o(),s.MEDIUM,c.PRIMARY,b={size:{control:`select`,options:Object.values(s),description:`Size of the spinner indicator.`,table:{type:{summary:Object.values(s).join(` | `)},defaultValue:{summary:s.MEDIUM}}},variant:{control:`select`,options:Object.values(c),description:`Color variant of the spinner.`,table:{type:{summary:Object.values(c).join(` | `)},defaultValue:{summary:c.PRIMARY}}},pulse:{control:`boolean`,description:`When true, renders a pulsing animation instead of a rotating spinner.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},"aria-label":{control:`text`,description:`Accessible label for screen readers.`,table:{type:{summary:`string`},defaultValue:{summary:`Loading...`}}}},x={docs:{description:{component:`An animated loading indicator that signals to users that content is being processed. Supports multiple color variants, sizes, and a pulse animation mode.`}}},Object.values(c),Object.values(s)})),C,w,T,E,D,O,k,A,j,M;t((()=>{n(),y(),l(),o(),S(),C=r(),{within:w,expect:T}=__STORYBOOK_MODULE_TEST__,E={title:`Components/Spinner`,component:v,tags:[`autodocs`],argTypes:b,parameters:x,args:{size:s.MEDIUM,variant:c.PRIMARY,pulse:!1,"aria-label":`Loading...`}},D={args:{},play:async({canvasElement:e})=>{let t=w(e).getByLabelText(`Loading...`);await T(t).toBeInTheDocument(),await T(t).toHaveClass(`spinner--medium`),await T(t).toHaveClass(`spinner--primary`)}},O={render:()=>(0,C.jsxs)(`div`,{style:{display:`flex`,gap:`20px`,alignItems:`center`},children:[(0,C.jsx)(v,{size:s.SMALL,"aria-label":`Small`}),(0,C.jsx)(v,{size:s.MEDIUM,"aria-label":`Medium`}),(0,C.jsx)(v,{size:s.LARGE,"aria-label":`Large`})]}),play:async({canvasElement:e})=>{let t=w(e);await T(t.getByLabelText(`Small`)).toHaveClass(`spinner--small`),await T(t.getByLabelText(`Medium`)).toHaveClass(`spinner--medium`),await T(t.getByLabelText(`Large`)).toHaveClass(`spinner--large`)}},k={render:()=>(0,C.jsxs)(`div`,{style:{display:`flex`,gap:`20px`,alignItems:`center`},children:[(0,C.jsx)(v,{variant:c.PRIMARY,"aria-label":`Primary`}),(0,C.jsx)(v,{variant:c.SECONDARY,"aria-label":`Secondary`}),(0,C.jsx)(v,{variant:c.TERTIARY,"aria-label":`Tertiary`}),(0,C.jsx)(v,{variant:c.DANGER,"aria-label":`Danger`}),(0,C.jsx)(v,{variant:c.SUCCESS,"aria-label":`Success`}),(0,C.jsx)(v,{variant:c.WARNING,"aria-label":`Warning`})]}),play:async({canvasElement:e})=>{let t=w(e);await T(t.getByLabelText(`Primary`)).toHaveClass(`spinner--primary`),await T(t.getByLabelText(`Secondary`)).toHaveClass(`spinner--secondary`),await T(t.getByLabelText(`Tertiary`)).toHaveClass(`spinner--tertiary`),await T(t.getByLabelText(`Danger`)).toHaveClass(`spinner--danger`),await T(t.getByLabelText(`Success`)).toHaveClass(`spinner--success`),await T(t.getByLabelText(`Warning`)).toHaveClass(`spinner--warning`)}},A={args:{pulse:!0},play:async({canvasElement:e})=>{await T(w(e).getByLabelText(`Loading...`)).toHaveClass(`spinner--pulse`)}},j={args:{"aria-label":`Please wait while data is loading...`}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {},
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const spinner = canvas.getByLabelText('Loading...');
    await expect(spinner).toBeInTheDocument();
    await expect(spinner).toHaveClass('spinner--medium');
    await expect(spinner).toHaveClass('spinner--primary');
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  }}>\r
      <Spinner size={ComponentSize.SMALL} aria-label="Small" />\r
      <Spinner size={ComponentSize.MEDIUM} aria-label="Medium" />\r
      <Spinner size={ComponentSize.LARGE} aria-label="Large" />\r
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByLabelText('Small')).toHaveClass('spinner--small');
    await expect(canvas.getByLabelText('Medium')).toHaveClass('spinner--medium');
    await expect(canvas.getByLabelText('Large')).toHaveClass('spinner--large');
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByLabelText('Primary')).toHaveClass('spinner--primary');
    await expect(canvas.getByLabelText('Secondary')).toHaveClass('spinner--secondary');
    await expect(canvas.getByLabelText('Tertiary')).toHaveClass('spinner--tertiary');
    await expect(canvas.getByLabelText('Danger')).toHaveClass('spinner--danger');
    await expect(canvas.getByLabelText('Success')).toHaveClass('spinner--success');
    await expect(canvas.getByLabelText('Warning')).toHaveClass('spinner--warning');
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    pulse: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const spinner = canvas.getByLabelText('Loading...');
    await expect(spinner).toHaveClass('spinner--pulse');
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Please wait while data is loading...'
  }
}`,...j.parameters?.docs?.source}}},M=[`Default`,`Sizes`,`Variants`,`Pulse`,`WithCustomLabel`]}))();export{D as Default,A as Pulse,O as Sizes,k as Variants,j as WithCustomLabel,M as __namedExportsOrder,E as default};