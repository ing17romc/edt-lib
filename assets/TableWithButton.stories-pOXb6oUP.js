import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{g as N}from"./tables-D-HrAZLw.js";import{b as z}from"./index-DRY8ECq5.js";import{b as i}from"./index-BY0ih0Go.js";import"./index-CgfFrydU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B0pXE9zJ.js";const T=({dataTable:f})=>a.jsx(a.Fragment,{children:a.jsx("div",{className:"container-body",children:a.jsxs("div",{className:"grid-primary ",children:[a.jsx("div",{className:"start-1 size-12 padding-v-20",children:a.jsx(z,{title:"Example tables",children:"Example tables"})}),a.jsx("div",{className:"start-1  padding-v-20"}),a.jsxs("div",{className:"grid-secondary  ",children:[a.jsx("div",{className:"start-1 size-24 padding-v-20",children:a.jsx("h4",{children:"Table with button "})}),a.jsx("div",{className:"start-1 size-24 padding-v-20 ",children:a.jsx("div",{className:"bg-gray padding-h-30 padding-v-30",children:a.jsx("table",{children:a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("th",{children:"Name"}),a.jsx("th",{children:"UserName"}),a.jsx("th",{children:"Status"}),a.jsx("th",{}),a.jsx("th",{})]}),f.map((r,v)=>a.jsxs("tr",{children:[a.jsx("td",{children:r.name}),a.jsx("td",{children:r.userName}),a.jsx("td",{children:N(r.status)}),a.jsx("td",{children:a.jsx(i,{title:"Update",type:"button",size:"medium",onClick:()=>alert("clic!!!")})}),a.jsx("td",{children:a.jsx(i,{title:"Delete",type:"button",size:"medium",onClick:()=>alert("clic!!!")})})]},v))]})})})})]}),a.jsx("div",{className:"start-1  padding-v-20"})]})})});T.__docgenInfo={description:`TableWithButton

Componente de tabla que muestra datos y agrega botones de acción (actualizar y eliminar) para cada fila.
Permite visualizar una tabla con botones de actualización y eliminación en cada registro.

@param {TableWithButtonProps} props - Propiedades del componente, incluyendo el arreglo de datos a mostrar.
@returns {JSX.Element} Tabla con botones de acción por fila.`,methods:[],displayName:"TableWithButton",props:{dataTable:{required:!0,tsType:{name:"Array",elements:[{name:"TableRowData"}],raw:"TableRowData[]"},description:""}}};const o=[{name:"John Doe",userName:"johndoe",status:!0},{name:"Jane Smith",userName:"janesmith",status:!1},{name:"Robert Johnson",userName:"rjohnson",status:!0},{name:"Emily Davis",userName:"edavis",status:1},{name:"Michael Wilson",userName:"mwilson",status:0}],q={title:"Examples/Tables/TableWithButton",component:T,parameters:{layout:"centered",docs:{description:{component:"Tabla que incluye botones de acción (actualizar y eliminar) en cada fila. Ideal para interfaces que requieren acciones rápidas sobre registros individuales."}}},tags:["autodocs"]},e={args:{dataTable:o},parameters:{docs:{description:{story:"Tabla con botones de acción en cada fila. Los botones están configurados con acciones de consola de ejemplo."}}}},s={args:{dataTable:[]},parameters:{docs:{description:{story:"Tabla sin datos. Muestra solo los encabezados de las columnas y los encabezados de los botones."}}}},t={args:{dataTable:[o[0]]},parameters:{docs:{description:{story:"Tabla con una sola fila de datos y sus respectivos botones de acción."}}}},n={args:{dataTable:[...o,{name:"Sarah Williams",userName:"swilliams",status:!0},{name:"David Brown",userName:"dbrown",status:!1}]},parameters:{docs:{description:{story:"Tabla con múltiples filas para probar el desplazamiento vertical con botones de acción en cada fila."}}}};var d,c,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,h,g;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var j,x,y;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const M=["Default","EmptyState","SingleItem","ManyItems"];export{e as Default,s as EmptyState,n as ManyItems,t as SingleItem,M as __namedExportsOrder,q as default};
