import{n as e}from"./chunk-BneVvdWh.js";import{B as t,_t as n,bt as r,vt as i,z as a}from"./iframe-BrtTKpdh.js";var o,s,c,l,u,d,f,p=e((()=>{r(),o=n(),s={isOpen:!0,onClose:()=>console.log(`Modal closed`),title:`Modal Title`,children:(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`p`,{children:`This is the main content of the modal. You can place any type of content here, including forms, images, text, etc.`}),(0,o.jsx)(`p`,{children:`The content will scroll automatically if it exceeds the maximum size of the modal.`})]})},c={...s,title:`Modal with Footer`,footer:(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,justifyContent:`flex-end`},children:[(0,o.jsx)(`button`,{type:`button`,style:{padding:`0.5rem 1rem`,borderRadius:`4px`,border:`1px solid #ccc`},children:`Cancel`}),(0,o.jsx)(`button`,{type:`button`,style:{padding:`0.5rem 1rem`,borderRadius:`4px`,background:`#007bff`,color:`white`,border:`none`},children:`Save Changes`})]})},l={...s,title:``,showCloseButton:!1,children:`This is a modal without a title or close button. You must provide a way to close it, such as a custom button in the content or in the footer.`},u={...s,title:`Large Modal`,size:i.LARGE,children:(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`p`,{children:`This is a modal with a custom size (large).`}),(0,o.jsx)(`p`,{children:`You can choose from: small, medium, large or xlarge.`})]})},d={...s,title:`Modal with Long Content`,children:(0,o.jsx)(`div`,{children:Array.from({length:10}).map((e,t)=>(0,o.jsxs)(`p`,{style:{marginBottom:`1rem`},children:[`Example paragraph `,t+1,`. This is long content to demonstrate scrolling within the modal. Content that exceeds the maximum height of the modal will generate a scrollbar.`]},t))})},f={...s,title:`Modal with Custom Text`,closeButtonText:`Close Window`,children:`This modal has a custom text for the close button.`}})),m,h,g,_,v,y,b,x,S,C,w;e((()=>{t(),p(),r(),{within:m,expect:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Modal`,component:a,tags:[`autodocs`],argTypes:{isOpen:{control:`boolean`,description:`Controls whether the modal is visible.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onClose:{action:`closed`,description:`Callback fired when the modal requests to be closed.`,table:{type:{summary:`() => void`}}},title:{control:`text`,description:`Heading text displayed at the top of the modal.`,table:{type:{summary:`string`}}},size:{control:`select`,options:Object.values(i),description:`Controls the maximum width of the modal dialog.`,table:{type:{summary:Object.values(i).join(` | `)},defaultValue:{summary:i.MEDIUM}}},showCloseButton:{control:`boolean`,description:`When true, renders a close button in the modal header.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},closeButtonText:{control:`text`,description:`Custom label for the close button.`,table:{type:{summary:`string`},defaultValue:{summary:`Close`}}},closeOnOverlayClick:{control:`boolean`,description:`When true, clicking outside the modal closes it.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},closeOnEsc:{control:`boolean`,description:`When true, pressing the Escape key closes the modal.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},centerVertically:{control:`boolean`,description:`When true, the modal is vertically centered in the viewport.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},preventScroll:{control:`boolean`,description:`When true, disables body scrolling while the modal is open.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},children:{control:`text`,description:`Main content rendered inside the modal body.`,table:{type:{summary:`ReactNode`}}},footer:{control:!1,description:`Optional content rendered in the modal footer (e.g. action buttons).`,table:{type:{summary:`ReactNode`}}}},parameters:{docs:{description:{component:`A dialog overlay component that renders content in a layer above the page. Supports configurable size, close behaviors, optional action footer, and focus trapping for accessibility.`}}},args:s},_={args:s,play:async({canvasElement:e})=>{let t=m(e);await h(t.getByRole(`heading`,{level:2,name:/modal title/i})).toBeInTheDocument(),await h(t.getByRole(`button`,{name:/^close$/i})).toBeInTheDocument()},parameters:{docs:{description:{story:`Standard modal with title, content, and close button.`}}}},v={args:c,play:async({canvasElement:e})=>{let t=m(e);await h(t.getByText(`Cancel`)).toBeInTheDocument(),await h(t.getByText(`Save Changes`)).toBeInTheDocument()},parameters:{docs:{description:{story:`Modal with a custom footer that can include action buttons.`}}}},y={args:l,play:async({canvasElement:e})=>{await h(m(e).queryByRole(`heading`)).not.toBeInTheDocument()},parameters:{docs:{description:{story:`Modal without title or close button. Useful for content that handles its own closing.`}}}},b={args:u,play:async({canvasElement:e})=>{await h(e.querySelector(`.large`)).toBeInTheDocument()},parameters:{docs:{description:{story:`Modal with a custom size (small, medium, large, xlarge).`}}}},x={args:d,parameters:{docs:{description:{story:`Modal with long content that generates vertical scrolling.`}}}},S={args:f,play:async({canvasElement:e})=>{await h(m(e).getByRole(`button`,{name:/close window/i})).toBeInTheDocument()},parameters:{docs:{description:{story:`Modal with custom text for the close button.`}}}},C={args:{...s,title:`Interactive Modal`,children:`Use the Storybook panel controls to modify the modal properties.`},parameters:{docs:{description:{story:`Interactive example where you can modify the modal properties using the Storybook panel controls.`}}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: baseArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', {
      level: 2,
      name: /modal title/i
    })).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: /^close$/i
    })).toBeInTheDocument();
  },
  parameters: {
    docs: {
      description: {
        story: 'Standard modal with title, content, and close button.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: withFooter,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Cancel')).toBeInTheDocument();
    await expect(canvas.getByText('Save Changes')).toBeInTheDocument();
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with a custom footer that can include action buttons.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: withoutTitle,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole('heading')).not.toBeInTheDocument();
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal without title or close button. Useful for content that handles its own closing.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: withCustomSize,
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector('.large')).toBeInTheDocument();
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with a custom size (small, medium, large, xlarge).'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: withLongContent,
  parameters: {
    docs: {
      description: {
        story: 'Modal with long content that generates vertical scrolling.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: withCustomCloseText,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', {
      name: /close window/i
    })).toBeInTheDocument();
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with custom text for the close button.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    title: 'Interactive Modal',
    children: 'Use the Storybook panel controls to modify the modal properties.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example where you can modify the modal properties using the Storybook panel controls.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`WithFooter`,`WithoutTitle`,`WithCustomSize`,`WithLongContent`,`WithCustomCloseText`,`Interactive`]}))();export{_ as Default,C as Interactive,S as WithCustomCloseText,b as WithCustomSize,v as WithFooter,x as WithLongContent,y as WithoutTitle,w as __namedExportsOrder,g as default};