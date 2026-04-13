import{n as e}from"./chunk-BneVvdWh.js";import{S as t}from"./iframe-DoW-sQG_.js";import{t as n}from"./jsx-runtime-Bn1Ys6_W.js";import{r,t as i}from"./types-Duki_pzD.js";import{n as a,r as o,t as s}from"./Selector-3WYtiXmJ.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S=e((()=>{t(),a(),r(),c=n(),l=[{value:`1`,label:`Option 1`},{value:`2`,label:`Option 2`},{value:`3`,label:`Option 3 (Disabled)`,disabled:!0},{value:`4`,label:`Option 4`}],u=[{label:`Grupo 1`,options:[{value:`1-1`,label:`Option 1.1`},{value:`1-2`,label:`Option 1.2`}]},{label:`Grupo 2`,options:[{value:`2-1`,label:`Option 2.1`},{value:`2-2`,label:`Option 2.2 (Disabled)`,disabled:!0}]}],d=Array.from({length:50},(e,t)=>({value:`${t+1}`,label:`Option ${t+1}`})),f={options:l,label:`Select an option`,placeholder:`Choose an option`,variant:o.PRIMARY,size:i.MEDIUM,disabled:!1,loading:!1,fullWidth:!1,error:!1},p={...f,label:void 0},m={...f,helperText:`Select an option from the list`},h={...f,error:!0,errorMessage:`You must select an option`},g={...f,disabled:!0},_={...f,loading:!0},v={...f,fullWidth:!0},y={...f,options:d,label:`Many options`},b=()=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`label`,{htmlFor:`grouped-selector`,style:{display:`block`,marginBottom:`8px`,fontWeight:500},children:`Grouped options`}),(0,c.jsx)(`select`,{id:`grouped-selector`,style:{padding:`8px`,borderRadius:`4px`,border:`1px solid #ccc`,minWidth:`200px`},children:u.map((e,t)=>(0,c.jsx)(`optgroup`,{label:e.label,children:e.options.map(e=>(0,c.jsx)(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value.toString()))},t))})]}),x=()=>(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,c.jsx)(s,{...f,label:`Small selector`,size:i.SMALL}),(0,c.jsx)(s,{...f,label:`Medium selector (default)`,size:i.MEDIUM}),(0,c.jsx)(s,{...f,label:`Large selector`,size:i.LARGE})]}),b.__docgenInfo={description:``,methods:[],displayName:`OptionGroupsComponent`},x.__docgenInfo={description:``,methods:[],displayName:`SizesComponent`}})),C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;e((()=>{a(),r(),S(),C=n(),{within:w,expect:T}=__STORYBOOK_MODULE_TEST__,E={title:`Components/Selector`,component:s,tags:[`autodocs`],argTypes:{options:{control:!1,description:"Array of selectable option objects. Each item requires a `value` and `label`, with an optional `disabled` flag.",table:{type:{summary:`SelectorOption[]`}}},value:{control:`text`,description:`Currently selected value (controlled mode).`,table:{type:{summary:`string`}}},defaultValue:{control:`text`,description:`Initial selected value (uncontrolled mode).`,table:{type:{summary:`string`}}},onChange:{action:`changed`,description:`Callback fired with the selected value when the user picks an option.`,table:{type:{summary:`(value: string) => void`}}},label:{control:`text`,description:`Label text displayed above the selector.`,table:{type:{summary:`string`}}},placeholder:{control:`text`,description:`Placeholder text shown when no option is selected.`,table:{type:{summary:`string`}}},helperText:{control:`text`,description:`Hint text displayed below the selector.`,table:{type:{summary:`string`}}},errorMessage:{control:`text`,description:`Error message shown when error is true.`,table:{type:{summary:`string`}}},variant:{control:`select`,options:Object.values(o),description:`Visual style variant of the selector.`,table:{type:{summary:Object.values(o).join(` | `)},defaultValue:{summary:o.PRIMARY}}},size:{control:`select`,options:Object.values(i),description:`Size of the selector field.`,table:{type:{summary:Object.values(i).join(` | `)},defaultValue:{summary:i.MEDIUM}}},disabled:{control:`boolean`,description:`When true, the selector is non-interactive.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},loading:{control:`boolean`,description:`When true, shows a loading indicator inside the selector.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},fullWidth:{control:`boolean`,description:`When true, the selector stretches to fill its container width.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},error:{control:`boolean`,description:`When true, applies an error style to the selector.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{control:`boolean`,description:`Marks the selector as required and adds a visual indicator.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},parameters:{docs:{description:{component:`A fully-featured dropdown selector with support for labels, placeholder, helper text, error state, loading state, grouped options, and multiple visual variants.`}}}},D={args:f,play:async({canvasElement:e})=>{let t=w(e);await T(t.getByRole(`combobox`)).toBeInTheDocument(),await T(t.getByText(`Select an option`)).toBeInTheDocument()}},O={args:p},k={args:m,play:async({canvasElement:e})=>{await T(w(e).getByText(`Select an option from the list`)).toBeInTheDocument()}},A={args:h,play:async({canvasElement:e})=>{let t=w(e);await T(t.getByRole(`combobox`)).toHaveClass(`selector--error`),await T(t.getByText(`You must select an option`)).toBeInTheDocument()}},j={args:g,play:async({canvasElement:e})=>{await T(w(e).getByRole(`combobox`)).toBeDisabled()}},M={args:_,play:async({canvasElement:e})=>{await T(w(e).getByRole(`combobox`)).toBeDisabled(),await T(e.querySelector(`.selectorLoadingSpinner`)).toBeInTheDocument()}},N={args:v},P={args:y},F={render:()=>(0,C.jsx)(b,{})},I={render:()=>(0,C.jsx)(x,{})},L={render:()=>(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,C.jsx)(s,{options:l,label:`Primary variant (default)`,variant:o.PRIMARY}),(0,C.jsx)(s,{options:l,label:`Secondary variant`,variant:o.SECONDARY}),(0,C.jsx)(s,{options:l,label:`Danger variant`,variant:o.DANGER}),(0,C.jsx)(s,{options:l,label:`Success variant`,variant:o.SUCCESS}),(0,C.jsx)(s,{options:l,label:`Warning variant`,variant:o.WARNING})]})},R={args:{defaultValue:`2`,label:`With default value`}},z={args:{label:`Required field`,required:!0}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('combobox')).toBeInTheDocument();
    await expect(canvas.getByText('Select an option')).toBeInTheDocument();
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: withoutLabelArgs
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: withHelperTextArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Select an option from the list')).toBeInTheDocument();
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: errorStateArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('combobox')).toHaveClass('selector--error');
    await expect(canvas.getByText('You must select an option')).toBeInTheDocument();
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: disabledArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('combobox')).toBeDisabled();
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: loadingArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('combobox')).toBeDisabled();
    await expect(canvasElement.querySelector('.selectorLoadingSpinner')).toBeInTheDocument();
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: fullWidthArgs
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: withManyOptionsArgs
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <OptionGroupsComponent />
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <SizesComponent />
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Selector options={mockOptions} label="Primary variant (default)" variant={SelectorVariant.PRIMARY} />\r
      <Selector options={mockOptions} label="Secondary variant" variant={SelectorVariant.SECONDARY} />\r
      <Selector options={mockOptions} label="Danger variant" variant={SelectorVariant.DANGER} />\r
      <Selector options={mockOptions} label="Success variant" variant={SelectorVariant.SUCCESS} />\r
      <Selector options={mockOptions} label="Warning variant" variant={SelectorVariant.WARNING} />\r
    </div>
}`,...L.parameters?.docs?.source},description:{story:`Selector with different variants.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '2',
    label: 'With default value'
  }
}`,...R.parameters?.docs?.source},description:{story:`Selector with a default selected option.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required field',
    required: true
  }
}`,...z.parameters?.docs?.source},description:{story:`Required selector with mandatory field indicator.`,...z.parameters?.docs?.description}}},B=[`Default`,`WithoutLabel`,`WithHelperText`,`ErrorState`,`Disabled`,`Loading`,`FullWidth`,`WithManyOptions`,`WithOptionGroups`,`Sizes`,`Variants`,`WithDefaultValue`,`RequiredField`]}))();export{D as Default,j as Disabled,A as ErrorState,N as FullWidth,M as Loading,z as RequiredField,I as Sizes,L as Variants,R as WithDefaultValue,k as WithHelperText,P as WithManyOptions,F as WithOptionGroups,O as WithoutLabel,B as __namedExportsOrder,E as default};