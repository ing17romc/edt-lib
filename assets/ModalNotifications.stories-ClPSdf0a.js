import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{R as f,r as c}from"./index-D4lIrffr.js";import{B as M}from"./index-D9cxNMPW.js";import{M as a}from"./index-K37Rh4r4.js";import"./enums-Ca2RdD1G.js";import"./index-BbRGezRq.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-BNkp-o0C.js";const J={title:"Feedback/ModalNotifications",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:{type:"select",options:["ERROR","WARNING","INFO","SUCCESSFULL"]}},title:{control:"text"},message:{control:"text"},details:{control:"text"},show:{control:"boolean"}},args:{title:"Notification Title",message:"This is a notification message",details:"Additional details about the notification can go here.",type:"INFO",show:!1}},O=e=>{const[n,t]=f.useState(!1),[o,r]=f.useState(""),p=()=>t(!0),h=()=>t(!1),i=()=>{r("Continue clicked"),t(!1)};return s.jsxs("div",{children:[s.jsx(M,{title:"Show Notification",onClick:p,buttonType:"PRIMARY"}),s.jsx(a,{...e,show:n,eventModal:h,eventContinue:i}),o&&s.jsxs("div",{style:{marginTop:"1rem"},children:["Action: ",o]})]})},l={render:e=>s.jsx(O,{...e}),args:{title:"Default Notification",message:"This is a default notification message.",type:"INFO",show:!1}},F=e=>{const[n,t]=c.useState(!0),o=()=>t(!1),r=()=>{t(!1)};return s.jsx(a,{...e,show:n,eventModal:o,eventContinue:r})},u={render:e=>s.jsx(F,{...e}),args:{type:"ERROR",title:"Error",message:"An error occurred while processing your request.",details:"The server returned a 500 Internal Server Error."}},D=e=>{const[n,t]=c.useState(!0),o=()=>t(!1),r=()=>t(!1);return s.jsx(a,{...e,show:n,eventModal:o,eventContinue:r})},d={render:e=>s.jsx(D,{...e}),args:{type:"WARNING",title:"Warning",message:"This is a warning message.",details:"Please be aware of this warning."}},k=e=>{const[n,t]=c.useState(!0),o=()=>t(!1),r=()=>t(!1);return s.jsx(a,{...e,show:n,eventModal:o,eventContinue:r})},m={render:e=>s.jsx(k,{...e}),args:{type:"SUCCESSFULL",title:"Success!",message:"Your changes have been saved successfully.",details:"You can now continue working with your updated data."}},L=e=>{const[n,t]=c.useState(!0),[o,r]=c.useState(""),p=i=>{i.preventDefault(),t(!1),r("Continue button clicked")},h=i=>{i.preventDefault(),t(!1)};return s.jsxs("div",{children:[s.jsx(M,{title:"Show Modal with Custom Actions",onClick:()=>t(!0),buttonType:"PRIMARY"}),o&&s.jsxs("p",{style:{marginTop:"1rem"},children:["Action: ",o]}),s.jsx(a,{...e,show:n,eventModal:h,eventContinue:p})]})},g={render:e=>s.jsx(L,{...e}),args:{type:"INFO",title:"Custom Actions",message:"This modal has custom action buttons."}};var S,y,C;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <DefaultStory {...args} />,
  args: {
    title: 'Default Notification',
    message: 'This is a default notification message.',
    type: 'INFO',
    show: false
  }
}`,...(C=(y=l.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var w,N,x;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <ErrorNotificationStory {...args} />,
  args: {
    type: 'ERROR',
    title: 'Error',
    message: 'An error occurred while processing your request.',
    details: 'The server returned a 500 Internal Server Error.'
  }
}`,...(x=(N=u.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var v,A,R;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <WarningNotificationStory {...args} />,
  args: {
    type: 'WARNING',
    title: 'Warning',
    message: 'This is a warning message.',
    details: 'Please be aware of this warning.'
  }
}`,...(R=(A=d.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var j,E,T;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <SuccessNotificationStory {...args} />,
  args: {
    type: 'SUCCESSFULL',
    title: 'Success!',
    message: 'Your changes have been saved successfully.',
    details: 'You can now continue working with your updated data.'
  }
}`,...(T=(E=m.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var I,W,b;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <WithCustomActionsStory {...args} />,
  args: {
    type: 'INFO',
    title: 'Custom Actions',
    message: 'This modal has custom action buttons.'
  }
}`,...(b=(W=g.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};const K=["Default","ErrorNotification","WarningNotification","SuccessNotification","WithCustomActions"];export{l as Default,u as ErrorNotification,m as SuccessNotification,d as WarningNotification,g as WithCustomActions,K as __namedExportsOrder,J as default};
