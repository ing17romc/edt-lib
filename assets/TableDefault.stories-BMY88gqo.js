import{n as e}from"./chunk-BneVvdWh.js";import{Ht as t,_t as n,i as r,r as i}from"./iframe-BrtTKpdh.js";import{n as a,r as o,t as s}from"./tables-BY69ZejL.js";var c,l,u=e((()=>{t(),o(),r(),s(),c=n(),l=({dataTable:e})=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(`div`,{className:`container-body`,children:(0,c.jsxs)(`div`,{className:`grid-primary `,children:[(0,c.jsx)(`div`,{className:`start-1 size-12 padding-v-20`,children:(0,c.jsx)(i,{title:`Example tables`,children:`Example tables`})}),(0,c.jsx)(`div`,{className:`start-1  padding-v-20`}),(0,c.jsxs)(`div`,{className:`grid-secondary `,children:[(0,c.jsx)(`div`,{className:`start-1 size-24 padding-v-20`,children:(0,c.jsx)(`h4`,{children:`Table default`})}),(0,c.jsx)(`div`,{className:`start-1 size-24 padding-v-20 `,children:(0,c.jsx)(`div`,{className:`bg-gray padding-h-30 padding-v-30`,children:(0,c.jsx)(`table`,{className:`big-table`,children:(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Name`}),(0,c.jsx)(`th`,{children:`UserName`}),(0,c.jsx)(`th`,{children:`Status`}),(0,c.jsx)(`th`,{children:`Name`}),(0,c.jsx)(`th`,{children:`UserName`}),(0,c.jsx)(`th`,{children:`Status`}),(0,c.jsx)(`th`,{children:`Name`}),(0,c.jsx)(`th`,{children:`UserName`}),(0,c.jsx)(`th`,{children:`Status`}),(0,c.jsx)(`th`,{children:`Name`}),(0,c.jsx)(`th`,{children:`UserName`}),(0,c.jsx)(`th`,{children:`Status`})]}),e.map((e,t)=>(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:e.name}),(0,c.jsx)(`td`,{children:e.userName}),(0,c.jsx)(`td`,{children:a(e.status)}),(0,c.jsx)(`td`,{children:e.name}),(0,c.jsx)(`td`,{children:e.userName}),(0,c.jsx)(`td`,{children:a(e.status)}),(0,c.jsx)(`td`,{children:e.name}),(0,c.jsx)(`td`,{children:e.userName}),(0,c.jsx)(`td`,{children:a(e.status)}),(0,c.jsx)(`td`,{children:e.name}),(0,c.jsx)(`td`,{children:e.userName}),(0,c.jsx)(`td`,{children:a(e.status)})]},t))]})})})})]}),(0,c.jsx)(`div`,{className:`start-1  padding-v-20`})]})})}),l.__docgenInfo={description:`TableDefault\r
\r
Table component that displays a large table with multiple repeated columns.\r
Useful for showing data in expanded table format.\r
\r
@param {TableDefaultProps} props - Component properties, including the array of data to display.\r
@returns {JSX.Element} Expanded table with data repeated per row.`,methods:[],displayName:`TableDefault`,props:{dataTable:{required:!0,tsType:{name:`Array`,elements:[{name:`TableRowData`}],raw:`TableRowData[]`},description:``}}}})),d,f,p,m,h,g,_;e((()=>{u(),d=[{name:`John Doe`,userName:`johndoe`,status:!0},{name:`Jane Smith`,userName:`janesmith`,status:!1},{name:`Robert Johnson`,userName:`rjohnson`,status:!0},{name:`Emily Davis`,userName:`edavis`,status:1},{name:`Michael Wilson`,userName:`mwilson`,status:0}],f={title:`Examples/Tables/TableDefault`,component:l,parameters:{layout:`centered`,docs:{description:{component:`Default table that displays multiple columns with repeated information. Useful for showing large data sets in a wide tabular format.`}}},tags:[`autodocs`]},p={args:{dataTable:d},parameters:{docs:{description:{story:`Default table with multiple columns that repeat the information.`}}}},m={args:{dataTable:[]},parameters:{docs:{description:{story:`Table with no data. Shows only the column headers.`}}}},h={args:{dataTable:[d[0]]},parameters:{docs:{description:{story:`Table with a single row of data.`}}}},g={args:{dataTable:[...d,{name:`Sarah Williams`,userName:`swilliams`,status:!0},{name:`David Brown`,userName:`dbrown`,status:!1}]},parameters:{docs:{description:{story:`Table with multiple rows to test horizontal scrolling.`}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    dataTable: sampleData
  },
  parameters: {
    docs: {
      description: {
        story: 'Default table with multiple columns that repeat the information.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    dataTable: []
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with no data. Shows only the column headers.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    dataTable: [sampleData[0]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with a single row of data.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    dataTable: [...sampleData, {
      name: 'Sarah Williams',
      userName: 'swilliams',
      status: true
    }, {
      name: 'David Brown',
      userName: 'dbrown',
      status: false
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with multiple rows to test horizontal scrolling.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`EmptyState`,`SingleItem`,`ManyItems`]}))();export{p as Default,m as EmptyState,g as ManyItems,h as SingleItem,_ as __namedExportsOrder,f as default};