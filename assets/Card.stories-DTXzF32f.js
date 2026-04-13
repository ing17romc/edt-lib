import{n as e}from"./chunk-BneVvdWh.js";import{S as t}from"./iframe-DoW-sQG_.js";import{t as n}from"./jsx-runtime-Bn1Ys6_W.js";var r,i,a,o,s,c,l,u=e((()=>{r=`_card_i2djj_25`,i=`_card__image_i2djj_51`,a=`_card__content_i2djj_56`,o=`_card__title_i2djj_59`,s=`_card__subtitle_i2djj_65`,c=`_card__body_i2djj_70`,l={"story-card":`_story-card_i2djj_1`,"story-variants":`_story-variants_i2djj_6`,card:r,"card--elevated":`_card--elevated_i2djj_40`,"card--outlined":`_card--outlined_i2djj_44`,"card--filled":`_card--filled_i2djj_48`,card__image:i,card__content:a,card__title:o,card__subtitle:s,card__body:c,"card--clickable":`_card--clickable_i2djj_75`}})),d,f=e((()=>{d=function(e){return e.ELEVATED=`elevated`,e.OUTLINED=`outlined`,e.FILLED=`filled`,e}({})})),p,m,h=e((()=>{t(),u(),f(),p=n(),m=({children:e,title:t,subtitle:n,imageUrl:r,imageAlt:i=``,variant:a=d.ELEVATED,className:o=``,onClick:s})=>{let c=!!s,u=[l.card,l[`card--${a}`],c?l[`card--clickable`]:``,o].filter(Boolean).join(` `);return(0,p.jsxs)(`div`,{className:u,style:c?{cursor:`pointer`}:void 0,onClick:e=>{c&&(e.preventDefault(),s?.())},onKeyDown:e=>{e.key===`Enter`&&c&&(e.preventDefault(),s?.())},role:c?`button`:`article`,tabIndex:c?0:-1,"aria-label":c?t||`Tarjeta interactiva`:void 0,children:[r&&(0,p.jsx)(`img`,{src:r,alt:i,className:l.card__image,loading:`lazy`}),(0,p.jsxs)(`div`,{className:l.card__content,children:[t&&(0,p.jsx)(`h3`,{className:l.card__title,children:t}),n&&(0,p.jsx)(`p`,{className:l.card__subtitle,children:n}),(0,p.jsx)(`div`,{className:l.card__body,children:e})]})]})},m.__docgenInfo={description:`Card component for displaying content in a card-styled container.\r
Supports different visual variants and is fully accessible.`,methods:[],displayName:`Card`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:`Main content of the card`},title:{required:!1,tsType:{name:`string`},description:`Optional card title`},subtitle:{required:!1,tsType:{name:`string`},description:`Optional card subtitle`},imageUrl:{required:!1,tsType:{name:`string`},description:`Optional image URL for the card`},imageAlt:{required:!1,tsType:{name:`string`},description:`Alternative text for the image`,defaultValue:{value:`''`,computed:!1}},variant:{required:!1,tsType:{name:`CardVariant`},description:`Visual style of the card\r
@default CardVariant.ELEVATED`,defaultValue:{value:`CardVariant.ELEVATED`,computed:!0}},className:{required:!1,tsType:{name:`string`},description:`Custom CSS class`,defaultValue:{value:`''`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Click event on the card`}}}})),g,_,v,y,b,x,S,C=e((()=>{f(),g={children:`Card content`,title:`Card Title`,subtitle:`Optional subtitle`,imageUrl:`https://w7.pngwing.com/pngs/745/105/png-transparent-pencil-and-paper-illustration-ssc-mts-exam-test-computer-icons-educational-entrance-examination-test-paper-miscellaneous-angle-text-thumbnail.png`,imageAlt:`Example image`,variant:d.ELEVATED},_={imageUrl:``,children:`Content without image`,title:`Card without image`,subtitle:`This card has no image`},v={children:`Clickable card content`,title:`Clickable card`,subtitle:`Click to see the action`,imageAlt:`Example image`,variant:d.ELEVATED,onClick:()=>console.log(`Card clicked!`)},y={children:`Outlined card content`,title:`Outlined Card`,subtitle:`Outlined variant`,imageUrl:``,imageAlt:``,variant:d.OUTLINED},b={children:`Filled card content`,title:`Filled Card`,subtitle:`Filled variant`,imageUrl:`https://w7.pngwing.com/pngs/745/105/png-transparent-pencil-and-paper-illustration-ssc-mts-exam-test-computer-icons-educational-entrance-examination-test-paper-miscellaneous-angle-text-thumbnail.png`,imageAlt:`Example image`,variant:d.FILLED},x={variant:{control:`select`,options:Object.values(d),description:`Visual variant of the card that determines its elevation and border style.`,table:{type:{summary:Object.values(d).join(` | `)},defaultValue:{summary:d.ELEVATED}}},title:{control:`text`,description:`Main heading text displayed at the top of the card body.`,table:{type:{summary:`string`}}},subtitle:{control:`text`,description:`Optional secondary text shown beneath the title.`,table:{type:{summary:`string`}}},imageUrl:{control:`text`,description:`URL of the image rendered at the top of the card. Leave empty to hide the image area.`,table:{type:{summary:`string`}}},imageAlt:{control:`text`,description:`Accessible alt text for the card image.`,table:{type:{summary:`string`}}},children:{control:`text`,description:`Content rendered inside the card body, below the title and subtitle.`,table:{type:{summary:`ReactNode`}}},onClick:{action:`clicked`,description:`When provided, the card becomes interactive and fires this callback on click.`,table:{type:{summary:`() => void`}}},className:{control:`text`,description:`Additional CSS class names for the card root element.`,table:{type:{summary:`string`}}}},S={layout:`centered`,docs:{description:{component:`A flexible surface component used to group and display related content. Supports multiple visual variants, optional images, titles, subtitles, and an interactive (clickable) mode.`}}}})),w,T,E,D,O,k,A,j,M,N;e((()=>{h(),C(),u(),w=n(),{within:T,expect:E}=__STORYBOOK_MODULE_TEST__,D={title:`Components/Card`,component:m,tags:[`autodocs`,`card`,`surface`,`container`],args:{...g},argTypes:x,parameters:S,decorators:[e=>(0,w.jsx)(`div`,{className:l[`story-card`],children:(0,w.jsx)(e,{})})],parameters:{docs:{description:{component:`The \`Card\` component is a versatile container that displays related content on a clear, delimited surface.\r
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
- As navigation elements`}}}},O={args:{...g,onClick:void 0},play:async({canvasElement:e})=>{let t=T(e);await E(t.getByText(`Card Title`)).toBeInTheDocument(),await E(t.getByText(`Optional subtitle`)).toBeInTheDocument()}},k={args:{...y,onClick:void 0},play:async({canvasElement:e})=>{await E(T(e).getByText(`Outlined Card`)).toBeInTheDocument(),await E(e.querySelector(`.card--outlined`)).not.toBeNull()},parameters:{docs:{description:{story:`Outlined variant that highlights content without a solid background.`}}},decorators:[e=>(0,w.jsx)(`div`,{className:`card-story`,children:(0,w.jsx)(e,{})})]},A={args:{...b,onClick:void 0},parameters:{docs:{description:{story:`Variant with solid background for greater contrast and visual emphasis.`}},backgrounds:{default:`light`}},decorators:[e=>(0,w.jsx)(`div`,{className:`card-story`,children:(0,w.jsx)(e,{})})]},j={args:{..._,onClick:void 0,children:(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`p`,{children:`This is a card that does not include an image.`}),(0,w.jsx)(`p`,{children:`Ideal for content that does not require visual support.`})]})},play:async({canvasElement:e})=>{let t=T(e);await E(t.getByText(`Card without image`)).toBeInTheDocument(),await E(t.queryByRole(`img`)).not.toBeInTheDocument()},parameters:{docs:{description:{story:`Example of a card that only shows text without an image.`}}},decorators:[e=>(0,w.jsx)(`div`,{className:`card-story`,children:(0,w.jsx)(e,{})})]},M={args:{...v,onClick:()=>alert(`Card clicked!`),title:`Clickable card`,subtitle:`Click to see the action`,children:(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`p`,{children:`This card has a click handler.`}),(0,w.jsx)(`p`,{children:`Try clicking anywhere on the card.`})]})},parameters:{docs:{description:{story:`Card that can be clicked and responds to click events.`}}},decorators:[e=>(0,w.jsx)(`div`,{className:`card-story`,children:(0,w.jsx)(e,{})})]},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    ...mockCardProps,
    onClick: undefined
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Card Title')).toBeInTheDocument();
    await expect(canvas.getByText('Optional subtitle')).toBeInTheDocument();
  }
}`,...O.parameters?.docs?.source},description:{story:`Standard card with image and basic content.\r
This is the default variant of the Card component.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...mockOutlinedCard,
    onClick: undefined
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Outlined Card')).toBeInTheDocument();
    await expect(canvasElement.querySelector('.card--outlined')).not.toBeNull();
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
}`,...k.parameters?.docs?.source},description:{story:`Card with outlined variant.\r
Ideal for highlighting content without a solid background.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:`Card with filled variant.\r
Provides a solid background for greater contrast.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...mockCardWithoutImage,
    onClick: undefined,
    children: <div>\r
        <p>This is a card that does not include an image.</p>\r
        <p>Ideal for content that does not require visual support.</p>\r
      </div>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Card without image')).toBeInTheDocument();
    await expect(canvas.queryByRole('img')).not.toBeInTheDocument();
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
}`,...j.parameters?.docs?.source},description:{story:`Card without image that shows only text content.\r
Useful when content is more important than the image.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:`Clickable card that responds to click events.\r
Useful for navigation or showing more details.`,...M.parameters?.docs?.description}}},N=[`Default`,`Outlined`,`Filled`,`WithoutImage`,`Clickable`]}))();export{M as Clickable,O as Default,A as Filled,k as Outlined,j as WithoutImage,N as __namedExportsOrder,D as default};