import{t as e}from"./iframe-YpqvHZo3.js";import{t}from"./jsx-runtime-ChNUh70B.js";import{t as n}from"./types-BTwUNDvM.js";import{n as r,t as i}from"./Icon-BUEZOljQ.js";e();var a={display:`flex`,gap:`16px`,alignItems:`center`,flexWrap:`wrap`,marginBottom:`16px`},o={display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`,minWidth:`80px`};n.SMALL,n.MEDIUM,n.LARGE,r.OUTLINE,r.SOLID,r.DUAL;var s=t(),c={title:`Components/Icon`,component:i,tags:[`autodocs`],argTypes:{name:{control:`text`,description:`Material Icons name (e.g. "home", "star", "settings"). See https://fonts.google.com/icons for the full list.`,table:{type:{summary:`string`}}},size:{control:`select`,options:Object.values(n),description:`Size of the icon.`,table:{type:{summary:Object.values(n).join(` | `)},defaultValue:{summary:n.MEDIUM}}},variant:{control:`select`,options:Object.values(r),description:`Icon style variant: outline, solid, or dual-tone.`,table:{type:{summary:Object.values(r).join(` | `)},defaultValue:{summary:r.OUTLINE}}},color:{control:`color`,description:`Primary color of the icon. Has no effect when inheritColor is true.`,table:{type:{summary:`string`}}},secondaryColor:{control:`color`,description:`Secondary color used only for the dual-tone variant.`,table:{type:{summary:`string`}}},inheritColor:{control:{type:`boolean`},description:`When true, the icon inherits its color from the parent element.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},parameters:{docs:{description:{component:`Renders a Material Icons glyph with support for multiple sizes, style variants (outline, solid, dual-tone) and custom or inherited colors.`}}},args:{name:`home`,size:n.MEDIUM,variant:r.OUTLINE}},l={args:{name:`home`}},u={render:()=>(0,s.jsx)(`div`,{style:a,children:Object.values(n).map(e=>(0,s.jsxs)(`div`,{style:o,children:[(0,s.jsx)(i,{name:`home`,size:e}),(0,s.jsx)(`span`,{children:e})]},e))}),parameters:{docs:{description:{story:`Muestra los diferentes tamaños disponibles para el componente Icon.`}}}},d={render:()=>(0,s.jsxs)(`div`,{style:a,children:[(0,s.jsxs)(`div`,{style:o,children:[(0,s.jsx)(i,{name:`home`,variant:r.OUTLINE}),(0,s.jsx)(`span`,{children:`Outline`})]}),(0,s.jsxs)(`div`,{style:o,children:[(0,s.jsx)(i,{name:`home`,variant:r.SOLID,color:`#007bff`}),(0,s.jsx)(`span`,{children:`Solid`})]}),(0,s.jsxs)(`div`,{style:o,children:[(0,s.jsx)(i,{name:`home`,variant:r.DUAL,color:`#ff5722`,secondaryColor:`#4caf50`}),(0,s.jsx)(`span`,{children:`Dual`})]})]}),parameters:{docs:{description:{story:`Muestra las diferentes variantes de estilo disponibles para el componente Icon.`}}}},f={args:{name:`star`,color:`#ff5722`},parameters:{docs:{description:{story:`Ejemplo de un icono con un color personalizado.`}}}},p={render:()=>(0,s.jsxs)(`div`,{style:{color:`purple`},children:[(0,s.jsx)(`p`,{children:`Este texto es morado, y el icono hereda el color:`}),(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`,marginTop:`8px`},children:[(0,s.jsx)(i,{name:`check`,inheritColor:!0,size:n.LARGE}),(0,s.jsx)(i,{name:`star`,inheritColor:!0,size:n.LARGE}),(0,s.jsx)(i,{name:`heart`,inheritColor:!0,size:n.LARGE})]})]}),parameters:{docs:{description:{story:`Ejemplo de iconos que heredan el color del elemento padre.`}}}},m={render:()=>(0,s.jsxs)(`div`,{style:a,children:[(0,s.jsxs)(`div`,{style:o,children:[(0,s.jsx)(i,{name:`home`,disabled:!0}),(0,s.jsx)(`span`,{children:`Deshabilitado`})]}),(0,s.jsxs)(`div`,{style:o,children:[(0,s.jsx)(i,{name:`home`}),(0,s.jsx)(`span`,{children:`Habilitado`})]})]}),parameters:{docs:{description:{story:`Muestra el estado deshabilitado del icono.`}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'home'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={containerStyle}>\r
      {Object.values(ComponentSize).map(size => <div key={size} style={itemContainerStyle}>\r
          <Icon name="home" size={size} />\r
          <span>{size}</span>\r
        </div>)}\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Muestra los diferentes tamaños disponibles para el componente Icon.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={containerStyle}>\r
      <div style={itemContainerStyle}>\r
        <Icon name="home" variant={IconVariant.OUTLINE} />\r
        <span>Outline</span>\r
      </div>\r
      <div style={itemContainerStyle}>\r
        <Icon name="home" variant={IconVariant.SOLID} color="#007bff" />\r
        <span>Solid</span>\r
      </div>\r
      <div style={itemContainerStyle}>\r
        <Icon name="home" variant={IconVariant.DUAL} color="#ff5722" secondaryColor="#4caf50" />\r
        <span>Dual</span>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Muestra las diferentes variantes de estilo disponibles para el componente Icon.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'star',
    color: '#ff5722'
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de un icono con un color personalizado.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    color: 'purple'
  }}>\r
      <p>Este texto es morado, y el icono hereda el color:</p>\r
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
      marginTop: '8px'
    }}>\r
        <Icon name="check" inheritColor size={ComponentSize.LARGE} />\r
        <Icon name="star" inheritColor size={ComponentSize.LARGE} />\r
        <Icon name="heart" inheritColor size={ComponentSize.LARGE} />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de iconos que heredan el color del elemento padre.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={containerStyle}>\r
      <div style={itemContainerStyle}>\r
        <Icon name="home" disabled />\r
        <span>Deshabilitado</span>\r
      </div>\r
      <div style={itemContainerStyle}>\r
        <Icon name="home" />\r
        <span>Habilitado</span>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Muestra el estado deshabilitado del icono.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};var h=[`Default`,`Sizes`,`Variants`,`WithCustomColor`,`WithInheritColor`,`DisabledState`];export{l as Default,m as DisabledState,u as Sizes,d as Variants,f as WithCustomColor,p as WithInheritColor,h as __namedExportsOrder,c as default};