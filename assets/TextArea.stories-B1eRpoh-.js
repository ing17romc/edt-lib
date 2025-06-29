import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./index-D4lIrffr.js";import{b as w}from"./enums-Ca2RdD1G.js";const T=C.forwardRef(({id:e,titleTop:s,placeholder:i,titleBottom:o,value:d,required:p=!1,disabled:n=!1,readOnly:u=!1,noPaste:ae=!1,noCopy:te=!1,size:re=200,rows:ne=4,eventChange:E,eventFocus:b,eventBlur:A,eventKeyDown:q,...se},oe)=>{const le=a=>{ae&&a.preventDefault()},ie=a=>{te&&a.preventDefault()},de=a=>{a.key==="Enter"?a.preventDefault():q&&!n&&!u&&q(a)};return t.jsx("div",{className:"body-textarea",children:t.jsxs("div",{className:"grid-primary",children:[t.jsx("div",{className:"start-1 size-12",children:s&&t.jsx("h3",{className:"title-textarea",children:s})}),t.jsx("div",{className:"start-1 size-12 padding-v-10",children:t.jsx("textarea",{id:e,name:e,value:d,placeholder:i,className:n?w.DISABLED:u?w.READ_ONLY:"",disabled:n,readOnly:u,onChange:a=>{E&&!n&&E(a)},onFocus:a=>{b&&!n&&!u&&b(a)},onBlur:a=>{A&&!n&&!u&&A(a)},onKeyDown:de,ref:oe,onPaste:le,onCopy:ie,rows:ne,maxLength:re,autoComplete:"off",required:p,"aria-label":s||i,"aria-required":p,"aria-disabled":n,"aria-readonly":u,...se})}),o&&t.jsx("div",{className:"start-1 size-12 padding-v-10",children:t.jsx("h3",{className:"title-textarea",children:o})})]})})});T.displayName="TextArea";T.__docgenInfo={description:`Componente TextArea que proporciona un área de texto con múltiples opciones de configuración.
Permite crear áreas de texto personalizadas con títulos, placeholders y diferentes estados.

