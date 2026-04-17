import{n as e}from"./chunk-BneVvdWh.js";import{D as t,E as n,Ht as r,T as i,_t as a,bt as o,vt as s,w as c}from"./iframe-BrtTKpdh.js";var l,u,d=e((()=>{t(),o(),s.MEDIUM,n.PRIMARY,l={size:{control:`select`,options:Object.values(s),description:`Size of the spinner indicator.`,table:{type:{summary:Object.values(s).join(` | `)},defaultValue:{summary:s.MEDIUM}}},variant:{control:`select`,options:Object.values(n),description:`Color variant of the spinner.`,table:{type:{summary:Object.values(n).join(` | `)},defaultValue:{summary:n.PRIMARY}}},pulse:{control:`boolean`,description:`When true, renders a pulsing animation instead of a rotating spinner.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},"aria-label":{control:`text`,description:`Accessible label for screen readers.`,table:{type:{summary:`string`},defaultValue:{summary:`Loading...`}}}},u={docs:{description:{component:`An animated loading indicator that signals to users that content is being processed. Supports multiple color variants, sizes, and a pulse animation mode.`}}},Object.values(n),Object.values(s)})),f,p,m,h,g,_,v,y,b,x;e((()=>{r(),i(),t(),o(),d(),f=a(),{within:p,expect:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/Spinner`,component:c,tags:[`autodocs`],argTypes:l,parameters:{...u,layout:`centered`},args:{size:s.MEDIUM,variant:n.PRIMARY,pulse:!1,"aria-label":`Loading...`}},g={args:{},play:async({canvasElement:e})=>{let t=p(e).getByLabelText(`Loading...`);await m(t).toBeInTheDocument(),await m(t).toHaveClass(`spinner--medium`),await m(t).toHaveClass(`spinner--primary`)}},_={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:`20px`,alignItems:`center`},children:[(0,f.jsx)(c,{size:s.SMALL,"aria-label":`Small`}),(0,f.jsx)(c,{size:s.MEDIUM,"aria-label":`Medium`}),(0,f.jsx)(c,{size:s.LARGE,"aria-label":`Large`})]}),play:async({canvasElement:e})=>{let t=p(e);await m(t.getByLabelText(`Small`)).toHaveClass(`spinner--small`),await m(t.getByLabelText(`Medium`)).toHaveClass(`spinner--medium`),await m(t.getByLabelText(`Large`)).toHaveClass(`spinner--large`)}},v={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:`20px`,alignItems:`center`},children:[(0,f.jsx)(c,{variant:n.PRIMARY,"aria-label":`Primary`}),(0,f.jsx)(c,{variant:n.SECONDARY,"aria-label":`Secondary`}),(0,f.jsx)(c,{variant:n.TERTIARY,"aria-label":`Tertiary`}),(0,f.jsx)(c,{variant:n.DANGER,"aria-label":`Danger`}),(0,f.jsx)(c,{variant:n.SUCCESS,"aria-label":`Success`}),(0,f.jsx)(c,{variant:n.WARNING,"aria-label":`Warning`})]}),play:async({canvasElement:e})=>{let t=p(e);await m(t.getByLabelText(`Primary`)).toHaveClass(`spinner--primary`),await m(t.getByLabelText(`Secondary`)).toHaveClass(`spinner--secondary`),await m(t.getByLabelText(`Tertiary`)).toHaveClass(`spinner--tertiary`),await m(t.getByLabelText(`Danger`)).toHaveClass(`spinner--danger`),await m(t.getByLabelText(`Success`)).toHaveClass(`spinner--success`),await m(t.getByLabelText(`Warning`)).toHaveClass(`spinner--warning`)}},y={args:{pulse:!0},play:async({canvasElement:e})=>{await m(p(e).getByLabelText(`Loading...`)).toHaveClass(`spinner--pulse`)}},b={args:{"aria-label":`Please wait while data is loading...`}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Please wait while data is loading...'
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Sizes`,`Variants`,`Pulse`,`WithCustomLabel`]}))();export{g as Default,y as Pulse,_ as Sizes,v as Variants,b as WithCustomLabel,x as __namedExportsOrder,h as default};