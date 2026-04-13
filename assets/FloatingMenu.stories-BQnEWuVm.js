import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-BoFEwu8W.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{n as i,t as a}from"./classNames-Bj-wXTiJ.js";var o,s,c,l,u,d,f,p=t((()=>{o=`_floatingMenu_fp54v_1`,s=`_trigger_fp54v_6`,c=`_dropdown_fp54v_12`,l=`_item_fp54v_45`,u=`_icon_fp54v_69`,d=`_divider_fp54v_75`,f={floatingMenu:o,trigger:s,dropdown:c,"dropdown--bottom-start":`_dropdown--bottom-start_fp54v_24`,"dropdown--bottom-end":`_dropdown--bottom-end_fp54v_28`,"dropdown--top-start":`_dropdown--top-start_fp54v_32`,"dropdown--top-end":`_dropdown--top-end_fp54v_38`,item:l,"item--disabled":`_item--disabled_fp54v_64`,icon:u,divider:d}})),m,h,g,_=t((()=>{m=e(n(),1),i(),p(),h=r(),g=({trigger:e,items:t,placement:n=`bottom-start`,onSelect:r,disabled:i=!1,className:o,...s})=>{let[c,l]=(0,m.useState)(!1),u=(0,m.useRef)(null);(0,m.useEffect)(()=>{let e=e=>{u.current&&!u.current.contains(e.target)&&l(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let d=e=>{r?.(e),l(!1)},p=()=>{i||l(e=>!e)},g=(0,m.isValidElement)(e)?(0,m.cloneElement)(e,{onClick:p,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),p())}}):e;return(0,h.jsxs)(`div`,{ref:u,className:a(f.floatingMenu,o),...s,children:[(0,h.jsx)(`div`,{className:f.trigger,children:g}),c&&(0,h.jsx)(`ul`,{role:`menu`,className:a(f.dropdown,f[`dropdown--${n}`]),children:t.map(e=>e.divider?(0,h.jsx)(`li`,{role:`separator`,className:f.divider},e.key):(0,h.jsx)(`li`,{role:`none`,children:(0,h.jsxs)(`button`,{role:`menuitem`,type:`button`,disabled:e.disabled,className:a(f.item,e.disabled&&f[`item--disabled`]),onClick:()=>!e.disabled&&d(e.key),children:[e.icon&&(0,h.jsx)(`span`,{className:f.icon,children:e.icon}),(0,h.jsx)(`span`,{children:e.label})]})},e.key))})]})},g.__docgenInfo={description:`FloatingMenu component that displays a dropdown menu over a trigger element.\r
\r
@param trigger - Element that opens/closes the menu\r
@param items - Menu items\r
@param placement - Menu position relative to the trigger\r
@param onSelect - Callback when selecting an item\r
@param disabled - Whether the menu is disabled`,methods:[],displayName:`FloatingMenu`,props:{trigger:{required:!0,tsType:{name:`ReactNode`},description:`Element that opens the menu (trigger)`},items:{required:!0,tsType:{name:`Array`,elements:[{name:`FloatingMenuItem`}],raw:`FloatingMenuItem[]`},description:`Menu items`},placement:{required:!1,tsType:{name:`union`,raw:`'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'`,elements:[{name:`literal`,value:`'bottom-start'`},{name:`literal`,value:`'bottom-end'`},{name:`literal`,value:`'top-start'`},{name:`literal`,value:`'top-end'`}]},description:`Menu position relative to the trigger\r
@default 'bottom-start'`,defaultValue:{value:`'bottom-start'`,computed:!1}},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:`Callback when selecting an item`},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the menu is disabled\r
@default false`,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]}})),v,y,b,x=t((()=>{v={items:[{key:`edit`,label:`Edit`},{key:`duplicate`,label:`Duplicate`},{key:`sep`,label:``,divider:!0},{key:`delete`,label:`Delete`}],placement:`bottom-start`,disabled:!1},y={placement:{control:{type:`select`},options:[`bottom-start`,`bottom-end`,`top-start`,`top-end`],description:`Preferred alignment of the menu relative to its trigger.`,table:{type:{summary:`bottom-start | bottom-end | top-start | top-end`},defaultValue:{summary:`bottom-start`}}},disabled:{control:{type:`boolean`},description:`When true, the trigger is non-interactive and the menu cannot be opened.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},items:{control:{disable:!0},description:"List of menu items. Use `divider: true` on an item to insert a separator.",table:{type:{summary:`{ key: string; label: string; divider?: boolean }[]`}}},onSelect:{action:`selected`,description:`Callback fired with the key of the selected menu item.`,table:{type:{summary:`(key: string) => void`}}}},b={docs:{description:{component:`A button-triggered floating dropdown menu. Items can include dividers and the menu supports configurable placement relative to its trigger.`}}}})),S,C,w,T,E,D,O,k,A;t((()=>{n(),_(),x(),S=r(),{within:C,expect:w}=__STORYBOOK_MODULE_TEST__,T={title:`Components/FloatingMenu`,component:g,tags:[`autodocs`],args:{...v,trigger:(0,S.jsx)(`button`,{type:`button`,children:`Options ▾`})},argTypes:y,parameters:b},E={play:async({canvasElement:e})=>{await w(C(e).getByText(`Options ▾`)).toBeInTheDocument()}},D={args:{placement:`bottom-end`}},O={args:{items:[{key:`edit`,label:`Edit`,icon:`✏️`},{key:`duplicate`,label:`Duplicate`,icon:`📋`},{key:`sep`,label:``,divider:!0},{key:`delete`,label:`Delete`,icon:`🗑️`}]}},k={args:{disabled:!0}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Options ▾')).toBeInTheDocument();
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'bottom-end'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...k.parameters?.docs?.source}}},A=[`Default`,`BottomEnd`,`WithIcons`,`Disabled`]}))();export{D as BottomEnd,E as Default,k as Disabled,O as WithIcons,A as __namedExportsOrder,T as default};