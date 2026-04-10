import{r as e,t}from"./iframe-YpqvHZo3.js";import{t as n}from"./jsx-runtime-ChNUh70B.js";import{t as r}from"./classNames-DYb3CZs3.js";import{t as i}from"./types-BTwUNDvM.js";var a=e(t(),1),o=n(),s=({label:e,checked:t=!1,disabled:n=!1,onChange:s,size:c=i.MEDIUM,className:l=``,...u})=>{let[d,f]=(0,a.useState)(t),p=()=>{if(!n){let e=!d;f(e),s?.(e)}};return(0,o.jsxs)(`label`,{className:r(`check-button`,`check-button--${c}`,{"check-button--disabled":n},l),children:[(0,o.jsx)(`input`,{type:`checkbox`,checked:d,onChange:p,disabled:n,className:`check-button__input`,...u}),(0,o.jsx)(`span`,{className:`check-button__checkmark`}),e&&(0,o.jsx)(`span`,{className:`check-button__label`,children:e})]})};s.__docgenInfo={description:`CheckButton - Un componente de botón de verificación personalizable.\r
\r
@component\r
@example\r
<CheckButton \r
  label="Opción 1"\r
  onChange={(checked) => console.log(checked)}\r
  checked={false}\r
  disabled={false}\r
  size="medium"\r
/>\r
\r
@example\r
// Ejemplo con diferentes tamaños\r
<div>\r
  <CheckButton label="Pequeño" size="small" />\r
  <CheckButton label="Mediano (predeterminado)" size="medium" />\r
  <CheckButton label="Grande" size="large" />\r
</div>\r
\r
@param {string} [label] - Texto que se muestra junto al checkbox\r
@param {boolean} [checked=false] - Estado inicial del checkbox\r
@param {boolean} [disabled=false] - Si es true, el checkbox está deshabilitado\r
@param {Function} [onChange] - Función que se ejecuta cuando cambia el estado del checkbox\r
@param {'small'|'medium'|'large'} [size='medium'] - Tamaño del botón de verificación\r
@param {string} [className] - Clase CSS adicional para personalizar el estilo`,methods:[],displayName:`CheckButton`,props:{label:{required:!1,tsType:{name:`string`},description:`Etiqueta que se muestra junto al checkbox`},checked:{required:!1,tsType:{name:`boolean`},description:`Estado del checkbox (controlado)\r
@default false`,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Estado deshabilitado del checkbox\r
@default false`,defaultValue:{value:`false`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:`Función que se ejecuta cuando cambia el estado del checkbox\r
@param checked - Nuevo valor del checkbox`},className:{required:!1,tsType:{name:`string`},description:`Clase CSS personalizada`,defaultValue:{value:`''`,computed:!1}},size:{required:!1,tsType:{name:`ComponentSize`},description:`Tamaño del botón de verificación\r
@default 'medium'`,defaultValue:{value:`ComponentSize.MEDIUM`,computed:!0}}},composes:[`Omit`]};var c={title:`Components/CheckButton`,component:s,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Text label displayed next to the checkbox.`,table:{type:{summary:`string`}}},checked:{control:`boolean`,description:`Controls the checked state of the checkbox.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`When true, the checkbox is non-interactive and visually muted.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},size:{control:`select`,options:Object.values(i),description:`Size of the checkbox and its label.`,table:{type:{summary:Object.values(i).join(` | `)},defaultValue:{summary:i.MEDIUM}}},onChange:{action:`changed`,description:`Callback fired when the checked state changes.`,table:{type:{summary:`(checked: boolean) => void`}}},className:{control:`text`,description:`Additional CSS class names for the root element.`,table:{type:{summary:`string`}}}},parameters:{docs:{description:{component:`A styled checkbox component that wraps a native input with a label. Supports multiple sizes, controlled and uncontrolled usage, and a disabled state.`}}},args:{label:`Option label`,checked:!1,disabled:!1}},l=[{id:`1`,label:`Opción 1`},{id:`2`,label:`Opción 2`},{id:`3`,label:`Opción 3`}],u={display:`flex`,flexDirection:`column`,gap:`12px`},d={marginTop:`16px`},f={render:e=>(0,o.jsx)(s,{...e}),args:{label:`Opción predeterminada (medium)`}},p={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,o.jsx)(s,{label:`Tamaño pequeño (${i.SMALL})`,size:i.SMALL}),(0,o.jsx)(s,{label:`Tamaño mediano (${i.MEDIUM}) - predeterminado`,size:i.MEDIUM}),(0,o.jsx)(s,{label:`Tamaño grande (${i.LARGE})`,size:i.LARGE})]}),parameters:{docs:{description:{story:`Ejemplo que muestra los diferentes tamaños disponibles para el botón de verificación.`}}}},m={args:{disabled:!0,label:`Opción deshabilitada`}},h={args:{label:`Opción grande`,className:`check-button--large`}},g={args:{label:`Opción pequeña`,className:`check-button--small`}},_={render:function(e){let[t,n]=(0,a.useState)(!1);return(0,o.jsx)(s,{...e,checked:t,onChange:e=>n(e)})},args:{label:`Haz clic para cambiar`}},v={render:function(){let[e,t]=(0,a.useState)([]),n=e=>{t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return(0,o.jsxs)(`div`,{style:u,children:[l.map(t=>(0,o.jsx)(s,{label:t.label,checked:e.includes(t.id),onChange:()=>n(t.id)},t.id)),(0,o.jsx)(`div`,{style:d,children:(0,o.jsxs)(`p`,{children:[`Seleccionados: `,e.length>0?e.join(`, `):`Ninguno`]})})]})},parameters:{docs:{description:{story:`Ejemplo de un grupo de checkboxes que se pueden seleccionar múltiples opciones.`}}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <CheckButton {...args} />,
  args: {
    label: 'Opción predeterminada (medium)'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <CheckButton label={\`Tamaño pequeño (\${ComponentSize.SMALL})\`} size={ComponentSize.SMALL} />\r
      <CheckButton label={\`Tamaño mediano (\${ComponentSize.MEDIUM}) - predeterminado\`} size={ComponentSize.MEDIUM} />\r
      <CheckButton label={\`Tamaño grande (\${ComponentSize.LARGE})\`} size={ComponentSize.LARGE} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo que muestra los diferentes tamaños disponibles para el botón de verificación.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Opción deshabilitada'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Opción grande',
    className: 'check-button--large'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Opción pequeña',
    className: 'check-button--small'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function InteractiveTemplate(args) {
    const [checked, setChecked] = useState(false);
    return <CheckButton {...args} checked={checked} onChange={(isChecked: boolean) => setChecked(isChecked)} />;
  },
  args: {
    label: 'Haz clic para cambiar'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function GroupRender() {
    const [selected, setSelected] = useState<string[]>([]);
    const handleChange = (value: string) => {
      setSelected(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
    };
    return <div style={groupContainerStyle}>\r
        {groupOptions.map(option => <CheckButton key={option.id} label={option.label} checked={selected.includes(option.id)} onChange={() => handleChange(option.id)} />)}\r
        <div style={selectedItemsStyle}>\r
          <p>Seleccionados: {selected.length > 0 ? selected.join(', ') : 'Ninguno'}</p>\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de un grupo de checkboxes que se pueden seleccionar múltiples opciones.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};var y=[`Default`,`SizeVariations`,`Disabled`,`Large`,`Small`,`Interactive`,`Group`];export{f as Default,m as Disabled,v as Group,_ as Interactive,h as Large,p as SizeVariations,g as Small,y as __namedExportsOrder,c as default};