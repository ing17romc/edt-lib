import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-D4lIrffr.js";import{B as I}from"./index-DEGu--FC.js";import{M as r}from"./index-Bi8F1KeS.js";import"./index-J4r_aoTu.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-BNkp-o0C.js";const D={title:"Feedback/ModalNotifications",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:{type:"select",options:["ERROR","WARNING","INFO","SUCCESSFULL"]}},title:{control:"text"},message:{control:"text"},details:{control:"text"},show:{control:"boolean"}},args:{title:"Notification Title",message:"This is a notification message",details:"Additional details about the notification can go here.",type:"INFO",show:!1}},i={render:t=>{const[s,e]=n.useState(t.show);return o.jsxs("div",{children:[o.jsx(I,{title:"Show Modal",onClick:()=>e(!0),type:"PRIMARY"}),o.jsx(r,{...t,show:s,eventModal:()=>e(!1),eventContinue:()=>e(!1)})]})}},c={args:{type:"ERROR",title:"Error",message:"An error occurred while processing your request.",details:"The server returned a 500 Internal Server Error."},render:t=>{const[s,e]=n.useState(!0);return o.jsx(r,{...t,show:s,eventModal:()=>e(!1),eventContinue:()=>e(!1)})}},u={args:{type:"WARNING",title:"Warning",message:"This action cannot be undone.",details:"Are you sure you want to proceed?"},render:t=>{const[s,e]=n.useState(!0);return o.jsx(r,{...t,show:s,eventModal:()=>e(!1),eventContinue:()=>e(!1)})}},l={args:{type:"SUCCESSFULL",title:"Success!",message:"Your changes have been saved successfully.",details:"You can now continue working with your updated data."},render:t=>{const[s,e]=n.useState(!0);return o.jsx(r,{...t,show:s,eventModal:()=>e(!1),eventContinue:()=>e(!1)})}},d={args:{type:"INFO",title:"Custom Actions",message:"This modal has custom action buttons."},render:t=>{const[s,e]=n.useState(!0),[h,j]=n.useState(""),T=a=>{a.preventDefault(),e(!1),console.log("Continue button clicked")};return o.jsxs("div",{children:[o.jsx(I,{title:"Show Modal with Custom Actions",onClick:()=>e(!0),type:"PRIMARY"}),h&&o.jsxs("p",{style:{marginTop:"1rem"},children:["Action: ",h]}),o.jsx(r,{...t,show:s,eventModal:a=>{a.preventDefault(),e(!1)},eventContinue:a=>T(a)})]})}};var p,m,w;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [show, setShow] = useState(args.show);
    return <div>
        <Button title="Show Modal" onClick={() => setShow(true)} type="PRIMARY" />
        <ModalNotifications {...args} show={show} eventModal={() => setShow(false)} eventContinue={() => setShow(false)} />
      </div>;
  }
}`,...(w=(m=i.parameters)==null?void 0:m.docs)==null?void 0:w.source}}};var S,g,f;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: 'ERROR',
    title: 'Error',
    message: 'An error occurred while processing your request.',
    details: 'The server returned a 500 Internal Server Error.'
  },
  render: args => {
    const [show, setShow] = useState(true);
    return <ModalNotifications {...args} show={show} eventModal={() => setShow(false)} eventContinue={() => setShow(false)} />;
  }
}`,...(f=(g=c.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,M,C;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: 'WARNING',
    title: 'Warning',
    message: 'This action cannot be undone.',
    details: 'Are you sure you want to proceed?'
  },
  render: args => {
    const [show, setShow] = useState(true);
    return <ModalNotifications {...args} show={show} eventModal={() => setShow(false)} eventContinue={() => setShow(false)} />;
  }
}`,...(C=(M=u.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var y,N,R;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: 'SUCCESSFULL',
    title: 'Success!',
    message: 'Your changes have been saved successfully.',
    details: 'You can now continue working with your updated data.'
  },
  render: args => {
    const [show, setShow] = useState(true);
    return <ModalNotifications {...args} show={show} eventModal={() => setShow(false)} eventContinue={() => setShow(false)} />;
  }
}`,...(R=(N=l.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var A,E,x;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: 'INFO',
    title: 'Custom Actions',
    message: 'This modal has custom action buttons.'
  },
  render: args => {
    const [show, setShow] = useState(true);
    const [action, setAction] = useState<string>('');
    const handleContinue = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setShow(false);
      console.log('Continue button clicked');
    };
    return <div>
        <Button title="Show Modal with Custom Actions" onClick={() => setShow(true)} type="PRIMARY" />
        {action && <p style={{
        marginTop: '1rem'
      }}>Action: {action}</p>}
        <ModalNotifications {...args} show={show} eventModal={(e: React.MouseEvent<Element, MouseEvent>) => {
        e.preventDefault();
        setShow(false);
      }} eventContinue={(e: React.MouseEvent<HTMLButtonElement>) => handleContinue(e)} />
      </div>;
  }
}`,...(x=(E=d.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};const U=["Default","ErrorNotification","WarningNotification","SuccessNotification","WithCustomActions"];export{i as Default,c as ErrorNotification,l as SuccessNotification,u as WarningNotification,d as WithCustomActions,U as __namedExportsOrder,D as default};
