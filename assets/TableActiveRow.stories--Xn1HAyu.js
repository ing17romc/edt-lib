import{t as e}from"./iframe-YpqvHZo3.js";import{t}from"./jsx-runtime-ChNUh70B.js";import{t as n}from"./tables-nHL3RAQ-.js";import{t as r}from"./Title-iMma4Azi.js";e();var i=t(),a=({dataTable:e})=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(`div`,{className:`container-body`,children:(0,i.jsxs)(`div`,{className:`grid-primary `,children:[(0,i.jsx)(`div`,{className:`start-1 size-12 padding-v-20`,children:(0,i.jsx)(r,{title:`Example tables`,children:`Example tables`})}),(0,i.jsx)(`div`,{className:`start-1  padding-v-20`}),(0,i.jsxs)(`div`,{className:`grid-secondary  `,children:[(0,i.jsx)(`div`,{className:`start-1 size-24 padding-v-20`,children:(0,i.jsx)(`h4`,{children:`Table active row `})}),(0,i.jsx)(`div`,{className:`start-1 size-24 padding-v-20 `,children:(0,i.jsx)(`div`,{className:`bg-gray padding-h-30 padding-v-30`,children:(0,i.jsx)(`table`,{children:(0,i.jsxs)(`tbody`,{children:[(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`th`,{style:{width:`40%`},children:`Name`}),(0,i.jsx)(`th`,{style:{width:`40%`},children:`UserName`}),(0,i.jsx)(`th`,{style:{width:`20%`},children:`Status`})]}),e.map((e,t)=>(0,i.jsxs)(`tr`,{className:`active`,onClick:()=>alert(`clic!!!`),children:[(0,i.jsx)(`td`,{children:e.name}),(0,i.jsx)(`td`,{children:e.userName}),(0,i.jsx)(`td`,{children:n(e.status)})]},t))]})})})})]}),(0,i.jsx)(`div`,{className:`start-1  padding-v-20`})]})})});a.__docgenInfo={description:`TableActiveRow\r
\r
Componente de tabla que permite seleccionar filas activas y muestra datos con estilos diferenciados.\r
Útil para resaltar o interactuar con filas específicas de la tabla.\r
\r
@param {TableActiveRowProps} props - Propiedades del componente, incluyendo el arreglo de datos a mostrar.\r
@returns {JSX.Element} Tabla con filas activas e interacción básica.`,methods:[],displayName:`TableActiveRow`,props:{dataTable:{required:!0,tsType:{name:`Array`,elements:[{name:`TableRowData`}],raw:`TableRowData[]`},description:``}}};var o=[{name:`John Doe`,userName:`johndoe`,status:!0},{name:`Jane Smith`,userName:`janesmith`,status:!1},{name:`Robert Johnson`,userName:`rjohnson`,status:!0},{name:`Emily Davis`,userName:`edavis`,status:1},{name:`Michael Wilson`,userName:`mwilson`,status:0}],s={title:`Examples/Tables/TableActiveRow`,component:a,parameters:{layout:`centered`,docs:{description:{component:`Tabla con filas seleccionables que resaltan al hacer clic. Útil para mostrar datos tabulares donde se necesita interacción con filas específicas.`}}},tags:[`autodocs`]},c={args:{dataTable:o},parameters:{docs:{description:{story:`Tabla con filas seleccionables. Haz clic en cualquier fila para ver el resaltado.`}}}},l={args:{dataTable:[]},parameters:{docs:{description:{story:`Tabla sin datos. Muestra una tabla vacía sin filas de datos.`}}}},u={args:{dataTable:[o[0]]},parameters:{docs:{description:{story:`Tabla con una sola fila de datos.`}}}},d={args:{dataTable:[...o,{name:`Sarah Williams`,userName:`swilliams`,status:!0},{name:`David Brown`,userName:`dbrown`,status:!1}]},parameters:{docs:{description:{story:`Tabla con múltiples filas para probar el desplazamiento y la interacción con muchas filas.`}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    dataTable: sampleData
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla con filas seleccionables. Haz clic en cualquier fila para ver el resaltado.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    dataTable: []
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla sin datos. Muestra una tabla vacía sin filas de datos.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    dataTable: [sampleData[0]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla con una sola fila de datos.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
        story: 'Tabla con múltiples filas para probar el desplazamiento y la interacción con muchas filas.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};var f=[`Default`,`EmptyState`,`SingleItem`,`ManyItems`];export{c as Default,l as EmptyState,d as ManyItems,u as SingleItem,f as __namedExportsOrder,s as default};