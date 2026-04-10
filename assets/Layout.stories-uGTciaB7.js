import{t as e}from"./iframe-BwpCWMiM.js";import{t}from"./jsx-runtime-BsbbwSUz.js";import{t as n}from"./Footer-dmEf5lLh.js";import{t as r}from"./NavBar-DwG0_nss.js";e();var i={layout:`_layout_lc8f6_1`},a=t(),o=({children:e,className:t=``})=>(0,a.jsx)(`div`,{className:`${i.layout} ${t}`,children:e});o.__docgenInfo={description:``,methods:[],displayName:`Layout`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}};var s=()=>(0,a.jsx)(`div`,{style:{width:`32px`,height:`32px`,backgroundColor:`var(--color-primary)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`white`,fontWeight:`bold`,borderRadius:`4px`},children:`L`}),c=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`a`,{href:`#home`,style:{textDecoration:`none`,color:`inherit`},children:`Home`}),(0,a.jsx)(`a`,{href:`#about`,style:{textDecoration:`none`,color:`inherit`},children:`About`}),(0,a.jsx)(`a`,{href:`#contact`,style:{textDecoration:`none`,color:`inherit`},children:`Contact`})]}),l=()=>(0,a.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,width:`100%`,flexWrap:`wrap`,gap:`1rem`},children:[(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`h3`,{children:`Useful links`}),(0,a.jsxs)(`ul`,{style:{listStyle:`none`,padding:0},children:[(0,a.jsx)(`li`,{children:(0,a.jsx)(`a`,{href:`#help`,style:{textDecoration:`none`,color:`inherit`},children:`Help`})}),(0,a.jsx)(`li`,{children:(0,a.jsx)(`a`,{href:`#terms`,style:{textDecoration:`none`,color:`inherit`},children:`Terms and conditions`})}),(0,a.jsx)(`li`,{children:(0,a.jsx)(`a`,{href:`#privacy`,style:{textDecoration:`none`,color:`inherit`},children:`Privacy policy`})})]})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`h3`,{children:`Contact`}),(0,a.jsx)(`p`,{children:`Email: info@example.com`}),(0,a.jsx)(`p`,{children:`Phone: +1 234 567 8900`})]})]});s.__docgenInfo={description:``,methods:[],displayName:`MockLogo`},c.__docgenInfo={description:``,methods:[],displayName:`MockNav`},l.__docgenInfo={description:``,methods:[],displayName:`MockFooterContent`};var u={title:`Layout/Layout`,component:o,tags:[`autodocs`],argTypes:{className:{control:`text`,description:`Additional CSS class name for the root container.`,table:{type:{summary:`string`}}}},parameters:{docs:{description:{component:`A full-page shell that arranges a NavBar, scrollable main content, and a Footer in a vertical flex column. Provides consistent page structure across the application.`}}}},d={render:e=>(0,a.jsxs)(o,{...e,children:[(0,a.jsx)(r,{logo:(0,a.jsx)(s,{}),title:`My App`,children:(0,a.jsx)(c,{})}),(0,a.jsxs)(`main`,{style:{padding:`2rem`,flex:1,maxWidth:`1200px`,width:`100%`,margin:`0 auto`},children:[(0,a.jsx)(`h2`,{children:`Main Content`}),(0,a.jsx)(`p`,{children:`This is the main content area. Each page would render its specific content here.`})]}),(0,a.jsx)(n,{children:(0,a.jsx)(l,{})})]}),args:{}},f={render:e=>(0,a.jsxs)(o,{...e,children:[(0,a.jsxs)(`main`,{style:{padding:`2rem`,flex:1},children:[(0,a.jsx)(`h2`,{children:`Content without a navigation bar`}),(0,a.jsx)(`p`,{children:`This page has no NavBar — useful for login pages or standalone views.`})]}),(0,a.jsx)(n,{})]}),args:{}},p={render:e=>(0,a.jsxs)(o,{...e,children:[(0,a.jsx)(r,{logo:(0,a.jsx)(s,{}),title:`My App`,children:(0,a.jsx)(c,{})}),(0,a.jsxs)(`main`,{style:{padding:`2rem`,flex:1,maxWidth:`1200px`,width:`100%`,margin:`0 auto`},children:[(0,a.jsx)(`h2`,{children:`Content with a custom class`}),(0,a.jsx)(`p`,{children:`This example shows a Layout with a custom CSS class applied to the root container.`})]}),(0,a.jsx)(n,{children:(0,a.jsx)(l,{})})]}),args:{className:`my-custom-class`}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Layout {...args}>\r
      <NavBar logo={<MockLogo />} title="My App">\r
        <MockNav />\r
      </NavBar>\r
      <main style={{
      padding: '2rem',
      flex: 1,
      maxWidth: '1200px',
      width: '100%',
      margin: '0 auto'
    }}>\r
        <h2>Main Content</h2>\r
        <p>This is the main content area. Each page would render its specific content here.</p>\r
      </main>\r
      <Footer>\r
        <MockFooterContent />\r
      </Footer>\r
    </Layout>,
  args: {}
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Layout {...args}>\r
            <main style={{
      padding: '2rem',
      flex: 1
    }}>\r
                <h2>Content without a navigation bar</h2>\r
                <p>This page has no NavBar — useful for login pages or standalone views.</p>\r
            </main>\r
            <Footer />\r
        </Layout>,
  args: {}
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Layout {...args}>\r
            <NavBar logo={<MockLogo />} title="My App">\r
                <MockNav />\r
            </NavBar>\r
            <main style={{
      padding: '2rem',
      flex: 1,
      maxWidth: '1200px',
      width: '100%',
      margin: '0 auto'
    }}>\r
                <h2>Content with a custom class</h2>\r
                <p>This example shows a Layout with a custom CSS class applied to the root container.</p>\r
            </main>\r
            <Footer>\r
                <MockFooterContent />\r
            </Footer>\r
        </Layout>,
  args: {
    className: 'my-custom-class'
  }
}`,...p.parameters?.docs?.source}}};var m=[`Default`,`WithoutNavBar`,`WithCustomClass`];export{d as Default,p as WithCustomClass,f as WithoutNavBar,m as __namedExportsOrder,u as default};