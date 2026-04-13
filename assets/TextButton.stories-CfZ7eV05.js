import{n as e}from"./chunk-BneVvdWh.js";import{S as t}from"./iframe-BoFEwu8W.js";import{t as n}from"./jsx-runtime-Bn1Ys6_W.js";import{n as r,t as i}from"./Button-DsDgfQfW.js";import{n as a,r as o,t as s}from"./types-Duki_pzD.js";var c,l,u,d,f,p,m=e((()=>{c=`_textButton_1sztq_1`,l=`_disabled_1sztq_38`,u=`_loading_1sztq_91`,d=`_spin_1sztq_1`,f=`_fullWidth_1sztq_123`,p={textButton:c,"size-small":`_size-small_1sztq_20`,"size-medium":`_size-medium_1sztq_25`,"size-large":`_size-large_1sztq_30`,"color-primary":`_color-primary_1sztq_35`,disabled:l,"color-secondary":`_color-secondary_1sztq_44`,"color-error":`_color-error_1sztq_53`,"color-success":`_color-success_1sztq_62`,"color-warning":`_color-warning_1sztq_71`,"underline-hover":`_underline-hover_1sztq_80`,"underline-always":`_underline-always_1sztq_83`,loading:u,spin:d,fullWidth:f}})),h,g,_=e((()=>{t(),r(),m(),o(),h=n(),g=({children:e,className:t=``,size:n=s.MEDIUM,color:r=`primary`,underline:o=`hover`,disabled:c=!1,loading:l=!1,fullWidth:u=!1,...d})=>(0,h.jsx)(i,{className:[p.textButton,p[`size-${n}`],p[`color-${r}`],p[`underline-${o}`],c?p.disabled:``,l?p.loading:``,u?p.fullWidth:``,t].filter(Boolean).join(` `),style:{...l&&{color:`transparent`},...u&&{width:`100%`}},disabled:c||l,variant:a.PRIMARY,size:n,fullWidth:u,...d,children:e}),g.__docgenInfo={description:`Text button component that extends the functionality of the Button component.\r
Designed for secondary or less prominent actions than regular buttons.`,methods:[],displayName:`TextButton`,props:{size:{required:!1,tsType:{name:`ComponentSize`},description:`Text button size\r
@default 'medium'`,defaultValue:{value:`ComponentSize.MEDIUM`,computed:!0}},fullWidth:{required:!1,tsType:{name:`boolean`},description:`If true, the button takes up the full available width\r
@default false`,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`If true, shows the button in disabled state\r
@default false`,defaultValue:{value:`false`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:`If true, shows a loading indicator\r
@default false`,defaultValue:{value:`false`,computed:!1}},color:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'inherit'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'inherit'`}]},description:`Button text color\r
@default 'primary'`,defaultValue:{value:`'primary'`,computed:!1}},underline:{required:!1,tsType:{name:`union`,raw:`'none' | 'hover' | 'always'`,elements:[{name:`literal`,value:`'none'`},{name:`literal`,value:`'hover'`},{name:`literal`,value:`'always'`}]},description:`If true, adds an underline to the text\r
@default false`,defaultValue:{value:`'hover'`,computed:!1}},className:{defaultValue:{value:`''`,computed:!1},required:!1}},composes:[`Omit`]}})),v,y,b,x,S,C=e((()=>{o(),v={docs:{description:{component:`A text-style button for secondary actions. Supports configurable color, underline style, size, loading state, and full-width layout.`}}},y={children:`Text button`,color:`primary`,size:s.MEDIUM,underline:`hover`,disabled:!1,loading:!1,fullWidth:!1},b={size:{control:`select`,options:Object.values(s),description:`Size of the text button.`,table:{type:{summary:Object.values(s).join(` | `)},defaultValue:{summary:s.MEDIUM}}},color:{control:`select`,options:[`primary`,`secondary`,`error`,`success`,`warning`,`inherit`],description:`Color tone of the button text.`,table:{type:{summary:`primary | secondary | error | success | warning | inherit`},defaultValue:{summary:`primary`}}},underline:{control:`select`,options:[`none`,`hover`,`always`],description:`Underline style — none, visible only on hover, or always shown.`,table:{type:{summary:`none | hover | always`},defaultValue:{summary:`hover`}}},disabled:{control:`boolean`,description:`When true, the button is non-interactive and visually muted.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},loading:{control:`boolean`,description:`When true, shows a loading spinner inside the button.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},fullWidth:{control:`boolean`,description:`When true, the button stretches to fill the full width of its container.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},x=[`primary`,`secondary`,`error`,`success`,`warning`,`inherit`],S=Object.values(s)})),w,T,E,D,O,k,A,j,M,N;e((()=>{t(),_(),C(),w=n(),{within:T,expect:E}=__STORYBOOK_MODULE_TEST__,D={title:`Components/TextButton`,component:g,tags:[`autodocs`],argTypes:b,parameters:v},O={args:y,play:async({canvasElement:e})=>{let t=T(e).getByRole(`button`,{name:/text button/i});await E(t).toHaveClass(`textButton`),await E(t).toHaveClass(`size-medium`),await E(t).toHaveClass(`color-primary`),await E(t).toHaveClass(`underline-hover`)}},k={render:()=>(0,w.jsx)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:S.map(e=>(0,w.jsx)(g,{size:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e))}),play:async({canvasElement:e})=>{let t=T(e).getAllByRole(`button`);await E(t[0]).toHaveClass(`size-small`),await E(t[1]).toHaveClass(`size-medium`),await E(t[2]).toHaveClass(`size-large`)},parameters:{docs:{description:{story:`Available sizes for the TextButton component.`}}}},A={render:()=>(0,w.jsx)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`,flexWrap:`wrap`},children:x.map(e=>(0,w.jsx)(g,{color:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e))}),parameters:{docs:{description:{story:`Available color variants for the TextButton component.`}}}},j={render:()=>(0,w.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`,flexWrap:`wrap`},children:[(0,w.jsx)(g,{children:`Normal`}),(0,w.jsx)(g,{disabled:!0,children:`Disabled`}),(0,w.jsx)(g,{loading:!0,children:`Loading`}),(0,w.jsx)(g,{fullWidth:!0,children:`Full width`})]}),play:async({canvasElement:e})=>{let t=T(e).getAllByRole(`button`);await E(t[1]).toBeDisabled(),await E(t[2]).toHaveClass(`loading`),await E(t[3]).toHaveClass(`fullWidth`)},parameters:{docs:{description:{story:`Different interaction states: default, disabled, loading, and full-width.`}}}},M={render:()=>(0,w.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[(0,w.jsx)(g,{underline:`none`,children:`None`}),(0,w.jsx)(g,{underline:`hover`,children:`Hover`}),(0,w.jsx)(g,{underline:`always`,children:`Always`})]}),play:async({canvasElement:e})=>{let[t,n,r]=T(e).getAllByRole(`button`);await E(t).toHaveClass(`underline-none`),await E(n).toHaveClass(`underline-hover`),await E(r).toHaveClass(`underline-always`)},parameters:{docs:{description:{story:`Underline display options: none, on hover, or always visible.`}}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: /text button/i
    });
    await expect(button).toHaveClass('textButton');
    await expect(button).toHaveClass('size-medium');
    await expect(button).toHaveClass('color-primary');
    await expect(button).toHaveClass('underline-hover');
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>\r
      {allSizes.map(size => <TextButton key={size} size={size}>\r
          {size.charAt(0).toUpperCase() + size.slice(1)}\r
        </TextButton>)}\r
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');
    await expect(buttons[0]).toHaveClass('size-small');
    await expect(buttons[1]).toHaveClass('size-medium');
    await expect(buttons[2]).toHaveClass('size-large');
  },
  parameters: {
    docs: {
      description: {
        story: 'Available sizes for the TextButton component.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');
    await expect(buttons[1]).toBeDisabled();
    await expect(buttons[2]).toHaveClass('loading');
    await expect(buttons[3]).toHaveClass('fullWidth');
  },
  parameters: {
    docs: {
      description: {
        story: 'Different interaction states: default, disabled, loading, and full-width.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>\r
      <TextButton underline="none">None</TextButton>\r
      <TextButton underline="hover">Hover</TextButton>\r
      <TextButton underline="always">Always</TextButton>\r
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const [noneBtn, hoverBtn, alwaysBtn] = canvas.getAllByRole('button');
    await expect(noneBtn).toHaveClass('underline-none');
    await expect(hoverBtn).toHaveClass('underline-hover');
    await expect(alwaysBtn).toHaveClass('underline-always');
  },
  parameters: {
    docs: {
      description: {
        story: 'Underline display options: none, on hover, or always visible.'
      }
    }
  }
}`,...M.parameters?.docs?.source}}},N=[`Default`,`Sizes`,`Colors`,`States`,`Underline`]}))();export{A as Colors,O as Default,k as Sizes,j as States,M as Underline,N as __namedExportsOrder,D as default};