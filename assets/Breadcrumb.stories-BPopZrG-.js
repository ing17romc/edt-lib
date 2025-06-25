import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{v as ie}from"./v4-CtRu48qb.js";import{R as te}from"./index-D4lIrffr.js";const{addons:ce}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:de}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:v}=__STORYBOOK_MODULE_GLOBAL__;var le=Object.defineProperty,pe=(r,e)=>{for(var t in e)le(r,t,{get:e[t],enumerable:!0})},ue="storybook/actions",me=`${ue}/action-event`,be={depth:10,clearOnStoryChange:!0,limit:50},ae=(r,e)=>{let t=Object.getPrototypeOf(r);return!t||e(t)?t:ae(t,e)},ge=r=>!!(typeof r=="object"&&r&&ae(r,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof r.persist=="function"),_e=r=>{if(ge(r)){let e=Object.create(r.constructor.prototype,Object.getOwnPropertyDescriptors(r));e.persist();let t=Object.getOwnPropertyDescriptor(e,"view"),o=t==null?void 0:t.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...t,value:Object.create(o.constructor.prototype)}),e}return r},xe=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?ie():Date.now().toString(36)+Math.random().toString(36).substring(2);function _(r,e={}){let t={...be,...e},o=function(...s){var h,f;if(e.implicit){let R=(h="__STORYBOOK_PREVIEW__"in v?v.__STORYBOOK_PREVIEW__:void 0)==null?void 0:h.storyRenders.find(d=>d.phase==="playing"||d.phase==="rendering");if(R){let d=!((f=globalThis==null?void 0:globalThis.FEATURES)!=null&&f.disallowImplicitActionsInRenderV8),E=new de({phase:R.phase,name:r,deprecated:d});if(d)console.warn(E);else throw E}}let a=ce.getChannel(),n=xe(),c=5,x=s.map(_e),ne=s.length>1?x:x[0],se={id:n,count:0,data:{name:r,args:ne},options:{...t,maxDepth:c+(t.depth||3),allowFunction:t.allowFunction||!1}};a.emit(me,se)};return o.isAction=!0,o.implicit=e.implicit,o}const{definePreview:Be}=__STORYBOOK_MODULE_PREVIEW_API__,{global:y}=__STORYBOOK_MODULE_GLOBAL__;var ye={};pe(ye,{argsEnhancers:()=>fe,loaders:()=>Ee});var oe=(r,e)=>typeof e[r]>"u"&&!(r in e),Oe=r=>{let{initialArgs:e,argTypes:t,id:o,parameters:{actions:s}}=r;if(!s||s.disable||!s.argTypesRegex||!t)return{};let a=new RegExp(s.argTypesRegex);return Object.entries(t).filter(([n])=>!!a.test(n)).reduce((n,[c,x])=>(oe(c,e)&&(n[c]=_(c,{implicit:!0,id:o})),n),{})},he=r=>{let{initialArgs:e,argTypes:t,parameters:{actions:o}}=r;return o!=null&&o.disable||!t?{}:Object.entries(t).filter(([s,a])=>!!a.action).reduce((s,[a,n])=>(oe(a,e)&&(s[a]=_(typeof n.action=="string"?n.action:a)),s),{})},fe=[he,Oe],S=!1,Re=r=>{let{parameters:{actions:e}}=r;if(!(e!=null&&e.disable)&&!S&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in y&&typeof y.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let t=y.__STORYBOOK_TEST_ON_MOCK_CALL__;t((o,s)=>{let a=o.getMockName();a!=="spy"&&(!/^next\/.*::/.test(a)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(n=>a.startsWith(n)))&&_(a)(s)}),S=!0}},Ee=[Re];const O=({options:r,getCurrentPath:e,className:t="",separator:o="/"})=>{const s=(a,n,c)=>{if(n){c==null||c.preventDefault();return}c?e==null||e(a,c):e==null||e(a,{})};return i.jsx("nav",{"aria-label":"breadcrumb",children:i.jsx("ol",{className:`breadcrumb ${t}`.trim(),children:r.map((a,n)=>i.jsxs(te.Fragment,{children:[i.jsx("li",{className:`breadcrumb-item ${a.className||""}`.trim(),children:i.jsx("button",{type:"button",onClick:c=>s(a.url,a.disabled,c),className:`breadcrumb-button ${a.disabled?"disabled":""}`.trim(),disabled:a.disabled,tabIndex:a.disabled?-1:0,"aria-label":`Navegar a ${a.text}`,"aria-disabled":a.disabled,children:a.text})}),n<r.length-1&&i.jsx("li",{className:"breadcrumb-separator","aria-hidden":"true",children:o})]},n))})})};O.__docgenInfo={description:`Componente Breadcrumb que muestra la ruta de navegación actual en la aplicación.
Permite a los usuarios navegar entre diferentes secciones manteniendo un contexto visual.

@param {BreadcrumbProps} props - Propiedades del componente
@param {BreadcrumbOption[]} props.options - Lista de elementos del breadcrumb, cada uno con una URL y texto
@param {(url: string) => void} props.getCurrentPath - Función que maneja el cambio de ruta al hacer clic en un elemento
@returns {JSX.Element} Elemento nav con la ruta de navegación actual`,methods:[],displayName:"Breadcrumb",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbOption"}],raw:"BreadcrumbOption[]"},description:"Array de opciones que se mostrarán en el breadcrumb"},getCurrentPath:{required:!0,tsType:{name:"signature",type:"function",raw:"(url: string, event: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"string"},name:"url"},{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:`Función que se ejecuta al hacer clic en un elemento del breadcrumb
@param url - URL del elemento clickeado
@param event - Evento de clic de React`},className:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada para el contenedor del breadcrumb",defaultValue:{value:"''",computed:!1}},separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Separador personalizado entre elementos del breadcrumb",defaultValue:{value:"'/'",computed:!1}}}};const ve=[{url:"/home",text:"Home",className:"home-link"},{url:"/products",text:"Products",disabled:!1},{url:"/details",text:"Product Details",disabled:!0}];jest.fn((r,e)=>{var t;return(t=e==null?void 0:e.preventDefault)==null||t.call(e),r});te.createElement("span",{className:"custom-separator"},"/");const Se=[{url:"/",text:"Inicio"},{url:"/categoria",text:"Categoría"},{url:"/producto/123",text:"Producto 123"}],Ie={title:"Controls/Breadcrumb",component:O,tags:["autodocs","controls"],parameters:{componentSubtitle:"Componente de navegación jerárquica",docs:{description:{component:"Muestra la ubicación actual dentro de una jerarquía de navegación y permite la navegación a niveles superiores."}}},argTypes:{options:{description:"Array de opciones que se mostrarán en el breadcrumb",table:{type:{summary:"BreadcrumbOption[]"}}},getCurrentPath:{description:"Función que se ejecuta al hacer clic en un elemento",table:{type:{summary:"(url: string, event: React.MouseEvent<HTMLButtonElement>) => void"}},control:!1},className:{description:"Clase CSS personalizada para el contenedor del breadcrumb",control:"text",table:{type:{summary:"string"}}},separator:{description:"Separador personalizado entre elementos",control:!1,table:{type:{summary:"React.ReactNode"}}}},args:{options:ve,getCurrentPath:_("navigate-to")}},l={},p={args:{options:Se}},u={args:{separator:i.jsx("span",{style:{margin:"0 8px"},children:"›"})}},m={args:{className:"custom-breadcrumb"}},b={args:{options:[{url:"/home",text:"Inicio"},{url:"/categoria",text:"Categoría",disabled:!0},{url:"/producto",text:"Producto"}]}},g={render:r=>i.jsxs("div",{style:{padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[i.jsx("h2",{children:"Página de producto"}),i.jsx("div",{style:{margin:"15px 0"},children:i.jsx(O,{...r})}),i.jsxs("div",{style:{padding:"20px",backgroundColor:"white",borderRadius:"4px"},children:[i.jsx("h3",{children:"Detalles del producto"}),i.jsx("p",{children:"Contenido de la página de producto..."})]})]}),args:{options:[{url:"/",text:"Inicio"},{url:"/productos",text:"Productos"},{url:"/productos/123",text:"Producto 123"}]}};var T,C,j,B,I;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(j=(C=l.parameters)==null?void 0:C.docs)==null?void 0:j.source},description:{story:"Breadcrumb básico con opciones por defecto",...(I=(B=l.parameters)==null?void 0:B.docs)==null?void 0:I.description}}};var A,D,P,N,L;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    options: mockCustomOptions
  }
}`,...(P=(D=p.parameters)==null?void 0:D.docs)==null?void 0:P.source},description:{story:"Breadcrumb con opciones personalizadas",...(L=(N=p.parameters)==null?void 0:N.docs)==null?void 0:L.description}}};var M,w,k,W,K;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    separator: <span style={{
      margin: '0 8px'
    }}>›</span>
  }
}`,...(k=(w=u.parameters)==null?void 0:w.docs)==null?void 0:k.source},description:{story:"Breadcrumb con separador personalizado",...(K=(W=u.parameters)==null?void 0:W.docs)==null?void 0:K.description}}};var q,V,z,Y,F;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    className: 'custom-breadcrumb'
  }
}`,...(z=(V=m.parameters)==null?void 0:V.docs)==null?void 0:z.source},description:{story:"Breadcrumb con clase personalizada",...(F=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:F.description}}};var U,$,H,G,J;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    options: [{
      url: '/home',
      text: 'Inicio'
    }, {
      url: '/categoria',
      text: 'Categoría',
      disabled: true
    }, {
      url: '/producto',
      text: 'Producto'
    }]
  }
}`,...(H=($=b.parameters)==null?void 0:$.docs)==null?void 0:H.source},description:{story:"Breadcrumb con elementos deshabilitados",...(J=(G=b.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};var X,Q,Z,ee,re;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '4px'
  }}>
      <h2>Página de producto</h2>
      <div style={{
      margin: '15px 0'
    }}>
        <Breadcrumb {...args} />
      </div>
      <div style={{
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '4px'
    }}>
        <h3>Detalles del producto</h3>
        <p>Contenido de la página de producto...</p>
      </div>
    </div>,
  args: {
    options: [{
      url: '/',
      text: 'Inicio'
    }, {
      url: '/productos',
      text: 'Productos'
    }, {
      url: '/productos/123',
      text: 'Producto 123'
    }]
  }
}`,...(Z=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Z.source},description:{story:"Ejemplo de breadcrumb en contexto",...(re=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:re.description}}};const Ae=["Default","WithCustomOptions","WithCustomSeparator","WithCustomClass","WithDisabledItems","InContext"];export{l as Default,g as InContext,m as WithCustomClass,p as WithCustomOptions,u as WithCustomSeparator,b as WithDisabledItems,Ae as __namedExportsOrder,Ie as default};
