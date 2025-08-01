import{P as N}from"./index-5-uUbNqI.js";import{C as p}from"./types-D2sN4igU.js";import"./jsx-runtime-D_zvdyIk.js";import"./classNames-CqjykrQM.js";const a={totalPages:10,currentPage:5,size:p.MEDIUM,onPageChange:G=>console.log(`Página cambiada a: ${G}`)},R={...a,previousLabel:"Anterior",nextLabel:"Siguiente"},T={...a,totalPages:20,maxPageButtons:5},B={...a,disabled:!0},I={...a,currentPage:1},_={...a,currentPage:10},j={...a,size:p.SMALL},O={...a,size:p.LARGE},J={title:"Components/Pagination",component:N,tags:["autodocs"],argTypes:{totalPages:{control:{type:"number",min:1},description:"Número total de páginas"},currentPage:{control:{type:"number",min:1},description:"Página actual"},onPageChange:{action:"pageChanged",description:"Función que se ejecuta cuando se cambia de página"},maxPageButtons:{control:{type:"number",min:3,max:10},description:"Número máximo de botones de página a mostrar"},previousLabel:{control:"text",description:"Texto para el botón de página anterior"},nextLabel:{control:"text",description:"Texto para el botón de página siguiente"},disabled:{control:"boolean",description:"Indica si el componente está deshabilitado"},className:{control:"text",description:"Clase CSS personalizada"}},args:a},e={args:a,parameters:{docs:{description:{story:"Paginación estándar con 10 páginas y la página 5 seleccionada."}}}},s={args:R,parameters:{docs:{description:{story:"Paginación con etiquetas personalizadas para los botones de navegación."}}}},n={args:T,parameters:{docs:{description:{story:"Paginación con muchas páginas que muestra puntos suspensivos para navegación."}}}},r={args:B,parameters:{docs:{description:{story:"Paginación deshabilitada que no responde a interacciones."}}}},o={args:I,parameters:{docs:{description:{story:"Paginación mostrando la primera página con el botón anterior deshabilitado."}}}},t={args:_,parameters:{docs:{description:{story:"Paginación mostrando la última página."}}}},i={args:j,parameters:{docs:{description:{story:"Paginación con tamaño pequeño (SMALL)."}}}},c={args:O,parameters:{docs:{description:{story:"Paginación con tamaño grande (LARGE)."}}}};var d,g,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: baseArgs,
  parameters: {
    docs: {
      description: {
        story: 'Paginación estándar con 10 páginas y la página 5 seleccionada.'
      }
    }
  }
}`,...(m=(g=e.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var l,u,P;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: withCustomLabels,
  parameters: {
    docs: {
      description: {
        story: 'Paginación con etiquetas personalizadas para los botones de navegación.'
      }
    }
  }
}`,...(P=(u=s.parameters)==null?void 0:u.docs)==null?void 0:P.source}}};var b,S,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: withManyPages,
  parameters: {
    docs: {
      description: {
        story: 'Paginación con muchas páginas que muestra puntos suspensivos para navegación.'
      }
    }
  }
}`,...(y=(S=n.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var L,h,z;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: disabledState,
  parameters: {
    docs: {
      description: {
        story: 'Paginación deshabilitada que no responde a interacciones.'
      }
    }
  }
}`,...(z=(h=r.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var x,C,q;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: firstPage,
  parameters: {
    docs: {
      description: {
        story: 'Paginación mostrando la primera página con el botón anterior deshabilitado.'
      }
    }
  }
}`,...(q=(C=o.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var A,M,v;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: lastPage,
  parameters: {
    docs: {
      description: {
        story: 'Paginación mostrando la última página.'
      }
    }
  }
}`,...(v=(M=t.parameters)==null?void 0:M.docs)==null?void 0:v.source}}};var f,D,E;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: smallSize,
  parameters: {
    docs: {
      description: {
        story: 'Paginación con tamaño pequeño (SMALL).'
      }
    }
  }
}`,...(E=(D=i.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var w,W,F;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: largeSize,
  parameters: {
    docs: {
      description: {
        story: 'Paginación con tamaño grande (LARGE).'
      }
    }
  }
}`,...(F=(W=c.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};const K=["Default","WithCustomLabels","WithManyPages","Disabled","FirstPage","LastPage","SmallSize","LargeSize"];export{e as Default,r as Disabled,o as FirstPage,c as LargeSize,t as LastPage,i as SmallSize,s as WithCustomLabels,n as WithManyPages,K as __namedExportsOrder,J as default};
