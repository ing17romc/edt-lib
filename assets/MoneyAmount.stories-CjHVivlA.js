import{n as e}from"./chunk-BneVvdWh.js";import{S as t}from"./iframe-DoW-sQG_.js";import{t as n}from"./jsx-runtime-Bn1Ys6_W.js";import{n as r,t as i}from"./classNames-Bj-wXTiJ.js";var a,o,s=e((()=>{a=`_moneyAmount_yakg1_1`,o={moneyAmount:a}})),c,l,u=e((()=>{t(),r(),s(),c=n(),l=({amount:e,currency:t=`USD`,decimals:n=2,locale:r=`es-CO`,showCurrency:a=!0,className:s,...l})=>{let u=new Intl.NumberFormat(r,{style:a?`currency`:`decimal`,currency:a?t:void 0,minimumFractionDigits:n,maximumFractionDigits:n}).format(e);return(0,c.jsx)(`span`,{className:i(o.moneyAmount,s),...l,children:u})},l.__docgenInfo={description:`MoneyAmount component that formats and displays monetary values.\r
\r
@param amount - Numeric value to display\r
@param currency - ISO 4217 currency code\r
@param decimals - Number of decimal places\r
@param locale - Locale for number formatting\r
@param showCurrency - Whether to show the currency symbol`,methods:[],displayName:`MoneyAmount`,props:{amount:{required:!0,tsType:{name:`number`},description:`Numeric value to display`},currency:{required:!1,tsType:{name:`union`,raw:`'USD' | 'EUR' | 'COP' | 'MXN' | 'ARS' | 'CLP' | string`,elements:[{name:`literal`,value:`'USD'`},{name:`literal`,value:`'EUR'`},{name:`literal`,value:`'COP'`},{name:`literal`,value:`'MXN'`},{name:`literal`,value:`'ARS'`},{name:`literal`,value:`'CLP'`},{name:`string`}]},description:`ISO 4217 currency code\r
@default 'USD'`,defaultValue:{value:`'USD'`,computed:!1}},decimals:{required:!1,tsType:{name:`number`},description:`Number of decimal places to display\r
@default 2`,defaultValue:{value:`2`,computed:!1}},locale:{required:!1,tsType:{name:`string`},description:`Locale for number formatting\r
@default 'es-CO'`,defaultValue:{value:`'es-CO'`,computed:!1}},showCurrency:{required:!1,tsType:{name:`boolean`},description:`Whether to show the currency symbol\r
@default true`,defaultValue:{value:`true`,computed:!1}}},composes:[`HTMLAttributes`]}})),d,f,p,m=e((()=>{d={amount:1500.5,currency:`USD`,decimals:2,locale:`en-US`,showCurrency:!0},f={amount:{control:{type:`number`},description:`Numeric monetary value to display.`,table:{type:{summary:`number`}}},currency:{control:{type:`text`},description:`ISO 4217 currency code (e.g. USD, EUR).`,table:{type:{summary:`string`},defaultValue:{summary:`USD`}}},decimals:{control:{type:`number`,min:0,max:6},description:`Number of decimal places to show.`,table:{type:{summary:`number`},defaultValue:{summary:`2`}}},locale:{control:{type:`text`},description:`BCP 47 locale tag used for number formatting (e.g. en-US, de-DE).`,table:{type:{summary:`string`},defaultValue:{summary:`en-US`}}},showCurrency:{control:{type:`boolean`},description:`When true, the currency code or symbol is displayed alongside the amount.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}}},p={docs:{description:{component:`Displays a monetary amount formatted according to a locale and currency. Supports configurable decimal precision and optional currency symbol display.`}}}})),h,g,_,v,y,b,x,S,C,w;e((()=>{t(),u(),m(),h=n(),{within:g,expect:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/MoneyAmount`,component:l,tags:[`autodocs`],args:d,argTypes:f,parameters:p},y={play:async({canvasElement:e})=>{await _(g(e).getByTestId(`money-amount`)).toBeInTheDocument()}},b={render:()=>(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,h.jsx)(l,{amount:1500.5,currency:`USD`,locale:`en-US`}),(0,h.jsx)(l,{amount:25e4,currency:`COP`,locale:`es-CO`}),(0,h.jsx)(l,{amount:99.99,currency:`EUR`,locale:`es-ES`}),(0,h.jsx)(l,{amount:1800,currency:`MXN`,locale:`es-MX`})]})},x={args:{amount:5e4,currency:`COP`,decimals:0,locale:`es-CO`}},S={args:{amount:3500.75,showCurrency:!1}},C={args:{amount:-250}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId('money-amount')).toBeInTheDocument();
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    amount: 50000,
    currency: 'COP',
    decimals: 0,
    locale: 'es-CO'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    amount: 3500.75,
    showCurrency: false
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    amount: -250.0
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`Currencies`,`NoDecimals`,`WithoutSymbol`,`NegativeAmount`]}))();export{b as Currencies,y as Default,C as NegativeAmount,x as NoDecimals,S as WithoutSymbol,w as __namedExportsOrder,v as default};