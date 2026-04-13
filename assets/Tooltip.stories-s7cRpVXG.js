import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-BoFEwu8W.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{n as i,t as a}from"./classNames-Bj-wXTiJ.js";var o,s,c,l,u=t((()=>{o=`_wrapper_t6gns_1`,s=`_tooltip_t6gns_7`,c=`_arrow_t6gns_21`,l={wrapper:o,tooltip:s,arrow:c,"tooltip--top":`_tooltip--top_t6gns_27`,"tooltip--bottom":`_tooltip--bottom_t6gns_41`,"tooltip--left":`_tooltip--left_t6gns_55`,"tooltip--right":`_tooltip--right_t6gns_69`}})),d,f,p,m=t((()=>{d=e(n(),1),i(),u(),f=r(),p=({content:e,placement:t=`top`,disabled:n=!1,children:r,className:i,...o})=>{let[s,c]=(0,d.useState)(!1);return n?(0,f.jsx)(f.Fragment,{children:r}):(0,f.jsxs)(`div`,{className:a(l.wrapper,i),onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),onFocus:()=>c(!0),onBlur:()=>c(!1),...o,children:[r,s&&(0,f.jsxs)(`div`,{role:`tooltip`,className:a(l.tooltip,l[`tooltip--${t}`]),children:[e,(0,f.jsx)(`span`,{className:l.arrow})]})]})},p.__docgenInfo={description:`Tooltip component that displays additional information when hovering over an element.\r
\r
@param content - Content to display inside the tooltip\r
@param placement - Tooltip position relative to the child element\r
@param disabled - Whether the tooltip is disabled\r
@param children - Element that activates the tooltip`,methods:[],displayName:`Tooltip`,props:{content:{required:!0,tsType:{name:`ReactNode`},description:`Tooltip content`},children:{required:!0,tsType:{name:`ReactNode`},description:`Element that triggers the tooltip`},placement:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom' | 'left' | 'right'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:`Tooltip position relative to the child element\r
@default 'top'`,defaultValue:{value:`'top'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the tooltip is disabled\r
@default false`,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]}})),h,g,_,v,y=t((()=>{h={content:`Additional information`,placement:`top`,disabled:!1},g={content:{control:{type:`text`},description:`Text or node displayed inside the tooltip bubble.`,table:{type:{summary:`ReactNode`}}},placement:{control:{type:`select`},options:[`top`,`bottom`,`left`,`right`],description:`Position of the tooltip relative to its trigger element.`,table:{type:{summary:`top | bottom | left | right`},defaultValue:{summary:`top`}}},disabled:{control:{type:`boolean`},description:`When true, the tooltip is not shown.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},_={docs:{description:{component:`A lightweight tooltip that appears on hover or focus around a trigger element. Supports four placement positions and can be conditionally disabled.`}}},v=[`top`,`bottom`,`left`,`right`]})),b,x,S,C,w,T,E,D,O;t((()=>{n(),m(),y(),b=r(),{within:x,expect:S}=__STORYBOOK_MODULE_TEST__,C={title:`Components/Tooltip`,component:p,tags:[`autodocs`],args:{...h,children:(0,b.jsx)(`button`,{type:`button`,children:`Hover me`})},argTypes:g,parameters:_},w={play:async({canvasElement:e})=>{await S(x(e).getByText(`Hover me`)).toBeInTheDocument()}},T={render:()=>(0,b.jsx)(`div`,{style:{display:`flex`,gap:`80px`,padding:`60px`,justifyContent:`center`},children:v.map(e=>(0,b.jsx)(p,{content:`Tooltip ${e}`,placement:e,children:(0,b.jsx)(`button`,{type:`button`,children:e})},e))})},E={args:{content:(0,b.jsxs)(`span`,{children:[(0,b.jsx)(`strong`,{children:`Title`}),(0,b.jsx)(`br`,{}),`Additional description`]}),children:(0,b.jsx)(`button`,{type:`button`,children:`Rich content`})}},D={args:{disabled:!0,children:(0,b.jsx)(`button`,{type:`button`,children:`Disabled tooltip`})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Hover me')).toBeInTheDocument();
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '80px',
    padding: '60px',
    justifyContent: 'center'
  }}>\r
      {allPlacements.map(placement => <Tooltip key={placement} content={\`Tooltip \${placement}\`} placement={placement}>\r
          <button type="button">{placement}</button>\r
        </Tooltip>)}\r
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    content: <span>\r
        <strong>Title</strong>\r
        <br />\r
        Additional description\r
      </span>,
    children: <button type="button">Rich content</button>
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: <button type="button">Disabled tooltip</button>
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`Placements`,`WithReactContent`,`Disabled`]}))();export{w as Default,D as Disabled,T as Placements,E as WithReactContent,O as __namedExportsOrder,C as default};