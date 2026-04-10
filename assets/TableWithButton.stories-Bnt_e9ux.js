import{t as e}from"./iframe-BwpCWMiM.js";import{t}from"./jsx-runtime-BsbbwSUz.js";import{t as n}from"./tables-oR8DUGra.js";import{t as r}from"./Title-7zuFgg1e.js";import{t as i}from"./Button-DLBCQ6JX.js";import{t as a}from"./types-BTwUNDvM.js";e();var o=t(),s=({dataTable:e})=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(`div`,{className:`container-body`,children:(0,o.jsxs)(`div`,{className:`grid-primary `,children:[(0,o.jsx)(`div`,{className:`start-1 size-12 padding-v-20`,children:(0,o.jsx)(r,{title:`Example tables`,children:`Example tables`})}),(0,o.jsx)(`div`,{className:`start-1  padding-v-20`}),(0,o.jsxs)(`div`,{className:`grid-secondary  `,children:[(0,o.jsx)(`div`,{className:`start-1 size-24 padding-v-20`,children:(0,o.jsx)(`h4`,{children:`Table with button `})}),(0,o.jsx)(`div`,{className:`start-1 size-24 padding-v-20 `,children:(0,o.jsx)(`div`,{className:`bg-gray padding-h-30 padding-v-30`,children:(0,o.jsx)(`table`,{children:(0,o.jsxs)(`tbody`,{children:[(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`th`,{children:`Name`}),(0,o.jsx)(`th`,{children:`UserName`}),(0,o.jsx)(`th`,{children:`Status`}),(0,o.jsx)(`th`,{}),(0,o.jsx)(`th`,{})]}),e.map((e,t)=>(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`td`,{children:e.name}),(0,o.jsx)(`td`,{children:e.userName}),(0,o.jsx)(`td`,{children:n(e.status)}),(0,o.jsx)(`td`,{children:(0,o.jsx)(i,{type:`button`,size:a.MEDIUM,onClick:()=>alert(`clic!!!`),children:`Update`})}),(0,o.jsx)(`td`,{children:(0,o.jsx)(i,{type:`button`,size:a.MEDIUM,onClick:()=>alert(`clic!!!`),children:`Delete`})})]},t))]})})})})]}),(0,o.jsx)(`div`,{className:`start-1  padding-v-20`})]})})});s.__docgenInfo={description:`TableWithButton\r
\r
Table component that displays data and adds action buttons (update and delete) for each row.\r
Allows viewing a table with update and delete buttons on each record.\r
\r
@param {TableWithButtonProps} props - Component properties, including the array of data to display.\r
@returns {JSX.Element} Table with action buttons per row.`,methods:[],displayName:`TableWithButton`,props:{dataTable:{required:!0,tsType:{name:`Array`,elements:[{name:`TableRowData`}],raw:`TableRowData[]`},description:``}}};var c=[{name:`John Doe`,userName:`johndoe`,status:!0},{name:`Jane Smith`,userName:`janesmith`,status:!1},{name:`Robert Johnson`,userName:`rjohnson`,status:!0},{name:`Emily Davis`,userName:`edavis`,status:1},{name:`Michael Wilson`,userName:`mwilson`,status:0}],l={title:`Examples/Tables/TableWithButton`,component:s,parameters:{layout:`centered`,docs:{description:{component:`Table that includes action buttons (update and delete) in each row. Ideal for interfaces that require quick actions on individual records.`}}},tags:[`autodocs`]},u={args:{dataTable:c},parameters:{docs:{description:{story:`Table with action buttons in each row. Buttons are configured with sample console actions.`}}}},d={args:{dataTable:[]},parameters:{docs:{description:{story:`Table with no data. Shows only the column headers and button headers.`}}}},f={args:{dataTable:[c[0]]},parameters:{docs:{description:{story:`Table with a single row of data and its respective action buttons.`}}}},p={args:{dataTable:[...c,{name:`Sarah Williams`,userName:`swilliams`,status:!0},{name:`David Brown`,userName:`dbrown`,status:!1}]},parameters:{docs:{description:{story:`Table with multiple rows to test vertical scrolling with action buttons in each row.`}}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    dataTable: sampleData
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with action buttons in each row. Buttons are configured with sample console actions.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    dataTable: []
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with no data. Shows only the column headers and button headers.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    dataTable: [sampleData[0]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with a single row of data and its respective action buttons.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
        story: 'Table with multiple rows to test vertical scrolling with action buttons in each row.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};var m=[`Default`,`EmptyState`,`SingleItem`,`ManyItems`];export{u as Default,d as EmptyState,p as ManyItems,f as SingleItem,m as __namedExportsOrder,l as default};