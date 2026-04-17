import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./NavBar-DzJO8C21.js";import{Ht as r,_t as i}from"./iframe-BrtTKpdh.js";var a,o,s,c=e((()=>{r(),a=i(),o=()=>(0,a.jsx)(`div`,{style:{width:`32px`,height:`32px`,backgroundColor:`var(--color-primary)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`white`,fontWeight:`bold`,borderRadius:`4px`},children:`L`}),s=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`a`,{href:`#inicio`,style:{textDecoration:`none`,color:`inherit`},children:`Inicio`}),(0,a.jsx)(`a`,{href:`#acerca`,style:{textDecoration:`none`,color:`inherit`},children:`Acerca de`}),(0,a.jsx)(`a`,{href:`#contacto`,style:{textDecoration:`none`,color:`inherit`},children:`Contacto`})]}),o.__docgenInfo={description:``,methods:[],displayName:`MockLogo`},s.__docgenInfo={description:``,methods:[],displayName:`MockNav`}})),l,u,d,f,p,m,h,g,_;e((()=>{r(),t(),c(),l=i(),{within:u,expect:d}=__STORYBOOK_MODULE_TEST__,f={title:`Layout/NavBar`,component:n,tags:[`autodocs`],argTypes:{title:{control:`text`,description:`Application or page title displayed in the navigation bar.`,table:{type:{summary:`string`}}},className:{control:`text`,description:`Additional CSS class name for the root element.`,table:{type:{summary:`string`}}}},parameters:{layout:`fullscreen`,docs:{description:{component:`A top navigation bar that combines a logo slot, an optional title, and navigation link children. Sticks to the top of the page and spans full width.`}}}},p={render:e=>(0,l.jsx)(n,{...e,logo:(0,l.jsx)(o,{}),title:`My App`,children:(0,l.jsx)(s,{})}),args:{},play:async({canvasElement:e})=>{let t=u(e);await d(t.getByText(`My App`)).toBeInTheDocument(),await d(t.getByText(`Inicio`)).toBeInTheDocument(),await d(t.getByText(`Acerca de`)).toBeInTheDocument(),await d(t.getByText(`Contacto`)).toBeInTheDocument()}},m={render:e=>(0,l.jsx)(n,{...e,title:`My App`}),args:{}},h={render:e=>(0,l.jsx)(n,{...e,logo:(0,l.jsx)(o,{})}),args:{}},g={render:e=>(0,l.jsx)(n,{...e}),args:{}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <NavBar {...args} logo={<MockLogo />} title="My App">\r
      <MockNav />\r
    </NavBar>,
  args: {},
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('My App')).toBeInTheDocument();
    await expect(canvas.getByText('Inicio')).toBeInTheDocument();
    await expect(canvas.getByText('Acerca de')).toBeInTheDocument();
    await expect(canvas.getByText('Contacto')).toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <NavBar {...args} title="My App" />,
  args: {}
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <NavBar {...args} logo={<MockLogo />} />,
  args: {}
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <NavBar {...args} />,
  args: {}
}`,...g.parameters?.docs?.source}}},_=[`Default`,`TitleOnly`,`LogoOnly`,`Empty`]}))();export{p as Default,g as Empty,h as LogoOnly,m as TitleOnly,_ as __namedExportsOrder,f as default};