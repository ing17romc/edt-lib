import{t as e}from"./jsx-runtime-ChNUh70B.js";import{t}from"./Button-Cg9M1h5L.js";import{n,t as r}from"./types-BTwUNDvM.js";var i={children:`Button`,disabled:!1,fullWidth:!1},a={children:{control:`text`,description:`Button label or React content displayed inside the button.`,table:{type:{summary:`ReactNode`}}},variant:{control:`select`,options:Object.values(n),description:`Visual variant of the button.`,table:{type:{summary:Object.values(n).join(` | `)},defaultValue:{summary:n.PRIMARY}}},size:{control:`select`,options:Object.values(r),description:`Size of the button.`,table:{type:{summary:Object.values(r).join(` | `)},defaultValue:{summary:r.MEDIUM}}},disabled:{control:`boolean`,description:`When true, the button is non-interactive and visually muted.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},fullWidth:{control:`boolean`,description:`When true, the button stretches to fill its container width.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},loading:{control:`boolean`,description:`When true, shows a loading indicator and disables interaction.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},type:{control:`select`,options:[`button`,`submit`,`reset`],description:`HTML button type attribute.`,table:{type:{summary:`button | submit | reset`},defaultValue:{summary:`button`}}},onClick:{action:`clicked`,description:`Callback fired when the button is clicked.`,table:{type:{summary:`(event: MouseEvent) => void`}}}},o=Object.values(n).map(e=>({variant:e,label:e.charAt(0).toUpperCase()+e.slice(1)})),s=Object.values(r).map(e=>({size:e,label:e.charAt(0).toUpperCase()+e.slice(1)})),c={tags:[`autodocs`],parameters:{docs:{description:{component:`A multi-purpose button component with support for multiple visual variants, sizes, loading state, and full-width layout. Built on top of the native HTML button element.`}}},argTypes:a,args:i},l=e(),u={title:`Components/Button`,...c,component:t},d={args:{children:`Button`,variant:n.PRIMARY,size:r.MEDIUM}},f={render:()=>(0,l.jsx)(`div`,{style:{display:`flex`,gap:`1rem`,flexWrap:`wrap`,alignItems:`center`},children:o.map(({variant:e,label:n})=>(0,l.jsxs)(`div`,{style:{marginBottom:`1rem`},children:[(0,l.jsx)(`div`,{style:{marginBottom:`0.5rem`,fontSize:`0.875rem`,color:`#666`},children:n}),(0,l.jsxs)(t,{variant:e,children:[n,` Button`]})]},e))}),parameters:{docs:{source:{code:null}}}},p={render:()=>(0,l.jsx)(`div`,{style:{display:`flex`,gap:`1.5rem`,alignItems:`flex-end`},children:s.map(({size:e,label:n})=>(0,l.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,l.jsx)(`div`,{style:{marginBottom:`0.5rem`,fontSize:`0.875rem`,color:`#666`},children:n}),(0,l.jsxs)(t,{size:e,children:[e,` Button`]})]},e))}),parameters:{docs:{source:{code:null}}}},m={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:`1.5rem`,flexWrap:`wrap`},children:[(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,l.jsx)(`div`,{style:{fontSize:`0.875rem`,color:`#666`},children:`Disabled`}),(0,l.jsx)(t,{disabled:!0,children:`Disabled Button`})]}),(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`,width:`100%`,maxWidth:`300px`},children:[(0,l.jsx)(`div`,{style:{fontSize:`0.875rem`,color:`#666`},children:`Full Width`}),(0,l.jsx)(t,{fullWidth:!0,children:`Full Width Button`})]})]}),parameters:{docs:{source:{code:null}}}},h={render:()=>(0,l.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1.5rem`},children:o.map(({variant:e,label:n})=>(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(`div`,{style:{marginBottom:`0.75rem`,fontSize:`0.875rem`,color:`#666`,fontWeight:`500`},children:[n,` Variant`]}),(0,l.jsx)(`div`,{style:{display:`flex`,gap:`1rem`,alignItems:`center`},children:s.map(({size:n,label:r})=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`0.5rem`},children:[(0,l.jsx)(`div`,{style:{fontSize:`0.75rem`,color:`#888`},children:r}),(0,l.jsx)(t,{variant:e,size:n,children:r})]},`${e}-${n}`))})]},e))}),parameters:{docs:{source:{code:null}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: ComponentVariant.PRIMARY,
    size: ComponentSize.MEDIUM
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};var g=[`Default`,`Variants`,`Sizes`,`States`,`Combinations`];export{h as Combinations,d as Default,p as Sizes,m as States,f as Variants,g as __namedExportsOrder,u as default};