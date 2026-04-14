import{n as e}from"./chunk-BneVvdWh.js";import{O as t,a as n,i as r,o as i}from"./iframe-BoT0I_bJ.js";import{n as a,r as o,t as s}from"./types-SSqGpC_M.js";var c,l,u,d,f=e((()=>{c=`_tag_1hmc7_1`,l=`_tagLabel_1hmc7_62`,u=`_tagClose_1hmc7_66`,d={tag:c,"tag--small":`_tag--small_1hmc7_12`,"tag--medium":`_tag--medium_1hmc7_17`,"tag--large":`_tag--large_1hmc7_22`,"tag--primary":`_tag--primary_1hmc7_27`,"tag--secondary":`_tag--secondary_1hmc7_32`,"tag--danger":`_tag--danger_1hmc7_37`,"tag--success":`_tag--success_1hmc7_42`,"tag--warning":`_tag--warning_1hmc7_47`,"tag--tertiary":`_tag--tertiary_1hmc7_52`,"tag--disabled":`_tag--disabled_1hmc7_57`,tagLabel:l,tagClose:u}})),p,m,h=e((()=>{t(),i(),f(),o(),p=r(),m=({children:e,variant:t=a.PRIMARY,size:r=s.MEDIUM,closable:i=!1,onClose:o,disabled:c=!1,className:l,...u})=>{let f=n(d.tag,d[`tag--${t}`],d[`tag--${r}`],c&&d[`tag--disabled`],l),m=e=>{e.stopPropagation(),!c&&o&&o()};return(0,p.jsxs)(`span`,{className:f,...u,children:[(0,p.jsx)(`span`,{className:d.tagLabel,children:e}),i&&(0,p.jsx)(`button`,{type:`button`,className:d.tagClose,onClick:m,disabled:c,"aria-label":`Close`,children:`×`})]})},m.__docgenInfo={description:`Informational label for categorizing or classifying content.\r
Supports color variants, sizes, and close option.\r
@component`,methods:[],displayName:`Tag`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:`Tag content`},variant:{required:!1,tsType:{name:`ComponentVariant`},description:`Color variant\r
@default 'primary'`,defaultValue:{value:`ComponentVariant.PRIMARY`,computed:!0}},size:{required:!1,tsType:{name:`ComponentSize`},description:`Tag size\r
@default 'medium'`,defaultValue:{value:`ComponentSize.MEDIUM`,computed:!0}},closable:{required:!1,tsType:{name:`boolean`},description:`Whether the tag can be closed/removed\r
@default false`,defaultValue:{value:`false`,computed:!1}},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback when closing the tag`},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the tag is disabled\r
@default false`,defaultValue:{value:`false`,computed:!1}}},composes:[`HTMLAttributes`]}})),g,_,v,y,b,x=e((()=>{o(),g={children:`Tag label`,variant:a.PRIMARY,size:s.MEDIUM,closable:!1,disabled:!1},_={variant:{control:`select`,options:Object.values(a),description:`Color variant of the tag.`,table:{type:{summary:Object.values(a).join(` | `)},defaultValue:{summary:a.PRIMARY}}},size:{control:`select`,options:Object.values(s),description:`Size of the tag.`,table:{type:{summary:Object.values(s).join(` | `)},defaultValue:{summary:s.MEDIUM}}},closable:{control:`boolean`,description:`When true, a close button is shown to dismiss the tag.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`When true, the tag is non-interactive and visually muted.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},v={docs:{description:{component:`A compact label used to categorise or flag content. Supports multiple color variants, sizes, a closable mode, and a disabled state.`}}},y=Object.values(a),b=Object.values(s)})),S,C,w,T,E,D,O,k,A,j;e((()=>{t(),h(),x(),S=r(),{within:C,expect:w}=__STORYBOOK_MODULE_TEST__,T={title:`Components/Tag`,component:m,tags:[`autodocs`],argTypes:_,args:g,parameters:v},E={args:{children:`Tag label`},play:async({canvasElement:e})=>{await w(C(e).getByText(`Tag label`)).toBeInTheDocument()}},D={render:()=>(0,S.jsx)(`div`,{style:{display:`flex`,gap:`0.5rem`,flexWrap:`wrap`},children:y.map(e=>(0,S.jsx)(m,{variant:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e))}),parameters:{docs:{source:{code:null}}}},O={render:()=>(0,S.jsx)(`div`,{style:{display:`flex`,gap:`0.5rem`,alignItems:`center`},children:b.map(e=>(0,S.jsx)(m,{size:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e))}),parameters:{docs:{source:{code:null}}}},k={args:{children:`Close tag`,closable:!0}},A={args:{children:`Disabled`,disabled:!0}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Tag label'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Tag label')).toBeInTheDocument();
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap'
  }}>\r
      {allVariants.map(variant => <Tag key={variant} variant={variant as ComponentVariant}>\r
          {variant.charAt(0).toUpperCase() + variant.slice(1)}\r
        </Tag>)}\r
    </div>,
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center'
  }}>\r
      {allSizes.map(size => <Tag key={size} size={size as ComponentSize}>\r
          {size.charAt(0).toUpperCase() + size.slice(1)}\r
        </Tag>)}\r
    </div>,
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Close tag',
    closable: true
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled',
    disabled: true
  }
}`,...A.parameters?.docs?.source}}},j=[`Default`,`Variants`,`Sizes`,`Closable`,`Disabled`]}))();export{k as Closable,E as Default,A as Disabled,O as Sizes,D as Variants,j as __namedExportsOrder,T as default};