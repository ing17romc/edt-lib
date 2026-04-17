import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Ht as n,_t as r,bt as i,h as a,m as o,vt as s}from"./iframe-BrtTKpdh.js";var c,l=t((()=>{i(),c={label:`Label`,placeholder:`Type something...`,variant:`outlined`,size:s.MEDIUM}})),u,d,f,p,m,h,g,_,v,y,b,x,S,C;t((()=>{u=e(n(),1),a(),l(),i(),d=r(),{within:f,expect:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/TextBox`,component:o,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`outlined`,`filled`,`standard`],description:`Visual style variant of the input field.`,table:{type:{summary:`outlined | filled | standard`},defaultValue:{summary:`outlined`}}},size:{control:`select`,options:Object.values(s),description:`Size of the input field.`,table:{type:{summary:Object.values(s).join(` | `)},defaultValue:{summary:s.MEDIUM}}},type:{control:`select`,options:[`text`,`email`,`password`,`number`,`tel`,`url`,`search`],description:`HTML input type.`,table:{type:{summary:`text | email | password | number | tel | url | search`},defaultValue:{summary:`text`}}},error:{control:`boolean`,description:`When true, applies error styling to the field.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`When true, the field is non-interactive.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},fullWidth:{control:`boolean`,description:`When true, the field stretches to fill its container width.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{control:`boolean`,description:`Marks the field as required.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{control:`boolean`,description:`When true, the value can be read but not edited.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},parameters:{docs:{description:{component:`A single-line text input field. Supports outlined, filled, and standard variants, multiple sizes, input type selection, and optional start/end adornments.`}}}},h=e=>{let[t,n]=(0,u.useState)(``);return(0,d.jsx)(o,{...e,value:t,onChange:e=>n(e.target.value)})},g=()=>{let[e,t]=(0,u.useState)(``);return(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`400px`},children:[(0,d.jsx)(o,{label:`Default field`,value:e,onChange:e=>t(e.target.value),placeholder:`Type something...`}),(0,d.jsx)(o,{label:`Field with default value`,defaultValue:`Default value`}),(0,d.jsx)(o,{label:`Disabled field`,disabled:!0,placeholder:`You cannot type here`}),(0,d.jsx)(o,{label:`Read-only field`,readOnly:!0,value:`This text cannot be edited`}),(0,d.jsx)(o,{label:`Required field`,required:!0,placeholder:`This field is mandatory`}),(0,d.jsx)(o,{label:`Field with error`,error:!0,helperText:`Error message`,defaultValue:`Invalid value`})]})},_={render:e=>(0,d.jsx)(h,{...e}),args:c,play:async({canvasElement:e})=>{await p(f(e).getByLabelText(`Label`)).toBeInTheDocument()}},v={render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,maxWidth:`400px`},children:[(0,d.jsx)(o,{label:`Outlined`,variant:`outlined`,placeholder:`Outlined`}),(0,d.jsx)(o,{label:`Filled`,variant:`filled`,placeholder:`Filled`}),(0,d.jsx)(o,{label:`Standard`,variant:`standard`,placeholder:`Standard`})]}),play:async({canvasElement:e})=>{let t=f(e);await p(t.getByLabelText(`Outlined`).parentElement).toHaveClass(`variant-outlined`),await p(t.getByLabelText(`Filled`).parentElement).toHaveClass(`variant-filled`),await p(t.getByLabelText(`Standard`).parentElement).toHaveClass(`variant-standard`)},parameters:{docs:{description:{story:`Available design variants for the text field.`}}}},y={render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`400px`},children:[(0,d.jsx)(o,{label:`Small`,size:s.SMALL,placeholder:`Small size`}),(0,d.jsx)(o,{label:`Medium`,size:s.MEDIUM,placeholder:`Medium size`}),(0,d.jsx)(o,{label:`Large`,size:s.LARGE,placeholder:`Large size`})]}),play:async({canvasElement:e})=>{let t=f(e);await p(t.getByLabelText(`Small`).parentElement).toHaveClass(`size-small`),await p(t.getByLabelText(`Medium`).parentElement).toHaveClass(`size-medium`),await p(t.getByLabelText(`Large`).parentElement).toHaveClass(`size-large`)},parameters:{docs:{description:{story:`Available size options for the text field.`}}}},b={render:()=>(0,d.jsx)(g,{}),parameters:{docs:{description:{story:`Different field states: default, with value, disabled, read-only, required, and error.`}}}},x={render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`400px`},children:[(0,d.jsx)(o,{label:`With start icon`,startAdornment:(0,d.jsx)(`span`,{style:{fontSize:`20px`},children:`🔍`}),placeholder:`Search...`}),(0,d.jsx)(o,{label:`With end icon`,endAdornment:(0,d.jsx)(`span`,{style:{fontSize:`20px`},children:`🔒`}),type:`password`,placeholder:`Password`}),(0,d.jsx)(o,{label:`With icons on both sides`,startAdornment:(0,d.jsx)(`span`,{style:{fontSize:`20px`},children:`🔢`}),endAdornment:(0,d.jsx)(`span`,{style:{fontSize:`14px`,color:`#666`},children:`Numbers`}),type:`number`,placeholder:`Numbers only`})]}),parameters:{docs:{description:{story:`Text fields with optional start or end adornments (icons or text elements).`}}}},S={render:()=>(0,d.jsx)(`div`,{style:{width:`100%`},children:(0,d.jsx)(o,{label:`Full-width field`,fullWidth:!0,placeholder:`This field fills the full available width`})}),parameters:{docs:{description:{story:`Text field that expands to fill the full width of its container.`}}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledTextBox {...args} />,
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByLabelText('Label')).toBeInTheDocument();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '400px'
  }}>\r
      <TextBox label="Outlined" variant="outlined" placeholder="Outlined" />\r
      <TextBox label="Filled" variant="filled" placeholder="Filled" />\r
      <TextBox label="Standard" variant="standard" placeholder="Standard" />\r
    </div>,
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
        story: 'Available design variants for the text field.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '400px'
  }}>\r
      <TextBox label="Small" size={ComponentSize.SMALL} placeholder="Small size" />\r
      <TextBox label="Medium" size={ComponentSize.MEDIUM} placeholder="Medium size" />\r
      <TextBox label="Large" size={ComponentSize.LARGE} placeholder="Large size" />\r
    </div>,
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
        story: 'Available size options for the text field.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <TextBoxStatesStory />,
  parameters: {
    docs: {
      description: {
        story: 'Different field states: default, with value, disabled, read-only, required, and error.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '400px'
  }}>\r
      <TextBox label="With start icon" startAdornment={<span style={{
      fontSize: '20px'
    }}>&#128269;</span>} placeholder="Search..." />\r
      <TextBox label="With end icon" endAdornment={<span style={{
      fontSize: '20px'
    }}>&#128274;</span>} type="password" placeholder="Password" />\r
      <TextBox label="With icons on both sides" startAdornment={<span style={{
      fontSize: '20px'
    }}>&#128290;</span>} endAdornment={<span style={{
      fontSize: '14px',
      color: '#666'
    }}>Numbers</span>} type="number" placeholder="Numbers only" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Text fields with optional start or end adornments (icons or text elements).'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%'
  }}>\r
      <TextBox label="Full-width field" fullWidth placeholder="This field fills the full available width" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Text field that expands to fill the full width of its container.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`Variants`,`Sizes`,`States`,`WithAdornments`,`FullWidth`]}))();export{_ as Default,S as FullWidth,y as Sizes,b as States,v as Variants,x as WithAdornments,C as __namedExportsOrder,m as default};