import{t as e}from"./iframe-YpqvHZo3.js";import{t}from"./jsx-runtime-ChNUh70B.js";import{t as n}from"./tables-nHL3RAQ-.js";import{t as r}from"./Title-iMma4Azi.js";import{t as i}from"./types-BTwUNDvM.js";import{t as a}from"./IconButton-BVLlvVmv.js";e();var o=t(),s=({dataTable:e})=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(`div`,{className:`container-body`,children:(0,o.jsxs)(`div`,{className:`grid-primary `,children:[(0,o.jsx)(`div`,{className:`start-1 size-12 padding-v-20`,children:(0,o.jsx)(r,{title:`Example tables`,children:`Example tables`})}),(0,o.jsx)(`div`,{className:`start-1  padding-v-20`}),(0,o.jsxs)(`div`,{className:`grid-secondary  `,children:[(0,o.jsx)(`div`,{className:`start-1 size-24 padding-v-20`,children:(0,o.jsx)(`h4`,{children:`Table with icon `})}),(0,o.jsx)(`div`,{className:`start-1 size-24 padding-v-20 `,children:(0,o.jsx)(`div`,{className:`bg-gray padding-h-30 padding-v-30`,children:(0,o.jsx)(`table`,{children:(0,o.jsxs)(`tbody`,{children:[(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`th`,{children:`Name`}),(0,o.jsx)(`th`,{children:`UserName`}),(0,o.jsx)(`th`,{children:`Status`}),(0,o.jsx)(`th`,{}),(0,o.jsx)(`th`,{})]}),e.map((e,t)=>(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`td`,{children:e.name}),(0,o.jsx)(`td`,{children:e.userName}),(0,o.jsx)(`td`,{children:n(e.status)}),(0,o.jsx)(`td`,{children:(0,o.jsx)(a,{icon:`edit`,id:`edit_${t}`,"data-testid":`edit_${t}`,size:i.MEDIUM,"aria-label":`Editar`,onClick:()=>alert(`clic!!!`)})}),(0,o.jsx)(`td`,{children:(0,o.jsx)(a,{icon:`delete`,id:`delete_${t}`,"data-testid":`delete_${t}`,size:i.MEDIUM,"aria-label":`Eliminar`,onClick:()=>alert(`clic!!!`)})})]},t))]})})})})]}),(0,o.jsx)(`div`,{className:`start-1  padding-v-20`})]})})});s.__docgenInfo={description:`TableWithIcon\r
\r
Componente de tabla que muestra datos y agrega botones con iconos para acciones sobre cada fila.\r
Permite visualizar una tabla con botones de edición y eliminación en cada registro.\r
\r
@param {TableWithIconProps} props - Propiedades del componente, incluyendo el arreglo de datos a mostrar.\r
@returns {JSX.Element} Tabla con botones de acción por fila.`,methods:[],displayName:`TableWithIcon`,props:{dataTable:{required:!0,tsType:{name:`Array`,elements:[{name:`TableRowData`}],raw:`TableRowData[]`},description:``}}};var c=[{name:`John Doe`,userName:`johndoe`,status:!0},{name:`Jane Smith`,userName:`janesmith`,status:!1},{name:`Robert Johnson`,userName:`rjohnson`,status:!0},{name:`Emily Davis`,userName:`edavis`,status:1},{name:`Michael Wilson`,userName:`mwilson`,status:0}],l={title:`Examples/Tables/TableWithIcon`,component:s,parameters:{layout:`centered`,docs:{description:{component:`Tabla que incluye botones con iconos para acciones en cada fila. Ideal para interfaces que requieren acciones rápidas y compactas sobre registros individuales.`}}},tags:[`autodocs`]},u={args:{dataTable:c},parameters:{docs:{description:{story:`Tabla con botones de iconos en cada fila. Los botones están configurados con acciones de consola de ejemplo.`}}}},d={args:{dataTable:[]},parameters:{docs:{description:{story:`Tabla sin datos. Muestra solo los encabezados de las columnas.`}}}},f={args:{dataTable:[c[0]]},parameters:{docs:{description:{story:`Tabla con una sola fila de datos y sus respectivos botones de iconos.`}}}},p={args:{dataTable:[...c,{name:`Sarah Williams`,userName:`swilliams`,status:!0},{name:`David Brown`,userName:`dbrown`,status:!1}]},parameters:{docs:{description:{story:`Tabla con múltiples filas para probar el desplazamiento vertical con botones de iconos en cada fila.`}}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    dataTable: sampleData
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla con botones de iconos en cada fila. Los botones están configurados con acciones de consola de ejemplo.'
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
        story: 'Tabla sin datos. Muestra solo los encabezados de las columnas.'
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
        story: 'Tabla con una sola fila de datos y sus respectivos botones de iconos.'
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
        story: 'Tabla con múltiples filas para probar el desplazamiento vertical con botones de iconos en cada fila.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};var m=[`Default`,`EmptyState`,`SingleItem`,`ManyItems`];export{u as Default,d as EmptyState,p as ManyItems,f as SingleItem,m as __namedExportsOrder,l as default};