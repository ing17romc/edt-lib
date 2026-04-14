import{a as e,n as t}from"./chunk-BneVvdWh.js";import{O as n,i as r}from"./iframe-BoT0I_bJ.js";import{r as i,t as a}from"./types-SSqGpC_M.js";var o,s,c,l,u,d,f,p,m,h,g,_=t((()=>{o=`_textAreaContainer_llf2o_1`,s=`_fullWidth_llf2o_9`,c=`_label_llf2o_13`,l=`_disabled_llf2o_21`,u=`_error_llf2o_24`,d=`_textareaWrapper_llf2o_28`,f=`_textarea_llf2o_28`,p=`_charCount_llf2o_151`,m=`_helperContainer_llf2o_167`,h=`_helperText_llf2o_174`,g={textAreaContainer:o,fullWidth:s,label:c,disabled:l,error:u,textareaWrapper:d,"variant-outlined":`_variant-outlined_llf2o_40`,"size-small":`_size-small_llf2o_54`,textarea:f,"size-medium":`_size-medium_llf2o_61`,"size-large":`_size-large_llf2o_68`,"variant-standard":`_variant-standard_llf2o_75`,"variant-filled":`_variant-filled_llf2o_91`,charCount:p,helperContainer:m,helperText:h}})),v,y,b,x=t((()=>{v=e(n(),1),i(),_(),y=r(),b=(0,v.forwardRef)(({label:e,helperText:t,error:n=!1,fullWidth:r=!1,variant:i=`outlined`,size:o=a.MEDIUM,rows:s=3,maxLength:c,autoResize:l=!1,minRows:u,maxRows:d,className:f=``,containerClassName:p=``,labelClassName:m=``,textareaClassName:h=``,helperTextClassName:_=``,disabled:b=!1,onChange:x,style:S,id:C,...w},T)=>{let E=(0,v.useRef)(null),D=(0,v.useId)(),O=C||`textarea-${D}`,k=t?`${O}-helper-text`:void 0,A=e=>{E.current=e,typeof T==`function`?T(e):T&&(T.current=e)},j=(0,v.useCallback)(()=>{if(l&&E.current){let e=E.current;e.style.height=`auto`;let t=window.getComputedStyle(e),n=parseFloat(t.lineHeight),r=parseFloat(t.paddingTop),i=parseFloat(t.paddingBottom),a=parseFloat(t.borderTopWidth),o=parseFloat(t.borderBottomWidth),s=r+i+a+o,c=u&&n?u*n+s:-1/0,l=d&&n?d*n+s:1/0,f=e.scrollHeight,p=Math.max(c,Math.min(f,l));e.style.height=`${p}px`,l!==1/0&&f>l?e.style.overflow=`auto`:e.style.overflow=`hidden`}},[l,u,d]);(0,v.useEffect)(()=>{l&&j()},[l,j]);let M=e=>{l&&j(),x&&x(e)},N=[g.textAreaContainer,r?g.fullWidth:``,p,f].filter(Boolean).join(` `),P=[g.label,b?g.disabled:``,n?g.error:``,m].filter(Boolean).join(` `),F=[g.textareaWrapper,g[`variant-${i}`],g[`size-${o}`],n?g.error:``,b?g.disabled:``].filter(Boolean).join(` `),I=[g.textarea,h].filter(Boolean).join(` `),L=[g.helperText,n?g.error:``,_].filter(Boolean).join(` `),R=c&&w.value?`${String(w.value).length}/${c}`:null;return(0,y.jsxs)(`div`,{className:N,style:S,children:[e&&(0,y.jsx)(`label`,{htmlFor:O,className:P,children:e}),(0,y.jsxs)(`div`,{className:F,children:[(0,y.jsx)(`textarea`,{id:O,ref:A,className:I,disabled:b,"aria-invalid":n,"aria-describedby":k,rows:s,maxLength:c,onChange:M,...w}),c&&(0,y.jsx)(`div`,{className:g.charCount,children:R})]}),(t||R)&&(0,y.jsx)(`div`,{className:g.helperContainer,children:t&&(0,y.jsx)(`p`,{id:k,className:L,children:t})})]})}),b.displayName=`TextArea`,b.__docgenInfo={description:`Text area component that allows multi-line text input.\r
Supports different variants, sizes, and auto-resize.`,methods:[],displayName:`TextArea`,props:{"data-testid":{required:!1,tsType:{name:`string`},description:``},label:{required:!1,tsType:{name:`string`},description:`Label displayed above the textarea`},helperText:{required:!1,tsType:{name:`string`},description:`Helper text displayed below the textarea`},error:{required:!1,tsType:{name:`boolean`},description:`If true, shows an error indicator\r
@default false`,defaultValue:{value:`false`,computed:!1}},fullWidth:{required:!1,tsType:{name:`boolean`},description:`If true, the textarea takes up the full available width\r
@default false`,defaultValue:{value:`false`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'outlined' | 'filled' | 'standard'`,elements:[{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'filled'`},{name:`literal`,value:`'standard'`}]},description:`Design variant of the textarea\r
@default 'outlined'`,defaultValue:{value:`'outlined'`,computed:!1}},size:{required:!1,tsType:{name:`ComponentSize`},description:`Textarea size\r
@default 'medium'`,defaultValue:{value:`ComponentSize.MEDIUM`,computed:!0}},rows:{required:!1,tsType:{name:`number`},description:`Default number of rows\r
@default 3`,defaultValue:{value:`3`,computed:!1}},maxLength:{required:!1,tsType:{name:`number`},description:`Maximum number of characters allowed`},autoResize:{required:!1,tsType:{name:`boolean`},description:`If true, the textarea resizes automatically based on content\r
@default false`,defaultValue:{value:`false`,computed:!1}},minRows:{required:!1,tsType:{name:`number`},description:`Minimum number of rows when autoResize is true`},maxRows:{required:!1,tsType:{name:`number`},description:`Maximum number of rows when autoResize is true`},containerClassName:{required:!1,tsType:{name:`string`},description:`Custom CSS class for the container`,defaultValue:{value:`''`,computed:!1}},labelClassName:{required:!1,tsType:{name:`string`},description:`Custom CSS class for the label`,defaultValue:{value:`''`,computed:!1}},textareaClassName:{required:!1,tsType:{name:`string`},description:`Custom CSS class for the textarea`,defaultValue:{value:`''`,computed:!1}},helperTextClassName:{required:!1,tsType:{name:`string`},description:`Custom CSS class for the helper text`,defaultValue:{value:`''`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.ChangeEvent<HTMLTextAreaElement>) => void`,signature:{arguments:[{type:{name:`ReactChangeEvent`,raw:`React.ChangeEvent<HTMLTextAreaElement>`,elements:[{name:`HTMLTextAreaElement`}]},name:`event`}],return:{name:`void`}}},description:`Function called when the textarea value changes`},className:{defaultValue:{value:`''`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1}},composes:[`Omit`]}})),S,C=t((()=>{i(),S={label:`Description`,placeholder:`Type something...`,variant:`outlined`,size:a.MEDIUM,rows:3}})),w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;t((()=>{w=e(n(),1),x(),C(),i(),T=r(),{within:E,expect:D}=__STORYBOOK_MODULE_TEST__,O={title:`Components/TextArea`,component:b,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`outlined`,`filled`,`standard`],description:`Visual style variant of the text area.`,table:{type:{summary:`outlined | filled | standard`},defaultValue:{summary:`outlined`}}},size:{control:`select`,options:Object.values(a),description:`Size of the text area field.`,table:{type:{summary:Object.values(a).join(` | `)},defaultValue:{summary:a.MEDIUM}}},rows:{control:{type:`number`,min:1,max:20},description:`Minimum number of visible text rows.`,table:{type:{summary:`number`}}},maxLength:{control:{type:`number`,min:1},description:`Maximum number of characters the user can enter.`,table:{type:{summary:`number`}}},error:{control:`boolean`,description:`When true, applies error styling to the field.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`When true, the field is non-interactive.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},fullWidth:{control:`boolean`,description:`When true, the field stretches to fill its container width.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{control:`boolean`,description:`Marks the field as required.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{control:`boolean`,description:`When true, the value can be read but not edited.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},autoResize:{control:`boolean`,description:`When true, the field height adjusts automatically as the user types.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},parameters:{docs:{description:{component:`A multi-line text input field. Supports outlined, filled, and standard variants, multiple sizes, character limits, and automatic height resizing.`}}}},k=e=>{let[t,n]=(0,w.useState)(``);return(0,T.jsx)(b,{...e,value:t,onChange:e=>n(e.target.value)})},A=()=>{let[e,t]=(0,w.useState)(``);return(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,maxWidth:`600px`},children:[(0,T.jsx)(b,{label:`Outlined`,variant:`outlined`,placeholder:`Outlined`,value:e,onChange:e=>t(e.target.value)}),(0,T.jsx)(b,{label:`Filled`,variant:`filled`,placeholder:`Filled`,value:e,onChange:e=>t(e.target.value)}),(0,T.jsx)(b,{label:`Standard`,variant:`standard`,placeholder:`Standard`,value:e,onChange:e=>t(e.target.value)})]})},j=()=>{let[e,t]=(0,w.useState)(``);return(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`600px`},children:[(0,T.jsx)(b,{label:`Small`,size:a.SMALL,placeholder:`Small size`,value:e,onChange:e=>t(e.target.value)}),(0,T.jsx)(b,{label:`Medium`,size:a.MEDIUM,placeholder:`Medium size`,value:e,onChange:e=>t(e.target.value)}),(0,T.jsx)(b,{label:`Large`,size:a.LARGE,placeholder:`Large size`,value:e,onChange:e=>t(e.target.value)})]})},M=()=>{let[e,t]=(0,w.useState)(``);return(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`600px`},children:[(0,T.jsx)(b,{label:`Default field`,value:e,onChange:e=>t(e.target.value),placeholder:`Type something...`}),(0,T.jsx)(b,{label:`Field with default value`,defaultValue:`This is the default content in the text area. You can edit it.`,rows:4}),(0,T.jsx)(b,{label:`Disabled field`,disabled:!0,value:`This text area is disabled`,rows:2}),(0,T.jsx)(b,{label:`Read-only field`,readOnly:!0,value:`This text area is read-only. Its content cannot be edited.`,rows:3}),(0,T.jsx)(b,{label:`Required field`,required:!0,placeholder:`This field is mandatory`,rows:2}),(0,T.jsx)(b,{label:`Field with error`,error:!0,helperText:`This field is required`,value:`Invalid value`,rows:2})]})},N=()=>{let[e,t]=(0,w.useState)(``);return(0,T.jsx)(`div`,{style:{maxWidth:`600px`},children:(0,T.jsx)(b,{label:`Comment`,placeholder:`Write your comment (max 100 characters)`,maxLength:100,value:e,onChange:e=>t(e.target.value),helperText:`${e.length}/100 characters`,rows:4})})},P=()=>{let[e,t]=(0,w.useState)(``);return(0,T.jsx)(`div`,{style:{maxWidth:`600px`},children:(0,T.jsx)(b,{label:`Description`,placeholder:`Write a description (will resize automatically)`,autoResize:!0,value:e,onChange:e=>t(e.target.value),helperText:`The text area grows automatically as you type`,minRows:2,maxRows:8})})},F=()=>{let[e,t]=(0,w.useState)(``);return(0,T.jsx)(`div`,{style:{width:`100%`},children:(0,T.jsx)(b,{label:`Comment`,fullWidth:!0,placeholder:`Write your comment here...`,value:e,onChange:e=>t(e.target.value),helperText:`This field spans the full available width`,rows:4})})},I={render:e=>(0,T.jsx)(k,{...e}),args:{...S},play:async({canvasElement:e})=>{await D(E(e).getByLabelText(`Description`)).toBeInTheDocument()}},L={render:()=>(0,T.jsx)(A,{}),play:async({canvasElement:e})=>{let t=E(e);await D(t.getByLabelText(`Outlined`).parentElement).toHaveClass(`variant-outlined`),await D(t.getByLabelText(`Filled`).parentElement).toHaveClass(`variant-filled`),await D(t.getByLabelText(`Standard`).parentElement).toHaveClass(`variant-standard`)},parameters:{docs:{description:{story:`Available design variants for the text area.`}}}},R={render:()=>(0,T.jsx)(j,{}),play:async({canvasElement:e})=>{let t=E(e);await D(t.getByLabelText(`Small`).parentElement).toHaveClass(`size-small`),await D(t.getByLabelText(`Medium`).parentElement).toHaveClass(`size-medium`),await D(t.getByLabelText(`Large`).parentElement).toHaveClass(`size-large`)},parameters:{docs:{description:{story:`Available size options for the text area.`}}}},z={render:()=>(0,T.jsx)(M,{}),parameters:{docs:{description:{story:`Different field states: default, with pre-filled value, disabled, read-only, required, and error.`}}}},B={render:()=>(0,T.jsx)(N,{}),parameters:{docs:{description:{story:`Text area with a character limit and a live counter in the helper text.`}}}},V={render:()=>(0,T.jsx)(P,{}),parameters:{docs:{description:{story:`Text area with automatic resizing based on its content.`}}}},H={render:()=>(0,T.jsx)(F,{}),parameters:{docs:{description:{story:`Text area that expands to fill the full available width of its container.`}}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledTextArea {...args} />,
  args: {
    ...defaultArgs
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByLabelText('Description')).toBeInTheDocument();
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <TextAreaVariantsStory />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByLabelText('Outlined').parentElement).toHaveClass('variant-outlined');
    await expect(canvas.getByLabelText('Filled').parentElement).toHaveClass('variant-filled');
    await expect(canvas.getByLabelText('Standard').parentElement).toHaveClass('variant-standard');
  },
  parameters: {
    docs: {
      description: {
        story: 'Available design variants for the text area.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <TextAreaSizesStory />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByLabelText('Small').parentElement).toHaveClass('size-small');
    await expect(canvas.getByLabelText('Medium').parentElement).toHaveClass('size-medium');
    await expect(canvas.getByLabelText('Large').parentElement).toHaveClass('size-large');
  },
  parameters: {
    docs: {
      description: {
        story: 'Available size options for the text area.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <TextAreaStatesStory />,
  parameters: {
    docs: {
      description: {
        story: 'Different field states: default, with pre-filled value, disabled, read-only, required, and error.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <TextAreaCharacterLimitStory />,
  parameters: {
    docs: {
      description: {
        story: 'Text area with a character limit and a live counter in the helper text.'
      }
    }
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <TextAreaAutoResizeStory />,
  parameters: {
    docs: {
      description: {
        story: 'Text area with automatic resizing based on its content.'
      }
    }
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <TextAreaFullWidthStory />,
  parameters: {
    docs: {
      description: {
        story: 'Text area that expands to fill the full available width of its container.'
      }
    }
  }
}`,...H.parameters?.docs?.source}}},U=[`Default`,`Variants`,`Sizes`,`States`,`WithCharacterLimit`,`AutoResize`,`FullWidth`]}))();export{V as AutoResize,I as Default,H as FullWidth,R as Sizes,z as States,L as Variants,B as WithCharacterLimit,U as __namedExportsOrder,O as default};