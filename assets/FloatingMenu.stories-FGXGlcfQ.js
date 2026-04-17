import{n as e}from"./chunk-BneVvdWh.js";import{$ as t,Ht as n,_t as r,et as i}from"./iframe-BrtTKpdh.js";var a,o,s,c=e((()=>{a={items:[{key:`edit`,label:`Edit`},{key:`duplicate`,label:`Duplicate`},{key:`sep`,label:``,divider:!0},{key:`delete`,label:`Delete`}],placement:`bottom-start`,disabled:!1},o={placement:{control:{type:`select`},options:[`bottom-start`,`bottom-end`,`top-start`,`top-end`],description:`Preferred alignment of the menu relative to its trigger.`,table:{type:{summary:`bottom-start | bottom-end | top-start | top-end`},defaultValue:{summary:`bottom-start`}}},disabled:{control:{type:`boolean`},description:`When true, the trigger is non-interactive and the menu cannot be opened.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},items:{control:{disable:!0},description:"List of menu items. Use `divider: true` on an item to insert a separator.",table:{type:{summary:`{ key: string; label: string; divider?: boolean }[]`}}},onSelect:{action:`selected`,description:`Callback fired with the key of the selected menu item.`,table:{type:{summary:`(key: string) => void`}}}},s={docs:{description:{component:`A button-triggered floating dropdown menu. Items can include dividers and the menu supports configurable placement relative to its trigger.`}}}})),l,u,d,f,p,m,h,g,_;e((()=>{n(),i(),c(),l=r(),{within:u,expect:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/FloatingMenu`,component:t,tags:[`autodocs`],args:{...a,trigger:(0,l.jsx)(`button`,{type:`button`,children:`Options ▾`})},argTypes:o,parameters:s},p={play:async({canvasElement:e})=>{await d(u(e).getByText(`Options ▾`)).toBeInTheDocument()}},m={args:{placement:`bottom-end`}},h={args:{items:[{key:`edit`,label:`Edit`,icon:`✏️`},{key:`duplicate`,label:`Duplicate`,icon:`📋`},{key:`sep`,label:``,divider:!0},{key:`delete`,label:`Delete`,icon:`🗑️`}]}},g={args:{disabled:!0}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Options ▾')).toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'bottom-end'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'edit',
      label: 'Edit',
      icon: '✏️'
    }, {
      key: 'duplicate',
      label: 'Duplicate',
      icon: '📋'
    }, {
      key: 'sep',
      label: '',
      divider: true
    }, {
      key: 'delete',
      label: 'Delete',
      icon: '🗑️'
    }]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`BottomEnd`,`WithIcons`,`Disabled`]}))();export{m as BottomEnd,p as Default,g as Disabled,h as WithIcons,_ as __namedExportsOrder,f as default};