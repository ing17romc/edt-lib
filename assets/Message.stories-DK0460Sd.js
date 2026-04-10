import{r as e,t}from"./iframe-BwpCWMiM.js";import{t as n}from"./jsx-runtime-BsbbwSUz.js";import{t as r}from"./classNames-DYb3CZs3.js";import{n as i}from"./types-BTwUNDvM.js";var a=e(t(),1),o={message:`_message_11vk9_1`,icon:`_icon_11vk9_11`,body:`_body_11vk9_18`,title:`_title_11vk9_23`,content:`_content_11vk9_30`,closeButton:`_closeButton_11vk9_34`,"message--primary":`_message--primary_11vk9_49`,"message--success":`_message--success_11vk9_58`,"message--danger":`_message--danger_11vk9_67`,"message--warning":`_message--warning_11vk9_76`},s=n(),c={[i.PRIMARY]:`ℹ`,[i.SUCCESS]:`✓`,[i.DANGER]:`✕`,[i.WARNING]:`⚠`},l=({children:e,variant:t=i.PRIMARY,title:n,closable:a=!1,onClose:l,className:u,...d})=>(0,s.jsxs)(`div`,{role:`alert`,className:r(o.message,o[`message--${t}`],u),...d,children:[(0,s.jsx)(`span`,{className:o.icon,"aria-hidden":`true`,children:c[t]}),(0,s.jsxs)(`div`,{className:o.body,children:[n&&(0,s.jsx)(`strong`,{className:o.title,children:n}),(0,s.jsx)(`div`,{className:o.content,children:e})]}),a&&(0,s.jsx)(`button`,{type:`button`,className:o.closeButton,"aria-label":`Close`,onClick:l,children:`×`})]});l.__docgenInfo={description:`Message component that displays informational messages with different levels of importance.\r
\r
@param children - Message content\r
@param variant - Color/type variant\r
@param title - Optional title\r
@param closable - Whether the message can be closed\r
@param onClose - Close callback`,methods:[],displayName:`Message`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:`Message content`},variant:{required:!1,tsType:{name:`union`,raw:`| ComponentVariant.PRIMARY\r
| ComponentVariant.SUCCESS\r
| ComponentVariant.DANGER\r
| ComponentVariant.WARNING`,elements:[{name:`ComponentVariant.PRIMARY`},{name:`ComponentVariant.SUCCESS`},{name:`ComponentVariant.DANGER`},{name:`ComponentVariant.WARNING`}]},description:`Color/type variant of the message\r
@default 'primary'`,defaultValue:{value:`ComponentVariant.PRIMARY`,computed:!0}},title:{required:!1,tsType:{name:`string`},description:`Optional message title`},closable:{required:!1,tsType:{name:`boolean`},description:`Whether the message can be closed\r
@default false`,defaultValue:{value:`false`,computed:!1}},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback when closing the message`}},composes:[`HTMLAttributes`]};var u={variant:i.PRIMARY,closable:!1},d={variant:{control:{type:`select`},options:[i.PRIMARY,i.SUCCESS,i.DANGER,i.WARNING],description:`Color variant that conveys the intent of the message.`,table:{type:{summary:`primary | success | danger | warning`},defaultValue:{summary:i.PRIMARY}}},closable:{control:`boolean`,description:`When true, a dismiss button is shown to close the message.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},title:{control:`text`,description:`Optional bold title rendered above the message body.`,table:{type:{summary:`string`}}},children:{control:`text`,description:`Main message content.`,table:{type:{summary:`ReactNode`}}},onClose:{action:`closed`,description:`Callback fired when the dismiss button is clicked.`,table:{type:{summary:`() => void`}}}},f={docs:{description:{component:`An inline message banner for displaying feedback such as info, success, warning, or error states. Supports an optional title, body content, and a dismissible close button.`}}},p={title:`Components/Message`,component:l,tags:[`autodocs`],args:{...u,children:`This is an informational message with important content.`},argTypes:d,parameters:f},m={},h={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,s.jsx)(l,{variant:i.PRIMARY,children:`Informational message.`}),(0,s.jsx)(l,{variant:i.SUCCESS,children:`Operation completed successfully.`}),(0,s.jsx)(l,{variant:i.DANGER,children:`An unexpected error has occurred.`}),(0,s.jsx)(l,{variant:i.WARNING,children:`Please review the information before continuing.`})]})},g={args:{title:`Message title`,variant:i.PRIMARY,children:`Detailed message description.`}},_=()=>{let[e,t]=(0,a.useState)(!0);return(0,s.jsxs)(`div`,{children:[!e&&(0,s.jsx)(`button`,{type:`button`,onClick:()=>t(!0),children:`Show message`}),e&&(0,s.jsx)(l,{variant:i.SUCCESS,title:`Saved successfully`,closable:!0,onClose:()=>t(!1),children:`Changes have been saved correctly.`})]})},v={render:()=>(0,s.jsx)(_,{})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Message title',
    variant: ComponentVariant.PRIMARY,
    children: 'Detailed message description.'
  }
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ClosableMessage />
}`,...v.parameters?.docs?.source}}};var y=[`Default`,`Variants`,`WithTitle`,`Closable`];export{v as Closable,m as Default,h as Variants,g as WithTitle,y as __namedExportsOrder,p as default};