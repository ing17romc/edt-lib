import{n as e}from"./chunk-BneVvdWh.js";import{S as t}from"./iframe-DoW-sQG_.js";import{t as n}from"./jsx-runtime-Bn1Ys6_W.js";import{r,t as i}from"./types-Duki_pzD.js";import{i as a,n as o,r as s,t as c}from"./Icon-CszCnGbt.js";var l,u,d=e((()=>{a(),r(),l={display:`flex`,gap:`16px`,alignItems:`center`,flexWrap:`wrap`,marginBottom:`16px`},u={display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`,minWidth:`80px`},i.SMALL,i.MEDIUM,i.LARGE,s.OUTLINE,s.SOLID,s.DUAL})),f,p,m,h,g,_,v,y,b,x,S;e((()=>{t(),o(),a(),d(),r(),f=n(),{within:p,expect:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/Icon`,component:c,tags:[`autodocs`],argTypes:{name:{control:`text`,description:`Material Icons name (e.g. "home", "star", "settings"). See https://fonts.google.com/icons for the full list.`,table:{type:{summary:`string`}}},size:{control:`select`,options:Object.values(i),description:`Size of the icon.`,table:{type:{summary:Object.values(i).join(` | `)},defaultValue:{summary:i.MEDIUM}}},variant:{control:`select`,options:Object.values(s),description:`Icon style variant: outline, solid, or dual-tone.`,table:{type:{summary:Object.values(s).join(` | `)},defaultValue:{summary:s.OUTLINE}}},color:{control:`color`,description:`Primary color of the icon. Has no effect when inheritColor is true.`,table:{type:{summary:`string`}}},secondaryColor:{control:`color`,description:`Secondary color used only for the dual-tone variant.`,table:{type:{summary:`string`}}},inheritColor:{control:{type:`boolean`},description:`When true, the icon inherits its color from the parent element.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},parameters:{docs:{description:{component:`Renders a Material Icons glyph with support for multiple sizes, style variants (outline, solid, dual-tone) and custom or inherited colors.`}}},args:{name:`home`,size:i.MEDIUM,variant:s.OUTLINE}},g={args:{name:`home`},play:async({canvasElement:e})=>{let t=p(e).getByRole(`img`);await m(t).toHaveClass(`icon--medium`),await m(t).toHaveClass(`icon--outline`)}},_={render:()=>(0,f.jsx)(`div`,{style:l,children:Object.values(i).map(e=>(0,f.jsxs)(`div`,{style:u,children:[(0,f.jsx)(c,{name:`home`,size:e}),(0,f.jsx)(`span`,{children:e})]},e))}),play:async({canvasElement:e})=>{let t=p(e).getAllByRole(`img`);await m(t[0]).toHaveClass(`icon--small`),await m(t[1]).toHaveClass(`icon--medium`),await m(t[2]).toHaveClass(`icon--large`)},parameters:{docs:{description:{story:`Shows the different sizes available for the Icon component.`}}}},v={render:()=>(0,f.jsxs)(`div`,{style:l,children:[(0,f.jsxs)(`div`,{style:u,children:[(0,f.jsx)(c,{name:`home`,variant:s.OUTLINE}),(0,f.jsx)(`span`,{children:`Outline`})]}),(0,f.jsxs)(`div`,{style:u,children:[(0,f.jsx)(c,{name:`home`,variant:s.SOLID,color:`#007bff`}),(0,f.jsx)(`span`,{children:`Solid`})]}),(0,f.jsxs)(`div`,{style:u,children:[(0,f.jsx)(c,{name:`home`,variant:s.DUAL,color:`#ff5722`,secondaryColor:`#4caf50`}),(0,f.jsx)(`span`,{children:`Dual`})]})]}),play:async({canvasElement:e})=>{let t=p(e).getAllByRole(`img`);await m(t[0]).toHaveClass(`icon--outline`),await m(t[1]).toHaveClass(`icon--solid`),await m(t[2]).toHaveClass(`icon--dual`)},parameters:{docs:{description:{story:`Shows the different style variants available for the Icon component.`}}}},y={args:{name:`star`,color:`#ff5722`},parameters:{docs:{description:{story:`Example of an icon with a custom color.`}}}},b={render:()=>(0,f.jsxs)(`div`,{style:{color:`purple`},children:[(0,f.jsx)(`p`,{children:`This text is purple, and the icon inherits the color:`}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`,marginTop:`8px`},children:[(0,f.jsx)(c,{name:`check`,inheritColor:!0,size:i.LARGE}),(0,f.jsx)(c,{name:`star`,inheritColor:!0,size:i.LARGE}),(0,f.jsx)(c,{name:`heart`,inheritColor:!0,size:i.LARGE})]})]}),parameters:{docs:{description:{story:`Example of icons that inherit the color from the parent element.`}}}},x={render:()=>(0,f.jsxs)(`div`,{style:l,children:[(0,f.jsxs)(`div`,{style:u,children:[(0,f.jsx)(c,{name:`home`,disabled:!0}),(0,f.jsx)(`span`,{children:`Disabled`})]}),(0,f.jsxs)(`div`,{style:u,children:[(0,f.jsx)(c,{name:`home`}),(0,f.jsx)(`span`,{children:`Enabled`})]})]}),play:async({canvasElement:e})=>{let t=p(e).getAllByRole(`img`);await m(t[0]).toHaveClass(`icon--disabled`),await m(t[1]).not.toHaveClass(`icon--disabled`)},parameters:{docs:{description:{story:`Shows the disabled state of the icon.`}}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'home'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const icon = canvas.getByRole('img');
    await expect(icon).toHaveClass('icon--medium');
    await expect(icon).toHaveClass('icon--outline');
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={containerStyle}>\r
      {Object.values(ComponentSize).map(size => <div key={size} style={itemContainerStyle}>\r
          <Icon name="home" size={size} />\r
          <span>{size}</span>\r
        </div>)}\r
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const icons = canvas.getAllByRole('img');
    await expect(icons[0]).toHaveClass('icon--small');
    await expect(icons[1]).toHaveClass('icon--medium');
    await expect(icons[2]).toHaveClass('icon--large');
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the different sizes available for the Icon component.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={containerStyle}>\r
      <div style={itemContainerStyle}>\r
        <Icon name="home" variant={IconVariant.OUTLINE} />\r
        <span>Outline</span>\r
      </div>\r
      <div style={itemContainerStyle}>\r
        <Icon name="home" variant={IconVariant.SOLID} color="#007bff" />\r
        <span>Solid</span>\r
      </div>\r
      <div style={itemContainerStyle}>\r
        <Icon name="home" variant={IconVariant.DUAL} color="#ff5722" secondaryColor="#4caf50" />\r
        <span>Dual</span>\r
      </div>\r
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const icons = canvas.getAllByRole('img');
    await expect(icons[0]).toHaveClass('icon--outline');
    await expect(icons[1]).toHaveClass('icon--solid');
    await expect(icons[2]).toHaveClass('icon--dual');
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the different style variants available for the Icon component.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'star',
    color: '#ff5722'
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of an icon with a custom color.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    color: 'purple'
  }}>\r
      <p>This text is purple, and the icon inherits the color:</p>\r
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
      marginTop: '8px'
    }}>\r
        <Icon name="check" inheritColor size={ComponentSize.LARGE} />\r
        <Icon name="star" inheritColor size={ComponentSize.LARGE} />\r
        <Icon name="heart" inheritColor size={ComponentSize.LARGE} />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example of icons that inherit the color from the parent element.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={containerStyle}>\r
      <div style={itemContainerStyle}>\r
        <Icon name="home" disabled />\r
        <span>Disabled</span>\r
      </div>\r
      <div style={itemContainerStyle}>\r
        <Icon name="home" />\r
        <span>Enabled</span>\r
      </div>\r
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const icons = canvas.getAllByRole('img');
    await expect(icons[0]).toHaveClass('icon--disabled');
    await expect(icons[1]).not.toHaveClass('icon--disabled');
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the disabled state of the icon.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Sizes`,`Variants`,`WithCustomColor`,`WithInheritColor`,`DisabledState`]}))();export{g as Default,x as DisabledState,_ as Sizes,v as Variants,y as WithCustomColor,b as WithInheritColor,S as __namedExportsOrder,h as default};