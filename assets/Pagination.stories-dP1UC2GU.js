import{P as w}from"./index-BVDJ-I2T.js";import"./jsx-runtime-D_zvdyIk.js";const a={totalPages:10,currentPage:5,onPageChange:f=>console.log(`Página cambiada a: ${f}`)},D={...a,previousLabel:"Anterior",nextLabel:"Siguiente"},M={...a,totalPages:20,maxPageButtons:5},W={...a,disabled:!0},z={...a,currentPage:1},A={...a,currentPage:10},T={title:"Components/Pagination",component:w,tags:["autodocs"],argTypes:{totalPages:{control:{type:"number",min:1},description:"Número total de páginas"},currentPage:{control:{type:"number",min:1},description:"Página actual"},onPageChange:{action:"pageChanged",description:"Función que se ejecuta cuando se cambia de página"},maxPageButtons:{control:{type:"number",min:3,max:10},description:"Número máximo de botones de página a mostrar"},previousLabel:{control:"text",description:"Texto para el botón de página anterior"},nextLabel:{control:"text",description:"Texto para el botón de página siguiente"},disabled:{control:"boolean",description:"Indica si el componente está deshabilitado"},className:{control:"text",description:"Clase CSS personalizada"}},args:a},e={args:a,parameters:{docs:{description:{story:"Paginación estándar con 10 páginas y la página 5 seleccionada."}}}},s={args:D,parameters:{docs:{description:{story:"Paginación con etiquetas personalizadas para los botones de navegación."}}}},n={args:M,parameters:{docs:{description:{story:"Paginación con muchas páginas que muestra puntos suspensivos para navegación."}}}},r={args:W,parameters:{docs:{description:{story:"Paginación deshabilitada que no responde a interacciones."}}}},o={args:z,parameters:{docs:{description:{story:"Paginación mostrando la primera página con el botón anterior deshabilitado."}}}},t={args:A,parameters:{docs:{description:{story:"Paginación mostrando la última página con el botón siguiente deshabilitado."}}}};var i,c,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: baseArgs,
  parameters: {
    docs: {
      description: {
        story: 'Paginación estándar con 10 páginas y la página 5 seleccionada.'
      }
    }
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,g,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: withCustomLabels,
  parameters: {
    docs: {
      description: {
        story: 'Paginación con etiquetas personalizadas para los botones de navegación.'
      }
    }
  }
}`,...(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var l,u,P;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: withManyPages,
  parameters: {
    docs: {
      description: {
        story: 'Paginación con muchas páginas que muestra puntos suspensivos para navegación.'
      }
    }
  }
}`,...(P=(u=n.parameters)==null?void 0:u.docs)==null?void 0:P.source}}};var b,y,h;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: disabledState,
  parameters: {
    docs: {
      description: {
        story: 'Paginación deshabilitada que no responde a interacciones.'
      }
    }
  }
}`,...(h=(y=r.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var x,S,C;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: firstPage,
  parameters: {
    docs: {
      description: {
        story: 'Paginación mostrando la primera página con el botón anterior deshabilitado.'
      }
    }
  }
}`,...(C=(S=o.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var L,v,q;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: lastPage,
  parameters: {
    docs: {
      description: {
        story: 'Paginación mostrando la última página con el botón siguiente deshabilitado.'
      }
    }
  }
}`,...(q=(v=t.parameters)==null?void 0:v.docs)==null?void 0:q.source}}};const B=["Default","WithCustomLabels","WithManyPages","Disabled","FirstPage","LastPage"];export{e as Default,r as Disabled,o as FirstPage,t as LastPage,s as WithCustomLabels,n as WithManyPages,B as __namedExportsOrder,T as default};
