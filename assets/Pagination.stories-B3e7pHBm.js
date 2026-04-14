import{n as e}from"./chunk-BneVvdWh.js";import{r as t,t as n}from"./types-SSqGpC_M.js";import{n as r,t as i}from"./Pagination-CNTuwsdU.js";var a,o,s,c,l,u,d,f,p=e((()=>{t(),a={totalPages:10,currentPage:5,size:n.MEDIUM,onPageChange:e=>console.log(`Page changed to: ${e}`)},o={...a,previousLabel:`Previous`,nextLabel:`Next`},s={...a,totalPages:20,maxPageButtons:5},c={...a,disabled:!0},l={...a,currentPage:1},u={...a,currentPage:10},d={...a,size:n.SMALL},f={...a,size:n.LARGE}})),m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{r(),t(),p(),{within:m,expect:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Pagination`,component:i,tags:[`autodocs`],argTypes:{totalPages:{control:{type:`number`,min:1},description:`Total number of pages.`,table:{type:{summary:`number`}}},currentPage:{control:{type:`number`,min:1},description:`Currently active page (1-based).`,table:{type:{summary:`number`}}},onPageChange:{action:`pageChanged`,description:`Callback fired with the new page number when the user navigates.`,table:{type:{summary:`(page: number) => void`}}},maxPageButtons:{control:{type:`number`,min:3,max:10},description:`Maximum number of page buttons visible at once. Defaults to 5.`,table:{type:{summary:`number`},defaultValue:{summary:`5`}}},previousLabel:{control:`text`,description:`Label for the previous-page button.`,table:{type:{summary:`string`},defaultValue:{summary:`←`}}},nextLabel:{control:`text`,description:`Label for the next-page button.`,table:{type:{summary:`string`},defaultValue:{summary:`→`}}},disabled:{control:`boolean`,description:`When true, all pagination controls are non-interactive.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},className:{control:`text`,description:`Additional CSS class names for the pagination root element.`,table:{type:{summary:`string`}}},size:{control:`select`,options:Object.values(n),description:`Size of the pagination buttons.`,table:{type:{summary:Object.values(n).join(` | `)},defaultValue:{summary:n.MEDIUM}}}},parameters:{docs:{description:{component:`A navigation component for paginated data sets. Renders numbered page buttons with previous/next controls, configurable size, and a disabled state.`}}},args:a},_={args:a,play:async({canvasElement:e})=>{let t=m(e);await h(t.getByText(`Previous`)).toBeInTheDocument(),await h(t.getByText(`Next`)).toBeInTheDocument(),await h(t.getByText(`5`)).toBeInTheDocument()},parameters:{docs:{description:{story:`Standard pagination with 10 pages and page 5 selected.`}}}},v={args:o,play:async({canvasElement:e})=>{let t=m(e);await h(t.getByText(`Previous`)).toBeInTheDocument(),await h(t.getByText(`Next`)).toBeInTheDocument()},parameters:{docs:{description:{story:`Pagination with custom labels for navigation buttons.`}}}},y={args:s,play:async({canvasElement:e})=>{await h(m(e).getAllByText(`...`).length).toBeGreaterThan(0)},parameters:{docs:{description:{story:`Pagination with many pages showing ellipsis for navigation.`}}}},b={args:c,play:async({canvasElement:e})=>{let t=m(e).getAllByRole(`button`);for(let e of t)await h(e).toBeDisabled()},parameters:{docs:{description:{story:`Disabled pagination that does not respond to interactions.`}}}},x={args:l,parameters:{docs:{description:{story:`Pagination showing the first page with the previous button disabled.`}}}},S={args:u,parameters:{docs:{description:{story:`Pagination showing the last page.`}}}},C={args:d,play:async({canvasElement:e})=>{await h(m(e).getAllByRole(`button`).length).toBeGreaterThan(0)},parameters:{docs:{description:{story:`Pagination with small size (SMALL).`}}}},w={args:f,play:async({canvasElement:e})=>{await h(m(e).getAllByRole(`button`).length).toBeGreaterThan(0)},parameters:{docs:{description:{story:`Pagination with large size (LARGE).`}}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: baseArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Previous')).toBeInTheDocument();
    await expect(canvas.getByText('Next')).toBeInTheDocument();
    await expect(canvas.getByText('5')).toBeInTheDocument();
  },
  parameters: {
    docs: {
      description: {
        story: 'Standard pagination with 10 pages and page 5 selected.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: withCustomLabels,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Previous')).toBeInTheDocument();
    await expect(canvas.getByText('Next')).toBeInTheDocument();
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with custom labels for navigation buttons.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: withManyPages,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const ellipsis = canvas.getAllByText('...');
    await expect(ellipsis.length).toBeGreaterThan(0);
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with many pages showing ellipsis for navigation.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: disabledState,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');
    for (const button of buttons) {
      await expect(button).toBeDisabled();
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled pagination that does not respond to interactions.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: firstPage,
  parameters: {
    docs: {
      description: {
        story: 'Pagination showing the first page with the previous button disabled.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: lastPage,
  parameters: {
    docs: {
      description: {
        story: 'Pagination showing the last page.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: smallSize,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole('button').length).toBeGreaterThan(0);
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with small size (SMALL).'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: largeSize,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole('button').length).toBeGreaterThan(0);
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with large size (LARGE).'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`WithCustomLabels`,`WithManyPages`,`Disabled`,`FirstPage`,`LastPage`,`SmallSize`,`LargeSize`]}))();export{_ as Default,b as Disabled,x as FirstPage,w as LargeSize,S as LastPage,C as SmallSize,v as WithCustomLabels,y as WithManyPages,T as __namedExportsOrder,g as default};