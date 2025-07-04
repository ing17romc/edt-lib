import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{g as s}from"./tables-D-HrAZLw.js";import{b as v}from"./index-DZeKpLxj.js";import"./index-D4lIrffr.js";import"./index-_oZgBBUR.js";const T=({dataTable:f})=>a.jsx(a.Fragment,{children:a.jsx("div",{className:"container-body",children:a.jsxs("div",{className:"grid-primary ",children:[a.jsx("div",{className:"start-1 size-12 padding-v-20",children:a.jsx(v,{title:"Example tables",children:"Example tables"})}),a.jsx("div",{className:"start-1  padding-v-20"}),a.jsxs("div",{className:"grid-secondary ",children:[a.jsx("div",{className:"start-1 size-24 padding-v-20",children:a.jsx("h4",{children:"Table default"})}),a.jsx("div",{className:"start-1 size-24 padding-v-20 ",children:a.jsx("div",{className:"bg-gray padding-h-30 padding-v-30",children:a.jsx("table",{className:"big-table",children:a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("th",{children:"Name"}),a.jsx("th",{children:"UserName"}),a.jsx("th",{children:"Status"}),a.jsx("th",{children:"Name"}),a.jsx("th",{children:"UserName"}),a.jsx("th",{children:"Status"}),a.jsx("th",{children:"Name"}),a.jsx("th",{children:"UserName"}),a.jsx("th",{children:"Status"}),a.jsx("th",{children:"Name"}),a.jsx("th",{children:"UserName"}),a.jsx("th",{children:"Status"})]}),f.map((e,y)=>a.jsxs("tr",{children:[a.jsx("td",{children:e.name}),a.jsx("td",{children:e.userName}),a.jsx("td",{children:s(e.status)}),a.jsx("td",{children:e.name}),a.jsx("td",{children:e.userName}),a.jsx("td",{children:s(e.status)}),a.jsx("td",{children:e.name}),a.jsx("td",{children:e.userName}),a.jsx("td",{children:s(e.status)}),a.jsx("td",{children:e.name}),a.jsx("td",{children:e.userName}),a.jsx("td",{children:s(e.status)})]},y))]})})})})]}),a.jsx("div",{className:"start-1  padding-v-20"})]})})});T.__docgenInfo={description:`TableDefault

Componente de tabla que muestra una tabla grande con múltiples columnas repetidas.
Útil para mostrar datos en formato de tabla expandida.

@param {TableDefaultProps} props - Propiedades del componente, incluyendo el arreglo de datos a mostrar.
@returns {JSX.Element} Tabla expandida con datos repetidos por fila.`,methods:[],displayName:"TableDefault",props:{dataTable:{required:!0,tsType:{name:"Array",elements:[{name:"TableRowData"}],raw:"TableRowData[]"},description:""}}};const o=[{name:"John Doe",userName:"johndoe",status:!0},{name:"Jane Smith",userName:"janesmith",status:!1},{name:"Robert Johnson",userName:"rjohnson",status:!0},{name:"Emily Davis",userName:"edavis",status:1},{name:"Michael Wilson",userName:"mwilson",status:0}],q={title:"Examples/Tables/TableDefault",component:T,parameters:{layout:"centered",docs:{description:{component:"Tabla predeterminada que muestra múltiples columnas con información repetida. Útil para mostrar grandes conjuntos de datos en un formato tabular amplio."}}},tags:["autodocs"]},r={args:{dataTable:o},parameters:{docs:{description:{story:"Tabla predeterminada con múltiples columnas que repiten la información."}}}},t={args:{dataTable:[]},parameters:{docs:{description:{story:"Tabla sin datos. Muestra solo los encabezados de las columnas."}}}},n={args:{dataTable:[o[0]]},parameters:{docs:{description:{story:"Tabla con una sola fila de datos."}}}},d={args:{dataTable:[...o,{name:"Sarah Williams",userName:"swilliams",status:!0},{name:"David Brown",userName:"dbrown",status:!1}]},parameters:{docs:{description:{story:"Tabla con múltiples filas para probar el desplazamiento horizontal."}}}};var l,i,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    dataTable: sampleData
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla predeterminada con múltiples columnas que repiten la información.'
      }
    }
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,x,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var j,g,N;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
        story: 'Tabla con múltiples filas para probar el desplazamiento horizontal.'
      }
    }
  }
}`,...(N=(g=d.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};const I=["Default","EmptyState","SingleItem","ManyItems"];export{r as Default,t as EmptyState,d as ManyItems,n as SingleItem,I as __namedExportsOrder,q as default};
