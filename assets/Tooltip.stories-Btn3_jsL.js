import{n as e}from"./chunk-BneVvdWh.js";import{Ht as t,_t as n,n as r,t as i}from"./iframe-BrtTKpdh.js";var a,o,s,c,l=e((()=>{a={content:`Additional information`,placement:`top`,disabled:!1},o={content:{control:{type:`text`},description:`Text or node displayed inside the tooltip bubble.`,table:{type:{summary:`ReactNode`}}},placement:{control:{type:`select`},options:[`top`,`bottom`,`left`,`right`],description:`Position of the tooltip relative to its trigger element.`,table:{type:{summary:`top | bottom | left | right`},defaultValue:{summary:`top`}}},disabled:{control:{type:`boolean`},description:`When true, the tooltip is not shown.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},s={docs:{description:{component:`A lightweight tooltip that appears on hover or focus around a trigger element. Supports four placement positions and can be conditionally disabled.`}}},c=[`top`,`bottom`,`left`,`right`]})),u,d,f,p,m,h,g,_,v;e((()=>{t(),r(),l(),u=n(),{within:d,expect:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/Tooltip`,component:i,tags:[`autodocs`],args:{...a,children:(0,u.jsx)(`button`,{type:`button`,children:`Hover me`})},argTypes:o,parameters:s},m={play:async({canvasElement:e})=>{await f(d(e).getByText(`Hover me`)).toBeInTheDocument()}},h={render:()=>(0,u.jsx)(`div`,{style:{display:`flex`,gap:`80px`,padding:`60px`,justifyContent:`center`},children:c.map(e=>(0,u.jsx)(i,{content:`Tooltip ${e}`,placement:e,children:(0,u.jsx)(`button`,{type:`button`,children:e})},e))})},g={args:{content:(0,u.jsxs)(`span`,{children:[(0,u.jsx)(`strong`,{children:`Title`}),(0,u.jsx)(`br`,{}),`Additional description`]}),children:(0,u.jsx)(`button`,{type:`button`,children:`Rich content`})}},_={args:{disabled:!0,children:(0,u.jsx)(`button`,{type:`button`,children:`Disabled tooltip`})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Hover me')).toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    content: <span>\r
        <strong>Title</strong>\r
        <br />\r
        Additional description\r
      </span>,
    children: <button type="button">Rich content</button>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: <button type="button">Disabled tooltip</button>
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Placements`,`WithReactContent`,`Disabled`]}))();export{m as Default,_ as Disabled,h as Placements,g as WithReactContent,v as __namedExportsOrder,p as default};