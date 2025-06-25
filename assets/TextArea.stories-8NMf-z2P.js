import{j as v}from"./jsx-runtime-D_zvdyIk.js";import{r as G}from"./index-D4lIrffr.js";import{T as h}from"./index-RnacDOmr.js";const X={title:"Controls/TextArea",component:h,argTypes:{eventChange:{action:"changed"},eventFocus:{action:"focused"},eventBlur:{action:"blurred"},eventKeyDown:{action:"keyDown"}}},t=a=>{const[c,m]=G.useState(a.value||"");return v.jsx("div",{style:{maxWidth:"500px",padding:"20px"},children:v.jsx(h,{...a,value:c,eventChange:r=>{var g;m(r.target.value),(g=a.eventChange)==null||g.call(a,r)}})})},e=t.bind({});e.args={id:"default-textarea",value:"",placeholder:"Escribe algo aquí..."};const s=t.bind({});s.args={...e.args,id:"with-titles-textarea",titleTop:"Título superior",titleBottom:"Título inferior"};const n=t.bind({});n.args={...e.args,id:"with-placeholder-textarea",placeholder:"Este es un placeholder..."};const o=t.bind({});o.args={...e.args,id:"disabled-textarea",value:"Este campo está deshabilitado",disabled:!0};const u=t.bind({});u.args={...e.args,id:"readonly-textarea",value:"Este campo es de solo lectura",readOnly:!0};const l=t.bind({});l.args={...e.args,id:"required-textarea",required:!0,titleTop:"Campo requerido"};const i=t.bind({});i.args={...e.args,id:"custom-rows-textarea",rows:8,titleTop:"Área de texto con 8 filas"};const d=t.bind({});d.args={...e.args,id:"maxlength-textarea",size:100,titleTop:"Máximo 100 caracteres",titleBottom:"Caracteres restantes: 100"};const H=a=>{const[c,m]=G.useState(""),r=150,g=r-c.length;return v.jsx("div",{style:{maxWidth:"500px",padding:"20px"},children:v.jsx(h,{...a,id:"character-count-textarea",value:c,size:r,eventChange:x=>{var C;m(x.target.value),(C=a.eventChange)==null||C.call(a,x)},titleTop:"Cuenta de caracteres",titleBottom:`Caracteres restantes: ${g}`})})},p=H;H.__docgenInfo={description:"",methods:[],displayName:"WithCharacterCount"};var T,W,S;e.parameters={...e.parameters,docs:{...(T=e.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
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
}`,...(S=(W=e.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var y,V,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
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
}`,...(b=(V=s.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};var f,A,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
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
}`,...(w=(A=n.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var E,R,j;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
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
}`,...(j=(R=o.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var q,D,_;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
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
}`,...(_=(D=u.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var B,O,L;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
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
}`,...(L=(O=l.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var M,z,P;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
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
}`,...(P=(z=i.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var k,F,I;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
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
}`,...(I=(F=d.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var K,N,$;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:"WithCharacterCount",...($=(N=p.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};const Y=["Default","WithTitles","WithPlaceholder","Disabled","ReadOnly","Required","WithCustomRows","WithMaxLength","CharacterCount"];export{p as CharacterCount,e as Default,o as Disabled,u as ReadOnly,l as Required,i as WithCustomRows,d as WithMaxLength,n as WithPlaceholder,s as WithTitles,Y as __namedExportsOrder,X as default};
