import{r as e,t}from"./iframe-BwpCWMiM.js";import{t as n}from"./jsx-runtime-BsbbwSUz.js";import{t as r}from"./types-BTwUNDvM.js";var i=e(t(),1),a=`_textBoxContainer_1dh30_1`,o=`_fullWidth_1dh30_9`,s=`_label_1dh30_13`,c=`_disabled_1dh30_21`,l=`_error_1dh30_24`,u=`_inputWrapper_1dh30_28`,d=`_input_1dh30_28`,f=`_startAdornment_1dh30_136`,p=`_endAdornment_1dh30_137`,m=`_helperText_1dh30_152`,h=`_hasStartAdornment_1dh30_163`,g=`_hasEndAdornment_1dh30_167`,_={textBoxContainer:a,fullWidth:o,label:s,disabled:c,error:l,inputWrapper:u,"variant-outlined":`_variant-outlined_1dh30_37`,"variant-filled":`_variant-filled_1dh30_51`,"variant-standard":`_variant-standard_1dh30_66`,"size-small":`_size-small_1dh30_79`,"size-medium":`_size-medium_1dh30_83`,"size-large":`_size-large_1dh30_87`,input:d,startAdornment:f,endAdornment:p,helperText:m,hasStartAdornment:h,hasEndAdornment:g},v=n(),y=(0,i.forwardRef)(({label:e,helperText:t,error:n=!1,fullWidth:a=!1,variant:o=`outlined`,size:s=r.MEDIUM,startAdornment:c,endAdornment:l,className:u=``,containerClassName:d=``,labelClassName:f=``,inputClassName:p=``,helperTextClassName:m=``,disabled:h=!1,id:g,...y},b)=>{let x=(0,i.useId)(),S=g||`textbox-${x}`,C=t?`${S}-helper-text`:void 0,w=[_.textBoxContainer,a?_.fullWidth:``,d].filter(Boolean).join(` `),T=a?{width:`100%`,display:`block`}:void 0,E=a?{width:`100%`,maxWidth:`100%`,boxSizing:`border-box`}:void 0,D=[_.label,h?_.disabled:``,n?_.error:``,f].filter(Boolean).join(` `),O=[_.inputWrapper,_[`variant-${o}`],_[`size-${s}`],n?_.error:``,h?_.disabled:``,u].filter(Boolean).join(` `),k=[_.input,c?_.hasStartAdornment:``,l?_.hasEndAdornment:``,p].filter(Boolean).join(` `),A=[_.helperText,n?_.error:``,m].filter(Boolean).join(` `);return(0,v.jsxs)(`div`,{className:w,style:T,children:[e&&(0,v.jsx)(`label`,{htmlFor:S,className:D,children:e}),(0,v.jsxs)(`div`,{className:O,style:E,children:[c&&(0,v.jsx)(`span`,{className:_.startAdornment,children:c}),(0,v.jsx)(`input`,{id:S,type:`text`,ref:b,className:k,disabled:h,"aria-invalid":n,"aria-describedby":C,style:a?{width:`100%`}:void 0,...y}),l&&(0,v.jsx)(`span`,{className:_.endAdornment,children:l})]}),t&&(0,v.jsx)(`p`,{id:C,className:A,children:t})]})});y.displayName=`TextBox`,y.__docgenInfo={description:`Text field component that allows single-line text input.\r
Supports different variants, sizes, and states.`,methods:[],displayName:`TextBox`,props:{label:{required:!1,tsType:{name:`string`},description:`Label displayed above the text field`},helperText:{required:!1,tsType:{name:`string`},description:`Helper text displayed below the field`},error:{required:!1,tsType:{name:`boolean`},description:`If true, shows an error indicator\r
@default false`,defaultValue:{value:`false`,computed:!1}},fullWidth:{required:!1,tsType:{name:`boolean`},description:`If true, the field takes up the full available width\r
@default false`,defaultValue:{value:`false`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'outlined' | 'filled' | 'standard'`,elements:[{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'filled'`},{name:`literal`,value:`'standard'`}]},description:`Design variant of the text field\r
@default 'outlined'`,defaultValue:{value:`'outlined'`,computed:!1}},size:{required:!1,tsType:{name:`ComponentSize`},description:`Text field size\r
@default 'medium'`,defaultValue:{value:`ComponentSize.MEDIUM`,computed:!0}},startAdornment:{required:!1,tsType:{name:`ReactNode`},description:`Element displayed at the start of the field`},endAdornment:{required:!1,tsType:{name:`ReactNode`},description:`Element displayed at the end of the field`},containerClassName:{required:!1,tsType:{name:`string`},description:`Custom CSS class for the container`,defaultValue:{value:`''`,computed:!1}},labelClassName:{required:!1,tsType:{name:`string`},description:`Custom CSS class for the label`,defaultValue:{value:`''`,computed:!1}},inputClassName:{required:!1,tsType:{name:`string`},description:`Custom CSS class for the input field`,defaultValue:{value:`''`,computed:!1}},helperTextClassName:{required:!1,tsType:{name:`string`},description:`Custom CSS class for the helper text`,defaultValue:{value:`''`,computed:!1}},className:{defaultValue:{value:`''`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1}},composes:[`Omit`]};var b={label:`Label`,placeholder:`Type something...`,variant:`outlined`,size:r.MEDIUM},x={title:`Components/TextBox`,component:y,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`outlined`,`filled`,`standard`],description:`Visual style variant of the input field.`,table:{type:{summary:`outlined | filled | standard`},defaultValue:{summary:`outlined`}}},size:{control:`select`,options:Object.values(r),description:`Size of the input field.`,table:{type:{summary:Object.values(r).join(` | `)},defaultValue:{summary:r.MEDIUM}}},type:{control:`select`,options:[`text`,`email`,`password`,`number`,`tel`,`url`,`search`],description:`HTML input type.`,table:{type:{summary:`text | email | password | number | tel | url | search`},defaultValue:{summary:`text`}}},error:{control:`boolean`,description:`When true, applies error styling to the field.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`When true, the field is non-interactive.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},fullWidth:{control:`boolean`,description:`When true, the field stretches to fill its container width.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{control:`boolean`,description:`Marks the field as required.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{control:`boolean`,description:`When true, the value can be read but not edited.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},parameters:{docs:{description:{component:`A single-line text input field. Supports outlined, filled, and standard variants, multiple sizes, input type selection, and optional start/end adornments.`}}}},S=e=>{let[t,n]=(0,i.useState)(``);return(0,v.jsx)(y,{...e,value:t,onChange:e=>n(e.target.value)})},C={render:e=>(0,v.jsx)(S,{...e}),args:b},w={render:()=>(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,maxWidth:`400px`},children:[(0,v.jsx)(y,{label:`Outlined`,variant:`outlined`,placeholder:`Outlined`}),(0,v.jsx)(y,{label:`Filled`,variant:`filled`,placeholder:`Filled`}),(0,v.jsx)(y,{label:`Standard`,variant:`standard`,placeholder:`Standard`})]}),parameters:{docs:{description:{story:`Available design variants for the text field.`}}}},T={render:()=>(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`400px`},children:[(0,v.jsx)(y,{label:`Small`,size:r.SMALL,placeholder:`Small size`}),(0,v.jsx)(y,{label:`Medium`,size:r.MEDIUM,placeholder:`Medium size`}),(0,v.jsx)(y,{label:`Large`,size:r.LARGE,placeholder:`Large size`})]}),parameters:{docs:{description:{story:`Available size options for the text field.`}}}},E={render:()=>{let[e,t]=(0,i.useState)(``);return(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`400px`},children:[(0,v.jsx)(y,{label:`Default field`,value:e,onChange:e=>t(e.target.value),placeholder:`Type something...`}),(0,v.jsx)(y,{label:`Field with default value`,defaultValue:`Default value`}),(0,v.jsx)(y,{label:`Disabled field`,disabled:!0,placeholder:`You cannot type here`}),(0,v.jsx)(y,{label:`Read-only field`,readOnly:!0,value:`This text cannot be edited`}),(0,v.jsx)(y,{label:`Required field`,required:!0,placeholder:`This field is mandatory`}),(0,v.jsx)(y,{label:`Field with error`,error:!0,helperText:`Error message`,defaultValue:`Invalid value`})]})},parameters:{docs:{description:{story:`Different field states: default, with value, disabled, read-only, required, and error.`}}}},D={render:()=>(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`400px`},children:[(0,v.jsx)(y,{label:`With start icon`,startAdornment:(0,v.jsx)(`span`,{style:{fontSize:`20px`},children:`🔍`}),placeholder:`Search...`}),(0,v.jsx)(y,{label:`With end icon`,endAdornment:(0,v.jsx)(`span`,{style:{fontSize:`20px`},children:`🔒`}),type:`password`,placeholder:`Password`}),(0,v.jsx)(y,{label:`With icons on both sides`,startAdornment:(0,v.jsx)(`span`,{style:{fontSize:`20px`},children:`🔢`}),endAdornment:(0,v.jsx)(`span`,{style:{fontSize:`14px`,color:`#666`},children:`Numbers`}),type:`number`,placeholder:`Numbers only`})]}),parameters:{docs:{description:{story:`Text fields with optional start or end adornments (icons or text elements).`}}}},O={render:()=>(0,v.jsx)(`div`,{style:{width:`100%`},children:(0,v.jsx)(y,{label:`Full-width field`,fullWidth:!0,placeholder:`This field fills the full available width`})}),parameters:{docs:{description:{story:`Text field that expands to fill the full width of its container.`}}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledTextBox {...args} />,
  args: defaultArgs
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      description: {
        story: 'Available design variants for the text field.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      description: {
        story: 'Available size options for the text field.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>\r
        <TextBox label="Default field" value={value} onChange={e => setValue(e.target.value)} placeholder="Type something..." />\r
        <TextBox label="Field with default value" defaultValue="Default value" />\r
        <TextBox label="Disabled field" disabled placeholder="You cannot type here" />\r
        <TextBox label="Read-only field" readOnly value="This text cannot be edited" />\r
        <TextBox label="Required field" required placeholder="This field is mandatory" />\r
        <TextBox label="Field with error" error helperText="Error message" defaultValue="Invalid value" />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Different field states: default, with value, disabled, read-only, required, and error.'
      }
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};var k=[`Default`,`Variants`,`Sizes`,`States`,`WithAdornments`,`FullWidth`];export{C as Default,O as FullWidth,T as Sizes,E as States,w as Variants,D as WithAdornments,k as __namedExportsOrder,x as default};