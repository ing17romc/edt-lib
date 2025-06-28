import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-D4lIrffr.js";import{M as v}from"./index-BbRGezRq.js";import{B as l}from"./index-D1w7rTGS.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./enums-Ca2RdD1G.js";const W={title:"Controls/Modal",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{show:{control:"boolean",description:"Controls the visibility of the modal"},eventModal:{action:"modalClosed",description:"Callback function when the modal is closed"},children:{control:"text",description:"Modal content"}}},m=e=>{const[n,o]=d.useState(!1),r=d.useCallback(()=>o(!0),[]),j=d.useCallback(()=>o(!1),[]);return t.jsxs(t.Fragment,{children:[t.jsx(l,{text:"Open Modal",onClick:r}),t.jsx(v,{...e,show:n,eventModal:j,children:e.children})]})},i={render:e=>t.jsx(m,{...e,children:t.jsxs("div",{children:[t.jsx("h2",{id:"modal-title",children:"Modal Title"}),t.jsx("p",{children:"This is the modal content. You can put anything here."})]})})},a={render:e=>{const n=()=>console.log("Close button clicked"),o=()=>console.log("Confirm button clicked");return t.jsx(m,{...e,children:t.jsxs("div",{style:{padding:"20px"},children:[t.jsx("h2",{id:"modal-title",style:{marginTop:0},children:"Custom Styled Modal"}),t.jsx("p",{children:"This modal has custom styling and content."}),t.jsxs("div",{style:{marginTop:"20px",display:"flex",justifyContent:"flex-end"},children:[t.jsx(l,{text:"Close",onClick:n,style:{marginRight:"10px"},variant:"secondary"}),t.jsx(l,{text:"Confirm",onClick:o,variant:"primary"})]})]})})}},s={render:e=>{const n=()=>console.log("Form cancelled"),o=r=>{r.preventDefault(),console.log("Form submitted")};return t.jsx(m,{...e,children:t.jsxs("div",{style:{padding:"20px",maxWidth:"500px"},children:[t.jsx("h2",{id:"modal-title",style:{marginTop:0},children:"Contact Us"}),t.jsxs("form",{onSubmit:o,children:[t.jsxs("div",{style:{marginBottom:"15px"},children:[t.jsx("label",{htmlFor:"name",style:{display:"block",marginBottom:"5px"},children:"Name:"}),t.jsx("input",{type:"text",id:"name",style:{width:"100%",padding:"8px",boxSizing:"border-box"}})]}),t.jsxs("div",{style:{marginBottom:"15px"},children:[t.jsx("label",{htmlFor:"email",style:{display:"block",marginBottom:"5px"},children:"Email:"}),t.jsx("input",{type:"email",id:"email",style:{width:"100%",padding:"8px",boxSizing:"border-box"}})]}),t.jsxs("div",{style:{marginBottom:"15px"},children:[t.jsx("label",{htmlFor:"message",style:{display:"block",marginBottom:"5px"},children:"Message:"}),t.jsx("textarea",{id:"message",rows:4,style:{width:"100%",padding:"8px",boxSizing:"border-box"}})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px"},children:[t.jsx(l,{type:"button",text:"Cancel",onClick:n,variant:"secondary"}),t.jsx(l,{type:"submit",text:"Send",variant:"primary"})]})]})]})})}};var c,p,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args}>
      <div>
        <h2 id="modal-title">Modal Title</h2>
        <p>This is the modal content. You can put anything here.</p>
      </div>
    </ModalWithState>
}`,...(x=(p=i.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var h,y,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(y=a.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var u,b,C;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(C=(b=s.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const w=["Default","WithCustomContent","WithForm"];export{i as Default,a as WithCustomContent,s as WithForm,w as __namedExportsOrder,W as default};
