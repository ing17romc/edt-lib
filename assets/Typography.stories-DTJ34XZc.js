import{j as a}from"./jsx-runtime-D_zvdyIk.js";const I="_typographyContainer_1ejnq_1",W="_title_1ejnq_9",D="_subtitle_1ejnq_16",P="_headingExample_1ejnq_23",L="_h1_1ejnq_26",R="_h2_1ejnq_32",V="_h3_1ejnq_38",F="_h4_1ejnq_44",G="_h5_1ejnq_50",O="_h6_1ejnq_56",U="_paragraphExample_1ejnq_63",J="_paragraph_1ejnq_63",K="_bold_1ejnq_95",Q="_codeExample_1ejnq_108",X="_divider_1ejnq_119",e={typographyContainer:I,title:W,subtitle:D,headingExample:P,h1:L,h2:R,h3:V,h4:F,h5:G,h6:O,paragraphExample:U,paragraph:J,"size-8":"_size-8_1ejnq_71","size-10":"_size-10_1ejnq_74","size-12":"_size-12_1ejnq_77","size-14":"_size-14_1ejnq_80","size-16":"_size-16_1ejnq_83","size-18":"_size-18_1ejnq_86","size-20":"_size-20_1ejnq_89","size-22":"_size-22_1ejnq_92",bold:K,"line-height-simple":"_line-height-simple_1ejnq_98","line-height-doble":"_line-height-doble_1ejnq_101","line-height-triple":"_line-height-triple_1ejnq_104",codeExample:Q,divider:X},v=(o={})=>{const n="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",w=s=>{const r=`h${s}`;return a.jsxs("div",{className:e.headingExample,children:[a.jsx(r,{className:e[`h${s}`],"data-testid":`heading-${s}`,children:`<h${s}>Heading ${s}</h${s}>`}),a.jsx("code",{className:e.codeExample,children:`<h${s}>Heading ${s}</h${s}>`}),a.jsx("hr",{className:e.divider})]},`heading-${s}`)},M=(s,r="")=>a.jsxs("div",{className:e.paragraphExample,children:[a.jsx("p",{className:`${e.paragraph} ${e[`size-${s}`]}`,children:r||`This is a sample text with size ${s}px`}),a.jsx("code",{className:e.codeExample,children:`<p class="${e.paragraph} ${e[`size-${s}`]}">${r||`Text with size ${s}px`}</p>`}),a.jsx("hr",{className:e.divider})]},`paragraph-${s}`),k=s=>{const r={simple:"1.5",doble:"2",triple:"3"};return a.jsxs("div",{className:e.lineHeightExample,children:[a.jsx("p",{className:`${e.paragraph} ${e["size-22"]} ${e[`line-height-${s}`]}`,style:{"--line-height":r[s]},children:n}),a.jsx("code",{className:e.codeExample,children:`<p class="${e.paragraph} ${e["size-22"]} ${e[`line-height-${s}`]}" style="--line-height: ${r[s]};">${n}</p>`}),a.jsx("hr",{className:e.divider})]},`line-height-${s}`)},{showCodeExamples:H=!0,className:B=""}=o||{},A=[e.typographyContainer,B].filter(Boolean).join(" ");return a.jsxs("div",{className:A,"data-testid":"typography-container",children:[a.jsx("h1",{className:e.title,children:"Headings"}),a.jsx("hr",{className:e.divider}),[1,2,3,4,5,6].map(w),a.jsx("h1",{className:e.title,children:"Paragraphs"}),a.jsx("hr",{className:e.divider}),["22","20","18","16","14","12","10","8"].map(s=>M(s,s==="22"?n:"")),a.jsxs("div",{className:e.paragraphExample,children:[a.jsx("p",{className:`${e.paragraph} ${e["size-22"]} ${e.bold}`,children:n}),H&&a.jsx("code",{className:e.codeExample,"data-testid":"code-example",children:`<p class="${e.paragraph} ${e["size-22"]} ${e.bold}">${n}</p>`}),a.jsx("hr",{className:e.divider})]}),a.jsx("h2",{className:e.subtitle,children:"Line Height Examples"}),a.jsx("hr",{className:e.divider}),["simple","doble","triple"].map(k)]})};v.__docgenInfo={description:`Typography

Este componente muestra ejemplos de estilos tipográficos (headings y párrafos) para la librería EDT.
Útil para visualizar y validar la apariencia de los estilos definidos en la librería.

@param props - Props del componente Typography (actualmente no recibe ninguna, reservado para futuras extensiones).
@returns Un bloque de React Elements que muestra ejemplos de headings y párrafos con diferentes estilos.`,methods:[],displayName:"Typography",props:{showCodeExamples:{required:!1,tsType:{name:"boolean"},description:`Si es verdadero, muestra ejemplos de código para cada elemento tipográfico.
@default true`},className:{required:!1,tsType:{name:"string"},description:"Clase CSS adicional para el contenedor principal."}}};const Y={showCodeExamples:!0,className:"test-class"},ee={title:"Static/Typography",component:v,tags:["autodocs","static"],parameters:{componentSubtitle:"Guía de estilos tipográficos",docs:{description:{component:"Muestra ejemplos de los estilos tipográficos disponibles en la aplicación, incluyendo encabezados (h1-h6), párrafos con diferentes tamaños y ejemplos de interlineado."}}},argTypes:{showCodeExamples:{control:"boolean",description:"Muestra ejemplos de código para cada elemento tipográfico",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},className:{control:"text",description:"Clase CSS adicional para el contenedor principal",table:{type:{summary:"string"}}}},args:{...Y},decorators:[o=>a.jsx("div",{style:{maxWidth:"800px",margin:"0 auto",padding:"2rem"},children:a.jsx(o,{})})]},i={args:{showCodeExamples:!0},parameters:{docs:{description:{story:"Muestra todos los estilos tipográficos con ejemplos de código para cada elemento."}}}},t={args:{showCodeExamples:!1},parameters:{docs:{description:{story:"Muestra los estilos tipográficos sin los ejemplos de código, ideal para revisiones de diseño."}}}},p={args:{className:"custom-typography",showCodeExamples:!0},parameters:{docs:{description:{story:"Muestra cómo aplicar una clase CSS personalizada al contenedor principal del componente."}}},decorators:[o=>a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
            .custom-typography {
              border: 2px dashed #e0e0e0;
              border-radius: 8px;
              padding: 1.5rem;
              background-color: #f9f9f9;
            }
            .custom-typography h1,
            .custom-typography h2 {
              color: #2c3e50;
            }
          `}),a.jsx(o,{})]})]},d={args:{showCodeExamples:!1},parameters:{docs:{description:{story:"Ejemplo del componente Typography en un contexto similar al de una aplicación real."}}},decorators:[o=>a.jsxs("div",{className:"app-layout",children:[a.jsxs("header",{style:{backgroundColor:"#f5f5f5",padding:"1rem",borderBottom:"1px solid #e0e0e0",marginBottom:"2rem"},children:[a.jsx("h1",{style:{margin:0},children:"Aplicación de Ejemplo"}),a.jsx("p",{style:{margin:"0.5rem 0 0",color:"#666"},children:"Barra de navegación"})]}),a.jsx("main",{style:{padding:"0 1rem"},children:a.jsx(o,{})}),a.jsx("footer",{style:{marginTop:"2rem",padding:"1rem",backgroundColor:"#f5f5f5",borderTop:"1px solid #e0e0e0",textAlign:"center",fontSize:"0.875rem",color:"#666"},children:"© 2023 Mi Aplicación. Todos los derechos reservados."})]})]};var l,c,m,h,g;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    showCodeExamples: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Muestra todos los estilos tipográficos con ejemplos de código para cada elemento.'
      }
    }
  }
}`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source},description:{story:`## Vista por defecto

Muestra todos los estilos tipográficos con ejemplos de código para cada elemento.
Incluye encabezados (h1-h6), párrafos con diferentes tamaños y ejemplos de interlineado.`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.description}}};var u,x,y,j,_;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    showCodeExamples: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Muestra los estilos tipográficos sin los ejemplos de código, ideal para revisiones de diseño.'
      }
    }
  }
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source},description:{story:`## Sin ejemplos de código

Muestra los estilos tipográficos sin los ejemplos de código, útil para una vista más limpia.`,...(_=(j=t.parameters)==null?void 0:j.docs)==null?void 0:_.description}}};var f,b,E,$,C;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    className: 'custom-typography',
    showCodeExamples: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Muestra cómo aplicar una clase CSS personalizada al contenedor principal del componente.'
      }
    }
  },
  decorators: [Story => <>
        <style>
          {\`
            .custom-typography {
              border: 2px dashed #e0e0e0;
              border-radius: 8px;
              padding: 1.5rem;
              background-color: #f9f9f9;
            }
            .custom-typography h1,
            .custom-typography h2 {
              color: #2c3e50;
            }
          \`}
        </style>
        <Story />
      </>]
}`,...(E=(b=p.parameters)==null?void 0:b.docs)==null?void 0:E.source},description:{story:`## Con clase personalizada

Demuestra cómo se puede personalizar el componente aplicando una clase CSS personalizada.`,...(C=($=p.parameters)==null?void 0:$.docs)==null?void 0:C.description}}};var N,q,z,S,T;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    showCodeExamples: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo del componente Typography en un contexto similar al de una aplicación real.'
      }
    }
  },
  decorators: [Story => <div className="app-layout">
        <header style={{
      backgroundColor: '#f5f5f5',
      padding: '1rem',
      borderBottom: '1px solid #e0e0e0',
      marginBottom: '2rem'
    }}>
          <h1 style={{
        margin: 0
      }}>Aplicación de Ejemplo</h1>
          <p style={{
        margin: '0.5rem 0 0',
        color: '#666'
      }}>Barra de navegación</p>
        </header>
        
        <main style={{
      padding: '0 1rem'
    }}>
          <Story />
        </main>
        
        <footer style={{
      marginTop: '2rem',
      padding: '1rem',
      backgroundColor: '#f5f5f5',
      borderTop: '1px solid #e0e0e0',
      textAlign: 'center',
      fontSize: '0.875rem',
      color: '#666'
    }}>
          © 2023 Mi Aplicación. Todos los derechos reservados.
        </footer>
      </div>]
}`,...(z=(q=d.parameters)==null?void 0:q.docs)==null?void 0:z.source},description:{story:`## En contexto

Muestra el componente Typography en un contexto similar al de una aplicación real,
con un encabezado, contenido y pie de página.`,...(T=(S=d.parameters)==null?void 0:S.docs)==null?void 0:T.description}}};const ae=["Default","WithoutCodeExamples","WithCustomClass","InContext"];export{i as Default,d as InContext,p as WithCustomClass,t as WithoutCodeExamples,ae as __namedExportsOrder,ee as default};
