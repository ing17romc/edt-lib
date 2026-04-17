import{n as e}from"./chunk-BneVvdWh.js";import{Ht as t,L as n,R as r,_t as i}from"./iframe-BrtTKpdh.js";var a,o,s,c=e((()=>{a={amount:1500.5,currency:`USD`,decimals:2,locale:`en-US`,showCurrency:!0},o={amount:{control:{type:`number`},description:`Numeric monetary value to display.`,table:{type:{summary:`number`}}},currency:{control:{type:`text`},description:`ISO 4217 currency code (e.g. USD, EUR).`,table:{type:{summary:`string`},defaultValue:{summary:`USD`}}},decimals:{control:{type:`number`,min:0,max:6},description:`Number of decimal places to show.`,table:{type:{summary:`number`},defaultValue:{summary:`2`}}},locale:{control:{type:`text`},description:`BCP 47 locale tag used for number formatting (e.g. en-US, de-DE).`,table:{type:{summary:`string`},defaultValue:{summary:`en-US`}}},showCurrency:{control:{type:`boolean`},description:`When true, the currency code or symbol is displayed alongside the amount.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}}},s={docs:{description:{component:`Displays a monetary amount formatted according to a locale and currency. Supports configurable decimal precision and optional currency symbol display.`}}}})),l,u,d,f,p,m,h,g,_,v;e((()=>{t(),r(),c(),l=i(),{within:u,expect:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/MoneyAmount`,component:n,tags:[`autodocs`],args:a,argTypes:o,parameters:{...s,layout:`centered`}},p={play:async({canvasElement:e})=>{await d(u(e).getByTestId(`money-amount`)).toBeInTheDocument()}},m={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,l.jsx)(n,{amount:1500.5,currency:`USD`,locale:`en-US`}),(0,l.jsx)(n,{amount:25e4,currency:`COP`,locale:`es-CO`}),(0,l.jsx)(n,{amount:99.99,currency:`EUR`,locale:`es-ES`}),(0,l.jsx)(n,{amount:1800,currency:`MXN`,locale:`es-MX`})]})},h={args:{amount:5e4,currency:`COP`,decimals:0,locale:`es-CO`}},g={args:{amount:3500.75,showCurrency:!1}},_={args:{amount:-250}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId('money-amount')).toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    amount: 50000,
    currency: 'COP',
    decimals: 0,
    locale: 'es-CO'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    amount: 3500.75,
    showCurrency: false
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    amount: -250.0
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Currencies`,`NoDecimals`,`WithoutSymbol`,`NegativeAmount`]}))();export{m as Currencies,p as Default,_ as NegativeAmount,h as NoDecimals,g as WithoutSymbol,v as __namedExportsOrder,f as default};