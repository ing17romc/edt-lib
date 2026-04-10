import{t as e}from"./iframe-YpqvHZo3.js";import{t}from"./jsx-runtime-ChNUh70B.js";import{t as n}from"./NavBar-7zuNr1As.js";e();var r=t(),i=()=>(0,r.jsx)(`div`,{style:{width:`32px`,height:`32px`,backgroundColor:`var(--color-primary)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`white`,fontWeight:`bold`,borderRadius:`4px`},children:`L`}),a=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(`a`,{href:`#inicio`,style:{textDecoration:`none`,color:`inherit`},children:`Inicio`}),(0,r.jsx)(`a`,{href:`#acerca`,style:{textDecoration:`none`,color:`inherit`},children:`Acerca de`}),(0,r.jsx)(`a`,{href:`#contacto`,style:{textDecoration:`none`,color:`inherit`},children:`Contacto`})]});i.__docgenInfo={description:``,methods:[],displayName:`MockLogo`},a.__docgenInfo={description:``,methods:[],displayName:`MockNav`};var o={title:`Layout/NavBar`,component:n,tags:[`autodocs`],argTypes:{title:{control:`text`,description:`Application or page title displayed in the navigation bar.`,table:{type:{summary:`string`}}},className:{control:`text`,description:`Additional CSS class name for the root element.`,table:{type:{summary:`string`}}}},parameters:{docs:{description:{component:`A top navigation bar that combines a logo slot, an optional title, and navigation link children. Sticks to the top of the page and spans full width.`}}}},s={render:e=>(0,r.jsx)(n,{...e,logo:(0,r.jsx)(i,{}),title:`My App`,children:(0,r.jsx)(a,{})}),args:{}},c={render:e=>(0,r.jsx)(n,{...e,title:`My App`}),args:{}},l={render:e=>(0,r.jsx)(n,{...e,logo:(0,r.jsx)(i,{})}),args:{}},u={render:e=>(0,r.jsx)(n,{...e}),args:{}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <NavBar {...args} logo={<MockLogo />} title="My App">\r
      <MockNav />\r
    </NavBar>,
  args: {}
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <NavBar {...args} title="My App" />,
  args: {}
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <NavBar {...args} logo={<MockLogo />} />,
  args: {}
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <NavBar {...args} />,
  args: {}
}`,...u.parameters?.docs?.source}}};var d=[`Default`,`TitleOnly`,`LogoOnly`,`Empty`];export{s as Default,u as Empty,l as LogoOnly,c as TitleOnly,d as __namedExportsOrder,o as default};