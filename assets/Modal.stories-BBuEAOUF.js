import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-DoW-sQG_.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{r as i,t as a}from"./types-Duki_pzD.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y=t((()=>{o=`_modalOverlay_11hnr_1`,s=`_visible_11hnr_17`,c=`_modalContainer_11hnr_22`,l=`_small_11hnr_38`,u=`_medium_11hnr_41`,d=`_large_11hnr_44`,f=`_xlarge_11hnr_47`,p=`_modalHeader_11hnr_51`,m=`_closeButton_11hnr_66`,h=`_modalContent_11hnr_89`,g=`_modalFooter_11hnr_100`,_=`_centered_11hnr_120`,v={modalOverlay:o,"modal-fade-in":`_modal-fade-in_11hnr_1`,visible:s,modalContainer:c,small:l,medium:u,large:d,xlarge:f,modalHeader:p,closeButton:m,modalContent:h,modalFooter:g,centered:_}})),b,x,S,C=t((()=>{b=e(n(),1),y(),i(),x=r(),S=({isOpen:e,onClose:t,title:n,children:r,size:i=a.MEDIUM,showCloseButton:o=!0,closeButtonText:s=`Close`,closeOnOverlayClick:c=!0,closeOnEsc:l=!0,className:u=``,style:d,footer:f,centerVertically:p=!0,preventScroll:m=!0})=>{(0,b.useEffect)(()=>(e&&m?document.body.style.overflow=`hidden`:document.body.style.overflow=`unset`,()=>{document.body.style.overflow=`unset`}),[e,m]);let h=(0,b.useCallback)(n=>{n.key===`Escape`&&e&&l&&t()},[e,t,l]);(0,b.useEffect)(()=>(e&&document.addEventListener(`keydown`,h),()=>{document.removeEventListener(`keydown`,h)}),[e,h]);let g=e=>{e.stopPropagation(),c&&t()};return e?(0,x.jsxs)(`div`,{className:`${v.modalOverlay} ${e?v.visible:``} ${p?v.centered:``}`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":n?`modal-title`:void 0,children:[(0,x.jsx)(`button`,{type:`button`,className:v.overlayButton,onClick:g,"aria-label":`Close modal`}),(0,x.jsxs)(`div`,{className:`${v.modalContainer} ${v[i]} ${u}`,style:d,children:[(n||o)&&(0,x.jsxs)(`div`,{className:v.modalHeader,children:[n&&(0,x.jsx)(`h2`,{id:`modal-title`,children:n}),o&&(0,x.jsx)(`button`,{type:`button`,className:v.closeButton,onClick:t,"aria-label":s,children:`×`})]}),(0,x.jsx)(`div`,{className:v.modalContent,children:r}),f&&(0,x.jsx)(`div`,{className:v.modalFooter,children:f})]})]}):null},S.__docgenInfo={description:`Modal component that displays content in a popup window.\r
Supports different sizes, Escape key closing, and clicking outside the modal.`,methods:[],displayName:`Modal`,props:{isOpen:{required:!0,tsType:{name:`boolean`},description:`Indicates whether the modal is open or closed\r
@default false`},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Function called when the modal closes`},title:{required:!1,tsType:{name:`string`},description:`Modal title`},children:{required:!0,tsType:{name:`ReactNode`},description:`Modal content`},size:{required:!1,tsType:{name:`ComponentSize`},description:`Modal size\r
@default 'medium'`,defaultValue:{value:`ComponentSize.MEDIUM`,computed:!0}},showCloseButton:{required:!1,tsType:{name:`boolean`},description:`Indicates whether to show the close button\r
@default true`,defaultValue:{value:`true`,computed:!1}},closeButtonText:{required:!1,tsType:{name:`string`},description:`Custom text for the close button`,defaultValue:{value:`'Close'`,computed:!1}},closeOnOverlayClick:{required:!1,tsType:{name:`boolean`},description:`Indicates whether the modal should close when clicking outside of it\r
@default true`,defaultValue:{value:`true`,computed:!1}},closeOnEsc:{required:!1,tsType:{name:`boolean`},description:`Indicates whether the modal should close when pressing the Escape key\r
@default true`,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Custom CSS class for the modal container`,defaultValue:{value:`''`,computed:!1}},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:`Inline styles for the modal container`},footer:{required:!1,tsType:{name:`ReactNode`},description:`Element rendered in the modal footer`},centerVertically:{required:!1,tsType:{name:`boolean`},description:`Indicates whether the modal should be vertically centered\r
@default true`,defaultValue:{value:`true`,computed:!1}},preventScroll:{required:!1,tsType:{name:`boolean`},description:`Indicates whether the modal should disable body scroll when open\r
@default true`,defaultValue:{value:`true`,computed:!1}}}}})),w,T,E,D,O,k,A,j=t((()=>{i(),w=r(),T={isOpen:!0,onClose:()=>console.log(`Modal closed`),title:`Modal Title`,children:(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`p`,{children:`This is the main content of the modal. You can place any type of content here, including forms, images, text, etc.`}),(0,w.jsx)(`p`,{children:`The content will scroll automatically if it exceeds the maximum size of the modal.`})]})},E={...T,title:`Modal with Footer`,footer:(0,w.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,justifyContent:`flex-end`},children:[(0,w.jsx)(`button`,{type:`button`,style:{padding:`0.5rem 1rem`,borderRadius:`4px`,border:`1px solid #ccc`},children:`Cancel`}),(0,w.jsx)(`button`,{type:`button`,style:{padding:`0.5rem 1rem`,borderRadius:`4px`,background:`#007bff`,color:`white`,border:`none`},children:`Save Changes`})]})},D={...T,title:``,showCloseButton:!1,children:`This is a modal without a title or close button. You must provide a way to close it, such as a custom button in the content or in the footer.`},O={...T,title:`Large Modal`,size:a.LARGE,children:(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`p`,{children:`This is a modal with a custom size (large).`}),(0,w.jsx)(`p`,{children:`You can choose from: small, medium, large or xlarge.`})]})},k={...T,title:`Modal with Long Content`,children:(0,w.jsx)(`div`,{children:Array.from({length:10}).map((e,t)=>(0,w.jsxs)(`p`,{style:{marginBottom:`1rem`},children:[`Example paragraph `,t+1,`. This is long content to demonstrate scrolling within the modal. Content that exceeds the maximum height of the modal will generate a scrollbar.`]},t))})},A={...T,title:`Modal with Custom Text`,closeButtonText:`Close Window`,children:`This modal has a custom text for the close button.`}})),M,N,P,F,I,L,R,z,B,V,H;t((()=>{C(),j(),i(),{within:M,expect:N}=__STORYBOOK_MODULE_TEST__,P={title:`Components/Modal`,component:S,tags:[`autodocs`],argTypes:{isOpen:{control:`boolean`,description:`Controls whether the modal is visible.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onClose:{action:`closed`,description:`Callback fired when the modal requests to be closed.`,table:{type:{summary:`() => void`}}},title:{control:`text`,description:`Heading text displayed at the top of the modal.`,table:{type:{summary:`string`}}},size:{control:`select`,options:Object.values(a),description:`Controls the maximum width of the modal dialog.`,table:{type:{summary:Object.values(a).join(` | `)},defaultValue:{summary:a.MEDIUM}}},showCloseButton:{control:`boolean`,description:`When true, renders a close button in the modal header.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},closeButtonText:{control:`text`,description:`Custom label for the close button.`,table:{type:{summary:`string`},defaultValue:{summary:`Close`}}},closeOnOverlayClick:{control:`boolean`,description:`When true, clicking outside the modal closes it.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},closeOnEsc:{control:`boolean`,description:`When true, pressing the Escape key closes the modal.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},centerVertically:{control:`boolean`,description:`When true, the modal is vertically centered in the viewport.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},preventScroll:{control:`boolean`,description:`When true, disables body scrolling while the modal is open.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},children:{control:`text`,description:`Main content rendered inside the modal body.`,table:{type:{summary:`ReactNode`}}},footer:{control:!1,description:`Optional content rendered in the modal footer (e.g. action buttons).`,table:{type:{summary:`ReactNode`}}}},parameters:{docs:{description:{component:`A dialog overlay component that renders content in a layer above the page. Supports configurable size, close behaviors, optional action footer, and focus trapping for accessibility.`}}},args:T},F={args:T,play:async({canvasElement:e})=>{let t=M(e);await N(t.getByRole(`heading`,{level:2,name:/modal title/i})).toBeInTheDocument(),await N(t.getByRole(`button`,{name:/^close$/i})).toBeInTheDocument()},parameters:{docs:{description:{story:`Standard modal with title, content, and close button.`}}}},I={args:E,play:async({canvasElement:e})=>{let t=M(e);await N(t.getByText(`Cancel`)).toBeInTheDocument(),await N(t.getByText(`Save Changes`)).toBeInTheDocument()},parameters:{docs:{description:{story:`Modal with a custom footer that can include action buttons.`}}}},L={args:D,play:async({canvasElement:e})=>{await N(M(e).queryByRole(`heading`)).not.toBeInTheDocument()},parameters:{docs:{description:{story:`Modal without title or close button. Useful for content that handles its own closing.`}}}},R={args:O,play:async({canvasElement:e})=>{await N(e.querySelector(`.large`)).toBeInTheDocument()},parameters:{docs:{description:{story:`Modal with a custom size (small, medium, large, xlarge).`}}}},z={args:k,parameters:{docs:{description:{story:`Modal with long content that generates vertical scrolling.`}}}},B={args:A,play:async({canvasElement:e})=>{await N(M(e).getByRole(`button`,{name:/close window/i})).toBeInTheDocument()},parameters:{docs:{description:{story:`Modal with custom text for the close button.`}}}},V={args:{...T,title:`Interactive Modal`,children:`Use the Storybook panel controls to modify the modal properties.`},parameters:{docs:{description:{story:`Interactive example where you can modify the modal properties using the Storybook panel controls.`}}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: withLongContent,
  parameters: {
    docs: {
      description: {
        story: 'Modal with long content that generates vertical scrolling.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H=[`Default`,`WithFooter`,`WithoutTitle`,`WithCustomSize`,`WithLongContent`,`WithCustomCloseText`,`Interactive`]}))();export{F as Default,V as Interactive,B as WithCustomCloseText,R as WithCustomSize,I as WithFooter,z as WithLongContent,L as WithoutTitle,H as __namedExportsOrder,P as default};