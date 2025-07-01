import{j as e}from"./jsx-runtime-D_zvdyIk.js";const B="_pagination_v21wi_51",G="_pagination__item_v21wi_60",H="_pagination__button_v21wi_65",J="_pagination__ellipsis_v21wi_97",a={pagination:B,pagination__item:G,pagination__button:H,"pagination__button--disabled":"_pagination__button--disabled_v21wi_81","pagination__button--active":"_pagination__button--active_v21wi_81",pagination__ellipsis:J},z=({totalPages:n,currentPage:t,onPageChange:D,maxPageButtons:l=5,previousLabel:R="Anterior",nextLabel:W="Siguiente",className:E="",disabled:s=!1})=>{if(n<=0)return console.warn("Pagination: totalPages debe ser mayor a 0"),null;if(t<1||t>n)return console.warn(`Pagination: currentPage (${t}) está fuera de rango [1, ${n}]`),null;const o=(()=>{const i=Math.floor(l/2);let p=Math.max(1,t-i);const h=Math.min(n,p+l-1);return h-p+1<l&&(p=Math.max(1,h-l+1)),Array.from({length:h-p+1},(aa,O)=>p+O)})(),y=t===1,P=t===n,c=i=>{i<1||i>n||i===t||s||D(i)};return e.jsxs("nav",{className:`${a.pagination} ${E}`,"aria-label":"Paginación",children:[e.jsx("div",{className:a.pagination__item,children:e.jsx("button",{type:"button",onClick:()=>c(t-1),disabled:y||s,className:`${a.pagination__button} ${y||s?a["pagination__button--disabled"]:""}`,"aria-label":"Página anterior",children:R})}),o[0]>1&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:a.pagination__item,children:e.jsx("button",{type:"button",onClick:()=>c(1),disabled:s,className:`${a.pagination__button} ${s?a["pagination__button--disabled"]:""}`,"aria-label":"Ir a la primera página",children:"1"})}),o[0]>2&&e.jsx("div",{className:a.pagination__ellipsis,children:"..."})]}),o.map(i=>e.jsx("div",{className:a.pagination__item,children:e.jsx("button",{type:"button",onClick:()=>c(i),disabled:s,className:`${a.pagination__button} ${i===t?a["pagination__button--active"]:""} ${s?a["pagination__button--disabled"]:""}`,"aria-label":`Ir a la página ${i}`,"aria-current":i===t?"page":void 0,children:i})},i)),o[o.length-1]<n&&e.jsxs(e.Fragment,{children:[o[o.length-1]<n-1&&e.jsx("div",{className:a.pagination__ellipsis,children:"..."}),e.jsx("div",{className:a.pagination__item,children:e.jsx("button",{type:"button",onClick:()=>c(n),disabled:s,className:`${a.pagination__button} ${s?a["pagination__button--disabled"]:""}`,"aria-label":`Ir a la última página (${n})`,children:n})})]}),e.jsx("div",{className:a.pagination__item,children:e.jsx("button",{type:"button",onClick:()=>c(t+1),disabled:P||s,className:`${a.pagination__button} ${P||s?a["pagination__button--disabled"]:""}`,"aria-label":"Página siguiente",children:W})})]})};z.__docgenInfo={description:`Componente de paginación que muestra controles para navegar entre páginas.
Permite navegar a la página anterior, siguiente, primera, última o cualquier página intermedia.`,methods:[],displayName:"Pagination",props:{totalPages:{required:!0,tsType:{name:"number"},description:"Número total de páginas"},currentPage:{required:!0,tsType:{name:"number"},description:"Página actual"},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"Función que se ejecuta cuando se cambia de página"},maxPageButtons:{required:!1,tsType:{name:"number"},description:"Número máximo de botones de página a mostrar",defaultValue:{value:"5",computed:!1}},previousLabel:{required:!1,tsType:{name:"string"},description:"Texto para el botón de página anterior",defaultValue:{value:"'Anterior'",computed:!1}},nextLabel:{required:!1,tsType:{name:"string"},description:"Texto para el botón de página siguiente",defaultValue:{value:"'Siguiente'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada",defaultValue:{value:"''",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Indica si el componente está deshabilitado",defaultValue:{value:"false",computed:!1}}}};const r={totalPages:10,currentPage:5,onPageChange:n=>console.log(`Página cambiada a: ${n}`)},K={...r,previousLabel:"Anterior",nextLabel:"Siguiente"},Q={...r,totalPages:20,maxPageButtons:5},U={...r,disabled:!0},X={...r,currentPage:1},Y={...r,currentPage:10},na={title:"Components/Pagination",component:z,tags:["autodocs"],argTypes:{totalPages:{control:{type:"number",min:1},description:"Número total de páginas"},currentPage:{control:{type:"number",min:1},description:"Página actual"},onPageChange:{action:"pageChanged",description:"Función que se ejecuta cuando se cambia de página"},maxPageButtons:{control:{type:"number",min:3,max:10},description:"Número máximo de botones de página a mostrar"},previousLabel:{control:"text",description:"Texto para el botón de página anterior"},nextLabel:{control:"text",description:"Texto para el botón de página siguiente"},disabled:{control:"boolean",description:"Indica si el componente está deshabilitado"},className:{control:"text",description:"Clase CSS personalizada"}},args:r},d={args:r,parameters:{docs:{description:{story:"Paginación estándar con 10 páginas y la página 5 seleccionada."}}}},g={args:K,parameters:{docs:{description:{story:"Paginación con etiquetas personalizadas para los botones de navegación."}}}},u={args:Q,parameters:{docs:{description:{story:"Paginación con muchas páginas que muestra puntos suspensivos para navegación."}}}},m={args:U,parameters:{docs:{description:{story:"Paginación deshabilitada que no responde a interacciones."}}}},b={args:X,parameters:{docs:{description:{story:"Paginación mostrando la primera página con el botón anterior deshabilitado."}}}},_={args:Y,parameters:{docs:{description:{story:"Paginación mostrando la última página con el botón siguiente deshabilitado."}}}};var v,x,f;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: baseArgs,
  parameters: {
    docs: {
      description: {
        story: 'Paginación estándar con 10 páginas y la página 5 seleccionada.'
      }
    }
  }
}`,...(f=(x=d.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var C,N,j;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: withCustomLabels,
  parameters: {
    docs: {
      description: {
        story: 'Paginación con etiquetas personalizadas para los botones de navegación.'
      }
    }
  }
}`,...(j=(N=g.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var q,$,S;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: withManyPages,
  parameters: {
    docs: {
      description: {
        story: 'Paginación con muchas páginas que muestra puntos suspensivos para navegación.'
      }
    }
  }
}`,...(S=($=u.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var w,L,T;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: disabledState,
  parameters: {
    docs: {
      description: {
        story: 'Paginación deshabilitada que no responde a interacciones.'
      }
    }
  }
}`,...(T=(L=m.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var M,F,A;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: firstPage,
  parameters: {
    docs: {
      description: {
        story: 'Paginación mostrando la primera página con el botón anterior deshabilitado.'
      }
    }
  }
}`,...(A=(F=b.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var I,k,V;_.parameters={..._.parameters,docs:{...(I=_.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: lastPage,
  parameters: {
    docs: {
      description: {
        story: 'Paginación mostrando la última página con el botón siguiente deshabilitado.'
      }
    }
  }
}`,...(V=(k=_.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};const ia=["Default","WithCustomLabels","WithManyPages","Disabled","FirstPage","LastPage"];export{d as Default,m as Disabled,b as FirstPage,_ as LastPage,g as WithCustomLabels,u as WithManyPages,ia as __namedExportsOrder,na as default};
