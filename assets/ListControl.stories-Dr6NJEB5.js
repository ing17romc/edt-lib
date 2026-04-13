import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-BoFEwu8W.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{n as i,t as a}from"./classNames-Bj-wXTiJ.js";var o,s,c,l,u,d=t((()=>{o=`_listControl_1y49j_1`,s=`_item_1y49j_10`,c=`_label_1y49j_30`,l=`_description_1y49j_44`,u={listControl:o,item:s,"item--disabled":`_item--disabled_1y49j_22`,"item--selected":`_item--selected_1y49j_25`,label:c,description:l}})),f,p,m=t((()=>{n(),i(),d(),f=r(),p=({items:e,onSelect:t,multiSelect:n=!1,className:r,...i})=>(0,f.jsx)(`ul`,{role:`listbox`,"aria-multiselectable":n,className:a(u.listControl,r),...i,children:e.map(e=>(0,f.jsxs)(`li`,{role:`option`,"aria-selected":e.selected??!1,"aria-disabled":e.disabled,className:a(u.item,e.selected&&u[`item--selected`],e.disabled&&u[`item--disabled`]),onClick:()=>!e.disabled&&t?.(e.key),onKeyDown:n=>{(n.key===`Enter`||n.key===` `)&&(n.preventDefault(),e.disabled||t?.(e.key))},children:[(0,f.jsx)(`span`,{className:u.label,children:e.label}),e.description&&(0,f.jsx)(`span`,{className:u.description,children:e.description})]},e.key))}),p.__docgenInfo={description:`ListControl component that displays a selectable list of items.\r
\r
@param items - List items\r
@param onSelect - Callback when selecting an item\r
@param multiSelect - Whether it allows multiple selection`,methods:[],displayName:`ListControl`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`ListControlItem`}],raw:`ListControlItem[]`},description:`List items`},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:`Callback when selecting an item`},multiSelect:{required:!1,tsType:{name:`boolean`},description:`Whether it allows multiple selection\r
@default false`,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]}})),h,g,_,v=t((()=>{h={items:[{key:`item1`,label:`Item 1`},{key:`item2`,label:`Item 2`,description:`Secondary description`},{key:`item3`,label:`Item 3`}],multiSelect:!1},g={multiSelect:{control:{type:`boolean`},description:`When true, multiple items can be selected simultaneously.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},items:{control:{disable:!0},description:`List of selectable items. Each item requires a unique key and a display label.`,table:{type:{summary:`{ key: string; label: string; description?: string }[]`}}},onSelect:{action:`selected`,description:`Callback fired with the selected item key(s) when the selection changes.`,table:{type:{summary:`(key: string) => void`}}}},_={docs:{description:{component:`A scrollable list control for selecting one or multiple items. Supports single and multi-select modes and fires a callback with the selected keys.`}}}})),y,b,x,S,C,w,T,E,D,O;t((()=>{y=e(n(),1),m(),v(),b=r(),{within:x,expect:S}=__STORYBOOK_MODULE_TEST__,C={title:`Components/ListControl`,component:p,tags:[`autodocs`],args:h,argTypes:g,parameters:_},w={play:async({canvasElement:e})=>{await S(x(e).getByRole(`listbox`)).toBeInTheDocument()}},T={args:{items:[{key:`item1`,label:`Selected`,selected:!0},{key:`item2`,label:`Not selected`},{key:`item3`,label:`Disabled`,disabled:!0}]}},E=()=>{let[e,t]=(0,y.useState)([{key:`item1`,label:`Item A`},{key:`item2`,label:`Item B`},{key:`item3`,label:`Item C`}]);return(0,b.jsx)(p,{items:e,onSelect:e=>{t(t=>t.map(t=>({...t,selected:t.key===e})))}})},D={render:()=>(0,b.jsx)(E,{})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('listbox')).toBeInTheDocument();
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveListControl />
}`,...D.parameters?.docs?.source}}},O=[`Default`,`WithSelection`,`Interactive`]}))();export{w as Default,D as Interactive,T as WithSelection,O as __namedExportsOrder,C as default};