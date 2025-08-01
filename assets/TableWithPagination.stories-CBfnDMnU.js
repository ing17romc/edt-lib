import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as A}from"./index-D4lIrffr.js";import{g as J}from"./tables-D-HrAZLw.js";import{b as W}from"./index-DOlOFpI0.js";import{P as C}from"./index-5-uUbNqI.js";import{a as I}from"./index-CILFnKpG.js";import"./classNames-CqjykrQM.js";import"./types-D2sN4igU.js";const P=({dataTable:m})=>{var h;const[n,r]=A.useState({page:1,pages:3}),u=e=>{r(s=>({...s,pages:parseInt(e.target.value,10)}))},t=(e,s,i)=>!Array.isArray(e)||!Array.isArray(s)||!i?[]:s.length?(e.push(s.slice(0,i)),t(e,s.slice(i,s.length),i)):e,o=t([],m,n.pages),z=o.length<n.page?0:n.page-1;return a.jsx(a.Fragment,{children:a.jsx("div",{className:"container-body",children:a.jsxs("div",{className:"grid-primary ",children:[a.jsx("div",{className:"start-1 size-12 padding-v-20",children:a.jsx(W,{title:"Example tables",children:"Example tables"})}),a.jsx("div",{className:"start-1  padding-v-20"}),a.jsxs("div",{className:"grid-secondary ",children:[a.jsx("div",{className:"start-1 size-16 padding-v-20 center-vertical",children:a.jsx("h4",{children:"Table with pagination"})}),a.jsx("div",{className:" size-8 padding-v-20",children:a.jsx(I,{id:"pages",value:n.pages.toString(),onChange:u,options:[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"}],label:"Number item by page",placeholder:"Select items per page"})}),a.jsx("div",{className:"start-1 size-24 padding-v-20 ",children:a.jsx("div",{className:"bg-gray padding-h-30 padding-v-30",children:a.jsx("table",{children:a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("th",{children:"Name"}),a.jsx("th",{children:"UserName"}),a.jsx("th",{children:"Status"})]}),o.length?((h=o[z])==null?void 0:h.map((e,s)=>a.jsxs("tr",{children:[a.jsx("td",{children:e.name}),a.jsx("td",{children:e.userName}),a.jsx("td",{children:J(e.status)})]},s)))||a.jsx("tr",{children:a.jsx("td",{colSpan:3,className:"text-center",children:"No hay datos disponibles"})}):a.jsx("tr",{children:a.jsx("td",{colSpan:3,className:"text-center",children:"No hay datos disponibles"})})]})})})}),a.jsx("div",{className:"start-1 size-24 padding-v-20 center",children:a.jsx(C,{totalPages:o.length,currentPage:n.page,onPageChange:e=>r(s=>({...s,page:e}))})})]}),a.jsx("div",{className:"start-1  padding-v-20"})]})})})};P.__docgenInfo={description:`TableWithPagination

Componente de tabla que muestra datos paginados y permite seleccionar el número de elementos por página.
Incluye controles para cambiar de página y ajustar la cantidad de filas visibles.

@param {TableWithPaginationProps} props - Propiedades del componente, incluyendo el arreglo de datos a mostrar.
@returns {JSX.Element} Tabla interactiva con paginación y selector de filas por página.`,methods:[],displayName:"TableWithPagination",props:{dataTable:{required:!0,tsType:{name:"Array",elements:[{name:"TableRowData"}],raw:"TableRowData[]"},description:""}}};const g=m=>{const n=["John","Jane","Robert","Emily","Michael","Sarah","David","Emma","James","Olivia"],r=["Doe","Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez"];return Array.from({length:m},(u,t)=>({name:`${n[t%n.length]} ${r[t%r.length]}`,userName:`${(n[t%n.length]+r[t%r.length]).toLowerCase()}`,status:t%3===0?!0:t%3===1?!1:1}))},R=g(5),_=g(15),M=g(50),X={title:"Examples/Tables/TableWithPagination",component:P,parameters:{layout:"centered",docs:{description:{component:"Tabla con paginación que permite navegar entre páginas de datos y ajustar la cantidad de filas mostradas por página. Ideal para grandes conjuntos de datos que necesitan ser divididos en páginas manejables."}}},tags:["autodocs"]},d={args:{dataTable:_},parameters:{docs:{description:{story:"Tabla con paginación que muestra 15 elementos por defecto, distribuidos en varias páginas según sea necesario."}}}},l={args:{dataTable:R},parameters:{docs:{description:{story:"Tabla con un conjunto pequeño de datos (menos de una página)."}}}},c={args:{dataTable:M},parameters:{docs:{description:{story:"Tabla con un conjunto grande de datos (varias páginas) para probar la paginación completa."}}}},p={args:{dataTable:[]},parameters:{docs:{description:{story:"Tabla sin datos. Muestra un mensaje indicando que no hay datos disponibles."}}}};var b,j,x;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    dataTable: mediumDataset
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla con paginación que muestra 15 elementos por defecto, distribuidos en varias páginas según sea necesario.'
      }
    }
  }
}`,...(x=(j=d.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var v,y,T;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    dataTable: smallDataset
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla con un conjunto pequeño de datos (menos de una página).'
      }
    }
  }
}`,...(T=(y=l.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var S,N,f;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    dataTable: largeDataset
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla con un conjunto grande de datos (varias páginas) para probar la paginación completa.'
      }
    }
  }
}`,...(f=(N=c.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};var D,E,q;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    dataTable: []
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla sin datos. Muestra un mensaje indicando que no hay datos disponibles.'
      }
    }
  }
}`,...(q=(E=p.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};const k=["Default","SmallDataset","LargeDataset","EmptyState"];export{d as Default,p as EmptyState,c as LargeDataset,l as SmallDataset,k as __namedExportsOrder,X as default};
