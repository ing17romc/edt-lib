import{j as e}from"./jsx-runtime-D_zvdyIk.js";const T="_layout_lc8f6_1",F={layout:T},d=({children:a,className:o=""})=>e.jsx("div",{className:`${F.layout} ${o}`,children:a});d.__docgenInfo={description:"",methods:[],displayName:"Layout",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const L="_navbar_1ujq6_1",M="_navbarContent_1ujq6_10",E="_brand_1ujq6_19",w="_logo_1ujq6_25",D="_title_1ujq6_30",S="_nav_1ujq6_1",n={navbar:L,navbarContent:M,brand:E,logo:w,title:D,nav:S},p=({children:a,className:o="",logo:s,title:i})=>e.jsx("header",{className:`${n.navbar} ${o}`,children:e.jsxs("div",{className:n.navbarContent,children:[e.jsxs("div",{className:n.brand,children:[s&&e.jsx("div",{className:n.logo,children:s}),i&&e.jsx("h1",{className:n.title,children:i})]}),a&&e.jsx("nav",{className:n.nav,children:a})]})});p.__docgenInfo={description:"",methods:[],displayName:"NavBar",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},logo:{required:!1,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};const k="_footer_1xhhm_1",z="_footerContent_1xhhm_8",A="_copyright_1xhhm_16",h={footer:k,footerContent:z,copyright:A},r=({children:a,className:o="",copyright:s="Todos los derechos reservados",year:i=new Date().getFullYear()})=>e.jsx("footer",{className:`${h.footer} ${o}`,children:e.jsxs("div",{className:h.footerContent,children:[a,e.jsxs("div",{className:h.copyright,children:["© ",i," ",s]})]})});r.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},copyright:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Todos los derechos reservados'",computed:!1}},year:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"new Date().getFullYear()",computed:!0}}}};const B={title:"Layout/Layout",component:d,tags:["autodocs"],argTypes:{className:{control:"text",description:"Clase CSS adicional para el contenedor principal"}}},m=()=>e.jsx("div",{style:{width:"32px",height:"32px",backgroundColor:"var(--color-primary)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold",borderRadius:"4px"},children:"L"}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"#inicio",style:{textDecoration:"none",color:"inherit"},children:"Inicio"}),e.jsx("a",{href:"#acerca",style:{textDecoration:"none",color:"inherit"},children:"Acerca de"}),e.jsx("a",{href:"#contacto",style:{textDecoration:"none",color:"inherit"},children:"Contacto"})]}),u=()=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",flexWrap:"wrap",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Enlaces útiles"}),e.jsxs("ul",{style:{listStyle:"none",padding:0},children:[e.jsx("li",{children:e.jsx("a",{href:"#ayuda",style:{textDecoration:"none",color:"inherit"},children:"Ayuda"})}),e.jsx("li",{children:e.jsx("a",{href:"#terminos",style:{textDecoration:"none",color:"inherit"},children:"Términos y condiciones"})}),e.jsx("li",{children:e.jsx("a",{href:"#privacidad",style:{textDecoration:"none",color:"inherit"},children:"Política de privacidad"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Contacto"}),e.jsx("p",{children:"Email: info@ejemplo.com"}),e.jsx("p",{children:"Teléfono: +123 456 7890"})]})]}),q={render:a=>e.jsxs(d,{...a,children:[e.jsx(p,{logo:e.jsx(m,{}),title:"Mi Aplicación",children:e.jsx(x,{})}),e.jsxs("main",{style:{padding:"2rem",flex:1,maxWidth:"1200px",width:"100%",margin:"0 auto"},children:[e.jsx("h2",{children:"Contenido Principal"}),e.jsx("p",{children:"Este es el contenido principal de la aplicación. Aquí iría el contenido específico de cada página."})]}),e.jsx(r,{children:e.jsx(u,{})})]})},t={...q,args:{children:e.jsxs(e.Fragment,{children:[e.jsx(p,{logo:e.jsx(m,{}),title:"Mi Aplicación",children:e.jsx(x,{})}),e.jsxs("main",{style:{padding:"2rem",flex:1,maxWidth:"1200px",width:"100%",margin:"0 auto"},children:[e.jsx("h2",{children:"Contenido Principal"}),e.jsx("p",{children:"Este es el contenido principal de la aplicación. Aquí iría el contenido específico de cada página."})]}),e.jsx(r,{children:e.jsx(u,{})})]})}},c={render:a=>e.jsxs(d,{...a,children:[e.jsxs("main",{style:{padding:"2rem",flex:1},children:[e.jsx("h2",{children:"Contenido sin barra de navegación"}),e.jsx("p",{children:"Esta es una página sin barra de navegación."})]}),e.jsx(r,{})]})},l={...q,args:{className:"mi-clase-personalizada",children:e.jsxs(e.Fragment,{children:[e.jsx(p,{logo:e.jsx(m,{}),title:"Mi Aplicación",children:e.jsx(x,{})}),e.jsxs("main",{style:{padding:"2rem",flex:1,maxWidth:"1200px",width:"100%",margin:"0 auto"},children:[e.jsx("h2",{children:"Contenido con Clase Personalizada"}),e.jsx("p",{children:"Este es un ejemplo de Layout con una clase personalizada aplicada al contenedor principal."})]}),e.jsx(r,{children:e.jsx(u,{})})]})},parameters:{docs:{description:{story:"Ejemplo de Layout con una clase CSS personalizada aplicada al contenedor principal."}}}};var j,g,y;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Template,
  args: {
    children: <>
        <NavBar logo={<MockLogo />} title="Mi Aplicación">
          <MockNav />
        </NavBar>
        <main style={{
        padding: '2rem',
        flex: 1,
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto'
      }}>
          <h2>Contenido Principal</h2>
          <p>Este es el contenido principal de la aplicación. Aquí iría el contenido específico de cada página.</p>
        </main>
        <Footer>
          <MockFooterContent />
        </Footer>
      </>
  }
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,v,_;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args: React.ComponentProps<typeof Layout>) => <Layout {...args}>
      <main style={{
      padding: '2rem',
      flex: 1
    }}>
        <h2>Contenido sin barra de navegación</h2>
        <p>Esta es una página sin barra de navegación.</p>
      </main>
      <Footer />
    </Layout>
}`,...(_=(v=c.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var C,N,b;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Template,
  args: {
    className: 'mi-clase-personalizada',
    children: <>
        <NavBar logo={<MockLogo />} title="Mi Aplicación">
          <MockNav />
        </NavBar>
        <main style={{
        padding: '2rem',
        flex: 1,
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto'
      }}>
          <h2>Contenido con Clase Personalizada</h2>
          <p>Este es un ejemplo de Layout con una clase personalizada aplicada al contenedor principal.</p>
        </main>
        <Footer>
          <MockFooterContent />
        </Footer>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de Layout con una clase CSS personalizada aplicada al contenedor principal.'
      }
    }
  }
}`,...(b=(N=l.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};const $=["Default","SinBarraDeNavegacion","ConClasePersonalizada"];export{l as ConClasePersonalizada,t as Default,c as SinBarraDeNavegacion,$ as __namedExportsOrder,B as default};
