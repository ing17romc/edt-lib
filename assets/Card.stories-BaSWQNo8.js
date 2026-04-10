import{t as e}from"./iframe-BwpCWMiM.js";import{t}from"./jsx-runtime-BsbbwSUz.js";e();var n=`_card_i2djj_25`,r=`_card__image_i2djj_51`,i=`_card__content_i2djj_56`,a=`_card__title_i2djj_59`,o=`_card__subtitle_i2djj_65`,s=`_card__body_i2djj_70`,c={"story-card":`_story-card_i2djj_1`,"story-variants":`_story-variants_i2djj_6`,card:n,"card--elevated":`_card--elevated_i2djj_40`,"card--outlined":`_card--outlined_i2djj_44`,"card--filled":`_card--filled_i2djj_48`,card__image:r,card__content:i,card__title:a,card__subtitle:o,card__body:s,"card--clickable":`_card--clickable_i2djj_75`},l=function(e){return e.ELEVATED=`elevated`,e.OUTLINED=`outlined`,e.FILLED=`filled`,e}({}),u=t(),d=({children:e,title:t,subtitle:n,imageUrl:r,imageAlt:i=``,variant:a=l.ELEVATED,className:o=``,onClick:s})=>{let d=!!s,f=[c.card,c[`card--${a}`],d?c[`card--clickable`]:``,o].filter(Boolean).join(` `);return(0,u.jsxs)(`div`,{className:f,style:d?{cursor:`pointer`}:void 0,onClick:e=>{d&&(e.preventDefault(),s?.())},onKeyDown:e=>{e.key===`Enter`&&d&&(e.preventDefault(),s?.())},role:d?`button`:`article`,tabIndex:d?0:-1,"aria-label":d?t||`Tarjeta interactiva`:void 0,children:[r&&(0,u.jsx)(`img`,{src:r,alt:i,className:c.card__image,loading:`lazy`}),(0,u.jsxs)(`div`,{className:c.card__content,children:[t&&(0,u.jsx)(`h3`,{className:c.card__title,children:t}),n&&(0,u.jsx)(`p`,{className:c.card__subtitle,children:n}),(0,u.jsx)(`div`,{className:c.card__body,children:e})]})]})};d.__docgenInfo={description:`Card component for displaying content in a card-styled container.\r
Supports different visual variants and is fully accessible.`,methods:[],displayName:`Card`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:`Main content of the card`},title:{required:!1,tsType:{name:`string`},description:`Optional card title`},subtitle:{required:!1,tsType:{name:`string`},description:`Optional card subtitle`},imageUrl:{required:!1,tsType:{name:`string`},description:`Optional image URL for the card`},imageAlt:{required:!1,tsType:{name:`string`},description:`Alternative text for the image`,defaultValue:{value:`''`,computed:!1}},variant:{required:!1,tsType:{name:`CardVariant`},description:`Visual style of the card\r
@default CardVariant.ELEVATED`,defaultValue:{value:`CardVariant.ELEVATED`,computed:!0}},className:{required:!1,tsType:{name:`string`},description:`Custom CSS class`,defaultValue:{value:`''`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Click event on the card`}}};var f={children:`Card content`,title:`Card Title`,subtitle:`Optional subtitle`,imageUrl:`https://w7.pngwing.com/pngs/745/105/png-transparent-pencil-and-paper-illustration-ssc-mts-exam-test-computer-icons-educational-entrance-examination-test-paper-miscellaneous-angle-text-thumbnail.png`,imageAlt:`Example image`,variant:l.ELEVATED},p={imageUrl:``,children:`Content without image`,title:`Card without image`,subtitle:`This card has no image`},m={children:`Clickable card content`,title:`Clickable card`,subtitle:`Click to see the action`,imageAlt:`Example image`,variant:l.ELEVATED,onClick:()=>console.log(`Card clicked!`)},h={children:`Outlined card content`,title:`Outlined Card`,subtitle:`Outlined variant`,imageUrl:``,imageAlt:``,variant:l.OUTLINED},g={children:`Filled card content`,title:`Filled Card`,subtitle:`Filled variant`,imageUrl:`https://w7.pngwing.com/pngs/745/105/png-transparent-pencil-and-paper-illustration-ssc-mts-exam-test-computer-icons-educational-entrance-examination-test-paper-miscellaneous-angle-text-thumbnail.png`,imageAlt:`Example image`,variant:l.FILLED},_={variant:{control:`select`,options:Object.values(l),description:`Visual variant of the card that determines its elevation and border style.`,table:{type:{summary:Object.values(l).join(` | `)},defaultValue:{summary:l.ELEVATED}}},title:{control:`text`,description:`Main heading text displayed at the top of the card body.`,table:{type:{summary:`string`}}},subtitle:{control:`text`,description:`Optional secondary text shown beneath the title.`,table:{type:{summary:`string`}}},imageUrl:{control:`text`,description:`URL of the image rendered at the top of the card. Leave empty to hide the image area.`,table:{type:{summary:`string`}}},imageAlt:{control:`text`,description:`Accessible alt text for the card image.`,table:{type:{summary:`string`}}},children:{control:`text`,description:`Content rendered inside the card body, below the title and subtitle.`,table:{type:{summary:`ReactNode`}}},onClick:{action:`clicked`,description:`When provided, the card becomes interactive and fires this callback on click.`,table:{type:{summary:`() => void`}}},className:{control:`text`,description:`Additional CSS class names for the card root element.`,table:{type:{summary:`string`}}}},v={layout:`centered`,docs:{description:{component:`A flexible surface component used to group and display related content. Supports multiple visual variants, optional images, titles, subtitles, and an interactive (clickable) mode.`}}},y={title:`Components/Card`,component:d,tags:[`autodocs`,`card`,`surface`,`container`],args:{...f},argTypes:_,parameters:v,decorators:[e=>(0,u.jsx)(`div`,{className:c[`story-card`],children:(0,u.jsx)(e,{})})],parameters:{docs:{description:{component:`The \`Card\` component is a versatile container that displays related content on a clear, delimited surface.\r
It supports multiple visual variants, optional images, and clickable behavior.\r
\r
### Key features:\r
- Multiple visual variants (elevated, outline, etc.)\r
- Support for optional images\r
- Optional clickable behavior\r
- Customizable content\r
\r
### Recommended usage:\r
- To group related information\r
- As product cards\r
- To display article summaries\r
- As navigation elements`}}}},b={args:{...f,onClick:void 0}},x={args:{...h,onClick:void 0},parameters:{docs:{description:{story:`Outlined variant that highlights content without a solid background.`}}},decorators:[e=>(0,u.jsx)(`div`,{className:`card-story`,children:(0,u.jsx)(e,{})})]},S={args:{...g,onClick:void 0},parameters:{docs:{description:{story:`Variant with solid background for greater contrast and visual emphasis.`}},backgrounds:{default:`light`}},decorators:[e=>(0,u.jsx)(`div`,{className:`card-story`,children:(0,u.jsx)(e,{})})]},C={args:{...p,onClick:void 0,children:(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{children:`This is a card that does not include an image.`}),(0,u.jsx)(`p`,{children:`Ideal for content that does not require visual support.`})]})},parameters:{docs:{description:{story:`Example of a card that only shows text without an image.`}}},decorators:[e=>(0,u.jsx)(`div`,{className:`card-story`,children:(0,u.jsx)(e,{})})]},w={args:{...m,onClick:()=>alert(`Card clicked!`),title:`Clickable card`,subtitle:`Click to see the action`,children:(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{children:`This card has a click handler.`}),(0,u.jsx)(`p`,{children:`Try clicking anywhere on the card.`})]})},parameters:{docs:{description:{story:`Card that can be clicked and responds to click events.`}}},decorators:[e=>(0,u.jsx)(`div`,{className:`card-story`,children:(0,u.jsx)(e,{})})]};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...mockCardProps,
    onClick: undefined
  }
}`,...b.parameters?.docs?.source},description:{story:`Standard card with image and basic content.\r
This is the default variant of the Card component.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...mockOutlinedCard,
    onClick: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Outlined variant that highlights content without a solid background.'
      }
    }
  },
  decorators: [Story => <div className="card-story">\r
        <Story />\r
      </div>]
}`,...x.parameters?.docs?.source},description:{story:`Card with outlined variant.\r
Ideal for highlighting content without a solid background.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...mockFilledCard,
    onClick: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Variant with solid background for greater contrast and visual emphasis.'
      }
    },
    backgrounds: {
      default: 'light'
    }
  },
  decorators: [Story => <div className="card-story">\r
        <Story />\r
      </div>]
}`,...S.parameters?.docs?.source},description:{story:`Card with filled variant.\r
Provides a solid background for greater contrast.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...mockCardWithoutImage,
    onClick: undefined,
    children: <div>\r
        <p>This is a card that does not include an image.</p>\r
        <p>Ideal for content that does not require visual support.</p>\r
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a card that only shows text without an image.'
      }
    }
  },
  decorators: [Story => <div className="card-story">\r
        <Story />\r
      </div>]
}`,...C.parameters?.docs?.source},description:{story:`Card without image that shows only text content.\r
Useful when content is more important than the image.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...mockClickableCard,
    onClick: () => alert('Card clicked!'),
    title: 'Clickable card',
    subtitle: 'Click to see the action',
    children: <div>\r
        <p>This card has a click handler.</p>\r
        <p>Try clicking anywhere on the card.</p>\r
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: 'Card that can be clicked and responds to click events.'
      }
    }
  },
  decorators: [Story => <div className="card-story">\r
        <Story />\r
      </div>]
}`,...w.parameters?.docs?.source},description:{story:`Clickable card that responds to click events.\r
Useful for navigation or showing more details.`,...w.parameters?.docs?.description}}};var T=[`Default`,`Outlined`,`Filled`,`WithoutImage`,`Clickable`];export{w as Clickable,b as Default,S as Filled,x as Outlined,C as WithoutImage,T as __namedExportsOrder,y as default};