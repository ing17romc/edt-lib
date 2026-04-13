import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-DoW-sQG_.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{n as i,t as a}from"./Icon-CszCnGbt.js";var o,s,c,l,u,d,f,p,m=t((()=>{o=`_message_1fl9s_1`,s=`_messageContent_1fl9s_23`,c=`_messageTitle_1fl9s_34`,l=`_messageIcon_1fl9s_40`,u=`_messageBody_1fl9s_52`,d=`_messageText_1fl9s_63`,f=`_closable_1fl9s_118`,p={message:o,messageContent:s,messageTitle:c,messageIcon:l,messageBody:u,messageText:d,"message-success":`_message-success_1fl9s_82`,"message-info":`_message-info_1fl9s_91`,"message-warning":`_message-warning_1fl9s_100`,"message-danger":`_message-danger_1fl9s_109`,closable:f,"message-enter":`_message-enter_1fl9s_122`,"message-enter-active":`_message-enter-active_1fl9s_127`,"message-exit":`_message-exit_1fl9s_133`,"message-exit-active":`_message-exit-active_1fl9s_138`}})),h,g,_,v,y,b=t((()=>{h=e(n(),1),m(),i(),g=r(),_={success:`check-circle`,info:`info-circle`,warning:`exclamation-triangle`,danger:`times-circle`},v=e=>e===`warning`||e===`danger`?`alert`:`status`,y=({type:e=`info`,title:t,children:n,className:r,style:i,closable:o=!1,onClose:s,role:c,"data-testid":l=`message`,...u})=>{let[d,f]=(0,h.useState)(!0),m=c||v(e),y=m===`alert`?`assertive`:`polite`,b=(0,h.useCallback)(e=>{e.preventDefault(),f(!1),s?.()},[s]);return d?(0,g.jsxs)(`div`,{className:[p.message,p[`message-${e}`],o?p.closable:``,r||``].filter(Boolean).join(` `),style:i,role:m,"aria-live":y,"data-testid":l,...u,children:[(0,g.jsxs)(`div`,{className:p.messageContent,children:[(0,g.jsx)(`div`,{className:p.messageIcon,children:(0,g.jsx)(a,{name:_[e],"aria-hidden":`true`})}),(0,g.jsxs)(`div`,{className:p.messageText,children:[t&&(0,g.jsx)(`div`,{className:p.messageTitle,"data-testid":`message-title`,children:t}),(0,g.jsx)(`div`,{className:p.messageBody,children:n})]})]}),o&&(0,g.jsx)(`button`,{type:`button`,className:p.closeButton,onClick:b,"aria-label":`Close message`,"data-testid":`message-close-button`,children:(0,g.jsx)(`span`,{"aria-hidden":`true`,children:`×`})})]}):null},y.__docgenInfo={description:``,methods:[],displayName:`Message`,props:{type:{required:!1,tsType:{name:`union`,raw:`'success' | 'info' | 'warning' | 'danger'`,elements:[{name:`literal`,value:`'success'`},{name:`literal`,value:`'info'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`}]},description:`Message type to display \r
@default 'info'`,defaultValue:{value:`'info'`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:`Optional title displayed in bold`},children:{required:!0,tsType:{name:`ReactNode`},description:`Main content of the message`},closable:{required:!1,tsType:{name:`boolean`},description:`Allows closing the message \r
@default false`,defaultValue:{value:`false`,computed:!1}},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:"Function called when the message is closed\r\nOnly used if `closable` is `true`"},role:{required:!1,tsType:{name:`union`,raw:`'alert' | 'status' | 'alertdialog'`,elements:[{name:`literal`,value:`'alert'`},{name:`literal`,value:`'status'`},{name:`literal`,value:`'alertdialog'`}]},description:`Custom ARIA role \r
@default 'status' for info/success, 'alert' for warning/danger`},"data-testid":{required:!1,tsType:{name:`string`},description:`Test ID`,defaultValue:{value:`'message'`,computed:!1}}},composes:[`HTMLAttributes`]}})),x,S,C,w,T,E,D,O,k;t((()=>{n(),b(),x=r(),S={title:`Static/Message`,component:y,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Component for displaying feedback messages to the user with different levels of importance.`}}},args:{children:`Example message`,title:`Message title`,type:`info`,closable:!1},argTypes:{type:{control:`select`,options:[`success`,`info`,`warning`,`danger`],description:`Message type`,table:{type:{summary:`string`},defaultValue:{summary:`info`}}},title:{control:`text`,description:`Optional title`},children:{control:`text`,description:`Main content`},closable:{control:`boolean`,description:`Allows closing the message`,table:{defaultValue:{summary:`false`}}},onClose:{action:`onClose`,description:`Close handler`}}},C={},w={args:{title:`Message title`,children:`This is a message with a title.`}},T={args:{title:`Important message`,children:`This message can be closed.`,closable:!0}},E={render:()=>(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,x.jsx)(y,{type:`success`,title:`Success`,children:`Operation completed successfully.`}),(0,x.jsx)(y,{type:`info`,title:`Information`,children:`This is an informational message.`}),(0,x.jsx)(y,{type:`warning`,title:`Warning`,children:`This action cannot be undone.`}),(0,x.jsx)(y,{type:`danger`,title:`Error`,children:`An error occurred while processing the request.`})]})},D={render:()=>(0,x.jsx)(y,{type:`info`,title:`Update available`,children:(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`p`,{children:`New features available:`}),(0,x.jsxs)(`ul`,{style:{margin:`0.5rem 0 0 1rem`,paddingLeft:`1rem`},children:[(0,x.jsx)(`li`,{children:`Performance improvements`}),(0,x.jsx)(`li`,{children:`New functionalities`}),(0,x.jsx)(`li`,{children:`Bug fixes`})]})]})})},O={args:{title:void 0,children:`This is a message without a title. Useful for short and direct messages.`}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Message title',
    children: 'This is a message with a title.'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Important message',
    children: 'This message can be closed.',
    closable: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    children: 'This is a message without a title. Useful for short and direct messages.'
  }
}`,...O.parameters?.docs?.source}}},k=[`Default`,`WithTitle`,`Closable`,`Types`,`WithCustomContent`,`WithoutTitle`]}))();export{T as Closable,C as Default,E as Types,D as WithCustomContent,w as WithTitle,O as WithoutTitle,k as __namedExportsOrder,S as default};