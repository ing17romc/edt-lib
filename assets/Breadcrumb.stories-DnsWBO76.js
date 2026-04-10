import{t as e}from"./iframe-BwpCWMiM.js";import{t}from"./jsx-runtime-BsbbwSUz.js";import{t as n}from"./classNames-DYb3CZs3.js";e();var r=`_breadcrumb_q4y90_1`,i=`_list_q4y90_5`,a=`_item_q4y90_16`,o=`_link_q4y90_22`,s=`_text_q4y90_37`,c=`_separator_q4y90_45`,l={breadcrumb:r,list:i,item:a,link:o,text:s,"text--active":`_text--active_q4y90_40`,separator:c},u=t(),d=({items:e,separator:t=`/`,linkProps:r,className:i})=>(0,u.jsx)(`nav`,{"aria-label":`breadcrumb`,className:n(l.breadcrumb,i),children:(0,u.jsx)(`ol`,{className:l.list,children:e.map((i,a)=>{let o=a===e.length-1;return(0,u.jsxs)(`li`,{className:l.item,children:[o||!i.href?(0,u.jsx)(`span`,{className:n(l.text,o&&l[`text--active`]),"aria-current":o?`page`:void 0,children:i.label}):(0,u.jsx)(`a`,{href:i.href,className:l.link,...r,children:i.label}),!o&&(0,u.jsx)(`span`,{className:l.separator,"aria-hidden":`true`,children:t})]},`${i.label}-${a}`)})})});d.__docgenInfo={description:`Breadcrumb component that displays the hierarchical navigation path.\r
\r
@param items - List of path items\r
@param separator - Separator between items\r
@param linkProps - Additional props for anchors`,methods:[],displayName:`Breadcrumb`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`BreadcrumbItem`}],raw:`BreadcrumbItem[]`},description:`List of breadcrumb items`},separator:{required:!1,tsType:{name:`string`},description:`Separator between items\r
@default '/'`,defaultValue:{value:`'/'`,computed:!1}},linkProps:{required:!1,tsType:{name:`AnchorHTMLAttributes`,elements:[{name:`HTMLAnchorElement`}],raw:`AnchorHTMLAttributes<HTMLAnchorElement>`},description:`Additional props for anchors`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class for the container`}}};var f={title:`Components/Breadcrumb`,component:d,tags:[`autodocs`],args:{items:[{label:`Home`,href:`/`},{label:`Products`,href:`/products`},{label:`Detail`}],separator:`/`},argTypes:{items:{control:!1,description:"Ordered list of breadcrumb entries. Each item has a `label` and an optional `href`.",table:{type:{summary:`{ label: string; href?: string }[]`}}},separator:{control:`text`,description:`Character or node rendered between breadcrumb items.`,table:{type:{summary:`ReactNode`},defaultValue:{summary:`/`}}}},parameters:{docs:{description:{component:`A breadcrumb navigation trail showing the user's current location in a hierarchy. Items are separated by a customisable separator character.`}}}},p={},m={args:{separator:`>`}},h={args:{items:[{label:`Home`}]}},g={args:{items:[{label:`Home`,href:`/`},{label:`Blog`,href:`/blog`},{label:`Technology`,href:`/blog/technology`},{label:`React`,href:`/blog/technology/react`},{label:`Components`}]}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    separator: '>'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home'
    }]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Blog',
      href: '/blog'
    }, {
      label: 'Technology',
      href: '/blog/technology'
    }, {
      label: 'React',
      href: '/blog/technology/react'
    }, {
      label: 'Components'
    }]
  }
}`,...g.parameters?.docs?.source}}};var _=[`Default`,`CustomSeparator`,`SingleItem`,`DeepNavigation`];export{m as CustomSeparator,g as DeepNavigation,p as Default,h as SingleItem,_ as __namedExportsOrder,f as default};