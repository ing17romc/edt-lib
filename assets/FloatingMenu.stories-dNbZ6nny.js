import{r as e,t}from"./iframe-YpqvHZo3.js";import{t as n}from"./jsx-runtime-ChNUh70B.js";import{t as r}from"./classNames-DYb3CZs3.js";var i=e(t(),1),a=`_floatingMenu_fp54v_1`,o=`_trigger_fp54v_6`,s=`_dropdown_fp54v_12`,c=`_item_fp54v_45`,l=`_icon_fp54v_69`,u=`_divider_fp54v_75`,d={floatingMenu:a,trigger:o,dropdown:s,"dropdown--bottom-start":`_dropdown--bottom-start_fp54v_24`,"dropdown--bottom-end":`_dropdown--bottom-end_fp54v_28`,"dropdown--top-start":`_dropdown--top-start_fp54v_32`,"dropdown--top-end":`_dropdown--top-end_fp54v_38`,item:c,"item--disabled":`_item--disabled_fp54v_64`,icon:l,divider:u},f=n(),p=({trigger:e,items:t,placement:n=`bottom-start`,onSelect:a,disabled:o=!1,className:s,...c})=>{let[l,u]=(0,i.useState)(!1),p=(0,i.useRef)(null);(0,i.useEffect)(()=>{let e=e=>{p.current&&!p.current.contains(e.target)&&u(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let m=e=>{a?.(e),u(!1)},h=()=>{o||u(e=>!e)},g=(0,i.isValidElement)(e)?(0,i.cloneElement)(e,{onClick:h,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),h())}}):e;return(0,f.jsxs)(`div`,{ref:p,className:r(d.floatingMenu,s),...c,children:[(0,f.jsx)(`div`,{className:d.trigger,children:g}),l&&(0,f.jsx)(`ul`,{role:`menu`,className:r(d.dropdown,d[`dropdown--${n}`]),children:t.map(e=>e.divider?(0,f.jsx)(`li`,{role:`separator`,className:d.divider},e.key):(0,f.jsx)(`li`,{role:`none`,children:(0,f.jsxs)(`button`,{role:`menuitem`,type:`button`,disabled:e.disabled,className:r(d.item,e.disabled&&d[`item--disabled`]),onClick:()=>!e.disabled&&m(e.key),children:[e.icon&&(0,f.jsx)(`span`,{className:d.icon,children:e.icon}),(0,f.jsx)(`span`,{children:e.label})]})},e.key))})]})};p.__docgenInfo={description:`Componente FloatingMenu que muestra un menú desplegable sobre un elemento trigger.\r
\r
@param trigger - Elemento que abre/cierra el menú\r
@param items - Elementos del menú\r
@param placement - Posición del menú respecto al trigger\r
@param onSelect - Callback al seleccionar un elemento\r
@param disabled - Si el menú está deshabilitado`,methods:[],displayName:`FloatingMenu`,props:{trigger:{required:!0,tsType:{name:`ReactNode`},description:`Elemento que abre el menú (trigger)`},items:{required:!0,tsType:{name:`Array`,elements:[{name:`FloatingMenuItem`}],raw:`FloatingMenuItem[]`},description:`Elementos del menú`},placement:{required:!1,tsType:{name:`union`,raw:`'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'`,elements:[{name:`literal`,value:`'bottom-start'`},{name:`literal`,value:`'bottom-end'`},{name:`literal`,value:`'top-start'`},{name:`literal`,value:`'top-end'`}]},description:`Posición del menú respecto al trigger\r
@default 'bottom-start'`,defaultValue:{value:`'bottom-start'`,computed:!1}},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:`Callback al seleccionar un elemento`},disabled:{required:!1,tsType:{name:`boolean`},description:`Si el menú está deshabilitado\r
@default false`,defaultValue:{value:`false`,computed:!1}}},composes:[`HTMLAttributes`]};var m={items:[{key:`edit`,label:`Edit`},{key:`duplicate`,label:`Duplicate`},{key:`sep`,label:``,divider:!0},{key:`delete`,label:`Delete`}],placement:`bottom-start`,disabled:!1},h={placement:{control:{type:`select`},options:[`bottom-start`,`bottom-end`,`top-start`,`top-end`],description:`Preferred alignment of the menu relative to its trigger.`,table:{type:{summary:`bottom-start | bottom-end | top-start | top-end`},defaultValue:{summary:`bottom-start`}}},disabled:{control:`boolean`,description:`When true, the trigger is non-interactive and the menu cannot be opened.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},items:{control:!1,description:"List of menu items. Use `divider: true` on an item to insert a separator.",table:{type:{summary:`{ key: string; label: string; divider?: boolean }[]`}}},onSelect:{action:`selected`,description:`Callback fired with the key of the selected menu item.`,table:{type:{summary:`(key: string) => void`}}}},g={docs:{description:{component:`A button-triggered floating dropdown menu. Items can include dividers and the menu supports configurable placement relative to its trigger.`}}},_={title:`Components/FloatingMenu`,component:p,tags:[`autodocs`],args:{...m,trigger:(0,f.jsx)(`button`,{type:`button`,children:`Options ▾`})},argTypes:h,parameters:g},v={},y={args:{placement:`bottom-end`}},b={args:{items:[{key:`edit`,label:`Edit`,icon:`✏️`},{key:`duplicate`,label:`Duplicate`,icon:`📋`},{key:`sep`,label:``,divider:!0},{key:`delete`,label:`Delete`,icon:`🗑️`}]}},x={args:{disabled:!0}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'bottom-end'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...x.parameters?.docs?.source}}};var S=[`Default`,`BottomEnd`,`WithIcons`,`Disabled`];export{y as BottomEnd,v as Default,x as Disabled,b as WithIcons,S as __namedExportsOrder,_ as default};