@param {TextAreaProps} props - Propiedades del componente
@param {string} props.id - ID único para el textarea (requerido)
@param {string} [props.titleTop] - Título superior del área de texto
@param {string} [props.placeholder] - Texto de placeholder
@param {string} [props.titleBottom] - Título inferior del área de texto
@param {string} props.value - Valor actual del textarea
@param {boolean} [props.required=false] - Si el área de texto es requerida
@param {boolean} [props.disabled=false] - Si el área de texto está deshabilitada
@param {boolean} [props.readOnly=false] - Si el área de texto es de solo lectura
@param {boolean} [props.noPaste=false] - Si se permite pegar
@param {boolean} [props.noCopy=false] - Si se permite copiar
@param {number} [props.size=200] - Número máximo de caracteres
@param {number} [props.rows=4] - Número de filas del textarea
@param {(e: React.ChangeEvent<HTMLTextAreaElement>) => void} [props.eventChange] - Evento de cambio
@param {(e: React.FocusEvent<HTMLTextAreaElement>) => void} [props.eventFocus] - Evento de enfoque
@param {(e: React.FocusEvent<HTMLTextAreaElement>) => void} [props.eventBlur] - Evento de pérdida de enfoque
@param {(e: React.KeyboardEvent<HTMLTextAreaElement>) => void} [props.eventKeyDown] - Evento de tecla presionada
@param {Ref<HTMLTextAreaElement>} [props.ref] - Referencia al elemento textarea
@returns {JSX.Element} Elemento textarea con configuración personalizada`,methods:[],displayName:"TextArea",props:{id:{required:!0,tsType:{name:"string"},description:"Unique identifier for the textarea (required)"},titleTop:{required:!1,tsType:{name:"string"},description:"Text to display above the textarea"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text to display when the textarea is empty"},titleBottom:{required:!1,tsType:{name:"string"},description:"Text to display below the textarea"},value:{required:!0,tsType:{name:"string"},description:"Current value of the textarea (controlled component)"},required:{required:!1,tsType:{name:"boolean"},description:"Whether the textarea is required",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the textarea is disabled",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the textarea is read-only",defaultValue:{value:"false",computed:!1}},noPaste:{required:!1,tsType:{name:"boolean"},description:"Whether to prevent paste operations",defaultValue:{value:"false",computed:!1}},noCopy:{required:!1,tsType:{name:"boolean"},description:"Whether to prevent copy operations",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"number"},description:"Maximum number of characters allowed",defaultValue:{value:"200",computed:!1}},rows:{required:!1,tsType:{name:"number"},description:"Number of visible text lines",defaultValue:{value:"4",computed:!1}},eventChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"e"}],return:{name:"void"}}},description:"Callback when the value changes"},eventFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"e"}],return:{name:"void"}}},description:"Callback when the textarea receives focus"},eventBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"e"}],return:{name:"void"}}},description:"Callback when the textarea loses focus"},eventKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.KeyboardEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"e"}],return:{name:"void"}}},description:"Callback when a key is pressed"},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLTextAreaElement"}],raw:"Ref<HTMLTextAreaElement>"},description:"Ref to the underlying textarea element"}}};const me={title:"Controls/TextArea",component:T,argTypes:{eventChange:{action:"changed"},eventFocus:{action:"focused"},eventBlur:{action:"blurred"},eventKeyDown:{action:"keyDown"}}},l=e=>{const[s,i]=C.useState(e.value||"");return t.jsx("div",{style:{maxWidth:"500px",padding:"20px"},children:t.jsx(T,{...e,value:s,eventChange:o=>{var d;i(o.target.value),(d=e.eventChange)==null||d.call(e,o)}})})},r=l.bind({});r.args={id:"default-textarea",value:"",placeholder:"Escribe algo aquí..."};const c=l.bind({});c.args={...r.args,id:"with-titles-textarea",titleTop:"Título superior",titleBottom:"Título inferior"};const m=l.bind({});m.args={...r.args,id:"with-placeholder-textarea",placeholder:"Este es un placeholder..."};const v=l.bind({});v.args={...r.args,id:"disabled-textarea",value:"Este campo está deshabilitado",disabled:!0};const g=l.bind({});g.args={...r.args,id:"readonly-textarea",value:"Este campo es de solo lectura",readOnly:!0};const x=l.bind({});x.args={...r.args,id:"required-textarea",required:!0,titleTop:"Campo requerido"};const h=l.bind({});h.args={...r.args,id:"custom-rows-textarea",rows:8,titleTop:"Área de texto con 8 filas"};const f=l.bind({});f.args={...r.args,id:"maxlength-textarea",size:100,titleTop:"Máximo 100 caracteres",titleBottom:"Caracteres restantes: 100"};const ee=e=>{const[s,i]=C.useState(""),o=150,d=o-s.length;return t.jsx("div",{style:{maxWidth:"500px",padding:"20px"},children:t.jsx(T,{...e,id:"character-count-textarea",value:s,size:o,eventChange:p=>{var n;i(p.target.value),(n=e.eventChange)==null||n.call(e,p)},titleTop:"Cuenta de caracteres",titleBottom:`Caracteres restantes: ${d}`})})},y=ee;ee.__docgenInfo={description:"",methods:[],displayName:"WithCharacterCount"};var R,S,V;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  return <div style={{
    maxWidth: '500px',
    padding: '20px'
  }}>
      <TextArea {...args} value={value} eventChange={e => {
      setValue(e.target.value);
      args.eventChange?.(e);
    }} />
    </div>;
}`,...(V=(S=r.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var W,L,M;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  return <div style={{
    maxWidth: '500px',
    padding: '20px'
  }}>
      <TextArea {...args} value={value} eventChange={e => {
      setValue(e.target.value);
      args.eventChange?.(e);
    }} />
    </div>;
}`,...(M=(L=c.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var H,D,N;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  return <div style={{
    maxWidth: '500px',
    padding: '20px'
  }}>
      <TextArea {...args} value={value} eventChange={e => {
      setValue(e.target.value);
      args.eventChange?.(e);
    }} />
    </div>;
}`,...(N=(D=m.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var j,F,P;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  return <div style={{
    maxWidth: '500px',
    padding: '20px'
  }}>
      <TextArea {...args} value={value} eventChange={e => {
      setValue(e.target.value);
      args.eventChange?.(e);
    }} />
    </div>;
}`,...(P=(F=v.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var z,B,K;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  return <div style={{
    maxWidth: '500px',
    padding: '20px'
  }}>
      <TextArea {...args} value={value} eventChange={e => {
      setValue(e.target.value);
      args.eventChange?.(e);
    }} />
    </div>;
}`,...(K=(B=g.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var _,k,I;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  return <div style={{
    maxWidth: '500px',
    padding: '20px'
  }}>
      <TextArea {...args} value={value} eventChange={e => {
      setValue(e.target.value);
      args.eventChange?.(e);
    }} />
    </div>;
}`,...(I=(k=x.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var O,J,U;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  return <div style={{
    maxWidth: '500px',
    padding: '20px'
  }}>
      <TextArea {...args} value={value} eventChange={e => {
      setValue(e.target.value);
      args.eventChange?.(e);
    }} />
    </div>;
}`,...(U=(J=h.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var X,Y,$;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  return <div style={{
    maxWidth: '500px',
    padding: '20px'
  }}>
      <TextArea {...args} value={value} eventChange={e => {
      setValue(e.target.value);
      args.eventChange?.(e);
    }} />
    </div>;
}`,...($=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var G,Q,Z;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:"WithCharacterCount",...(Z=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};const ve=["Default","WithTitles","WithPlaceholder","Disabled","ReadOnly","Required","WithCustomRows","WithMaxLength","CharacterCount"];export{y as CharacterCount,r as Default,v as Disabled,g as ReadOnly,x as Required,h as WithCustomRows,f as WithMaxLength,m as WithPlaceholder,c as WithTitles,ve as __namedExportsOrder,me as default};
