import{r as e,t}from"./iframe-YpqvHZo3.js";import{t as n}from"./jsx-runtime-ChNUh70B.js";var r=e(t(),1),i=`_typographyContainer_1ejnq_1`,a=`_title_1ejnq_9`,o=`_subtitle_1ejnq_16`,s=`_headingExample_1ejnq_23`,c=`_h1_1ejnq_26`,l=`_h2_1ejnq_32`,u=`_h3_1ejnq_38`,d=`_h4_1ejnq_44`,f=`_h5_1ejnq_50`,p=`_h6_1ejnq_56`,m=`_paragraphExample_1ejnq_63`,h=`_paragraph_1ejnq_63`,g=`_bold_1ejnq_95`,_=`_codeExample_1ejnq_108`,v=`_divider_1ejnq_119`,y={typographyContainer:i,title:a,subtitle:o,headingExample:s,h1:c,h2:l,h3:u,h4:d,h5:f,h6:p,paragraphExample:m,paragraph:h,"size-8":`_size-8_1ejnq_71`,"size-10":`_size-10_1ejnq_74`,"size-12":`_size-12_1ejnq_77`,"size-14":`_size-14_1ejnq_80`,"size-16":`_size-16_1ejnq_83`,"size-18":`_size-18_1ejnq_86`,"size-20":`_size-20_1ejnq_89`,"size-22":`_size-22_1ejnq_92`,bold:g,"line-height-simple":`_line-height-simple_1ejnq_98`,"line-height-doble":`_line-height-doble_1ejnq_101`,"line-height-triple":`_line-height-triple_1ejnq_104`,codeExample:_,divider:v},b=n(),x=(e={})=>{let t=`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,n=e=>{let t=`h${e}`;return(0,b.jsxs)(`div`,{className:y.headingExample,children:[r.createElement(t,{className:y[`h${e}`],"data-testid":`heading-${e}`},`<h${e}>Heading ${e}</h${e}>`),(0,b.jsx)(`code`,{className:y.codeExample,children:`<h${e}>Heading ${e}</h${e}>`}),(0,b.jsx)(`hr`,{className:y.divider})]},`heading-${e}`)},i=(e,t=``)=>(0,b.jsxs)(`div`,{className:y.paragraphExample,children:[(0,b.jsx)(`p`,{className:`${y.paragraph} ${y[`size-${e}`]}`,children:t||`This is a sample text with size ${e}px`}),(0,b.jsx)(`code`,{className:y.codeExample,children:`<p class="${y.paragraph} ${y[`size-${e}`]}">${t||`Text with size ${e}px`}</p>`}),(0,b.jsx)(`hr`,{className:y.divider})]},`paragraph-${e}`),a=e=>{let n={simple:`1.5`,doble:`2`,triple:`3`};return(0,b.jsxs)(`div`,{className:y.lineHeightExample,children:[(0,b.jsx)(`p`,{className:`${y.paragraph} ${y[`size-22`]} ${y[`line-height-${e}`]}`,style:{"--line-height":n[e]},children:t}),(0,b.jsx)(`code`,{className:y.codeExample,children:`<p class="${y.paragraph} ${y[`size-22`]} ${y[`line-height-${e}`]}" style="--line-height: ${n[e]};">${t}</p>`}),(0,b.jsx)(`hr`,{className:y.divider})]},`line-height-${e}`)},{showCodeExamples:o=!0,className:s=``}=e||{};return(0,b.jsxs)(`div`,{className:[y.typographyContainer,s].filter(Boolean).join(` `),"data-testid":`typography-container`,children:[(0,b.jsx)(`h1`,{className:y.title,children:`Headings`}),(0,b.jsx)(`hr`,{className:y.divider}),[1,2,3,4,5,6].map(n),(0,b.jsx)(`h1`,{className:y.title,children:`Paragraphs`}),(0,b.jsx)(`hr`,{className:y.divider}),[`22`,`20`,`18`,`16`,`14`,`12`,`10`,`8`].map(e=>i(e,e===`22`?t:``)),(0,b.jsxs)(`div`,{className:y.paragraphExample,children:[(0,b.jsx)(`p`,{className:`${y.paragraph} ${y[`size-22`]} ${y.bold}`,children:t}),o&&(0,b.jsx)(`code`,{className:y.codeExample,"data-testid":`code-example`,children:`<p class="${y.paragraph} ${y[`size-22`]} ${y.bold}">${t}</p>`}),(0,b.jsx)(`hr`,{className:y.divider})]}),(0,b.jsx)(`h2`,{className:y.subtitle,children:`Line Height Examples`}),(0,b.jsx)(`hr`,{className:y.divider}),[`simple`,`doble`,`triple`].map(a)]})};x.__docgenInfo={description:`Typography\r
\r
Este componente muestra ejemplos de estilos tipográficos (headings y párrafos) para la librería EDT.\r
Útil para visualizar y validar la apariencia de los estilos definidos en la librería.\r
\r
@param props - Props del componente Typography (actualmente no recibe ninguna, reservado para futuras extensiones).\r
@returns Un bloque de React Elements que muestra ejemplos de headings y párrafos con diferentes estilos.`,methods:[],displayName:`Typography`,props:{showCodeExamples:{required:!1,tsType:{name:`boolean`},description:`Si es verdadero, muestra ejemplos de código para cada elemento tipográfico.\r
@default true`},className:{required:!1,tsType:{name:`string`},description:`Clase CSS adicional para el contenedor principal.`}}};var S={title:`Static/Typography`,component:x,tags:[`autodocs`,`static`],parameters:{componentSubtitle:`Guía de estilos tipográficos`,docs:{description:{component:`Muestra ejemplos de los estilos tipográficos disponibles en la aplicación, incluyendo encabezados (h1-h6), párrafos con diferentes tamaños y ejemplos de interlineado.`}}},argTypes:{showCodeExamples:{control:`boolean`,description:`Muestra ejemplos de código para cada elemento tipográfico`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},className:{control:`text`,description:`Clase CSS adicional para el contenedor principal`,table:{type:{summary:`string`}}}},args:{showCodeExamples:!0,className:`test-class`},decorators:[e=>(0,b.jsx)(`div`,{style:{maxWidth:`800px`,margin:`0 auto`,padding:`2rem`},children:(0,b.jsx)(e,{})})]},C={args:{showCodeExamples:!0},parameters:{docs:{description:{story:`Muestra todos los estilos tipográficos con ejemplos de código para cada elemento.`}}}},w={args:{showCodeExamples:!1},parameters:{docs:{description:{story:`Muestra los estilos tipográficos sin los ejemplos de código, ideal para revisiones de diseño.`}}}},T={args:{className:`custom-typography`,showCodeExamples:!0},parameters:{docs:{description:{story:`Muestra cómo aplicar una clase CSS personalizada al contenedor principal del componente.`}}},decorators:[e=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`style`,{children:`
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
          `}),(0,b.jsx)(e,{})]})]},E={args:{showCodeExamples:!1},parameters:{docs:{description:{story:`Ejemplo del componente Typography en un contexto similar al de una aplicación real.`}}},decorators:[e=>(0,b.jsxs)(`div`,{className:`app-layout`,children:[(0,b.jsxs)(`header`,{style:{backgroundColor:`#f5f5f5`,padding:`1rem`,borderBottom:`1px solid #e0e0e0`,marginBottom:`2rem`},children:[(0,b.jsx)(`h1`,{style:{margin:0},children:`Aplicación de Ejemplo`}),(0,b.jsx)(`p`,{style:{margin:`0.5rem 0 0`,color:`#666`},children:`Barra de navegación`})]}),(0,b.jsx)(`main`,{style:{padding:`0 1rem`},children:(0,b.jsx)(e,{})}),(0,b.jsx)(`footer`,{style:{marginTop:`2rem`,padding:`1rem`,backgroundColor:`#f5f5f5`,borderTop:`1px solid #e0e0e0`,textAlign:`center`,fontSize:`0.875rem`,color:`#666`},children:`© 2023 Mi Aplicación. Todos los derechos reservados.`})]})]};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`## Vista por defecto\r
\r
Muestra todos los estilos tipográficos con ejemplos de código para cada elemento.\r
Incluye encabezados (h1-h6), párrafos con diferentes tamaños y ejemplos de interlineado.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:`## Sin ejemplos de código\r
\r
Muestra los estilos tipográficos sin los ejemplos de código, útil para una vista más limpia.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
  decorators: [Story => <>\r
        <style>\r
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
          \`}\r
        </style>\r
        <Story />\r
      </>]
}`,...T.parameters?.docs?.source},description:{story:`## Con clase personalizada\r
\r
Demuestra cómo se puede personalizar el componente aplicando una clase CSS personalizada.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
  decorators: [Story => <div className="app-layout">\r
        <header style={{
      backgroundColor: '#f5f5f5',
      padding: '1rem',
      borderBottom: '1px solid #e0e0e0',
      marginBottom: '2rem'
    }}>\r
          <h1 style={{
        margin: 0
      }}>Aplicación de Ejemplo</h1>\r
          <p style={{
        margin: '0.5rem 0 0',
        color: '#666'
      }}>Barra de navegación</p>\r
        </header>\r
        \r
        <main style={{
      padding: '0 1rem'
    }}>\r
          <Story />\r
        </main>\r
        \r
        <footer style={{
      marginTop: '2rem',
      padding: '1rem',
      backgroundColor: '#f5f5f5',
      borderTop: '1px solid #e0e0e0',
      textAlign: 'center',
      fontSize: '0.875rem',
      color: '#666'
    }}>\r
          © 2023 Mi Aplicación. Todos los derechos reservados.\r
        </footer>\r
      </div>]
}`,...E.parameters?.docs?.source},description:{story:`## En contexto\r
\r
Muestra el componente Typography en un contexto similar al de una aplicación real,\r
con un encabezado, contenido y pie de página.`,...E.parameters?.docs?.description}}};var D=[`Default`,`WithoutCodeExamples`,`WithCustomClass`,`InContext`];export{C as Default,E as InContext,T as WithCustomClass,w as WithoutCodeExamples,D as __namedExportsOrder,S as default};