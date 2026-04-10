import{r as e,t}from"./iframe-BwpCWMiM.js";import{t as n}from"./jsx-runtime-BsbbwSUz.js";import{t as r}from"./tables-oR8DUGra.js";import{t as i}from"./Title-7zuFgg1e.js";import{t as a}from"./Pagination-Bn5r9Fxk.js";import{t as o}from"./Selector-B_Q_uzT6.js";var s=e(t(),1),c=n(),l=({dataTable:e})=>{let[t,n]=(0,s.useState)({page:1,pages:3}),l=e=>{n(t=>({...t,pages:parseInt(e.target.value,10)}))},u=(e,t,n)=>!Array.isArray(e)||!Array.isArray(t)||!n?[]:t.length?(e.push(t.slice(0,n)),u(e,t.slice(n,t.length),n)):e,d=u([],e,t.pages),f=d.length<t.page?0:t.page-1;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(`div`,{className:`container-body`,children:(0,c.jsxs)(`div`,{className:`grid-primary `,children:[(0,c.jsx)(`div`,{className:`start-1 size-12 padding-v-20`,children:(0,c.jsx)(i,{title:`Example tables`,children:`Example tables`})}),(0,c.jsx)(`div`,{className:`start-1  padding-v-20`}),(0,c.jsxs)(`div`,{className:`grid-secondary `,children:[(0,c.jsx)(`div`,{className:`start-1 size-16 padding-v-20 center-vertical`,children:(0,c.jsx)(`h4`,{children:`Table with pagination`})}),(0,c.jsx)(`div`,{className:` size-8 padding-v-20`,children:(0,c.jsx)(o,{id:`pages`,value:t.pages.toString(),onChange:l,options:[{label:`1`,value:`1`},{label:`2`,value:`2`},{label:`3`,value:`3`}],label:`Number item by page`,placeholder:`Select items per page`})}),(0,c.jsx)(`div`,{className:`start-1 size-24 padding-v-20 `,children:(0,c.jsx)(`div`,{className:`bg-gray padding-h-30 padding-v-30`,children:(0,c.jsx)(`table`,{children:(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Name`}),(0,c.jsx)(`th`,{children:`UserName`}),(0,c.jsx)(`th`,{children:`Status`})]}),d.length&&d[f]?.map((e,t)=>(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:e.name}),(0,c.jsx)(`td`,{children:e.userName}),(0,c.jsx)(`td`,{children:r(e.status)})]},t))||(0,c.jsx)(`tr`,{children:(0,c.jsx)(`td`,{colSpan:3,className:`text-center`,children:`No data available`})})]})})})}),(0,c.jsx)(`div`,{className:`start-1 size-24 padding-v-20 center`,children:(0,c.jsx)(a,{totalPages:d.length,currentPage:t.page,onPageChange:e=>n(t=>({...t,page:e}))})})]}),(0,c.jsx)(`div`,{className:`start-1  padding-v-20`})]})})})};l.__docgenInfo={description:`TableWithPagination\r
\r
Table component that displays paginated data and allows selecting the number of items per page.\r
Includes controls to change pages and adjust the number of visible rows.\r
\r
@param {TableWithPaginationProps} props - Component properties, including the array of data to display.\r
@returns {JSX.Element} Interactive table with pagination and rows per page selector.`,methods:[],displayName:`TableWithPagination`,props:{dataTable:{required:!0,tsType:{name:`Array`,elements:[{name:`TableRowData`}],raw:`TableRowData[]`},description:``}}};var u=e=>{let t=[`John`,`Jane`,`Robert`,`Emily`,`Michael`,`Sarah`,`David`,`Emma`,`James`,`Olivia`],n=[`Doe`,`Smith`,`Johnson`,`Williams`,`Brown`,`Jones`,`Garcia`,`Miller`,`Davis`,`Rodriguez`];return Array.from({length:e},(e,r)=>({name:`${t[r%t.length]} ${n[r%n.length]}`,userName:`${(t[r%t.length]+n[r%n.length]).toLowerCase()}`,status:r%3==0?!0:r%3==1?!1:1}))},d=u(5),f=u(15),p=u(50),m={title:`Examples/Tables/TableWithPagination`,component:l,parameters:{layout:`centered`,docs:{description:{component:`Table with pagination that allows navigating between pages of data and adjusting the number of rows shown per page. Ideal for large data sets that need to be divided into manageable pages.`}}},tags:[`autodocs`]},h={args:{dataTable:f},parameters:{docs:{description:{story:`Table with pagination showing 15 items by default, distributed across multiple pages as needed.`}}}},g={args:{dataTable:d},parameters:{docs:{description:{story:`Table with a small data set (less than one page).`}}}},_={args:{dataTable:p},parameters:{docs:{description:{story:`Table with a large data set (multiple pages) to test full pagination.`}}}},v={args:{dataTable:[]},parameters:{docs:{description:{story:`Table with no data. Shows a message indicating that no data is available.`}}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    dataTable: mediumDataset
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with pagination showing 15 items by default, distributed across multiple pages as needed.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    dataTable: smallDataset
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with a small data set (less than one page).'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    dataTable: largeDataset
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with a large data set (multiple pages) to test full pagination.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    dataTable: []
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with no data. Shows a message indicating that no data is available.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};var y=[`Default`,`SmallDataset`,`LargeDataset`,`EmptyState`];export{h as Default,v as EmptyState,_ as LargeDataset,g as SmallDataset,y as __namedExportsOrder,m as default};