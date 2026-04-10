import{t as e}from"./iframe-YpqvHZo3.js";import{t}from"./jsx-runtime-ChNUh70B.js";import{t as n}from"./classNames-DYb3CZs3.js";e();var r=`_thumbnail_qctwm_1`,i=`_image_qctwm_9`,a=`_caption_qctwm_19`,o={thumbnail:r,image:i,"image--rounded":`_image--rounded_qctwm_15`,caption:a},s=t(),c=({src:e,alt:t,caption:r,rounded:i=!1,width:a=120,height:c=120,className:l,...u})=>(0,s.jsxs)(`figure`,{className:n(o.thumbnail,l),children:[(0,s.jsx)(`img`,{src:e,alt:t,width:a,height:c,className:n(o.image,i&&o[`image--rounded`]),...u}),r&&(0,s.jsx)(`figcaption`,{className:o.caption,children:r})]});c.__docgenInfo={description:`Componente Thumbnail que muestra una imagen en miniatura con caption opcional.\r
\r
@param src - URL de la imagen\r
@param alt - Texto alternativo\r
@param caption - Texto descriptivo bajo la imagen\r
@param rounded - Si la imagen tiene bordes redondeados en círculo\r
@param width - Ancho en píxeles\r
@param height - Alto en píxeles`,methods:[],displayName:`Thumbnail`,props:{src:{required:!0,tsType:{name:`string`},description:`URL de la imagen`},alt:{required:!0,tsType:{name:`string`},description:`Texto alternativo de la imagen`},caption:{required:!1,tsType:{name:`string`},description:`Caption opcional bajo la imagen`},rounded:{required:!1,tsType:{name:`boolean`},description:`Si es redonda\r
@default false`,defaultValue:{value:`false`,computed:!1}},width:{required:!1,tsType:{name:`number`},description:`Ancho de la imagen en px\r
@default 120`,defaultValue:{value:`120`,computed:!1}},height:{required:!1,tsType:{name:`number`},description:`Alto de la imagen en px\r
@default 120`,defaultValue:{value:`120`,computed:!1}}},composes:[`ImgHTMLAttributes`]};var l={title:`Components/Thumbnail`,component:c,tags:[`autodocs`],args:{src:`https://placehold.co/120x120`,alt:`Example image`,width:120,height:120,rounded:!1},argTypes:{src:{control:`text`,description:`URL of the image to display.`,table:{type:{summary:`string`}}},alt:{control:`text`,description:`Accessible alternative text for the image.`,table:{type:{summary:`string`}}},caption:{control:`text`,description:`Optional caption text rendered below the image.`,table:{type:{summary:`string`}}},rounded:{control:`boolean`,description:`When true, the image corners are fully rounded (circle).`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},width:{control:{type:`number`,min:40},description:`Width of the thumbnail in pixels.`,table:{type:{summary:`number`}}},height:{control:{type:`number`,min:40},description:`Height of the thumbnail in pixels.`,table:{type:{summary:`number`}}}},parameters:{docs:{description:{component:`An image thumbnail with optional caption and rounded-corner support. Accepts explicit width and height for consistent sizing across layouts.`}}}},u={},d={args:{caption:`Image description`}},f={args:{rounded:!0,alt:`User avatar`}},p={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`flex-end`},children:[(0,s.jsx)(c,{src:`https://placehold.co/60x60`,alt:`Small`,width:60,height:60,caption:`60×60`}),(0,s.jsx)(c,{src:`https://placehold.co/120x120`,alt:`Medium`,width:120,height:120,caption:`120×120`}),(0,s.jsx)(c,{src:`https://placehold.co/200x200`,alt:`Large`,width:200,height:200,caption:`200×200`})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Image description'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    rounded: true,
    alt: 'User avatar'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'flex-end'
  }}>\r
      <Thumbnail src="https://placehold.co/60x60" alt="Small" width={60} height={60} caption="60×60" />\r
      <Thumbnail src="https://placehold.co/120x120" alt="Medium" width={120} height={120} caption="120×120" />\r
      <Thumbnail src="https://placehold.co/200x200" alt="Large" width={200} height={200} caption="200×200" />\r
    </div>
}`,...p.parameters?.docs?.source}}};var m=[`Default`,`WithCaption`,`Rounded`,`Sizes`];export{u as Default,f as Rounded,p as Sizes,d as WithCaption,m as __namedExportsOrder,l as default};