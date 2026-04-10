import{t as e}from"./iframe-YpqvHZo3.js";import{t}from"./jsx-runtime-ChNUh70B.js";import{n,r,t as i}from"./Title-iMma4Azi.js";e();var a={title:`Components/Title`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`A semantic heading component (h1–h6) with configurable size, color variant, text styling (bold, italic, underline, strikethrough), text alignment, and display mode.`}}},argTypes:{size:{control:{type:`select`},options:Object.values(n),description:`Heading level — maps to the corresponding HTML element (h1–h6).`,table:{type:{summary:Object.values(n).join(` | `)},defaultValue:{summary:n.H1}}},variant:{control:{type:`select`},options:Object.values(r),description:`Color variant applied to the heading text.`,table:{type:{summary:Object.values(r).join(` | `)},defaultValue:{summary:r.DARK}}},children:{control:`text`,description:`Text or node content rendered inside the heading.`,table:{type:{summary:`ReactNode`}}},bold:{control:`boolean`,description:`When true, the heading is rendered in bold weight.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},italic:{control:`boolean`,description:`When true, the heading is rendered in italic style.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},underline:{control:`boolean`,description:`When true, the heading text is underlined.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},strikethrough:{control:`boolean`,description:`When true, the heading text is struck through.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},align:{control:`select`,options:[`left`,`center`,`right`,`justify`],description:`Horizontal text alignment.`,table:{type:{summary:`left | center | right | justify`},defaultValue:{summary:`left`}}},block:{control:`boolean`,description:`When true, the heading occupies the full available width.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},noWrap:{control:`boolean`,description:`When true, text does not wrap and overflows with an ellipsis.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onClick:{action:`clicked`,description:`Callback fired when the heading is clicked.`,table:{type:{summary:`() => void`}}}},args:{children:`Heading example`,size:n.H1,variant:r.DARK}},o={children:`Título con todas las propiedades`,size:n.H2,variant:r.PRIMARY,bold:!0,italic:!0,underline:!0,strikethrough:!1,align:`center`,block:!0,noWrap:!1,onClick:()=>{console.log(`Title clicked`)}},s=t(),c={...a,title:`Components/Title`},l={},u={args:o},d={render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:Object.values(n).map(e=>(0,s.jsxs)(i,{size:e,children:[`Título `,e.toUpperCase()]},e))})},f={render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:Object.values(r).map(e=>(0,s.jsxs)(i,{variant:e,children:[`Variante `,e]},e))})},p={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,s.jsx)(i,{children:`Estilo normal`}),(0,s.jsx)(i,{bold:!0,children:`Negrita`}),(0,s.jsx)(i,{italic:!0,children:`Cursiva`}),(0,s.jsx)(i,{underline:!0,children:`Subrayado`}),(0,s.jsx)(i,{strikethrough:!0,children:`Tachado`}),(0,s.jsx)(i,{bold:!0,italic:!0,children:`Negrita y cursiva`})]})},m={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,s.jsx)(i,{align:`left`,children:`Alineación izquierda`}),(0,s.jsx)(i,{align:`center`,children:`Alineación centrada`}),(0,s.jsx)(i,{align:`right`,children:`Alineación derecha`}),(0,s.jsx)(i,{align:`justify`,style:{maxWidth:`300px`},children:`Texto justificado: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`})]})},h={render:()=>(0,s.jsxs)(`div`,{style:{border:`1px solid #ccc`,padding:`1rem`},children:[(0,s.jsx)(i,{block:!0,style:{display:`block`,backgroundColor:`#f0f0f0`,padding:`8px`,marginBottom:`8px`},children:`Título en bloque (ocupa todo el ancho)`}),(0,s.jsx)(`p`,{children:`Contenido debajo del título`})]})},g={render:()=>(0,s.jsxs)(`div`,{style:{width:`200px`,border:`1px solid #ccc`,padding:`1rem`},children:[(0,s.jsx)(i,{noWrap:!0,children:`Este texto no se romperá en varias líneas aunque sea muy largo y no quepa en el contenedor`}),(0,s.jsx)(i,{children:`Este texto sí se romperá en varias líneas si no cabe en el contenedor`}),(0,s.jsx)(`p`,{children:`El título de arriba debería mostrarse en una sola línea con puntos suspensivos`})]})},_={args:{children:`Haz clic en este título`,onClick:()=>alert(`¡Título clickeado!`)}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: withAllPropsArgs
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      {Object.values(TitleSize).map(size => <Title key={size} size={size}>\r
          Título {size.toUpperCase()}\r
        </Title>)}\r
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      {Object.values(TitleVariant).map(variant => <Title key={variant} variant={variant}>\r
          Variante {variant}\r
        </Title>)}\r
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Title>Estilo normal</Title>\r
      <Title bold>Negrita</Title>\r
      <Title italic>Cursiva</Title>\r
      <Title underline>Subrayado</Title>\r
      <Title strikethrough>Tachado</Title>\r
      <Title bold italic>Negrita y cursiva</Title>\r
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Title align="left">Alineación izquierda</Title>\r
      <Title align="center">Alineación centrada</Title>\r
      <Title align="right">Alineación derecha</Title>\r
      <Title align="justify" style={{
      maxWidth: '300px'
    }}>\r
        Texto justificado: Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r
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
        Título en bloque (ocupa todo el ancho)\r
      </Title>\r
      <p>Contenido debajo del título</p>\r
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '200px',
    border: '1px solid #ccc',
    padding: '1rem'
  }}>\r
      <Title noWrap>\r
        Este texto no se romperá en varias líneas aunque sea muy largo y no quepa en el contenedor\r
      </Title>\r
      <Title>\r
        Este texto sí se romperá en varias líneas si no cabe en el contenedor\r
      </Title>\r
      <p>El título de arriba debería mostrarse en una sola línea con puntos suspensivos</p>\r
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Haz clic en este título',
    onClick: () => alert('¡Título clickeado!')
  }
}`,..._.parameters?.docs?.source}}};var v=[`Default`,`WithAllProps`,`Sizes`,`Variants`,`TextStyles`,`Alignments`,`Block`,`NoWrap`,`Clickable`];export{m as Alignments,h as Block,_ as Clickable,l as Default,g as NoWrap,d as Sizes,p as TextStyles,f as Variants,u as WithAllProps,v as __namedExportsOrder,c as default};