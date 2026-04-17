import{a as e,n as t}from"./chunk-BneVvdWh.js";import{G as n,Ht as r,K as i,_t as a}from"./iframe-BrtTKpdh.js";var o,s,c,l=t((()=>{o={items:[{key:`item1`,label:`Item 1`},{key:`item2`,label:`Item 2`,description:`Secondary description`},{key:`item3`,label:`Item 3`}],multiSelect:!1},s={multiSelect:{control:{type:`boolean`},description:`When true, multiple items can be selected simultaneously.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},items:{control:{disable:!0},description:`List of selectable items. Each item requires a unique key and a display label.`,table:{type:{summary:`{ key: string; label: string; description?: string }[]`}}},onSelect:{action:`selected`,description:`Callback fired with the selected item key(s) when the selection changes.`,table:{type:{summary:`(key: string) => void`}}}},c={docs:{description:{component:`A scrollable list control for selecting one or multiple items. Supports single and multi-select modes and fires a callback with the selected keys.`}}}})),u,d,f,p,m,h,g,_,v,y;t((()=>{u=e(r(),1),i(),l(),d=a(),{within:f,expect:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/ListControl`,component:n,tags:[`autodocs`],args:o,argTypes:s,parameters:c},h={play:async({canvasElement:e})=>{await p(f(e).getByRole(`listbox`)).toBeInTheDocument()}},g={args:{items:[{key:`item1`,label:`Selected`,selected:!0},{key:`item2`,label:`Not selected`},{key:`item3`,label:`Disabled`,disabled:!0}]}},_=()=>{let[e,t]=(0,u.useState)([{key:`item1`,label:`Item A`},{key:`item2`,label:`Item B`},{key:`item3`,label:`Item C`}]);return(0,d.jsx)(n,{items:e,onSelect:e=>{t(t=>t.map(t=>({...t,selected:t.key===e})))}})},v={render:()=>(0,d.jsx)(_,{})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('listbox')).toBeInTheDocument();
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'item1',
      label: 'Selected',
      selected: true
    }, {
      key: 'item2',
      label: 'Not selected'
    }, {
      key: 'item3',
      label: 'Disabled',
      disabled: true
    }]
  }
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveListControl />
}`,...v.parameters?.docs?.source}}},y=[`Default`,`WithSelection`,`Interactive`]}))();export{h as Default,v as Interactive,g as WithSelection,y as __namedExportsOrder,m as default};