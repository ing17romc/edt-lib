import{n as e}from"./chunk-BneVvdWh.js";import{Ht as t,_t as n,c as r,s as i}from"./iframe-BrtTKpdh.js";var a,o,s,c=e((()=>{a={src:`https://placehold.co/120x120`,alt:`Example image`,width:120,height:120,rounded:!1},o={src:{control:{type:`text`},description:`URL of the image to display.`,table:{type:{summary:`string`}}},alt:{control:{type:`text`},description:`Accessible alternative text for the image.`,table:{type:{summary:`string`}}},caption:{control:{type:`text`},description:`Optional caption text rendered below the image.`,table:{type:{summary:`string`}}},rounded:{control:{type:`boolean`},description:`When true, the image corners are fully rounded (circle).`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},width:{control:{type:`number`,min:40},description:`Width of the thumbnail in pixels.`,table:{type:{summary:`number`}}},height:{control:{type:`number`,min:40},description:`Height of the thumbnail in pixels.`,table:{type:{summary:`number`}}}},s={docs:{description:{component:`An image thumbnail with optional caption and rounded-corner support. Accepts explicit width and height for consistent sizing across layouts.`}}}})),l,u,d,f,p,m,h,g,_;e((()=>{t(),r(),c(),l=n(),{within:u,expect:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/Thumbnail`,component:i,tags:[`autodocs`],args:a,argTypes:o,parameters:s},p={play:async({canvasElement:e})=>{await d(u(e).getByRole(`img`)).toBeInTheDocument()}},m={args:{caption:`Image description`}},h={args:{rounded:!0,alt:`User avatar`}},g={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`flex-end`},children:[(0,l.jsx)(i,{src:`https://placehold.co/60x60`,alt:`Small`,width:60,height:60,caption:`60×60`}),(0,l.jsx)(i,{src:`https://placehold.co/120x120`,alt:`Medium`,width:120,height:120,caption:`120×120`}),(0,l.jsx)(i,{src:`https://placehold.co/200x200`,alt:`Large`,width:200,height:200,caption:`200×200`})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('img')).toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Image description'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    rounded: true,
    alt: 'User avatar'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'flex-end'
  }}>\r
      <Thumbnail src="https://placehold.co/60x60" alt="Small" width={60} height={60} caption="60×60" />\r
      <Thumbnail src="https://placehold.co/120x120" alt="Medium" width={120} height={120} caption="120×120" />\r
      <Thumbnail src="https://placehold.co/200x200" alt="Large" width={200} height={200} caption="200×200" />\r
    </div>
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithCaption`,`Rounded`,`Sizes`]}))();export{p as Default,h as Rounded,g as Sizes,m as WithCaption,_ as __namedExportsOrder,f as default};