import{t as e}from"./iframe-BwpCWMiM.js";import{t}from"./jsx-runtime-BsbbwSUz.js";import{t as n}from"./Footer-dmEf5lLh.js";e();var r=t(),i=()=>(0,r.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,width:`100%`,flexWrap:`wrap`,gap:`1rem`},children:[(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`h3`,{children:`Useful links`}),(0,r.jsxs)(`ul`,{style:{listStyle:`none`,padding:0},children:[(0,r.jsx)(`li`,{children:(0,r.jsx)(`a`,{href:`#help`,style:{textDecoration:`none`,color:`inherit`},children:`Help`})}),(0,r.jsx)(`li`,{children:(0,r.jsx)(`a`,{href:`#terms`,style:{textDecoration:`none`,color:`inherit`},children:`Terms and conditions`})}),(0,r.jsx)(`li`,{children:(0,r.jsx)(`a`,{href:`#privacy`,style:{textDecoration:`none`,color:`inherit`},children:`Privacy policy`})})]})]}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`h3`,{children:`Contact`}),(0,r.jsx)(`p`,{children:`Email: info@example.com`}),(0,r.jsx)(`p`,{children:`Phone: +1 234 567 8900`})]})]});i.__docgenInfo={description:``,methods:[],displayName:`MockFooterContent`};var a={title:`Layout/Footer`,component:n,tags:[`autodocs`],argTypes:{copyright:{control:`text`,description:`Copyright holder name displayed in the footer.`,table:{type:{summary:`string`}}},year:{control:`number`,description:`Year displayed next to the copyright notice.`,table:{type:{summary:`number`},defaultValue:{summary:`current year`}}},className:{control:`text`,description:`Additional CSS class name for the root element.`,table:{type:{summary:`string`}}}},parameters:{docs:{description:{component:`A page footer that renders optional child content alongside an automatic copyright notice. Accepts a configurable copyright text and year.`}}}},o={render:e=>(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{})}),args:{copyright:`All rights reserved`,year:new Date().getFullYear()}},s={render:e=>(0,r.jsx)(n,{...e}),args:{copyright:`All rights reserved`,year:new Date().getFullYear()}},c={render:e=>(0,r.jsx)(n,{...e}),args:{copyright:`My Company Inc.`,year:2025}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Footer {...args}>\r
      <MockFooterContent />\r
    </Footer>,
  args: {
    copyright: 'All rights reserved',
    year: new Date().getFullYear()
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Footer {...args} />,
  args: {
    copyright: 'All rights reserved',
    year: new Date().getFullYear()
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Footer {...args} />,
  args: {
    copyright: 'My Company Inc.',
    year: 2025
  }
}`,...c.parameters?.docs?.source}}};var l=[`Default`,`CopyrightOnly`,`CustomCopyright`];export{s as CopyrightOnly,c as CustomCopyright,o as Default,l as __namedExportsOrder,a as default};