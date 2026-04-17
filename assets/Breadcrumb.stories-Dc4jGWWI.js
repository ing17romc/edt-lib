import{n as e}from"./chunk-BneVvdWh.js";import{gt as t,ht as n}from"./iframe-BrtTKpdh.js";var r,i,a,o=e((()=>{r={items:[{label:`Home`,href:`/`},{label:`Products`,href:`/products`},{label:`Detail`}],separator:`/`},i={items:{control:{disable:!0},description:"Ordered list of breadcrumb entries. Each item has a `label` and an optional `href`.",table:{type:{summary:`{ label: string; href?: string }[]`}}},separator:{control:{type:`text`},description:`Character or node rendered between breadcrumb items.`,table:{type:{summary:`ReactNode`},defaultValue:{summary:`/`}}}},a={docs:{description:{component:`A breadcrumb navigation trail showing the user's current location in a hierarchy. Items are separated by a customisable separator character.`}}}})),s,c,l,u,d,f,p,m;e((()=>{t(),o(),{within:s,expect:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/Breadcrumb`,component:n,tags:[`autodocs`],args:r,argTypes:i,parameters:a},u={play:async({canvasElement:e})=>{await c(s(e).getByRole(`navigation`)).toBeInTheDocument()}},d={args:{separator:`>`}},f={args:{items:[{label:`Home`}]}},p={args:{items:[{label:`Home`,href:`/`},{label:`Blog`,href:`/blog`},{label:`Technology`,href:`/blog/technology`},{label:`React`,href:`/blog/technology/react`},{label:`Components`}]}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('navigation')).toBeInTheDocument();
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    separator: '>'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home'
    }]
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Default`,`CustomSeparator`,`SingleItem`,`DeepNavigation`]}))();export{d as CustomSeparator,p as DeepNavigation,u as Default,f as SingleItem,m as __namedExportsOrder,l as default};