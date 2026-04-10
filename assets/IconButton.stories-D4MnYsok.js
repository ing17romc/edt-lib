import{t as e}from"./iframe-BwpCWMiM.js";import{t}from"./jsx-runtime-BsbbwSUz.js";import{n,t as r}from"./types-BTwUNDvM.js";import{n as i}from"./Icon-CRq4DNId.js";import{t as a}from"./IconButton-j9TwsPJX.js";e();var o={tags:[`autodocs`],argTypes:{icon:{control:{type:`text`},description:`Name of the icon to display (Material Symbols identifier).`,table:{type:{summary:`string`}}},size:{control:`select`,options:Object.values(r),description:`Size of the icon button.`,table:{type:{summary:Object.values(r).join(` | `)},defaultValue:{summary:r.MEDIUM}}},variant:{control:{type:`select`},options:[`primary`,`secondary`,`tertiary`,`danger`,`success`,`warning`],description:`Visual color variant of the button.`,table:{type:{summary:`primary | secondary | tertiary | danger | success | warning`},defaultValue:{summary:`"primary"`}}},disabled:{control:{type:`boolean`},description:`When true, the button is non-interactive and visually muted.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},loading:{control:{type:`boolean`},description:`When true, shows a loading spinner instead of the icon.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},fullWidth:{control:{type:`boolean`},description:`When true, the button expands to fill the full width of its container.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},iconVariant:{control:{type:`select`},options:[`solid`,`outline`,`dual`],description:`Rendering style of the icon — solid fill, outline, or dual-tone.`,table:{type:{summary:`solid | outline | dual`},defaultValue:{summary:`"outline"`}}},iconColor:{control:{type:`color`},description:`Custom color override for the icon.`,table:{type:{summary:`string`}}},onClick:{action:`clicked`,description:`Callback fired when the button is clicked.`,table:{type:{summary:`() => void`}}}},args:{icon:`home`,"aria-label":`Example button`,size:r.MEDIUM,variant:`primary`,disabled:!1,loading:!1,fullWidth:!1,iconVariant:`outline`}},s={docs:{description:{component:`A compact button that renders an icon as its primary content. Supports all button variants, sizes, loading state, and a custom icon color override.`}}},c=[{size:r.SMALL,label:`Small`},{size:r.MEDIUM,label:`Medium`},{size:r.LARGE,label:`Large`}],l=[{variant:n.PRIMARY,label:`Primary`},{variant:n.SECONDARY,label:`Secondary`},{variant:n.TERTIARY,label:`Tertiary`},{variant:n.DANGER,label:`Danger`},{variant:n.SUCCESS,label:`Success`},{variant:n.WARNING,label:`Warning`}],u={display:`flex`,gap:`16px`,alignItems:`center`,flexWrap:`wrap`,marginBottom:`16px`},d={display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`,minWidth:`80px`},f=t(),p={title:`Components/IconButton`,...o,component:a,parameters:s},m={args:{"aria-label":`Home button`}},h={render:()=>(0,f.jsx)(`div`,{style:u,children:c.map(({size:e,label:t})=>(0,f.jsxs)(`div`,{style:d,children:[(0,f.jsx)(a,{icon:`home`,size:e,"aria-label":`${t} button`}),(0,f.jsx)(`span`,{children:t})]},e))}),parameters:{docs:{description:{story:`Shows the different sizes available for the IconButton component.`}}}},g={render:()=>(0,f.jsx)(`div`,{style:u,children:l.map(({variant:e,label:t})=>(0,f.jsxs)(`div`,{style:d,children:[(0,f.jsx)(a,{icon:`star`,variant:e,"aria-label":`${t} button`}),(0,f.jsx)(`span`,{children:t})]},e))}),parameters:{docs:{description:{story:`Shows the different style variants available for the IconButton component.`}}}},_={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[(0,f.jsx)(a,{icon:`check`,"aria-label":`Normal`}),(0,f.jsx)(a,{icon:`check`,disabled:!0,"aria-label":`Disabled`}),(0,f.jsx)(a,{icon:`check`,loading:!0,"aria-label":`Loading`})]})},v={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[(0,f.jsx)(a,{icon:`home`,"aria-label":`Home`}),(0,f.jsx)(a,{icon:`settings`,variant:n.SECONDARY,"aria-label":`Settings`}),(0,f.jsx)(a,{icon:`search`,variant:n.TERTIARY,"aria-label":`Search`}),(0,f.jsx)(a,{icon:`heart`,variant:n.DANGER,"aria-label":`Favorite`}),(0,f.jsx)(a,{icon:`download`,variant:n.SUCCESS,"aria-label":`Download`}),(0,f.jsx)(a,{icon:`bell`,variant:n.WARNING,"aria-label":`Notifications`})]})},y={args:{icon:`favorite`,iconColor:`#ff4081`,"aria-label":`Pink favorite`}},b={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[(0,f.jsx)(a,{icon:`star`,iconVariant:i.OUTLINE,"aria-label":`Outline`}),(0,f.jsx)(a,{icon:`star`,iconVariant:i.SOLID,"aria-label":`Solid`}),(0,f.jsx)(a,{icon:`star`,iconVariant:i.DUAL,"aria-label":`Dual`})]})},x={render:()=>(0,f.jsxs)(`div`,{style:{width:`300px`},children:[(0,f.jsx)(a,{icon:`add`,fullWidth:!0,"aria-label":`Add`,style:{marginBottom:`8px`}}),(0,f.jsx)(a,{icon:`delete`,variant:n.DANGER,fullWidth:!0,"aria-label":`Delete`})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Home button'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={containerStyle}>\r
      {sizeOptions.map(({
      size,
      label
    }) => <div key={size} style={itemContainerStyle}>\r
          <IconButton icon="home" size={size} aria-label={\`\${label} button\`} />\r
          <span>{label}</span>\r
        </div>)}\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Shows the different sizes available for the IconButton component.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={containerStyle}>\r
      {variantOptions.map(({
      variant,
      label
    }) => <div key={variant} style={itemContainerStyle}>\r
          <IconButton icon="star" variant={variant} aria-label={\`\${label} button\`} />\r
          <span>{label}</span>\r
        </div>)}\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Shows the different style variants available for the IconButton component.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>\r
      <IconButton icon="check" aria-label="Normal" />\r
      <IconButton icon="check" disabled aria-label="Disabled" />\r
      <IconButton icon="check" loading aria-label="Loading" />\r
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'favorite',
    iconColor: '#ff4081',
    'aria-label': 'Pink favorite'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>\r
      <IconButton icon="star" iconVariant={IconVariant.OUTLINE} aria-label="Outline" />\r
      <IconButton icon="star" iconVariant={IconVariant.SOLID} aria-label="Solid" />\r
      <IconButton icon="star" iconVariant={IconVariant.DUAL} aria-label="Dual" />\r
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>\r
      <IconButton icon="add" fullWidth aria-label="Add" style={{
      marginBottom: '8px'
    }} />\r
      <IconButton icon="delete" variant={ComponentVariant.DANGER} fullWidth aria-label="Delete" />\r
    </div>
}`,...x.parameters?.docs?.source}}};var S=[`Default`,`Sizes`,`Variants`,`States`,`CustomIcons`,`WithCustomColor`,`WithIconVariant`,`FullWidth`];export{v as CustomIcons,m as Default,x as FullWidth,h as Sizes,_ as States,g as Variants,y as WithCustomColor,b as WithIconVariant,S as __namedExportsOrder,p as default};