import{t as e}from"./iframe-BwpCWMiM.js";import{t}from"./jsx-runtime-BsbbwSUz.js";import{n,r,t as i}from"./Title-7zuFgg1e.js";e();var a={title:`Components/Title`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`A semantic heading component (h1–h6) with configurable size, color variant, text styling (bold, italic, underline, strikethrough), text alignment, and display mode.`}}},argTypes:{size:{control:{type:`select`},options:Object.values(n),description:`Heading level — maps to the corresponding HTML element (h1–h6).`,table:{type:{summary:Object.values(n).join(` | `)},defaultValue:{summary:n.H1}}},variant:{control:{type:`select`},options:Object.values(r),description:`Color variant applied to the heading text.`,table:{type:{summary:Object.values(r).join(` | `)},defaultValue:{summary:r.DARK}}},children:{control:`text`,description:`Text or node content rendered inside the heading.`,table:{type:{summary:`ReactNode`}}},bold:{control:`boolean`,description:`When true, the heading is rendered in bold weight.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},italic:{control:`boolean`,description:`When true, the heading is rendered in italic style.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},underline:{control:`boolean`,description:`When true, the heading text is underlined.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},strikethrough:{control:`boolean`,description:`When true, the heading text is struck through.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},align:{control:`select`,options:[`left`,`center`,`right`,`justify`],description:`Horizontal text alignment.`,table:{type:{summary:`left | center | right | justify`},defaultValue:{summary:`left`}}},block:{control:`boolean`,description:`When true, the heading occupies the full available width.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},noWrap:{control:`boolean`,description:`When true, text does not wrap and overflows with an ellipsis.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onClick:{action:`clicked`,description:`Callback fired when the heading is clicked.`,table:{type:{summary:`() => void`}}}},args:{children:`Heading example`,size:n.H1,variant:r.DARK}},o={children:`Title with all properties`,size:n.H2,variant:r.PRIMARY,bold:!0,italic:!0,underline:!0,strikethrough:!1,align:`center`,block:!0,noWrap:!1,onClick:()=>{console.log(`Title clicked`)}},s=t(),c={...a,title:`Components/Title`},l={},u={args:o},d={render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:Object.values(n).map(e=>(0,s.jsxs)(i,{size:e,children:[`Title `,e.toUpperCase()]},e))})},f={render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:Object.values(r).map(e=>(0,s.jsxs)(i,{variant:e,children:[`Variant `,e]},e))})},p={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,s.jsx)(i,{children:`Normal style`}),(0,s.jsx)(i,{bold:!0,children:`Bold`}),(0,s.jsx)(i,{italic:!0,children:`Italic`}),(0,s.jsx)(i,{underline:!0,children:`Underline`}),(0,s.jsx)(i,{strikethrough:!0,children:`Strikethrough`}),(0,s.jsx)(i,{bold:!0,italic:!0,children:`Bold and italic`})]})},m={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,s.jsx)(i,{align:`left`,children:`Left alignment`}),(0,s.jsx)(i,{align:`center`,children:`Center alignment`}),(0,s.jsx)(i,{align:`right`,children:`Right alignment`}),(0,s.jsx)(i,{align:`justify`,style:{maxWidth:`300px`},children:`Justified text: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`})]})},h={render:()=>(0,s.jsxs)(`div`,{style:{border:`1px solid #ccc`,padding:`1rem`},children:[(0,s.jsx)(i,{block:!0,style:{display:`block`,backgroundColor:`#f0f0f0`,padding:`8px`,marginBottom:`8px`},children:`Block title (full width)`}),(0,s.jsx)(`p`,{children:`Content below the title`})]})},g={render:()=>(0,s.jsxs)(`div`,{style:{width:`200px`,border:`1px solid #ccc`,padding:`1rem`},children:[(0,s.jsx)(i,{noWrap:!0,children:`This text will not break into multiple lines even if it is very long and does not fit in the container`}),(0,s.jsx)(i,{children:`This text will break into multiple lines if it does not fit in the container`}),(0,s.jsx)(`p`,{children:`The title above should be displayed on a single line with ellipsis`})]})},_={args:{children:`Click on this title`,onClick:()=>alert(`Title clicked!`)}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: withAllPropsArgs
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      {Object.values(TitleSize).map(size => <Title key={size} size={size}>\r
          Title {size.toUpperCase()}\r
        </Title>)}\r
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      {Object.values(TitleVariant).map(variant => <Title key={variant} variant={variant}>\r
          Variant {variant}\r
        </Title>)}\r
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Title>Normal style</Title>\r
      <Title bold>Bold</Title>\r
      <Title italic>Italic</Title>\r
      <Title underline>Underline</Title>\r
      <Title strikethrough>Strikethrough</Title>\r
      <Title bold italic>Bold and italic</Title>\r
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Title align="left">Left alignment</Title>\r
      <Title align="center">Center alignment</Title>\r
      <Title align="right">Right alignment</Title>\r
      <Title align="justify" style={{
      maxWidth: '300px'
    }}>\r
        Justified text: Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r
      </Title>\r
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    border: '1px solid #ccc',
    padding: '1rem'
  }}>\r
      <Title block style={{
      display: 'block',
      backgroundColor: '#f0f0f0',
      padding: '8px',
      marginBottom: '8px'
    }}>\r
        Block title (full width)\r
      </Title>\r
      <p>Content below the title</p>\r
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '200px',
    border: '1px solid #ccc',
    padding: '1rem'
  }}>\r
      <Title noWrap>\r
        This text will not break into multiple lines even if it is very long and does not fit in the container\r
      </Title>\r
      <Title>\r
        This text will break into multiple lines if it does not fit in the container\r
      </Title>\r
      <p>The title above should be displayed on a single line with ellipsis</p>\r
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Click on this title',
    onClick: () => alert('Title clicked!')
  }
}`,..._.parameters?.docs?.source}}};var v=[`Default`,`WithAllProps`,`Sizes`,`Variants`,`TextStyles`,`Alignments`,`Block`,`NoWrap`,`Clickable`];export{m as Alignments,h as Block,_ as Clickable,l as Default,g as NoWrap,d as Sizes,p as TextStyles,f as Variants,u as WithAllProps,v as __namedExportsOrder,c as default};