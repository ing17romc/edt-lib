import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as X}from"./index-D4lIrffr.js";import{c as ne}from"./classNames-CqjykrQM.js";import{C as h}from"./types-D2sN4igU.js";const ie="_radioButton_16ro9_1",de="_radioButton__input_16ro9_10",ce="_radioButton__checkmark_16ro9_17",le="_radioButton__label_16ro9_41",n={radioButton:ie,radioButton__input:de,radioButton__checkmark:ce,radioButton__label:le,"radioButton--small":"_radioButton--small_16ro9_69","radioButton--large":"_radioButton--large_16ro9_83"},o=({value:a,label:s,checked:t=!1,disabled:i=!1,onChange:C,className:ae="",name:oe="radio-group",size:S=h.MEDIUM,...re})=>{const se=()=>{!i&&C&&C(a)},te=ne(n.radioButton,{[n[`radioButton--${S}`]]:S},ae);return e.jsxs("label",{className:te,...re,children:[e.jsx("input",{type:"radio",className:n.radioButton__input,checked:t,disabled:i,onChange:se,name:oe,value:a}),e.jsx("span",{className:n.radioButton__checkmark}),s&&e.jsx("span",{className:n.radioButton__label,children:s})]})};o.__docgenInfo={description:"Componente RadioButton que permite seleccionar una opción de un conjunto de opciones mutuamente excluyentes.",methods:[],displayName:"RadioButton",props:{value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Valor único que identifica este botón de radio"},label:{required:!0,tsType:{name:"string"},description:"Texto que se muestra junto al botón de radio"},checked:{required:!1,tsType:{name:"boolean"},description:"Indica si el botón de radio está seleccionado",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Indica si el botón de radio está deshabilitado",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:"Función que se ejecuta cuando cambia el estado del botón de radio"},className:{required:!1,tsType:{name:"string"},description:"Clase CSS opcional para personalizar el estilo",defaultValue:{value:"''",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"Nombre del grupo al que pertenece el botón de radio",defaultValue:{value:"'radio-group'",computed:!1}},size:{required:!1,tsType:{name:"ComponentSize"},description:`Tamaño del botón de radio
@default 'medium'`,defaultValue:{value:"ComponentSize.MEDIUM",computed:!0}}}};const r={value:"option1",label:"Opción 1",checked:!1,disabled:!1,name:"radio-group",size:h.MEDIUM},ue={...r,checked:!0},pe={...r,disabled:!0},me={...r,checked:!0,disabled:!0},ge={...r,className:"custom-radio-class"},Y={...r,size:h.SMALL,label:"Opción pequeña"},Z={...r,size:h.LARGE,label:"Opción grande"},ee=()=>{const[a,s]=X.useState("option1"),t=i=>{s(String(i))};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(o,{value:"option1",label:"Opción 1",checked:a==="option1",onChange:t,name:"example-group"}),e.jsx(o,{value:"option2",label:"Opción 2",checked:a==="option2",onChange:t,name:"example-group"}),e.jsx(o,{value:"option3",label:"Opción 3 (deshabilitada)",checked:a==="option3",onChange:t,name:"example-group",disabled:!0})]})};ee.__docgenInfo={description:"",methods:[],displayName:"RadioGroupComponent"};const Se={title:"Components/RadioButton",component:o,tags:["autodocs"],argTypes:{value:{control:"text",description:"Valor único que identifica este botón de radio"},label:{control:"text",description:"Texto que se muestra junto al botón de radio"},checked:{control:"boolean",description:"Indica si el botón de radio está seleccionado"},disabled:{control:"boolean",description:"Indica si el botón de radio está deshabilitado"},name:{control:"text",description:"Nombre del grupo al que pertenece el botón de radio"},className:{control:"text",description:"Clase CSS opcional para personalizar el estilo"},onChange:{action:"changed",description:"Función que se ejecuta cuando cambia el estado del botón de radio"}}},d={args:r},c={args:ue},l={args:pe},u={args:me},p={args:ge,parameters:{docs:{description:{story:"RadioButton con una clase CSS personalizada aplicada."}}}},m={args:Y,parameters:{docs:{description:{story:"RadioButton con tamaño pequeño (SMALL)."}}}},g={args:Z,parameters:{docs:{description:{story:"RadioButton con tamaño grande (LARGE)."}}}},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(o,{...Y,label:"Opción pequeña (SMALL)"}),e.jsx(o,{...r,label:"Opción mediana (MEDIUM)"}),e.jsx(o,{...Z,label:"Opción grande (LARGE)"})]}),parameters:{docs:{description:{story:"Ejemplo que muestra las diferentes variantes de tamaño disponibles para el RadioButton."}}}},f={render:()=>e.jsx(ee,{})},be=a=>{const[s,t]=X.useState(a.checked||!1);return e.jsx(o,{...a,checked:s,onChange:()=>t(!s)})},_={render:a=>e.jsx(be,{...a}),args:r};var x,B,y;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(y=(B=d.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var k,R,j;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: checkedArgs
}`,...(j=(R=c.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var q,z,v;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: disabledArgs
}`,...(v=(z=l.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};var A,L,M;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: disabledCheckedArgs
}`,...(M=(L=u.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var D,E,O;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: withCustomClass,
  parameters: {
    docs: {
      description: {
        story: 'RadioButton con una clase CSS personalizada aplicada.'
      }
    }
  }
}`,...(O=(E=p.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var N,T,I;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: smallSize,
  parameters: {
    docs: {
      description: {
        story: 'RadioButton con tamaño pequeño (SMALL).'
      }
    }
  }
}`,...(I=(T=m.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var V,G,w;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: largeSize,
  parameters: {
    docs: {
      description: {
        story: 'RadioButton con tamaño grande (LARGE).'
      }
    }
  }
}`,...(w=(G=g.parameters)==null?void 0:G.docs)==null?void 0:w.source}}};var U,F,W;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(W=(F=b.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var $,H,J;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <RadioGroupComponent />
}`,...(J=(H=f.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,P,Q;_.parameters={..._.parameters,docs:{...(K=_.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <ControlledComponent {...args} />,
  args: defaultArgs
}`,...(Q=(P=_.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};const xe=["Default","Checked","Disabled","DisabledChecked","WithCustomClass","SmallSize","LargeSize","SizeVariants","Group","Controlled"];export{c as Checked,_ as Controlled,d as Default,l as Disabled,u as DisabledChecked,f as Group,g as LargeSize,b as SizeVariants,m as SmallSize,p as WithCustomClass,xe as __namedExportsOrder,Se as default};
