import{n as e}from"./chunk-BneVvdWh.js";import{Ht as t,_t as n,bt as r,f as i,p as a,vt as o}from"./iframe-BrtTKpdh.js";var s,c,l,u,d,f=e((()=>{r(),s={docs:{description:{component:`A text-style button for secondary actions. Supports configurable color, underline style, size, loading state, and full-width layout.`}}},c={children:`Text button`,color:`primary`,size:o.MEDIUM,underline:`hover`,disabled:!1,loading:!1,fullWidth:!1},l={size:{control:`select`,options:Object.values(o),description:`Size of the text button.`,table:{type:{summary:Object.values(o).join(` | `)},defaultValue:{summary:o.MEDIUM}}},color:{control:`select`,options:[`primary`,`secondary`,`error`,`success`,`warning`,`inherit`],description:`Color tone of the button text.`,table:{type:{summary:`primary | secondary | error | success | warning | inherit`},defaultValue:{summary:`primary`}}},underline:{control:`select`,options:[`none`,`hover`,`always`],description:`Underline style — none, visible only on hover, or always shown.`,table:{type:{summary:`none | hover | always`},defaultValue:{summary:`hover`}}},disabled:{control:`boolean`,description:`When true, the button is non-interactive and visually muted.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},loading:{control:`boolean`,description:`When true, shows a loading spinner inside the button.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},fullWidth:{control:`boolean`,description:`When true, the button stretches to fill the full width of its container.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},u=[`primary`,`secondary`,`error`,`success`,`warning`,`inherit`],d=Object.values(o)})),p,m,h,g,_,v,y,b,x,S;e((()=>{t(),a(),f(),p=n(),{within:m,expect:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/TextButton`,component:i,tags:[`autodocs`],argTypes:l,parameters:s},_={args:c,play:async({canvasElement:e})=>{let t=m(e).getByRole(`button`,{name:/text button/i});await h(t).toHaveClass(`textButton`),await h(t).toHaveClass(`size-medium`),await h(t).toHaveClass(`color-primary`),await h(t).toHaveClass(`underline-hover`)}},v={render:()=>(0,p.jsx)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:d.map(e=>(0,p.jsx)(i,{size:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e))}),play:async({canvasElement:e})=>{let t=m(e).getAllByRole(`button`);await h(t[0]).toHaveClass(`size-small`),await h(t[1]).toHaveClass(`size-medium`),await h(t[2]).toHaveClass(`size-large`)},parameters:{docs:{description:{story:`Available sizes for the TextButton component.`}}}},y={render:()=>(0,p.jsx)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`,flexWrap:`wrap`},children:u.map(e=>(0,p.jsx)(i,{color:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e))}),parameters:{docs:{description:{story:`Available color variants for the TextButton component.`}}}},b={render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`,flexWrap:`wrap`},children:[(0,p.jsx)(i,{children:`Normal`}),(0,p.jsx)(i,{disabled:!0,children:`Disabled`}),(0,p.jsx)(i,{loading:!0,children:`Loading`}),(0,p.jsx)(i,{fullWidth:!0,children:`Full width`})]}),play:async({canvasElement:e})=>{let t=m(e).getAllByRole(`button`);await h(t[1]).toBeDisabled(),await h(t[2]).toHaveClass(`loading`),await h(t[3]).toHaveClass(`fullWidth`)},parameters:{docs:{description:{story:`Different interaction states: default, disabled, loading, and full-width.`}}}},x={render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[(0,p.jsx)(i,{underline:`none`,children:`None`}),(0,p.jsx)(i,{underline:`hover`,children:`Hover`}),(0,p.jsx)(i,{underline:`always`,children:`Always`})]}),play:async({canvasElement:e})=>{let[t,n,r]=m(e).getAllByRole(`button`);await h(t).toHaveClass(`underline-none`),await h(n).toHaveClass(`underline-hover`),await h(r).toHaveClass(`underline-always`)},parameters:{docs:{description:{story:`Underline display options: none, on hover, or always visible.`}}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: /text button/i
    });
    await expect(button).toHaveClass('textButton');
    await expect(button).toHaveClass('size-medium');
    await expect(button).toHaveClass('color-primary');
    await expect(button).toHaveClass('underline-hover');
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>\r
      {allSizes.map(size => <TextButton key={size} size={size}>\r
          {size.charAt(0).toUpperCase() + size.slice(1)}\r
        </TextButton>)}\r
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');
    await expect(buttons[0]).toHaveClass('size-small');
    await expect(buttons[1]).toHaveClass('size-medium');
    await expect(buttons[2]).toHaveClass('size-large');
  },
  parameters: {
    docs: {
      description: {
        story: 'Available sizes for the TextButton component.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      {allColors.map(color => <TextButton key={color} color={color}>\r
          {color!.charAt(0).toUpperCase() + color!.slice(1)}\r
        </TextButton>)}\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Available color variants for the TextButton component.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <TextButton>Normal</TextButton>\r
      <TextButton disabled>Disabled</TextButton>\r
      <TextButton loading>Loading</TextButton>\r
      <TextButton fullWidth>Full width</TextButton>\r
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');
    await expect(buttons[1]).toBeDisabled();
    await expect(buttons[2]).toHaveClass('loading');
    await expect(buttons[3]).toHaveClass('fullWidth');
  },
  parameters: {
    docs: {
      description: {
        story: 'Different interaction states: default, disabled, loading, and full-width.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>\r
      <TextButton underline="none">None</TextButton>\r
      <TextButton underline="hover">Hover</TextButton>\r
      <TextButton underline="always">Always</TextButton>\r
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const [noneBtn, hoverBtn, alwaysBtn] = canvas.getAllByRole('button');
    await expect(noneBtn).toHaveClass('underline-none');
    await expect(hoverBtn).toHaveClass('underline-hover');
    await expect(alwaysBtn).toHaveClass('underline-always');
  },
  parameters: {
    docs: {
      description: {
        story: 'Underline display options: none, on hover, or always visible.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Sizes`,`Colors`,`States`,`Underline`]}))();export{y as Colors,_ as Default,v as Sizes,b as States,x as Underline,S as __namedExportsOrder,g as default};