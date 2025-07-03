import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as l,a as o,b as a}from"./index-BD40nLYZ.js";import"./index-CgfFrydU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B0pXE9zJ.js";const s=[{value:"1",label:"Opción 1"},{value:"2",label:"Opción 2"},{value:"3",label:"Opción 3 (Deshabilitada)",disabled:!0},{value:"4",label:"Opción 4"}],be=[{label:"Grupo 1",options:[{value:"1-1",label:"Opción 1.1"},{value:"1-2",label:"Opción 1.2"}]},{label:"Grupo 2",options:[{value:"2-1",label:"Opción 2.1"},{value:"2-2",label:"Opción 2.2 (Deshabilitada)",disabled:!0}]}],Se=Array.from({length:50},(O,c)=>({value:`${c+1}`,label:`Opción ${c+1}`})),r={options:s,label:"Selecciona una opción",placeholder:"Elige una opción",variant:o.PRIMARY,size:l.MEDIUM,disabled:!1,loading:!1,fullWidth:!1,error:!1},he={...r,label:void 0},xe={...r,helperText:"Selecciona una opción de la lista"},fe={...r,error:!0,errorMessage:"Debes seleccionar una opción"},ve={...r,disabled:!0},Oe={...r,loading:!0},Ae={...r,fullWidth:!0},ye={...r,options:Se,label:"Muchas opciones"},me=()=>e.jsxs("div",{children:[e.jsx("label",{htmlFor:"grouped-selector",style:{display:"block",marginBottom:"8px",fontWeight:500},children:"Opciones agrupadas"}),e.jsx("select",{id:"grouped-selector",style:{padding:"8px",borderRadius:"4px",border:"1px solid #ccc",minWidth:"200px"},children:be.map((O,c)=>e.jsx("optgroup",{label:O.label,children:O.options.map(p=>e.jsx("option",{value:p.value,disabled:p.disabled,children:p.label},p.value.toString()))},c))})]}),ge=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(a,{...r,label:"Selector pequeño",size:l.SMALL}),e.jsx(a,{...r,label:"Selector mediano (por defecto)",size:l.MEDIUM}),e.jsx(a,{...r,label:"Selector grande",size:l.LARGE})]});me.__docgenInfo={description:"",methods:[],displayName:"OptionGroupsComponent"};ge.__docgenInfo={description:"",methods:[],displayName:"SizesComponent"};const Re={title:"Components/Selector",component:a,tags:["autodocs"],argTypes:{variant:{control:{type:"select",options:Object.values(o)}},size:{control:{type:"select",options:Object.values(l)}},disabled:{control:"boolean"},loading:{control:"boolean"},fullWidth:{control:"boolean"},error:{control:"boolean"}}},d={args:r},u={args:he},m={args:xe},g={args:fe},b={args:ve},S={args:Oe},h={args:Ae},x={args:ye},f={render:()=>e.jsx(me,{})},v={render:()=>e.jsx(ge,{})},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(a,{options:s,label:"Variante primaria (por defecto)",variant:o.PRIMARY}),e.jsx(a,{options:s,label:"Variante secundaria",variant:o.SECONDARY}),e.jsx(a,{options:s,label:"Variante de peligro",variant:o.DANGER}),e.jsx(a,{options:s,label:"Variante de éxito",variant:o.SUCCESS}),e.jsx(a,{options:s,label:"Variante de advertencia",variant:o.WARNING})]})},i={args:{defaultValue:"2",label:"Con valor por defecto"}},n={args:{label:"Campo obligatorio",required:!0}};var A,y,V;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(V=(y=d.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var j,W,D;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: withoutLabelArgs
}`,...(D=(W=u.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var C,R,E;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: withHelperTextArgs
}`,...(E=(R=m.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var M,G,z;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: errorStateArgs
}`,...(z=(G=g.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var L,N,k;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: disabledArgs
}`,...(k=(N=b.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var I,_,q;S.parameters={...S.parameters,docs:{...(I=S.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: loadingArgs
}`,...(q=(_=S.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var w,T,F;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: fullWidthArgs
}`,...(F=(T=h.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var Y,H,U;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: withManyOptionsArgs
}`,...(U=(H=x.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var P,$,B;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <OptionGroupsComponent />
}`,...(B=($=f.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var J,K,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <SizesComponent />
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,ee,re,ae;t.parameters={...t.parameters,docs:{...(X=t.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Selector options={mockOptions} label="Variante primaria (por defecto)" variant={SelectorVariant.PRIMARY} />
      <Selector options={mockOptions} label="Variante secundaria" variant={SelectorVariant.SECONDARY} />
      <Selector options={mockOptions} label="Variante de peligro" variant={SelectorVariant.DANGER} />
      <Selector options={mockOptions} label="Variante de éxito" variant={SelectorVariant.SUCCESS} />
      <Selector options={mockOptions} label="Variante de advertencia" variant={SelectorVariant.WARNING} />
    </div>
}`,...(ee=(Z=t.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Selector con diferentes variantes.",...(ae=(re=t.parameters)==null?void 0:re.docs)==null?void 0:ae.description}}};var oe,se,te,ie,ne;i.parameters={...i.parameters,docs:{...(oe=i.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    defaultValue: '2',
    label: 'Con valor por defecto'
  }
}`,...(te=(se=i.parameters)==null?void 0:se.docs)==null?void 0:te.source},description:{story:"Selector con opción por defecto seleccionada.",...(ne=(ie=i.parameters)==null?void 0:ie.docs)==null?void 0:ne.description}}};var le,ce,pe,de,ue;n.parameters={...n.parameters,docs:{...(le=n.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    label: 'Campo obligatorio',
    required: true
  }
}`,...(pe=(ce=n.parameters)==null?void 0:ce.docs)==null?void 0:pe.source},description:{story:"Selector requerido con indicador de campo obligatorio.",...(ue=(de=n.parameters)==null?void 0:de.docs)==null?void 0:ue.description}}};const Ee=["Default","WithoutLabel","WithHelperText","ErrorState","Disabled","Loading","FullWidth","WithManyOptions","WithOptionGroups","Sizes","Variants","WithDefaultValue","RequiredField"];export{d as Default,b as Disabled,g as ErrorState,h as FullWidth,S as Loading,n as RequiredField,v as Sizes,t as Variants,i as WithDefaultValue,m as WithHelperText,x as WithManyOptions,f as WithOptionGroups,u as WithoutLabel,Ee as __namedExportsOrder,Re as default};
