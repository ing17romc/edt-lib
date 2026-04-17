import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Ht as n,_ as r,_t as i,bt as a,g as o,vt as s}from"./iframe-BrtTKpdh.js";var c,l=t((()=>{a(),c={label:`Description`,placeholder:`Type something...`,variant:`outlined`,size:s.MEDIUM,rows:3}})),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;t((()=>{u=e(n(),1),r(),l(),a(),d=i(),{within:f,expect:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/TextArea`,component:o,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`outlined`,`filled`,`standard`],description:`Visual style variant of the text area.`,table:{type:{summary:`outlined | filled | standard`},defaultValue:{summary:`outlined`}}},size:{control:`select`,options:Object.values(s),description:`Size of the text area field.`,table:{type:{summary:Object.values(s).join(` | `)},defaultValue:{summary:s.MEDIUM}}},rows:{control:{type:`number`,min:1,max:20},description:`Minimum number of visible text rows.`,table:{type:{summary:`number`}}},maxLength:{control:{type:`number`,min:1},description:`Maximum number of characters the user can enter.`,table:{type:{summary:`number`}}},error:{control:`boolean`,description:`When true, applies error styling to the field.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`When true, the field is non-interactive.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},fullWidth:{control:`boolean`,description:`When true, the field stretches to fill its container width.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{control:`boolean`,description:`Marks the field as required.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{control:`boolean`,description:`When true, the value can be read but not edited.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},autoResize:{control:`boolean`,description:`When true, the field height adjusts automatically as the user types.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},parameters:{docs:{description:{component:`A multi-line text input field. Supports outlined, filled, and standard variants, multiple sizes, character limits, and automatic height resizing.`}}}},h=e=>{let[t,n]=(0,u.useState)(``);return(0,d.jsx)(o,{...e,value:t,onChange:e=>n(e.target.value)})},g=()=>{let[e,t]=(0,u.useState)(``);return(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,maxWidth:`600px`},children:[(0,d.jsx)(o,{label:`Outlined`,variant:`outlined`,placeholder:`Outlined`,value:e,onChange:e=>t(e.target.value)}),(0,d.jsx)(o,{label:`Filled`,variant:`filled`,placeholder:`Filled`,value:e,onChange:e=>t(e.target.value)}),(0,d.jsx)(o,{label:`Standard`,variant:`standard`,placeholder:`Standard`,value:e,onChange:e=>t(e.target.value)})]})},_=()=>{let[e,t]=(0,u.useState)(``);return(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`600px`},children:[(0,d.jsx)(o,{label:`Small`,size:s.SMALL,placeholder:`Small size`,value:e,onChange:e=>t(e.target.value)}),(0,d.jsx)(o,{label:`Medium`,size:s.MEDIUM,placeholder:`Medium size`,value:e,onChange:e=>t(e.target.value)}),(0,d.jsx)(o,{label:`Large`,size:s.LARGE,placeholder:`Large size`,value:e,onChange:e=>t(e.target.value)})]})},v=()=>{let[e,t]=(0,u.useState)(``);return(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`600px`},children:[(0,d.jsx)(o,{label:`Default field`,value:e,onChange:e=>t(e.target.value),placeholder:`Type something...`}),(0,d.jsx)(o,{label:`Field with default value`,defaultValue:`This is the default content in the text area. You can edit it.`,rows:4}),(0,d.jsx)(o,{label:`Disabled field`,disabled:!0,value:`This text area is disabled`,rows:2}),(0,d.jsx)(o,{label:`Read-only field`,readOnly:!0,value:`This text area is read-only. Its content cannot be edited.`,rows:3}),(0,d.jsx)(o,{label:`Required field`,required:!0,placeholder:`This field is mandatory`,rows:2}),(0,d.jsx)(o,{label:`Field with error`,error:!0,helperText:`This field is required`,value:`Invalid value`,rows:2})]})},y=()=>{let[e,t]=(0,u.useState)(``);return(0,d.jsx)(`div`,{style:{maxWidth:`600px`},children:(0,d.jsx)(o,{label:`Comment`,placeholder:`Write your comment (max 100 characters)`,maxLength:100,value:e,onChange:e=>t(e.target.value),helperText:`${e.length}/100 characters`,rows:4})})},b=()=>{let[e,t]=(0,u.useState)(``);return(0,d.jsx)(`div`,{style:{maxWidth:`600px`},children:(0,d.jsx)(o,{label:`Description`,placeholder:`Write a description (will resize automatically)`,autoResize:!0,value:e,onChange:e=>t(e.target.value),helperText:`The text area grows automatically as you type`,minRows:2,maxRows:8})})},x=()=>{let[e,t]=(0,u.useState)(``);return(0,d.jsx)(`div`,{style:{width:`100%`},children:(0,d.jsx)(o,{label:`Comment`,fullWidth:!0,placeholder:`Write your comment here...`,value:e,onChange:e=>t(e.target.value),helperText:`This field spans the full available width`,rows:4})})},S={render:e=>(0,d.jsx)(h,{...e}),args:{...c},play:async({canvasElement:e})=>{await p(f(e).getByLabelText(`Description`)).toBeInTheDocument()}},C={render:()=>(0,d.jsx)(g,{}),play:async({canvasElement:e})=>{let t=f(e);await p(t.getByLabelText(`Outlined`).parentElement).toHaveClass(`variant-outlined`),await p(t.getByLabelText(`Filled`).parentElement).toHaveClass(`variant-filled`),await p(t.getByLabelText(`Standard`).parentElement).toHaveClass(`variant-standard`)},parameters:{docs:{description:{story:`Available design variants for the text area.`}}}},w={render:()=>(0,d.jsx)(_,{}),play:async({canvasElement:e})=>{let t=f(e);await p(t.getByLabelText(`Small`).parentElement).toHaveClass(`size-small`),await p(t.getByLabelText(`Medium`).parentElement).toHaveClass(`size-medium`),await p(t.getByLabelText(`Large`).parentElement).toHaveClass(`size-large`)},parameters:{docs:{description:{story:`Available size options for the text area.`}}}},T={render:()=>(0,d.jsx)(v,{}),parameters:{docs:{description:{story:`Different field states: default, with pre-filled value, disabled, read-only, required, and error.`}}}},E={render:()=>(0,d.jsx)(y,{}),parameters:{docs:{description:{story:`Text area with a character limit and a live counter in the helper text.`}}}},D={render:()=>(0,d.jsx)(b,{}),parameters:{docs:{description:{story:`Text area with automatic resizing based on its content.`}}}},O={render:()=>(0,d.jsx)(x,{}),parameters:{docs:{description:{story:`Text area that expands to fill the full available width of its container.`}}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <TextAreaStatesStory />,
  parameters: {
    docs: {
      description: {
        story: 'Different field states: default, with pre-filled value, disabled, read-only, required, and error.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <TextAreaCharacterLimitStory />,
  parameters: {
    docs: {
      description: {
        story: 'Text area with a character limit and a live counter in the helper text.'
      }
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <TextAreaAutoResizeStory />,
  parameters: {
    docs: {
      description: {
        story: 'Text area with automatic resizing based on its content.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <TextAreaFullWidthStory />,
  parameters: {
    docs: {
      description: {
        story: 'Text area that expands to fill the full available width of its container.'
      }
    }
  }
}`,...O.parameters?.docs?.source}}},k=[`Default`,`Variants`,`Sizes`,`States`,`WithCharacterLimit`,`AutoResize`,`FullWidth`]}))();export{D as AutoResize,S as Default,O as FullWidth,w as Sizes,T as States,C as Variants,E as WithCharacterLimit,k as __namedExportsOrder,m as default};