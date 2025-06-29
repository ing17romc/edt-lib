import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-D4lIrffr.js";import{M as f}from"./index-C_LCF5Wq.js";import{B as n}from"./index-CEGhxr3c.js";import{a as j}from"./enums-Ca2RdD1G.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";const w={title:"Controls/Modal",component:f,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{show:{control:"boolean",description:"Controls the visibility of the modal"},eventModal:{action:"modalClosed",description:"Callback function when the modal is closed"},children:{control:"text",description:"Modal content"}}},m=t=>{const[l,o]=r.useState(!1),d=r.useCallback(()=>o(!0),[]),S=r.useCallback(()=>o(!1),[]);return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Open Modal",onClick:d}),e.jsx(f,{...t,show:l,eventModal:S,children:t.children})]})},i={render:t=>e.jsx(m,{...t,children:e.jsxs("div",{children:[e.jsx("h2",{id:"modal-title",children:"Modal Title"}),e.jsx("p",{children:"This is the modal content. You can put anything here."})]})})},s={render:t=>{const l=()=>console.log("Close button clicked"),o=()=>console.log("Confirm button clicked");return e.jsx(m,{...t,children:e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h2",{id:"modal-title",style:{marginTop:0},children:"Custom Styled Modal"}),e.jsx("p",{children:"This modal has custom styling and content."}),e.jsxs("div",{style:{marginTop:"20px",display:"flex",justifyContent:"flex-end"},children:[e.jsx(n,{title:"Close",onClick:l,style:{marginRight:"10px"},buttonType:j.SECONDARY}),e.jsx(n,{title:"Confirm",onClick:o})]})]})})}},a={render:t=>{const l=()=>console.log("Form cancelled"),o=d=>{d.preventDefault(),console.log("Form submitted")};return e.jsx(m,{...t,children:e.jsxs("div",{style:{padding:"20px",maxWidth:"500px"},children:[e.jsx("h2",{id:"modal-title",style:{marginTop:0},children:"Contact Us"}),e.jsxs("form",{onSubmit:o,children:[e.jsxs("div",{style:{marginBottom:"15px"},children:[e.jsx("label",{htmlFor:"name",style:{display:"block",marginBottom:"5px"},children:"Name:"}),e.jsx("input",{type:"text",id:"name",style:{width:"100%",padding:"8px",boxSizing:"border-box"}})]}),e.jsxs("div",{style:{marginBottom:"15px"},children:[e.jsx("label",{htmlFor:"email",style:{display:"block",marginBottom:"5px"},children:"Email:"}),e.jsx("input",{type:"email",id:"email",style:{width:"100%",padding:"8px",boxSizing:"border-box"}})]}),e.jsxs("div",{style:{marginBottom:"15px"},children:[e.jsx("label",{htmlFor:"message",style:{display:"block",marginBottom:"5px"},children:"Message:"}),e.jsx("textarea",{id:"message",rows:4,style:{width:"100%",padding:"8px",boxSizing:"border-box"}})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px"},children:[e.jsx(n,{buttonType:j.SECONDARY,title:"Cancel",onClick:l}),e.jsx(n,{title:"Send"})]})]})]})})}};var c,p,h;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args}>
      <div>
        <h2 id="modal-title">Modal Title</h2>
        <p>This is the modal content. You can put anything here.</p>
      </div>
    </ModalWithState>
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var x,g,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const handleClose = () => console.log('Close button clicked');
    const handleConfirm = () => console.log('Confirm button clicked');
    return <ModalWithState {...args}>
        <div style={{
        padding: '20px'
      }}>
          <h2 id="modal-title" style={{
          marginTop: 0
        }}>Custom Styled Modal</h2>
          <p>This modal has custom styling and content.</p>
          <div style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
            <Button title="Close" onClick={handleClose} style={{
            marginRight: '10px'
          }} buttonType={ControlStyle.SECONDARY} />
            <Button title="Confirm" onClick={handleConfirm} />
          </div>
        </div>
      </ModalWithState>;
  }
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var u,b,C;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    const handleCancel = () => console.log('Form cancelled');
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted');
    };
    return <ModalWithState {...args}>
        <div style={{
        padding: '20px',
        maxWidth: '500px'
      }}>
          <h2 id="modal-title" style={{
          marginTop: 0
        }}>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div style={{
            marginBottom: '15px'
          }}>
              <label htmlFor="name" style={{
              display: 'block',
              marginBottom: '5px'
            }}>Name:</label>
              <input type="text" id="name" style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box'
            }} />
            </div>
            <div style={{
            marginBottom: '15px'
          }}>
              <label htmlFor="email" style={{
              display: 'block',
              marginBottom: '5px'
            }}>Email:</label>
              <input type="email" id="email" style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box'
            }} />
            </div>
            <div style={{
            marginBottom: '15px'
          }}>
              <label htmlFor="message" style={{
              display: 'block',
              marginBottom: '5px'
            }}>Message:</label>
              <textarea id="message" rows={4} style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box'
            }} />
            </div>
            <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '10px'
          }}>
              <Button buttonType={ControlStyle.SECONDARY} title="Cancel" onClick={handleCancel} />
              <Button title="Send" />
            </div>
          </form>
        </div>
      </ModalWithState>;
  }
}`,...(C=(b=a.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const E=["Default","WithCustomContent","WithForm"];export{i as Default,s as WithCustomContent,a as WithForm,E as __namedExportsOrder,w as default};
