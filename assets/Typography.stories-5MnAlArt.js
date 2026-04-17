import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Ht as n,_t as r}from"./iframe-BrtTKpdh.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b=t((()=>{i=`_typographyContainer_a0rpv_1`,a=`_title_a0rpv_12`,o=`_subtitle_a0rpv_19`,s=`_headingExample_a0rpv_26`,c=`_h1_a0rpv_29`,l=`_h2_a0rpv_35`,u=`_h3_a0rpv_41`,d=`_h4_a0rpv_47`,f=`_h5_a0rpv_53`,p=`_h6_a0rpv_59`,m=`_paragraphExample_a0rpv_66`,h=`_paragraph_a0rpv_66`,g=`_bold_a0rpv_98`,_=`_codeExample_a0rpv_111`,v=`_divider_a0rpv_124`,y={typographyContainer:i,title:a,subtitle:o,headingExample:s,h1:c,h2:l,h3:u,h4:d,h5:f,h6:p,paragraphExample:m,paragraph:h,"size-8":`_size-8_a0rpv_74`,"size-10":`_size-10_a0rpv_77`,"size-12":`_size-12_a0rpv_80`,"size-14":`_size-14_a0rpv_83`,"size-16":`_size-16_a0rpv_86`,"size-18":`_size-18_a0rpv_89`,"size-20":`_size-20_a0rpv_92`,"size-22":`_size-22_a0rpv_95`,bold:g,"line-height-simple":`_line-height-simple_a0rpv_101`,"line-height-doble":`_line-height-doble_a0rpv_104`,"line-height-triple":`_line-height-triple_a0rpv_107`,codeExample:_,divider:v}})),x,S,C,w=t((()=>{x=e(n(),1),b(),S=r(),C=(e={})=>{let t=`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,n=e=>{let t=`h${e}`;return(0,S.jsxs)(`div`,{className:y.headingExample,children:[x.createElement(t,{className:y[`h${e}`],"data-testid":`heading-${e}`},`<h${e}>Heading ${e}</h${e}>`),(0,S.jsx)(`code`,{className:y.codeExample,children:`<h${e}>Heading ${e}</h${e}>`}),(0,S.jsx)(`hr`,{className:y.divider})]},`heading-${e}`)},r=(e,t=``)=>(0,S.jsxs)(`div`,{className:y.paragraphExample,children:[(0,S.jsx)(`p`,{className:`${y.paragraph} ${y[`size-${e}`]}`,children:t||`This is a sample text with size ${e}px`}),(0,S.jsx)(`code`,{className:y.codeExample,children:`<p class="${y.paragraph} ${y[`size-${e}`]}">${t||`Text with size ${e}px`}</p>`}),(0,S.jsx)(`hr`,{className:y.divider})]},`paragraph-${e}`),i=e=>{let n={simple:`1.5`,doble:`2`,triple:`3`};return(0,S.jsxs)(`div`,{className:y.lineHeightExample,children:[(0,S.jsx)(`p`,{className:`${y.paragraph} ${y[`size-22`]} ${y[`line-height-${e}`]}`,style:{"--line-height":n[e]},children:t}),(0,S.jsx)(`code`,{className:y.codeExample,children:`<p class="${y.paragraph} ${y[`size-22`]} ${y[`line-height-${e}`]}" style="--line-height: ${n[e]};">${t}</p>`}),(0,S.jsx)(`hr`,{className:y.divider})]},`line-height-${e}`)},{showCodeExamples:a=!0,className:o=``}=e||{};return(0,S.jsxs)(`div`,{className:[y.typographyContainer,o].filter(Boolean).join(` `),"data-testid":`typography-container`,children:[(0,S.jsx)(`h1`,{className:y.title,children:`Headings`}),(0,S.jsx)(`hr`,{className:y.divider}),[1,2,3,4,5,6].map(n),(0,S.jsx)(`h1`,{className:y.title,children:`Paragraphs`}),(0,S.jsx)(`hr`,{className:y.divider}),[`22`,`20`,`18`,`16`,`14`,`12`,`10`,`8`].map(e=>r(e,e===`22`?t:``)),(0,S.jsxs)(`div`,{className:y.paragraphExample,children:[(0,S.jsx)(`p`,{className:`${y.paragraph} ${y[`size-22`]} ${y.bold}`,children:t}),a&&(0,S.jsx)(`code`,{className:y.codeExample,"data-testid":`code-example`,children:`<p class="${y.paragraph} ${y[`size-22`]} ${y.bold}">${t}</p>`}),(0,S.jsx)(`hr`,{className:y.divider})]}),(0,S.jsx)(`h2`,{className:y.subtitle,children:`Line Height Examples`}),(0,S.jsx)(`hr`,{className:y.divider}),[`simple`,`doble`,`triple`].map(i)]})},C.__docgenInfo={description:`Typography\r
\r
This component displays examples of typographic styles (headings and paragraphs) for the EDT library.\r
Useful for visualizing and validating the appearance of styles defined in the library.\r
\r
@param props - Typography component props (currently accepts none, reserved for future extensions).\r
@returns A block of React Elements that displays examples of headings and paragraphs with different styles.`,methods:[],displayName:`Typography`,props:{showCodeExamples:{required:!1,tsType:{name:`boolean`},description:`If true, shows code examples for each typographic element.\r
@default true`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class for the main container.`}}}})),T,E=t((()=>{T={showCodeExamples:!0,className:`test-class`}})),D,O,k,A,j,M,N;t((()=>{n(),w(),E(),D=r(),O={title:`Static/Typography`,component:C,tags:[`autodocs`,`static`],parameters:{componentSubtitle:`Typographic styles guide`,docs:{description:{component:`Shows examples of the typographic styles available in the application, including headings (h1-h6), paragraphs with different sizes, and line-height examples.`}}},argTypes:{showCodeExamples:{control:`boolean`,description:`Shows code examples for each typographic element`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},className:{control:`text`,description:`Additional CSS class for the main container`,table:{type:{summary:`string`}}}},args:{...T},decorators:[e=>(0,D.jsx)(`div`,{style:{maxWidth:`800px`,margin:`0 auto`,padding:`2rem`},children:(0,D.jsx)(e,{})})]},k={args:{showCodeExamples:!0},parameters:{docs:{description:{story:`Shows all typographic styles with code examples for each element.`}}}},A={args:{showCodeExamples:!1},parameters:{docs:{description:{story:`Shows the typographic styles without code examples, ideal for design reviews.`}}}},j={args:{className:`custom-typography`,showCodeExamples:!0},parameters:{docs:{description:{story:`Shows how to apply a custom CSS class to the main container of the component.`}}},decorators:[e=>(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(`style`,{children:`
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
          `}),(0,D.jsx)(e,{})]})]},M={args:{showCodeExamples:!1},parameters:{docs:{description:{story:`Example of the Typography component in a context similar to a real application.`}}},decorators:[e=>(0,D.jsxs)(`div`,{className:`app-layout`,children:[(0,D.jsxs)(`header`,{style:{backgroundColor:`#f5f5f5`,padding:`1rem`,borderBottom:`1px solid #e0e0e0`,marginBottom:`2rem`},children:[(0,D.jsx)(`h1`,{style:{margin:0},children:`Example Application`}),(0,D.jsx)(`p`,{style:{margin:`0.5rem 0 0`,color:`#666`},children:`Navigation bar`})]}),(0,D.jsx)(`main`,{style:{padding:`0 1rem`},children:(0,D.jsx)(e,{})}),(0,D.jsx)(`footer`,{style:{marginTop:`2rem`,padding:`1rem`,backgroundColor:`#f5f5f5`,borderTop:`1px solid #e0e0e0`,textAlign:`center`,fontSize:`0.875rem`,color:`#666`},children:`© 2023 My Application. All rights reserved.`})]})]},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    showCodeExamples: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows all typographic styles with code examples for each element.'
      }
    }
  }
}`,...k.parameters?.docs?.source},description:{story:`## Default view\r
\r
Shows all typographic styles with code examples for each element.\r
Includes headings (h1-h6), paragraphs with different sizes, and line-height examples.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    showCodeExamples: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the typographic styles without code examples, ideal for design reviews.'
      }
    }
  }
}`,...A.parameters?.docs?.source},description:{story:`## Without code examples\r
\r
Shows the typographic styles without code examples, useful for a cleaner view.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'custom-typography',
    showCodeExamples: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how to apply a custom CSS class to the main container of the component.'
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
}`,...j.parameters?.docs?.source},description:{story:`## With custom class\r
\r
Demonstrates how the component can be customized by applying a custom CSS class.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    showCodeExamples: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of the Typography component in a context similar to a real application.'
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
      }}>Example Application</h1>\r
          <p style={{
        margin: '0.5rem 0 0',
        color: '#666'
      }}>Navigation bar</p>\r
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
          © 2023 My Application. All rights reserved.\r
        </footer>\r
      </div>]
}`,...M.parameters?.docs?.source},description:{story:`## In context\r
\r
Shows the Typography component in a context similar to a real application,\r
with a header, content, and footer.`,...M.parameters?.docs?.description}}},N=[`Default`,`WithoutCodeExamples`,`WithCustomClass`,`InContext`]}))();export{k as Default,M as InContext,j as WithCustomClass,A as WithoutCodeExamples,N as __namedExportsOrder,O as default};