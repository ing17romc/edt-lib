import{n as e}from"./chunk-BneVvdWh.js";import{S as t}from"./iframe-BoFEwu8W.js";import{t as n}from"./jsx-runtime-Bn1Ys6_W.js";import{n as r,t as i}from"./classNames-Bj-wXTiJ.js";var a,o,s,c,l=e((()=>{a=`_thumbnail_qctwm_1`,o=`_image_qctwm_9`,s=`_caption_qctwm_19`,c={thumbnail:a,image:o,"image--rounded":`_image--rounded_qctwm_15`,caption:s}})),u,d,f=e((()=>{t(),r(),l(),u=n(),d=({src:e,alt:t,caption:n,rounded:r=!1,width:a=120,height:o=120,className:s,...l})=>(0,u.jsxs)(`figure`,{className:i(c.thumbnail,s),children:[(0,u.jsx)(`img`,{src:e,alt:t,width:a,height:o,className:i(c.image,r&&c[`image--rounded`]),...l}),n&&(0,u.jsx)(`figcaption`,{className:c.caption,children:n})]}),d.__docgenInfo={description:`Thumbnail component that displays a miniature image with optional caption.\r
\r
@param src - Image URL\r
@param alt - Alternative text\r
@param caption - Descriptive text below the image\r
@param rounded - Whether the image has circular rounded borders\r
@param width - Width in pixels\r
@param height - Height in pixels`,methods:[],displayName:`Thumbnail`,props:{src:{required:!0,tsType:{name:`string`},description:`Image URL`},alt:{required:!0,tsType:{name:`string`},description:`Image alternative text`},caption:{required:!1,tsType:{name:`string`},description:`Optional caption below the image`},rounded:{required:!1,tsType:{name:`boolean`},description:`Whether it is rounded\r
@default false`,defaultValue:{value:`false`,computed:!1}},width:{required:!1,tsType:{name:`number`},description:`Image width in px\r
@default 120`,defaultValue:{value:`120`,computed:!1}},height:{required:!1,tsType:{name:`number`},description:`Image height in px\r
@default 120`,defaultValue:{value:`120`,computed:!1}}},composes:[`ImgHTMLAttributes`]}})),p,m,h,g=e((()=>{p={src:`https://placehold.co/120x120`,alt:`Example image`,width:120,height:120,rounded:!1},m={src:{control:{type:`text`},description:`URL of the image to display.`,table:{type:{summary:`string`}}},alt:{control:{type:`text`},description:`Accessible alternative text for the image.`,table:{type:{summary:`string`}}},caption:{control:{type:`text`},description:`Optional caption text rendered below the image.`,table:{type:{summary:`string`}}},rounded:{control:{type:`boolean`},description:`When true, the image corners are fully rounded (circle).`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},width:{control:{type:`number`,min:40},description:`Width of the thumbnail in pixels.`,table:{type:{summary:`number`}}},height:{control:{type:`number`,min:40},description:`Height of the thumbnail in pixels.`,table:{type:{summary:`number`}}}},h={docs:{description:{component:`An image thumbnail with optional caption and rounded-corner support. Accepts explicit width and height for consistent sizing across layouts.`}}}})),_,v,y,b,x,S,C,w,T;e((()=>{t(),f(),g(),_=n(),{within:v,expect:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/Thumbnail`,component:d,tags:[`autodocs`],args:p,argTypes:m,parameters:h},x={play:async({canvasElement:e})=>{await y(v(e).getByRole(`img`)).toBeInTheDocument()}},S={args:{caption:`Image description`}},C={args:{rounded:!0,alt:`User avatar`}},w={render:()=>(0,_.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`flex-end`},children:[(0,_.jsx)(d,{src:`https://placehold.co/60x60`,alt:`Small`,width:60,height:60,caption:`60×60`}),(0,_.jsx)(d,{src:`https://placehold.co/120x120`,alt:`Medium`,width:120,height:120,caption:`120×120`}),(0,_.jsx)(d,{src:`https://placehold.co/200x200`,alt:`Large`,width:200,height:200,caption:`200×200`})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('img')).toBeInTheDocument();
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Image description'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    rounded: true,
    alt: 'User avatar'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'flex-end'
  }}>\r
      <Thumbnail src="https://placehold.co/60x60" alt="Small" width={60} height={60} caption="60×60" />\r
      <Thumbnail src="https://placehold.co/120x120" alt="Medium" width={120} height={120} caption="120×120" />\r
      <Thumbnail src="https://placehold.co/200x200" alt="Large" width={200} height={200} caption="200×200" />\r
    </div>
}`,...w.parameters?.docs?.source}}},T=[`Default`,`WithCaption`,`Rounded`,`Sizes`]}))();export{x as Default,C as Rounded,w as Sizes,S as WithCaption,T as __namedExportsOrder,b as default};