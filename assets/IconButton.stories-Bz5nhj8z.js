import{n as e}from"./chunk-BneVvdWh.js";import{S as t}from"./iframe-DoW-sQG_.js";import{t as n}from"./jsx-runtime-Bn1Ys6_W.js";import{n as r,r as i,t as a}from"./types-Duki_pzD.js";import{i as o,r as s}from"./Icon-CszCnGbt.js";import{n as c,t as l}from"./IconButton-CQ7CscfN.js";var u,d,f,p,m,h,g=e((()=>{i(),u={tags:[`autodocs`],argTypes:{icon:{control:{type:`text`},description:`Name of the icon to display (Material Symbols identifier).`,table:{type:{summary:`string`}}},size:{control:`select`,options:Object.values(a),description:`Size of the icon button.`,table:{type:{summary:Object.values(a).join(` | `)},defaultValue:{summary:a.MEDIUM}}},variant:{control:{type:`select`},options:[`primary`,`secondary`,`tertiary`,`danger`,`success`,`warning`],description:`Visual color variant of the button.`,table:{type:{summary:`primary | secondary | tertiary | danger | success | warning`},defaultValue:{summary:`"primary"`}}},disabled:{control:{type:`boolean`},description:`When true, the button is non-interactive and visually muted.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},loading:{control:{type:`boolean`},description:`When true, shows a loading spinner instead of the icon.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},fullWidth:{control:{type:`boolean`},description:`When true, the button expands to fill the full width of its container.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},iconVariant:{control:{type:`select`},options:[`solid`,`outline`,`dual`],description:`Rendering style of the icon — solid fill, outline, or dual-tone.`,table:{type:{summary:`solid | outline | dual`},defaultValue:{summary:`"outline"`}}},iconColor:{control:{type:`color`},description:`Custom color override for the icon.`,table:{type:{summary:`string`}}},onClick:{action:`clicked`,description:`Callback fired when the button is clicked.`,table:{type:{summary:`() => void`}}}},args:{icon:`home`,"aria-label":`Example button`,size:a.MEDIUM,variant:`primary`,disabled:!1,loading:!1,fullWidth:!1,iconVariant:`outline`}},d={docs:{description:{component:`A compact button that renders an icon as its primary content. Supports all button variants, sizes, loading state, and a custom icon color override.`}}},f=[{size:a.SMALL,label:`Small`},{size:a.MEDIUM,label:`Medium`},{size:a.LARGE,label:`Large`}],p=[{variant:r.PRIMARY,label:`Primary`},{variant:r.SECONDARY,label:`Secondary`},{variant:r.TERTIARY,label:`Tertiary`},{variant:r.DANGER,label:`Danger`},{variant:r.SUCCESS,label:`Success`},{variant:r.WARNING,label:`Warning`}],m={display:`flex`,gap:`16px`,alignItems:`center`,flexWrap:`wrap`,marginBottom:`16px`},h={display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`,minWidth:`80px`}})),_,v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{t(),o(),c(),g(),i(),_=n(),{within:v,expect:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/IconButton`,...u,component:l,parameters:d},x={args:{"aria-label":`Home button`},play:async({canvasElement:e})=>{let t=v(e).getByRole(`button`);await y(t).toHaveClass(`iconButton--medium`),await y(t).toHaveClass(`iconButton--primary`)}},S={render:()=>(0,_.jsx)(`div`,{style:m,children:f.map(({size:e,label:t})=>(0,_.jsxs)(`div`,{style:h,children:[(0,_.jsx)(l,{icon:`home`,size:e,"aria-label":`${t} button`}),(0,_.jsx)(`span`,{children:t})]},e))}),play:async({canvasElement:e})=>{let t=v(e).getAllByRole(`button`);await y(t[0]).toHaveClass(`iconButton--small`),await y(t[1]).toHaveClass(`iconButton--medium`),await y(t[2]).toHaveClass(`iconButton--large`)},parameters:{docs:{description:{story:`Shows the different sizes available for the IconButton component.`}}}},C={render:()=>(0,_.jsx)(`div`,{style:m,children:p.map(({variant:e,label:t})=>(0,_.jsxs)(`div`,{style:h,children:[(0,_.jsx)(l,{icon:`star`,variant:e,"aria-label":`${t} button`}),(0,_.jsx)(`span`,{children:t})]},e))}),play:async({canvasElement:e})=>{let t=v(e).getAllByRole(`button`);await y(t[0]).toHaveClass(`iconButton--primary`),await y(t[1]).toHaveClass(`iconButton--secondary`),await y(t[2]).toHaveClass(`iconButton--tertiary`),await y(t[3]).toHaveClass(`iconButton--danger`),await y(t[4]).toHaveClass(`iconButton--success`),await y(t[5]).toHaveClass(`iconButton--warning`)},parameters:{docs:{description:{story:`Shows the different style variants available for the IconButton component.`}}}},w={render:()=>(0,_.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[(0,_.jsx)(l,{icon:`check`,"aria-label":`Normal`}),(0,_.jsx)(l,{icon:`check`,disabled:!0,"aria-label":`Disabled`}),(0,_.jsx)(l,{icon:`check`,loading:!0,"aria-label":`Loading`})]}),play:async({canvasElement:e})=>{let t=v(e).getAllByRole(`button`);await y(t[0]).not.toHaveClass(`iconButton--loading`),await y(t[1]).toHaveAttribute(`aria-disabled`,`true`),await y(t[2]).toHaveClass(`iconButton--loading`)}},T={render:()=>(0,_.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[(0,_.jsx)(l,{icon:`home`,"aria-label":`Home`}),(0,_.jsx)(l,{icon:`settings`,variant:r.SECONDARY,"aria-label":`Settings`}),(0,_.jsx)(l,{icon:`search`,variant:r.TERTIARY,"aria-label":`Search`}),(0,_.jsx)(l,{icon:`heart`,variant:r.DANGER,"aria-label":`Favorite`}),(0,_.jsx)(l,{icon:`download`,variant:r.SUCCESS,"aria-label":`Download`}),(0,_.jsx)(l,{icon:`bell`,variant:r.WARNING,"aria-label":`Notifications`})]})},E={args:{icon:`favorite`,iconColor:`#ff4081`,"aria-label":`Pink favorite`}},D={render:()=>(0,_.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[(0,_.jsx)(l,{icon:`star`,iconVariant:s.OUTLINE,"aria-label":`Outline`}),(0,_.jsx)(l,{icon:`star`,iconVariant:s.SOLID,"aria-label":`Solid`}),(0,_.jsx)(l,{icon:`star`,iconVariant:s.DUAL,"aria-label":`Dual`})]})},O={render:()=>(0,_.jsxs)(`div`,{style:{width:`300px`},children:[(0,_.jsx)(l,{icon:`add`,fullWidth:!0,"aria-label":`Add`,style:{marginBottom:`8px`}}),(0,_.jsx)(l,{icon:`delete`,variant:r.DANGER,fullWidth:!0,"aria-label":`Delete`})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Home button'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toHaveClass('iconButton--medium');
    await expect(button).toHaveClass('iconButton--primary');
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={containerStyle}>\r
      {sizeOptions.map(({
      size,
      label
    }) => <div key={size} style={itemContainerStyle}>\r
          <IconButton icon="home" size={size} aria-label={\`\${label} button\`} />\r
          <span>{label}</span>\r
        </div>)}\r
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');
    await expect(buttons[0]).toHaveClass('iconButton--small');
    await expect(buttons[1]).toHaveClass('iconButton--medium');
    await expect(buttons[2]).toHaveClass('iconButton--large');
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the different sizes available for the IconButton component.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={containerStyle}>\r
      {variantOptions.map(({
      variant,
      label
    }) => <div key={variant} style={itemContainerStyle}>\r
          <IconButton icon="star" variant={variant} aria-label={\`\${label} button\`} />\r
          <span>{label}</span>\r
        </div>)}\r
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');
    await expect(buttons[0]).toHaveClass('iconButton--primary');
    await expect(buttons[1]).toHaveClass('iconButton--secondary');
    await expect(buttons[2]).toHaveClass('iconButton--tertiary');
    await expect(buttons[3]).toHaveClass('iconButton--danger');
    await expect(buttons[4]).toHaveClass('iconButton--success');
    await expect(buttons[5]).toHaveClass('iconButton--warning');
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the different style variants available for the IconButton component.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>\r
      <IconButton icon="check" aria-label="Normal" />\r
      <IconButton icon="check" disabled aria-label="Disabled" />\r
      <IconButton icon="check" loading aria-label="Loading" />\r
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');
    await expect(buttons[0]).not.toHaveClass('iconButton--loading');
    await expect(buttons[1]).toHaveAttribute('aria-disabled', 'true');
    await expect(buttons[2]).toHaveClass('iconButton--loading');
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>\r
      <IconButton icon="home" aria-label="Home" />\r
      <IconButton icon="settings" variant={ComponentVariant.SECONDARY} aria-label="Settings" />\r
      <IconButton icon="search" variant={ComponentVariant.TERTIARY} aria-label="Search" />\r
      <IconButton icon="heart" variant={ComponentVariant.DANGER} aria-label="Favorite" />\r
      <IconButton icon="download" variant={ComponentVariant.SUCCESS} aria-label="Download" />\r
      <IconButton icon="bell" variant={ComponentVariant.WARNING} aria-label="Notifications" />\r
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'favorite',
    iconColor: '#ff4081',
    'aria-label': 'Pink favorite'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>\r
      <IconButton icon="star" iconVariant={IconVariant.OUTLINE} aria-label="Outline" />\r
      <IconButton icon="star" iconVariant={IconVariant.SOLID} aria-label="Solid" />\r
      <IconButton icon="star" iconVariant={IconVariant.DUAL} aria-label="Dual" />\r
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>\r
      <IconButton icon="add" fullWidth aria-label="Add" style={{
      marginBottom: '8px'
    }} />\r
      <IconButton icon="delete" variant={ComponentVariant.DANGER} fullWidth aria-label="Delete" />\r
    </div>
}`,...O.parameters?.docs?.source}}},k=[`Default`,`Sizes`,`Variants`,`States`,`CustomIcons`,`WithCustomColor`,`WithIconVariant`,`FullWidth`]}))();export{T as CustomIcons,x as Default,O as FullWidth,S as Sizes,w as States,C as Variants,E as WithCustomColor,D as WithIconVariant,k as __namedExportsOrder,b as default};