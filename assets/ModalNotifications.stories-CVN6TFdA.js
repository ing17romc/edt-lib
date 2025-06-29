import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as N,r as d}from"./index-D4lIrffr.js";import{B as v}from"./index-CEGhxr3c.js";import{M as W}from"./index-C_LCF5Wq.js";import{T as U}from"./index-fIcZIRKR.js";import{a as q}from"./enums-Ca2RdD1G.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";const i=({title:t,message:a,details:n,type:s="INFO",eventContinue:o,show:c,eventModal:l})=>{const r=h=>{o(h)},b=()=>{switch(s){case"ERROR":return"❌";case"WARNING":return"⚠️";case"INFO":return"ℹ️";case"SUCCESSFULL":return"✅";default:return""}};return e.jsx(W,{show:c,eventModal:h=>{l(h)},children:e.jsxs("div",{className:"body-generic-notifications",children:[e.jsxs("div",{className:"grid-primary",children:[e.jsx("div",{className:"start-1 size-12",children:e.jsx(U,{children:t})}),e.jsx("div",{className:"center start-1 size-12 padding-v-40",children:e.jsx("div",{className:`circle ${s.toLowerCase()} center`,children:e.jsx("h1",{"aria-label":`Icono de ${s.toLowerCase()}`,children:b()})})})]}),e.jsx("div",{className:"center start-1 size-12 padding-v-30",children:e.jsx("p",{className:"font-16",children:a})}),n&&e.jsx("div",{className:"center start-1 size-12 padding-v-30",children:e.jsx("p",{className:"font-14",children:n})}),e.jsx("div",{className:"padding-v-20 start-9 size-4",children:e.jsx(v,{title:"Continuar",buttonType:q.PRIMARY,onClick:r})})]})})};i.__docgenInfo={description:`Componente ModalNotifications que muestra notificaciones modales.
Permite mostrar diferentes tipos de notificaciones (error, warning, info, success) con un icono visual.

@param {ModalNotificationsProps} props - Propiedades del componente
@param {string} props.title - Título de la notificación
@param {string} props.message - Mensaje principal de la notificación
@param {string} [props.details] - Detalles adicionales de la notificación (opcional)
@param {NotificationType} [props.type='INFO'] - Tipo de notificación (ERROR, WARNING, INFO, SUCCESSFULL)
@param {(e: React.MouseEvent) => void} props.eventContinue - Función que se ejecuta al continuar
@param {boolean} props.show - Estado de visibilidad del modal
@param {(e: React.MouseEvent) => void} props.eventModal - Función que se ejecuta al cerrar el modal
@returns {JSX.Element} Elemento modal con notificación`,methods:[],displayName:"ModalNotifications",props:{title:{required:!0,tsType:{name:"string"},description:""},message:{required:!0,tsType:{name:"string"},description:""},details:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'ERROR' | 'WARNING' | 'INFO' | 'SUCCESSFULL'",elements:[{name:"literal",value:"'ERROR'"},{name:"literal",value:"'WARNING'"},{name:"literal",value:"'INFO'"},{name:"literal",value:"'SUCCESSFULL'"}]},description:"",defaultValue:{value:"'INFO'",computed:!1}},eventContinue:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""},show:{required:!0,tsType:{name:"boolean"},description:""},eventModal:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};const K={title:"Feedback/ModalNotifications",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:{type:"select",options:["ERROR","WARNING","INFO","SUCCESSFULL"]}},title:{control:"text"},message:{control:"text"},details:{control:"text"},show:{control:"boolean"}},args:{title:"Notification Title",message:"This is a notification message",details:"Additional details about the notification can go here.",type:"INFO",show:!1}},D=t=>{const[a,n]=N.useState(!1),[s,o]=N.useState(""),c=()=>n(!0),l=()=>n(!1),r=()=>{o("Continue clicked"),n(!1)};return e.jsxs("div",{children:[e.jsx(v,{title:"Show Notification",onClick:c,buttonType:"PRIMARY"}),e.jsx(i,{...t,show:a,eventModal:l,eventContinue:r}),s&&e.jsxs("div",{style:{marginTop:"1rem"},children:["Action: ",s]})]})},u={render:t=>e.jsx(D,{...t}),args:{title:"Default Notification",message:"This is a default notification message.",type:"INFO",show:!1}},k=t=>{const[a,n]=d.useState(!0),s=()=>n(!1),o=()=>{n(!1)};return e.jsx(i,{...t,show:a,eventModal:s,eventContinue:o})},m={render:t=>e.jsx(k,{...t}),args:{type:"ERROR",title:"Error",message:"An error occurred while processing your request.",details:"The server returned a 500 Internal Server Error."}},B=t=>{const[a,n]=d.useState(!0),s=()=>n(!1),o=()=>n(!1);return e.jsx(i,{...t,show:a,eventModal:s,eventContinue:o})},p={render:t=>e.jsx(B,{...t}),args:{type:"WARNING",title:"Warning",message:"This is a warning message.",details:"Please be aware of this warning."}},P=t=>{const[a,n]=d.useState(!0),s=()=>n(!1),o=()=>n(!1);return e.jsx(i,{...t,show:a,eventModal:s,eventContinue:o})},g={render:t=>e.jsx(P,{...t}),args:{type:"SUCCESSFULL",title:"Success!",message:"Your changes have been saved successfully.",details:"You can now continue working with your updated data."}},G=t=>{const[a,n]=d.useState(!0),[s,o]=d.useState(""),c=r=>{r.preventDefault(),n(!1),o("Continue button clicked")},l=r=>{r.preventDefault(),n(!1)};return e.jsxs("div",{children:[e.jsx(v,{title:"Show Modal with Custom Actions",onClick:()=>n(!0),buttonType:"PRIMARY"}),s&&e.jsxs("p",{style:{marginTop:"1rem"},children:["Action: ",s]}),e.jsx(i,{...t,show:a,eventModal:l,eventContinue:c})]})},f={render:t=>e.jsx(G,{...t}),args:{type:"INFO",title:"Custom Actions",message:"This modal has custom action buttons."}};var S,y,C;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <DefaultStory {...args} />,
  args: {
    title: 'Default Notification',
    message: 'This is a default notification message.',
    type: 'INFO',
    show: false
  }
}`,...(C=(y=u.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var R,w,E;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <ErrorNotificationStory {...args} />,
  args: {
    type: 'ERROR',
    title: 'Error',
    message: 'An error occurred while processing your request.',
    details: 'The server returned a 500 Internal Server Error.'
  }
}`,...(E=(w=m.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var x,j,M;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <WarningNotificationStory {...args} />,
  args: {
    type: 'WARNING',
    title: 'Warning',
    message: 'This is a warning message.',
    details: 'Please be aware of this warning.'
  }
}`,...(M=(j=p.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var T,I,A;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <SuccessNotificationStory {...args} />,
  args: {
    type: 'SUCCESSFULL',
    title: 'Success!',
    message: 'Your changes have been saved successfully.',
    details: 'You can now continue working with your updated data.'
  }
}`,...(A=(I=g.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var F,L,O;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <WithCustomActionsStory {...args} />,
  args: {
    type: 'INFO',
    title: 'Custom Actions',
    message: 'This modal has custom action buttons.'
  }
}`,...(O=(L=f.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const Q=["Default","ErrorNotification","WarningNotification","SuccessNotification","WithCustomActions"];export{u as Default,m as ErrorNotification,g as SuccessNotification,p as WarningNotification,f as WithCustomActions,Q as __namedExportsOrder,K as default};
