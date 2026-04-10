import{t as e}from"./types-BTwUNDvM.js";import{t}from"./Pagination-Bn5r9Fxk.js";var n={totalPages:10,currentPage:5,size:e.MEDIUM,onPageChange:e=>console.log(`Page changed to: ${e}`)},r={...n,previousLabel:`Previous`,nextLabel:`Next`},i={...n,totalPages:20,maxPageButtons:5},a={...n,disabled:!0},o={...n,currentPage:1},s={...n,currentPage:10},c={...n,size:e.SMALL},l={...n,size:e.LARGE},u={title:`Components/Pagination`,component:t,tags:[`autodocs`],argTypes:{totalPages:{control:{type:`number`,min:1},description:`Total number of pages.`,table:{type:{summary:`number`}}},currentPage:{control:{type:`number`,min:1},description:`Currently active page (1-based).`,table:{type:{summary:`number`}}},onPageChange:{action:`pageChanged`,description:`Callback fired with the new page number when the user navigates.`,table:{type:{summary:`(page: number) => void`}}},maxPageButtons:{control:{type:`number`,min:3,max:10},description:`Maximum number of page buttons visible at once. Defaults to 5.`,table:{type:{summary:`number`},defaultValue:{summary:`5`}}},previousLabel:{control:`text`,description:`Label for the previous-page button.`,table:{type:{summary:`string`},defaultValue:{summary:`←`}}},nextLabel:{control:`text`,description:`Label for the next-page button.`,table:{type:{summary:`string`},defaultValue:{summary:`→`}}},disabled:{control:`boolean`,description:`When true, all pagination controls are non-interactive.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},className:{control:`text`,description:`Additional CSS class names for the pagination root element.`,table:{type:{summary:`string`}}},size:{control:`select`,options:Object.values(e),description:`Size of the pagination buttons.`,table:{type:{summary:Object.values(e).join(` | `)},defaultValue:{summary:e.MEDIUM}}}},parameters:{docs:{description:{component:`A navigation component for paginated data sets. Renders numbered page buttons with previous/next controls, configurable size, and a disabled state.`}}},args:n},d={args:n,parameters:{docs:{description:{story:`Standard pagination with 10 pages and page 5 selected.`}}}},f={args:r,parameters:{docs:{description:{story:`Pagination with custom labels for navigation buttons.`}}}},p={args:i,parameters:{docs:{description:{story:`Pagination with many pages showing ellipsis for navigation.`}}}},m={args:a,parameters:{docs:{description:{story:`Disabled pagination that does not respond to interactions.`}}}},h={args:o,parameters:{docs:{description:{story:`Pagination showing the first page with the previous button disabled.`}}}},g={args:s,parameters:{docs:{description:{story:`Pagination showing the last page.`}}}},_={args:c,parameters:{docs:{description:{story:`Pagination with small size (SMALL).`}}}},v={args:l,parameters:{docs:{description:{story:`Pagination with large size (LARGE).`}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: baseArgs,
  parameters: {
    docs: {
      description: {
        story: 'Standard pagination with 10 pages and page 5 selected.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: withCustomLabels,
  parameters: {
    docs: {
      description: {
        story: 'Pagination with custom labels for navigation buttons.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: withManyPages,
  parameters: {
    docs: {
      description: {
        story: 'Pagination with many pages showing ellipsis for navigation.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: disabledState,
  parameters: {
    docs: {
      description: {
        story: 'Disabled pagination that does not respond to interactions.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: firstPage,
  parameters: {
    docs: {
      description: {
        story: 'Pagination showing the first page with the previous button disabled.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: lastPage,
  parameters: {
    docs: {
      description: {
        story: 'Pagination showing the last page.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: smallSize,
  parameters: {
    docs: {
      description: {
        story: 'Pagination with small size (SMALL).'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: largeSize,
  parameters: {
    docs: {
      description: {
        story: 'Pagination with large size (LARGE).'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};var y=[`Default`,`WithCustomLabels`,`WithManyPages`,`Disabled`,`FirstPage`,`LastPage`,`SmallSize`,`LargeSize`];export{d as Default,m as Disabled,h as FirstPage,v as LargeSize,g as LastPage,_ as SmallSize,f as WithCustomLabels,p as WithManyPages,y as __namedExportsOrder,u as default};