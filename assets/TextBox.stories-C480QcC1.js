import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-D4lIrffr.js";const re="_textBoxContainer_rnylk_52",se="_fullWidth_rnylk_60",ne="_label_rnylk_64",de="_disabled_rnylk_72",ie="_error_rnylk_75",pe="_inputWrapper_rnylk_79",ce="_input_rnylk_79",ue="_startAdornment_rnylk_195",me="_endAdornment_rnylk_196",xe="_helperText_rnylk_211",fe="_hasStartAdornment_rnylk_222",he="_hasEndAdornment_rnylk_226",t={textBoxContainer:re,fullWidth:se,label:ne,disabled:de,error:ie,inputWrapper:pe,"variant-outlined":"_variant-outlined_rnylk_88","variant-filled":"_variant-filled_rnylk_102","variant-standard":"_variant-standard_rnylk_117","size-small":"_size-small_rnylk_130","size-medium":"_size-medium_rnylk_134","size-large":"_size-large_rnylk_138",input:ce,startAdornment:ue,endAdornment:me,helperText:xe,hasStartAdornment:fe,hasEndAdornment:he},a=b.forwardRef(({label:r,helperText:o,error:l=!1,fullWidth:s=!1,variant:R="outlined",size:$="medium",startAdornment:x,endAdornment:f,className:U="",containerClassName:G="",labelClassName:H="",inputClassName:J="",helperTextClassName:K="",disabled:h=!1,id:P,...Q},X)=>{const y=P||`textbox-${Math.random().toString(36).substr(2,9)}`,v=o?`${y}-helper-text`:void 0,Y=[t.textBoxContainer,s?t.fullWidth:"",G].filter(Boolean).join(" "),Z=s?{width:"100%",display:"block"}:void 0,ee=s?{width:"100%",maxWidth:"100%",boxSizing:"border-box"}:void 0,ae=[t.label,h?t.disabled:"",l?t.error:"",H].filter(Boolean).join(" "),te=[t.inputWrapper,t[`variant-${R}`],t[`size-${$}`],l?t.error:"",h?t.disabled:"",U].filter(Boolean).join(" "),le=[t.input,x?t.hasStartAdornment:"",f?t.hasEndAdornment:"",J].filter(Boolean).join(" "),oe=[t.helperText,l?t.error:"",K].filter(Boolean).join(" ");return e.jsxs("div",{className:Y,style:Z,children:[r&&e.jsx("label",{htmlFor:y,className:ae,children:r}),e.jsxs("div",{className:te,style:ee,children:[x&&e.jsx("span",{className:t.startAdornment,children:x}),e.jsx("input",{id:y,type:"text",ref:X,className:le,disabled:h,"aria-invalid":l,"aria-describedby":v,style:s?{width:"100%"}:void 0,...Q}),f&&e.jsx("span",{className:t.endAdornment,children:f})]}),o&&e.jsx("p",{id:v,className:oe,children:o})]})});a.displayName="TextBox";a.__docgenInfo={description:`Componente de campo de texto que permite la entrada de texto de una sola línea.
Soporta diferentes variantes, tamaños y estados.`,methods:[],displayName:"TextBox",props:{label:{required:!1,tsType:{name:"string"},description:"Etiqueta que se muestra encima del campo de texto"},helperText:{required:!1,tsType:{name:"string"},description:"Texto de ayuda que se muestra debajo del campo"},error:{required:!1,tsType:{name:"boolean"},description:`Si es true, muestra un indicador de error
@default false`,defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Si es true, el campo ocupa todo el ancho disponible
@default false`,defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'outlined' | 'filled' | 'standard'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'standard'"}]},description:`Variante de diseño del campo de texto
@default 'outlined'`,defaultValue:{value:"'outlined'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`Tamaño del campo de texto
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},startAdornment:{required:!1,tsType:{name:"ReactNode"},description:"Elemento que se muestra al inicio del campo"},endAdornment:{required:!1,tsType:{name:"ReactNode"},description:"Elemento que se muestra al final del campo"},containerClassName:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada para el contenedor",defaultValue:{value:"''",computed:!1}},labelClassName:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada para la etiqueta",defaultValue:{value:"''",computed:!1}},inputClassName:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada para el campo de entrada",defaultValue:{value:"''",computed:!1}},helperTextClassName:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada para el texto de ayuda",defaultValue:{value:"''",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const ve={title:"Components/TextBox",component:a,argTypes:{variant:{control:{type:"select",options:["outlined","filled","standard"]}},size:{control:{type:"select",options:["small","medium","large"]}},type:{control:{type:"select",options:["text","email","password","number","tel","url","search"]}},error:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},required:{control:"boolean"},readOnly:{control:"boolean"}},parameters:{componentSubtitle:"Campo de entrada de texto de una sola línea",docs:{description:{component:"Un componente de campo de texto que permite la entrada de texto de una sola línea. Soporta diferentes variantes, tamaños y estados."}}}},L=r=>{const[o,l]=b.useState("");return e.jsx(a,{...r,value:o,onChange:s=>l(s.target.value)})},n=L.bind({});n.args={label:"Etiqueta",placeholder:"Escribe algo...",variant:"outlined",size:"medium"};const d=L.bind({});d.args={...n.args};d.parameters={docs:{description:{story:"Usa los controles en el panel de controles para cambiar las propiedades del campo de texto."}}};const i=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"400px"},children:[e.jsx(a,{label:"Outlined",variant:"outlined",placeholder:"Outlined"}),e.jsx(a,{label:"Filled",variant:"filled",placeholder:"Filled"}),e.jsx(a,{label:"Standard",variant:"standard",placeholder:"Standard"})]});i.parameters={docs:{description:{story:"Diferentes variantes de diseño para el campo de texto."}}};const p=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(a,{label:"Small",size:"small",placeholder:"Small size"}),e.jsx(a,{label:"Medium",size:"medium",placeholder:"Medium size"}),e.jsx(a,{label:"Large",size:"large",placeholder:"Large size"})]});p.parameters={docs:{description:{story:"Diferentes tamaños para el campo de texto."}}};const c=()=>{const[r,o]=b.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(a,{label:"Campo normal",value:r,onChange:l=>o(l.target.value),placeholder:"Escribe algo..."}),e.jsx(a,{label:"Campo con valor por defecto",defaultValue:"Valor por defecto"}),e.jsx(a,{label:"Campo deshabilitado",disabled:!0,placeholder:"No puedes escribir aquí"}),e.jsx(a,{label:"Campo de solo lectura",readOnly:!0,value:"Este texto no se puede editar"}),e.jsx(a,{label:"Campo requerido",required:!0,placeholder:"Este campo es obligatorio"}),e.jsx(a,{label:"Campo con error",error:!0,helperText:"Mensaje de error",defaultValue:"Valor incorrecto"})]})};c.parameters={docs:{description:{story:"Diferentes estados del campo de texto: normal, con valor, deshabilitado, solo lectura, requerido y con error."}}};const u=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(a,{label:"Con icono al inicio",startAdornment:e.jsx("span",{style:{fontSize:"20px"},children:"🔍"}),placeholder:"Buscar..."}),e.jsx(a,{label:"Con icono al final",endAdornment:e.jsx("span",{style:{fontSize:"20px"},children:"🔒"}),type:"password",placeholder:"Contraseña"}),e.jsx(a,{label:"Con iconos en ambos lados",startAdornment:e.jsx("span",{style:{fontSize:"20px"},children:"🔢"}),endAdornment:e.jsx("span",{style:{fontSize:"14px",color:"#666"},children:"Números"}),type:"number",placeholder:"Solo números"})]});u.parameters={docs:{description:{story:"Campos de texto con iconos u otros elementos decorativos."}}};const m=()=>e.jsx("div",{style:{width:"100%"},children:e.jsx(a,{label:"Campo de ancho completo",fullWidth:!0,placeholder:"Este campo ocupa todo el ancho disponible"})});m.parameters={docs:{description:{story:"Campo de texto que ocupa todo el ancho disponible en su contenedor."}}};i.__docgenInfo={description:"",methods:[],displayName:"Variants"};p.__docgenInfo={description:"",methods:[],displayName:"Sizes"};c.__docgenInfo={description:"",methods:[],displayName:"States"};u.__docgenInfo={description:"",methods:[],displayName:"WithAdornments"};m.__docgenInfo={description:"",methods:[],displayName:"FullWidth"};var _,g,S;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <TextBox {...args} value={value} onChange={e => setValue(e.target.value)} />;
}`,...(S=(g=n.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var C,T,j;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <TextBox {...args} value={value} onChange={e => setValue(e.target.value)} />;
}`,...(j=(T=d.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var z,B,q;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  maxWidth: '400px'
}}>
    <TextBox label="Outlined" variant="outlined" placeholder="Outlined" />
    <TextBox label="Filled" variant="filled" placeholder="Filled" />
    <TextBox label="Standard" variant="standard" placeholder="Standard" />
  </div>`,...(q=(B=i.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var V,W,A;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  maxWidth: '400px'
}}>
    <TextBox label="Small" size="small" placeholder="Small size" />
    <TextBox label="Medium" size="medium" placeholder="Medium size" />
    <TextBox label="Large" size="large" placeholder="Large size" />
  </div>`,...(A=(W=p.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var N,E,k;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '400px'
  }}>
      <TextBox label="Campo normal" value={value} onChange={e => setValue(e.target.value)} placeholder="Escribe algo..." />
      <TextBox label="Campo con valor por defecto" defaultValue="Valor por defecto" />
      <TextBox label="Campo deshabilitado" disabled placeholder="No puedes escribir aquí" />
      <TextBox label="Campo de solo lectura" readOnly value="Este texto no se puede editar" />
      <TextBox label="Campo requerido" required placeholder="Este campo es obligatorio" />
      <TextBox label="Campo con error" error helperText="Mensaje de error" defaultValue="Valor incorrecto" />
    </div>;
}`,...(k=(E=c.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var D,w,I;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  maxWidth: '400px'
}}>
    <TextBox label="Con icono al inicio" startAdornment={<span style={{
    fontSize: '20px'
  }}>🔍</span>} placeholder="Buscar..." />
    <TextBox label="Con icono al final" endAdornment={<span style={{
    fontSize: '20px'
  }}>🔒</span>} type="password" placeholder="Contraseña" />
    <TextBox label="Con iconos en ambos lados" startAdornment={<span style={{
    fontSize: '20px'
  }}>🔢</span>} endAdornment={<span style={{
    fontSize: '14px',
    color: '#666'
  }}>Números</span>} type="number" placeholder="Solo números" />
  </div>`,...(I=(w=u.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var O,F,M;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`() => <div style={{
  width: '100%'
}}>
    <TextBox label="Campo de ancho completo" fullWidth placeholder="Este campo ocupa todo el ancho disponible" />
  </div>`,...(M=(F=m.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};const _e=["Default","Interactive","Variants","Sizes","States","WithAdornments","FullWidth"];export{n as Default,m as FullWidth,d as Interactive,p as Sizes,c as States,i as Variants,u as WithAdornments,_e as __namedExportsOrder,ve as default};
