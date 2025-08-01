import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-D4lIrffr.js";import{C as l}from"./types-D2sN4igU.js";const ne="_textBoxContainer_mne0c_2",de="_fullWidth_mne0c_10",ie="_label_mne0c_14",ce="_disabled_mne0c_22",pe="_error_mne0c_25",me="_inputWrapper_mne0c_29",ue="_input_mne0c_29",xe="_startAdornment_mne0c_144",fe="_endAdornment_mne0c_145",he="_helperText_mne0c_160",be="_hasStartAdornment_mne0c_171",ve="_hasEndAdornment_mne0c_175",t={textBoxContainer:ne,fullWidth:de,label:ie,disabled:ce,error:pe,inputWrapper:me,"variant-outlined":"_variant-outlined_mne0c_38","variant-filled":"_variant-filled_mne0c_52","variant-standard":"_variant-standard_mne0c_67","size-small":"_size-small_mne0c_80","size-medium":"_size-medium_mne0c_84","size-large":"_size-large_mne0c_88",input:ue,startAdornment:xe,endAdornment:fe,helperText:he,hasStartAdornment:be,hasEndAdornment:ve},a=y.forwardRef(({label:r,helperText:s,error:o=!1,fullWidth:n=!1,variant:G="outlined",size:k=l.MEDIUM,startAdornment:f,endAdornment:h,className:H="",containerClassName:J="",labelClassName:K="",inputClassName:P="",helperTextClassName:Q="",disabled:b=!1,id:X,...Y},Z)=>{const v=X||`textbox-${Math.random().toString(36).substr(2,9)}`,_=s?`${v}-helper-text`:void 0,ee=[t.textBoxContainer,n?t.fullWidth:"",J].filter(Boolean).join(" "),ae=n?{width:"100%",display:"block"}:void 0,te=n?{width:"100%",maxWidth:"100%",boxSizing:"border-box"}:void 0,oe=[t.label,b?t.disabled:"",o?t.error:"",K].filter(Boolean).join(" "),le=[t.inputWrapper,t[`variant-${G}`],t[`size-${k}`],o?t.error:"",b?t.disabled:"",H].filter(Boolean).join(" "),se=[t.input,f?t.hasStartAdornment:"",h?t.hasEndAdornment:"",P].filter(Boolean).join(" "),re=[t.helperText,o?t.error:"",Q].filter(Boolean).join(" ");return e.jsxs("div",{className:ee,style:ae,children:[r&&e.jsx("label",{htmlFor:v,className:oe,children:r}),e.jsxs("div",{className:le,style:te,children:[f&&e.jsx("span",{className:t.startAdornment,children:f}),e.jsx("input",{id:v,type:"text",ref:Z,className:se,disabled:b,"aria-invalid":o,"aria-describedby":_,style:n?{width:"100%"}:void 0,...Y}),h&&e.jsx("span",{className:t.endAdornment,children:h})]}),s&&e.jsx("p",{id:_,className:re,children:s})]})});a.displayName="TextBox";a.__docgenInfo={description:`Componente de campo de texto que permite la entrada de texto de una sola línea.
Soporta diferentes variantes, tamaños y estados.`,methods:[],displayName:"TextBox",props:{label:{required:!1,tsType:{name:"string"},description:"Etiqueta que se muestra encima del campo de texto"},helperText:{required:!1,tsType:{name:"string"},description:"Texto de ayuda que se muestra debajo del campo"},error:{required:!1,tsType:{name:"boolean"},description:`Si es true, muestra un indicador de error
@default false`,defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Si es true, el campo ocupa todo el ancho disponible
@default false`,defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'outlined' | 'filled' | 'standard'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'standard'"}]},description:`Variante de diseño del campo de texto
@default 'outlined'`,defaultValue:{value:"'outlined'",computed:!1}},size:{required:!1,tsType:{name:"ComponentSize"},description:`Tamaño del campo de texto
@default 'medium'`,defaultValue:{value:"ComponentSize.MEDIUM",computed:!0}},startAdornment:{required:!1,tsType:{name:"ReactNode"},description:"Elemento que se muestra al inicio del campo"},endAdornment:{required:!1,tsType:{name:"ReactNode"},description:"Elemento que se muestra al final del campo"},containerClassName:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada para el contenedor",defaultValue:{value:"''",computed:!1}},labelClassName:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada para la etiqueta",defaultValue:{value:"''",computed:!1}},inputClassName:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada para el campo de entrada",defaultValue:{value:"''",computed:!1}},helperTextClassName:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada para el texto de ayuda",defaultValue:{value:"''",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const R={label:"Etiqueta",placeholder:"Escribe algo...",variant:"outlined",size:l.MEDIUM},Ce={title:"Components/TextBox",component:a,argTypes:{variant:{control:{type:"select",options:["outlined","filled","standard"]}},size:{control:"select",options:Object.values(l),description:"Tamaño",table:{type:{summary:Object.values(l).join(" | ")},defaultValue:{summary:l.MEDIUM}}},type:{control:{type:"select",options:["text","email","password","number","tel","url","search"]}},error:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},required:{control:"boolean"},readOnly:{control:"boolean"}},parameters:{componentSubtitle:"Campo de entrada de texto de una sola línea",docs:{description:{component:"Un componente de campo de texto que permite la entrada de texto de una sola línea. Soporta diferentes variantes, tamaños y estados."}}}},$=r=>{const[s,o]=y.useState("");return e.jsx(a,{...r,value:s,onChange:n=>o(n.target.value)})},x=$.bind({});x.args=R;const d=$.bind({});d.args={...R};d.parameters={docs:{description:{story:"Usa los controles en el panel de controles para cambiar las propiedades del campo de texto."}}};const i=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"400px"},children:[e.jsx(a,{label:"Outlined",variant:"outlined",placeholder:"Outlined"}),e.jsx(a,{label:"Filled",variant:"filled",placeholder:"Filled"}),e.jsx(a,{label:"Standard",variant:"standard",placeholder:"Standard"})]});i.parameters={docs:{description:{story:"Diferentes variantes de diseño para el campo de texto."}}};const c=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(a,{label:"Small",size:l.SMALL,placeholder:"Small size"}),e.jsx(a,{label:"Medium",size:l.MEDIUM,placeholder:"Medium size"}),e.jsx(a,{label:"Large",size:l.LARGE,placeholder:"Large size"})]});c.parameters={docs:{description:{story:"Diferentes tamaños para el campo de texto."}}};const p=()=>{const[r,s]=y.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(a,{label:"Campo normal",value:r,onChange:o=>s(o.target.value),placeholder:"Escribe algo..."}),e.jsx(a,{label:"Campo con valor por defecto",defaultValue:"Valor por defecto"}),e.jsx(a,{label:"Campo deshabilitado",disabled:!0,placeholder:"No puedes escribir aquí"}),e.jsx(a,{label:"Campo de solo lectura",readOnly:!0,value:"Este texto no se puede editar"}),e.jsx(a,{label:"Campo requerido",required:!0,placeholder:"Este campo es obligatorio"}),e.jsx(a,{label:"Campo con error",error:!0,helperText:"Mensaje de error",defaultValue:"Valor incorrecto"})]})};p.parameters={docs:{description:{story:"Diferentes estados del campo de texto: normal, con valor, deshabilitado, solo lectura, requerido y con error."}}};const m=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(a,{label:"Con icono al inicio",startAdornment:e.jsx("span",{style:{fontSize:"20px"},children:"🔍"}),placeholder:"Buscar..."}),e.jsx(a,{label:"Con icono al final",endAdornment:e.jsx("span",{style:{fontSize:"20px"},children:"🔒"}),type:"password",placeholder:"Contraseña"}),e.jsx(a,{label:"Con iconos en ambos lados",startAdornment:e.jsx("span",{style:{fontSize:"20px"},children:"🔢"}),endAdornment:e.jsx("span",{style:{fontSize:"14px",color:"#666"},children:"Números"}),type:"number",placeholder:"Solo números"})]});m.parameters={docs:{description:{story:"Campos de texto con iconos u otros elementos decorativos."}}};const u=()=>e.jsx("div",{style:{width:"100%"},children:e.jsx(a,{label:"Campo de ancho completo",fullWidth:!0,placeholder:"Este campo ocupa todo el ancho disponible"})});u.parameters={docs:{description:{story:"Campo de texto que ocupa todo el ancho disponible en su contenedor."}}};i.__docgenInfo={description:"",methods:[],displayName:"Variants"};c.__docgenInfo={description:"",methods:[],displayName:"Sizes"};p.__docgenInfo={description:"",methods:[],displayName:"States"};m.__docgenInfo={description:"",methods:[],displayName:"WithAdornments"};u.__docgenInfo={description:"",methods:[],displayName:"FullWidth"};var S,C,g;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <TextBox {...args} value={value} onChange={e => setValue(e.target.value)} />;
}`,...(g=(C=x.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var T,j,z;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <TextBox {...args} value={value} onChange={e => setValue(e.target.value)} />;
}`,...(z=(j=d.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var B,q,V;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  maxWidth: '400px'
}}>
    <TextBox label="Outlined" variant="outlined" placeholder="Outlined" />
    <TextBox label="Filled" variant="filled" placeholder="Filled" />
    <TextBox label="Standard" variant="standard" placeholder="Standard" />
  </div>`,...(V=(q=i.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var A,E,W;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  maxWidth: '400px'
}}>
    <TextBox label="Small" size={ComponentSize.SMALL} placeholder="Small size" />
    <TextBox label="Medium" size={ComponentSize.MEDIUM} placeholder="Medium size" />
    <TextBox label="Large" size={ComponentSize.LARGE} placeholder="Large size" />
  </div>`,...(W=(E=c.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var N,M,D;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
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
}`,...(D=(M=p.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var I,O,w;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...(w=(O=m.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var L,F,U;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`() => <div style={{
  width: '100%'
}}>
    <TextBox label="Campo de ancho completo" fullWidth placeholder="Este campo ocupa todo el ancho disponible" />
  </div>`,...(U=(F=u.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};const ge=["Default","Interactive","Variants","Sizes","States","WithAdornments","FullWidth"];export{x as Default,u as FullWidth,d as Interactive,c as Sizes,p as States,i as Variants,m as WithAdornments,ge as __namedExportsOrder,Ce as default};
