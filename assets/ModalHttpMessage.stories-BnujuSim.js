import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-D4lIrffr.js";import{B as A}from"./index-CEGhxr3c.js";import{M as m}from"./index-DUXQLmfv.js";import"./enums-Ca2RdD1G.js";import"./index-C_LCF5Wq.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-fIcZIRKR.js";import"./index-BLeZ2Wm7.js";jest.fn();const a=[{code:199,className:"code-one-hundred"},{code:200,className:"code-two-hundred"},{code:300,className:"code-three-hundred"},{code:400,className:"code-four-hundred"},{code:500,className:"code-five-hundred"}],F={title:"Feedback/ModalHttpMessage",component:m,tags:["autodocs"],argTypes:{show:{control:"boolean",description:"Controls the visibility of the modal"},eventModal:{action:"closed",description:"Function called when the modal is closed"},code:{control:"number",description:"HTTP status code to display"},title:{control:"text",description:"Title of the HTTP message"},message:{control:"text",description:"Main message content"},details:{control:"text",description:"Additional details to display in a textarea"}},args:{show:!0,code:200,title:"Success",message:"Operation completed successfully",details:"Additional details about the operation would appear here."},render:function(s){const[l,r]=u.useState(s.show);return e.jsxs(e.Fragment,{children:[e.jsx(A,{title:"Show Modal",onClick:()=>r(!0)}),e.jsx(m,{...s,show:l,eventModal:()=>r(!1)})]})}},n={args:{code:200,title:"Success",message:"Your request was processed successfully.",details:"The operation completed without any issues."}},c={args:{code:400,title:"Bad Request",message:"The server cannot process the request due to a client error.",details:"Please check your input and try again."}},d={args:{code:500,title:"Internal Server Error",message:"An unexpected error occurred on the server.",details:"Our team has been notified and is working on a fix."}},E=()=>{const[p,s]=u.useState(!1),[l,r]=u.useState(a[0].code),o=a.find(t=>t.code===l)||a[0];return e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"1rem"},children:a.map(({code:t})=>e.jsx(A,{title:`Show ${t}`,onClick:()=>{r(t),s(!0)}},t))}),e.jsx(m,{show:p,eventModal:()=>s(!1),code:o.code,title:`Status ${o.code}`,message:`This is a test message for HTTP status ${o.code}`,details:`Additional details about the ${o.code} status code would appear here.`})]})},i={render:()=>e.jsx(E,{}),parameters:{controls:{hideNoControlsWarning:!0}}};var h,g,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    code: 200,
    title: 'Success',
    message: 'Your request was processed successfully.',
    details: 'The operation completed without any issues.'
  }
}`,...(S=(g=n.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var f,x,w;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    code: 400,
    title: 'Bad Request',
    message: 'The server cannot process the request due to a client error.',
    details: 'Please check your input and try again.'
  }
}`,...(w=(x=c.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var C,v,y;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    code: 500,
    title: 'Internal Server Error',
    message: 'An unexpected error occurred on the server.',
    details: 'Our team has been notified and is working on a fix.'
  }
}`,...(y=(v=d.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var T,j,M;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <AllStatusCodesDemo />,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    }
  }
}`,...(M=(j=i.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};const D=["Success","ClientError","ServerError","AllStatusCodes"];export{i as AllStatusCodes,c as ClientError,d as ServerError,n as Success,D as __namedExportsOrder,F as default};
