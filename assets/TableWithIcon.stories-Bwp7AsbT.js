import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{g as I}from"./tables-D-HrAZLw.js";import{b as S}from"./index-DOlOFpI0.js";import{I as c}from"./index-tISUzjxW.js";import{C as d}from"./types-D2sN4igU.js";import"./index-D4lIrffr.js";import"./classNames-CqjykrQM.js";import"./index-C33rcGra.js";const v=({dataTable:N})=>a.jsx(a.Fragment,{children:a.jsx("div",{className:"container-body",children:a.jsxs("div",{className:"grid-primary ",children:[a.jsx("div",{className:"start-1 size-12 padding-v-20",children:a.jsx(S,{title:"Example tables",children:"Example tables"})}),a.jsx("div",{className:"start-1  padding-v-20"}),a.jsxs("div",{className:"grid-secondary  ",children:[a.jsx("div",{className:"start-1 size-24 padding-v-20",children:a.jsx("h4",{children:"Table with icon "})}),a.jsx("div",{className:"start-1 size-24 padding-v-20 ",children:a.jsx("div",{className:"bg-gray padding-h-30 padding-v-30",children:a.jsx("table",{children:a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("th",{children:"Name"}),a.jsx("th",{children:"UserName"}),a.jsx("th",{children:"Status"}),a.jsx("th",{}),a.jsx("th",{})]}),N.map((r,e)=>a.jsxs("tr",{children:[a.jsx("td",{children:r.name}),a.jsx("td",{children:r.userName}),a.jsx("td",{children:I(r.status)}),a.jsx("td",{children:a.jsx(c,{icon:"edit",id:`edit_${e}`,"data-testid":`edit_${e}`,size:d.MEDIUM,"aria-label":"Editar",onClick:()=>alert("clic!!!")})}),a.jsx("td",{children:a.jsx(c,{icon:"delete",id:`delete_${e}`,"data-testid":`delete_${e}`,size:d.MEDIUM,"aria-label":"Eliminar",onClick:()=>alert("clic!!!")})})]},e))]})})})})]}),a.jsx("div",{className:"start-1  padding-v-20"})]})})});v.__docgenInfo={description:`TableWithIcon

Componente de tabla que muestra datos y agrega botones con iconos para acciones sobre cada fila.
Permite visualizar una tabla con botones de edición y eliminación en cada registro.

@param {TableWithIconProps} props - Propiedades del componente, incluyendo el arreglo de datos a mostrar.
@returns {JSX.Element} Tabla con botones de acción por fila.`,methods:[],displayName:"TableWithIcon",props:{dataTable:{required:!0,tsType:{name:"Array",elements:[{name:"TableRowData"}],raw:"TableRowData[]"},description:""}}};const i=[{name:"John Doe",userName:"johndoe",status:!0},{name:"Jane Smith",userName:"janesmith",status:!1},{name:"Robert Johnson",userName:"rjohnson",status:!0},{name:"Emily Davis",userName:"edavis",status:1},{name:"Michael Wilson",userName:"mwilson",status:0}],C={title:"Examples/Tables/TableWithIcon",component:v,parameters:{layout:"centered",docs:{description:{component:"Tabla que incluye botones con iconos para acciones en cada fila. Ideal para interfaces que requieren acciones rápidas y compactas sobre registros individuales."}}},tags:["autodocs"]},s={args:{dataTable:i},parameters:{docs:{description:{story:"Tabla con botones de iconos en cada fila. Los botones están configurados con acciones de consola de ejemplo."}}}},n={args:{dataTable:[]},parameters:{docs:{description:{story:"Tabla sin datos. Muestra solo los encabezados de las columnas."}}}},o={args:{dataTable:[i[0]]},parameters:{docs:{description:{story:"Tabla con una sola fila de datos y sus respectivos botones de iconos."}}}},t={args:{dataTable:[...i,{name:"Sarah Williams",userName:"swilliams",status:!0},{name:"David Brown",userName:"dbrown",status:!1}]},parameters:{docs:{description:{story:"Tabla con múltiples filas para probar el desplazamiento vertical con botones de iconos en cada fila."}}}};var l,m,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,b,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var g,j,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(j=o.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var T,y,f;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const J=["Default","EmptyState","SingleItem","ManyItems"];export{s as Default,n as EmptyState,t as ManyItems,o as SingleItem,J as __namedExportsOrder,C as default};
