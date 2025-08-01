import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as P}from"./index-CSd37hx4.js";import{C as t,a as R}from"./types-D2sN4igU.js";import"./index-D4lIrffr.js";import"./classNames-CqjykrQM.js";const G="_textButton_1sztq_1",O="_disabled_1sztq_38",$="_loading_1sztq_91",H="_spin_1sztq_1",Y="_fullWidth_1sztq_123",a={textButton:G,"size-small":"_size-small_1sztq_20","size-medium":"_size-medium_1sztq_25","size-large":"_size-large_1sztq_30","color-primary":"_color-primary_1sztq_35",disabled:O,"color-secondary":"_color-secondary_1sztq_44","color-error":"_color-error_1sztq_53","color-success":"_color-success_1sztq_62","color-warning":"_color-warning_1sztq_71","underline-hover":"_underline-hover_1sztq_80","underline-always":"_underline-always_1sztq_83",loading:$,spin:H,fullWidth:Y},o=({children:c,className:U="",size:m=t.MEDIUM,color:W="primary",underline:A="hover",disabled:x=!1,loading:u=!1,fullWidth:p=!1,...N})=>{const V=[a.textButton,a[`size-${m}`],a[`color-${W}`],a[`underline-${A}`],x?a.disabled:"",u?a.loading:"",p?a.fullWidth:"",U].filter(Boolean).join(" "),L={...u&&{color:"transparent"},...p&&{width:"100%"}};return e.jsx(P,{className:V,style:L,disabled:x||u,variant:R.PRIMARY,size:m,fullWidth:p,...N,children:c})};o.__docgenInfo={description:`Componente de botón de texto que extiende la funcionalidad del componente Button.
Diseñado para acciones secundarias o menos prominentes que los botones regulares.`,methods:[],displayName:"TextButton",props:{size:{required:!1,tsType:{name:"ComponentSize"},description:`Tamaño del botón de texto
@default 'medium'`,defaultValue:{value:"ComponentSize.MEDIUM",computed:!0}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Si es true, el botón ocupa todo el ancho disponible
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Si es true, muestra el botón en estado de deshabilitado
@default false`,defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:`Si es true, muestra un indicador de carga
@default false`,defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'inherit'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'inherit'"}]},description:`Color del texto del botón
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},underline:{required:!1,tsType:{name:"union",raw:"'none' | 'hover' | 'always'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'always'"}]},description:`Si es true, añade un subrayado al texto
@default false`,defaultValue:{value:"'hover'",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const X={title:"Components/TextButton",component:o,argTypes:{size:{control:"select",options:Object.values(t),description:"Tamaño",table:{type:{summary:Object.values(t).join(" | ")},defaultValue:{summary:t.MEDIUM}}},color:{control:{type:"select",options:["primary","secondary","error","success","warning","inherit"]}},underline:{control:{type:"select",options:["none","hover","always"]}},disabled:{control:"boolean"},loading:{control:"boolean"},fullWidth:{control:"boolean"}},parameters:{componentSubtitle:"Botón de texto para acciones secundarias",docs:{description:{component:"Un botón de texto para acciones secundarias que no necesitan mucha atención. Ideal para acciones menos importantes o como alternativa a los enlaces."}}}},E=c=>e.jsx(o,{...c}),r=E.bind({});r.args={children:"Botón de texto",color:"primary",size:t.MEDIUM,underline:"hover"};const n=E.bind({});n.args={...r.args};n.parameters={docs:{description:{story:"Usa los controles en el panel de controles para cambiar las propiedades del botón de texto."}}};const s=()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(o,{size:t.SMALL,children:"Pequeño"}),e.jsx(o,{size:t.MEDIUM,children:"Mediano"}),e.jsx(o,{size:t.LARGE,children:"Grande"})]});s.parameters={docs:{description:{story:"Diferentes tamaños de botones de texto. Controla el tamaño con la propiedad `size`."}}};const l=()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(o,{color:"primary",children:"Primario"}),e.jsx(o,{color:"secondary",children:"Secundario"}),e.jsx(o,{color:"error",children:"Error"}),e.jsx(o,{color:"success",children:"Éxito"}),e.jsx(o,{color:"warning",children:"Advertencia"}),e.jsx(o,{color:"inherit",children:"Heredado"})]});l.parameters={docs:{description:{story:"Diferentes colores para el botón de texto. Controla el color con la propiedad `color`."}}};const i=()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(o,{children:"Normal"}),e.jsx(o,{disabled:!0,children:"Deshabilitado"}),e.jsx(o,{loading:!0,children:"Cargando"}),e.jsx(o,{fullWidth:!0,children:"Ancho completo"})]});i.parameters={docs:{description:{story:"Diferentes estados del botón de texto: normal, deshabilitado, cargando y ancho completo."}}};const d=()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(o,{underline:"none",children:"Sin subrayado"}),e.jsx(o,{underline:"hover",children:"Subrayado al pasar"}),e.jsx(o,{underline:"always",children:"Siempre subrayado"})]});d.parameters={docs:{description:{story:"Diferentes estilos de subrayado para el botón de texto. Controla el subrayado con la propiedad `underline`."}}};s.__docgenInfo={description:"",methods:[],displayName:"Sizes"};l.__docgenInfo={description:"",methods:[],displayName:"Colors"};i.__docgenInfo={description:"",methods:[],displayName:"States"};d.__docgenInfo={description:"",methods:[],displayName:"Underline"};var y,f,_;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:"args => <TextButton {...args} />",...(_=(f=r.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var h,g,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"args => <TextButton {...args} />",...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var B,T,v;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: '16px',
  alignItems: 'center'
}}>
    <TextButton size={ComponentSize.SMALL}>Pequeño</TextButton>
    <TextButton size={ComponentSize.MEDIUM}>Mediano</TextButton>
    <TextButton size={ComponentSize.LARGE}>Grande</TextButton>
  </div>`,...(v=(T=s.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var z,S,j;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...(j=(S=l.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var q,I,w;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
  flexWrap: 'wrap'
}}>
    <TextButton>Normal</TextButton>
    <TextButton disabled>Deshabilitado</TextButton>
    <TextButton loading>Cargando</TextButton>
    <TextButton fullWidth>Ancho completo</TextButton>
  </div>`,...(w=(I=i.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var C,M,D;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: '16px',
  alignItems: 'center'
}}>
    <TextButton underline="none">Sin subrayado</TextButton>
    <TextButton underline="hover">Subrayado al pasar</TextButton>
    <TextButton underline="always">Siempre subrayado</TextButton>
  </div>`,...(D=(M=d.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};const Z=["Default","Interactive","Sizes","Colors","States","Underline"];export{l as Colors,r as Default,n as Interactive,s as Sizes,i as States,d as Underline,Z as __namedExportsOrder,X as default};
