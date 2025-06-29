import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{g as z,R as I}from"./index-D4lIrffr.js";var b={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var x;function J(){return x||(x=1,function(c){(function(){var a={}.hasOwnProperty;function r(){for(var e="",n=0;n<arguments.length;n++){var s=arguments[n];s&&(e=i(e,f(s)))}return e}function f(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var s in e)a.call(e,s)&&e[s]&&(n=i(n,s));return n}function i(e,n){return n?e?e+" "+n:e+n:e}c.exports?(r.default=r,c.exports=r):window.classNames=r})()}(b)),b.exports}var L=J();const l=z(L),O=({totalCount:c,currentPage:a=1,onPageChange:r,className:f})=>{const i=I.useMemo(()=>((h,D)=>{const M=D-h+1;return Array.from({length:M},(V,k)=>k+h)})(1,c),[c]);if(a===0||i.length<2)return null;const e=()=>{a<c&&r(a+1)},n=()=>{a>1&&r(a-1)},s=i[i.length-1];return t.jsxs("ul",{className:l("pagination-container",f),children:[t.jsx("li",{className:l("pagination-item",{disabled:a===1}),children:t.jsx("button",{type:"button",className:"arrow-btn left",onClick:n,disabled:a===1,"aria-label":"Página anterior",children:t.jsx("div",{className:"arrow left"})})}),i.map(o=>t.jsx("li",{className:l("pagination-item",{selected:o===a}),children:t.jsx("button",{type:"button",className:"page-btn",onClick:()=>r(o),"aria-current":o===a?"page":void 0,"aria-label":`Ir a la página ${o}`,disabled:o===a,children:o})},o)),t.jsx("li",{className:l("pagination-item",{disabled:a===s}),children:t.jsx("button",{type:"button",className:"arrow-btn right",onClick:e,disabled:a===s,"aria-label":"Página siguiente",children:t.jsx("div",{className:"arrow right"})})})]})};O.__docgenInfo={description:`@name Pagination
@description Componente funcional que renderiza una barra de paginación para navegar entre un conjunto de páginas.

@param {PaginationProps} props - Propiedades del componente.
@param {number} props.totalCount - El número total de páginas disponibles.
@param {number} [props.currentPage=1] - El número de la página activa actualmente.
@param {(page: number) => void} props.onPageChange - Función callback que se ejecuta cuando el usuario selecciona una página.
@param {string} [props.className] - Clases CSS adicionales para personalizar el estilo del contenedor.

@returns {JSX.Element | null} Un elemento JSX que representa la barra de paginación, o \`null\` si no es necesaria.`,methods:[],displayName:"Pagination",props:{totalCount:{required:!0,tsType:{name:"number"},description:""},currentPage:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const $={title:"Controls/Pagination",component:O,tags:["autodocs"],argTypes:{totalCount:{control:{type:"number",min:1},description:"Total number of items to paginate"},currentPage:{control:{type:"number",min:1},description:"Current active page"},onPageChange:{action:"pageChanged",description:"Function called when page is changed"},className:{control:"text",description:"Additional CSS class names"}},args:{totalCount:10,currentPage:1}},p={},u={args:{totalCount:50,currentPage:25}},m={args:{currentPage:1}},d={args:{currentPage:10}},g={args:{className:"custom-pagination"}};var y,C,v;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(v=(C=p.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var P,j,S;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    totalCount: 50,
    currentPage: 25
  }
}`,...(S=(j=u.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var N,q,w;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    currentPage: 1
  }
}`,...(w=(q=m.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var E,T,F;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    currentPage: 10
  }
}`,...(F=(T=d.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var R,_,A;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    className: 'custom-pagination'
  }
}`,...(A=(_=g.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};const U=["Default","ManyPages","FirstPage","LastPage","WithCustomClass"];export{p as Default,m as FirstPage,d as LastPage,u as ManyPages,g as WithCustomClass,U as __namedExportsOrder,$ as default};
