import{t as e}from"./iframe-YpqvHZo3.js";import{t}from"./jsx-runtime-ChNUh70B.js";import{t as n}from"./classNames-DYb3CZs3.js";e();var r=`_menu_1jb1r_1`,i=`_item_1jb1r_8`,a=`_icon_1jb1r_38`,o=`_label_1jb1r_46`,s=`_divider_1jb1r_50`,c={menu:r,item:i,"item--active":`_item--active_1jb1r_28`,"item--disabled":`_item--disabled_1jb1r_33`,icon:a,label:o,divider:s},l=t(),u=({items:e,activeKey:t,onSelect:r,className:i,...a})=>(0,l.jsx)(`ul`,{role:`menu`,className:n(c.menu,i),...a,children:e.map(e=>e.divider?(0,l.jsx)(`li`,{role:`separator`,className:c.divider},e.key):(0,l.jsx)(`li`,{role:`none`,children:(0,l.jsxs)(`button`,{role:`menuitem`,type:`button`,disabled:e.disabled,className:n(c.item,e.key===t&&c[`item--active`],e.disabled&&c[`item--disabled`]),onClick:()=>!e.disabled&&r?.(e.key),children:[e.icon&&(0,l.jsx)(`span`,{className:c.icon,children:e.icon}),(0,l.jsx)(`span`,{className:c.label,children:e.label})]})},e.key))});u.__docgenInfo={description:`Componente Menu que muestra una lista de elementos de navegación o acciones.\r
\r
@param items - Elementos del menú\r
@param activeKey - Key del elemento activo\r
@param onSelect - Callback al seleccionar un elemento`,methods:[],displayName:`Menu`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`MenuItem`}],raw:`MenuItem[]`},description:`Lista de elementos del menú`},activeKey:{required:!1,tsType:{name:`string`},description:`Key del elemento activo`},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:`Callback al seleccionar un elemento`}},composes:[`HTMLAttributes`]};var d={title:`Components/Menu`,component:u,tags:[`autodocs`],args:{items:[{key:`item1`,label:`Item 1`},{key:`item2`,label:`Item 2`},{key:`item3`,label:`Item 3`}]},argTypes:{activeKey:{control:`text`,description:`Key of the currently active (highlighted) menu item.`,table:{type:{summary:`string`}}}},parameters:{docs:{description:{component:`A vertical navigation menu that highlights the active item. Accepts a list of keyed items and fires a callback when an item is selected.`}}}},f={},p={args:{activeKey:`item2`}},m={args:{items:[{key:`profile`,label:`Perfil`},{key:`settings`,label:`Configuración`},{key:`sep`,label:``,divider:!0},{key:`logout`,label:`Cerrar sesión`}]}},h={render:()=>(0,l.jsx)(u,{items:[{key:`home`,label:`Inicio`,icon:`🏠`},{key:`settings`,label:`Ajustes`,icon:`⚙️`},{key:`sep`,label:``,divider:!0},{key:`disabled`,label:`Sin acceso`,disabled:!0}]})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    activeKey: 'item2'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'profile',
      label: 'Perfil'
    }, {
      key: 'settings',
      label: 'Configuración'
    }, {
      key: 'sep',
      label: '',
      divider: true
    }, {
      key: 'logout',
      label: 'Cerrar sesión'
    }]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Menu items={[{
    key: 'home',
    label: 'Inicio',
    icon: '🏠'
  }, {
    key: 'settings',
    label: 'Ajustes',
    icon: '⚙️'
  }, {
    key: 'sep',
    label: '',
    divider: true
  }, {
    key: 'disabled',
    label: 'Sin acceso',
    disabled: true
  }]} />
}`,...h.parameters?.docs?.source}}};var g=[`Default`,`WithActiveItem`,`WithDivider`,`WithIcons`];export{f as Default,p as WithActiveItem,m as WithDivider,h as WithIcons,g as __namedExportsOrder,d as default};