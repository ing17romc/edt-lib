import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-DoW-sQG_.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{n as i,t as a}from"./classNames-Bj-wXTiJ.js";import{r as o,t as s}from"./types-Duki_pzD.js";var c,l,u,d,f,p=t((()=>{c=`_radioButton_16ro9_1`,l=`_radioButton__input_16ro9_10`,u=`_radioButton__checkmark_16ro9_17`,d=`_radioButton__label_16ro9_41`,f={radioButton:c,radioButton__input:l,radioButton__checkmark:u,radioButton__label:d,"radioButton--small":`_radioButton--small_16ro9_69`,"radioButton--large":`_radioButton--large_16ro9_83`}})),m,h,g=t((()=>{n(),i(),p(),o(),m=r(),h=({value:e,label:t,checked:n=!1,disabled:r=!1,onChange:i,className:o=``,name:c=`radio-group`,size:l=s.MEDIUM,...u})=>{let d=()=>{!r&&i&&i(e)};return(0,m.jsxs)(`label`,{className:a(f.radioButton,{[f[`radioButton--${l}`]]:l},o),...u,children:[(0,m.jsx)(`input`,{type:`radio`,className:f.radioButton__input,checked:n,disabled:r,onChange:d,name:c,value:e}),(0,m.jsx)(`span`,{className:f.radioButton__checkmark}),t&&(0,m.jsx)(`span`,{className:f.radioButton__label,children:t})]})},h.__docgenInfo={description:`RadioButton component that allows selecting one option from a set of mutually exclusive options.`,methods:[],displayName:`RadioButton`,props:{value:{required:!0,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Unique value that identifies this radio button`},label:{required:!0,tsType:{name:`string`},description:`Text displayed next to the radio button`},checked:{required:!1,tsType:{name:`boolean`},description:`Indicates whether the radio button is selected`,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Indicates whether the radio button is disabled`,defaultValue:{value:`false`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string | number) => void`,signature:{arguments:[{type:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},name:`value`}],return:{name:`void`}}},description:`Function called when the radio button state changes`},className:{required:!1,tsType:{name:`string`},description:`Optional CSS class for custom styling`,defaultValue:{value:`''`,computed:!1}},name:{required:!1,tsType:{name:`string`},description:`Name of the group the radio button belongs to`,defaultValue:{value:`'radio-group'`,computed:!1}},size:{required:!1,tsType:{name:`ComponentSize`},description:`Radio button size\r
@default 'medium'`,defaultValue:{value:`ComponentSize.MEDIUM`,computed:!0}}}}})),_,v,y,b,x,S,C,w,T,E,D=t((()=>{_=e(n(),1),g(),o(),v=r(),y={value:`option1`,label:`Option 1`,checked:!1,disabled:!1,name:`radio-group`,size:s.MEDIUM},b={...y,checked:!0},x={...y,disabled:!0},S={...y,checked:!0,disabled:!0},C={...y,className:`custom-radio-class`},w={...y,size:s.SMALL,label:`Small option`},T={...y,size:s.LARGE,label:`Large option`},E=()=>{let[e,t]=_.useState(`option1`),n=e=>{t(String(e))};return(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,v.jsx)(h,{value:`option1`,label:`Option 1`,checked:e===`option1`,onChange:n,name:`example-group`}),(0,v.jsx)(h,{value:`option2`,label:`Option 2`,checked:e===`option2`,onChange:n,name:`example-group`}),(0,v.jsx)(h,{value:`option3`,label:`Option 3 (disabled)`,checked:e===`option3`,onChange:n,name:`example-group`,disabled:!0})]})},E.__docgenInfo={description:``,methods:[],displayName:`RadioGroupComponent`}})),O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;t((()=>{O=e(n(),1),g(),o(),D(),k=r(),{within:A,expect:j}=__STORYBOOK_MODULE_TEST__,M={title:`Components/RadioButton`,component:h,tags:[`autodocs`],argTypes:{value:{control:`text`,description:`Unique value that identifies this radio button within its group.`,table:{type:{summary:`string | number`}}},label:{control:`text`,description:`Text label displayed next to the radio button.`,table:{type:{summary:`string`}}},checked:{control:`boolean`,description:`Controls the selected state of the radio button.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`When true, the radio button is non-interactive and visually muted.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},name:{control:`text`,description:`Group name — radio buttons sharing the same name are mutually exclusive.`,table:{type:{summary:`string`}}},className:{control:`text`,description:`Additional CSS class names for the root element.`,table:{type:{summary:`string`}}},onChange:{action:`changed`,description:`Callback fired with the radio button value when it becomes selected.`,table:{type:{summary:`(value: string | number) => void`}}},size:{control:`select`,options:Object.values(s),description:`Size of the radio button.`,table:{type:{summary:Object.values(s).join(` | `)},defaultValue:{summary:s.MEDIUM}}}},parameters:{docs:{description:{component:`A styled radio button component for single-option selection within a group. Supports multiple sizes, controlled usage, and a disabled state.`}}}},N={args:y,play:async({canvasElement:e})=>{let t=A(e).getByRole(`radio`);await j(t).not.toBeChecked(),await j(t).not.toBeDisabled()}},P={args:b,play:async({canvasElement:e})=>{await j(A(e).getByRole(`radio`)).toBeChecked()}},F={args:x,play:async({canvasElement:e})=>{await j(A(e).getByRole(`radio`)).toBeDisabled()}},I={args:S},L={args:C,parameters:{docs:{description:{story:`RadioButton with a custom CSS class applied.`}}}},R={args:w,play:async({canvasElement:e})=>{let t=e.firstElementChild;await j(t).toHaveClass(`radioButton--small`)},parameters:{docs:{description:{story:`RadioButton with small size (SMALL).`}}}},z={args:T,play:async({canvasElement:e})=>{let t=e.firstElementChild;await j(t).toHaveClass(`radioButton--large`)},parameters:{docs:{description:{story:`RadioButton with large size (LARGE).`}}}},B={render:()=>(0,k.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,k.jsx)(h,{...w,label:`Small option (SMALL)`}),(0,k.jsx)(h,{...y,label:`Medium option (MEDIUM)`}),(0,k.jsx)(h,{...T,label:`Large option (LARGE)`})]}),parameters:{docs:{description:{story:`Example showing the different size variants available for the RadioButton.`}}}},V={render:()=>(0,k.jsx)(E,{})},H=e=>{let[t,n]=O.useState(e.checked||!1);return(0,k.jsx)(h,{...e,checked:t,onChange:()=>n(!t)})},U={render:e=>(0,k.jsx)(H,{...e}),args:y},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByRole('radio');
    await expect(radio).not.toBeChecked();
    await expect(radio).not.toBeDisabled();
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: checkedArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('radio')).toBeChecked();
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: disabledArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('radio')).toBeDisabled();
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: disabledCheckedArgs
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: withCustomClass,
  parameters: {
    docs: {
      description: {
        story: 'RadioButton with a custom CSS class applied.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: smallSize,
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.firstElementChild as HTMLElement;
    await expect(root).toHaveClass('radioButton--small');
  },
  parameters: {
    docs: {
      description: {
        story: 'RadioButton with small size (SMALL).'
      }
    }
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: largeSize,
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.firstElementChild as HTMLElement;
    await expect(root).toHaveClass('radioButton--large');
  },
  parameters: {
    docs: {
      description: {
        story: 'RadioButton with large size (LARGE).'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <RadioButton {...smallSize} label="Small option (SMALL)" />\r
      <RadioButton {...defaultArgs} label="Medium option (MEDIUM)" />\r
      <RadioButton {...largeSize} label="Large option (LARGE)" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example showing the different size variants available for the RadioButton.'
      }
    }
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroupComponent />
}`,...V.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledComponent {...args} />,
  args: defaultArgs
}`,...U.parameters?.docs?.source}}},W=[`Default`,`Checked`,`Disabled`,`DisabledChecked`,`WithCustomClass`,`SmallSize`,`LargeSize`,`SizeVariants`,`Group`,`Controlled`]}))();export{P as Checked,U as Controlled,N as Default,F as Disabled,I as DisabledChecked,V as Group,z as LargeSize,B as SizeVariants,R as SmallSize,L as WithCustomClass,W as __namedExportsOrder,M as default};