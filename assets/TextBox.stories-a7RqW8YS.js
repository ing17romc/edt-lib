import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-D4lIrffr.js";const se="_textBoxContainer_8e8u1_2",re="_fullWidth_8e8u1_10",ne="_label_8e8u1_14",de="_disabled_8e8u1_22",ie="_error_8e8u1_25",pe="_inputWrapper_8e8u1_29",ce="_input_8e8u1_29",ue="_startAdornment_8e8u1_144",me="_endAdornment_8e8u1_145",xe="_helperText_8e8u1_160",fe="_hasStartAdornment_8e8u1_171",he="_hasEndAdornment_8e8u1_175",t={textBoxContainer:se,fullWidth:re,label:ne,disabled:de,error:ie,inputWrapper:pe,"variant-outlined":"_variant-outlined_8e8u1_38","variant-filled":"_variant-filled_8e8u1_52","variant-standard":"_variant-standard_8e8u1_67","size-small":"_size-small_8e8u1_80","size-medium":"_size-medium_8e8u1_84","size-large":"_size-large_8e8u1_88",input:ce,startAdornment:ue,endAdornment:me,helperText:xe,hasStartAdornment:fe,hasEndAdornment:he},a=v.forwardRef(({label:s,helperText:l,error:o=!1,fullWidth:r=!1,variant:$="outlined",size:U="medium",startAdornment:x,endAdornment:f,className:k="",containerClassName:G="",labelClassName:H="",inputClassName:J="",helperTextClassName:K="",disabled:h=!1,id:P,...Q},X)=>{const b=P||`textbox-${Math.random().toString(36).substr(2,9)}`,y=l?`${b}-helper-text`:void 0,Y=[t.textBoxContainer,r?t.fullWidth:"",G].filter(Boolean).join(" "),Z=r?{width:"100%",display:"block"}:void 0,ee=r?{width:"100%",maxWidth:"100%",boxSizing:"border-box"}:void 0,ae=[t.label,h?t.disabled:"",o?t.error:"",H].filter(Boolean).join(" "),te=[t.inputWrapper,t[`variant-${$}`],t[`size-${U}`],o?t.error:"",h?t.disabled:"",k].filter(Boolean).join(" "),oe=[t.input,x?t.hasStartAdornment:"",f?t.hasEndAdornment:"",J].filter(Boolean).join(" "),le=[t.helperText,o?t.error:"",K].filter(Boolean).join(" ");return e.jsxs("div",{className:Y,style:Z,children:[s&&e.jsx("label",{htmlFor:b,className:ae,children:s}),e.jsxs("div",{className:te,style:ee,children:[x&&e.jsx("span",{className:t.startAdornment,children:x}),e.jsx("input",{id:b,type:"text",ref:X,className:oe,disabled:h,"aria-invalid":o,"aria-describedby":y,style:r?{width:"100%"}:void 0,...Q}),f&&e.jsx("span",{className:t.endAdornment,children:f})]}),l&&e.jsx("p",{id:y,className:le,children:l})]})});a.displayName="TextBox";a.__docgenInfo={description:`Componente de campo de texto que permite la entrada de texto de una sola línea.
Soporta diferentes variantes, tamaños y estados.`,methods:[],displayName:"TextBox",props:{label:{required:!1,tsType:{name:"string"},description:"Etiqueta que se muestra encima del campo de texto"},helperText:{required:!1,tsType:{name:"string"},description:"Texto de ayuda que se muestra debajo del campo"},error:{required:!1,tsType:{name:"boolean"},description:`Si es true, muestra un indicador de error
@default false`,defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Si es true, el campo ocupa todo el ancho disponible
@default false`,defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'outlined' | 'filled' | 'standard'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'standard'"}]},description:`Variante de diseño del campo de texto
@default 'outlined'`,defaultValue:{value:"'outlined'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`Tamaño del campo de texto
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},startAdornment:{required:!1,tsType:{name:"ReactNode"},description:"Elemento que se muestra al inicio del campo"},endAdornment:{required:!1,tsType:{name:"ReactNode"},description:"Elemento que se muestra al final del campo"},containerClassName:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada para el contenedor",defaultValue:{value:"''",computed:!1}},labelClassName:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada para la etiqueta",defaultValue:{value:"''",computed:!1}},inputClassName:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada para el campo de entrada",defaultValue:{value:"''",computed:!1}},helperTextClassName:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada para el texto de ayuda",defaultValue:{value:"''",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const ye={title:"Components/TextBox",component:a,argTypes:{variant:{control:{type:"select",options:["outlined","filled","standard"]}},size:{control:{type:"select",options:["small","medium","large"]}},type:{control:{type:"select",options:["text","email","password","number","tel","url","search"]}},error:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},required:{control:"boolean"},readOnly:{control:"boolean"}},parameters:{componentSubtitle:"Campo de entrada de texto de una sola línea",docs:{description:{component:"Un componente de campo de texto que permite la entrada de texto de una sola línea. Soporta diferentes variantes, tamaños y estados."}}}},R=s=>{const[l,o]=v.useState("");return e.jsx(a,{...s,value:l,onChange:r=>o(r.target.value)})},n=R.bind({});n.args={label:"Etiqueta",placeholder:"Escribe algo...",variant:"outlined",size:"medium"};const d=R.bind({});d.args={...n.args};d.parameters={docs:{description:{story:"Usa los controles en el panel de controles para cambiar las propiedades del campo de texto."}}};const i=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"400px"},children:[e.jsx(a,{label:"Outlined",variant:"outlined",placeholder:"Outlined"}),e.jsx(a,{label:"Filled",variant:"filled",placeholder:"Filled"}),e.jsx(a,{label:"Standard",variant:"standard",placeholder:"Standard"})]});i.parameters={docs:{description:{story:"Diferentes variantes de diseño para el campo de texto."}}};const p=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(a,{label:"Small",size:"small",placeholder:"Small size"}),e.jsx(a,{label:"Medium",size:"medium",placeholder:"Medium size"}),e.jsx(a,{label:"Large",size:"large",placeholder:"Large size"})]});p.parameters={docs:{description:{story:"Diferentes tamaños para el campo de texto."}}};const c=()=>{const[s,l]=v.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(a,{label:"Campo normal",value:s,onChange:o=>l(o.target.value),placeholder:"Escribe algo..."}),e.jsx(a,{label:"Campo con valor por defecto",defaultValue:"Valor por defecto"}),e.jsx(a,{label:"Campo deshabilitado",disabled:!0,placeholder:"No puedes escribir aquí"}),e.jsx(a,{label:"Campo de solo lectura",readOnly:!0,value:"Este texto no se puede editar"}),e.jsx(a,{label:"Campo requerido",required:!0,placeholder:"Este campo es obligatorio"}),e.jsx(a,{label:"Campo con error",error:!0,helperText:"Mensaje de error",defaultValue:"Valor incorrecto"})]})};c.parameters={docs:{description:{story:"Diferentes estados del campo de texto: normal, con valor, deshabilitado, solo lectura, requerido y con error."}}};const u=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(a,{label:"Con icono al inicio",startAdornment:e.jsx("span",{style:{fontSize:"20px"},children:"🔍"}),placeholder:"Buscar..."}),e.jsx(a,{label:"Con icono al final",endAdornment:e.jsx("span",{style:{fontSize:"20px"},children:"🔒"}),type:"password",placeholder:"Contraseña"}),e.jsx(a,{label:"Con iconos en ambos lados",startAdornment:e.jsx("span",{style:{fontSize:"20px"},children:"🔢"}),endAdornment:e.jsx("span",{style:{fontSize:"14px",color:"#666"},children:"Números"}),type:"number",placeholder:"Solo números"})]});u.parameters={docs:{description:{story:"Campos de texto con iconos u otros elementos decorativos."}}};const m=()=>e.jsx("div",{style:{width:"100%"},children:e.jsx(a,{label:"Campo de ancho completo",fullWidth:!0,placeholder:"Este campo ocupa todo el ancho disponible"})});m.parameters={docs:{description:{story:"Campo de texto que ocupa todo el ancho disponible en su contenedor."}}};i.__docgenInfo={description:"",methods:[],displayName:"Variants"};p.__docgenInfo={description:"",methods:[],displayName:"Sizes"};c.__docgenInfo={description:"",methods:[],displayName:"States"};u.__docgenInfo={description:"",methods:[],displayName:"WithAdornments"};m.__docgenInfo={description:"",methods:[],displayName:"FullWidth"};var _,g,S;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
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
  </div>`,...(A=(W=p.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var N,E,D;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
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
}`,...(D=(E=c.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var w,I,O;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...(O=(I=u.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var F,M,L;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`() => <div style={{
  width: '100%'
}}>
    <TextBox label="Campo de ancho completo" fullWidth placeholder="Este campo ocupa todo el ancho disponible" />
  </div>`,...(L=(M=m.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};const _e=["Default","Interactive","Variants","Sizes","States","WithAdornments","FullWidth"];export{n as Default,m as FullWidth,d as Interactive,p as Sizes,c as States,i as Variants,u as WithAdornments,_e as __namedExportsOrder,ye as default};
