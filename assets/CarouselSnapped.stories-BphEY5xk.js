import{n as e}from"./chunk-BneVvdWh.js";import{Ht as t,_t as n,at as r,ot as i}from"./iframe-BrtTKpdh.js";var a,o,s,c=e((()=>{a={showNavigation:!0,showIndicators:!0,defaultIndex:0},o={showNavigation:{control:{type:`boolean`},description:`When true, previous/next arrow buttons are rendered.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},showIndicators:{control:{type:`boolean`},description:`When true, dot indicators showing the current slide are rendered.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},defaultIndex:{control:{type:`number`,min:0},description:`Index of the slide shown on first render.`,table:{type:{summary:`number`},defaultValue:{summary:`0`}}}},s={docs:{description:{component:`A CSS scroll-snap carousel that flicks between slides. Supports navigation arrows, dot indicators, and a configurable starting slide index.`}}}})),l,u,d,f,p,m,h,g,_,v;e((()=>{t(),i(),c(),l=n(),{within:u,expect:d}=__STORYBOOK_MODULE_TEST__,f=[{key:`slide1`,content:(0,l.jsx)(`div`,{style:{height:200,background:`#2563eb`,color:`#fff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.5rem`},children:`Slide 1`})},{key:`slide2`,content:(0,l.jsx)(`div`,{style:{height:200,background:`#16a34a`,color:`#fff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.5rem`},children:`Slide 2`})},{key:`slide3`,content:(0,l.jsx)(`div`,{style:{height:200,background:`#dc2626`,color:`#fff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.5rem`},children:`Slide 3`})}],p={title:`Components/CarouselSnapped`,component:r,tags:[`autodocs`],args:{...a,slides:f},argTypes:o,parameters:s},m={play:async({canvasElement:e})=>{await d(u(e).getByText(`Slide 1`)).toBeInTheDocument()}},h={args:{showNavigation:!1}},g={args:{showIndicators:!1}},_={args:{showNavigation:!1,showIndicators:!1}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Slide 1')).toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    showNavigation: false
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    showIndicators: false
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    showNavigation: false,
    showIndicators: false
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`NoNavigation`,`NoIndicators`,`Minimal`]}))();export{m as Default,_ as Minimal,g as NoIndicators,h as NoNavigation,v as __namedExportsOrder,p as default};