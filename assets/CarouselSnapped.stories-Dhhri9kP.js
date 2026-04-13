import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-DoW-sQG_.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{n as i,t as a}from"./classNames-Bj-wXTiJ.js";var o,s,c,l,u,d,f,p,m=t((()=>{o=`_carousel_1xzzx_1`,s=`_trackWrapper_1xzzx_7`,c=`_track_1xzzx_7`,l=`_slide_1xzzx_23`,u=`_navButton_1xzzx_29`,d=`_indicators_1xzzx_63`,f=`_dot_1xzzx_70`,p={carousel:o,trackWrapper:s,track:c,slide:l,navButton:u,"navButton--prev":`_navButton--prev_1xzzx_56`,"navButton--next":`_navButton--next_1xzzx_59`,indicators:d,dot:f,"dot--active":`_dot--active_1xzzx_80`}})),h,g,_,v=t((()=>{h=e(n(),1),i(),m(),g=r(),_=({slides:e,showNavigation:t=!0,showIndicators:n=!0,defaultIndex:r=0,onChange:i,className:o,...s})=>{let[c,l]=(0,h.useState)(r),u=(0,h.useRef)(null),d=t=>{let n=Math.max(0,Math.min(t,e.length-1));l(n),i?.(n);let r=u.current;r&&r.children[n]?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`start`})},f=()=>d(c-1),m=()=>d(c+1);return(0,g.jsxs)(`div`,{className:a(p.carousel,o),...s,children:[(0,g.jsx)(`div`,{className:p.trackWrapper,children:(0,g.jsx)(`div`,{ref:u,className:p.track,children:e.map((e,t)=>(0,g.jsx)(`div`,{"aria-hidden":t!==c,className:a(p.slide,t===c&&p[`slide--active`]),children:e.content},e.key))})}),t&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`button`,{type:`button`,"aria-label":`Previous`,disabled:c===0,className:a(p.navButton,p[`navButton--prev`]),onClick:f,children:`‹`}),(0,g.jsx)(`button`,{type:`button`,"aria-label":`Next`,disabled:c===e.length-1,className:a(p.navButton,p[`navButton--next`]),onClick:m,children:`›`})]}),n&&(0,g.jsx)(`div`,{className:p.indicators,"aria-label":`Position indicators`,children:e.map((e,t)=>(0,g.jsx)(`button`,{type:`button`,"aria-label":`Go to slide ${t+1}`,"aria-current":t===c,className:a(p.dot,t===c&&p[`dot--active`]),onClick:()=>d(t)},e.key))})]})},_.__docgenInfo={description:`CarouselSnapped component that displays slides with native scroll snapping.\r
\r
@param slides - Carousel slides\r
@param showNavigation - Whether to show prev/next buttons\r
@param showIndicators - Whether to show position indicators\r
@param defaultIndex - Initial index\r
@param onChange - Callback when slide changes`,methods:[],displayName:`CarouselSnapped`,props:{slides:{required:!0,tsType:{name:`Array`,elements:[{name:`CarouselSlide`}],raw:`CarouselSlide[]`},description:`Carousel slides`},showNavigation:{required:!1,tsType:{name:`boolean`},description:`Whether to show navigation buttons\r
@default true`,defaultValue:{value:`true`,computed:!1}},showIndicators:{required:!1,tsType:{name:`boolean`},description:`Whether to show position indicators\r
@default true`,defaultValue:{value:`true`,computed:!1}},defaultIndex:{required:!1,tsType:{name:`number`},description:`Initial active index\r
@default 0`,defaultValue:{value:`0`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:`Callback when changing slides`}},composes:[`Omit`]}})),y,b,x,S=t((()=>{y={showNavigation:!0,showIndicators:!0,defaultIndex:0},b={showNavigation:{control:{type:`boolean`},description:`When true, previous/next arrow buttons are rendered.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},showIndicators:{control:{type:`boolean`},description:`When true, dot indicators showing the current slide are rendered.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},defaultIndex:{control:{type:`number`,min:0},description:`Index of the slide shown on first render.`,table:{type:{summary:`number`},defaultValue:{summary:`0`}}}},x={docs:{description:{component:`A CSS scroll-snap carousel that flicks between slides. Supports navigation arrows, dot indicators, and a configurable starting slide index.`}}}})),C,w,T,E,D,O,k,A,j,M;t((()=>{n(),v(),S(),C=r(),{within:w,expect:T}=__STORYBOOK_MODULE_TEST__,E=[{key:`slide1`,content:(0,C.jsx)(`div`,{style:{height:200,background:`#2563eb`,color:`#fff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.5rem`},children:`Slide 1`})},{key:`slide2`,content:(0,C.jsx)(`div`,{style:{height:200,background:`#16a34a`,color:`#fff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.5rem`},children:`Slide 2`})},{key:`slide3`,content:(0,C.jsx)(`div`,{style:{height:200,background:`#dc2626`,color:`#fff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.5rem`},children:`Slide 3`})}],D={title:`Components/CarouselSnapped`,component:_,tags:[`autodocs`],args:{...y,slides:E},argTypes:b,parameters:x},O={play:async({canvasElement:e})=>{await T(w(e).getByText(`Slide 1`)).toBeInTheDocument()}},k={args:{showNavigation:!1}},A={args:{showIndicators:!1}},j={args:{showNavigation:!1,showIndicators:!1}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Slide 1')).toBeInTheDocument();
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    showNavigation: false
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    showIndicators: false
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    showNavigation: false,
    showIndicators: false
  }
}`,...j.parameters?.docs?.source}}},M=[`Default`,`NoNavigation`,`NoIndicators`,`Minimal`]}))();export{O as Default,j as Minimal,A as NoIndicators,k as NoNavigation,M as __namedExportsOrder,D as default};