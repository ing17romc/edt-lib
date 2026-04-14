import{n as e}from"./chunk-BneVvdWh.js";import{O as t,i as n}from"./iframe-BoT0I_bJ.js";import{n as r,t as i}from"./Footer-Dw9s-F3N.js";var a,o,s=e((()=>{t(),a=n(),o=()=>(0,a.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,width:`100%`,flexWrap:`wrap`,gap:`1rem`},children:[(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`h3`,{children:`Useful links`}),(0,a.jsxs)(`ul`,{style:{listStyle:`none`,padding:0},children:[(0,a.jsx)(`li`,{children:(0,a.jsx)(`a`,{href:`#help`,style:{textDecoration:`none`,color:`inherit`},children:`Help`})}),(0,a.jsx)(`li`,{children:(0,a.jsx)(`a`,{href:`#terms`,style:{textDecoration:`none`,color:`inherit`},children:`Terms and conditions`})}),(0,a.jsx)(`li`,{children:(0,a.jsx)(`a`,{href:`#privacy`,style:{textDecoration:`none`,color:`inherit`},children:`Privacy policy`})})]})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`h3`,{children:`Contact`}),(0,a.jsx)(`p`,{children:`Email: info@example.com`}),(0,a.jsx)(`p`,{children:`Phone: +1 234 567 8900`})]})]}),o.__docgenInfo={description:``,methods:[],displayName:`MockFooterContent`}})),c,l,u,d,f,p,m,h;e((()=>{t(),r(),s(),c=n(),{within:l,expect:u}=__STORYBOOK_MODULE_TEST__,d={title:`Layout/Footer`,component:i,tags:[`autodocs`],argTypes:{copyright:{control:`text`,description:`Copyright holder name displayed in the footer.`,table:{type:{summary:`string`}}},year:{control:`number`,description:`Year displayed next to the copyright notice.`,table:{type:{summary:`number`},defaultValue:{summary:`current year`}}},className:{control:`text`,description:`Additional CSS class name for the root element.`,table:{type:{summary:`string`}}}},parameters:{docs:{description:{component:`A page footer that renders optional child content alongside an automatic copyright notice. Accepts a configurable copyright text and year.`}}}},f={render:e=>(0,c.jsx)(i,{...e,children:(0,c.jsx)(o,{})}),args:{copyright:`All rights reserved`,year:new Date().getFullYear()},play:async({canvasElement:e})=>{let t=l(e);await u(t.getByText(`Useful links`)).toBeInTheDocument(),await u(t.getByText(`Contact`)).toBeInTheDocument(),await u(t.getByText(`Email: info@example.com`)).toBeInTheDocument()}},p={render:e=>(0,c.jsx)(i,{...e}),args:{copyright:`All rights reserved`,year:new Date().getFullYear()}},m={render:e=>(0,c.jsx)(i,{...e}),args:{copyright:`My Company Inc.`,year:2025}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Footer {...args}>\r
      <MockFooterContent />\r
    </Footer>,
  args: {
    copyright: 'All rights reserved',
    year: new Date().getFullYear()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Useful links')).toBeInTheDocument();
    await expect(canvas.getByText('Contact')).toBeInTheDocument();
    await expect(canvas.getByText('Email: info@example.com')).toBeInTheDocument();
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Footer {...args} />,
  args: {
    copyright: 'All rights reserved',
    year: new Date().getFullYear()
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Footer {...args} />,
  args: {
    copyright: 'My Company Inc.',
    year: 2025
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`CopyrightOnly`,`CustomCopyright`]}))();export{p as CopyrightOnly,m as CustomCopyright,f as Default,h as __namedExportsOrder,d as default};