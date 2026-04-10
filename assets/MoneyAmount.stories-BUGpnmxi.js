import{t as e}from"./iframe-BwpCWMiM.js";import{t}from"./jsx-runtime-BsbbwSUz.js";import{t as n}from"./classNames-DYb3CZs3.js";e();var r={moneyAmount:`_moneyAmount_yakg1_1`},i=t(),a=({amount:e,currency:t=`USD`,decimals:a=2,locale:o=`es-CO`,showCurrency:s=!0,className:c,...l})=>{let u=new Intl.NumberFormat(o,{style:s?`currency`:`decimal`,currency:s?t:void 0,minimumFractionDigits:a,maximumFractionDigits:a}).format(e);return(0,i.jsx)(`span`,{className:n(r.moneyAmount,c),...l,children:u})};a.__docgenInfo={description:`MoneyAmount component that formats and displays monetary values.\r
\r
@param amount - Numeric value to display\r
@param currency - ISO 4217 currency code\r
@param decimals - Number of decimal places\r
@param locale - Locale for number formatting\r
@param showCurrency - Whether to show the currency symbol`,methods:[],displayName:`MoneyAmount`,props:{amount:{required:!0,tsType:{name:`number`},description:`Numeric value to display`},currency:{required:!1,tsType:{name:`union`,raw:`'USD' | 'EUR' | 'COP' | 'MXN' | 'ARS' | 'CLP' | string`,elements:[{name:`literal`,value:`'USD'`},{name:`literal`,value:`'EUR'`},{name:`literal`,value:`'COP'`},{name:`literal`,value:`'MXN'`},{name:`literal`,value:`'ARS'`},{name:`literal`,value:`'CLP'`},{name:`string`}]},description:`ISO 4217 currency code\r
@default 'USD'`,defaultValue:{value:`'USD'`,computed:!1}},decimals:{required:!1,tsType:{name:`number`},description:`Number of decimal places to display\r
@default 2`,defaultValue:{value:`2`,computed:!1}},locale:{required:!1,tsType:{name:`string`},description:`Locale for number formatting\r
@default 'es-CO'`,defaultValue:{value:`'es-CO'`,computed:!1}},showCurrency:{required:!1,tsType:{name:`boolean`},description:`Whether to show the currency symbol\r
@default true`,defaultValue:{value:`true`,computed:!1}}},composes:[`HTMLAttributes`]};var o={title:`Components/MoneyAmount`,component:a,tags:[`autodocs`],args:{amount:1500.5,currency:`USD`,decimals:2,locale:`en-US`,showCurrency:!0},argTypes:{amount:{control:{type:`number`},description:`Numeric monetary value to display.`,table:{type:{summary:`number`}}},currency:{control:`text`,description:`ISO 4217 currency code (e.g. USD, EUR).`,table:{type:{summary:`string`},defaultValue:{summary:`USD`}}},decimals:{control:{type:`number`,min:0,max:6},description:`Number of decimal places to show.`,table:{type:{summary:`number`},defaultValue:{summary:`2`}}},locale:{control:`text`,description:`BCP 47 locale tag used for number formatting (e.g. en-US, de-DE).`,table:{type:{summary:`string`},defaultValue:{summary:`en-US`}}},showCurrency:{control:`boolean`,description:`When true, the currency code or symbol is displayed alongside the amount.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}}},parameters:{docs:{description:{component:`Displays a monetary amount formatted according to a locale and currency. Supports configurable decimal precision and optional currency symbol display.`}}}},s={},c={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,i.jsx)(a,{amount:1500.5,currency:`USD`,locale:`en-US`}),(0,i.jsx)(a,{amount:25e4,currency:`COP`,locale:`es-CO`}),(0,i.jsx)(a,{amount:99.99,currency:`EUR`,locale:`es-ES`}),(0,i.jsx)(a,{amount:1800,currency:`MXN`,locale:`es-MX`})]})},l={args:{amount:5e4,currency:`COP`,decimals:0,locale:`es-CO`}},u={args:{amount:3500.75,showCurrency:!1}},d={args:{amount:-250}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>\r
      <MoneyAmount amount={1500.5} currency="USD" locale="en-US" />\r
      <MoneyAmount amount={250000} currency="COP" locale="es-CO" />\r
      <MoneyAmount amount={99.99} currency="EUR" locale="es-ES" />\r
      <MoneyAmount amount={1800} currency="MXN" locale="es-MX" />\r
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    amount: 50000,
    currency: 'COP',
    decimals: 0,
    locale: 'es-CO'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    amount: 3500.75,
    showCurrency: false
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    amount: -250.0
  }
}`,...d.parameters?.docs?.source}}};var f=[`Default`,`Currencies`,`NoDecimals`,`WithoutSymbol`,`NegativeAmount`];export{c as Currencies,s as Default,d as NegativeAmount,l as NoDecimals,u as WithoutSymbol,f as __namedExportsOrder,o as default};