import{n as e}from"./chunk-BneVvdWh.js";import{Ht as t,_t as n}from"./iframe-BrtTKpdh.js";var r=e((()=>{})),i,a,o,s,c=e((()=>{i=[{title:`Font color`,type:`font`,items:[`font-blue`,`font-red`,`font-orange`,`font-green`,`font-white`,`font-yellow`,`font-gray`]},{title:`Background color`,type:`background`,items:[`bg-primary-1`,`bg-primary-2`,`bg-primary-3`,`bg-white`,`bg-light-gray`,`bg-gray`]},{title:`SCSS color variables`,type:`variable`,items:[`black-color`,`dark-gray-color`,`gray-color`,`light-gray-color`,`white-color`,`light-blue-color`,`dark-blue-color`,`red-color`,`orange-color`,`green-color`,`yellow-color`,`primary-color-1`,`primary-color-2`,`primary-color-3`]}],a={showFontColors:!0,showBackgroundColors:!0,showScssVariables:!0},o={className:{control:{type:`text`},description:`Custom CSS class for the main container`},showFontColors:{control:{type:`boolean`},description:`Show font colors`},showBackgroundColors:{control:{type:`boolean`},description:`Show background colors`},showScssVariables:{control:{type:`boolean`},description:`Show SCSS color variables`}},s={layout:`fullscreen`,docs:{description:{component:`Component that displays color examples, including font colors, background colors, and SCSS color variables.`}}}})),l,u,d,f,p=e((()=>{t(),r(),c(),l=n(),u={height:`18px`,width:`18px`,borderRadius:`50%`,display:`inline-block`,marginRight:`8px`,verticalAlign:`middle`},d=(e,t)=>{switch(t){case`font`:return(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{className:e,children:e}),(0,l.jsx)(`code`,{className:`code-block`,children:`<span className="${e}">Text</span>`}),(0,l.jsx)(`hr`,{className:`divider`})]},e);case`background`:return(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,l.jsx)(`span`,{style:u,className:e}),(0,l.jsx)(`code`,{className:`code-block`,children:`<div className="${e}"></div>`})]}),(0,l.jsx)(`hr`,{className:`divider`})]},e);case`variable`:return(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,l.jsx)(`span`,{style:{...u,backgroundColor:`var(--${e})`}}),(0,l.jsxs)(`code`,{className:`code-block`,children:[`$`,e]})]}),(0,l.jsx)(`hr`,{className:`divider`})]},e);default:return null}},f=({className:e=``,showFontColors:t=!0,showBackgroundColors:n=!0,showScssVariables:r=!0})=>{let a=i.filter(e=>e.type===`font`?t:e.type===`background`?n:e.type===`variable`?r:!0);return(0,l.jsx)(`div`,{className:`color-palette ${e}`,"data-testid":`color-palette`,children:a.map(e=>(0,l.jsxs)(`section`,{className:`color-group`,children:[(0,l.jsx)(`h2`,{className:`color-group__title`,children:e.title}),(0,l.jsx)(`div`,{className:`color-group__items`,children:e.items.map(t=>d(t,e.type))})]},e.title))})},f.__docgenInfo={description:`Component that displays a color palette with usage examples`,methods:[],displayName:`Color`,props:{className:{required:!1,tsType:{name:`string`},description:`Custom CSS class for the main container`,defaultValue:{value:`''`,computed:!1}},showFontColors:{required:!1,tsType:{name:`boolean`},description:`If true, shows only font colors`,defaultValue:{value:`true`,computed:!1}},showBackgroundColors:{required:!1,tsType:{name:`boolean`},description:`If true, shows only background colors`,defaultValue:{value:`true`,computed:!1}},showScssVariables:{required:!1,tsType:{name:`boolean`},description:`If true, shows SCSS color variables`,defaultValue:{value:`true`,computed:!1}}}}})),m,h,g,_,v,y;e((()=>{r(),p(),c(),m={title:`Static/Color`,component:f,tags:[`autodocs`],args:a,argTypes:o,parameters:s},h={args:{...a}},g={args:{showFontColors:!0,showBackgroundColors:!1,showScssVariables:!1},parameters:{docs:{description:{story:`Shows only the font colors.`}}}},_={args:{showFontColors:!1,showBackgroundColors:!0,showScssVariables:!1},parameters:{docs:{description:{story:`Shows only the background colors.`}}}},v={args:{showFontColors:!1,showBackgroundColors:!1,showScssVariables:!0},parameters:{docs:{description:{story:`Shows only the SCSS color variables.`}}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Default`,`FontColorsOnly`,`BackgroundColorsOnly`,`ScssVariablesOnly`]}))();export{_ as BackgroundColorsOnly,h as Default,g as FontColorsOnly,v as ScssVariablesOnly,y as __namedExportsOrder,m as default};