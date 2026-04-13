import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-DoW-sQG_.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{r as i,t as a}from"./types-Duki_pzD.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y=t((()=>{o=`_textBoxContainer_1dh30_1`,s=`_fullWidth_1dh30_9`,c=`_label_1dh30_13`,l=`_disabled_1dh30_21`,u=`_error_1dh30_24`,d=`_inputWrapper_1dh30_28`,f=`_input_1dh30_28`,p=`_startAdornment_1dh30_136`,m=`_endAdornment_1dh30_137`,h=`_helperText_1dh30_152`,g=`_hasStartAdornment_1dh30_163`,_=`_hasEndAdornment_1dh30_167`,v={textBoxContainer:o,fullWidth:s,label:c,disabled:l,error:u,inputWrapper:d,"variant-outlined":`_variant-outlined_1dh30_37`,"variant-filled":`_variant-filled_1dh30_51`,"variant-standard":`_variant-standard_1dh30_66`,"size-small":`_size-small_1dh30_79`,"size-medium":`_size-medium_1dh30_83`,"size-large":`_size-large_1dh30_87`,input:f,startAdornment:p,endAdornment:m,helperText:h,hasStartAdornment:g,hasEndAdornment:_}})),b,x,S,C=t((()=>{b=e(n(),1),i(),y(),x=r(),S=(0,b.forwardRef)(({label:e,helperText:t,error:n=!1,fullWidth:r=!1,variant:i=`outlined`,size:o=a.MEDIUM,startAdornment:s,endAdornment:c,className:l=``,containerClassName:u=``,labelClassName:d=``,inputClassName:f=``,helperTextClassName:p=``,disabled:m=!1,id:h,...g},_)=>{let y=(0,b.useId)(),S=h||`textbox-${y}`,C=t?`${S}-helper-text`:void 0,w=[v.textBoxContainer,r?v.fullWidth:``,u].filter(Boolean).join(` `),T=r?{width:`100%`,display:`block`}:void 0,E=r?{width:`100%`,maxWidth:`100%`,boxSizing:`border-box`}:void 0,D=[v.label,m?v.disabled:``,n?v.error:``,d].filter(Boolean).join(` `),O=[v.inputWrapper,v[`variant-${i}`],v[`size-${o}`],n?v.error:``,m?v.disabled:``,l].filter(Boolean).join(` `),k=[v.input,s?v.hasStartAdornment:``,c?v.hasEndAdornment:``,f].filter(Boolean).join(` `),A=[v.helperText,n?v.error:``,p].filter(Boolean).join(` `);return(0,x.jsxs)(`div`,{className:w,style:T,children:[e&&(0,x.jsx)(`label`,{htmlFor:S,className:D,children:e}),(0,x.jsxs)(`div`,{className:O,style:E,children:[s&&(0,x.jsx)(`span`,{className:v.startAdornment,children:s}),(0,x.jsx)(`input`,{id:S,type:`text`,ref:_,className:k,disabled:m,"aria-invalid":n,"aria-describedby":C,style:r?{width:`100%`}:void 0,...g}),c&&(0,x.jsx)(`span`,{className:v.endAdornment,children:c})]}),t&&(0,x.jsx)(`p`,{id:C,className:A,children:t})]})}),S.displayName=`TextBox`,S.__docgenInfo={description:`Text field component that allows single-line text input.\r
Supports different variants, sizes, and states.`,methods:[],displayName:`TextBox`,props:{label:{required:!1,tsType:{name:`string`},description:`Label displayed above the text field`},helperText:{required:!1,tsType:{name:`string`},description:`Helper text displayed below the field`},error:{required:!1,tsType:{name:`boolean`},description:`If true, shows an error indicator\r
@default false`,defaultValue:{value:`false`,computed:!1}},fullWidth:{required:!1,tsType:{name:`boolean`},description:`If true, the field takes up the full available width\r
@default false`,defaultValue:{value:`false`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'outlined' | 'filled' | 'standard'`,elements:[{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'filled'`},{name:`literal`,value:`'standard'`}]},description:`Design variant of the text field\r
@default 'outlined'`,defaultValue:{value:`'outlined'`,computed:!1}},size:{required:!1,tsType:{name:`ComponentSize`},description:`Text field size\r
@default 'medium'`,defaultValue:{value:`ComponentSize.MEDIUM`,computed:!0}},startAdornment:{required:!1,tsType:{name:`ReactNode`},description:`Element displayed at the start of the field`},endAdornment:{required:!1,tsType:{name:`ReactNode`},description:`Element displayed at the end of the field`},containerClassName:{required:!1,tsType:{name:`string`},description:`Custom CSS class for the container`,defaultValue:{value:`''`,computed:!1}},labelClassName:{required:!1,tsType:{name:`string`},description:`Custom CSS class for the label`,defaultValue:{value:`''`,computed:!1}},inputClassName:{required:!1,tsType:{name:`string`},description:`Custom CSS class for the input field`,defaultValue:{value:`''`,computed:!1}},helperTextClassName:{required:!1,tsType:{name:`string`},description:`Custom CSS class for the helper text`,defaultValue:{value:`''`,computed:!1}},className:{defaultValue:{value:`''`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1}},composes:[`Omit`]}})),w,T=t((()=>{i(),w={label:`Label`,placeholder:`Type something...`,variant:`outlined`,size:a.MEDIUM}})),E,D,O,k,A,j,M,N,P,F,I,L,R,z;t((()=>{E=e(n(),1),C(),T(),i(),D=r(),{within:O,expect:k}=__STORYBOOK_MODULE_TEST__,A={title:`Components/TextBox`,component:S,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`outlined`,`filled`,`standard`],description:`Visual style variant of the input field.`,table:{type:{summary:`outlined | filled | standard`},defaultValue:{summary:`outlined`}}},size:{control:`select`,options:Object.values(a),description:`Size of the input field.`,table:{type:{summary:Object.values(a).join(` | `)},defaultValue:{summary:a.MEDIUM}}},type:{control:`select`,options:[`text`,`email`,`password`,`number`,`tel`,`url`,`search`],description:`HTML input type.`,table:{type:{summary:`text | email | password | number | tel | url | search`},defaultValue:{summary:`text`}}},error:{control:`boolean`,description:`When true, applies error styling to the field.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`When true, the field is non-interactive.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},fullWidth:{control:`boolean`,description:`When true, the field stretches to fill its container width.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{control:`boolean`,description:`Marks the field as required.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{control:`boolean`,description:`When true, the value can be read but not edited.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},parameters:{docs:{description:{component:`A single-line text input field. Supports outlined, filled, and standard variants, multiple sizes, input type selection, and optional start/end adornments.`}}}},j=e=>{let[t,n]=(0,E.useState)(``);return(0,D.jsx)(S,{...e,value:t,onChange:e=>n(e.target.value)})},M=()=>{let[e,t]=(0,E.useState)(``);return(0,D.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`400px`},children:[(0,D.jsx)(S,{label:`Default field`,value:e,onChange:e=>t(e.target.value),placeholder:`Type something...`}),(0,D.jsx)(S,{label:`Field with default value`,defaultValue:`Default value`}),(0,D.jsx)(S,{label:`Disabled field`,disabled:!0,placeholder:`You cannot type here`}),(0,D.jsx)(S,{label:`Read-only field`,readOnly:!0,value:`This text cannot be edited`}),(0,D.jsx)(S,{label:`Required field`,required:!0,placeholder:`This field is mandatory`}),(0,D.jsx)(S,{label:`Field with error`,error:!0,helperText:`Error message`,defaultValue:`Invalid value`})]})},N={render:e=>(0,D.jsx)(j,{...e}),args:w,play:async({canvasElement:e})=>{await k(O(e).getByLabelText(`Label`)).toBeInTheDocument()}},P={render:()=>(0,D.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,maxWidth:`400px`},children:[(0,D.jsx)(S,{label:`Outlined`,variant:`outlined`,placeholder:`Outlined`}),(0,D.jsx)(S,{label:`Filled`,variant:`filled`,placeholder:`Filled`}),(0,D.jsx)(S,{label:`Standard`,variant:`standard`,placeholder:`Standard`})]}),play:async({canvasElement:e})=>{let t=O(e);await k(t.getByLabelText(`Outlined`).parentElement).toHaveClass(`variant-outlined`),await k(t.getByLabelText(`Filled`).parentElement).toHaveClass(`variant-filled`),await k(t.getByLabelText(`Standard`).parentElement).toHaveClass(`variant-standard`)},parameters:{docs:{description:{story:`Available design variants for the text field.`}}}},F={render:()=>(0,D.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`400px`},children:[(0,D.jsx)(S,{label:`Small`,size:a.SMALL,placeholder:`Small size`}),(0,D.jsx)(S,{label:`Medium`,size:a.MEDIUM,placeholder:`Medium size`}),(0,D.jsx)(S,{label:`Large`,size:a.LARGE,placeholder:`Large size`})]}),play:async({canvasElement:e})=>{let t=O(e);await k(t.getByLabelText(`Small`).parentElement).toHaveClass(`size-small`),await k(t.getByLabelText(`Medium`).parentElement).toHaveClass(`size-medium`),await k(t.getByLabelText(`Large`).parentElement).toHaveClass(`size-large`)},parameters:{docs:{description:{story:`Available size options for the text field.`}}}},I={render:()=>(0,D.jsx)(M,{}),parameters:{docs:{description:{story:`Different field states: default, with value, disabled, read-only, required, and error.`}}}},L={render:()=>(0,D.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`400px`},children:[(0,D.jsx)(S,{label:`With start icon`,startAdornment:(0,D.jsx)(`span`,{style:{fontSize:`20px`},children:`🔍`}),placeholder:`Search...`}),(0,D.jsx)(S,{label:`With end icon`,endAdornment:(0,D.jsx)(`span`,{style:{fontSize:`20px`},children:`🔒`}),type:`password`,placeholder:`Password`}),(0,D.jsx)(S,{label:`With icons on both sides`,startAdornment:(0,D.jsx)(`span`,{style:{fontSize:`20px`},children:`🔢`}),endAdornment:(0,D.jsx)(`span`,{style:{fontSize:`14px`,color:`#666`},children:`Numbers`}),type:`number`,placeholder:`Numbers only`})]}),parameters:{docs:{description:{story:`Text fields with optional start or end adornments (icons or text elements).`}}}},R={render:()=>(0,D.jsx)(`div`,{style:{width:`100%`},children:(0,D.jsx)(S,{label:`Full-width field`,fullWidth:!0,placeholder:`This field fills the full available width`})}),parameters:{docs:{description:{story:`Text field that expands to fill the full width of its container.`}}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledTextBox {...args} />,
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByLabelText('Label')).toBeInTheDocument();
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <TextBoxStatesStory />,
  parameters: {
    docs: {
      description: {
        story: 'Different field states: default, with value, disabled, read-only, required, and error.'
      }
    }
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z=[`Default`,`Variants`,`Sizes`,`States`,`WithAdornments`,`FullWidth`]}))();export{N as Default,R as FullWidth,F as Sizes,I as States,P as Variants,L as WithAdornments,z as __namedExportsOrder,A as default};