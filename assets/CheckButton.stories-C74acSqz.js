import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-DoW-sQG_.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{n as i,t as a}from"./classNames-Bj-wXTiJ.js";import{r as o,t as s}from"./types-Duki_pzD.js";var c=t((()=>{})),l,u,d,f=t((()=>{l=e(n(),1),i(),c(),o(),u=r(),d=({label:e,checked:t=!1,disabled:n=!1,onChange:r,size:i=s.MEDIUM,className:o=``,...c})=>{let[d,f]=(0,l.useState)(t),p=()=>{if(!n){let e=!d;f(e),r?.(e)}};return(0,u.jsxs)(`label`,{className:a(`check-button`,`check-button--${i}`,{"check-button--disabled":n},o),children:[(0,u.jsx)(`input`,{type:`checkbox`,checked:d,onChange:p,disabled:n,className:`check-button__input`,...c}),(0,u.jsx)(`span`,{className:`check-button__checkmark`}),e&&(0,u.jsx)(`span`,{className:`check-button__label`,children:e})]})},d.__docgenInfo={description:`CheckButton - A customizable checkbox button component.\r
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
@default 'medium'`,defaultValue:{value:`ComponentSize.MEDIUM`,computed:!0}}},composes:[`Omit`]}})),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;t((()=>{p=e(n(),1),f(),o(),m=r(),{within:h,expect:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/CheckButton`,component:d,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Text label displayed next to the checkbox.`,table:{type:{summary:`string`}}},checked:{control:`boolean`,description:`Controls the checked state of the checkbox.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`When true, the checkbox is non-interactive and visually muted.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},size:{control:`select`,options:Object.values(s),description:`Size of the checkbox and its label.`,table:{type:{summary:Object.values(s).join(` | `)},defaultValue:{summary:s.MEDIUM}}},onChange:{action:`changed`,description:`Callback fired when the checked state changes.`,table:{type:{summary:`(checked: boolean) => void`}}},className:{control:`text`,description:`Additional CSS class names for the root element.`,table:{type:{summary:`string`}}}},parameters:{docs:{description:{component:`A styled checkbox component that wraps a native input with a label. Supports multiple sizes, controlled and uncontrolled usage, and a disabled state.`}}},args:{label:`Option label`,checked:!1,disabled:!1}},v=[{id:`1`,label:`Option 1`},{id:`2`,label:`Option 2`},{id:`3`,label:`Option 3`}],y={display:`flex`,flexDirection:`column`,gap:`12px`},b={marginTop:`16px`},x={render:e=>(0,m.jsx)(d,{...e}),args:{label:`Default option (medium)`},play:async({canvasElement:e})=>{await g(h(e).getByText(`Default option (medium)`).closest(`label`)).toHaveClass(`check-button`)}},S={render:()=>(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,m.jsx)(d,{label:`Small size (${s.SMALL})`,size:s.SMALL}),(0,m.jsx)(d,{label:`Medium size (${s.MEDIUM}) - default`,size:s.MEDIUM}),(0,m.jsx)(d,{label:`Large size (${s.LARGE})`,size:s.LARGE})]}),play:async({canvasElement:e})=>{let t=h(e),n=t.getByText(/Small size/).closest(`label`),r=t.getByText(/Medium size/).closest(`label`),i=t.getByText(/Large size/).closest(`label`);await g(n).toHaveClass(`check-button--small`),await g(r).toHaveClass(`check-button`),await g(i).toHaveClass(`check-button--large`)},parameters:{docs:{description:{story:`Example showing the different sizes available for the checkbox button.`}}}},C={args:{disabled:!0,label:`Disabled option`},play:async({canvasElement:e})=>{await g(h(e).getByRole(`checkbox`)).toBeDisabled()}},w={args:{label:`Large option`,className:`check-button--large`}},T={args:{label:`Small option`,className:`check-button--small`}},E={render:function(e){let[t,n]=(0,p.useState)(!1);return(0,m.jsx)(d,{...e,checked:t,onChange:e=>n(e)})},args:{label:`Click to toggle`}},D={render:function(){let[e,t]=(0,p.useState)([]),n=e=>{t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return(0,m.jsxs)(`div`,{style:y,children:[v.map(t=>(0,m.jsx)(d,{label:t.label,checked:e.includes(t.id),onChange:()=>n(t.id)},t.id)),(0,m.jsx)(`div`,{style:b,children:(0,m.jsxs)(`p`,{children:[`Selected: `,e.length>0?e.join(`, `):`None`]})})]})},parameters:{docs:{description:{story:`Example of a checkbox group where multiple options can be selected.`}}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <CheckButton {...args} />,
  args: {
    label: 'Default option (medium)'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText('Default option (medium)').closest('label');
    await expect(label).toHaveClass('check-button');
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <CheckButton label={\`Small size (\${ComponentSize.SMALL})\`} size={ComponentSize.SMALL} />\r
      <CheckButton label={\`Medium size (\${ComponentSize.MEDIUM}) - default\`} size={ComponentSize.MEDIUM} />\r
      <CheckButton label={\`Large size (\${ComponentSize.LARGE})\`} size={ComponentSize.LARGE} />\r
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const smallLabel = canvas.getByText(/Small size/).closest('label');
    const mediumLabel = canvas.getByText(/Medium size/).closest('label');
    const largeLabel = canvas.getByText(/Large size/).closest('label');
    await expect(smallLabel).toHaveClass('check-button--small');
    await expect(mediumLabel).toHaveClass('check-button');
    await expect(largeLabel).toHaveClass('check-button--large');
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing the different sizes available for the checkbox button.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Disabled option'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    await expect(checkbox).toBeDisabled();
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large option',
    className: 'check-button--large'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small option',
    className: 'check-button--small'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function InteractiveTemplate(args) {
    const [checked, setChecked] = useState(false);
    return <CheckButton {...args} checked={checked} onChange={(isChecked: boolean) => setChecked(isChecked)} />;
  },
  args: {
    label: 'Click to toggle'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O=[`Default`,`SizeVariations`,`Disabled`,`Large`,`Small`,`Interactive`,`Group`]}))();export{x as Default,C as Disabled,D as Group,E as Interactive,w as Large,S as SizeVariations,T as Small,O as __namedExportsOrder,_ as default};