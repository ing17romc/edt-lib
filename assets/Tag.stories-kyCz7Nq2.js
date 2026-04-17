import{n as e}from"./chunk-BneVvdWh.js";import{Ht as t,_t as n,bt as r,v as i,vt as a,y as o,yt as s}from"./iframe-BrtTKpdh.js";var c,l,u,d,f,p=e((()=>{r(),c={children:`Tag label`,variant:s.PRIMARY,size:a.MEDIUM,closable:!1,disabled:!1},l={variant:{control:`select`,options:Object.values(s),description:`Color variant of the tag.`,table:{type:{summary:Object.values(s).join(` | `)},defaultValue:{summary:s.PRIMARY}}},size:{control:`select`,options:Object.values(a),description:`Size of the tag.`,table:{type:{summary:Object.values(a).join(` | `)},defaultValue:{summary:a.MEDIUM}}},closable:{control:`boolean`,description:`When true, a close button is shown to dismiss the tag.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`When true, the tag is non-interactive and visually muted.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},u={docs:{description:{component:`A compact label used to categorise or flag content. Supports multiple color variants, sizes, a closable mode, and a disabled state.`}}},d=Object.values(s),f=Object.values(a)})),m,h,g,_,v,y,b,x,S,C;e((()=>{t(),o(),p(),m=n(),{within:h,expect:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/Tag`,component:i,tags:[`autodocs`],argTypes:l,args:c,parameters:u},v={args:{children:`Tag label`},play:async({canvasElement:e})=>{await g(h(e).getByText(`Tag label`)).toBeInTheDocument()}},y={render:()=>(0,m.jsx)(`div`,{style:{display:`flex`,gap:`0.5rem`,flexWrap:`wrap`},children:d.map(e=>(0,m.jsx)(i,{variant:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e))}),parameters:{docs:{source:{code:null}}}},b={render:()=>(0,m.jsx)(`div`,{style:{display:`flex`,gap:`0.5rem`,alignItems:`center`},children:f.map(e=>(0,m.jsx)(i,{size:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e))}),parameters:{docs:{source:{code:null}}}},x={args:{children:`Close tag`,closable:!0}},S={args:{children:`Disabled`,disabled:!0}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Tag label'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Tag label')).toBeInTheDocument();
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap'
  }}>\r
      {allVariants.map(variant => <Tag key={variant} variant={variant as ComponentVariant}>\r
          {variant.charAt(0).toUpperCase() + variant.slice(1)}\r
        </Tag>)}\r
    </div>,
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
    gap: '0.5rem',
    alignItems: 'center'
  }}>\r
      {allSizes.map(size => <Tag key={size} size={size as ComponentSize}>\r
          {size.charAt(0).toUpperCase() + size.slice(1)}\r
        </Tag>)}\r
    </div>,
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Close tag',
    closable: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled',
    disabled: true
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`Variants`,`Sizes`,`Closable`,`Disabled`]}))();export{x as Closable,v as Default,S as Disabled,b as Sizes,y as Variants,C as __namedExportsOrder,_ as default};