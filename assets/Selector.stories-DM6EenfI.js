import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as o,a}from"./index-CILFnKpG.js";import{C as s}from"./types-D2sN4igU.js";import"./index-D4lIrffr.js";import"./classNames-CqjykrQM.js";const t=[{value:"1",label:"Opción 1"},{value:"2",label:"Opción 2"},{value:"3",label:"Opción 3 (Deshabilitada)",disabled:!0},{value:"4",label:"Opción 4"}],be=[{label:"Grupo 1",options:[{value:"1-1",label:"Opción 1.1"},{value:"1-2",label:"Opción 1.2"}]},{label:"Grupo 2",options:[{value:"2-1",label:"Opción 2.1"},{value:"2-2",label:"Opción 2.2 (Deshabilitada)",disabled:!0}]}],Se=Array.from({length:50},(O,c)=>({value:`${c+1}`,label:`Opción ${c+1}`})),r={options:t,label:"Selecciona una opción",placeholder:"Elige una opción",variant:o.PRIMARY,size:s.MEDIUM,disabled:!1,loading:!1,fullWidth:!1,error:!1},he={...r,label:void 0},fe={...r,helperText:"Selecciona una opción de la lista"},xe={...r,error:!0,errorMessage:"Debes seleccionar una opción"},ve={...r,disabled:!0},Oe={...r,loading:!0},Ae={...r,fullWidth:!0},ye={...r,options:Se,label:"Muchas opciones"},me=()=>e.jsxs("div",{children:[e.jsx("label",{htmlFor:"grouped-selector",style:{display:"block",marginBottom:"8px",fontWeight:500},children:"Opciones agrupadas"}),e.jsx("select",{id:"grouped-selector",style:{padding:"8px",borderRadius:"4px",border:"1px solid #ccc",minWidth:"200px"},children:be.map((O,c)=>e.jsx("optgroup",{label:O.label,children:O.options.map(p=>e.jsx("option",{value:p.value,disabled:p.disabled,children:p.label},p.value.toString()))},c))})]}),ge=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(a,{...r,label:"Selector pequeño",size:s.SMALL}),e.jsx(a,{...r,label:"Selector mediano (por defecto)",size:s.MEDIUM}),e.jsx(a,{...r,label:"Selector grande",size:s.LARGE})]});me.__docgenInfo={description:"",methods:[],displayName:"OptionGroupsComponent"};ge.__docgenInfo={description:"",methods:[],displayName:"SizesComponent"};const Re={title:"Components/Selector",component:a,tags:["autodocs"],argTypes:{variant:{control:{type:"select",options:Object.values(o)}},size:{control:"select",options:Object.values(s),description:"Tamaño",table:{type:{summary:Object.values(s).join(" | ")},defaultValue:{summary:s.MEDIUM}}},disabled:{control:"boolean"},loading:{control:"boolean"},fullWidth:{control:"boolean"},error:{control:"boolean"}}},d={args:r},u={args:he},m={args:fe},g={args:xe},b={args:ve},S={args:Oe},h={args:Ae},f={args:ye},x={render:()=>e.jsx(me,{})},v={render:()=>e.jsx(ge,{})},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(a,{options:t,label:"Variante primaria (por defecto)",variant:o.PRIMARY}),e.jsx(a,{options:t,label:"Variante secundaria",variant:o.SECONDARY}),e.jsx(a,{options:t,label:"Variante de peligro",variant:o.DANGER}),e.jsx(a,{options:t,label:"Variante de éxito",variant:o.SUCCESS}),e.jsx(a,{options:t,label:"Variante de advertencia",variant:o.WARNING})]})},n={args:{defaultValue:"2",label:"Con valor por defecto"}},l={args:{label:"Campo obligatorio",required:!0}};var A,y,j;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(j=(y=d.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var V,W,C;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: withoutLabelArgs
}`,...(C=(W=u.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var D,R,M;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: withHelperTextArgs
}`,...(M=(R=m.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var E,G,z;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: errorStateArgs
}`,...(z=(G=g.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var L,I,N;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: disabledArgs
}`,...(N=(I=b.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var k,T,_;S.parameters={...S.parameters,docs:{...(k=S.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: loadingArgs
}`,...(_=(T=S.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var q,w,F;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: fullWidthArgs
}`,...(F=(w=h.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var U,Y,H;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: withManyOptionsArgs
}`,...(H=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};var P,$,B;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <OptionGroupsComponent />
}`,...(B=($=x.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var J,K,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <SizesComponent />
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,ee,re,ae;i.parameters={...i.parameters,docs:{...(X=i.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Selector con diferentes variantes.",...(ae=(re=i.parameters)==null?void 0:re.docs)==null?void 0:ae.description}}};var oe,se,te,ie,ne;n.parameters={...n.parameters,docs:{...(oe=n.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    defaultValue: '2',
    label: 'Con valor por defecto'
  }
}`,...(te=(se=n.parameters)==null?void 0:se.docs)==null?void 0:te.source},description:{story:"Selector con opción por defecto seleccionada.",...(ne=(ie=n.parameters)==null?void 0:ie.docs)==null?void 0:ne.description}}};var le,ce,pe,de,ue;l.parameters={...l.parameters,docs:{...(le=l.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    label: 'Campo obligatorio',
    required: true
  }
}`,...(pe=(ce=l.parameters)==null?void 0:ce.docs)==null?void 0:pe.source},description:{story:"Selector requerido con indicador de campo obligatorio.",...(ue=(de=l.parameters)==null?void 0:de.docs)==null?void 0:ue.description}}};const Me=["Default","WithoutLabel","WithHelperText","ErrorState","Disabled","Loading","FullWidth","WithManyOptions","WithOptionGroups","Sizes","Variants","WithDefaultValue","RequiredField"];export{d as Default,b as Disabled,g as ErrorState,h as FullWidth,S as Loading,l as RequiredField,v as Sizes,i as Variants,n as WithDefaultValue,m as WithHelperText,f as WithManyOptions,x as WithOptionGroups,u as WithoutLabel,Me as __namedExportsOrder,Re as default};
