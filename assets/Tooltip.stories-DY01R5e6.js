import{r as e,t}from"./iframe-YpqvHZo3.js";import{t as n}from"./jsx-runtime-ChNUh70B.js";import{t as r}from"./classNames-DYb3CZs3.js";var i=e(t(),1),a={wrapper:`_wrapper_t6gns_1`,tooltip:`_tooltip_t6gns_7`,arrow:`_arrow_t6gns_21`,"tooltip--top":`_tooltip--top_t6gns_27`,"tooltip--bottom":`_tooltip--bottom_t6gns_41`,"tooltip--left":`_tooltip--left_t6gns_55`,"tooltip--right":`_tooltip--right_t6gns_69`},o=n(),s=({content:e,placement:t=`top`,disabled:n=!1,children:s,className:c,...l})=>{let[u,d]=(0,i.useState)(!1);return n?(0,o.jsx)(o.Fragment,{children:s}):(0,o.jsxs)(`div`,{className:r(a.wrapper,c),onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),onFocus:()=>d(!0),onBlur:()=>d(!1),...l,children:[s,u&&(0,o.jsxs)(`div`,{role:`tooltip`,className:r(a.tooltip,a[`tooltip--${t}`]),children:[e,(0,o.jsx)(`span`,{className:a.arrow})]})]})};s.__docgenInfo={description:`Componente Tooltip que muestra información adicional al hacer hover sobre un elemento.\r
\r
@param content - Contenido a mostrar dentro del tooltip\r
@param placement - Posición del tooltip respecto al elemento hijo\r
@param disabled - Si el tooltip está deshabilitado\r
@param children - Elemento que activa el tooltip`,methods:[],displayName:`Tooltip`,props:{content:{required:!0,tsType:{name:`ReactNode`},description:`Contenido del tooltip`},children:{required:!0,tsType:{name:`ReactNode`},description:`Elemento que activa el tooltip`},placement:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom' | 'left' | 'right'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:`Posición del tooltip relativa al elemento hijo\r
@default 'top'`,defaultValue:{value:`'top'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Si el tooltip está deshabilitado\r
@default false`,defaultValue:{value:`false`,computed:!1}}},composes:[`HTMLAttributes`]};var c={content:`Additional information`,placement:`top`,disabled:!1},l={content:{control:`text`,description:`Text or node displayed inside the tooltip bubble.`,table:{type:{summary:`ReactNode`}}},placement:{control:{type:`select`},options:[`top`,`bottom`,`left`,`right`],description:`Position of the tooltip relative to its trigger element.`,table:{type:{summary:`top | bottom | left | right`},defaultValue:{summary:`top`}}},disabled:{control:`boolean`,description:`When true, the tooltip is not shown.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},u={docs:{description:{component:`A lightweight tooltip that appears on hover or focus around a trigger element. Supports four placement positions and can be conditionally disabled.`}}},d=[`top`,`bottom`,`left`,`right`],f={title:`Components/Tooltip`,component:s,tags:[`autodocs`],args:{...c,children:(0,o.jsx)(`button`,{type:`button`,children:`Hover me`})},argTypes:l,parameters:u},p={},m={render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,gap:`80px`,padding:`60px`,justifyContent:`center`},children:d.map(e=>(0,o.jsx)(s,{content:`Tooltip ${e}`,placement:e,children:(0,o.jsx)(`button`,{type:`button`,children:e})},e))})},h={args:{content:(0,o.jsxs)(`span`,{children:[(0,o.jsx)(`strong`,{children:`Título`}),(0,o.jsx)(`br`,{}),`Descripción adicional`]}),children:(0,o.jsx)(`button`,{type:`button`,children:`Rich content`})}},g={args:{disabled:!0,children:(0,o.jsx)(`button`,{type:`button`,children:`Disabled tooltip`})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        <strong>Título</strong>\r
        <br />\r
        Descripción adicional\r
      </span>,
    children: <button type="button">Rich content</button>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: <button type="button">Disabled tooltip</button>
  }
}`,...g.parameters?.docs?.source}}};var _=[`Default`,`Placements`,`WithReactContent`,`Disabled`];export{p as Default,g as Disabled,m as Placements,h as WithReactContent,_ as __namedExportsOrder,f as default};