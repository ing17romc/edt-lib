import{n as e}from"./chunk-BneVvdWh.js";import{O as t,a as n,i as r,o as i}from"./iframe-BoT0I_bJ.js";var a,o,s,c,l,u,d,f=e((()=>{a=`_breadcrumb_12vbf_1`,o=`_list_12vbf_5`,s=`_item_12vbf_16`,c=`_link_12vbf_22`,l=`_text_12vbf_37`,u=`_separator_12vbf_45`,d={breadcrumb:a,list:o,item:s,link:c,text:l,"text--active":`_text--active_12vbf_40`,separator:u}})),p,m,h=e((()=>{t(),i(),f(),p=r(),m=({items:e,separator:t=`/`,linkProps:r,className:i})=>(0,p.jsx)(`nav`,{"aria-label":`breadcrumb`,className:n(d.breadcrumb,i),children:(0,p.jsx)(`ol`,{className:d.list,children:e.map((i,a)=>{let o=a===e.length-1;return(0,p.jsxs)(`li`,{className:d.item,children:[o||!i.href?(0,p.jsx)(`span`,{className:n(d.text,o&&d[`text--active`]),"aria-current":o?`page`:void 0,children:i.label}):(0,p.jsx)(`a`,{href:i.href,className:d.link,...r,children:i.label}),!o&&(0,p.jsx)(`span`,{className:d.separator,"aria-hidden":`true`,children:t})]},`${i.label}-${a}`)})})}),m.__docgenInfo={description:`Breadcrumb component that displays the hierarchical navigation path.\r
\r
@param items - List of path items\r
@param separator - Separator between items\r
@param linkProps - Additional props for anchors`,methods:[],displayName:`Breadcrumb`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`BreadcrumbItem`}],raw:`BreadcrumbItem[]`},description:`List of breadcrumb items`},separator:{required:!1,tsType:{name:`string`},description:`Separator between items\r
@default '/'`,defaultValue:{value:`'/'`,computed:!1}},linkProps:{required:!1,tsType:{name:`AnchorHTMLAttributes`,elements:[{name:`HTMLAnchorElement`}],raw:`AnchorHTMLAttributes<HTMLAnchorElement>`},description:`Additional props for anchors`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class for the container`}}}})),g,_,v,y=e((()=>{g={items:[{label:`Home`,href:`/`},{label:`Products`,href:`/products`},{label:`Detail`}],separator:`/`},_={items:{control:{disable:!0},description:"Ordered list of breadcrumb entries. Each item has a `label` and an optional `href`.",table:{type:{summary:`{ label: string; href?: string }[]`}}},separator:{control:{type:`text`},description:`Character or node rendered between breadcrumb items.`,table:{type:{summary:`ReactNode`},defaultValue:{summary:`/`}}}},v={docs:{description:{component:`A breadcrumb navigation trail showing the user's current location in a hierarchy. Items are separated by a customisable separator character.`}}}})),b,x,S,C,w,T,E,D;e((()=>{h(),y(),{within:b,expect:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/Breadcrumb`,component:m,tags:[`autodocs`],args:g,argTypes:_,parameters:v},C={play:async({canvasElement:e})=>{await x(b(e).getByRole(`navigation`)).toBeInTheDocument()}},w={args:{separator:`>`}},T={args:{items:[{label:`Home`}]}},E={args:{items:[{label:`Home`,href:`/`},{label:`Blog`,href:`/blog`},{label:`Technology`,href:`/blog/technology`},{label:`React`,href:`/blog/technology/react`},{label:`Components`}]}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('navigation')).toBeInTheDocument();
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    separator: '>'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home'
    }]
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`Default`,`CustomSeparator`,`SingleItem`,`DeepNavigation`]}))();export{w as CustomSeparator,E as DeepNavigation,C as Default,T as SingleItem,D as __namedExportsOrder,S as default};