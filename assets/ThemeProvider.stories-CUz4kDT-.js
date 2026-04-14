import{n as e}from"./chunk-BneVvdWh.js";import{O as t,i as n,n as r,r as i,t as a}from"./iframe-BoT0I_bJ.js";var o,s,c,l,u,d,f,p;e((()=>{t(),r(),o=n(),{within:s,expect:c}=__STORYBOOK_MODULE_TEST__,l=()=>{let{theme:e,resolvedTheme:t,setTheme:n}=i();return(0,o.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`,minWidth:`320px`,padding:`1.5rem`,borderRadius:`1rem`,background:`var(--color-surface-raised)`,border:`1px solid var(--color-border)`,color:`var(--color-text-primary)`},children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`strong`,{children:`Theme mode:`}),` `,(0,o.jsx)(`span`,{"data-testid":`theme-mode`,children:e})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`strong`,{children:`Resolved theme:`}),` `,(0,o.jsx)(`span`,{"data-testid":`resolved-theme`,children:t})]}),(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`0.75rem`,flexWrap:`wrap`},children:[(0,o.jsx)(`button`,{type:`button`,onClick:()=>n(`light`),children:`Light`}),(0,o.jsx)(`button`,{type:`button`,onClick:()=>n(`dark`),children:`Dark`}),(0,o.jsx)(`button`,{type:`button`,onClick:()=>n(`system`),children:`System`})]})]})},u={title:`Utilities/ThemeProvider`,component:a,tags:[`autodocs`],parameters:{docs:{description:{component:`Provides semantic runtime theming with support for light, dark, and system modes. It is safe to use in SSR environments such as Next.js.`}}}},d={render:e=>(0,o.jsx)(a,{...e,children:(0,o.jsx)(l,{})}),args:{defaultTheme:`system`,enableSystem:!0},play:async({canvasElement:e})=>{let t=s(e);await c(t.getByTestId(`theme-mode`)).toBeInTheDocument(),await c(t.getByTestId(`resolved-theme`)).toBeInTheDocument()}},f={render:e=>(0,o.jsx)(a,{...e,children:(0,o.jsx)(l,{})}),args:{defaultTheme:`light`,forcedTheme:`dark`},play:async({canvasElement:e})=>{await c(s(e).getByTestId(`resolved-theme`)).toHaveTextContent(`dark`)}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <ThemeProvider {...args}>\r
      <ThemePreview />\r
    </ThemeProvider>,
  args: {
    defaultTheme: 'system',
    enableSystem: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId('theme-mode')).toBeInTheDocument();
    await expect(canvas.getByTestId('resolved-theme')).toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <ThemeProvider {...args}>\r
      <ThemePreview />\r
    </ThemeProvider>,
  args: {
    defaultTheme: 'light',
    forcedTheme: 'dark'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId('resolved-theme')).toHaveTextContent('dark');
  }
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`ForcedDark`]}))();export{f as ForcedDark,d as Playground,p as __namedExportsOrder,u as default};