import{a as e,n as t}from"./chunk-BneVvdWh.js";import{O as n,i as r}from"./iframe-BoT0I_bJ.js";import{n as i,t as a}from"./Icon-AKKPIBp0.js";var o,s,c,l,u,d,f,p,m,h=t((()=>{o=`_message_9c3fq_1`,s=`_messageContent_9c3fq_25`,c=`_messageIcon_9c3fq_33`,l=`_messageText_9c3fq_41`,u=`_messageTitle_9c3fq_46`,d=`_messageBody_9c3fq_55`,f=`_closeButton_9c3fq_76`,p=`_closable_9c3fq_121`,m={message:o,messageContent:s,messageIcon:c,messageText:l,messageTitle:u,messageBody:d,closeButton:f,"message-success":`_message-success_9c3fq_97`,"message-info":`_message-info_9c3fq_103`,"message-warning":`_message-warning_9c3fq_109`,"message-danger":`_message-danger_9c3fq_115`,closable:p,"message-enter":`_message-enter_9c3fq_125`,"message-enter-active":`_message-enter-active_9c3fq_130`,"message-exit":`_message-exit_9c3fq_136`,"message-exit-active":`_message-exit-active_9c3fq_141`}})),g,_,v,y,b,x=t((()=>{g=e(n(),1),h(),i(),_=r(),v={success:`check-circle`,info:`info-circle`,warning:`exclamation-triangle`,danger:`times-circle`},y=e=>e===`warning`||e===`danger`?`alert`:`status`,b=({type:e=`info`,title:t,children:n,className:r,style:i,closable:o=!1,onClose:s,role:c,"data-testid":l=`message`,...u})=>{let[d,f]=(0,g.useState)(!0),p=c||y(e),h=p===`alert`?`assertive`:`polite`,b=(0,g.useCallback)(e=>{e.preventDefault(),f(!1),s?.()},[s]);return d?(0,_.jsxs)(`div`,{className:[m.message,m[`message-${e}`],o?m.closable:``,r||``].filter(Boolean).join(` `),style:i,role:p,"aria-live":h,"data-testid":l,...u,children:[(0,_.jsxs)(`div`,{className:m.messageContent,children:[(0,_.jsx)(`div`,{className:m.messageIcon,children:(0,_.jsx)(a,{name:v[e],"aria-hidden":`true`})}),(0,_.jsxs)(`div`,{className:m.messageText,children:[t&&(0,_.jsx)(`div`,{className:m.messageTitle,"data-testid":`message-title`,children:t}),(0,_.jsx)(`div`,{className:m.messageBody,children:n})]})]}),o&&(0,_.jsx)(`button`,{type:`button`,className:m.closeButton,onClick:b,"aria-label":`Close message`,"data-testid":`message-close-button`,children:(0,_.jsx)(`span`,{"aria-hidden":`true`,children:`×`})})]}):null},b.__docgenInfo={description:``,methods:[],displayName:`Message`,props:{type:{required:!1,tsType:{name:`union`,raw:`'success' | 'info' | 'warning' | 'danger'`,elements:[{name:`literal`,value:`'success'`},{name:`literal`,value:`'info'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`}]},description:`Message type to display \r
@default 'info'`,defaultValue:{value:`'info'`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:`Optional title displayed in bold`},children:{required:!0,tsType:{name:`ReactNode`},description:`Main content of the message`},closable:{required:!1,tsType:{name:`boolean`},description:`Allows closing the message \r
@default false`,defaultValue:{value:`false`,computed:!1}},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:"Function called when the message is closed\r\nOnly used if `closable` is `true`"},role:{required:!1,tsType:{name:`union`,raw:`'alert' | 'status' | 'alertdialog'`,elements:[{name:`literal`,value:`'alert'`},{name:`literal`,value:`'status'`},{name:`literal`,value:`'alertdialog'`}]},description:`Custom ARIA role \r
@default 'status' for info/success, 'alert' for warning/danger`},"data-testid":{required:!1,tsType:{name:`string`},description:`Test ID`,defaultValue:{value:`'message'`,computed:!1}}},composes:[`HTMLAttributes`]}})),S,C,w,T,E,D,O,k,A;t((()=>{n(),x(),S=r(),C={title:`Static/Message`,component:b,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Component for displaying feedback messages to the user with different levels of importance.`}}},args:{children:`Example message`,title:`Message title`,type:`info`,closable:!1},argTypes:{type:{control:`select`,options:[`success`,`info`,`warning`,`danger`],description:`Message type`,table:{type:{summary:`string`},defaultValue:{summary:`info`}}},title:{control:`text`,description:`Optional title`},children:{control:`text`,description:`Main content`},closable:{control:`boolean`,description:`Allows closing the message`,table:{defaultValue:{summary:`false`}}},onClose:{action:`onClose`,description:`Close handler`}}},w={},T={args:{title:`Message title`,children:`This is a message with a title.`}},E={args:{title:`Important message`,children:`This message can be closed.`,closable:!0}},D={render:()=>(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,S.jsx)(b,{type:`success`,title:`Success`,children:`Operation completed successfully.`}),(0,S.jsx)(b,{type:`info`,title:`Information`,children:`This is an informational message.`}),(0,S.jsx)(b,{type:`warning`,title:`Warning`,children:`This action cannot be undone.`}),(0,S.jsx)(b,{type:`danger`,title:`Error`,children:`An error occurred while processing the request.`})]})},O={render:()=>(0,S.jsx)(b,{type:`info`,title:`Update available`,children:(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`p`,{children:`New features available:`}),(0,S.jsxs)(`ul`,{style:{margin:`0.5rem 0 0 1rem`,paddingLeft:`1rem`},children:[(0,S.jsx)(`li`,{children:`Performance improvements`}),(0,S.jsx)(`li`,{children:`New functionalities`}),(0,S.jsx)(`li`,{children:`Bug fixes`})]})]})})},k={args:{title:void 0,children:`This is a message without a title. Useful for short and direct messages.`}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Message title',
    children: 'This is a message with a title.'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Important message',
    children: 'This message can be closed.',
    closable: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    children: 'This is a message without a title. Useful for short and direct messages.'
  }
}`,...k.parameters?.docs?.source}}},A=[`Default`,`WithTitle`,`Closable`,`Types`,`WithCustomContent`,`WithoutTitle`]}))();export{E as Closable,w as Default,D as Types,O as WithCustomContent,T as WithTitle,k as WithoutTitle,A as __namedExportsOrder,C as default};