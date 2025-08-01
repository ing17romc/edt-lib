import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as X}from"./index-D4lIrffr.js";import{c as ne}from"./classNames-CqjykrQM.js";import{C as n}from"./types-D2sN4igU.js";const ie="_radioButton_16ro9_1",de="_radioButton__input_16ro9_10",ce="_radioButton__checkmark_16ro9_17",le="_radioButton__label_16ro9_41",i={radioButton:ie,radioButton__input:de,radioButton__checkmark:ce,radioButton__label:le,"radioButton--small":"_radioButton--small_16ro9_69","radioButton--large":"_radioButton--large_16ro9_83"},o=({value:a,label:s,checked:t=!1,disabled:d=!1,onChange:C,className:ae="",name:oe="radio-group",size:S=n.MEDIUM,...re})=>{const se=()=>{!d&&C&&C(a)},te=ne(i.radioButton,{[i[`radioButton--${S}`]]:S},ae);return e.jsxs("label",{className:te,...re,children:[e.jsx("input",{type:"radio",className:i.radioButton__input,checked:t,disabled:d,onChange:se,name:oe,value:a}),e.jsx("span",{className:i.radioButton__checkmark}),s&&e.jsx("span",{className:i.radioButton__label,children:s})]})};o.__docgenInfo={description:"Componente RadioButton que permite seleccionar una opción de un conjunto de opciones mutuamente excluyentes.",methods:[],displayName:"RadioButton",props:{value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Valor único que identifica este botón de radio"},label:{required:!0,tsType:{name:"string"},description:"Texto que se muestra junto al botón de radio"},checked:{required:!1,tsType:{name:"boolean"},description:"Indica si el botón de radio está seleccionado",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Indica si el botón de radio está deshabilitado",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:"Función que se ejecuta cuando cambia el estado del botón de radio"},className:{required:!1,tsType:{name:"string"},description:"Clase CSS opcional para personalizar el estilo",defaultValue:{value:"''",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"Nombre del grupo al que pertenece el botón de radio",defaultValue:{value:"'radio-group'",computed:!1}},size:{required:!1,tsType:{name:"ComponentSize"},description:`Tamaño del botón de radio
@default 'medium'`,defaultValue:{value:"ComponentSize.MEDIUM",computed:!0}}}};const r={value:"option1",label:"Opción 1",checked:!1,disabled:!1,name:"radio-group",size:n.MEDIUM},ue={...r,checked:!0},pe={...r,disabled:!0},me={...r,checked:!0,disabled:!0},ge={...r,className:"custom-radio-class"},Y={...r,size:n.SMALL,label:"Opción pequeña"},Z={...r,size:n.LARGE,label:"Opción grande"},ee=()=>{const[a,s]=X.useState("option1"),t=d=>{s(String(d))};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(o,{value:"option1",label:"Opción 1",checked:a==="option1",onChange:t,name:"example-group"}),e.jsx(o,{value:"option2",label:"Opción 2",checked:a==="option2",onChange:t,name:"example-group"}),e.jsx(o,{value:"option3",label:"Opción 3 (deshabilitada)",checked:a==="option3",onChange:t,name:"example-group",disabled:!0})]})};ee.__docgenInfo={description:"",methods:[],displayName:"RadioGroupComponent"};const Se={title:"Components/RadioButton",component:o,tags:["autodocs"],argTypes:{value:{control:"text",description:"Valor único que identifica este botón de radio"},label:{control:"text",description:"Texto que se muestra junto al botón de radio"},checked:{control:"boolean",description:"Indica si el botón de radio está seleccionado"},disabled:{control:"boolean",description:"Indica si el botón de radio está deshabilitado"},name:{control:"text",description:"Nombre del grupo al que pertenece el botón de radio"},className:{control:"text",description:"Clase CSS opcional para personalizar el estilo"},onChange:{action:"changed",description:"Función que se ejecuta cuando cambia el estado del botón de radio"},size:{control:"select",options:Object.values(n),description:"Tamaño del botón de radio",table:{type:{summary:Object.values(n).join(" | ")},defaultValue:{summary:n.MEDIUM}}}}},c={args:r},l={args:ue},u={args:pe},p={args:me},m={args:ge,parameters:{docs:{description:{story:"RadioButton con una clase CSS personalizada aplicada."}}}},g={args:Y,parameters:{docs:{description:{story:"RadioButton con tamaño pequeño (SMALL)."}}}},b={args:Z,parameters:{docs:{description:{story:"RadioButton con tamaño grande (LARGE)."}}}},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(o,{...Y,label:"Opción pequeña (SMALL)"}),e.jsx(o,{...r,label:"Opción mediana (MEDIUM)"}),e.jsx(o,{...Z,label:"Opción grande (LARGE)"})]}),parameters:{docs:{description:{story:"Ejemplo que muestra las diferentes variantes de tamaño disponibles para el RadioButton."}}}},_={render:()=>e.jsx(ee,{})},be=a=>{const[s,t]=X.useState(a.checked||!1);return e.jsx(o,{...a,checked:s,onChange:()=>t(!s)})},h={render:a=>e.jsx(be,{...a}),args:r};var x,B,y;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(y=(B=c.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var j,k,R;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: checkedArgs
}`,...(R=(k=l.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var q,z,v;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: disabledArgs
}`,...(v=(z=u.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};var A,L,M;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: disabledCheckedArgs
}`,...(M=(L=p.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var D,E,O;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: withCustomClass,
  parameters: {
    docs: {
      description: {
        story: 'RadioButton con una clase CSS personalizada aplicada.'
      }
    }
  }
}`,...(O=(E=m.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var T,I,N;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: smallSize,
  parameters: {
    docs: {
      description: {
        story: 'RadioButton con tamaño pequeño (SMALL).'
      }
    }
  }
}`,...(N=(I=g.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var V,G,U;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: largeSize,
  parameters: {
    docs: {
      description: {
        story: 'RadioButton con tamaño grande (LARGE).'
      }
    }
  }
}`,...(U=(G=b.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var w,F,W;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <RadioButton {...smallSize} label="Opción pequeña (SMALL)" />
      <RadioButton {...defaultArgs} label="Opción mediana (MEDIUM)" />
      <RadioButton {...largeSize} label="Opción grande (LARGE)" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo que muestra las diferentes variantes de tamaño disponibles para el RadioButton.'
      }
    }
  }
}`,...(W=(F=f.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var $,H,J;_.parameters={..._.parameters,docs:{...($=_.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <RadioGroupComponent />
}`,...(J=(H=_.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,P,Q;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <ControlledComponent {...args} />,
  args: defaultArgs
}`,...(Q=(P=h.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};const xe=["Default","Checked","Disabled","DisabledChecked","WithCustomClass","SmallSize","LargeSize","SizeVariants","Group","Controlled"];export{l as Checked,h as Controlled,c as Default,u as Disabled,p as DisabledChecked,_ as Group,b as LargeSize,f as SizeVariants,g as SmallSize,m as WithCustomClass,xe as __namedExportsOrder,Se as default};
