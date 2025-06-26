import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-D4lIrffr.js";import{M as v}from"./index-DMzdz4Up.js";import{B as l}from"./index-DEGu--FC.js";const B={title:"Controls/Modal",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{show:{control:"boolean",description:"Controls the visibility of the modal"},eventModal:{action:"modalClosed",description:"Callback function when the modal is closed"},children:{control:"text",description:"Modal content"}}},m=t=>{const[n,o]=d.useState(!1),r=d.useCallback(()=>o(!0),[]),j=d.useCallback(()=>o(!1),[]);return e.jsxs(e.Fragment,{children:[e.jsx(l,{text:"Open Modal",onClick:r}),e.jsx(v,{...t,show:n,eventModal:j,children:t.children})]})},a={render:t=>e.jsx(m,{...t,children:e.jsxs("div",{children:[e.jsx("h2",{id:"modal-title",children:"Modal Title"}),e.jsx("p",{children:"This is the modal content. You can put anything here."})]})})},i={render:t=>{const n=()=>console.log("Close button clicked"),o=()=>console.log("Confirm button clicked");return e.jsx(m,{...t,children:e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h2",{id:"modal-title",style:{marginTop:0},children:"Custom Styled Modal"}),e.jsx("p",{children:"This modal has custom styling and content."}),e.jsxs("div",{style:{marginTop:"20px",display:"flex",justifyContent:"flex-end"},children:[e.jsx(l,{text:"Close",onClick:n,style:{marginRight:"10px"},variant:"secondary"}),e.jsx(l,{text:"Confirm",onClick:o,variant:"primary"})]})]})})}},s={render:t=>{const n=()=>console.log("Form cancelled"),o=r=>{r.preventDefault(),console.log("Form submitted")};return e.jsx(m,{...t,children:e.jsxs("div",{style:{padding:"20px",maxWidth:"500px"},children:[e.jsx("h2",{id:"modal-title",style:{marginTop:0},children:"Contact Us"}),e.jsxs("form",{onSubmit:o,children:[e.jsxs("div",{style:{marginBottom:"15px"},children:[e.jsx("label",{htmlFor:"name",style:{display:"block",marginBottom:"5px"},children:"Name:"}),e.jsx("input",{type:"text",id:"name",style:{width:"100%",padding:"8px",boxSizing:"border-box"}})]}),e.jsxs("div",{style:{marginBottom:"15px"},children:[e.jsx("label",{htmlFor:"email",style:{display:"block",marginBottom:"5px"},children:"Email:"}),e.jsx("input",{type:"email",id:"email",style:{width:"100%",padding:"8px",boxSizing:"border-box"}})]}),e.jsxs("div",{style:{marginBottom:"15px"},children:[e.jsx("label",{htmlFor:"message",style:{display:"block",marginBottom:"5px"},children:"Message:"}),e.jsx("textarea",{id:"message",rows:4,style:{width:"100%",padding:"8px",boxSizing:"border-box"}})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px"},children:[e.jsx(l,{type:"button",text:"Cancel",onClick:n,variant:"secondary"}),e.jsx(l,{type:"submit",text:"Send",variant:"primary"})]})]})]})})}};var c,p,x;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args}>
      <div>
        <h2 id="modal-title">Modal Title</h2>
        <p>This is the modal content. You can put anything here.</p>
      </div>
    </ModalWithState>
}`,...(x=(p=a.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var h,y,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
            <Button text="Close" onClick={handleClose} style={{
            marginRight: '10px'
          }} variant="secondary" />
            <Button text="Confirm" onClick={handleConfirm} variant="primary" />
          </div>
        </div>
      </ModalWithState>;
  }
}`,...(g=(y=i.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var u,b,C;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
              <Button type="button" text="Cancel" onClick={handleCancel} variant="secondary" />
              <Button type="submit" text="Send" variant="primary" />
            </div>
          </form>
        </div>
      </ModalWithState>;
  }
}`,...(C=(b=s.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const F=["Default","WithCustomContent","WithForm"];export{a as Default,i as WithCustomContent,s as WithForm,F as __namedExportsOrder,B as default};
