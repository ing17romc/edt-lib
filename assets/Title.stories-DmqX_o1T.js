import{n as e}from"./chunk-BneVvdWh.js";import{S as t}from"./iframe-BoFEwu8W.js";import{t as n}from"./jsx-runtime-Bn1Ys6_W.js";import{i as r,n as i,r as a,t as o}from"./Title-CMJkVz54.js";var s,c,l=e((()=>{i(),s={title:`Components/Title`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`A semantic heading component (h1–h6) with configurable size, color variant, text styling (bold, italic, underline, strikethrough), text alignment, and display mode.`}}},argTypes:{size:{control:{type:`select`},options:Object.values(a),description:`Heading level — maps to the corresponding HTML element (h1–h6).`,table:{type:{summary:Object.values(a).join(` | `)},defaultValue:{summary:a.H1}}},variant:{control:{type:`select`},options:Object.values(r),description:`Color variant applied to the heading text.`,table:{type:{summary:Object.values(r).join(` | `)},defaultValue:{summary:r.DARK}}},children:{control:`text`,description:`Text or node content rendered inside the heading.`,table:{type:{summary:`ReactNode`}}},bold:{control:`boolean`,description:`When true, the heading is rendered in bold weight.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},italic:{control:`boolean`,description:`When true, the heading is rendered in italic style.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},underline:{control:`boolean`,description:`When true, the heading text is underlined.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},strikethrough:{control:`boolean`,description:`When true, the heading text is struck through.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},align:{control:`select`,options:[`left`,`center`,`right`,`justify`],description:`Horizontal text alignment.`,table:{type:{summary:`left | center | right | justify`},defaultValue:{summary:`left`}}},block:{control:`boolean`,description:`When true, the heading occupies the full available width.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},noWrap:{control:`boolean`,description:`When true, text does not wrap and overflows with an ellipsis.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onClick:{action:`clicked`,description:`Callback fired when the heading is clicked.`,table:{type:{summary:`() => void`}}}},args:{children:`Heading example`,size:a.H1,variant:r.DARK}},c={children:`Title with all properties`,size:a.H2,variant:r.PRIMARY,bold:!0,italic:!0,underline:!0,strikethrough:!1,align:`center`,block:!0,noWrap:!1,onClick:()=>{console.log(`Title clicked`)}}})),u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{t(),i(),l(),u=n(),{within:d,expect:f}=__STORYBOOK_MODULE_TEST__,p={...s,title:`Components/Title`},m={play:async({canvasElement:e})=>{let t=d(e).getByText(`Heading example`);await f(t).toBeInTheDocument(),await f(t.tagName.toLowerCase()).toBe(`h1`),await f(t).toHaveClass(`title--h1`),await f(t).toHaveClass(`title--dark`)}},h={args:c,play:async({canvasElement:e})=>{let t=d(e).getByText(`Title with all properties`);await f(t.tagName.toLowerCase()).toBe(`h2`),await f(t).toHaveClass(`title--h2`),await f(t).toHaveClass(`title--primary`),await f(t).toHaveClass(`title--bold`),await f(t).toHaveClass(`title--italic`),await f(t).toHaveClass(`title--underline`),await f(t).toHaveClass(`title--center`)}},g={render:()=>(0,u.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:Object.values(a).map(e=>(0,u.jsxs)(o,{size:e,children:[`Title `,e.toUpperCase()]},e))}),play:async({canvasElement:e})=>{let t=d(e);for(let e of Object.values(a)){let n=t.getByText(`Title ${e.toUpperCase()}`);await f(n).toHaveClass(`title--${e}`),await f(n.tagName.toLowerCase()).toBe(e)}}},_={render:()=>(0,u.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:Object.values(r).map(e=>(0,u.jsxs)(o,{variant:e,children:[`Variant `,e]},e))}),play:async({canvasElement:e})=>{let t=d(e);for(let e of Object.values(r))await f(t.getByText(`Variant ${e}`)).toHaveClass(`title--${e}`)}},v={render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,u.jsx)(o,{children:`Normal style`}),(0,u.jsx)(o,{bold:!0,children:`Bold`}),(0,u.jsx)(o,{italic:!0,children:`Italic`}),(0,u.jsx)(o,{underline:!0,children:`Underline`}),(0,u.jsx)(o,{strikethrough:!0,children:`Strikethrough`}),(0,u.jsx)(o,{bold:!0,italic:!0,children:`Bold and italic`})]}),play:async({canvasElement:e})=>{let t=d(e);await f(t.getByText(`Bold`)).toHaveClass(`title--bold`),await f(t.getByText(`Italic`)).toHaveClass(`title--italic`),await f(t.getByText(`Underline`)).toHaveClass(`title--underline`),await f(t.getByText(`Strikethrough`)).toHaveClass(`title--strikethrough`);let n=t.getByText(`Bold and italic`);await f(n).toHaveClass(`title--bold`),await f(n).toHaveClass(`title--italic`)}},y={render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,u.jsx)(o,{align:`left`,children:`Left alignment`}),(0,u.jsx)(o,{align:`center`,children:`Center alignment`}),(0,u.jsx)(o,{align:`right`,children:`Right alignment`}),(0,u.jsx)(o,{align:`justify`,style:{maxWidth:`300px`},children:`Justified text: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`})]}),play:async({canvasElement:e})=>{let t=d(e);await f(t.getByText(`Left alignment`)).toHaveClass(`title--left`),await f(t.getByText(`Center alignment`)).toHaveClass(`title--center`),await f(t.getByText(`Right alignment`)).toHaveClass(`title--right`),await f(t.getByText(/Justified text/)).toHaveClass(`title--justify`)}},b={render:()=>(0,u.jsxs)(`div`,{style:{border:`1px solid #ccc`,padding:`1rem`},children:[(0,u.jsx)(o,{block:!0,style:{display:`block`,backgroundColor:`#f0f0f0`,padding:`8px`,marginBottom:`8px`},children:`Block title (full width)`}),(0,u.jsx)(`p`,{children:`Content below the title`})]}),play:async({canvasElement:e})=>{await f(d(e).getByText(`Block title (full width)`)).toHaveClass(`title--block`)}},x={render:()=>(0,u.jsxs)(`div`,{style:{width:`200px`,border:`1px solid #ccc`,padding:`1rem`},children:[(0,u.jsx)(o,{noWrap:!0,children:`This text will not break into multiple lines even if it is very long and does not fit in the container`}),(0,u.jsx)(o,{children:`This text will break into multiple lines if it does not fit in the container`}),(0,u.jsx)(`p`,{children:`The title above should be displayed on a single line with ellipsis`})]}),play:async({canvasElement:e})=>{let t=d(e).getAllByRole(`heading`);await f(t[0]).toHaveClass(`title--noWrap`),await f(t[1]).not.toHaveClass(`title--noWrap`)}},S={args:{children:`Click on this title`,onClick:()=>alert(`Title clicked!`)}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByText('Heading example');
    await expect(el).toBeInTheDocument();
    await expect(el.tagName.toLowerCase()).toBe('h1');
    await expect(el).toHaveClass('title--h1');
    await expect(el).toHaveClass('title--dark');
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: withAllPropsArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByText('Title with all properties');
    await expect(el.tagName.toLowerCase()).toBe('h2');
    await expect(el).toHaveClass('title--h2');
    await expect(el).toHaveClass('title--primary');
    await expect(el).toHaveClass('title--bold');
    await expect(el).toHaveClass('title--italic');
    await expect(el).toHaveClass('title--underline');
    await expect(el).toHaveClass('title--center');
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      {Object.values(TitleSize).map(size => <Title key={size} size={size}>\r
          Title {size.toUpperCase()}\r
        </Title>)}\r
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    for (const size of Object.values(TitleSize)) {
      const el = canvas.getByText(\`Title \${size.toUpperCase()}\`);
      await expect(el).toHaveClass(\`title--\${size}\`);
      await expect(el.tagName.toLowerCase()).toBe(size);
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      {Object.values(TitleVariant).map(variant => <Title key={variant} variant={variant}>\r
          Variant {variant}\r
        </Title>)}\r
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    for (const variant of Object.values(TitleVariant)) {
      const el = canvas.getByText(\`Variant \${variant}\`);
      await expect(el).toHaveClass(\`title--\${variant}\`);
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Bold')).toHaveClass('title--bold');
    await expect(canvas.getByText('Italic')).toHaveClass('title--italic');
    await expect(canvas.getByText('Underline')).toHaveClass('title--underline');
    await expect(canvas.getByText('Strikethrough')).toHaveClass('title--strikethrough');
    const boldItalic = canvas.getByText('Bold and italic');
    await expect(boldItalic).toHaveClass('title--bold');
    await expect(boldItalic).toHaveClass('title--italic');
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Left alignment')).toHaveClass('title--left');
    await expect(canvas.getByText('Center alignment')).toHaveClass('title--center');
    await expect(canvas.getByText('Right alignment')).toHaveClass('title--right');
    await expect(canvas.getByText(/Justified text/)).toHaveClass('title--justify');
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Block title (full width)')).toHaveClass('title--block');
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const headings = canvas.getAllByRole('heading');
    await expect(headings[0]).toHaveClass('title--noWrap');
    await expect(headings[1]).not.toHaveClass('title--noWrap');
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Click on this title',
    onClick: () => alert('Title clicked!')
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`WithAllProps`,`Sizes`,`Variants`,`TextStyles`,`Alignments`,`Block`,`NoWrap`,`Clickable`]}))();export{y as Alignments,b as Block,S as Clickable,m as Default,x as NoWrap,g as Sizes,v as TextStyles,_ as Variants,h as WithAllProps,C as __namedExportsOrder,p as default};