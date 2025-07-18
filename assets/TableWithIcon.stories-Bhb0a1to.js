import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{g as N}from"./tables-D-HrAZLw.js";import{b as S}from"./index-DOlOFpI0.js";import{I as d}from"./index-0mHhd2oh.js";import"./index-D4lIrffr.js";import"./classNames-CqjykrQM.js";import"./index-C6cZFqFD.js";const f=({dataTable:v})=>a.jsx(a.Fragment,{children:a.jsx("div",{className:"container-body",children:a.jsxs("div",{className:"grid-primary ",children:[a.jsx("div",{className:"start-1 size-12 padding-v-20",children:a.jsx(S,{title:"Example tables",children:"Example tables"})}),a.jsx("div",{className:"start-1  padding-v-20"}),a.jsxs("div",{className:"grid-secondary  ",children:[a.jsx("div",{className:"start-1 size-24 padding-v-20",children:a.jsx("h4",{children:"Table with icon "})}),a.jsx("div",{className:"start-1 size-24 padding-v-20 ",children:a.jsx("div",{className:"bg-gray padding-h-30 padding-v-30",children:a.jsx("table",{children:a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("th",{children:"Name"}),a.jsx("th",{children:"UserName"}),a.jsx("th",{children:"Status"}),a.jsx("th",{}),a.jsx("th",{})]}),v.map((r,e)=>a.jsxs("tr",{children:[a.jsx("td",{children:r.name}),a.jsx("td",{children:r.userName}),a.jsx("td",{children:N(r.status)}),a.jsx("td",{children:a.jsx(d,{icon:"edit",id:`edit_${e}`,"data-testid":`edit_${e}`,size:"medium","aria-label":"Editar",onClick:()=>alert("clic!!!")})}),a.jsx("td",{children:a.jsx(d,{icon:"delete",id:`delete_${e}`,"data-testid":`delete_${e}`,size:"medium","aria-label":"Eliminar",onClick:()=>alert("clic!!!")})})]},e))]})})})})]}),a.jsx("div",{className:"start-1  padding-v-20"})]})})});f.__docgenInfo={description:`TableWithIcon

Componente de tabla que muestra datos y agrega botones con iconos para acciones sobre cada fila.
Permite visualizar una tabla con botones de edición y eliminación en cada registro.

@param {TableWithIconProps} props - Propiedades del componente, incluyendo el arreglo de datos a mostrar.
@returns {JSX.Element} Tabla con botones de acción por fila.`,methods:[],displayName:"TableWithIcon",props:{dataTable:{required:!0,tsType:{name:"Array",elements:[{name:"TableRowData"}],raw:"TableRowData[]"},description:""}}};const i=[{name:"John Doe",userName:"johndoe",status:!0},{name:"Jane Smith",userName:"janesmith",status:!1},{name:"Robert Johnson",userName:"rjohnson",status:!0},{name:"Emily Davis",userName:"edavis",status:1},{name:"Michael Wilson",userName:"mwilson",status:0}],q={title:"Examples/Tables/TableWithIcon",component:f,parameters:{layout:"centered",docs:{description:{component:"Tabla que incluye botones con iconos para acciones en cada fila. Ideal para interfaces que requieren acciones rápidas y compactas sobre registros individuales."}}},tags:["autodocs"]},s={args:{dataTable:i},parameters:{docs:{description:{story:"Tabla con botones de iconos en cada fila. Los botones están configurados con acciones de consola de ejemplo."}}}},n={args:{dataTable:[]},parameters:{docs:{description:{story:"Tabla sin datos. Muestra solo los encabezados de las columnas."}}}},o={args:{dataTable:[i[0]]},parameters:{docs:{description:{story:"Tabla con una sola fila de datos y sus respectivos botones de iconos."}}}},t={args:{dataTable:[...i,{name:"Sarah Williams",userName:"swilliams",status:!0},{name:"David Brown",userName:"dbrown",status:!1}]},parameters:{docs:{description:{story:"Tabla con múltiples filas para probar el desplazamiento vertical con botones de iconos en cada fila."}}}};var c,l,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,g,j;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(j=(g=o.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var x,T,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(T=t.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const M=["Default","EmptyState","SingleItem","ManyItems"];export{s as Default,n as EmptyState,t as ManyItems,o as SingleItem,M as __namedExportsOrder,q as default};
