import{P as F}from"./index-5-uUbNqI.js";import{C as e}from"./types-D2sN4igU.js";import"./jsx-runtime-D_zvdyIk.js";import"./classNames-CqjykrQM.js";const a={totalPages:10,currentPage:5,size:e.MEDIUM,onPageChange:W=>console.log(`Página cambiada a: ${W}`)},G={...a,previousLabel:"Anterior",nextLabel:"Siguiente"},I={...a,totalPages:20,maxPageButtons:5},N={...a,disabled:!0},O={...a,currentPage:1},R={...a,currentPage:10},B={...a,size:e.SMALL},U={...a,size:e.LARGE},H={title:"Components/Pagination",component:F,tags:["autodocs"],argTypes:{totalPages:{control:{type:"number",min:1},description:"Número total de páginas"},currentPage:{control:{type:"number",min:1},description:"Página actual"},onPageChange:{action:"pageChanged",description:"Función que se ejecuta cuando se cambia de página"},maxPageButtons:{control:{type:"number",min:3,max:10},description:"Número máximo de botones de página a mostrar"},previousLabel:{control:"text",description:"Texto para el botón de página anterior"},nextLabel:{control:"text",description:"Texto para el botón de página siguiente"},disabled:{control:"boolean",description:"Indica si el componente está deshabilitado"},className:{control:"text",description:"Clase CSS personalizada"},size:{control:"select",options:Object.values(e),description:"Tamaño del componente",table:{type:{summary:Object.values(e).join(" | ")},defaultValue:{summary:e.MEDIUM}}}},args:a},s={args:a,parameters:{docs:{description:{story:"Paginación estándar con 10 páginas y la página 5 seleccionada."}}}},n={args:G,parameters:{docs:{description:{story:"Paginación con etiquetas personalizadas para los botones de navegación."}}}},r={args:I,parameters:{docs:{description:{story:"Paginación con muchas páginas que muestra puntos suspensivos para navegación."}}}},o={args:N,parameters:{docs:{description:{story:"Paginación deshabilitada que no responde a interacciones."}}}},t={args:O,parameters:{docs:{description:{story:"Paginación mostrando la primera página con el botón anterior deshabilitado."}}}},i={args:R,parameters:{docs:{description:{story:"Paginación mostrando la última página."}}}},c={args:B,parameters:{docs:{description:{story:"Paginación con tamaño pequeño (SMALL)."}}}},p={args:U,parameters:{docs:{description:{story:"Paginación con tamaño grande (LARGE)."}}}};var d,m,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: baseArgs,
  parameters: {
    docs: {
      description: {
        story: 'Paginación estándar con 10 páginas y la página 5 seleccionada.'
      }
    }
  }
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var l,u,P;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: withCustomLabels,
  parameters: {
    docs: {
      description: {
        story: 'Paginación con etiquetas personalizadas para los botones de navegación.'
      }
    }
  }
}`,...(P=(u=n.parameters)==null?void 0:u.docs)==null?void 0:P.source}}};var b,y,S;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: withManyPages,
  parameters: {
    docs: {
      description: {
        story: 'Paginación con muchas páginas que muestra puntos suspensivos para navegación.'
      }
    }
  }
}`,...(S=(y=r.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var L,h,z;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: disabledState,
  parameters: {
    docs: {
      description: {
        story: 'Paginación deshabilitada que no responde a interacciones.'
      }
    }
  }
}`,...(z=(h=o.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var x,C,M;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: firstPage,
  parameters: {
    docs: {
      description: {
        story: 'Paginación mostrando la primera página con el botón anterior deshabilitado.'
      }
    }
  }
}`,...(M=(C=t.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var v,q,A;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: lastPage,
  parameters: {
    docs: {
      description: {
        story: 'Paginación mostrando la última página.'
      }
    }
  }
}`,...(A=(q=i.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var f,D,E;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: smallSize,
  parameters: {
    docs: {
      description: {
        story: 'Paginación con tamaño pequeño (SMALL).'
      }
    }
  }
}`,...(E=(D=c.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var j,w,T;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: largeSize,
  parameters: {
    docs: {
      description: {
        story: 'Paginación con tamaño grande (LARGE).'
      }
    }
  }
}`,...(T=(w=p.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const J=["Default","WithCustomLabels","WithManyPages","Disabled","FirstPage","LastPage","SmallSize","LargeSize"];export{s as Default,o as Disabled,t as FirstPage,p as LargeSize,i as LastPage,c as SmallSize,n as WithCustomLabels,r as WithManyPages,J as __namedExportsOrder,H as default};
