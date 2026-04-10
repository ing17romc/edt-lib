import{r as e,t}from"./iframe-BwpCWMiM.js";import{t as n}from"./jsx-runtime-BsbbwSUz.js";import{t as r}from"./classNames-DYb3CZs3.js";import{t as i}from"./types-BTwUNDvM.js";var a=e(t(),1),o=n(),s=({label:e,checked:t=!1,disabled:n=!1,onChange:s,size:c=i.MEDIUM,className:l=``,...u})=>{let[d,f]=(0,a.useState)(t),p=()=>{if(!n){let e=!d;f(e),s?.(e)}};return(0,o.jsxs)(`label`,{className:r(`check-button`,`check-button--${c}`,{"check-button--disabled":n},l),children:[(0,o.jsx)(`input`,{type:`checkbox`,checked:d,onChange:p,disabled:n,className:`check-button__input`,...u}),(0,o.jsx)(`span`,{className:`check-button__checkmark`}),e&&(0,o.jsx)(`span`,{className:`check-button__label`,children:e})]})};s.__docgenInfo={description:`CheckButton - A customizable checkbox button component.\r
\r
@component\r
@example\r
<CheckButton \r
  label="Option 1"\r
  onChange={(checked) => console.log(checked)}\r
  checked={false}\r
  disabled={false}\r
  size="medium"\r
/>\r
\r
@example\r
// Example with different sizes\r
<div>\r
  <CheckButton label="Small" size="small" />\r
  <CheckButton label="Medium (default)" size="medium" />\r
  <CheckButton label="Large" size="large" />\r
</div>\r
\r
@param {string} [label] - Text displayed next to the checkbox\r
@param {boolean} [checked=false] - Initial checkbox state\r
@param {boolean} [disabled=false] - If true, the checkbox is disabled\r
@param {Function} [onChange] - Function called when the checkbox state changes\r
@param {'small'|'medium'|'large'} [size='medium'] - Checkbox button size\r
@param {string} [className] - Additional CSS class for custom styling`,methods:[],displayName:`CheckButton`,props:{label:{required:!1,tsType:{name:`string`},description:`Label displayed next to the checkbox`},checked:{required:!1,tsType:{name:`boolean`},description:`Checkbox state (controlled)\r
@default false`,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Disabled state of the checkbox\r
@default false`,defaultValue:{value:`false`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:`Function called when the checkbox state changes\r
@param checked - New checkbox value`},className:{required:!1,tsType:{name:`string`},description:`Custom CSS class`,defaultValue:{value:`''`,computed:!1}},size:{required:!1,tsType:{name:`ComponentSize`},description:`Checkbox button size\r
@default 'medium'`,defaultValue:{value:`ComponentSize.MEDIUM`,computed:!0}}},composes:[`Omit`]};var c={title:`Components/CheckButton`,component:s,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Text label displayed next to the checkbox.`,table:{type:{summary:`string`}}},checked:{control:`boolean`,description:`Controls the checked state of the checkbox.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`When true, the checkbox is non-interactive and visually muted.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},size:{control:`select`,options:Object.values(i),description:`Size of the checkbox and its label.`,table:{type:{summary:Object.values(i).join(` | `)},defaultValue:{summary:i.MEDIUM}}},onChange:{action:`changed`,description:`Callback fired when the checked state changes.`,table:{type:{summary:`(checked: boolean) => void`}}},className:{control:`text`,description:`Additional CSS class names for the root element.`,table:{type:{summary:`string`}}}},parameters:{docs:{description:{component:`A styled checkbox component that wraps a native input with a label. Supports multiple sizes, controlled and uncontrolled usage, and a disabled state.`}}},args:{label:`Option label`,checked:!1,disabled:!1}},l=[{id:`1`,label:`Option 1`},{id:`2`,label:`Option 2`},{id:`3`,label:`Option 3`}],u={display:`flex`,flexDirection:`column`,gap:`12px`},d={marginTop:`16px`},f={render:e=>(0,o.jsx)(s,{...e}),args:{label:`Default option (medium)`}},p={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,o.jsx)(s,{label:`Small size (${i.SMALL})`,size:i.SMALL}),(0,o.jsx)(s,{label:`Medium size (${i.MEDIUM}) - default`,size:i.MEDIUM}),(0,o.jsx)(s,{label:`Large size (${i.LARGE})`,size:i.LARGE})]}),parameters:{docs:{description:{story:`Example showing the different sizes available for the checkbox button.`}}}},m={args:{disabled:!0,label:`Disabled option`}},h={args:{label:`Large option`,className:`check-button--large`}},g={args:{label:`Small option`,className:`check-button--small`}},_={render:function(e){let[t,n]=(0,a.useState)(!1);return(0,o.jsx)(s,{...e,checked:t,onChange:e=>n(e)})},args:{label:`Click to toggle`}},v={render:function(){let[e,t]=(0,a.useState)([]),n=e=>{t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return(0,o.jsxs)(`div`,{style:u,children:[l.map(t=>(0,o.jsx)(s,{label:t.label,checked:e.includes(t.id),onChange:()=>n(t.id)},t.id)),(0,o.jsx)(`div`,{style:d,children:(0,o.jsxs)(`p`,{children:[`Selected: `,e.length>0?e.join(`, `):`None`]})})]})},parameters:{docs:{description:{story:`Example of a checkbox group where multiple options can be selected.`}}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <CheckButton {...args} />,
  args: {
    label: 'Default option (medium)'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <CheckButton label={\`Small size (\${ComponentSize.SMALL})\`} size={ComponentSize.SMALL} />\r
      <CheckButton label={\`Medium size (\${ComponentSize.MEDIUM}) - default\`} size={ComponentSize.MEDIUM} />\r
      <CheckButton label={\`Large size (\${ComponentSize.LARGE})\`} size={ComponentSize.LARGE} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example showing the different sizes available for the checkbox button.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Disabled option'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large option',
    className: 'check-button--large'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small option',
    className: 'check-button--small'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function InteractiveTemplate(args) {
    const [checked, setChecked] = useState(false);
    return <CheckButton {...args} checked={checked} onChange={(isChecked: boolean) => setChecked(isChecked)} />;
  },
  args: {
    label: 'Click to toggle'
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
          <p>Selected: {selected.length > 0 ? selected.join(', ') : 'None'}</p>\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a checkbox group where multiple options can be selected.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};var y=[`Default`,`SizeVariations`,`Disabled`,`Large`,`Small`,`Interactive`,`Group`];export{f as Default,m as Disabled,v as Group,_ as Interactive,h as Large,p as SizeVariations,g as Small,y as __namedExportsOrder,c as default};