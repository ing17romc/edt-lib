import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-CgfFrydU.js";import"./_commonjsHelpers-CqkleIqs.js";const re="_textBoxContainer_mne0c_2",ne="_fullWidth_mne0c_10",de="_label_mne0c_14",ie="_disabled_mne0c_22",ce="_error_mne0c_25",pe="_inputWrapper_mne0c_29",me="_input_mne0c_29",ue="_startAdornment_mne0c_144",xe="_endAdornment_mne0c_145",fe="_helperText_mne0c_160",he="_hasStartAdornment_mne0c_171",be="_hasEndAdornment_mne0c_175",t={textBoxContainer:re,fullWidth:ne,label:de,disabled:ie,error:ce,inputWrapper:pe,"variant-outlined":"_variant-outlined_mne0c_38","variant-filled":"_variant-filled_mne0c_52","variant-standard":"_variant-standard_mne0c_67","size-small":"_size-small_mne0c_80","size-medium":"_size-medium_mne0c_84","size-large":"_size-large_mne0c_88",input:me,startAdornment:ue,endAdornment:xe,helperText:fe,hasStartAdornment:he,hasEndAdornment:be},a=v.forwardRef(({label:s,helperText:l,error:o=!1,fullWidth:r=!1,variant:U="outlined",size:k="medium",startAdornment:x,endAdornment:f,className:G="",containerClassName:H="",labelClassName:J="",inputClassName:K="",helperTextClassName:P="",disabled:h=!1,id:Q,...X},Y)=>{const b=Q||`textbox-${Math.random().toString(36).substr(2,9)}`,y=l?`${b}-helper-text`:void 0,Z=[t.textBoxContainer,r?t.fullWidth:"",H].filter(Boolean).join(" "),ee=r?{width:"100%",display:"block"}:void 0,ae=r?{width:"100%",maxWidth:"100%",boxSizing:"border-box"}:void 0,te=[t.label,h?t.disabled:"",o?t.error:"",J].filter(Boolean).join(" "),oe=[t.inputWrapper,t[`variant-${U}`],t[`size-${k}`],o?t.error:"",h?t.disabled:"",G].filter(Boolean).join(" "),le=[t.input,x?t.hasStartAdornment:"",f?t.hasEndAdornment:"",K].filter(Boolean).join(" "),se=[t.helperText,o?t.error:"",P].filter(Boolean).join(" ");return e.jsxs("div",{className:Z,style:ee,children:[s&&e.jsx("label",{htmlFor:b,className:te,children:s}),e.jsxs("div",{className:oe,style:ae,children:[x&&e.jsx("span",{className:t.startAdornment,children:x}),e.jsx("input",{id:b,type:"text",ref:Y,className:le,disabled:h,"aria-invalid":o,"aria-describedby":y,style:r?{width:"100%"}:void 0,...X}),f&&e.jsx("span",{className:t.endAdornment,children:f})]}),l&&e.jsx("p",{id:y,className:se,children:l})]})});a.displayName="TextBox";a.__docgenInfo={description:`Componente de campo de texto que permite la entrada de texto de una sola línea.
Soporta diferentes variantes, tamaños y estados.`,methods:[],displayName:"TextBox",props:{label:{required:!1,tsType:{name:"string"},description:"Etiqueta que se muestra encima del campo de texto"},helperText:{required:!1,tsType:{name:"string"},description:"Texto de ayuda que se muestra debajo del campo"},error:{required:!1,tsType:{name:"boolean"},description:`Si es true, muestra un indicador de error
@default false`,defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Si es true, el campo ocupa todo el ancho disponible
@default false`,defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'outlined' | 'filled' | 'standard'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'standard'"}]},description:`Variante de diseño del campo de texto
@default 'outlined'`,defaultValue:{value:"'outlined'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`Tamaño del campo de texto
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},startAdornment:{required:!1,tsType:{name:"ReactNode"},description:"Elemento que se muestra al inicio del campo"},endAdornment:{required:!1,tsType:{name:"ReactNode"},description:"Elemento que se muestra al final del campo"},containerClassName:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada para el contenedor",defaultValue:{value:"''",computed:!1}},labelClassName:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada para la etiqueta",defaultValue:{value:"''",computed:!1}},inputClassName:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada para el campo de entrada",defaultValue:{value:"''",computed:!1}},helperTextClassName:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada para el texto de ayuda",defaultValue:{value:"''",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const R={label:"Etiqueta",placeholder:"Escribe algo...",variant:"outlined",size:"medium"},ge={title:"Components/TextBox",component:a,argTypes:{variant:{control:{type:"select",options:["outlined","filled","standard"]}},size:{control:{type:"select",options:["small","medium","large"]}},type:{control:{type:"select",options:["text","email","password","number","tel","url","search"]}},error:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},required:{control:"boolean"},readOnly:{control:"boolean"}},parameters:{componentSubtitle:"Campo de entrada de texto de una sola línea",docs:{description:{component:"Un componente de campo de texto que permite la entrada de texto de una sola línea. Soporta diferentes variantes, tamaños y estados."}}}},$=s=>{const[l,o]=v.useState("");return e.jsx(a,{...s,value:l,onChange:r=>o(r.target.value)})},u=$.bind({});u.args=R;const n=$.bind({});n.args={...R};n.parameters={docs:{description:{story:"Usa los controles en el panel de controles para cambiar las propiedades del campo de texto."}}};const d=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"400px"},children:[e.jsx(a,{label:"Outlined",variant:"outlined",placeholder:"Outlined"}),e.jsx(a,{label:"Filled",variant:"filled",placeholder:"Filled"}),e.jsx(a,{label:"Standard",variant:"standard",placeholder:"Standard"})]});d.parameters={docs:{description:{story:"Diferentes variantes de diseño para el campo de texto."}}};const i=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(a,{label:"Small",size:"small",placeholder:"Small size"}),e.jsx(a,{label:"Medium",size:"medium",placeholder:"Medium size"}),e.jsx(a,{label:"Large",size:"large",placeholder:"Large size"})]});i.parameters={docs:{description:{story:"Diferentes tamaños para el campo de texto."}}};const c=()=>{const[s,l]=v.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(a,{label:"Campo normal",value:s,onChange:o=>l(o.target.value),placeholder:"Escribe algo..."}),e.jsx(a,{label:"Campo con valor por defecto",defaultValue:"Valor por defecto"}),e.jsx(a,{label:"Campo deshabilitado",disabled:!0,placeholder:"No puedes escribir aquí"}),e.jsx(a,{label:"Campo de solo lectura",readOnly:!0,value:"Este texto no se puede editar"}),e.jsx(a,{label:"Campo requerido",required:!0,placeholder:"Este campo es obligatorio"}),e.jsx(a,{label:"Campo con error",error:!0,helperText:"Mensaje de error",defaultValue:"Valor incorrecto"})]})};c.parameters={docs:{description:{story:"Diferentes estados del campo de texto: normal, con valor, deshabilitado, solo lectura, requerido y con error."}}};const p=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(a,{label:"Con icono al inicio",startAdornment:e.jsx("span",{style:{fontSize:"20px"},children:"🔍"}),placeholder:"Buscar..."}),e.jsx(a,{label:"Con icono al final",endAdornment:e.jsx("span",{style:{fontSize:"20px"},children:"🔒"}),type:"password",placeholder:"Contraseña"}),e.jsx(a,{label:"Con iconos en ambos lados",startAdornment:e.jsx("span",{style:{fontSize:"20px"},children:"🔢"}),endAdornment:e.jsx("span",{style:{fontSize:"14px",color:"#666"},children:"Números"}),type:"number",placeholder:"Solo números"})]});p.parameters={docs:{description:{story:"Campos de texto con iconos u otros elementos decorativos."}}};const m=()=>e.jsx("div",{style:{width:"100%"},children:e.jsx(a,{label:"Campo de ancho completo",fullWidth:!0,placeholder:"Este campo ocupa todo el ancho disponible"})});m.parameters={docs:{description:{story:"Campo de texto que ocupa todo el ancho disponible en su contenedor."}}};d.__docgenInfo={description:"",methods:[],displayName:"Variants"};i.__docgenInfo={description:"",methods:[],displayName:"Sizes"};c.__docgenInfo={description:"",methods:[],displayName:"States"};p.__docgenInfo={description:"",methods:[],displayName:"WithAdornments"};m.__docgenInfo={description:"",methods:[],displayName:"FullWidth"};var _,g,S;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <TextBox {...args} value={value} onChange={e => setValue(e.target.value)} />;
}`,...(S=(g=u.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var C,T,j;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <TextBox {...args} value={value} onChange={e => setValue(e.target.value)} />;
}`,...(j=(T=n.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var z,B,q;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  maxWidth: '400px'
}}>
    <TextBox label="Outlined" variant="outlined" placeholder="Outlined" />
    <TextBox label="Filled" variant="filled" placeholder="Filled" />
    <TextBox label="Standard" variant="standard" placeholder="Standard" />
  </div>`,...(q=(B=d.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var V,A,W;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  maxWidth: '400px'
}}>
    <TextBox label="Small" size="small" placeholder="Small size" />
    <TextBox label="Medium" size="medium" placeholder="Medium size" />
    <TextBox label="Large" size="large" placeholder="Large size" />
  </div>`,...(W=(A=i.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var N,E,D;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
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
}`,...(D=(E=c.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var w,I,O;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...(O=(I=p.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var F,M,L;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`() => <div style={{
  width: '100%'
}}>
    <TextBox label="Campo de ancho completo" fullWidth placeholder="Este campo ocupa todo el ancho disponible" />
  </div>`,...(L=(M=m.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};const Se=["Default","Interactive","Variants","Sizes","States","WithAdornments","FullWidth"];export{u as Default,m as FullWidth,n as Interactive,i as Sizes,c as States,d as Variants,p as WithAdornments,Se as __namedExportsOrder,ge as default};
