import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as fe}from"./index-D4lIrffr.js";import{c as he}from"./index-Bckx9Gcf.js";const Se="_button_ag2n7_51",Re="_spin_ag2n7_1",r={button:Se,"button--small":"_button--small_ag2n7_78","button--medium":"_button--medium_ag2n7_83","button--large":"_button--large_ag2n7_88","button--primary":"_button--primary_ag2n7_93","button--secondary":"_button--secondary_ag2n7_103","button--tertiary":"_button--tertiary_ag2n7_114","button--danger":"_button--danger_ag2n7_124","button--success":"_button--success_ag2n7_134","button--warning":"_button--warning_ag2n7_144","button--fullWidth":"_button--fullWidth_ag2n7_154","button--loading":"_button--loading_ag2n7_158",spin:Re};var a=(e=>(e.PRIMARY="primary",e.SECONDARY="secondary",e.TERTIARY="tertiary",e.DANGER="danger",e.SUCCESS="success",e.WARNING="warning",e))(a||{}),t=(e=>(e.SMALL="small",e.MEDIUM="medium",e.LARGE="large",e))(t||{});const R=fe.forwardRef(({children:e,variant:ue=a.PRIMARY,size:le=t.MEDIUM,type:ce="button",disabled:v=!1,loading:n=!1,fullWidth:de=!1,className:me,onClick:S,...pe},ge)=>{const be=he(r.button,r[`button--${ue}`],r[`button--${le}`],{[r["button--loading"]]:n,[r["button--fullWidth"]]:de},me),ye=B=>{if(n||v){B.preventDefault();return}S==null||S(B)};return s.jsxs("button",{ref:ge,type:ce,className:be,disabled:v||n,onClick:ye,"aria-busy":n,...pe,children:[n&&s.jsx("span",{className:"sr-only","aria-live":"polite",children:"Cargando..."}),e]})});R.displayName="Button";R.__docgenInfo={description:`Componente Button que representa un botón interactivo con múltiples variantes y tamaños.

@component
@example
// Uso básico
<Button variant="primary" size="medium" onClick={() => console.log('Clicked!')}>
  Hacer clic
</Button>

@example
// Botón con estado de carga
<Button variant="primary" loading={isLoading}>
  {isLoading ? 'Cargando...' : 'Enviar'}
</Button>`,methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Contenido del botón (texto o elementos React)"},variant:{required:!1,tsType:{name:"ButtonVariant"},description:`Variante visual del botón
@default 'primary'`,defaultValue:{value:"ButtonVariant.PRIMARY",computed:!0}},size:{required:!1,tsType:{name:"ButtonSize"},description:`Tamaño del botón
@default 'medium'`,defaultValue:{value:"ButtonSize.MEDIUM",computed:!0}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Si es true, el botón ocupa todo el ancho disponible
@default false`,defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:`Si es true, muestra un indicador de carga
@default false`,defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:`Tipo de botón HTML
@default 'button'`,defaultValue:{value:"'button'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Si es true, el botón está deshabilitado
@default false`,defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Clase CSS adicional para el botón"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Función que se ejecuta al hacer clic en el botón"}},composes:["Omit"]};const Ae={title:"Components/Button",component:R,tags:["autodocs"],argTypes:{variant:{control:{type:"select",options:Object.values(a)},description:"Variante visual del botón",table:{type:{summary:Object.values(a).join(" | ")},defaultValue:{summary:a.PRIMARY}}},size:{control:{type:"select",options:Object.values(t)},description:"Tamaño del botón",table:{type:{summary:Object.values(t).join(" | ")},defaultValue:{summary:t.MEDIUM}}},disabled:{control:"boolean",description:"Si el botón está deshabilitado",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},loading:{control:"boolean",description:"Si muestra un indicador de carga",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},fullWidth:{control:"boolean",description:"Si el botón ocupa todo el ancho disponible",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},type:{control:{type:"select",options:["button","submit","reset"]},description:"Tipo de botón HTML",table:{type:{summary:"button | submit | reset"},defaultValue:{summary:"button"}}},onClick:{action:"clicked",description:"Función que se ejecuta al hacer clic",table:{category:"Events"}}},args:{children:"Click me",variant:a.PRIMARY,size:t.MEDIUM,disabled:!1,loading:!1,fullWidth:!1}},o={args:{variant:a.PRIMARY}},i={args:{variant:a.SECONDARY,children:"Secondary Button"}},u={args:{variant:a.TERTIARY,children:"Tertiary Button"}},l={args:{variant:a.DANGER,children:"Danger Button"}},c={args:{variant:a.SUCCESS,children:"Success Button"}},d={args:{variant:a.WARNING,children:"Warning Button"}},m={args:{disabled:!0,children:"Disabled Button"}},p={args:{loading:!0,children:"Loading Button"}},g={args:{size:t.SMALL,children:"Small Button"}},b={args:{size:t.LARGE,children:"Large Button"}},y={parameters:{layout:"padded"},args:{fullWidth:!0,children:"Full Width Button"}},f={args:{children:s.jsxs(s.Fragment,{children:[s.jsx("span",{style:{marginRight:"8px"},children:"⭐"}),"Button with Icon"]})}},h={args:{variant:a.PRIMARY,size:t.LARGE,children:"Custom Button",style:{borderRadius:"20px",textTransform:"uppercase",letterSpacing:"1px"}}};var _,A,T;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: ButtonVariant.PRIMARY
  }
}`,...(T=(A=o.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var E,I,C;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: ButtonVariant.SECONDARY,
    children: 'Secondary Button'
  }
}`,...(C=(I=i.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var M,L,W;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: ButtonVariant.TERTIARY,
    children: 'Tertiary Button'
  }
}`,...(W=(L=u.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var x,D,N;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: ButtonVariant.DANGER,
    children: 'Danger Button'
  }
}`,...(N=(D=l.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var V,Y,j;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: ButtonVariant.SUCCESS,
    children: 'Success Button'
  }
}`,...(j=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var z,q,G;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: ButtonVariant.WARNING,
    children: 'Warning Button'
  }
}`,...(G=(q=d.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var P,O,U;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled Button'
  }
}`,...(U=(O=m.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var w,F,k;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: 'Loading Button'
  }
}`,...(k=(F=p.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var H,$,J;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    size: ButtonSize.SMALL,
    children: 'Small Button'
  }
}`,...(J=($=g.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var K,Q,X;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    size: ButtonSize.LARGE,
    children: 'Large Button'
  }
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ae;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  args: {
    fullWidth: true,
    children: 'Full Width Button'
  }
}`,...(ae=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,re;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    children: <>
        <span style={{
        marginRight: '8px'
      }}>⭐</span>
        Button with Icon
      </>
  }
}`,...(re=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var se,oe,ie;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    variant: ButtonVariant.PRIMARY,
    size: ButtonSize.LARGE,
    children: 'Custom Button',
    style: {
      borderRadius: '20px',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    }
  }
}`,...(ie=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};const Te=["Primary","Secondary","Tertiary","Danger","Success","Warning","Disabled","Loading","Small","Large","FullWidth","WithIcon","CustomButton"];export{h as CustomButton,l as Danger,m as Disabled,y as FullWidth,b as Large,p as Loading,o as Primary,i as Secondary,g as Small,c as Success,u as Tertiary,d as Warning,f as WithIcon,Te as __namedExportsOrder,Ae as default};
