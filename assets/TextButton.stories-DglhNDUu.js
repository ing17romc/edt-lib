import{t as e}from"./iframe-BwpCWMiM.js";import{t}from"./jsx-runtime-BsbbwSUz.js";import{t as n}from"./Button-DLBCQ6JX.js";import{n as r,t as i}from"./types-BTwUNDvM.js";e();var a=`_textButton_1sztq_1`,o=`_disabled_1sztq_38`,s=`_loading_1sztq_91`,c=`_spin_1sztq_1`,l=`_fullWidth_1sztq_123`,u={textButton:a,"size-small":`_size-small_1sztq_20`,"size-medium":`_size-medium_1sztq_25`,"size-large":`_size-large_1sztq_30`,"color-primary":`_color-primary_1sztq_35`,disabled:o,"color-secondary":`_color-secondary_1sztq_44`,"color-error":`_color-error_1sztq_53`,"color-success":`_color-success_1sztq_62`,"color-warning":`_color-warning_1sztq_71`,"underline-hover":`_underline-hover_1sztq_80`,"underline-always":`_underline-always_1sztq_83`,loading:s,spin:c,fullWidth:l},d=t(),f=({children:e,className:t=``,size:a=i.MEDIUM,color:o=`primary`,underline:s=`hover`,disabled:c=!1,loading:l=!1,fullWidth:f=!1,...p})=>(0,d.jsx)(n,{className:[u.textButton,u[`size-${a}`],u[`color-${o}`],u[`underline-${s}`],c?u.disabled:``,l?u.loading:``,f?u.fullWidth:``,t].filter(Boolean).join(` `),style:{...l&&{color:`transparent`},...f&&{width:`100%`}},disabled:c||l,variant:r.PRIMARY,size:a,fullWidth:f,...p,children:e});f.__docgenInfo={description:`Text button component that extends the functionality of the Button component.\r
Designed for secondary or less prominent actions than regular buttons.`,methods:[],displayName:`TextButton`,props:{size:{required:!1,tsType:{name:`ComponentSize`},description:`Text button size\r
@default 'medium'`,defaultValue:{value:`ComponentSize.MEDIUM`,computed:!0}},fullWidth:{required:!1,tsType:{name:`boolean`},description:`If true, the button takes up the full available width\r
@default false`,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`If true, shows the button in disabled state\r
@default false`,defaultValue:{value:`false`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:`If true, shows a loading indicator\r
@default false`,defaultValue:{value:`false`,computed:!1}},color:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'inherit'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'inherit'`}]},description:`Button text color\r
@default 'primary'`,defaultValue:{value:`'primary'`,computed:!1}},underline:{required:!1,tsType:{name:`union`,raw:`'none' | 'hover' | 'always'`,elements:[{name:`literal`,value:`'none'`},{name:`literal`,value:`'hover'`},{name:`literal`,value:`'always'`}]},description:`If true, adds an underline to the text\r
@default false`,defaultValue:{value:`'hover'`,computed:!1}},className:{defaultValue:{value:`''`,computed:!1},required:!1}},composes:[`Omit`]};var p={docs:{description:{component:`A text-style button for secondary actions. Supports configurable color, underline style, size, loading state, and full-width layout.`}}},m={children:`Text button`,color:`primary`,size:i.MEDIUM,underline:`hover`,disabled:!1,loading:!1,fullWidth:!1},h={size:{control:`select`,options:Object.values(i),description:`Size of the text button.`,table:{type:{summary:Object.values(i).join(` | `)},defaultValue:{summary:i.MEDIUM}}},color:{control:`select`,options:[`primary`,`secondary`,`error`,`success`,`warning`,`inherit`],description:`Color tone of the button text.`,table:{type:{summary:`primary | secondary | error | success | warning | inherit`},defaultValue:{summary:`primary`}}},underline:{control:`select`,options:[`none`,`hover`,`always`],description:`Underline style — none, visible only on hover, or always shown.`,table:{type:{summary:`none | hover | always`},defaultValue:{summary:`hover`}}},disabled:{control:`boolean`,description:`When true, the button is non-interactive and visually muted.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},loading:{control:`boolean`,description:`When true, shows a loading spinner inside the button.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},fullWidth:{control:`boolean`,description:`When true, the button stretches to fill the full width of its container.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},g=[`primary`,`secondary`,`error`,`success`,`warning`,`inherit`],_=Object.values(i),v={title:`Components/TextButton`,component:f,tags:[`autodocs`],argTypes:h,parameters:p},y={args:m},b={render:()=>(0,d.jsx)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:_.map(e=>(0,d.jsx)(f,{size:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e))}),parameters:{docs:{description:{story:`Available sizes for the TextButton component.`}}}},x={render:()=>(0,d.jsx)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`,flexWrap:`wrap`},children:g.map(e=>(0,d.jsx)(f,{color:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e))}),parameters:{docs:{description:{story:`Available color variants for the TextButton component.`}}}},S={render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`,flexWrap:`wrap`},children:[(0,d.jsx)(f,{children:`Normal`}),(0,d.jsx)(f,{disabled:!0,children:`Disabled`}),(0,d.jsx)(f,{loading:!0,children:`Loading`}),(0,d.jsx)(f,{fullWidth:!0,children:`Full width`})]}),parameters:{docs:{description:{story:`Different interaction states: default, disabled, loading, and full-width.`}}}},C={render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[(0,d.jsx)(f,{underline:`none`,children:`None`}),(0,d.jsx)(f,{underline:`hover`,children:`Hover`}),(0,d.jsx)(f,{underline:`always`,children:`Always`})]}),parameters:{docs:{description:{story:`Underline display options: none, on hover, or always visible.`}}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: defaultArgs
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>\r
      {allSizes.map(size => <TextButton key={size} size={size}>\r
          {size.charAt(0).toUpperCase() + size.slice(1)}\r
        </TextButton>)}\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Available sizes for the TextButton component.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      {allColors.map(color => <TextButton key={color} color={color}>\r
          {color!.charAt(0).toUpperCase() + color!.slice(1)}\r
        </TextButton>)}\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Available color variants for the TextButton component.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <TextButton>Normal</TextButton>\r
      <TextButton disabled>Disabled</TextButton>\r
      <TextButton loading>Loading</TextButton>\r
      <TextButton fullWidth>Full width</TextButton>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different interaction states: default, disabled, loading, and full-width.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>\r
      <TextButton underline="none">None</TextButton>\r
      <TextButton underline="hover">Hover</TextButton>\r
      <TextButton underline="always">Always</TextButton>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Underline display options: none, on hover, or always visible.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};var w=[`Default`,`Sizes`,`Colors`,`States`,`Underline`];export{x as Colors,y as Default,b as Sizes,S as States,C as Underline,w as __namedExportsOrder,v as default};