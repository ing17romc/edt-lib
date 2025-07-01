import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as M,a as R}from"./index-02CvJQn6.js";import"./index-D4lIrffr.js";import"./index-_oZgBBUR.js";const $="_textButton_10142_51",G="_disabled_10142_88",H="_loading_10142_141",O="_spin_10142_1",Y="_fullWidth_10142_173",o={textButton:$,"size-small":"_size-small_10142_70","size-medium":"_size-medium_10142_75","size-large":"_size-large_10142_80","color-primary":"_color-primary_10142_85",disabled:G,"color-secondary":"_color-secondary_10142_94","color-error":"_color-error_10142_103","color-success":"_color-success_10142_112","color-warning":"_color-warning_10142_121","underline-hover":"_underline-hover_10142_130","underline-always":"_underline-always_10142_133",loading:H,spin:O,fullWidth:Y},a=({children:c,className:N="",size:p="medium",color:V="primary",underline:A="hover",disabled:m=!1,loading:d=!1,fullWidth:u=!1,...P})=>{const U=[o.textButton,o[`size-${p}`],o[`color-${V}`],o[`underline-${A}`],m?o.disabled:"",d?o.loading:"",u?o.fullWidth:"",N].filter(Boolean).join(" "),E={...d&&{color:"transparent"},...u&&{width:"100%"}};return e.jsx(M,{className:U,style:E,disabled:m||d,variant:R.PRIMARY,size:p,fullWidth:u,loading:d,...P,children:c})};a.__docgenInfo={description:`Componente de botón de texto que extiende la funcionalidad del componente Button.
Diseñado para acciones secundarias o menos prominentes que los botones regulares.`,methods:[],displayName:"TextButton",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`Tamaño del botón de texto
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Si es true, el botón ocupa todo el ancho disponible
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Si es true, muestra el botón en estado de deshabilitado
@default false`,defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:`Si es true, muestra un indicador de carga
@default false`,defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'inherit'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'inherit'"}]},description:`Color del texto del botón
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},underline:{required:!1,tsType:{name:"union",raw:"'none' | 'hover' | 'always'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'always'"}]},description:`Si es true, añade un subrayado al texto
@default false`,defaultValue:{value:"'hover'",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const L={title:"Components/TextButton",component:a,argTypes:{size:{control:{type:"select",options:["small","medium","large"]}},color:{control:{type:"select",options:["primary","secondary","error","success","warning","inherit"]}},underline:{control:{type:"select",options:["none","hover","always"]}},disabled:{control:"boolean"},loading:{control:"boolean"},fullWidth:{control:"boolean"}},parameters:{componentSubtitle:"Botón de texto para acciones secundarias",docs:{description:{component:"Un botón de texto para acciones secundarias que no necesitan mucha atención. Ideal para acciones menos importantes o como alternativa a los enlaces."}}}},D=c=>e.jsx(a,{...c}),t=D.bind({});t.args={children:"Botón de texto",color:"primary",size:"medium",underline:"hover"};const r=D.bind({});r.args={...t.args};r.parameters={docs:{description:{story:"Usa los controles en el panel de controles para cambiar las propiedades del botón de texto."}}};const s=()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{size:"small",children:"Pequeño"}),e.jsx(a,{size:"medium",children:"Mediano"}),e.jsx(a,{size:"large",children:"Grande"})]});s.parameters={docs:{description:{story:"Diferentes tamaños de botones de texto. Controla el tamaño con la propiedad `size`."}}};const n=()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{color:"primary",children:"Primario"}),e.jsx(a,{color:"secondary",children:"Secundario"}),e.jsx(a,{color:"error",children:"Error"}),e.jsx(a,{color:"success",children:"Éxito"}),e.jsx(a,{color:"warning",children:"Advertencia"}),e.jsx(a,{color:"inherit",children:"Heredado"})]});n.parameters={docs:{description:{story:"Diferentes colores para el botón de texto. Controla el color con la propiedad `color`."}}};const l=()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{children:"Normal"}),e.jsx(a,{disabled:!0,children:"Deshabilitado"}),e.jsx(a,{loading:!0,children:"Cargando"}),e.jsx(a,{fullWidth:!0,children:"Ancho completo"})]});l.parameters={docs:{description:{story:"Diferentes estados del botón de texto: normal, deshabilitado, cargando y ancho completo."}}};const i=()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{underline:"none",children:"Sin subrayado"}),e.jsx(a,{underline:"hover",children:"Subrayado al pasar"}),e.jsx(a,{underline:"always",children:"Siempre subrayado"})]});i.parameters={docs:{description:{story:"Diferentes estilos de subrayado para el botón de texto. Controla el subrayado con la propiedad `underline`."}}};s.__docgenInfo={description:"",methods:[],displayName:"Sizes"};n.__docgenInfo={description:"",methods:[],displayName:"Colors"};l.__docgenInfo={description:"",methods:[],displayName:"States"};i.__docgenInfo={description:"",methods:[],displayName:"Underline"};var x,y,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:"args => <TextButton {...args} />",...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var g,_,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:"args => <TextButton {...args} />",...(h=(_=r.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var B,b,v;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: '16px',
  alignItems: 'center'
}}>
    <TextButton size="small">Pequeño</TextButton>
    <TextButton size="medium">Mediano</TextButton>
    <TextButton size="large">Grande</TextButton>
  </div>`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var T,S,j;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
  flexWrap: 'wrap'
}}>
    <TextButton color="primary">Primario</TextButton>
    <TextButton color="secondary">Secundario</TextButton>
    <TextButton color="error">Error</TextButton>
    <TextButton color="success">Éxito</TextButton>
    <TextButton color="warning">Advertencia</TextButton>
    <TextButton color="inherit">Heredado</TextButton>
  </div>`,...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var w,z,I;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
  flexWrap: 'wrap'
}}>
    <TextButton>Normal</TextButton>
    <TextButton disabled>Deshabilitado</TextButton>
    <TextButton loading>Cargando</TextButton>
    <TextButton fullWidth>Ancho completo</TextButton>
  </div>`,...(I=(z=l.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var q,C,W;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: '16px',
  alignItems: 'center'
}}>
    <TextButton underline="none">Sin subrayado</TextButton>
    <TextButton underline="hover">Subrayado al pasar</TextButton>
    <TextButton underline="always">Siempre subrayado</TextButton>
  </div>`,...(W=(C=i.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};const Q=["Default","Interactive","Sizes","Colors","States","Underline"];export{n as Colors,t as Default,r as Interactive,s as Sizes,l as States,i as Underline,Q as __namedExportsOrder,L as default};
