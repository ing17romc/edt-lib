import{r as e,t}from"./iframe-BwpCWMiM.js";import{t as n}from"./jsx-runtime-BsbbwSUz.js";import{t as r}from"./types-BTwUNDvM.js";var i=e(t(),1),a=`_textAreaContainer_txq02_1`,o=`_fullWidth_txq02_9`,s=`_label_txq02_13`,c=`_disabled_txq02_21`,l=`_error_txq02_24`,u=`_textareaWrapper_txq02_28`,d=`_textarea_txq02_28`,f=`_charCount_txq02_148`,p=`_helperContainer_txq02_164`,m=`_helperText_txq02_171`,h={textAreaContainer:a,fullWidth:o,label:s,disabled:c,error:l,textareaWrapper:u,"variant-outlined":`_variant-outlined_txq02_37`,"size-small":`_size-small_txq02_51`,textarea:d,"size-medium":`_size-medium_txq02_58`,"size-large":`_size-large_txq02_65`,"variant-standard":`_variant-standard_txq02_72`,"variant-filled":`_variant-filled_txq02_88`,charCount:f,helperContainer:p,helperText:m},g=n(),_=(0,i.forwardRef)(({label:e,helperText:t,error:n=!1,fullWidth:a=!1,variant:o=`outlined`,size:s=r.MEDIUM,rows:c=3,maxLength:l,autoResize:u=!1,minRows:d,maxRows:f,className:p=``,containerClassName:m=``,labelClassName:_=``,textareaClassName:v=``,helperTextClassName:y=``,disabled:b=!1,onChange:x,style:S,id:C,...w},T)=>{let E=(0,i.useRef)(null),D=(0,i.useId)(),O=C||`textarea-${D}`,k=t?`${O}-helper-text`:void 0,A=e=>{E.current=e,typeof T==`function`?T(e):T&&(T.current=e)},j=(0,i.useCallback)(()=>{if(u&&E.current){let e=E.current;e.style.height=`auto`;let t=window.getComputedStyle(e),n=parseFloat(t.lineHeight),r=parseFloat(t.paddingTop),i=parseFloat(t.paddingBottom),a=parseFloat(t.borderTopWidth),o=parseFloat(t.borderBottomWidth),s=r+i+a+o,c=d&&n?d*n+s:-1/0,l=f&&n?f*n+s:1/0,u=e.scrollHeight,p=Math.max(c,Math.min(u,l));e.style.height=`${p}px`,l!==1/0&&u>l?e.style.overflow=`auto`:e.style.overflow=`hidden`}},[u,d,f]);(0,i.useEffect)(()=>{u&&j()},[u,j]);let M=e=>{u&&j(),x&&x(e)},N=[h.textAreaContainer,a?h.fullWidth:``,m,p].filter(Boolean).join(` `),P=[h.label,b?h.disabled:``,n?h.error:``,_].filter(Boolean).join(` `),F=[h.textareaWrapper,h[`variant-${o}`],h[`size-${s}`],n?h.error:``,b?h.disabled:``].filter(Boolean).join(` `),I=[h.textarea,v].filter(Boolean).join(` `),L=[h.helperText,n?h.error:``,y].filter(Boolean).join(` `),R=l&&w.value?`${String(w.value).length}/${l}`:null;return(0,g.jsxs)(`div`,{className:N,style:S,children:[e&&(0,g.jsx)(`label`,{htmlFor:O,className:P,children:e}),(0,g.jsxs)(`div`,{className:F,children:[(0,g.jsx)(`textarea`,{id:O,ref:A,className:I,disabled:b,"aria-invalid":n,"aria-describedby":k,rows:c,maxLength:l,onChange:M,...w}),l&&(0,g.jsx)(`div`,{className:h.charCount,children:R})]}),(t||R)&&(0,g.jsx)(`div`,{className:h.helperContainer,children:t&&(0,g.jsx)(`p`,{id:k,className:L,children:t})})]})});_.displayName=`TextArea`,_.__docgenInfo={description:`Text area component that allows multi-line text input.\r
Supports different variants, sizes, and auto-resize.`,methods:[],displayName:`TextArea`,props:{"data-testid":{required:!1,tsType:{name:`string`},description:``},label:{required:!1,tsType:{name:`string`},description:`Label displayed above the textarea`},helperText:{required:!1,tsType:{name:`string`},description:`Helper text displayed below the textarea`},error:{required:!1,tsType:{name:`boolean`},description:`If true, shows an error indicator\r
@default false`,defaultValue:{value:`false`,computed:!1}},fullWidth:{required:!1,tsType:{name:`boolean`},description:`If true, the textarea takes up the full available width\r
@default false`,defaultValue:{value:`false`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'outlined' | 'filled' | 'standard'`,elements:[{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'filled'`},{name:`literal`,value:`'standard'`}]},description:`Design variant of the textarea\r
@default 'outlined'`,defaultValue:{value:`'outlined'`,computed:!1}},size:{required:!1,tsType:{name:`ComponentSize`},description:`Textarea size\r
@default 'medium'`,defaultValue:{value:`ComponentSize.MEDIUM`,computed:!0}},rows:{required:!1,tsType:{name:`number`},description:`Default number of rows\r
@default 3`,defaultValue:{value:`3`,computed:!1}},maxLength:{required:!1,tsType:{name:`number`},description:`Maximum number of characters allowed`},autoResize:{required:!1,tsType:{name:`boolean`},description:`If true, the textarea resizes automatically based on content\r
@default false`,defaultValue:{value:`false`,computed:!1}},minRows:{required:!1,tsType:{name:`number`},description:`Minimum number of rows when autoResize is true`},maxRows:{required:!1,tsType:{name:`number`},description:`Maximum number of rows when autoResize is true`},containerClassName:{required:!1,tsType:{name:`string`},description:`Custom CSS class for the container`,defaultValue:{value:`''`,computed:!1}},labelClassName:{required:!1,tsType:{name:`string`},description:`Custom CSS class for the label`,defaultValue:{value:`''`,computed:!1}},textareaClassName:{required:!1,tsType:{name:`string`},description:`Custom CSS class for the textarea`,defaultValue:{value:`''`,computed:!1}},helperTextClassName:{required:!1,tsType:{name:`string`},description:`Custom CSS class for the helper text`,defaultValue:{value:`''`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.ChangeEvent<HTMLTextAreaElement>) => void`,signature:{arguments:[{type:{name:`ReactChangeEvent`,raw:`React.ChangeEvent<HTMLTextAreaElement>`,elements:[{name:`HTMLTextAreaElement`}]},name:`event`}],return:{name:`void`}}},description:`Function called when the textarea value changes`},className:{defaultValue:{value:`''`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1}},composes:[`Omit`]};var v={label:`Description`,placeholder:`Type something...`,variant:`outlined`,size:r.MEDIUM,rows:3},y={title:`Components/TextArea`,component:_,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`outlined`,`filled`,`standard`],description:`Visual style variant of the text area.`,table:{type:{summary:`outlined | filled | standard`},defaultValue:{summary:`outlined`}}},size:{control:`select`,options:Object.values(r),description:`Size of the text area field.`,table:{type:{summary:Object.values(r).join(` | `)},defaultValue:{summary:r.MEDIUM}}},rows:{control:{type:`number`,min:1,max:20},description:`Minimum number of visible text rows.`,table:{type:{summary:`number`}}},maxLength:{control:{type:`number`,min:1},description:`Maximum number of characters the user can enter.`,table:{type:{summary:`number`}}},error:{control:`boolean`,description:`When true, applies error styling to the field.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`When true, the field is non-interactive.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},fullWidth:{control:`boolean`,description:`When true, the field stretches to fill its container width.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{control:`boolean`,description:`Marks the field as required.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{control:`boolean`,description:`When true, the value can be read but not edited.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},autoResize:{control:`boolean`,description:`When true, the field height adjusts automatically as the user types.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},parameters:{docs:{description:{component:`A multi-line text input field. Supports outlined, filled, and standard variants, multiple sizes, character limits, and automatic height resizing.`}}}},b=e=>{let[t,n]=(0,i.useState)(``);return(0,g.jsx)(_,{...e,value:t,onChange:e=>n(e.target.value)})},x={render:e=>(0,g.jsx)(b,{...e}),args:{...v}},S={render:()=>{let[e,t]=(0,i.useState)(``);return(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,maxWidth:`600px`},children:[(0,g.jsx)(_,{label:`Outlined`,variant:`outlined`,placeholder:`Outlined`,value:e,onChange:e=>t(e.target.value)}),(0,g.jsx)(_,{label:`Filled`,variant:`filled`,placeholder:`Filled`,value:e,onChange:e=>t(e.target.value)}),(0,g.jsx)(_,{label:`Standard`,variant:`standard`,placeholder:`Standard`,value:e,onChange:e=>t(e.target.value)})]})},parameters:{docs:{description:{story:`Available design variants for the text area.`}}}},C={render:()=>{let[e,t]=(0,i.useState)(``);return(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`600px`},children:[(0,g.jsx)(_,{label:`Small`,size:r.SMALL,placeholder:`Small size`,value:e,onChange:e=>t(e.target.value)}),(0,g.jsx)(_,{label:`Medium`,size:r.MEDIUM,placeholder:`Medium size`,value:e,onChange:e=>t(e.target.value)}),(0,g.jsx)(_,{label:`Large`,size:r.LARGE,placeholder:`Large size`,value:e,onChange:e=>t(e.target.value)})]})},parameters:{docs:{description:{story:`Available size options for the text area.`}}}},w={render:()=>{let[e,t]=(0,i.useState)(``);return(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`600px`},children:[(0,g.jsx)(_,{label:`Default field`,value:e,onChange:e=>t(e.target.value),placeholder:`Type something...`}),(0,g.jsx)(_,{label:`Field with default value`,defaultValue:`This is the default content in the text area. You can edit it.`,rows:4}),(0,g.jsx)(_,{label:`Disabled field`,disabled:!0,value:`This text area is disabled`,rows:2}),(0,g.jsx)(_,{label:`Read-only field`,readOnly:!0,value:`This text area is read-only. Its content cannot be edited.`,rows:3}),(0,g.jsx)(_,{label:`Required field`,required:!0,placeholder:`This field is mandatory`,rows:2}),(0,g.jsx)(_,{label:`Field with error`,error:!0,helperText:`This field is required`,value:`Invalid value`,rows:2})]})},parameters:{docs:{description:{story:`Different field states: default, with pre-filled value, disabled, read-only, required, and error.`}}}},T={render:()=>{let[e,t]=(0,i.useState)(``);return(0,g.jsx)(`div`,{style:{maxWidth:`600px`},children:(0,g.jsx)(_,{label:`Comment`,placeholder:`Write your comment (max 100 characters)`,maxLength:100,value:e,onChange:e=>t(e.target.value),helperText:`${e.length}/100 characters`,rows:4})})},parameters:{docs:{description:{story:`Text area with a character limit and a live counter in the helper text.`}}}},E={render:()=>{let[e,t]=(0,i.useState)(``);return(0,g.jsx)(`div`,{style:{maxWidth:`600px`},children:(0,g.jsx)(_,{label:`Description`,placeholder:`Write a description (will resize automatically)`,autoResize:!0,value:e,onChange:e=>t(e.target.value),helperText:`The text area grows automatically as you type`,minRows:2,maxRows:8})})},parameters:{docs:{description:{story:`Text area with automatic resizing based on its content.`}}}},D={render:()=>{let[e,t]=(0,i.useState)(``);return(0,g.jsx)(`div`,{style:{width:`100%`},children:(0,g.jsx)(_,{label:`Comment`,fullWidth:!0,placeholder:`Write your comment here...`,value:e,onChange:e=>t(e.target.value),helperText:`This field spans the full available width`,rows:4})})},parameters:{docs:{description:{story:`Text area that expands to fill the full available width of its container.`}}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledTextArea {...args} />,
  args: {
    ...defaultArgs
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      maxWidth: '600px'
    }}>\r
        <TextArea label="Outlined" variant="outlined" placeholder="Outlined" value={value} onChange={e => setValue(e.target.value)} />\r
        <TextArea label="Filled" variant="filled" placeholder="Filled" value={value} onChange={e => setValue(e.target.value)} />\r
        <TextArea label="Standard" variant="standard" placeholder="Standard" value={value} onChange={e => setValue(e.target.value)} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Available design variants for the text area.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '600px'
    }}>\r
        <TextArea label="Small" size={ComponentSize.SMALL} placeholder="Small size" value={value} onChange={e => setValue(e.target.value)} />\r
        <TextArea label="Medium" size={ComponentSize.MEDIUM} placeholder="Medium size" value={value} onChange={e => setValue(e.target.value)} />\r
        <TextArea label="Large" size={ComponentSize.LARGE} placeholder="Large size" value={value} onChange={e => setValue(e.target.value)} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Available size options for the text area.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '600px'
    }}>\r
        <TextArea label="Default field" value={value} onChange={e => setValue(e.target.value)} placeholder="Type something..." />\r
        <TextArea label="Field with default value" defaultValue="This is the default content in the text area. You can edit it." rows={4} />\r
        <TextArea label="Disabled field" disabled value="This text area is disabled" rows={2} />\r
        <TextArea label="Read-only field" readOnly value="This text area is read-only. Its content cannot be edited." rows={3} />\r
        <TextArea label="Required field" required placeholder="This field is mandatory" rows={2} />\r
        <TextArea label="Field with error" error helperText="This field is required" value="Invalid value" rows={2} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Different field states: default, with pre-filled value, disabled, read-only, required, and error.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const maxLength = 100;
    return <div style={{
      maxWidth: '600px'
    }}>\r
        <TextArea label="Comment" placeholder="Write your comment (max 100 characters)" maxLength={maxLength} value={value} onChange={e => setValue(e.target.value)} helperText={\`\${value.length}/\${maxLength} characters\`} rows={4} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Text area with a character limit and a live counter in the helper text.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div style={{
      maxWidth: '600px'
    }}>\r
        <TextArea label="Description" placeholder="Write a description (will resize automatically)" autoResize value={value} onChange={e => setValue(e.target.value)} helperText="The text area grows automatically as you type" minRows={2} maxRows={8} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Text area with automatic resizing based on its content.'
      }
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div style={{
      width: '100%'
    }}>\r
        <TextArea label="Comment" fullWidth placeholder="Write your comment here..." value={value} onChange={e => setValue(e.target.value)} helperText="This field spans the full available width" rows={4} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Text area that expands to fill the full available width of its container.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}};var O=[`Default`,`Variants`,`Sizes`,`States`,`WithCharacterLimit`,`AutoResize`,`FullWidth`];export{E as AutoResize,x as Default,D as FullWidth,C as Sizes,w as States,S as Variants,T as WithCharacterLimit,O as __namedExportsOrder,y as default};