import{j as s}from"./jsx-runtime-D_zvdyIk.js";const p=()=>s.jsxs("div",{children:[s.jsxs("div",{className:"message message-success",children:[s.jsx("strong",{children:"Success!"})," Indicates a successful or positive action."]}),s.jsxs("div",{className:"message message-info",children:[s.jsx("strong",{children:"Info!"})," Indicates a neutral informative change or action."]}),s.jsxs("div",{className:"message message-warning",children:[s.jsx("strong",{children:"Warning!"})," Indicates a warning that might need attention."]}),s.jsxs("div",{className:"message message-danger",children:[s.jsx("strong",{children:"Danger!"})," Indicates a dangerous or potentially negative action."]})]});p.__docgenInfo={description:"",methods:[],displayName:"Message"};const f=[{type:"success",title:"Success!",content:"Indicates a successful or positive action.",className:"message-success"},{type:"info",title:"Info!",content:"Indicates a neutral informative change or action.",className:"message-info"},{type:"warning",title:"Warning!",content:"Indicates a warning that might need attention.",className:"message-warning"},{type:"danger",title:"Danger!",content:"Indicates a dangerous or potentially negative action.",className:"message-danger"}],j={title:"Static/Message",component:p,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"A component that displays various types of status messages (success, info, warning, danger) to provide clear visual feedback to users."}}}},e={args:{},parameters:{docs:{description:{story:"Default implementation showing all message types."}}}},n={render:()=>s.jsx("div",{style:{display:"grid",gap:"1rem"},children:f.map(({type:u,title:h,content:y,className:v})=>s.jsxs("div",{className:`message ${v}`,children:[s.jsx("strong",{children:h})," ",y]},u))}),parameters:{docs:{description:{story:"Individual message types with their default styling."}}}},t={render:()=>s.jsxs("div",{children:[s.jsxs("div",{className:"message message-success",children:[s.jsx("strong",{children:"Custom Success!"})," This is a custom success message with"," ",s.jsx("button",{type:"button",onClick:()=>{console.log("Button clicked")},style:{background:"none",border:"none",color:"inherit",textDecoration:"underline",cursor:"pointer",padding:0,font:"inherit",outline:"inherit"},children:"a button"}),"."]}),s.jsx("div",{className:"message message-info",style:{marginTop:"1rem"},children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx("span",{children:"ℹ️"}),s.jsxs("div",{children:[s.jsx("h4",{style:{margin:"0 0 0.25rem 0"},children:"Custom Info Message"}),s.jsx("p",{style:{margin:0},children:"This message has custom HTML content and styling."})]})]})})]}),parameters:{docs:{description:{story:"Examples of messages with custom HTML content and styling."}}}};var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Default implementation showing all message types.'
      }
    }
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var r,c,d;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '1rem'
  }}>
      {mockMessages.map(({
      type,
      title,
      content,
      className
    }) => <div key={type} className={\`message \${className}\`}>
          <strong>{title}</strong> {content}
        </div>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Individual message types with their default styling.'
      }
    }
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,l,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div>
      <div className="message message-success">
        <strong>Custom Success!</strong> This is a custom success message with{' '}
        <button type="button" onClick={() => {
        // This is a no-op for demonstration purposes
        console.log('Button clicked');
      }} style={{
        background: 'none',
        border: 'none',
        color: 'inherit',
        textDecoration: 'underline',
        cursor: 'pointer',
        padding: 0,
        font: 'inherit',
        outline: 'inherit'
      }}>
          a button
        </button>.
      </div>
      <div className="message message-info" style={{
      marginTop: '1rem'
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
          <span>ℹ️</span>
          <div>
            <h4 style={{
            margin: '0 0 0.25rem 0'
          }}>Custom Info Message</h4>
            <p style={{
            margin: 0
          }}>This message has custom HTML content and styling.</p>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Examples of messages with custom HTML content and styling.'
      }
    }
  }
}`,...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const I=["Default","MessageTypes","CustomContent"];export{t as CustomContent,e as Default,n as MessageTypes,I as __namedExportsOrder,j as default};
