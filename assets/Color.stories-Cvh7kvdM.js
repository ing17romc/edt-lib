import{t as e}from"./iframe-BwpCWMiM.js";import{t}from"./jsx-runtime-BsbbwSUz.js";e();var n=[{title:`Font color`,type:`font`,items:[`font-blue`,`font-red`,`font-orange`,`font-green`,`font-white`,`font-yellow`,`font-gray`]},{title:`Background color`,type:`background`,items:[`bg-primary-1`,`bg-primary-2`,`bg-primary-3`,`bg-white`,`bg-light-gray`,`bg-gray`]},{title:`SCSS color variables`,type:`variable`,items:[`black-color`,`dark-gray-color`,`gray-color`,`light-gray-color`,`white-color`,`light-blue-color`,`dark-blue-color`,`red-color`,`orange-color`,`green-color`,`yellow-color`,`primary-color-1`,`primary-color-2`,`primary-color-3`]}],r={showFontColors:!0,showBackgroundColors:!0,showScssVariables:!0},i={className:{control:{type:`text`},description:`Custom CSS class for the main container`},showFontColors:{control:{type:`boolean`},description:`Show font colors`},showBackgroundColors:{control:{type:`boolean`},description:`Show background colors`},showScssVariables:{control:{type:`boolean`},description:`Show SCSS color variables`}},a={layout:`fullscreen`,docs:{description:{component:`Component that displays color examples, including font colors, background colors, and SCSS color variables.`}}},o=t(),s={height:`18px`,width:`18px`,borderRadius:`50%`,display:`inline-block`,marginRight:`8px`,verticalAlign:`middle`},c=(e,t)=>{switch(t){case`font`:return(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:e,children:e}),(0,o.jsx)(`code`,{className:`code-block`,children:`<span className="${e}">Text</span>`}),(0,o.jsx)(`hr`,{className:`divider`})]},e);case`background`:return(0,o.jsxs)(`div`,{children:[(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,o.jsx)(`span`,{style:s,className:e}),(0,o.jsx)(`code`,{className:`code-block`,children:`<div className="${e}"></div>`})]}),(0,o.jsx)(`hr`,{className:`divider`})]},e);case`variable`:return(0,o.jsxs)(`div`,{children:[(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,o.jsx)(`span`,{style:{...s,backgroundColor:`var(--${e})`}}),(0,o.jsxs)(`code`,{className:`code-block`,children:[`$`,e]})]}),(0,o.jsx)(`hr`,{className:`divider`})]},e);default:return null}},l=({className:e=``,showFontColors:t=!0,showBackgroundColors:r=!0,showScssVariables:i=!0})=>{let a=n.filter(e=>e.type===`font`?t:e.type===`background`?r:e.type===`variable`?i:!0);return(0,o.jsx)(`div`,{className:`color-palette ${e}`,"data-testid":`color-palette`,children:a.map(e=>(0,o.jsxs)(`section`,{className:`color-group`,children:[(0,o.jsx)(`h2`,{className:`color-group__title`,children:e.title}),(0,o.jsx)(`div`,{className:`color-group__items`,children:e.items.map(t=>c(t,e.type))})]},e.title))})};l.__docgenInfo={description:`Component that displays a color palette with usage examples`,methods:[],displayName:`Color`,props:{className:{required:!1,tsType:{name:`string`},description:`Custom CSS class for the main container`,defaultValue:{value:`''`,computed:!1}},showFontColors:{required:!1,tsType:{name:`boolean`},description:`If true, shows only font colors`,defaultValue:{value:`true`,computed:!1}},showBackgroundColors:{required:!1,tsType:{name:`boolean`},description:`If true, shows only background colors`,defaultValue:{value:`true`,computed:!1}},showScssVariables:{required:!1,tsType:{name:`boolean`},description:`If true, shows SCSS color variables`,defaultValue:{value:`true`,computed:!1}}}};var u={title:`Static/Color`,component:l,tags:[`autodocs`],args:r,argTypes:i,parameters:a},d={args:{...r}},f={args:{showFontColors:!0,showBackgroundColors:!1,showScssVariables:!1},parameters:{docs:{description:{story:`Shows only the font colors.`}}}},p={args:{showFontColors:!1,showBackgroundColors:!0,showScssVariables:!1},parameters:{docs:{description:{story:`Shows only the background colors.`}}}},m={args:{showFontColors:!1,showBackgroundColors:!1,showScssVariables:!0},parameters:{docs:{description:{story:`Shows only the SCSS color variables.`}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
        story: 'Shows only the font colors.'
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
        story: 'Shows only the background colors.'
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
        story: 'Shows only the SCSS color variables.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};var h=[`Default`,`FontColorsOnly`,`BackgroundColorsOnly`,`ScssVariablesOnly`];export{p as BackgroundColorsOnly,d as Default,f as FontColorsOnly,m as ScssVariablesOnly,h as __namedExportsOrder,u as default};