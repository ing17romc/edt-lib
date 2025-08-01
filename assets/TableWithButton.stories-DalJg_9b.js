import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{g as z}from"./tables-D-HrAZLw.js";import{b as D}from"./index-DOlOFpI0.js";import{B as i}from"./index-CSd37hx4.js";import{C as c}from"./types-D2sN4igU.js";import"./index-D4lIrffr.js";import"./classNames-CqjykrQM.js";const f=({dataTable:v})=>a.jsx(a.Fragment,{children:a.jsx("div",{className:"container-body",children:a.jsxs("div",{className:"grid-primary ",children:[a.jsx("div",{className:"start-1 size-12 padding-v-20",children:a.jsx(D,{title:"Example tables",children:"Example tables"})}),a.jsx("div",{className:"start-1  padding-v-20"}),a.jsxs("div",{className:"grid-secondary  ",children:[a.jsx("div",{className:"start-1 size-24 padding-v-20",children:a.jsx("h4",{children:"Table with button "})}),a.jsx("div",{className:"start-1 size-24 padding-v-20 ",children:a.jsx("div",{className:"bg-gray padding-h-30 padding-v-30",children:a.jsx("table",{children:a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("th",{children:"Name"}),a.jsx("th",{children:"UserName"}),a.jsx("th",{children:"Status"}),a.jsx("th",{}),a.jsx("th",{})]}),v.map((r,N)=>a.jsxs("tr",{children:[a.jsx("td",{children:r.name}),a.jsx("td",{children:r.userName}),a.jsx("td",{children:z(r.status)}),a.jsx("td",{children:a.jsx(i,{type:"button",size:c.MEDIUM,onClick:()=>alert("clic!!!"),children:"Update"})}),a.jsx("td",{children:a.jsx(i,{type:"button",size:c.MEDIUM,onClick:()=>alert("clic!!!"),children:"Delete"})})]},N))]})})})})]}),a.jsx("div",{className:"start-1  padding-v-20"})]})})});f.__docgenInfo={description:`TableWithButton

Componente de tabla que muestra datos y agrega botones de acción (actualizar y eliminar) para cada fila.
Permite visualizar una tabla con botones de actualización y eliminación en cada registro.

@param {TableWithButtonProps} props - Propiedades del componente, incluyendo el arreglo de datos a mostrar.
@returns {JSX.Element} Tabla con botones de acción por fila.`,methods:[],displayName:"TableWithButton",props:{dataTable:{required:!0,tsType:{name:"Array",elements:[{name:"TableRowData"}],raw:"TableRowData[]"},description:""}}};const o=[{name:"John Doe",userName:"johndoe",status:!0},{name:"Jane Smith",userName:"janesmith",status:!1},{name:"Robert Johnson",userName:"rjohnson",status:!0},{name:"Emily Davis",userName:"edavis",status:1},{name:"Michael Wilson",userName:"mwilson",status:0}],q={title:"Examples/Tables/TableWithButton",component:f,parameters:{layout:"centered",docs:{description:{component:"Tabla que incluye botones de acción (actualizar y eliminar) en cada fila. Ideal para interfaces que requieren acciones rápidas sobre registros individuales."}}},tags:["autodocs"]},e={args:{dataTable:o},parameters:{docs:{description:{story:"Tabla con botones de acción en cada fila. Los botones están configurados con acciones de consola de ejemplo."}}}},s={args:{dataTable:[]},parameters:{docs:{description:{story:"Tabla sin datos. Muestra solo los encabezados de las columnas y los encabezados de los botones."}}}},n={args:{dataTable:[o[0]]},parameters:{docs:{description:{story:"Tabla con una sola fila de datos y sus respectivos botones de acción."}}}},t={args:{dataTable:[...o,{name:"Sarah Williams",userName:"swilliams",status:!0},{name:"David Brown",userName:"dbrown",status:!1}]},parameters:{docs:{description:{story:"Tabla con múltiples filas para probar el desplazamiento vertical con botones de acción en cada fila."}}}};var d,l,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    dataTable: sampleData
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla con botones de acción en cada fila. Los botones están configurados con acciones de consola de ejemplo.'
      }
    }
  }
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    dataTable: []
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla sin datos. Muestra solo los encabezados de las columnas y los encabezados de los botones.'
      }
    }
  }
}`,...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,g,j;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    dataTable: [sampleData[0]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla con una sola fila de datos y sus respectivos botones de acción.'
      }
    }
  }
}`,...(j=(g=n.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var x,y,T;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
        story: 'Tabla con múltiples filas para probar el desplazamiento vertical con botones de acción en cada fila.'
      }
    }
  }
}`,...(T=(y=t.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const C=["Default","EmptyState","SingleItem","ManyItems"];export{e as Default,s as EmptyState,t as ManyItems,n as SingleItem,C as __namedExportsOrder,q as default};
