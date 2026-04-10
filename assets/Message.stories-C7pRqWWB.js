import{r as e,t}from"./iframe-BwpCWMiM.js";import{t as n}from"./jsx-runtime-BsbbwSUz.js";import{t as r}from"./Icon-CRq4DNId.js";var i=e(t(),1),a=`_message_1fl9s_1`,o=`_messageContent_1fl9s_23`,s=`_messageTitle_1fl9s_34`,c=`_messageIcon_1fl9s_40`,l=`_messageBody_1fl9s_52`,u=`_messageText_1fl9s_63`,d=`_closable_1fl9s_118`,f={message:a,messageContent:o,messageTitle:s,messageIcon:c,messageBody:l,messageText:u,"message-success":`_message-success_1fl9s_82`,"message-info":`_message-info_1fl9s_91`,"message-warning":`_message-warning_1fl9s_100`,"message-danger":`_message-danger_1fl9s_109`,closable:d,"message-enter":`_message-enter_1fl9s_122`,"message-enter-active":`_message-enter-active_1fl9s_127`,"message-exit":`_message-exit_1fl9s_133`,"message-exit-active":`_message-exit-active_1fl9s_138`},p=n(),m={success:`check-circle`,info:`info-circle`,warning:`exclamation-triangle`,danger:`times-circle`},h=e=>e===`warning`||e===`danger`?`alert`:`status`,g=({type:e=`info`,title:t,children:n,className:a,style:o,closable:s=!1,onClose:c,role:l,"data-testid":u=`message`,...d})=>{let[g,_]=(0,i.useState)(!0),v=l||h(e),y=v===`alert`?`assertive`:`polite`,b=(0,i.useCallback)(e=>{e.preventDefault(),_(!1),c?.()},[c]);return g?(0,p.jsxs)(`div`,{className:[f.message,f[`message-${e}`],s?f.closable:``,a||``].filter(Boolean).join(` `),style:o,role:v,"aria-live":y,"data-testid":u,...d,children:[(0,p.jsxs)(`div`,{className:f.messageContent,children:[(0,p.jsx)(`div`,{className:f.messageIcon,children:(0,p.jsx)(r,{name:m[e],"aria-hidden":`true`})}),(0,p.jsxs)(`div`,{className:f.messageText,children:[t&&(0,p.jsx)(`div`,{className:f.messageTitle,"data-testid":`message-title`,children:t}),(0,p.jsx)(`div`,{className:f.messageBody,children:n})]})]}),s&&(0,p.jsx)(`button`,{type:`button`,className:f.closeButton,onClick:b,"aria-label":`Close message`,"data-testid":`message-close-button`,children:(0,p.jsx)(`span`,{"aria-hidden":`true`,children:`×`})})]}):null};g.__docgenInfo={description:``,methods:[],displayName:`Message`,props:{type:{required:!1,tsType:{name:`union`,raw:`'success' | 'info' | 'warning' | 'danger'`,elements:[{name:`literal`,value:`'success'`},{name:`literal`,value:`'info'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`}]},description:`Message type to display \r
@default 'info'`,defaultValue:{value:`'info'`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:`Optional title displayed in bold`},children:{required:!0,tsType:{name:`ReactNode`},description:`Main content of the message`},closable:{required:!1,tsType:{name:`boolean`},description:`Allows closing the message \r
@default false`,defaultValue:{value:`false`,computed:!1}},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:"Function called when the message is closed\r\nOnly used if `closable` is `true`"},role:{required:!1,tsType:{name:`union`,raw:`'alert' | 'status' | 'alertdialog'`,elements:[{name:`literal`,value:`'alert'`},{name:`literal`,value:`'status'`},{name:`literal`,value:`'alertdialog'`}]},description:`Custom ARIA role \r
@default 'status' for info/success, 'alert' for warning/danger`},"data-testid":{required:!1,tsType:{name:`string`},description:`Test ID`,defaultValue:{value:`'message'`,computed:!1}}},composes:[`HTMLAttributes`]};var _={title:`Static/Message`,component:g,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Component for displaying feedback messages to the user with different levels of importance.`}}},args:{children:`Example message`,title:`Message title`,type:`info`,closable:!1},argTypes:{type:{control:`select`,options:[`success`,`info`,`warning`,`danger`],description:`Message type`,table:{type:{summary:`string`},defaultValue:{summary:`info`}}},title:{control:`text`,description:`Optional title`},children:{control:`text`,description:`Main content`},closable:{control:`boolean`,description:`Allows closing the message`,table:{defaultValue:{summary:`false`}}},onClose:{action:`onClose`,description:`Close handler`}}},v={},y={args:{title:`Message title`,children:`This is a message with a title.`}},b={args:{title:`Important message`,children:`This message can be closed.`,closable:!0}},x={render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,p.jsx)(g,{type:`success`,title:`Success`,children:`Operation completed successfully.`}),(0,p.jsx)(g,{type:`info`,title:`Information`,children:`This is an informational message.`}),(0,p.jsx)(g,{type:`warning`,title:`Warning`,children:`This action cannot be undone.`}),(0,p.jsx)(g,{type:`danger`,title:`Error`,children:`An error occurred while processing the request.`})]})},S={render:()=>(0,p.jsx)(g,{type:`info`,title:`Update available`,children:(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{children:`New features available:`}),(0,p.jsxs)(`ul`,{style:{margin:`0.5rem 0 0 1rem`,paddingLeft:`1rem`},children:[(0,p.jsx)(`li`,{children:`Performance improvements`}),(0,p.jsx)(`li`,{children:`New functionalities`}),(0,p.jsx)(`li`,{children:`Bug fixes`})]})]})})},C={args:{title:void 0,children:`This is a message without a title. Useful for short and direct messages.`}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Message title',
    children: 'This is a message with a title.'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Important message',
    children: 'This message can be closed.',
    closable: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Message type="success" title="Success">\r
        Operation completed successfully.\r
      </Message>\r
      <Message type="info" title="Information">\r
        This is an informational message.\r
      </Message>\r
      <Message type="warning" title="Warning">\r
        This action cannot be undone.\r
      </Message>\r
      <Message type="danger" title="Error">\r
        An error occurred while processing the request.\r
      </Message>\r
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Message type="info" title="Update available">\r
      <div>\r
        <p>New features available:</p>\r
        <ul style={{
        margin: '0.5rem 0 0 1rem',
        paddingLeft: '1rem'
      }}>\r
          <li>Performance improvements</li>\r
          <li>New functionalities</li>\r
          <li>Bug fixes</li>\r
        </ul>\r
      </div>\r
    </Message>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    children: 'This is a message without a title. Useful for short and direct messages.'
  }
}`,...C.parameters?.docs?.source}}};var w=[`Default`,`WithTitle`,`Closable`,`Types`,`WithCustomContent`,`WithoutTitle`];export{b as Closable,v as Default,x as Types,S as WithCustomContent,y as WithTitle,C as WithoutTitle,w as __namedExportsOrder,_ as default};