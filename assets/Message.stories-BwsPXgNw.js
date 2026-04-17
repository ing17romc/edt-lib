import{a as e,n as t}from"./chunk-BneVvdWh.js";import{H as n,Ht as r,V as i,_t as a,bt as o,yt as s}from"./iframe-BrtTKpdh.js";var c,l,u,d=t((()=>{o(),c={variant:s.PRIMARY,closable:!1},l={variant:{control:{type:`select`},options:[s.PRIMARY,s.SUCCESS,s.DANGER,s.WARNING],description:`Color variant that conveys the intent of the message.`,table:{type:{summary:`primary | success | danger | warning`},defaultValue:{summary:s.PRIMARY}}},closable:{control:{type:`boolean`},description:`When true, a dismiss button is shown to close the message.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},title:{control:{type:`text`},description:`Optional bold title rendered above the message body.`,table:{type:{summary:`string`}}},children:{control:{type:`text`},description:`Main message content.`,table:{type:{summary:`ReactNode`}}},onClose:{action:`closed`,description:`Callback fired when the dismiss button is clicked.`,table:{type:{summary:`() => void`}}}},u={docs:{description:{component:`An inline message banner for displaying feedback such as info, success, warning, or error states. Supports an optional title, body content, and a dismissible close button.`}}}})),f,p,m,h,g,_,v,y,b,x,S;t((()=>{f=e(r(),1),n(),o(),d(),p=a(),{within:m,expect:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Message`,component:i,tags:[`autodocs`],args:{...c,children:`This is an informational message with important content.`},argTypes:l,parameters:u},_={play:async({canvasElement:e})=>{await h(m(e).getByRole(`alert`)).toBeInTheDocument()}},v={render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,p.jsx)(i,{variant:s.PRIMARY,children:`Informational message.`}),(0,p.jsx)(i,{variant:s.SUCCESS,children:`Operation completed successfully.`}),(0,p.jsx)(i,{variant:s.DANGER,children:`An unexpected error has occurred.`}),(0,p.jsx)(i,{variant:s.WARNING,children:`Please review the information before continuing.`})]})},y={args:{title:`Message title`,variant:s.PRIMARY,children:`Detailed message description.`}},b=()=>{let[e,t]=(0,f.useState)(!0);return(0,p.jsxs)(`div`,{children:[!e&&(0,p.jsx)(`button`,{type:`button`,onClick:()=>t(!0),children:`Show message`}),e&&(0,p.jsx)(i,{variant:s.SUCCESS,title:`Saved successfully`,closable:!0,onClose:()=>t(!1),children:`Changes have been saved correctly.`})]})},x={render:()=>(0,p.jsx)(b,{})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('alert')).toBeInTheDocument();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>\r
      <Message variant={ComponentVariant.PRIMARY}>Informational message.</Message>\r
      <Message variant={ComponentVariant.SUCCESS}>Operation completed successfully.</Message>\r
      <Message variant={ComponentVariant.DANGER}>An unexpected error has occurred.</Message>\r
      <Message variant={ComponentVariant.WARNING}>Please review the information before continuing.</Message>\r
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Message title',
    variant: ComponentVariant.PRIMARY,
    children: 'Detailed message description.'
  }
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ClosableMessage />
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Variants`,`WithTitle`,`Closable`]}))();export{x as Closable,_ as Default,v as Variants,y as WithTitle,S as __namedExportsOrder,g as default};