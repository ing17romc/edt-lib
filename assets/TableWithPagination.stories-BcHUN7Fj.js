import{a as e,n as t}from"./chunk-BneVvdWh.js";import{A as n,F as r,Ht as i,I as a,_t as o,i as s,j as c,r as l}from"./iframe-BrtTKpdh.js";import{n as u,r as d,t as f}from"./tables-BY69ZejL.js";var p,m,h,g=t((()=>{p=e(i(),1),d(),s(),a(),c(),f(),m=o(),h=({dataTable:e})=>{let[t,i]=(0,p.useState)({page:1,pages:3}),a=e=>{i(t=>({...t,pages:parseInt(e.target.value,10)}))},o=(e,t,n)=>!Array.isArray(e)||!Array.isArray(t)||!n?[]:t.length?(e.push(t.slice(0,n)),o(e,t.slice(n,t.length),n)):e,s=o([],e,t.pages),c=s.length<t.page?0:t.page-1;return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(`div`,{className:`container-body`,children:(0,m.jsxs)(`div`,{className:`grid-primary `,children:[(0,m.jsx)(`div`,{className:`start-1 size-12 padding-v-20`,children:(0,m.jsx)(l,{title:`Example tables`,children:`Example tables`})}),(0,m.jsx)(`div`,{className:`start-1  padding-v-20`}),(0,m.jsxs)(`div`,{className:`grid-secondary `,children:[(0,m.jsx)(`div`,{className:`start-1 size-16 padding-v-20 center-vertical`,children:(0,m.jsx)(`h4`,{children:`Table with pagination`})}),(0,m.jsx)(`div`,{className:` size-8 padding-v-20`,children:(0,m.jsx)(n,{id:`pages`,value:t.pages.toString(),onChange:a,options:[{label:`1`,value:`1`},{label:`2`,value:`2`},{label:`3`,value:`3`}],label:`Number item by page`,placeholder:`Select items per page`})}),(0,m.jsx)(`div`,{className:`start-1 size-24 padding-v-20 `,children:(0,m.jsx)(`div`,{className:`bg-gray padding-h-30 padding-v-30`,children:(0,m.jsx)(`table`,{children:(0,m.jsxs)(`tbody`,{children:[(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`th`,{children:`Name`}),(0,m.jsx)(`th`,{children:`UserName`}),(0,m.jsx)(`th`,{children:`Status`})]}),s.length&&s[c]?.map((e,t)=>(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:e.name}),(0,m.jsx)(`td`,{children:e.userName}),(0,m.jsx)(`td`,{children:u(e.status)})]},t))||(0,m.jsx)(`tr`,{children:(0,m.jsx)(`td`,{colSpan:3,className:`text-center`,children:`No data available`})})]})})})}),(0,m.jsx)(`div`,{className:`start-1 size-24 padding-v-20 center`,children:(0,m.jsx)(r,{totalPages:s.length,currentPage:t.page,onPageChange:e=>i(t=>({...t,page:e}))})})]}),(0,m.jsx)(`div`,{className:`start-1  padding-v-20`})]})})})},h.__docgenInfo={description:`TableWithPagination\r
\r
Table component that displays paginated data and allows selecting the number of items per page.\r
Includes controls to change pages and adjust the number of visible rows.\r
\r
@param {TableWithPaginationProps} props - Component properties, including the array of data to display.\r
@returns {JSX.Element} Interactive table with pagination and rows per page selector.`,methods:[],displayName:`TableWithPagination`,props:{dataTable:{required:!0,tsType:{name:`Array`,elements:[{name:`TableRowData`}],raw:`TableRowData[]`},description:``}}}})),_,v,y,b,x,S,C,w,T,E;t((()=>{g(),_=e=>{let t=[`John`,`Jane`,`Robert`,`Emily`,`Michael`,`Sarah`,`David`,`Emma`,`James`,`Olivia`],n=[`Doe`,`Smith`,`Johnson`,`Williams`,`Brown`,`Jones`,`Garcia`,`Miller`,`Davis`,`Rodriguez`];return Array.from({length:e},(e,r)=>({name:`${t[r%t.length]} ${n[r%n.length]}`,userName:`${(t[r%t.length]+n[r%n.length]).toLowerCase()}`,status:r%3==0?!0:r%3==1?!1:1}))},v=_(5),y=_(15),b=_(50),x={title:`Examples/Tables/TableWithPagination`,component:h,parameters:{layout:`centered`,docs:{description:{component:`Table with pagination that allows navigating between pages of data and adjusting the number of rows shown per page. Ideal for large data sets that need to be divided into manageable pages.`}}},tags:[`autodocs`]},S={args:{dataTable:y},parameters:{docs:{description:{story:`Table with pagination showing 15 items by default, distributed across multiple pages as needed.`}}}},C={args:{dataTable:v},parameters:{docs:{description:{story:`Table with a small data set (less than one page).`}}}},w={args:{dataTable:b},parameters:{docs:{description:{story:`Table with a large data set (multiple pages) to test full pagination.`}}}},T={args:{dataTable:[]},parameters:{docs:{description:{story:`Table with no data. Shows a message indicating that no data is available.`}}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`Default`,`SmallDataset`,`LargeDataset`,`EmptyState`]}))();export{S as Default,T as EmptyState,w as LargeDataset,C as SmallDataset,E as __namedExportsOrder,x as default};