import{a as e,n as t}from"./chunk-BneVvdWh.js";import{C as n,Ht as r,S as i,_t as a,bt as o,vt as s}from"./iframe-BrtTKpdh.js";var c,l,u,d,f=t((()=>{o(),c={label:`Enable option`,checked:!1,size:s.MEDIUM,disabled:!1},l={size:{control:`select`,options:Object.values(s),description:`Size of the switch toggle.`,table:{type:{summary:Object.values(s).join(` | `)},defaultValue:{summary:s.MEDIUM}}},checked:{control:`boolean`,description:`Controlled on/off state of the switch.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`When true, the switch is non-interactive and visually muted.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},label:{control:`text`,description:`Text label rendered next to the switch toggle.`,table:{type:{summary:`string`}}},onChange:{action:`changed`,description:`Callback fired with the new checked state when the switch is toggled.`,table:{type:{summary:`(checked: boolean) => void`}}}},u={docs:{description:{component:`A toggle switch for boolean settings. Supports multiple sizes, a text label, controlled checked state, and a disabled mode.`}}},d=Object.values(s)})),p,m,h,g,_,v,y,b,x,S,C,w;t((()=>{p=e(r(),1),n(),f(),m=a(),{within:h,expect:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/Switch`,component:i,tags:[`autodocs`],argTypes:l,args:c,parameters:u},v={args:{label:`Enable option`},play:async({canvasElement:e})=>{await g(h(e).getByText(`Enable option`)).toBeInTheDocument()}},y={args:{label:`Enabled`,checked:!0}},b={render:()=>(0,m.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:d.map(e=>(0,m.jsx)(i,{size:e,label:e.charAt(0).toUpperCase()+e.slice(1)},e))}),parameters:{docs:{source:{code:null}}}},x=()=>{let[e,t]=(0,p.useState)(!1);return(0,m.jsx)(i,{label:e?`Enabled`:`Disabled`,checked:e,onChange:t})},S={render:()=>(0,m.jsx)(x,{}),parameters:{docs:{source:{code:null}}}},C={args:{label:`Disabled`,disabled:!0}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable option'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Enable option')).toBeInTheDocument();
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
}`,...C.parameters?.docs?.source}}},w=[`Default`,`Checked`,`Sizes`,`Interactive`,`Disabled`]}))();export{y as Checked,v as Default,C as Disabled,S as Interactive,b as Sizes,w as __namedExportsOrder,_ as default};