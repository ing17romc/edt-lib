import{n as e}from"./chunk-BneVvdWh.js";import{Ht as t,J as n,_t as r,bt as i,i as a,q as o,r as s,vt as c}from"./iframe-BrtTKpdh.js";import{n as l,r as u,t as d}from"./tables-BY69ZejL.js";var f,p,m=e((()=>{t(),u(),a(),n(),d(),i(),f=r(),p=({dataTable:e})=>(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(`div`,{className:`container-body`,children:(0,f.jsxs)(`div`,{className:`grid-primary `,children:[(0,f.jsx)(`div`,{className:`start-1 size-12 padding-v-20`,children:(0,f.jsx)(s,{title:`Example tables`,children:`Example tables`})}),(0,f.jsx)(`div`,{className:`start-1  padding-v-20`}),(0,f.jsxs)(`div`,{className:`grid-secondary  `,children:[(0,f.jsx)(`div`,{className:`start-1 size-24 padding-v-20`,children:(0,f.jsx)(`h4`,{children:`Table with icon `})}),(0,f.jsx)(`div`,{className:`start-1 size-24 padding-v-20 `,children:(0,f.jsx)(`div`,{className:`bg-gray padding-h-30 padding-v-30`,children:(0,f.jsx)(`table`,{children:(0,f.jsxs)(`tbody`,{children:[(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{children:`Name`}),(0,f.jsx)(`th`,{children:`UserName`}),(0,f.jsx)(`th`,{children:`Status`}),(0,f.jsx)(`th`,{}),(0,f.jsx)(`th`,{})]}),e.map((e,t)=>(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:e.name}),(0,f.jsx)(`td`,{children:e.userName}),(0,f.jsx)(`td`,{children:l(e.status)}),(0,f.jsx)(`td`,{children:(0,f.jsx)(o,{icon:`edit`,id:`edit_${t}`,"data-testid":`edit_${t}`,size:c.MEDIUM,"aria-label":`Edit`,onClick:()=>alert(`clic!!!`)})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(o,{icon:`delete`,id:`delete_${t}`,"data-testid":`delete_${t}`,size:c.MEDIUM,"aria-label":`Delete`,onClick:()=>alert(`clic!!!`)})})]},t))]})})})})]}),(0,f.jsx)(`div`,{className:`start-1  padding-v-20`})]})})}),p.__docgenInfo={description:`TableWithIcon\r
\r
Table component that displays data and adds icon buttons for actions on each row.\r
Allows viewing a table with edit and delete buttons on each record.\r
\r
@param {TableWithIconProps} props - Component properties, including the array of data to display.\r
@returns {JSX.Element} Table with action buttons per row.`,methods:[],displayName:`TableWithIcon`,props:{dataTable:{required:!0,tsType:{name:`Array`,elements:[{name:`TableRowData`}],raw:`TableRowData[]`},description:``}}}})),h,g,_,v,y,b,x;e((()=>{m(),h=[{name:`John Doe`,userName:`johndoe`,status:!0},{name:`Jane Smith`,userName:`janesmith`,status:!1},{name:`Robert Johnson`,userName:`rjohnson`,status:!0},{name:`Emily Davis`,userName:`edavis`,status:1},{name:`Michael Wilson`,userName:`mwilson`,status:0}],g={title:`Examples/Tables/TableWithIcon`,component:p,parameters:{layout:`centered`,docs:{description:{component:`Table that includes icon buttons for actions in each row. Ideal for interfaces that require quick and compact actions on individual records.`}}},tags:[`autodocs`]},_={args:{dataTable:h},parameters:{docs:{description:{story:`Table with icon buttons in each row. Buttons are configured with sample console actions.`}}}},v={args:{dataTable:[]},parameters:{docs:{description:{story:`Table with no data. Shows only the column headers.`}}}},y={args:{dataTable:[h[0]]},parameters:{docs:{description:{story:`Table with a single row of data and its respective icon buttons.`}}}},b={args:{dataTable:[...h,{name:`Sarah Williams`,userName:`swilliams`,status:!0},{name:`David Brown`,userName:`dbrown`,status:!1}]},parameters:{docs:{description:{story:`Table with multiple rows to test vertical scrolling with icon buttons in each row.`}}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    dataTable: sampleData
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with icon buttons in each row. Buttons are configured with sample console actions.'
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
        story: 'Table with no data. Shows only the column headers.'
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
        story: 'Table with a single row of data and its respective icon buttons.'
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
        story: 'Table with multiple rows to test vertical scrolling with icon buttons in each row.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`EmptyState`,`SingleItem`,`ManyItems`]}))();export{_ as Default,v as EmptyState,b as ManyItems,y as SingleItem,x as __namedExportsOrder,g as default};