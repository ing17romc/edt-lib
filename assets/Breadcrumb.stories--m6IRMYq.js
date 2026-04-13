import{n as e}from"./chunk-BneVvdWh.js";import{S as t}from"./iframe-BoFEwu8W.js";import{t as n}from"./jsx-runtime-Bn1Ys6_W.js";import{n as r,t as i}from"./classNames-Bj-wXTiJ.js";var a,o,s,c,l,u,d,f=e((()=>{a=`_breadcrumb_q4y90_1`,o=`_list_q4y90_5`,s=`_item_q4y90_16`,c=`_link_q4y90_22`,l=`_text_q4y90_37`,u=`_separator_q4y90_45`,d={breadcrumb:a,list:o,item:s,link:c,text:l,"text--active":`_text--active_q4y90_40`,separator:u}})),p,m,h=e((()=>{t(),r(),f(),p=n(),m=({items:e,separator:t=`/`,linkProps:n,className:r})=>(0,p.jsx)(`nav`,{"aria-label":`breadcrumb`,className:i(d.breadcrumb,r),children:(0,p.jsx)(`ol`,{className:d.list,children:e.map((r,a)=>{let o=a===e.length-1;return(0,p.jsxs)(`li`,{className:d.item,children:[o||!r.href?(0,p.jsx)(`span`,{className:i(d.text,o&&d[`text--active`]),"aria-current":o?`page`:void 0,children:r.label}):(0,p.jsx)(`a`,{href:r.href,className:d.link,...n,children:r.label}),!o&&(0,p.jsx)(`span`,{className:d.separator,"aria-hidden":`true`,children:t})]},`${r.label}-${a}`)})})}),m.__docgenInfo={description:`Breadcrumb component that displays the hierarchical navigation path.\r
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