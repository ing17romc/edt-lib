import{n as e}from"./chunk-BneVvdWh.js";import{O as t,i as n}from"./iframe-BoT0I_bJ.js";import{n as r,t as i}from"./Footer-Dw9s-F3N.js";import{n as a,t as o}from"./NavBar-DXiPTWxR.js";var s,c,l=e((()=>{s=`_layout_lc8f6_1`,c={layout:s}})),u,d,f=e((()=>{t(),l(),u=n(),d=({children:e,className:t=``})=>(0,u.jsx)(`div`,{className:`${c.layout} ${t}`,children:e}),d.__docgenInfo={description:``,methods:[],displayName:`Layout`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),p,m,h,g,_=e((()=>{t(),p=n(),m=()=>(0,p.jsx)(`div`,{style:{width:`32px`,height:`32px`,backgroundColor:`var(--color-primary)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`white`,fontWeight:`bold`,borderRadius:`4px`},children:`L`}),h=()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`a`,{href:`#home`,style:{textDecoration:`none`,color:`inherit`},children:`Home`}),(0,p.jsx)(`a`,{href:`#about`,style:{textDecoration:`none`,color:`inherit`},children:`About`}),(0,p.jsx)(`a`,{href:`#contact`,style:{textDecoration:`none`,color:`inherit`},children:`Contact`})]}),g=()=>(0,p.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,width:`100%`,flexWrap:`wrap`,gap:`1rem`},children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h3`,{children:`Useful links`}),(0,p.jsxs)(`ul`,{style:{listStyle:`none`,padding:0},children:[(0,p.jsx)(`li`,{children:(0,p.jsx)(`a`,{href:`#help`,style:{textDecoration:`none`,color:`inherit`},children:`Help`})}),(0,p.jsx)(`li`,{children:(0,p.jsx)(`a`,{href:`#terms`,style:{textDecoration:`none`,color:`inherit`},children:`Terms and conditions`})}),(0,p.jsx)(`li`,{children:(0,p.jsx)(`a`,{href:`#privacy`,style:{textDecoration:`none`,color:`inherit`},children:`Privacy policy`})})]})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h3`,{children:`Contact`}),(0,p.jsx)(`p`,{children:`Email: info@example.com`}),(0,p.jsx)(`p`,{children:`Phone: +1 234 567 8900`})]})]}),m.__docgenInfo={description:``,methods:[],displayName:`MockLogo`},h.__docgenInfo={description:``,methods:[],displayName:`MockNav`},g.__docgenInfo={description:``,methods:[],displayName:`MockFooterContent`}})),v,y,b,x,S,C,w,T;e((()=>{t(),f(),a(),r(),_(),v=n(),{within:y,expect:b}=__STORYBOOK_MODULE_TEST__,x={title:`Layout/Layout`,component:d,tags:[`autodocs`],argTypes:{className:{control:`text`,description:`Additional CSS class name for the root container.`,table:{type:{summary:`string`}}}},parameters:{docs:{description:{component:`A full-page shell that arranges a NavBar, scrollable main content, and a Footer in a vertical flex column. Provides consistent page structure across the application.`}}}},S={render:e=>(0,v.jsxs)(d,{...e,children:[(0,v.jsx)(o,{logo:(0,v.jsx)(m,{}),title:`My App`,children:(0,v.jsx)(h,{})}),(0,v.jsxs)(`main`,{style:{padding:`2rem`,flex:1,maxWidth:`1200px`,width:`100%`,margin:`0 auto`},children:[(0,v.jsx)(`h2`,{children:`Main Content`}),(0,v.jsx)(`p`,{children:`This is the main content area. Each page would render its specific content here.`})]}),(0,v.jsx)(i,{children:(0,v.jsx)(g,{})})]}),args:{},play:async({canvasElement:e})=>{let t=y(e);await b(t.getByText(`Main Content`)).toBeInTheDocument(),await b(t.getByText(`My App`)).toBeInTheDocument(),await b(t.getByText(`Useful links`)).toBeInTheDocument()}},C={render:e=>(0,v.jsxs)(d,{...e,children:[(0,v.jsxs)(`main`,{style:{padding:`2rem`,flex:1},children:[(0,v.jsx)(`h2`,{children:`Content without a navigation bar`}),(0,v.jsx)(`p`,{children:`This page has no NavBar — useful for login pages or standalone views.`})]}),(0,v.jsx)(i,{})]}),args:{}},w={render:e=>(0,v.jsxs)(d,{...e,children:[(0,v.jsx)(o,{logo:(0,v.jsx)(m,{}),title:`My App`,children:(0,v.jsx)(h,{})}),(0,v.jsxs)(`main`,{style:{padding:`2rem`,flex:1,maxWidth:`1200px`,width:`100%`,margin:`0 auto`},children:[(0,v.jsx)(`h2`,{children:`Content with a custom class`}),(0,v.jsx)(`p`,{children:`This example shows a Layout with a custom CSS class applied to the root container.`})]}),(0,v.jsx)(i,{children:(0,v.jsx)(g,{})})]}),args:{className:`my-custom-class`}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
  args: {},
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Main Content')).toBeInTheDocument();
    await expect(canvas.getByText('My App')).toBeInTheDocument();
    await expect(canvas.getByText('Useful links')).toBeInTheDocument();
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`Default`,`WithoutNavBar`,`WithCustomClass`]}))();export{S as Default,w as WithCustomClass,C as WithoutNavBar,T as __namedExportsOrder,x as default};