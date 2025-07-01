import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{g as j}from"./tables-BGzrQ0av.js";import{b as N}from"./index-DtmfLO8A.js";import"./index-D4lIrffr.js";import"./index-_oZgBBUR.js";const T=({dataTable:x})=>a.jsx(a.Fragment,{children:a.jsx("div",{className:"container-body",children:a.jsxs("div",{className:"grid-primary ",children:[a.jsx("div",{className:"start-1 size-12 padding-v-20",children:a.jsx(N,{title:"Example tables",children:"Example tables"})}),a.jsx("div",{className:"start-1  padding-v-20"}),a.jsxs("div",{className:"grid-secondary  ",children:[a.jsx("div",{className:"start-1 size-24 padding-v-20",children:a.jsx("h4",{children:"Table active row "})}),a.jsx("div",{className:"start-1 size-24 padding-v-20 ",children:a.jsx("div",{className:"bg-gray padding-h-30 padding-v-30",children:a.jsx("table",{children:a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("th",{style:{width:"40%"},children:"Name"}),a.jsx("th",{style:{width:"40%"},children:"UserName"}),a.jsx("th",{style:{width:"20%"},children:"Status"})]}),x.map((n,y)=>a.jsxs("tr",{className:"active",onClick:()=>alert("clic!!!"),children:[a.jsx("td",{children:n.name}),a.jsx("td",{children:n.userName}),a.jsx("td",{children:j(n.status)})]},y))]})})})})]}),a.jsx("div",{className:"start-1  padding-v-20"})]})})});T.__docgenInfo={description:`TableActiveRow

Componente de tabla que permite seleccionar filas activas y muestra datos con estilos diferenciados.
Útil para resaltar o interactuar con filas específicas de la tabla.

@param {TableActiveRowProps} props - Propiedades del componente, incluyendo el arreglo de datos a mostrar.
@returns {JSX.Element} Tabla con filas activas e interacción básica.`,methods:[],displayName:"TableActiveRow",props:{dataTable:{required:!0,tsType:{name:"Array",elements:[{name:"TableRowData"}],raw:"TableRowData[]"},description:""}}};const i=[{name:"John Doe",userName:"johndoe",status:!0},{name:"Jane Smith",userName:"janesmith",status:!1},{name:"Robert Johnson",userName:"rjohnson",status:!0},{name:"Emily Davis",userName:"edavis",status:1},{name:"Michael Wilson",userName:"mwilson",status:0}],z={title:"Examples/Tables/TableActiveRow",component:T,parameters:{layout:"centered",docs:{description:{component:"Tabla con filas seleccionables que resaltan al hacer clic. Útil para mostrar datos tabulares donde se necesita interacción con filas específicas."}}},tags:["autodocs"]},e={args:{dataTable:i},parameters:{docs:{description:{story:"Tabla con filas seleccionables. Haz clic en cualquier fila para ver el resaltado."}}}},s={args:{dataTable:[]},parameters:{docs:{description:{story:"Tabla sin datos. Muestra una tabla vacía sin filas de datos."}}}},r={args:{dataTable:[i[0]]},parameters:{docs:{description:{story:"Tabla con una sola fila de datos."}}}},t={args:{dataTable:[...i,{name:"Sarah Williams",userName:"swilliams",status:!0},{name:"David Brown",userName:"dbrown",status:!1}]},parameters:{docs:{description:{story:"Tabla con múltiples filas para probar el desplazamiento y la interacción con muchas filas."}}}};var l,o,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(o=e.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var d,m,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,b,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,g,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const A=["Default","EmptyState","SingleItem","ManyItems"];export{e as Default,s as EmptyState,t as ManyItems,r as SingleItem,A as __namedExportsOrder,z as default};
