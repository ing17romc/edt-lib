import{t as e}from"./iframe-YpqvHZo3.js";import{t}from"./jsx-runtime-ChNUh70B.js";e();var n=[{title:`Font color`,type:`font`,items:[`font-blue`,`font-red`,`font-orange`,`font-green`,`font-white`,`font-yellow`,`font-gray`]},{title:`Background color`,type:`background`,items:[`bg-primary-1`,`bg-primary-2`,`bg-primary-3`,`bg-white`,`bg-light-gray`,`bg-gray`]},{title:`SCSS color variables`,type:`variable`,items:[`black-color`,`dark-gray-color`,`gray-color`,`light-gray-color`,`white-color`,`light-blue-color`,`dark-blue-color`,`red-color`,`orange-color`,`green-color`,`yellow-color`,`primary-color-1`,`primary-color-2`,`primary-color-3`]}],r={showFontColors:!0,showBackgroundColors:!0,showScssVariables:!0},i={className:{control:{type:`text`},description:`Clase CSS personalizada para el contenedor principal`},showFontColors:{control:{type:`boolean`},description:`Mostrar colores de fuente`},showBackgroundColors:{control:{type:`boolean`},description:`Mostrar colores de fondo`},showScssVariables:{control:{type:`boolean`},description:`Mostrar variables SCSS de color`}},a={layout:`fullscreen`,docs:{description:{component:`Componente que muestra ejemplos de colores, incluyendo colores de fuente, colores de fondo y variables SCSS de color.`}}},o=t(),s={height:`18px`,width:`18px`,borderRadius:`50%`,display:`inline-block`,marginRight:`8px`,verticalAlign:`middle`},c=(e,t)=>{switch(t){case`font`:return(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:e,children:e}),(0,o.jsx)(`code`,{className:`code-block`,children:`<span className="${e}">Texto</span>`}),(0,o.jsx)(`hr`,{className:`divider`})]},e);case`background`:return(0,o.jsxs)(`div`,{children:[(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,o.jsx)(`span`,{style:s,className:e}),(0,o.jsx)(`code`,{className:`code-block`,children:`<div className="${e}"></div>`})]}),(0,o.jsx)(`hr`,{className:`divider`})]},e);case`variable`:return(0,o.jsxs)(`div`,{children:[(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,o.jsx)(`span`,{style:{...s,backgroundColor:`var(--${e})`}}),(0,o.jsxs)(`code`,{className:`code-block`,children:[`$`,e]})]}),(0,o.jsx)(`hr`,{className:`divider`})]},e);default:return null}},l=({className:e=``,showFontColors:t=!0,showBackgroundColors:r=!0,showScssVariables:i=!0})=>{let a=n.filter(e=>e.type===`font`?t:e.type===`background`?r:e.type===`variable`?i:!0);return(0,o.jsx)(`div`,{className:`color-palette ${e}`,"data-testid":`color-palette`,children:a.map(e=>(0,o.jsxs)(`section`,{className:`color-group`,children:[(0,o.jsx)(`h2`,{className:`color-group__title`,children:e.title}),(0,o.jsx)(`div`,{className:`color-group__items`,children:e.items.map(t=>c(t,e.type))})]},e.title))})};l.__docgenInfo={description:`Componente que muestra una paleta de colores con ejemplos de uso`,methods:[],displayName:`Color`,props:{className:{required:!1,tsType:{name:`string`},description:`Clase CSS personalizada para el contenedor principal`,defaultValue:{value:`''`,computed:!1}},showFontColors:{required:!1,tsType:{name:`boolean`},description:`Si es verdadero, muestra solo los colores de fuente`,defaultValue:{value:`true`,computed:!1}},showBackgroundColors:{required:!1,tsType:{name:`boolean`},description:`Si es verdadero, muestra solo los colores de fondo`,defaultValue:{value:`true`,computed:!1}},showScssVariables:{required:!1,tsType:{name:`boolean`},description:`Si es verdadero, muestra las variables de color SCSS`,defaultValue:{value:`true`,computed:!1}}}};var u={title:`Static/Color`,component:l,tags:[`autodocs`],args:r,argTypes:i,parameters:a},d={args:{...r}},f={args:{showFontColors:!0,showBackgroundColors:!1,showScssVariables:!1},parameters:{docs:{description:{story:`Muestra solo los colores de fuente.`}}}},p={args:{showFontColors:!1,showBackgroundColors:!0,showScssVariables:!1},parameters:{docs:{description:{story:`Muestra solo los colores de fondo.`}}}},m={args:{showFontColors:!1,showBackgroundColors:!1,showScssVariables:!0},parameters:{docs:{description:{story:`Muestra solo las variables SCSS de color.`}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};var h=[`Default`,`FontColorsOnly`,`BackgroundColorsOnly`,`ScssVariablesOnly`];export{p as BackgroundColorsOnly,d as Default,f as FontColorsOnly,m as ScssVariablesOnly,h as __namedExportsOrder,u as default};