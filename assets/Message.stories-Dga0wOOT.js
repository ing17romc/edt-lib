import{a as e,n as t}from"./chunk-BneVvdWh.js";import{O as n,a as r,i,o as a}from"./iframe-BoT0I_bJ.js";import{n as o,r as s}from"./types-SSqGpC_M.js";var c,l,u,d,f,p,m,h=t((()=>{c=`_message_7swrx_1`,l=`_icon_7swrx_11`,u=`_body_7swrx_18`,d=`_title_7swrx_23`,f=`_content_7swrx_30`,p=`_closeButton_7swrx_34`,m={message:c,icon:l,body:u,title:d,content:f,closeButton:p,"message--primary":`_message--primary_7swrx_54`,"message--success":`_message--success_7swrx_60`,"message--danger":`_message--danger_7swrx_66`,"message--warning":`_message--warning_7swrx_72`}})),g,_,v,y=t((()=>{n(),a(),h(),s(),g=i(),_={[o.PRIMARY]:`ℹ`,[o.SUCCESS]:`✓`,[o.DANGER]:`✕`,[o.WARNING]:`⚠`},v=({children:e,variant:t=o.PRIMARY,title:n,closable:i=!1,onClose:a,className:s,...c})=>(0,g.jsxs)(`div`,{role:`alert`,className:r(m.message,m[`message--${t}`],s),...c,children:[(0,g.jsx)(`span`,{className:m.icon,"aria-hidden":`true`,children:_[t]}),(0,g.jsxs)(`div`,{className:m.body,children:[n&&(0,g.jsx)(`strong`,{className:m.title,children:n}),(0,g.jsx)(`div`,{className:m.content,children:e})]}),i&&(0,g.jsx)(`button`,{type:`button`,className:m.closeButton,"aria-label":`Close`,onClick:a,children:`×`})]}),v.__docgenInfo={description:`Message component that displays informational messages with different levels of importance.`,methods:[],displayName:`Message`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:`Message content`},variant:{required:!1,tsType:{name:`union`,raw:`| ComponentVariant.PRIMARY\r
| ComponentVariant.SUCCESS\r
| ComponentVariant.DANGER\r
| ComponentVariant.WARNING`,elements:[{name:`ComponentVariant.PRIMARY`},{name:`ComponentVariant.SUCCESS`},{name:`ComponentVariant.DANGER`},{name:`ComponentVariant.WARNING`}]},description:`Color/type variant of the message\r
@default 'primary'`,defaultValue:{value:`ComponentVariant.PRIMARY`,computed:!0}},title:{required:!1,tsType:{name:`string`},description:`Optional message title`},closable:{required:!1,tsType:{name:`boolean`},description:`Whether the message can be closed\r
@default false`,defaultValue:{value:`false`,computed:!1}},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback when closing the message`}},composes:[`HTMLAttributes`]}})),b,x,S,C=t((()=>{s(),b={variant:o.PRIMARY,closable:!1},x={variant:{control:{type:`select`},options:[o.PRIMARY,o.SUCCESS,o.DANGER,o.WARNING],description:`Color variant that conveys the intent of the message.`,table:{type:{summary:`primary | success | danger | warning`},defaultValue:{summary:o.PRIMARY}}},closable:{control:{type:`boolean`},description:`When true, a dismiss button is shown to close the message.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},title:{control:{type:`text`},description:`Optional bold title rendered above the message body.`,table:{type:{summary:`string`}}},children:{control:{type:`text`},description:`Main message content.`,table:{type:{summary:`ReactNode`}}},onClose:{action:`closed`,description:`Callback fired when the dismiss button is clicked.`,table:{type:{summary:`() => void`}}}},S={docs:{description:{component:`An inline message banner for displaying feedback such as info, success, warning, or error states. Supports an optional title, body content, and a dismissible close button.`}}}})),w,T,E,D,O,k,A,j,M,N,P;t((()=>{w=e(n(),1),y(),s(),C(),T=i(),{within:E,expect:D}=__STORYBOOK_MODULE_TEST__,O={title:`Components/Message`,component:v,tags:[`autodocs`],args:{...b,children:`This is an informational message with important content.`},argTypes:x,parameters:S},k={play:async({canvasElement:e})=>{await D(E(e).getByRole(`alert`)).toBeInTheDocument()}},A={render:()=>(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,T.jsx)(v,{variant:o.PRIMARY,children:`Informational message.`}),(0,T.jsx)(v,{variant:o.SUCCESS,children:`Operation completed successfully.`}),(0,T.jsx)(v,{variant:o.DANGER,children:`An unexpected error has occurred.`}),(0,T.jsx)(v,{variant:o.WARNING,children:`Please review the information before continuing.`})]})},j={args:{title:`Message title`,variant:o.PRIMARY,children:`Detailed message description.`}},M=()=>{let[e,t]=(0,w.useState)(!0);return(0,T.jsxs)(`div`,{children:[!e&&(0,T.jsx)(`button`,{type:`button`,onClick:()=>t(!0),children:`Show message`}),e&&(0,T.jsx)(v,{variant:o.SUCCESS,title:`Saved successfully`,closable:!0,onClose:()=>t(!1),children:`Changes have been saved correctly.`})]})},N={render:()=>(0,T.jsx)(M,{})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('alert')).toBeInTheDocument();
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Message title',
    variant: ComponentVariant.PRIMARY,
    children: 'Detailed message description.'
  }
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <ClosableMessage />
}`,...N.parameters?.docs?.source}}},P=[`Default`,`Variants`,`WithTitle`,`Closable`]}))();export{N as Closable,k as Default,A as Variants,j as WithTitle,P as __namedExportsOrder,O as default};