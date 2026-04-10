import{r as e,t}from"./iframe-BwpCWMiM.js";import{t as n}from"./jsx-runtime-BsbbwSUz.js";import{t as r}from"./classNames-DYb3CZs3.js";import{t as i}from"./types-BTwUNDvM.js";var a=e(t(),1),o=`_switchInput_1jd0l_14`,s=`_switchTrack_1jd0l_26`,c=`_switchThumb_1jd0l_49`,l=`_switchLabel_1jd0l_78`,u={switch:`_switch_1jd0l_1`,"switch--disabled":`_switch--disabled_1jd0l_9`,switchInput:o,switchTrack:s,"switch--small":`_switch--small_1jd0l_33`,"switch--medium":`_switch--medium_1jd0l_37`,"switch--large":`_switch--large_1jd0l_41`,switchThumb:c,switchLabel:l},d=n(),f=({label:e,checked:t=!1,onChange:n,size:o=i.MEDIUM,disabled:s=!1,className:c,id:l,...f})=>{let p=(0,a.useId)(),m=l??p;return(0,d.jsxs)(`label`,{className:r(u.switch,u[`switch--${o}`],s&&u[`switch--disabled`],c),htmlFor:m,children:[(0,d.jsx)(`input`,{type:`checkbox`,id:m,role:`switch`,checked:t,disabled:s,onChange:e=>{n&&n(e.target.checked)},className:u.switchInput,"aria-checked":t,...f}),(0,d.jsx)(`span`,{className:u.switchTrack,children:(0,d.jsx)(`span`,{className:u.switchThumb})}),e&&(0,d.jsx)(`span`,{className:u.switchLabel,children:e})]})};f.__docgenInfo={description:`Control de toggle on/off accesible.\r
@component`,methods:[],displayName:`Switch`,props:{label:{required:!1,tsType:{name:`string`},description:`Switch label`},checked:{required:!1,tsType:{name:`boolean`},description:`Whether the switch is on\r
@default false`,defaultValue:{value:`false`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:`Callback when state changes`},size:{required:!1,tsType:{name:`ComponentSize`},description:`Switch size\r
@default 'medium'`,defaultValue:{value:`ComponentSize.MEDIUM`,computed:!0}},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the switch is disabled\r
@default false`,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]};var p={label:`Enable option`,checked:!1,size:i.MEDIUM,disabled:!1},m={size:{control:`select`,options:Object.values(i),description:`Size of the switch toggle.`,table:{type:{summary:Object.values(i).join(` | `)},defaultValue:{summary:i.MEDIUM}}},checked:{control:`boolean`,description:`Controlled on/off state of the switch.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`When true, the switch is non-interactive and visually muted.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},label:{control:`text`,description:`Text label rendered next to the switch toggle.`,table:{type:{summary:`string`}}},onChange:{action:`changed`,description:`Callback fired with the new checked state when the switch is toggled.`,table:{type:{summary:`(checked: boolean) => void`}}}},h={docs:{description:{component:`A toggle switch for boolean settings. Supports multiple sizes, a text label, controlled checked state, and a disabled mode.`}}},g=Object.values(i),_={title:`Components/Switch`,component:f,tags:[`autodocs`],argTypes:m,args:p,parameters:h},v={args:{label:`Enable option`}},y={args:{label:`Enabled`,checked:!0}},b={render:()=>(0,d.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:g.map(e=>(0,d.jsx)(f,{size:e,label:e.charAt(0).toUpperCase()+e.slice(1)},e))}),parameters:{docs:{source:{code:null}}}},x=()=>{let[e,t]=(0,a.useState)(!1);return(0,d.jsx)(f,{label:e?`Enabled`:`Disabled`,checked:e,onChange:t})},S={render:()=>(0,d.jsx)(x,{}),parameters:{docs:{source:{code:null}}}},C={args:{label:`Disabled`,disabled:!0}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable option'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enabled',
    checked: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      {allSizes.map(size => <Switch key={size} size={size as ComponentSize} label={size.charAt(0).toUpperCase() + size.slice(1)} />)}\r
    </div>,
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  }
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveSwitch />,
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    disabled: true
  }
}`,...C.parameters?.docs?.source}}};var w=[`Default`,`Checked`,`Sizes`,`Interactive`,`Disabled`];export{y as Checked,v as Default,C as Disabled,S as Interactive,b as Sizes,w as __namedExportsOrder,_ as default};