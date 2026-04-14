import{n as e}from"./chunk-BneVvdWh.js";import{O as t,a as n,i as r,o as i}from"./iframe-BoT0I_bJ.js";var a,o,s,c,l,u,d=e((()=>{a=`_menu_19wa5_1`,o=`_item_19wa5_8`,s=`_icon_19wa5_38`,c=`_label_19wa5_46`,l=`_divider_19wa5_50`,u={menu:a,item:o,"item--active":`_item--active_19wa5_28`,"item--disabled":`_item--disabled_19wa5_33`,icon:s,label:c,divider:l}})),f,p,m=e((()=>{t(),i(),d(),f=r(),p=({items:e,activeKey:t,onSelect:r,className:i,...a})=>(0,f.jsx)(`ul`,{role:`menu`,className:n(u.menu,i),...a,children:e.map(e=>e.divider?(0,f.jsx)(`li`,{role:`separator`,className:u.divider},e.key):(0,f.jsx)(`li`,{role:`none`,children:(0,f.jsxs)(`button`,{role:`menuitem`,type:`button`,disabled:e.disabled,className:n(u.item,e.key===t&&u[`item--active`],e.disabled&&u[`item--disabled`]),onClick:()=>!e.disabled&&r?.(e.key),children:[e.icon&&(0,f.jsx)(`span`,{className:u.icon,children:e.icon}),(0,f.jsx)(`span`,{className:u.label,children:e.label})]})},e.key))}),p.__docgenInfo={description:`Menu component that displays a list of navigation or action items.\r
\r
@param items - Menu items\r
@param activeKey - Key of the active item\r
@param onSelect - Callback when selecting an item`,methods:[],displayName:`Menu`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`MenuItem`}],raw:`MenuItem[]`},description:`List of menu items`},activeKey:{required:!1,tsType:{name:`string`},description:`Key of the active element`},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:`Callback when selecting an item`}},composes:[`Omit`]}})),h,g,_,v=e((()=>{h={items:[{key:`item1`,label:`Item 1`},{key:`item2`,label:`Item 2`},{key:`item3`,label:`Item 3`}]},g={activeKey:{control:{type:`text`},description:`Key of the currently active (highlighted) menu item.`,table:{type:{summary:`string`}}}},_={docs:{description:{component:`A vertical navigation menu that highlights the active item. Accepts a list of keyed items and fires a callback when an item is selected.`}}}})),y,b,x,S,C,w,T,E,D;e((()=>{t(),m(),v(),y=r(),{within:b,expect:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/Menu`,component:p,tags:[`autodocs`],args:h,argTypes:g,parameters:_},C={play:async({canvasElement:e})=>{await x(b(e).getByRole(`menu`)).toBeInTheDocument()}},w={args:{activeKey:`item2`}},T={args:{items:[{key:`profile`,label:`Profile`},{key:`settings`,label:`Settings`},{key:`sep`,label:``,divider:!0},{key:`logout`,label:`Log out`}]}},E={render:()=>(0,y.jsx)(p,{items:[{key:`home`,label:`Home`,icon:`🏠`},{key:`settings`,label:`Settings`,icon:`⚙️`},{key:`sep`,label:``,divider:!0},{key:`disabled`,label:`No access`,disabled:!0}]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('menu')).toBeInTheDocument();
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    activeKey: 'item2'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`Default`,`WithActiveItem`,`WithDivider`,`WithIcons`]}))();export{C as Default,w as WithActiveItem,T as WithDivider,E as WithIcons,D as __namedExportsOrder,S as default};