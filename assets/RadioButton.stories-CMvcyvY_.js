import{r as e,t}from"./iframe-YpqvHZo3.js";import{t as n}from"./jsx-runtime-ChNUh70B.js";import{t as r}from"./classNames-DYb3CZs3.js";import{t as i}from"./types-BTwUNDvM.js";var a=e(t(),1),o={radioButton:`_radioButton_16ro9_1`,radioButton__input:`_radioButton__input_16ro9_10`,radioButton__checkmark:`_radioButton__checkmark_16ro9_17`,radioButton__label:`_radioButton__label_16ro9_41`,"radioButton--small":`_radioButton--small_16ro9_69`,"radioButton--large":`_radioButton--large_16ro9_83`},s=n(),c=({value:e,label:t,checked:n=!1,disabled:a=!1,onChange:c,className:l=``,name:u=`radio-group`,size:d=i.MEDIUM,...f})=>{let p=()=>{!a&&c&&c(e)};return(0,s.jsxs)(`label`,{className:r(o.radioButton,{[o[`radioButton--${d}`]]:d},l),...f,children:[(0,s.jsx)(`input`,{type:`radio`,className:o.radioButton__input,checked:n,disabled:a,onChange:p,name:u,value:e}),(0,s.jsx)(`span`,{className:o.radioButton__checkmark}),t&&(0,s.jsx)(`span`,{className:o.radioButton__label,children:t})]})};c.__docgenInfo={description:`Componente RadioButton que permite seleccionar una opción de un conjunto de opciones mutuamente excluyentes.`,methods:[],displayName:`RadioButton`,props:{value:{required:!0,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Valor único que identifica este botón de radio`},label:{required:!0,tsType:{name:`string`},description:`Texto que se muestra junto al botón de radio`},checked:{required:!1,tsType:{name:`boolean`},description:`Indica si el botón de radio está seleccionado`,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Indica si el botón de radio está deshabilitado`,defaultValue:{value:`false`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string | number) => void`,signature:{arguments:[{type:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},name:`value`}],return:{name:`void`}}},description:`Función que se ejecuta cuando cambia el estado del botón de radio`},className:{required:!1,tsType:{name:`string`},description:`Clase CSS opcional para personalizar el estilo`,defaultValue:{value:`''`,computed:!1}},name:{required:!1,tsType:{name:`string`},description:`Nombre del grupo al que pertenece el botón de radio`,defaultValue:{value:`'radio-group'`,computed:!1}},size:{required:!1,tsType:{name:`ComponentSize`},description:`Tamaño del botón de radio\r
@default 'medium'`,defaultValue:{value:`ComponentSize.MEDIUM`,computed:!0}}}};var l={value:`option1`,label:`Opción 1`,checked:!1,disabled:!1,name:`radio-group`,size:i.MEDIUM},u={...l,checked:!0},d={...l,disabled:!0},f={...l,checked:!0,disabled:!0},p={...l,className:`custom-radio-class`},m={...l,size:i.SMALL,label:`Opción pequeña`},h={...l,size:i.LARGE,label:`Opción grande`},g=()=>{let[e,t]=a.useState(`option1`),n=e=>{t(String(e))};return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,s.jsx)(c,{value:`option1`,label:`Opción 1`,checked:e===`option1`,onChange:n,name:`example-group`}),(0,s.jsx)(c,{value:`option2`,label:`Opción 2`,checked:e===`option2`,onChange:n,name:`example-group`}),(0,s.jsx)(c,{value:`option3`,label:`Opción 3 (deshabilitada)`,checked:e===`option3`,onChange:n,name:`example-group`,disabled:!0})]})};g.__docgenInfo={description:``,methods:[],displayName:`RadioGroupComponent`};var _={title:`Components/RadioButton`,component:c,tags:[`autodocs`],argTypes:{value:{control:`text`,description:`Unique value that identifies this radio button within its group.`,table:{type:{summary:`string | number`}}},label:{control:`text`,description:`Text label displayed next to the radio button.`,table:{type:{summary:`string`}}},checked:{control:`boolean`,description:`Controls the selected state of the radio button.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`When true, the radio button is non-interactive and visually muted.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},name:{control:`text`,description:`Group name — radio buttons sharing the same name are mutually exclusive.`,table:{type:{summary:`string`}}},className:{control:`text`,description:`Additional CSS class names for the root element.`,table:{type:{summary:`string`}}},onChange:{action:`changed`,description:`Callback fired with the radio button value when it becomes selected.`,table:{type:{summary:`(value: string | number) => void`}}},size:{control:`select`,options:Object.values(i),description:`Size of the radio button.`,table:{type:{summary:Object.values(i).join(` | `)},defaultValue:{summary:i.MEDIUM}}}},parameters:{docs:{description:{component:`A styled radio button component for single-option selection within a group. Supports multiple sizes, controlled usage, and a disabled state.`}}}},v={args:l},y={args:u},b={args:d},x={args:f},S={args:p,parameters:{docs:{description:{story:`RadioButton con una clase CSS personalizada aplicada.`}}}},C={args:m,parameters:{docs:{description:{story:`RadioButton con tamaño pequeño (SMALL).`}}}},w={args:h,parameters:{docs:{description:{story:`RadioButton con tamaño grande (LARGE).`}}}},T={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,s.jsx)(c,{...m,label:`Opción pequeña (SMALL)`}),(0,s.jsx)(c,{...l,label:`Opción mediana (MEDIUM)`}),(0,s.jsx)(c,{...h,label:`Opción grande (LARGE)`})]}),parameters:{docs:{description:{story:`Ejemplo que muestra las diferentes variantes de tamaño disponibles para el RadioButton.`}}}},E={render:()=>(0,s.jsx)(g,{})},D=e=>{let[t,n]=a.useState(e.checked||!1);return(0,s.jsx)(c,{...e,checked:t,onChange:()=>n(!t)})},O={render:e=>(0,s.jsx)(D,{...e}),args:l};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: defaultArgs
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: checkedArgs
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: disabledArgs
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: disabledCheckedArgs
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: withCustomClass,
  parameters: {
    docs: {
      description: {
        story: 'RadioButton con una clase CSS personalizada aplicada.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: smallSize,
  parameters: {
    docs: {
      description: {
        story: 'RadioButton con tamaño pequeño (SMALL).'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: largeSize,
  parameters: {
    docs: {
      description: {
        story: 'RadioButton con tamaño grande (LARGE).'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <RadioButton {...smallSize} label="Opción pequeña (SMALL)" />\r
      <RadioButton {...defaultArgs} label="Opción mediana (MEDIUM)" />\r
      <RadioButton {...largeSize} label="Opción grande (LARGE)" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo que muestra las diferentes variantes de tamaño disponibles para el RadioButton.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroupComponent />
}`,...E.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledComponent {...args} />,
  args: defaultArgs
}`,...O.parameters?.docs?.source}}};var k=[`Default`,`Checked`,`Disabled`,`DisabledChecked`,`WithCustomClass`,`SmallSize`,`LargeSize`,`SizeVariants`,`Group`,`Controlled`];export{y as Checked,O as Controlled,v as Default,b as Disabled,x as DisabledChecked,E as Group,w as LargeSize,T as SizeVariants,C as SmallSize,S as WithCustomClass,k as __namedExportsOrder,_ as default};