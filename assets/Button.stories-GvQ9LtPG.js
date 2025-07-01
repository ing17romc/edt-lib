import{j as h}from"./jsx-runtime-D_zvdyIk.js";import{B as a,a as e,b as ae}from"./index-02CvJQn6.js";import"./index-D4lIrffr.js";import"./index-_oZgBBUR.js";const oe={title:"Components/Button",component:ae,tags:["autodocs"],argTypes:{variant:{control:{type:"select",options:Object.values(e)},description:"Variante visual del botón",table:{type:{summary:Object.values(e).join(" | ")},defaultValue:{summary:e.PRIMARY}}},size:{control:{type:"select",options:Object.values(a)},description:"Tamaño del botón",table:{type:{summary:Object.values(a).join(" | ")},defaultValue:{summary:a.MEDIUM}}},disabled:{control:"boolean",description:"Si el botón está deshabilitado",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},loading:{control:"boolean",description:"Si muestra un indicador de carga",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},fullWidth:{control:"boolean",description:"Si el botón ocupa todo el ancho disponible",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},type:{control:{type:"select",options:["button","submit","reset"]},description:"Tipo de botón HTML",table:{type:{summary:"button | submit | reset"},defaultValue:{summary:"button"}}},onClick:{action:"clicked",description:"Función que se ejecuta al hacer clic",table:{category:"Events"}}},args:{children:"Click me",variant:e.PRIMARY,size:a.MEDIUM,disabled:!1,loading:!1,fullWidth:!1}},r={args:{variant:e.PRIMARY}},t={args:{variant:e.SECONDARY,children:"Secondary Button"}},n={args:{variant:e.TERTIARY,children:"Tertiary Button"}},s={args:{variant:e.DANGER,children:"Danger Button"}},o={args:{variant:e.SUCCESS,children:"Success Button"}},i={args:{variant:e.WARNING,children:"Warning Button"}},c={args:{disabled:!0,children:"Disabled Button"}},u={args:{loading:!0,children:"Loading Button"}},l={args:{size:a.SMALL,children:"Small Button"}},d={args:{size:a.LARGE,children:"Large Button"}},m={parameters:{layout:"padded"},args:{fullWidth:!0,children:"Full Width Button"}},p={args:{children:h.jsxs(h.Fragment,{children:[h.jsx("span",{style:{marginRight:"8px"},children:"⭐"}),"Button with Icon"]})}},g={args:{variant:e.PRIMARY,size:a.LARGE,children:"Custom Button",style:{borderRadius:"20px",textTransform:"uppercase",letterSpacing:"1px"}}};var S,B,b;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: ButtonVariant.PRIMARY
  }
}`,...(b=(B=r.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var y,R,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: ButtonVariant.SECONDARY,
    children: 'Secondary Button'
  }
}`,...(v=(R=t.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var f,A,E;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: ButtonVariant.TERTIARY,
    children: 'Tertiary Button'
  }
}`,...(E=(A=n.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var L,I,W;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: ButtonVariant.DANGER,
    children: 'Danger Button'
  }
}`,...(W=(I=s.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var V,x,D;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: ButtonVariant.SUCCESS,
    children: 'Success Button'
  }
}`,...(D=(x=o.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var T,C,M;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: ButtonVariant.WARNING,
    children: 'Warning Button'
  }
}`,...(M=(C=i.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var z,j,Y;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled Button'
  }
}`,...(Y=(j=c.parameters)==null?void 0:j.docs)==null?void 0:Y.source}}};var G,N,P;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: 'Loading Button'
  }
}`,...(P=(N=u.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var O,F,U;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    size: ButtonSize.SMALL,
    children: 'Small Button'
  }
}`,...(U=(F=l.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var k,w,_;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: ButtonSize.LARGE,
    children: 'Large Button'
  }
}`,...(_=(w=d.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var q,H,J;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  args: {
    fullWidth: true,
    children: 'Full Width Button'
  }
}`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,X;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    children: <>
        <span style={{
        marginRight: '8px'
      }}>⭐</span>
        Button with Icon
      </>
  }
}`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const ie=["Primary","Secondary","Tertiary","Danger","Success","Warning","Disabled","Loading","Small","Large","FullWidth","WithIcon","CustomButton"];export{g as CustomButton,s as Danger,c as Disabled,m as FullWidth,d as Large,u as Loading,r as Primary,t as Secondary,l as Small,o as Success,n as Tertiary,i as Warning,p as WithIcon,ie as __namedExportsOrder,oe as default};
