import{n as e}from"./chunk-BneVvdWh.js";import{Ht as t,U as n,W as r,_t as i}from"./iframe-BrtTKpdh.js";var a,o,s,c=e((()=>{a={items:[{key:`item1`,label:`Item 1`},{key:`item2`,label:`Item 2`},{key:`item3`,label:`Item 3`}]},o={activeKey:{control:{type:`text`},description:`Key of the currently active (highlighted) menu item.`,table:{type:{summary:`string`}}}},s={docs:{description:{component:`A vertical navigation menu that highlights the active item. Accepts a list of keyed items and fires a callback when an item is selected.`}}}})),l,u,d,f,p,m,h,g,_;e((()=>{t(),r(),c(),l=i(),{within:u,expect:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/Menu`,component:n,tags:[`autodocs`],args:a,argTypes:o,parameters:s},p={play:async({canvasElement:e})=>{await d(u(e).getByRole(`menu`)).toBeInTheDocument()}},m={args:{activeKey:`item2`}},h={args:{items:[{key:`profile`,label:`Profile`},{key:`settings`,label:`Settings`},{key:`sep`,label:``,divider:!0},{key:`logout`,label:`Log out`}]}},g={render:()=>(0,l.jsx)(n,{items:[{key:`home`,label:`Home`,icon:`🏠`},{key:`settings`,label:`Settings`,icon:`⚙️`},{key:`sep`,label:``,divider:!0},{key:`disabled`,label:`No access`,disabled:!0}]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('menu')).toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    activeKey: 'item2'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'profile',
      label: 'Profile'
    }, {
      key: 'settings',
      label: 'Settings'
    }, {
      key: 'sep',
      label: '',
      divider: true
    }, {
      key: 'logout',
      label: 'Log out'
    }]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Menu items={[{
    key: 'home',
    label: 'Home',
    icon: '🏠'
  }, {
    key: 'settings',
    label: 'Settings',
    icon: '⚙️'
  }, {
    key: 'sep',
    label: '',
    divider: true
  }, {
    key: 'disabled',
    label: 'No access',
    disabled: true
  }]} />
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithActiveItem`,`WithDivider`,`WithIcons`]}))();export{p as Default,m as WithActiveItem,h as WithDivider,g as WithIcons,_ as __namedExportsOrder,f as default};