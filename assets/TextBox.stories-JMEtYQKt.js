import{T as G}from"./index-Dp0Xzw04.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";const Z={title:"Controls/TextBox",component:G,parameters:{layout:"centered",docs:{description:{component:"Un componente de campo de texto personalizable con múltiples opciones de configuración."}}},argTypes:{id:{control:"text",description:"ID único para el campo de entrada",table:{type:{summary:"string"}}},value:{control:"text",description:"Valor actual del campo",table:{type:{summary:"string"}}},titleTop:{control:"text",description:"Título que aparece encima del campo",table:{type:{summary:"string"}}},titleBottom:{control:"text",description:"Texto descriptivo debajo del campo",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"Texto de marcador de posición",table:{type:{summary:"string"}}},required:{control:"boolean",description:"Indica si el campo es obligatorio",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isPassword:{control:"boolean",description:"Indica si el campo es de tipo contraseña",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Indica si el campo está deshabilitado",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readOnly:{control:"boolean",description:"Indica si el campo es de solo lectura",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},noPaste:{control:"boolean",description:"Indica si está deshabilitado el pegado de texto",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},noCopy:{control:"boolean",description:"Indica si está deshabilitada la copia de texto",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},size:{control:{type:"number",min:100,max:1e3,step:10},description:"Ancho del campo en píxeles",table:{type:{summary:"number"},defaultValue:{summary:"200"}}},eventChange:{action:"changed",description:"Manejador del evento de cambio",table:{type:{summary:"(e: React.ChangeEvent<HTMLInputElement>) => void"}}},eventFocus:{action:"focused",description:"Manejador del evento de foco",table:{type:{summary:"(e: React.FocusEvent<HTMLInputElement>) => void"}}},eventBlur:{action:"blurred",description:"Manejador del evento de pérdida de foco",table:{type:{summary:"(e: React.FocusEvent<HTMLInputElement>) => void"}}},eventKeyDown:{action:"keyDown",description:"Manejador del evento de tecla presionada",table:{type:{summary:"(e: React.KeyboardEvent<HTMLInputElement>) => void"}}}},args:{id:"default-textbox",value:"",placeholder:"Escribe algo...",size:200}},e={args:{id:"basic-textbox",value:"Texto de ejemplo"}},o={args:{id:"with-titles",titleTop:"Título superior",titleBottom:"Texto de ayuda o descripción",value:""}},t={args:{id:"disabled-textbox",value:"Campo deshabilitado",disabled:!0}},a={args:{id:"readonly-textbox",value:"Este texto no se puede modificar",readOnly:!0}},r={args:{id:"password-textbox",isPassword:!0,value:"micontraseña",placeholder:"Ingresa tu contraseña"}},s={args:{id:"restricted-textbox",value:"No se puede copiar ni pegar aquí",noCopy:!0,noPaste:!0}},n={args:{id:"custom-width-textbox",value:"Campo más ancho",size:300}},i={args:{id:"full-featured-textbox",titleTop:"Información personal",placeholder:"Escribe tu nombre completo",titleBottom:"Campo obligatorio",value:"Juan Pérez",required:!0,size:250}};var d,c,l,p,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    id: 'basic-textbox',
    value: 'Texto de ejemplo'
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source},description:{story:"TextBox básico con las propiedades mínimas requeridas",...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};var u,b,x,y,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'with-titles',
    titleTop: 'Título superior',
    titleBottom: 'Texto de ayuda o descripción',
    value: ''
  }
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source},description:{story:"TextBox con títulos superior e inferior",...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.description}}};var v,f,T,h,C;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    id: 'disabled-textbox',
    value: 'Campo deshabilitado',
    disabled: true
  }
}`,...(T=(f=t.parameters)==null?void 0:f.docs)==null?void 0:T.source},description:{story:"TextBox deshabilitado",...(C=(h=t.parameters)==null?void 0:h.docs)==null?void 0:C.description}}};var B,I,E,w,P;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    id: 'readonly-textbox',
    value: 'Este texto no se puede modificar',
    readOnly: true
  }
}`,...(E=(I=a.parameters)==null?void 0:I.docs)==null?void 0:E.source},description:{story:"TextBox de solo lectura",...(P=(w=a.parameters)==null?void 0:w.docs)==null?void 0:P.description}}};var z,M,R,S,V;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    id: 'password-textbox',
    isPassword: true,
    value: 'micontraseña',
    placeholder: 'Ingresa tu contraseña'
  }
}`,...(R=(M=r.parameters)==null?void 0:M.docs)==null?void 0:R.source},description:{story:"Campo de contraseña",...(V=(S=r.parameters)==null?void 0:S.docs)==null?void 0:V.description}}};var j,q,D,F,O;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: 'restricted-textbox',
    value: 'No se puede copiar ni pegar aquí',
    noCopy: true,
    noPaste: true
  }
}`,...(D=(q=s.parameters)==null?void 0:q.docs)==null?void 0:D.source},description:{story:"TextBox con restricciones de copiado y pegado",...(O=(F=s.parameters)==null?void 0:F.docs)==null?void 0:O.description}}};var W,H,L,J,K;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    id: 'custom-width-textbox',
    value: 'Campo más ancho',
    size: 300
  }
}`,...(L=(H=n.parameters)==null?void 0:H.docs)==null?void 0:L.source},description:{story:"TextBox con ancho personalizado",...(K=(J=n.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var N,_,k,A,U;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    id: 'full-featured-textbox',
    titleTop: 'Información personal',
    placeholder: 'Escribe tu nombre completo',
    titleBottom: 'Campo obligatorio',
    value: 'Juan Pérez',
    required: true,
    size: 250
  }
}`,...(k=(_=i.parameters)==null?void 0:_.docs)==null?void 0:k.source},description:{story:"TextBox con todas las propiedades",...(U=(A=i.parameters)==null?void 0:A.docs)==null?void 0:U.description}}};const $=["Default","WithTitles","Disabled","ReadOnly","Password","WithCopyPasteRestrictions","CustomWidth","FullFeatured"];export{n as CustomWidth,e as Default,t as Disabled,i as FullFeatured,r as Password,a as ReadOnly,s as WithCopyPasteRestrictions,o as WithTitles,$ as __namedExportsOrder,Z as default};
