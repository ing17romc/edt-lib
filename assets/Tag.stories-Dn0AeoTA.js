import{t as e}from"./iframe-YpqvHZo3.js";import{t}from"./jsx-runtime-ChNUh70B.js";import{t as n}from"./classNames-DYb3CZs3.js";import{n as r,t as i}from"./types-BTwUNDvM.js";e();var a=`_tag_xvg95_1`,o=`_tagLabel_xvg95_62`,s=`_tagClose_xvg95_66`,c={tag:a,"tag--small":`_tag--small_xvg95_12`,"tag--medium":`_tag--medium_xvg95_17`,"tag--large":`_tag--large_xvg95_22`,"tag--primary":`_tag--primary_xvg95_27`,"tag--secondary":`_tag--secondary_xvg95_32`,"tag--danger":`_tag--danger_xvg95_37`,"tag--success":`_tag--success_xvg95_42`,"tag--warning":`_tag--warning_xvg95_47`,"tag--tertiary":`_tag--tertiary_xvg95_52`,"tag--disabled":`_tag--disabled_xvg95_57`,tagLabel:o,tagClose:s},l=t(),u=({children:e,variant:t=r.PRIMARY,size:a=i.MEDIUM,closable:o=!1,onClose:s,disabled:u=!1,className:d,...f})=>{let p=n(c.tag,c[`tag--${t}`],c[`tag--${a}`],u&&c[`tag--disabled`],d),m=e=>{e.stopPropagation(),!u&&s&&s()};return(0,l.jsxs)(`span`,{className:p,...f,children:[(0,l.jsx)(`span`,{className:c.tagLabel,children:e}),o&&(0,l.jsx)(`button`,{type:`button`,className:c.tagClose,onClick:m,disabled:u,"aria-label":`Cerrar`,children:`×`})]})};u.__docgenInfo={description:`Etiqueta informativa para categorizar o clasificar contenido.\r
Soporta variantes de color, tamaños y opción de cierre.\r
@component`,methods:[],displayName:`Tag`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:`Contenido del tag`},variant:{required:!1,tsType:{name:`ComponentVariant`},description:`Variante de color\r
@default 'primary'`,defaultValue:{value:`ComponentVariant.PRIMARY`,computed:!0}},size:{required:!1,tsType:{name:`ComponentSize`},description:`Tamaño del tag\r
@default 'medium'`,defaultValue:{value:`ComponentSize.MEDIUM`,computed:!0}},closable:{required:!1,tsType:{name:`boolean`},description:`Si el tag puede ser cerrado/eliminado\r
@default false`,defaultValue:{value:`false`,computed:!1}},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback al cerrar el tag`},disabled:{required:!1,tsType:{name:`boolean`},description:`Si el tag está deshabilitado\r
@default false`,defaultValue:{value:`false`,computed:!1}}},composes:[`HTMLAttributes`]};var d={children:`Tag label`,variant:r.PRIMARY,size:i.MEDIUM,closable:!1,disabled:!1},f={variant:{control:`select`,options:Object.values(r),description:`Color variant of the tag.`,table:{type:{summary:Object.values(r).join(` | `)},defaultValue:{summary:r.PRIMARY}}},size:{control:`select`,options:Object.values(i),description:`Size of the tag.`,table:{type:{summary:Object.values(i).join(` | `)},defaultValue:{summary:i.MEDIUM}}},closable:{control:`boolean`,description:`When true, a close button is shown to dismiss the tag.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`When true, the tag is non-interactive and visually muted.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},p={docs:{description:{component:`A compact label used to categorise or flag content. Supports multiple color variants, sizes, a closable mode, and a disabled state.`}}},m=Object.values(r),h=Object.values(i),g={title:`Components/Tag`,component:u,tags:[`autodocs`],argTypes:f,args:d,parameters:p},_={args:{children:`Tag label`}},v={render:()=>(0,l.jsx)(`div`,{style:{display:`flex`,gap:`0.5rem`,flexWrap:`wrap`},children:m.map(e=>(0,l.jsx)(u,{variant:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e))}),parameters:{docs:{source:{code:null}}}},y={render:()=>(0,l.jsx)(`div`,{style:{display:`flex`,gap:`0.5rem`,alignItems:`center`},children:h.map(e=>(0,l.jsx)(u,{size:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e))}),parameters:{docs:{source:{code:null}}}},b={args:{children:`Cerrar tag`,closable:!0}},x={args:{children:`Deshabilitado`,disabled:!0}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Tag label'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Cerrar tag',
    closable: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Deshabilitado',
    disabled: true
  }
}`,...x.parameters?.docs?.source}}};var S=[`Default`,`Variants`,`Sizes`,`Closable`,`Disabled`];export{b as Closable,_ as Default,x as Disabled,y as Sizes,v as Variants,S as __namedExportsOrder,g as default};