import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as A}from"./index-D4lIrffr.js";import{c as r}from"./index-Bckx9Gcf.js";const E=({totalCount:p,currentPage:a=1,onPageChange:m,className:_})=>{const s=A.useMemo(()=>((u,R)=>{const M=R-u+1;return Array.from({length:M},(D,z)=>z+u)})(1,p),[p]);if(a===0||s.length<2)return null;const k=()=>{a<p&&m(a+1)},F=()=>{a>1&&m(a-1)},d=s[s.length-1];return e.jsxs("ul",{className:r("pagination-container",_),children:[e.jsx("li",{className:r("pagination-item",{disabled:a===1}),children:e.jsx("button",{type:"button",className:"arrow-btn left",onClick:F,disabled:a===1,"aria-label":"Página anterior",children:e.jsx("div",{className:"arrow left"})})}),s.map(n=>e.jsx("li",{className:r("pagination-item",{selected:n===a}),children:e.jsx("button",{type:"button",className:"page-btn",onClick:()=>m(n),"aria-current":n===a?"page":void 0,"aria-label":`Ir a la página ${n}`,disabled:n===a,children:n})},n)),e.jsx("li",{className:r("pagination-item",{disabled:a===d}),children:e.jsx("button",{type:"button",className:"arrow-btn right",onClick:k,disabled:a===d,"aria-label":"Página siguiente",children:e.jsx("div",{className:"arrow right"})})})]})};E.__docgenInfo={description:`@name Pagination
@description Componente funcional que renderiza una barra de paginación para navegar entre un conjunto de páginas.

@param {PaginationProps} props - Propiedades del componente.
@param {number} props.totalCount - El número total de páginas disponibles.
@param {number} [props.currentPage=1] - El número de la página activa actualmente.
@param {(page: number) => void} props.onPageChange - Función callback que se ejecuta cuando el usuario selecciona una página.
@param {string} [props.className] - Clases CSS adicionales para personalizar el estilo del contenedor.

@returns {JSX.Element | null} Un elemento JSX que representa la barra de paginación, o \`null\` si no es necesaria.`,methods:[],displayName:"Pagination",props:{totalCount:{required:!0,tsType:{name:"number"},description:""},currentPage:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const W={title:"Controls/Pagination",component:E,tags:["autodocs"],argTypes:{totalCount:{control:{type:"number",min:1},description:"Total number of items to paginate"},currentPage:{control:{type:"number",min:1},description:"Current active page"},onPageChange:{action:"pageChanged",description:"Function called when page is changed"},className:{control:"text",description:"Additional CSS class names"}},args:{totalCount:10,currentPage:1}},t={},o={args:{totalCount:50,currentPage:25}},i={args:{currentPage:1}},c={args:{currentPage:10}},l={args:{className:"custom-pagination"}};var g,b,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,C,P;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    totalCount: 50,
    currentPage: 25
  }
}`,...(P=(C=o.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var y,x,j;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    currentPage: 1
  }
}`,...(j=(x=i.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var v,S,N;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    currentPage: 10
  }
}`,...(N=(S=c.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var q,w,T;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    className: 'custom-pagination'
  }
}`,...(T=(w=l.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const X=["Default","ManyPages","FirstPage","LastPage","WithCustomClass"];export{t as Default,i as FirstPage,c as LastPage,o as ManyPages,l as WithCustomClass,X as __namedExportsOrder,W as default};
