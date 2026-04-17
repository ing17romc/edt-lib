import{n as e}from"./chunk-BneVvdWh.js";import{_t as t,ct as n,dt as r,ft as i,lt as a,st as o,ut as s}from"./iframe-BrtTKpdh.js";var c,l,u,d,f,p,m,h=e((()=>{s(),c={children:`Card content`,title:`Card Title`,subtitle:`Optional subtitle`,imageUrl:`https://w7.pngwing.com/pngs/745/105/png-transparent-pencil-and-paper-illustration-ssc-mts-exam-test-computer-icons-educational-entrance-examination-test-paper-miscellaneous-angle-text-thumbnail.png`,imageAlt:`Example image`,variant:a.ELEVATED},l={imageUrl:``,children:`Content without image`,title:`Card without image`,subtitle:`This card has no image`},u={children:`Clickable card content`,title:`Clickable card`,subtitle:`Click to see the action`,imageAlt:`Example image`,variant:a.ELEVATED,onClick:()=>console.log(`Card clicked!`)},d={children:`Outlined card content`,title:`Outlined Card`,subtitle:`Outlined variant`,imageUrl:``,imageAlt:``,variant:a.OUTLINED},f={children:`Filled card content`,title:`Filled Card`,subtitle:`Filled variant`,imageUrl:`https://w7.pngwing.com/pngs/745/105/png-transparent-pencil-and-paper-illustration-ssc-mts-exam-test-computer-icons-educational-entrance-examination-test-paper-miscellaneous-angle-text-thumbnail.png`,imageAlt:`Example image`,variant:a.FILLED},p={variant:{control:`select`,options:Object.values(a),description:`Visual variant of the card that determines its elevation and border style.`,table:{type:{summary:Object.values(a).join(` | `)},defaultValue:{summary:a.ELEVATED}}},title:{control:`text`,description:`Main heading text displayed at the top of the card body.`,table:{type:{summary:`string`}}},subtitle:{control:`text`,description:`Optional secondary text shown beneath the title.`,table:{type:{summary:`string`}}},imageUrl:{control:`text`,description:`URL of the image rendered at the top of the card. Leave empty to hide the image area.`,table:{type:{summary:`string`}}},imageAlt:{control:`text`,description:`Accessible alt text for the card image.`,table:{type:{summary:`string`}}},children:{control:`text`,description:`Content rendered inside the card body, below the title and subtitle.`,table:{type:{summary:`ReactNode`}}},onClick:{action:`clicked`,description:`When provided, the card becomes interactive and fires this callback on click.`,table:{type:{summary:`() => void`}}},className:{control:`text`,description:`Additional CSS class names for the card root element.`,table:{type:{summary:`string`}}}},m={layout:`centered`,docs:{description:{component:`A flexible surface component used to group and display related content. Supports multiple visual variants, optional images, titles, subtitles, and an interactive (clickable) mode.`}}}})),g,_,v,y,b,x,S,C,w,T;e((()=>{n(),h(),i(),g=t(),{within:_,expect:v}=__STORYBOOK_MODULE_TEST__,y={title:`Components/Card`,component:o,tags:[`autodocs`,`card`,`surface`,`container`],args:{...c},argTypes:p,parameters:m,decorators:[e=>(0,g.jsx)(`div`,{className:r[`story-card`],children:(0,g.jsx)(e,{})})],parameters:{docs:{description:{component:`The \`Card\` component is a versatile container that displays related content on a clear, delimited surface.\r
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
- As navigation elements`}}}},b={args:{...c,onClick:void 0},play:async({canvasElement:e})=>{let t=_(e);await v(t.getByText(`Card Title`)).toBeInTheDocument(),await v(t.getByText(`Optional subtitle`)).toBeInTheDocument()}},x={args:{...d,onClick:void 0},play:async({canvasElement:e})=>{await v(_(e).getByText(`Outlined Card`)).toBeInTheDocument(),await v(e.querySelector(`.card--outlined`)).not.toBeNull()},parameters:{docs:{description:{story:`Outlined variant that highlights content without a solid background.`}}},decorators:[e=>(0,g.jsx)(`div`,{className:`card-story`,children:(0,g.jsx)(e,{})})]},S={args:{...f,onClick:void 0},parameters:{docs:{description:{story:`Variant with solid background for greater contrast and visual emphasis.`}},backgrounds:{default:`light`}},decorators:[e=>(0,g.jsx)(`div`,{className:`card-story`,children:(0,g.jsx)(e,{})})]},C={args:{...l,onClick:void 0,children:(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`p`,{children:`This is a card that does not include an image.`}),(0,g.jsx)(`p`,{children:`Ideal for content that does not require visual support.`})]})},play:async({canvasElement:e})=>{let t=_(e);await v(t.getByText(`Card without image`)).toBeInTheDocument(),await v(t.queryByRole(`img`)).not.toBeInTheDocument()},parameters:{docs:{description:{story:`Example of a card that only shows text without an image.`}}},decorators:[e=>(0,g.jsx)(`div`,{className:`card-story`,children:(0,g.jsx)(e,{})})]},w={args:{...u,onClick:()=>alert(`Card clicked!`),title:`Clickable card`,subtitle:`Click to see the action`,children:(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`p`,{children:`This card has a click handler.`}),(0,g.jsx)(`p`,{children:`Try clicking anywhere on the card.`})]})},parameters:{docs:{description:{story:`Card that can be clicked and responds to click events.`}}},decorators:[e=>(0,g.jsx)(`div`,{className:`card-story`,children:(0,g.jsx)(e,{})})]},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`Standard card with image and basic content.\r
This is the default variant of the Card component.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
Useful for navigation or showing more details.`,...w.parameters?.docs?.description}}},T=[`Default`,`Outlined`,`Filled`,`WithoutImage`,`Clickable`]}))();export{w as Clickable,b as Default,S as Filled,x as Outlined,C as WithoutImage,T as __namedExportsOrder,y as default};