import{n as e}from"./chunk-BneVvdWh.js";import{i as t}from"./iframe-BoT0I_bJ.js";import{n,t as r}from"./Button-D46K3LHj.js";import{n as i,r as a,t as o}from"./types-SSqGpC_M.js";var s,c,l,u,d,f,p=e((()=>{a(),s={children:`Button`,disabled:!1,fullWidth:!1},c={children:{control:`text`,description:`Button label or React content displayed inside the button.`,table:{type:{summary:`ReactNode`}}},variant:{control:`select`,options:Object.values(i),description:`Visual variant of the button.`,table:{type:{summary:Object.values(i).join(` | `)},defaultValue:{summary:i.PRIMARY}}},size:{control:`select`,options:Object.values(o),description:`Size of the button.`,table:{type:{summary:Object.values(o).join(` | `)},defaultValue:{summary:o.MEDIUM}}},disabled:{control:`boolean`,description:`When true, the button is non-interactive and visually muted.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},fullWidth:{control:`boolean`,description:`When true, the button stretches to fill its container width.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},loading:{control:`boolean`,description:`When true, shows a loading indicator and disables interaction.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},type:{control:`select`,options:[`button`,`submit`,`reset`],description:`HTML button type attribute.`,table:{type:{summary:`button | submit | reset`},defaultValue:{summary:`button`}}},onClick:{action:`clicked`,description:`Callback fired when the button is clicked.`,table:{type:{summary:`(event: MouseEvent) => void`}}}},l=Object.values(i).map(e=>({variant:e,label:e.charAt(0).toUpperCase()+e.slice(1)})),u=Object.values(o).map(e=>({size:e,label:e.charAt(0).toUpperCase()+e.slice(1)})),d={docs:{description:{component:`A multi-purpose button component with support for multiple visual variants, sizes, loading state, and full-width layout. Built on top of the native HTML button element.`}}},f={tags:[`autodocs`],parameters:d,argTypes:c,args:s}})),m,h,g,_,v,y,b,x,S,C;e((()=>{n(),p(),a(),m=t(),{within:h,expect:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/Button`,...f,component:r,tags:[`autodocs`]},v={args:{children:`Button`,variant:i.PRIMARY,size:o.MEDIUM},play:async({canvasElement:e})=>{let t=h(e).getByRole(`button`,{name:/button/i});await g(t).toBeInTheDocument(),await g(t).toHaveClass(`button--primary`),await g(t).toHaveClass(`button--medium`),await g(t).toHaveAttribute(`type`,`button`),await g(t).not.toBeDisabled()}},y={render:()=>(0,m.jsx)(`div`,{style:{display:`flex`,gap:`1rem`,flexWrap:`wrap`,alignItems:`center`},children:l.map(({variant:e,label:t})=>(0,m.jsxs)(`div`,{style:{marginBottom:`1rem`},children:[(0,m.jsx)(`div`,{style:{marginBottom:`0.5rem`,fontSize:`0.875rem`,color:`#666`},children:t}),(0,m.jsxs)(r,{variant:e,children:[t,` Button`]})]},e))}),play:async({canvasElement:e})=>{let t=h(e);for(let{variant:e,label:n}of l)await g(t.getByRole(`button`,{name:`${n} Button`})).toHaveClass(`button--${e}`)},parameters:{docs:{source:{code:null}}}},b={render:()=>(0,m.jsx)(`div`,{style:{display:`flex`,gap:`1.5rem`,alignItems:`flex-end`},children:u.map(({size:e,label:t})=>(0,m.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,m.jsx)(`div`,{style:{marginBottom:`0.5rem`,fontSize:`0.875rem`,color:`#666`},children:t}),(0,m.jsxs)(r,{size:e,children:[e,` Button`]})]},e))}),play:async({canvasElement:e})=>{let t=h(e);for(let{size:e}of u)await g(t.getByRole(`button`,{name:`${e} Button`})).toHaveClass(`button--${e}`)},parameters:{docs:{source:{code:null}}}},x={render:()=>(0,m.jsxs)(`div`,{style:{display:`flex`,gap:`1.5rem`,flexWrap:`wrap`},children:[(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,m.jsx)(`div`,{style:{fontSize:`0.875rem`,color:`#666`},children:`Disabled`}),(0,m.jsx)(r,{disabled:!0,children:`Disabled Button`})]}),(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`,width:`100%`,maxWidth:`300px`},children:[(0,m.jsx)(`div`,{style:{fontSize:`0.875rem`,color:`#666`},children:`Full Width`}),(0,m.jsx)(r,{fullWidth:!0,children:`Full Width Button`})]})]}),play:async({canvasElement:e})=>{let t=h(e);await g(t.getByRole(`button`,{name:/disabled button/i})).toBeDisabled(),await g(t.getByRole(`button`,{name:/full width button/i})).toHaveClass(`button--fullWidth`)},parameters:{docs:{source:{code:null}}}},S={render:()=>(0,m.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1.5rem`},children:l.map(({variant:e,label:t})=>(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`div`,{style:{marginBottom:`0.75rem`,fontSize:`0.875rem`,color:`#666`,fontWeight:`500`},children:[t,` Variant`]}),(0,m.jsx)(`div`,{style:{display:`flex`,gap:`1rem`,alignItems:`center`},children:u.map(({size:t,label:n})=>(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`0.5rem`},children:[(0,m.jsx)(`div`,{style:{fontSize:`0.75rem`,color:`#888`},children:n}),(0,m.jsx)(r,{variant:e,size:t,children:n})]},`${e}-${t}`))})]},e))}),parameters:{docs:{source:{code:null}}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: ComponentVariant.PRIMARY,
    size: ComponentSize.MEDIUM
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: /button/i
    });
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveClass('button--primary');
    await expect(button).toHaveClass('button--medium');
    await expect(button).toHaveAttribute('type', 'button');
    await expect(button).not.toBeDisabled();
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>\r
      {variants.map(({
      variant,
      label
    }) => <div key={variant} style={{
      marginBottom: '1rem'
    }}>\r
          <div style={{
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        color: '#666'
      }}>\r
            {label}\r
          </div>\r
          <Button variant={variant}>\r
            {label} Button\r
          </Button>\r
        </div>)}\r
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    for (const {
      variant,
      label
    } of variants) {
      const button = canvas.getByRole('button', {
        name: \`\${label} Button\`
      });
      await expect(button).toHaveClass(\`button--\${variant}\`);
    }
  },
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'flex-end'
  }}>\r
      {sizes.map(({
      size,
      label
    }) => <div key={size} style={{
      textAlign: 'center'
    }}>\r
          <div style={{
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        color: '#666'
      }}>\r
            {label}\r
          </div>\r
          <Button size={size}>\r
            {size} Button\r
          </Button>\r
        </div>)}\r
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    for (const {
      size
    } of sizes) {
      const button = canvas.getByRole('button', {
        name: \`\${size} Button\`
      });
      await expect(button).toHaveClass(\`button--\${size}\`);
    }
  },
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap'
  }}>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>\r
        <div style={{
        fontSize: '0.875rem',
        color: '#666'
      }}>Disabled</div>\r
        <Button disabled>Disabled Button</Button>\r
      </div>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      width: '100%',
      maxWidth: '300px'
    }}>\r
        <div style={{
        fontSize: '0.875rem',
        color: '#666'
      }}>Full Width</div>\r
        <Button fullWidth>Full Width Button</Button>\r
      </div>\r
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const disabledButton = canvas.getByRole('button', {
      name: /disabled button/i
    });
    await expect(disabledButton).toBeDisabled();
    const fullWidthButton = canvas.getByRole('button', {
      name: /full width button/i
    });
    await expect(fullWidthButton).toHaveClass('button--fullWidth');
  },
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>\r
      {variants.map(({
      variant,
      label: variantLabel
    }) => <div key={variant}>\r
          <div style={{
        marginBottom: '0.75rem',
        fontSize: '0.875rem',
        color: '#666',
        fontWeight: '500'
      }}>\r
            {variantLabel} Variant\r
          </div>\r
          <div style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
      }}>\r
            {sizes.map(({
          size,
          label: sizeLabel
        }) => <div key={\`\${variant}-\${size}\`} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem'
        }}>\r
                <div style={{
            fontSize: '0.75rem',
            color: '#888'
          }}>{sizeLabel}</div>\r
                <Button variant={variant} size={size}>\r
                  {sizeLabel}\r
                </Button>\r
              </div>)}\r
          </div>\r
        </div>)}\r
    </div>,
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`Variants`,`Sizes`,`States`,`Combinations`]}))();export{S as Combinations,v as Default,b as Sizes,x as States,y as Variants,C as __namedExportsOrder,_ as default};