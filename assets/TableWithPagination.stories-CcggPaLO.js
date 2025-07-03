import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as L}from"./index-D4lIrffr.js";import{g as A}from"./tables-D-HrAZLw.js";import{T as P}from"./index-DpogHn3U.js";import{P as W}from"./index-BJHGj_Tm.js";import{b as I}from"./index-Dx2Pv7yd.js";import"./index-_oZgBBUR.js";const z=a=>{const t=[];for(const s in a)t.push(a[s]);return t},J=a=>{const t=[];for(const s in a)t.push({key:a[s],value:a[s]});return t},R=a=>{if(a&&a.target){if(a.target.tagName.toLowerCase()==="input")return a.target.type.toLowerCase()==="checkbox"?{key:a.target.name,value:a.target.checked}:a.target.type.toLowerCase()==="radio"?{key:a.target.name,value:a.target.id}:{key:a.target.name,value:a.target.value};if(a.target.tagName.toLowerCase()==="button")return{key:a.target.id,value:""};if(a.target.tagName.toLowerCase()==="textarea"||a.target.tagName.toLowerCase()==="select")return{key:a.target.id,value:a.target.value}}else return a?{key:a.id,value:a.value}:null},i=(a,t)=>a??t,_=(a,t,s)=>a?t:s,M=a=>i(a,"").replace(/[^0-9]/g,""),O=a=>i(a,"").replace(/[^\wñÑáÁéÉíÍóÓúÚ\s]/g,""),U=a=>i(a,"").replace(/[\W]/g,""),$=a=>i(a,"").toLowerCase(),B=a=>i(a,"").toUpperCase(),F=a=>i(a,"").replace(/\w\S*/g,t=>t.replace(/^\w/,s=>s.toUpperCase())),G={jsonToArray:z,getOptionsSelector:J,getValueInput:R,getInitialValue:i,ternaryOperation:_,onlyNumber:M,onlyAlphanumericWithSpace:O,onlyAlphanumericWithoutSpace:U,lowerCaseText:$,upperCaseText:B,capitalText:F},E=({dataTable:a})=>{var h;const[t,s]=L.useState({page:1,pages:3}),m=(n,o,l)=>!Array.isArray(n)||!Array.isArray(o)||!l?[]:o.length?(n.push(o.slice(0,l)),m(n,o.slice(l,o.length),l)):n,r=m([],a,t.pages),k=r.length<t.page?0:t.page-1,q=n=>{const o=G.getValueInput(n);n&&o&&s({...t,[o.key]:o.value,page:1})};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-body",children:e.jsxs("div",{className:"grid-primary ",children:[e.jsx("div",{className:"start-1 size-12 padding-v-20",children:e.jsx(P,{title:"Example tables",children:"Example tables"})}),e.jsx("div",{className:"start-1  padding-v-20"}),e.jsxs("div",{className:"grid-secondary ",children:[e.jsx("div",{className:"start-1 size-16 padding-v-20 center-vertical",children:e.jsx("h4",{children:"Table with pagination"})}),e.jsx("div",{className:" size-8 padding-v-20",children:e.jsx(I,{id:"pages",value:t.pages.toString(),options:[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"}],onChange:n=>q(n),label:"Number item by page",placeholder:"Select items per page"})}),e.jsx("div",{className:"start-1 size-24 padding-v-20 ",children:e.jsx("div",{className:"bg-gray padding-h-30 padding-v-30",children:e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"UserName"}),e.jsx("th",{children:"Status"})]}),r.length?((h=r[k])==null?void 0:h.map((n,o)=>e.jsxs("tr",{children:[e.jsx("td",{children:n.name}),e.jsx("td",{children:n.userName}),e.jsx("td",{children:A(n.status)})]},o)))||e.jsx("tr",{children:e.jsx("td",{colSpan:3,className:"text-center",children:"No hay datos disponibles"})}):e.jsx("tr",{children:e.jsx("td",{colSpan:3,className:"text-center",children:"No hay datos disponibles"})})]})})})}),e.jsx("div",{className:"start-1 size-24 padding-v-20 center",children:e.jsx(W,{totalPages:r.length,currentPage:t.page,onPageChange:n=>s({...t,page:n})})})]}),e.jsx("div",{className:"start-1  padding-v-20"})]})})})};E.__docgenInfo={description:`TableWithPagination

Componente de tabla que muestra datos paginados y permite seleccionar el número de elementos por página.
Incluye controles para cambiar de página y ajustar la cantidad de filas visibles.

@param {TableWithPaginationProps} props - Propiedades del componente, incluyendo el arreglo de datos a mostrar.
@returns {JSX.Element} Tabla interactiva con paginación y selector de filas por página.`,methods:[],displayName:"TableWithPagination",props:{dataTable:{required:!0,tsType:{name:"Array",elements:[{name:"TableRowData"}],raw:"TableRowData[]"},description:""}}};const u=a=>{const t=["John","Jane","Robert","Emily","Michael","Sarah","David","Emma","James","Olivia"],s=["Doe","Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez"];return Array.from({length:a},(m,r)=>({name:`${t[r%t.length]} ${s[r%s.length]}`,userName:`${(t[r%t.length]+s[r%s.length]).toLowerCase()}`,status:r%3===0?!0:r%3===1?!1:1}))},X=u(5),H=u(15),K=u(50),sa={title:"Examples/Tables/TableWithPagination",component:E,parameters:{layout:"centered",docs:{description:{component:"Tabla con paginación que permite navegar entre páginas de datos y ajustar la cantidad de filas mostradas por página. Ideal para grandes conjuntos de datos que necesitan ser divididos en páginas manejables."}}},tags:["autodocs"]},c={args:{dataTable:H},parameters:{docs:{description:{story:"Tabla con paginación que muestra 15 elementos por defecto, distribuidos en varias páginas según sea necesario."}}}},d={args:{dataTable:X},parameters:{docs:{description:{story:"Tabla con un conjunto pequeño de datos (menos de una página)."}}}},p={args:{dataTable:K},parameters:{docs:{description:{story:"Tabla con un conjunto grande de datos (varias páginas) para probar la paginación completa."}}}},g={args:{dataTable:[]},parameters:{docs:{description:{story:"Tabla sin datos. Muestra un mensaje indicando que no hay datos disponibles."}}}};var b,y,v;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(y=c.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,j,T;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(T=(j=d.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var f,N,S;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(N=p.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var D,C,w;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(w=(C=g.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const na=["Default","SmallDataset","LargeDataset","EmptyState"];export{c as Default,g as EmptyState,p as LargeDataset,d as SmallDataset,na as __namedExportsOrder,sa as default};
