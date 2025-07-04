import{j as o}from"./jsx-runtime-D_zvdyIk.js";const B=[{title:"Font color",type:"font",items:["font-blue","font-red","font-orange","font-green","font-white","font-yellow","font-gray"]},{title:"Background color",type:"background",items:["bg-primary-1","bg-primary-2","bg-primary-3","bg-white","bg-light-gray","bg-gray"]},{title:"SCSS color variables",type:"variable",items:["black-color","dark-gray-color","gray-color","light-gray-color","white-color","light-blue-color","dark-blue-color","red-color","orange-color","green-color","yellow-color","primary-color-1","primary-color-2","primary-color-3"]}],w={showFontColors:!0,showBackgroundColors:!0,showScssVariables:!0},F={className:{control:{type:"text"},description:"Clase CSS personalizada para el contenedor principal"},showFontColors:{control:{type:"boolean"},description:"Mostrar colores de fuente"},showBackgroundColors:{control:{type:"boolean"},description:"Mostrar colores de fondo"},showScssVariables:{control:{type:"boolean"},description:"Mostrar variables SCSS de color"}},M={layout:"fullscreen",docs:{description:{component:"Componente que muestra ejemplos de colores, incluyendo colores de fuente, colores de fondo y variables SCSS de color."}}},c={height:"18px",width:"18px",borderRadius:"50%",display:"inline-block",marginRight:"8px",verticalAlign:"middle"},_=(e,n)=>{switch(n){case"font":return o.jsxs("div",{children:[o.jsx("span",{className:e,children:e}),o.jsx("code",{className:"code-block",children:`<span className="${e}">Texto</span>`}),o.jsx("hr",{className:"divider"})]},e);case"background":return o.jsxs("div",{children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx("span",{style:c,className:e}),o.jsx("code",{className:"code-block",children:`<div className="${e}"></div>`})]}),o.jsx("hr",{className:"divider"})]},e);case"variable":return o.jsxs("div",{children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx("span",{style:{...c,backgroundColor:`var(--${e})`}}),o.jsxs("code",{className:"code-block",children:["$",e]})]}),o.jsx("hr",{className:"divider"})]},e);default:return null}},x=({className:e="",showFontColors:n=!0,showBackgroundColors:v=!0,showScssVariables:k=!0})=>{const j=B.filter(r=>r.type==="font"?n:r.type==="background"?v:r.type==="variable"?k:!0);return o.jsx("div",{className:`color-palette ${e}`,"data-testid":"color-palette",children:j.map(r=>o.jsxs("section",{className:"color-group",children:[o.jsx("h2",{className:"color-group__title",children:r.title}),o.jsx("div",{className:"color-group__items",children:r.items.map(V=>_(V,r.type))})]},r.title))})};x.__docgenInfo={description:"Componente que muestra una paleta de colores con ejemplos de uso",methods:[],displayName:"Color",props:{className:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada para el contenedor principal",defaultValue:{value:"''",computed:!1}},showFontColors:{required:!1,tsType:{name:"boolean"},description:"Si es verdadero, muestra solo los colores de fuente",defaultValue:{value:"true",computed:!1}},showBackgroundColors:{required:!1,tsType:{name:"boolean"},description:"Si es verdadero, muestra solo los colores de fondo",defaultValue:{value:"true",computed:!1}},showScssVariables:{required:!1,tsType:{name:"boolean"},description:"Si es verdadero, muestra las variables de color SCSS",defaultValue:{value:"true",computed:!1}}}};const q={title:"Static/Color",component:x,tags:["autodocs"],args:w,argTypes:F,parameters:M},s={args:{...w}},a={args:{showFontColors:!0,showBackgroundColors:!1,showScssVariables:!1},parameters:{docs:{description:{story:"Muestra solo los colores de fuente."}}}},l={args:{showFontColors:!1,showBackgroundColors:!0,showScssVariables:!1},parameters:{docs:{description:{story:"Muestra solo los colores de fondo."}}}},t={args:{showFontColors:!1,showBackgroundColors:!1,showScssVariables:!0},parameters:{docs:{description:{story:"Muestra solo las variables SCSS de color."}}}};var d,i,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(u=(i=s.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,m,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    showFontColors: true,
    showBackgroundColors: false,
    showScssVariables: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Muestra solo los colores de fuente.'
      }
    }
  }
}`,...(f=(m=a.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,h,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    showFontColors: false,
    showBackgroundColors: true,
    showScssVariables: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Muestra solo los colores de fondo.'
      }
    }
  }
}`,...(y=(h=l.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var b,S,C;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    showFontColors: false,
    showBackgroundColors: false,
    showScssVariables: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Muestra solo las variables SCSS de color.'
      }
    }
  }
}`,...(C=(S=t.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const N=["Default","FontColorsOnly","BackgroundColorsOnly","ScssVariablesOnly"];export{l as BackgroundColorsOnly,s as Default,a as FontColorsOnly,t as ScssVariablesOnly,N as __namedExportsOrder,q as default};
