import{a as e,n as t}from"./chunk-BneVvdWh.js";import{O as n,a as r,i,o as a}from"./iframe-BoT0I_bJ.js";import{r as o,t as s}from"./types-SSqGpC_M.js";var c,l,u,d,f,p=t((()=>{c=`_switchInput_1953o_14`,l=`_switchTrack_1953o_26`,u=`_switchThumb_1953o_49`,d=`_switchLabel_1953o_82`,f={switch:`_switch_1953o_1`,"switch--disabled":`_switch--disabled_1953o_9`,switchInput:c,switchTrack:l,"switch--small":`_switch--small_1953o_33`,"switch--medium":`_switch--medium_1953o_37`,"switch--large":`_switch--large_1953o_41`,switchThumb:u,switchLabel:d}})),m,h,g,_=t((()=>{m=e(n(),1),a(),p(),o(),h=i(),g=({label:e,checked:t=!1,onChange:n,size:i=s.MEDIUM,disabled:a=!1,className:o,id:c,...l})=>{let u=(0,m.useId)(),d=c??u;return(0,h.jsxs)(`label`,{className:r(f.switch,f[`switch--${i}`],a&&f[`switch--disabled`],o),htmlFor:d,children:[(0,h.jsx)(`input`,{type:`checkbox`,id:d,role:`switch`,checked:t,disabled:a,onChange:e=>{n&&n(e.target.checked)},className:f.switchInput,"aria-checked":t,...l}),(0,h.jsx)(`span`,{className:f.switchTrack,children:(0,h.jsx)(`span`,{className:f.switchThumb})}),e&&(0,h.jsx)(`span`,{className:f.switchLabel,children:e})]})},g.__docgenInfo={description:`Control de toggle on/off accesible.\r
@component`,methods:[],displayName:`Switch`,props:{label:{required:!1,tsType:{name:`string`},description:`Switch label`},checked:{required:!1,tsType:{name:`boolean`},description:`Whether the switch is on\r
@default false`,defaultValue:{value:`false`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:`Callback when state changes`},size:{required:!1,tsType:{name:`ComponentSize`},description:`Switch size\r
@default 'medium'`,defaultValue:{value:`ComponentSize.MEDIUM`,computed:!0}},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the switch is disabled\r
@default false`,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]}})),v,y,b,x,S=t((()=>{o(),v={label:`Enable option`,checked:!1,size:s.MEDIUM,disabled:!1},y={size:{control:`select`,options:Object.values(s),description:`Size of the switch toggle.`,table:{type:{summary:Object.values(s).join(` | `)},defaultValue:{summary:s.MEDIUM}}},checked:{control:`boolean`,description:`Controlled on/off state of the switch.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`When true, the switch is non-interactive and visually muted.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},label:{control:`text`,description:`Text label rendered next to the switch toggle.`,table:{type:{summary:`string`}}},onChange:{action:`changed`,description:`Callback fired with the new checked state when the switch is toggled.`,table:{type:{summary:`(checked: boolean) => void`}}}},b={docs:{description:{component:`A toggle switch for boolean settings. Supports multiple sizes, a text label, controlled checked state, and a disabled mode.`}}},x=Object.values(s)})),C,w,T,E,D,O,k,A,j,M,N,P;t((()=>{C=e(n(),1),_(),S(),w=i(),{within:T,expect:E}=__STORYBOOK_MODULE_TEST__,D={title:`Components/Switch`,component:g,tags:[`autodocs`],argTypes:y,args:v,parameters:b},O={args:{label:`Enable option`},play:async({canvasElement:e})=>{await E(T(e).getByText(`Enable option`)).toBeInTheDocument()}},k={args:{label:`Enabled`,checked:!0}},A={render:()=>(0,w.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:x.map(e=>(0,w.jsx)(g,{size:e,label:e.charAt(0).toUpperCase()+e.slice(1)},e))}),parameters:{docs:{source:{code:null}}}},j=()=>{let[e,t]=(0,C.useState)(!1);return(0,w.jsx)(g,{label:e?`Enabled`:`Disabled`,checked:e,onChange:t})},M={render:()=>(0,w.jsx)(j,{}),parameters:{docs:{source:{code:null}}}},N={args:{label:`Disabled`,disabled:!0}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable option'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Enable option')).toBeInTheDocument();
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enabled',
    checked: true
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveSwitch />,
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    disabled: true
  }
}`,...N.parameters?.docs?.source}}},P=[`Default`,`Checked`,`Sizes`,`Interactive`,`Disabled`]}))();export{k as Checked,O as Default,N as Disabled,M as Interactive,A as Sizes,P as __namedExportsOrder,D as default};