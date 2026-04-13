import{n as e}from"./chunk-BneVvdWh.js";import{S as t}from"./iframe-DoW-sQG_.js";import{t as n}from"./jsx-runtime-Bn1Ys6_W.js";import{n as r,r as i,t as a}from"./tables-CSumw1c7.js";import{n as o,t as s}from"./Title-Y4Xy4swX.js";import{n as c,t as l}from"./Button-BdT6eq5R.js";import{r as u,t as d}from"./types-Duki_pzD.js";var f,p,m=e((()=>{t(),i(),o(),c(),u(),a(),f=n(),p=({dataTable:e})=>(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(`div`,{className:`container-body`,children:(0,f.jsxs)(`div`,{className:`grid-primary `,children:[(0,f.jsx)(`div`,{className:`start-1 size-12 padding-v-20`,children:(0,f.jsx)(s,{title:`Example tables`,children:`Example tables`})}),(0,f.jsx)(`div`,{className:`start-1  padding-v-20`}),(0,f.jsxs)(`div`,{className:`grid-secondary  `,children:[(0,f.jsx)(`div`,{className:`start-1 size-24 padding-v-20`,children:(0,f.jsx)(`h4`,{children:`Table with button `})}),(0,f.jsx)(`div`,{className:`start-1 size-24 padding-v-20 `,children:(0,f.jsx)(`div`,{className:`bg-gray padding-h-30 padding-v-30`,children:(0,f.jsx)(`table`,{children:(0,f.jsxs)(`tbody`,{children:[(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{children:`Name`}),(0,f.jsx)(`th`,{children:`UserName`}),(0,f.jsx)(`th`,{children:`Status`}),(0,f.jsx)(`th`,{}),(0,f.jsx)(`th`,{})]}),e.map((e,t)=>(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:e.name}),(0,f.jsx)(`td`,{children:e.userName}),(0,f.jsx)(`td`,{children:r(e.status)}),(0,f.jsx)(`td`,{children:(0,f.jsx)(l,{type:`button`,size:d.MEDIUM,onClick:()=>alert(`clic!!!`),children:`Update`})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(l,{type:`button`,size:d.MEDIUM,onClick:()=>alert(`clic!!!`),children:`Delete`})})]},t))]})})})})]}),(0,f.jsx)(`div`,{className:`start-1  padding-v-20`})]})})}),p.__docgenInfo={description:`TableWithButton\r
\r
Table component that displays data and adds action buttons (update and delete) for each row.\r
Allows viewing a table with update and delete buttons on each record.\r
\r
@param {TableWithButtonProps} props - Component properties, including the array of data to display.\r
@returns {JSX.Element} Table with action buttons per row.`,methods:[],displayName:`TableWithButton`,props:{dataTable:{required:!0,tsType:{name:`Array`,elements:[{name:`TableRowData`}],raw:`TableRowData[]`},description:``}}}})),h,g,_,v,y,b,x;e((()=>{m(),h=[{name:`John Doe`,userName:`johndoe`,status:!0},{name:`Jane Smith`,userName:`janesmith`,status:!1},{name:`Robert Johnson`,userName:`rjohnson`,status:!0},{name:`Emily Davis`,userName:`edavis`,status:1},{name:`Michael Wilson`,userName:`mwilson`,status:0}],g={title:`Examples/Tables/TableWithButton`,component:p,parameters:{layout:`centered`,docs:{description:{component:`Table that includes action buttons (update and delete) in each row. Ideal for interfaces that require quick actions on individual records.`}}},tags:[`autodocs`]},_={args:{dataTable:h},parameters:{docs:{description:{story:`Table with action buttons in each row. Buttons are configured with sample console actions.`}}}},v={args:{dataTable:[]},parameters:{docs:{description:{story:`Table with no data. Shows only the column headers and button headers.`}}}},y={args:{dataTable:[h[0]]},parameters:{docs:{description:{story:`Table with a single row of data and its respective action buttons.`}}}},b={args:{dataTable:[...h,{name:`Sarah Williams`,userName:`swilliams`,status:!0},{name:`David Brown`,userName:`dbrown`,status:!1}]},parameters:{docs:{description:{story:`Table with multiple rows to test vertical scrolling with action buttons in each row.`}}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Default`,`EmptyState`,`SingleItem`,`ManyItems`]}))();export{_ as Default,v as EmptyState,b as ManyItems,y as SingleItem,x as __namedExportsOrder,g as default};