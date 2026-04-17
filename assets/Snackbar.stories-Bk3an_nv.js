import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Ht as n,O as r,_t as i,bt as a,k as o,yt as s}from"./iframe-BrtTKpdh.js";var c,l,u,d=t((()=>{a(),c={message:`Operation completed successfully`,variant:s.PRIMARY,open:!0,duration:0},l={message:{control:{type:`text`},description:`Main text displayed inside the snackbar.`,table:{type:{summary:`string`}}},variant:{control:{type:`select`},options:[s.PRIMARY,s.SUCCESS,s.DANGER,s.WARNING],description:`Color variant conveying the type of feedback.`,table:{type:{summary:`primary | success | danger | warning`},defaultValue:{summary:s.PRIMARY}}},open:{control:{type:`boolean`},description:`Controls visibility of the snackbar.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},duration:{control:{type:`number`,min:0},description:`Auto-dismiss delay in milliseconds. Set to 0 to disable auto-close.`,table:{type:{summary:`number`},defaultValue:{summary:`0`}}},actionLabel:{control:{type:`text`},description:`Label of the optional action button rendered in the snackbar.`,table:{type:{summary:`string`}}},onClose:{action:`closed`,description:`Callback fired when the snackbar is dismissed.`,table:{type:{summary:`() => void`}}},onAction:{action:`action`,description:`Callback fired when the action button is clicked.`,table:{type:{summary:`() => void`}}}},u={docs:{description:{component:`A brief notification that appears at the bottom of the screen to provide feedback. Supports multiple color variants, an optional action button, and configurable auto-dismiss duration.`}}}})),f,p,m,h,g,_,v,y,b,x,S,C,w,T;t((()=>{f=e(n(),1),o(),a(),d(),p=i(),{within:m,expect:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Snackbar`,component:r,tags:[`autodocs`],args:c,argTypes:l,parameters:u},_={play:async({canvasElement:e})=>{await h(m(e).getByRole(`status`)).toBeInTheDocument()}},v={render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,p.jsx)(r,{message:`Primary notification`,variant:s.PRIMARY,open:!0}),(0,p.jsx)(r,{message:`Success notification`,variant:s.SUCCESS,open:!0}),(0,p.jsx)(r,{message:`Danger notification`,variant:s.DANGER,open:!0}),(0,p.jsx)(r,{message:`Warning notification`,variant:s.WARNING,open:!0})]})},y=()=>{let[e,t]=(0,f.useState)(!0);return(0,p.jsxs)(`div`,{children:[!e&&(0,p.jsx)(`button`,{type:`button`,onClick:()=>t(!0),children:`Show snackbar`}),(0,p.jsx)(r,{message:`Message with close button`,open:e,duration:0,onClose:()=>t(!1)})]})},b={render:()=>(0,p.jsx)(y,{})},x=()=>{let[e,t]=(0,f.useState)(!0);return(0,p.jsx)(r,{message:`File deleted`,variant:s.DANGER,open:e,duration:0,actionLabel:`Undo`,onAction:()=>alert(`Action executed`),onClose:()=>t(!1)})},S={render:()=>(0,p.jsx)(x,{})},C=()=>{let[e,t]=(0,f.useState)(!1);return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`button`,{type:`button`,onClick:()=>t(!0),children:`Show snackbar (3s)`}),(0,p.jsx)(r,{message:`Closes in 3 seconds`,variant:s.SUCCESS,open:e,duration:3e3,onClose:()=>t(!1)})]})},w={render:()=>(0,p.jsx)(C,{})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('status')).toBeInTheDocument();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>\r
      <Snackbar message="Primary notification" variant={ComponentVariant.PRIMARY} open />\r
      <Snackbar message="Success notification" variant={ComponentVariant.SUCCESS} open />\r
      <Snackbar message="Danger notification" variant={ComponentVariant.DANGER} open />\r
      <Snackbar message="Warning notification" variant={ComponentVariant.WARNING} open />\r
    </div>
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <WithCloseSnackbar />
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <WithActionSnackbar />
}`,...S.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <AutoCloseSnackbar />
}`,...w.parameters?.docs?.source}}},T=[`Default`,`Variants`,`WithClose`,`WithAction`,`AutoClose`]}))();export{w as AutoClose,_ as Default,v as Variants,S as WithAction,b as WithClose,T as __namedExportsOrder,g as default};