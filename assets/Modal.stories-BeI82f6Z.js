import{r as e,t}from"./iframe-BwpCWMiM.js";import{t as n}from"./jsx-runtime-BsbbwSUz.js";import{t as r}from"./types-BTwUNDvM.js";var i=e(t(),1),a=`_modalOverlay_11hnr_1`,o=`_visible_11hnr_17`,s=`_modalContainer_11hnr_22`,c=`_small_11hnr_38`,l=`_medium_11hnr_41`,u=`_large_11hnr_44`,d=`_xlarge_11hnr_47`,f=`_modalHeader_11hnr_51`,p=`_closeButton_11hnr_66`,m=`_modalContent_11hnr_89`,h=`_modalFooter_11hnr_100`,g=`_centered_11hnr_120`,_={modalOverlay:a,"modal-fade-in":`_modal-fade-in_11hnr_1`,visible:o,modalContainer:s,small:c,medium:l,large:u,xlarge:d,modalHeader:f,closeButton:p,modalContent:m,modalFooter:h,centered:g},v=n(),y=({isOpen:e,onClose:t,title:n,children:a,size:o=r.MEDIUM,showCloseButton:s=!0,closeButtonText:c=`Close`,closeOnOverlayClick:l=!0,closeOnEsc:u=!0,className:d=``,style:f,footer:p,centerVertically:m=!0,preventScroll:h=!0})=>{(0,i.useEffect)(()=>(e&&h?document.body.style.overflow=`hidden`:document.body.style.overflow=`unset`,()=>{document.body.style.overflow=`unset`}),[e,h]);let g=(0,i.useCallback)(n=>{n.key===`Escape`&&e&&u&&t()},[e,t,u]);(0,i.useEffect)(()=>(e&&document.addEventListener(`keydown`,g),()=>{document.removeEventListener(`keydown`,g)}),[e,g]);let y=e=>{e.stopPropagation(),l&&t()};return e?(0,v.jsxs)(`div`,{className:`${_.modalOverlay} ${e?_.visible:``} ${m?_.centered:``}`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":n?`modal-title`:void 0,children:[(0,v.jsx)(`button`,{type:`button`,className:_.overlayButton,onClick:y,"aria-label":`Close modal`}),(0,v.jsxs)(`div`,{className:`${_.modalContainer} ${_[o]} ${d}`,style:f,children:[(n||s)&&(0,v.jsxs)(`div`,{className:_.modalHeader,children:[n&&(0,v.jsx)(`h2`,{id:`modal-title`,children:n}),s&&(0,v.jsx)(`button`,{type:`button`,className:_.closeButton,onClick:t,"aria-label":c,children:`×`})]}),(0,v.jsx)(`div`,{className:_.modalContent,children:a}),p&&(0,v.jsx)(`div`,{className:_.modalFooter,children:p})]})]}):null};y.__docgenInfo={description:`Modal component that displays content in a popup window.\r
Supports different sizes, Escape key closing, and clicking outside the modal.`,methods:[],displayName:`Modal`,props:{isOpen:{required:!0,tsType:{name:`boolean`},description:`Indicates whether the modal is open or closed\r
@default false`},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Function called when the modal closes`},title:{required:!1,tsType:{name:`string`},description:`Modal title`},children:{required:!0,tsType:{name:`ReactNode`},description:`Modal content`},size:{required:!1,tsType:{name:`ComponentSize`},description:`Modal size\r
@default 'medium'`,defaultValue:{value:`ComponentSize.MEDIUM`,computed:!0}},showCloseButton:{required:!1,tsType:{name:`boolean`},description:`Indicates whether to show the close button\r
@default true`,defaultValue:{value:`true`,computed:!1}},closeButtonText:{required:!1,tsType:{name:`string`},description:`Custom text for the close button`,defaultValue:{value:`'Close'`,computed:!1}},closeOnOverlayClick:{required:!1,tsType:{name:`boolean`},description:`Indicates whether the modal should close when clicking outside of it\r
@default true`,defaultValue:{value:`true`,computed:!1}},closeOnEsc:{required:!1,tsType:{name:`boolean`},description:`Indicates whether the modal should close when pressing the Escape key\r
@default true`,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Custom CSS class for the modal container`,defaultValue:{value:`''`,computed:!1}},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:`Inline styles for the modal container`},footer:{required:!1,tsType:{name:`ReactNode`},description:`Element rendered in the modal footer`},centerVertically:{required:!1,tsType:{name:`boolean`},description:`Indicates whether the modal should be vertically centered\r
@default true`,defaultValue:{value:`true`,computed:!1}},preventScroll:{required:!1,tsType:{name:`boolean`},description:`Indicates whether the modal should disable body scroll when open\r
@default true`,defaultValue:{value:`true`,computed:!1}}}};var b={isOpen:!0,onClose:()=>console.log(`Modal closed`),title:`Modal Title`,children:(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{children:`This is the main content of the modal. You can place any type of content here, including forms, images, text, etc.`}),(0,v.jsx)(`p`,{children:`The content will scroll automatically if it exceeds the maximum size of the modal.`})]})},x={...b,title:`Modal with Footer`,footer:(0,v.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,justifyContent:`flex-end`},children:[(0,v.jsx)(`button`,{type:`button`,style:{padding:`0.5rem 1rem`,borderRadius:`4px`,border:`1px solid #ccc`},children:`Cancel`}),(0,v.jsx)(`button`,{type:`button`,style:{padding:`0.5rem 1rem`,borderRadius:`4px`,background:`#007bff`,color:`white`,border:`none`},children:`Save Changes`})]})},S={...b,title:``,showCloseButton:!1,children:`This is a modal without a title or close button. You must provide a way to close it, such as a custom button in the content or in the footer.`},C={...b,title:`Large Modal`,size:r.LARGE,children:(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{children:`This is a modal with a custom size (large).`}),(0,v.jsx)(`p`,{children:`You can choose from: small, medium, large or xlarge.`})]})},w={...b,title:`Modal with Long Content`,children:(0,v.jsx)(`div`,{children:Array.from({length:10}).map((e,t)=>(0,v.jsxs)(`p`,{style:{marginBottom:`1rem`},children:[`Example paragraph `,t+1,`. This is long content to demonstrate scrolling within the modal. Content that exceeds the maximum height of the modal will generate a scrollbar.`]},t))})},T={...b,title:`Modal with Custom Text`,closeButtonText:`Close Window`,children:`This modal has a custom text for the close button.`},E={title:`Components/Modal`,component:y,tags:[`autodocs`],argTypes:{isOpen:{control:`boolean`,description:`Controls whether the modal is visible.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onClose:{action:`closed`,description:`Callback fired when the modal requests to be closed.`,table:{type:{summary:`() => void`}}},title:{control:`text`,description:`Heading text displayed at the top of the modal.`,table:{type:{summary:`string`}}},size:{control:`select`,options:Object.values(r),description:`Controls the maximum width of the modal dialog.`,table:{type:{summary:Object.values(r).join(` | `)},defaultValue:{summary:r.MEDIUM}}},showCloseButton:{control:`boolean`,description:`When true, renders a close button in the modal header.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},closeButtonText:{control:`text`,description:`Custom label for the close button.`,table:{type:{summary:`string`},defaultValue:{summary:`Close`}}},closeOnOverlayClick:{control:`boolean`,description:`When true, clicking outside the modal closes it.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},closeOnEsc:{control:`boolean`,description:`When true, pressing the Escape key closes the modal.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},centerVertically:{control:`boolean`,description:`When true, the modal is vertically centered in the viewport.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},preventScroll:{control:`boolean`,description:`When true, disables body scrolling while the modal is open.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},children:{control:`text`,description:`Main content rendered inside the modal body.`,table:{type:{summary:`ReactNode`}}},footer:{control:!1,description:`Optional content rendered in the modal footer (e.g. action buttons).`,table:{type:{summary:`ReactNode`}}}},parameters:{docs:{description:{component:`A dialog overlay component that renders content in a layer above the page. Supports configurable size, close behaviors, optional action footer, and focus trapping for accessibility.`}}},args:b},D={args:b,parameters:{docs:{description:{story:`Standard modal with title, content, and close button.`}}}},O={args:x,parameters:{docs:{description:{story:`Modal with a custom footer that can include action buttons.`}}}},k={args:S,parameters:{docs:{description:{story:`Modal without title or close button. Useful for content that handles its own closing.`}}}},A={args:C,parameters:{docs:{description:{story:`Modal with a custom size (small, medium, large, xlarge).`}}}},j={args:w,parameters:{docs:{description:{story:`Modal with long content that generates vertical scrolling.`}}}},M={args:T,parameters:{docs:{description:{story:`Modal with custom text for the close button.`}}}},N={args:{...b,title:`Interactive Modal`,children:`Use the Storybook panel controls to modify the modal properties.`},parameters:{docs:{description:{story:`Interactive example where you can modify the modal properties using the Storybook panel controls.`}}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: baseArgs,
  parameters: {
    docs: {
      description: {
        story: 'Standard modal with title, content, and close button.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: withFooter,
  parameters: {
    docs: {
      description: {
        story: 'Modal with a custom footer that can include action buttons.'
      }
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: withoutTitle,
  parameters: {
    docs: {
      description: {
        story: 'Modal without title or close button. Useful for content that handles its own closing.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: withCustomSize,
  parameters: {
    docs: {
      description: {
        story: 'Modal with a custom size (small, medium, large, xlarge).'
      }
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: withLongContent,
  parameters: {
    docs: {
      description: {
        story: 'Modal with long content that generates vertical scrolling.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: withCustomCloseText,
  parameters: {
    docs: {
      description: {
        story: 'Modal with custom text for the close button.'
      }
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};var P=[`Default`,`WithFooter`,`WithoutTitle`,`WithCustomSize`,`WithLongContent`,`WithCustomCloseText`,`Interactive`];export{D as Default,N as Interactive,M as WithCustomCloseText,A as WithCustomSize,O as WithFooter,j as WithLongContent,k as WithoutTitle,P as __namedExportsOrder,E as default};