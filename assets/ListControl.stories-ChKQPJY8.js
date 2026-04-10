import{r as e,t}from"./iframe-BwpCWMiM.js";import{t as n}from"./jsx-runtime-BsbbwSUz.js";import{t as r}from"./classNames-DYb3CZs3.js";var i=e(t(),1),a=`_listControl_1y49j_1`,o=`_item_1y49j_10`,s=`_label_1y49j_30`,c=`_description_1y49j_44`,l={listControl:a,item:o,"item--disabled":`_item--disabled_1y49j_22`,"item--selected":`_item--selected_1y49j_25`,label:s,description:c},u=n(),d=({items:e,onSelect:t,multiSelect:n=!1,className:i,...a})=>(0,u.jsx)(`ul`,{role:`listbox`,"aria-multiselectable":n,className:r(l.listControl,i),...a,children:e.map(e=>(0,u.jsxs)(`li`,{role:`option`,"aria-selected":e.selected??!1,"aria-disabled":e.disabled,className:r(l.item,e.selected&&l[`item--selected`],e.disabled&&l[`item--disabled`]),onClick:()=>!e.disabled&&t?.(e.key),onKeyDown:n=>{(n.key===`Enter`||n.key===` `)&&(n.preventDefault(),e.disabled||t?.(e.key))},children:[(0,u.jsx)(`span`,{className:l.label,children:e.label}),e.description&&(0,u.jsx)(`span`,{className:l.description,children:e.description})]},e.key))});d.__docgenInfo={description:`ListControl component that displays a selectable list of items.\r
\r
@param items - List items\r
@param onSelect - Callback when selecting an item\r
@param multiSelect - Whether it allows multiple selection`,methods:[],displayName:`ListControl`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`ListControlItem`}],raw:`ListControlItem[]`},description:`List items`},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:`Callback when selecting an item`},multiSelect:{required:!1,tsType:{name:`boolean`},description:`Whether it allows multiple selection\r
@default false`,defaultValue:{value:`false`,computed:!1}}},composes:[`HTMLAttributes`]};var f={title:`Components/ListControl`,component:d,tags:[`autodocs`],args:{items:[{key:`item1`,label:`Item 1`},{key:`item2`,label:`Item 2`,description:`Secondary description`},{key:`item3`,label:`Item 3`}],multiSelect:!1},argTypes:{multiSelect:{control:`boolean`,description:`When true, multiple items can be selected simultaneously.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},items:{control:!1,description:`List of selectable items. Each item requires a unique key and a display label.`,table:{type:{summary:`{ key: string; label: string; description?: string }[]`}}},onSelect:{action:`selected`,description:`Callback fired with the selected item key(s) when the selection changes.`,table:{type:{summary:`(keys: string[]) => void`}}}},parameters:{docs:{description:{component:`A scrollable list control for selecting one or multiple items. Supports single and multi-select modes and fires a callback with the selected keys.`}}}},p={},m={args:{items:[{key:`item1`,label:`Selected`,selected:!0},{key:`item2`,label:`Not selected`},{key:`item3`,label:`Disabled`,disabled:!0}]}},h=()=>{let[e,t]=(0,i.useState)([{key:`item1`,label:`Item A`},{key:`item2`,label:`Item B`},{key:`item3`,label:`Item C`}]);return(0,u.jsx)(d,{items:e,onSelect:e=>{t(t=>t.map(t=>({...t,selected:t.key===e})))}})},g={render:()=>(0,u.jsx)(h,{})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveListControl />
}`,...g.parameters?.docs?.source}}};var _=[`Default`,`WithSelection`,`Interactive`];export{p as Default,g as Interactive,m as WithSelection,_ as __namedExportsOrder,f as default};