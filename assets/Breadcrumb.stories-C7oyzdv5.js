import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{v as ne}from"./v4-CtRu48qb.js";import{B as te}from"./index-D548qw57.js";import{R as ie}from"./index-D4lIrffr.js";const{addons:ce}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:de}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:C}=__STORYBOOK_MODULE_GLOBAL__;var pe=Object.defineProperty,le=(t,e)=>{for(var r in e)pe(t,r,{get:e[r],enumerable:!0})},ue="storybook/actions",me=`${ue}/action-event`,ge={depth:10,clearOnStoryChange:!0,limit:50},re=(t,e)=>{let r=Object.getPrototypeOf(t);return!r||e(r)?r:re(r,e)},_e=t=>!!(typeof t=="object"&&t&&re(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),Oe=t=>{if(_e(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let r=Object.getOwnPropertyDescriptor(e,"view"),o=r==null?void 0:r.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...r,value:Object.create(o.constructor.prototype)}),e}return t},be=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?ne():Date.now().toString(36)+Math.random().toString(36).substring(2);function O(t,e={}){let r={...ge,...e},o=function(...a){var h,y;if(e.implicit){let f=(h="__STORYBOOK_PREVIEW__"in C?C.__STORYBOOK_PREVIEW__:void 0)==null?void 0:h.storyRenders.find(d=>d.phase==="playing"||d.phase==="rendering");if(f){let d=!((y=globalThis==null?void 0:globalThis.FEATURES)!=null&&y.disallowImplicitActionsInRenderV8),R=new de({phase:f.phase,name:t,deprecated:d});if(d)console.warn(R);else throw R}}let s=ce.getChannel(),n=be(),c=5,b=a.map(Oe),se=a.length>1?b:b[0],ae={id:n,count:0,data:{name:t,args:se},options:{...r,maxDepth:c+(r.depth||3),allowFunction:r.allowFunction||!1}};s.emit(me,ae)};return o.isAction=!0,o.implicit=e.implicit,o}const{definePreview:Be}=__STORYBOOK_MODULE_PREVIEW_API__,{global:x}=__STORYBOOK_MODULE_GLOBAL__;var xe={};le(xe,{argsEnhancers:()=>fe,loaders:()=>Ce});var oe=(t,e)=>typeof e[t]>"u"&&!(t in e),he=t=>{let{initialArgs:e,argTypes:r,id:o,parameters:{actions:a}}=t;if(!a||a.disable||!a.argTypesRegex||!r)return{};let s=new RegExp(a.argTypesRegex);return Object.entries(r).filter(([n])=>!!s.test(n)).reduce((n,[c,b])=>(oe(c,e)&&(n[c]=O(c,{implicit:!0,id:o})),n),{})},ye=t=>{let{initialArgs:e,argTypes:r,parameters:{actions:o}}=t;return o!=null&&o.disable||!r?{}:Object.entries(r).filter(([a,s])=>!!s.action).reduce((a,[s,n])=>(oe(s,e)&&(a[s]=O(typeof n.action=="string"?n.action:s)),a),{})},fe=[ye,he],E=!1,Re=t=>{let{parameters:{actions:e}}=t;if(!(e!=null&&e.disable)&&!E&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in x&&typeof x.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let r=x.__STORYBOOK_TEST_ON_MOCK_CALL__;r((o,a)=>{let s=o.getMockName();s!=="spy"&&(!/^next\/.*::/.test(s)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(n=>s.startsWith(n)))&&O(s)(a)}),E=!0}},Ce=[Re];const Ee=[{url:"/home",text:"Home",className:"home-link"},{url:"/products",text:"Products",disabled:!1},{url:"/details",text:"Product Details",disabled:!0}];jest.fn((t,e)=>{var r;return(r=e==null?void 0:e.preventDefault)==null||r.call(e),t});ie.createElement("span",{className:"custom-separator"},"/");const Se=[{url:"/",text:"Inicio"},{url:"/categoria",text:"Categoría"},{url:"/producto/123",text:"Producto 123"}],Ie={title:"Controls/Breadcrumb",component:te,tags:["autodocs","controls"],parameters:{componentSubtitle:"Componente de navegación jerárquica",docs:{description:{component:"Muestra la ubicación actual dentro de una jerarquía de navegación y permite la navegación a niveles superiores."}}},argTypes:{options:{description:"Array de opciones que se mostrarán en el breadcrumb",table:{type:{summary:"BreadcrumbOption[]"}}},getCurrentPath:{description:"Función que se ejecuta al hacer clic en un elemento",table:{type:{summary:"(url: string, event: React.MouseEvent<HTMLButtonElement>) => void"}},control:!1},className:{description:"Clase CSS personalizada para el contenedor del breadcrumb",control:"text",table:{type:{summary:"string"}}},separator:{description:"Separador personalizado entre elementos",control:!1,table:{type:{summary:"React.ReactNode"}}}},args:{options:Ee,getCurrentPath:O("navigate-to")}},p={},l={args:{options:Se}},u={args:{separator:i.jsx("span",{style:{margin:"0 8px"},children:"›"})}},m={args:{className:"custom-breadcrumb"}},g={args:{options:[{url:"/home",text:"Inicio"},{url:"/categoria",text:"Categoría",disabled:!0},{url:"/producto",text:"Producto"}]}},_={render:t=>i.jsxs("div",{style:{padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[i.jsx("h2",{children:"Página de producto"}),i.jsx("div",{style:{margin:"15px 0"},children:i.jsx(te,{...t})}),i.jsxs("div",{style:{padding:"20px",backgroundColor:"white",borderRadius:"4px"},children:[i.jsx("h3",{children:"Detalles del producto"}),i.jsx("p",{children:"Contenido de la página de producto..."})]})]}),args:{options:[{url:"/",text:"Inicio"},{url:"/productos",text:"Productos"},{url:"/productos/123",text:"Producto 123"}]}};var S,v,T,P,j;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(T=(v=p.parameters)==null?void 0:v.docs)==null?void 0:T.source},description:{story:"Breadcrumb básico con opciones por defecto",...(j=(P=p.parameters)==null?void 0:P.docs)==null?void 0:j.description}}};var B,I,A,D,L;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    options: mockCustomOptions
  }
}`,...(A=(I=l.parameters)==null?void 0:I.docs)==null?void 0:A.source},description:{story:"Breadcrumb con opciones personalizadas",...(L=(D=l.parameters)==null?void 0:D.docs)==null?void 0:L.description}}};var W,w,M,k,K;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    separator: <span style={{
      margin: '0 8px'
    }}>›</span>
  }
}`,...(M=(w=u.parameters)==null?void 0:w.docs)==null?void 0:M.source},description:{story:"Breadcrumb con separador personalizado",...(K=(k=u.parameters)==null?void 0:k.docs)==null?void 0:K.description}}};var N,Y,V,z,F;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    className: 'custom-breadcrumb'
  }
}`,...(V=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:V.source},description:{story:"Breadcrumb con clase personalizada",...(F=(z=m.parameters)==null?void 0:z.docs)==null?void 0:F.description}}};var U,q,$,G,H;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...($=(q=g.parameters)==null?void 0:q.docs)==null?void 0:$.source},description:{story:"Breadcrumb con elementos deshabilitados",...(H=(G=g.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};var J,Q,X,Z,ee;_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=_.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"Ejemplo de breadcrumb en contexto",...(ee=(Z=_.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};const Ae=["Default","WithCustomOptions","WithCustomSeparator","WithCustomClass","WithDisabledItems","InContext"];export{p as Default,_ as InContext,m as WithCustomClass,l as WithCustomOptions,u as WithCustomSeparator,g as WithDisabledItems,Ae as __namedExportsOrder,Ie as default};
