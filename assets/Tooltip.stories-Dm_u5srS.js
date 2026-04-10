import{r as e,t}from"./iframe-BwpCWMiM.js";import{t as n}from"./jsx-runtime-BsbbwSUz.js";import{t as r}from"./classNames-DYb3CZs3.js";var i=e(t(),1),a={wrapper:`_wrapper_t6gns_1`,tooltip:`_tooltip_t6gns_7`,arrow:`_arrow_t6gns_21`,"tooltip--top":`_tooltip--top_t6gns_27`,"tooltip--bottom":`_tooltip--bottom_t6gns_41`,"tooltip--left":`_tooltip--left_t6gns_55`,"tooltip--right":`_tooltip--right_t6gns_69`},o=n(),s=({content:e,placement:t=`top`,disabled:n=!1,children:s,className:c,...l})=>{let[u,d]=(0,i.useState)(!1);return n?(0,o.jsx)(o.Fragment,{children:s}):(0,o.jsxs)(`div`,{className:r(a.wrapper,c),onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),onFocus:()=>d(!0),onBlur:()=>d(!1),...l,children:[s,u&&(0,o.jsxs)(`div`,{role:`tooltip`,className:r(a.tooltip,a[`tooltip--${t}`]),children:[e,(0,o.jsx)(`span`,{className:a.arrow})]})]})};s.__docgenInfo={description:`Tooltip component that displays additional information when hovering over an element.\r
\r
@param content - Content to display inside the tooltip\r
@param placement - Tooltip position relative to the child element\r
@param disabled - Whether the tooltip is disabled\r
@param children - Element that activates the tooltip`,methods:[],displayName:`Tooltip`,props:{content:{required:!0,tsType:{name:`ReactNode`},description:`Tooltip content`},children:{required:!0,tsType:{name:`ReactNode`},description:`Element that triggers the tooltip`},placement:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom' | 'left' | 'right'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:`Tooltip position relative to the child element\r
@default 'top'`,defaultValue:{value:`'top'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the tooltip is disabled\r
@default false`,defaultValue:{value:`false`,computed:!1}}},composes:[`HTMLAttributes`]};var c={content:`Additional information`,placement:`top`,disabled:!1},l={content:{control:`text`,description:`Text or node displayed inside the tooltip bubble.`,table:{type:{summary:`ReactNode`}}},placement:{control:{type:`select`},options:[`top`,`bottom`,`left`,`right`],description:`Position of the tooltip relative to its trigger element.`,table:{type:{summary:`top | bottom | left | right`},defaultValue:{summary:`top`}}},disabled:{control:`boolean`,description:`When true, the tooltip is not shown.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},u={docs:{description:{component:`A lightweight tooltip that appears on hover or focus around a trigger element. Supports four placement positions and can be conditionally disabled.`}}},d=[`top`,`bottom`,`left`,`right`],f={title:`Components/Tooltip`,component:s,tags:[`autodocs`],args:{...c,children:(0,o.jsx)(`button`,{type:`button`,children:`Hover me`})},argTypes:l,parameters:u},p={},m={render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,gap:`80px`,padding:`60px`,justifyContent:`center`},children:d.map(e=>(0,o.jsx)(s,{content:`Tooltip ${e}`,placement:e,children:(0,o.jsx)(`button`,{type:`button`,children:e})},e))})},h={args:{content:(0,o.jsxs)(`span`,{children:[(0,o.jsx)(`strong`,{children:`Title`}),(0,o.jsx)(`br`,{}),`Additional description`]}),children:(0,o.jsx)(`button`,{type:`button`,children:`Rich content`})}},g={args:{disabled:!0,children:(0,o.jsx)(`button`,{type:`button`,children:`Disabled tooltip`})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    content: <span>\r
        <strong>Title</strong>\r
        <br />\r
        Additional description\r
      </span>,
    children: <button type="button">Rich content</button>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: <button type="button">Disabled tooltip</button>
  }
}`,...g.parameters?.docs?.source}}};var _=[`Default`,`Placements`,`WithReactContent`,`Disabled`];export{p as Default,g as Disabled,m as Placements,h as WithReactContent,_ as __namedExportsOrder,f as default};