import{j as e}from"./jsx-runtime-D_zvdyIk.js";const q="_layout_lc8f6_1",L={layout:q},r=({children:a,className:o=""})=>e.jsx("div",{className:`${L.layout} ${o}`,children:a});r.__docgenInfo={description:"",methods:[],displayName:"Layout",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const M="_navbar_1ujq6_1",T="_navbarContent_1ujq6_10",F="_brand_1ujq6_19",k="_logo_1ujq6_25",D="_title_1ujq6_30",w="_nav_1ujq6_1",n={navbar:M,navbarContent:T,brand:F,logo:k,title:D,nav:w},h=({children:a,className:o="",logo:s,title:t})=>e.jsx("header",{className:`${n.navbar} ${o}`,children:e.jsxs("div",{className:n.navbarContent,children:[e.jsxs("div",{className:n.brand,children:[s&&e.jsx("div",{className:n.logo,children:s}),t&&e.jsx("h1",{className:n.title,children:t})]}),a&&e.jsx("nav",{className:n.nav,children:a})]})});h.__docgenInfo={description:"",methods:[],displayName:"NavBar",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},logo:{required:!1,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};const E="_footer_1xhhm_1",z="_footerContent_1xhhm_8",A="_copyright_1xhhm_16",p={footer:E,footerContent:z,copyright:A},d=({children:a,className:o="",copyright:s="Todos los derechos reservados",year:t=new Date().getFullYear()})=>e.jsx("footer",{className:`${p.footer} ${o}`,children:e.jsxs("div",{className:p.footerContent,children:[a,e.jsxs("div",{className:p.copyright,children:["© ",t," ",s]})]})});d.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},copyright:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Todos los derechos reservados'",computed:!1}},year:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"new Date().getFullYear()",computed:!0}}}};const m=()=>e.jsx("div",{style:{width:"32px",height:"32px",backgroundColor:"var(--color-primary)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold",borderRadius:"4px"},children:"L"}),u=()=>e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"#inicio",style:{textDecoration:"none",color:"inherit"},children:"Inicio"}),e.jsx("a",{href:"#acerca",style:{textDecoration:"none",color:"inherit"},children:"Acerca de"}),e.jsx("a",{href:"#contacto",style:{textDecoration:"none",color:"inherit"},children:"Contacto"})]}),x=()=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",flexWrap:"wrap",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Enlaces útiles"}),e.jsxs("ul",{style:{listStyle:"none",padding:0},children:[e.jsx("li",{children:e.jsx("a",{href:"#ayuda",style:{textDecoration:"none",color:"inherit"},children:"Ayuda"})}),e.jsx("li",{children:e.jsx("a",{href:"#terminos",style:{textDecoration:"none",color:"inherit"},children:"Términos y condiciones"})}),e.jsx("li",{children:e.jsx("a",{href:"#privacidad",style:{textDecoration:"none",color:"inherit"},children:"Política de privacidad"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Contacto"}),e.jsx("p",{children:"Email: info@ejemplo.com"}),e.jsx("p",{children:"Teléfono: +123 456 7890"})]})]});m.__docgenInfo={description:"",methods:[],displayName:"MockLogo"};u.__docgenInfo={description:"",methods:[],displayName:"MockNav"};x.__docgenInfo={description:"",methods:[],displayName:"MockFooterContent"};const I={title:"Layout/Layout",component:r,tags:["autodocs"],argTypes:{className:{control:"text",description:"Clase CSS adicional para el contenedor principal"}}},i={render:a=>e.jsxs(r,{...a,children:[e.jsx(h,{logo:e.jsx(m,{}),title:"Mi Aplicación",children:e.jsx(u,{})}),e.jsxs("main",{style:{padding:"2rem",flex:1,maxWidth:"1200px",width:"100%",margin:"0 auto"},children:[e.jsx("h2",{children:"Contenido Principal"}),e.jsx("p",{children:"Este es el contenido principal de la aplicación. Aquí iría el contenido específico de cada página."})]}),e.jsx(d,{children:e.jsx(x,{})})]}),args:{}},c={render:a=>e.jsxs(r,{...a,children:[e.jsxs("main",{style:{padding:"2rem",flex:1},children:[e.jsx("h2",{children:"Contenido sin barra de navegación"}),e.jsx("p",{children:"Esta es una página sin barra de navegación."})]}),e.jsx(d,{})]}),args:{}},l={render:a=>e.jsxs(r,{...a,children:[e.jsx(h,{logo:e.jsx(m,{}),title:"Mi Aplicación",children:e.jsx(u,{})}),e.jsxs("main",{style:{padding:"2rem",flex:1,maxWidth:"1200px",width:"100%",margin:"0 auto"},children:[e.jsx("h2",{children:"Contenido con Clase Personalizada"}),e.jsx("p",{children:"Este es un ejemplo de Layout con una clase personalizada aplicada al contenedor principal."})]}),e.jsx(d,{children:e.jsx(x,{})})]}),args:{className:"mi-clase-personalizada"}};var g,y,j;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Layout {...args}>
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
    </Layout>,
  args: {}
}`,...(j=(y=i.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var f,v,_;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Layout {...args}>
            <main style={{
      padding: '2rem',
      flex: 1
    }}>
                <h2>Contenido sin barra de navegación</h2>
                <p>Esta es una página sin barra de navegación.</p>
            </main>
            <Footer />
        </Layout>,
  args: {}
}`,...(_=(v=c.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var N,C,b;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <Layout {...args}>
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
        </Layout>,
  args: {
    className: 'mi-clase-personalizada'
  }
}`,...(b=(C=l.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const S=["Default","SinBarraDeNavegacion","ConClasePersonalizada"];export{l as ConClasePersonalizada,i as Default,c as SinBarraDeNavegacion,S as __namedExportsOrder,I as default};
