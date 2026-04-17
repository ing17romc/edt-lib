import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Ht as n,_t as r,bt as i,it as a,rt as o,vt as s}from"./iframe-BrtTKpdh.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;t((()=>{c=e(n(),1),a(),i(),l=r(),{within:u,expect:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/CheckButton`,component:o,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Text label displayed next to the checkbox.`,table:{type:{summary:`string`}}},checked:{control:`boolean`,description:`Controls the checked state of the checkbox.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`When true, the checkbox is non-interactive and visually muted.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},size:{control:`select`,options:Object.values(s),description:`Size of the checkbox and its label.`,table:{type:{summary:Object.values(s).join(` | `)},defaultValue:{summary:s.MEDIUM}}},onChange:{action:`changed`,description:`Callback fired when the checked state changes.`,table:{type:{summary:`(checked: boolean) => void`}}},className:{control:`text`,description:`Additional CSS class names for the root element.`,table:{type:{summary:`string`}}}},parameters:{docs:{description:{component:`A styled checkbox component that wraps a native input with a label. Supports multiple sizes, controlled and uncontrolled usage, and a disabled state.`}}},args:{label:`Option label`,checked:!1,disabled:!1}},p=[{id:`1`,label:`Option 1`},{id:`2`,label:`Option 2`},{id:`3`,label:`Option 3`}],m={display:`flex`,flexDirection:`column`,gap:`12px`},h={marginTop:`16px`},g={render:e=>(0,l.jsx)(o,{...e}),args:{label:`Default option (medium)`},play:async({canvasElement:e})=>{await d(u(e).getByRole(`checkbox`)).toBeInTheDocument()}},_={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,l.jsx)(o,{label:`Small size (${s.SMALL})`,size:s.SMALL}),(0,l.jsx)(o,{label:`Medium size (${s.MEDIUM}) - default`,size:s.MEDIUM}),(0,l.jsx)(o,{label:`Large size (${s.LARGE})`,size:s.LARGE})]}),play:async({canvasElement:e})=>{await d(u(e).getAllByRole(`checkbox`)).toHaveLength(3)},parameters:{docs:{description:{story:`Example showing the different sizes available for the checkbox button.`}}}},v={args:{disabled:!0,label:`Disabled option`},play:async({canvasElement:e})=>{await d(u(e).getByRole(`checkbox`)).toBeDisabled()}},y={args:{label:`Large option`,size:s.LARGE}},b={args:{label:`Small option`,size:s.SMALL}},x={render:function(e){let[t,n]=(0,c.useState)(!1);return(0,l.jsx)(o,{...e,checked:t,onChange:e=>n(e)})},args:{label:`Click to toggle`}},S={render:function(){let[e,t]=(0,c.useState)([]),n=e=>{t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return(0,l.jsxs)(`div`,{style:m,children:[p.map(t=>(0,l.jsx)(o,{label:t.label,checked:e.includes(t.id),onChange:()=>n(t.id)},t.id)),(0,l.jsx)(`div`,{style:h,children:(0,l.jsxs)(`p`,{children:[`Selected: `,e.length>0?e.join(`, `):`None`]})})]})},parameters:{docs:{description:{story:`Example of a checkbox group where multiple options can be selected.`}}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large option',
    size: ComponentSize.LARGE
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small option',
    size: ComponentSize.SMALL
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function InteractiveTemplate(args) {
    const [checked, setChecked] = useState(false);
    return <CheckButton {...args} checked={checked} onChange={(isChecked: boolean) => setChecked(isChecked)} />;
  },
  args: {
    label: 'Click to toggle'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Default`,`SizeVariations`,`Disabled`,`Large`,`Small`,`Interactive`,`Group`]}))();export{g as Default,v as Disabled,S as Group,x as Interactive,y as Large,_ as SizeVariations,b as Small,C as __namedExportsOrder,f as default};