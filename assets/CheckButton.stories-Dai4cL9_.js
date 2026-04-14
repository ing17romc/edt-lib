import{a as e,n as t}from"./chunk-BneVvdWh.js";import{O as n,a as r,i,o as a}from"./iframe-BoT0I_bJ.js";import{r as o,t as s}from"./types-SSqGpC_M.js";var c,l,u,d,f,p,m,h,g=t((()=>{c=`_checkButton_152iv_1`,l=`_disabled_152iv_11`,u=`_checkmark_152iv_11`,d=`_input_152iv_15`,f=`_label_152iv_57`,p=`_large_152iv_70`,m=`_small_152iv_82`,h={checkButton:c,disabled:l,checkmark:u,input:d,label:f,large:p,small:m}})),_,v,y,b=t((()=>{_=e(n(),1),a(),g(),o(),v=i(),y=({label:e,checked:t=!1,disabled:n=!1,onChange:i,size:a=s.MEDIUM,className:o=``,...c})=>{let[l,u]=(0,_.useState)(t);(0,_.useEffect)(()=>{u(t)},[t]);let d=()=>{if(!n){let e=!l;u(e),i?.(e)}};return(0,v.jsxs)(`label`,{className:r(h.checkButton,{[h.small]:a===s.SMALL,[h.large]:a===s.LARGE,[h.disabled]:n},o),children:[(0,v.jsx)(`input`,{type:`checkbox`,checked:l,onChange:d,disabled:n,className:h.input,...c}),(0,v.jsx)(`span`,{className:h.checkmark}),e&&(0,v.jsx)(`span`,{className:h.label,children:e})]})},y.__docgenInfo={description:`CheckButton - A customizable checkbox button component.\r
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
@default 'medium'`,defaultValue:{value:`ComponentSize.MEDIUM`,computed:!0}}},composes:[`Omit`]}})),x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;t((()=>{x=e(n(),1),b(),o(),S=i(),{within:C,expect:w}=__STORYBOOK_MODULE_TEST__,T={title:`Components/CheckButton`,component:y,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Text label displayed next to the checkbox.`,table:{type:{summary:`string`}}},checked:{control:`boolean`,description:`Controls the checked state of the checkbox.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`When true, the checkbox is non-interactive and visually muted.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},size:{control:`select`,options:Object.values(s),description:`Size of the checkbox and its label.`,table:{type:{summary:Object.values(s).join(` | `)},defaultValue:{summary:s.MEDIUM}}},onChange:{action:`changed`,description:`Callback fired when the checked state changes.`,table:{type:{summary:`(checked: boolean) => void`}}},className:{control:`text`,description:`Additional CSS class names for the root element.`,table:{type:{summary:`string`}}}},parameters:{docs:{description:{component:`A styled checkbox component that wraps a native input with a label. Supports multiple sizes, controlled and uncontrolled usage, and a disabled state.`}}},args:{label:`Option label`,checked:!1,disabled:!1}},E=[{id:`1`,label:`Option 1`},{id:`2`,label:`Option 2`},{id:`3`,label:`Option 3`}],D={display:`flex`,flexDirection:`column`,gap:`12px`},O={marginTop:`16px`},k={render:e=>(0,S.jsx)(y,{...e}),args:{label:`Default option (medium)`},play:async({canvasElement:e})=>{await w(C(e).getByRole(`checkbox`)).toBeInTheDocument()}},A={render:()=>(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,S.jsx)(y,{label:`Small size (${s.SMALL})`,size:s.SMALL}),(0,S.jsx)(y,{label:`Medium size (${s.MEDIUM}) - default`,size:s.MEDIUM}),(0,S.jsx)(y,{label:`Large size (${s.LARGE})`,size:s.LARGE})]}),play:async({canvasElement:e})=>{await w(C(e).getAllByRole(`checkbox`)).toHaveLength(3)},parameters:{docs:{description:{story:`Example showing the different sizes available for the checkbox button.`}}}},j={args:{disabled:!0,label:`Disabled option`},play:async({canvasElement:e})=>{await w(C(e).getByRole(`checkbox`)).toBeDisabled()}},M={args:{label:`Large option`,size:s.LARGE}},N={args:{label:`Small option`,size:s.SMALL}},P={render:function(e){let[t,n]=(0,x.useState)(!1);return(0,S.jsx)(y,{...e,checked:t,onChange:e=>n(e)})},args:{label:`Click to toggle`}},F={render:function(){let[e,t]=(0,x.useState)([]),n=e=>{t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return(0,S.jsxs)(`div`,{style:D,children:[E.map(t=>(0,S.jsx)(y,{label:t.label,checked:e.includes(t.id),onChange:()=>n(t.id)},t.id)),(0,S.jsx)(`div`,{style:O,children:(0,S.jsxs)(`p`,{children:[`Selected: `,e.length>0?e.join(`, `):`None`]})})]})},parameters:{docs:{description:{story:`Example of a checkbox group where multiple options can be selected.`}}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <CheckButton {...args} />,
  args: {
    label: 'Default option (medium)'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('checkbox')).toBeInTheDocument();
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getAllByRole('checkbox')).toHaveLength(3);
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing the different sizes available for the checkbox button.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large option',
    size: ComponentSize.LARGE
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small option',
    size: ComponentSize.SMALL
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: function InteractiveTemplate(args) {
    const [checked, setChecked] = useState(false);
    return <CheckButton {...args} checked={checked} onChange={(isChecked: boolean) => setChecked(isChecked)} />;
  },
  args: {
    label: 'Click to toggle'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I=[`Default`,`SizeVariations`,`Disabled`,`Large`,`Small`,`Interactive`,`Group`]}))();export{k as Default,j as Disabled,F as Group,P as Interactive,M as Large,A as SizeVariations,N as Small,I as __namedExportsOrder,T as default};