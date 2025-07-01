import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as ar,R as sr}from"./index-D4lIrffr.js";import{c as q}from"./index-Bckx9Gcf.js";const tr="_selectorWrapper_1voud_51",lr="_selectorLabel_1voud_61",nr="_selectorContainer_1voud_70",ir="_selector_1voud_51",cr="_selectorIcon_1voud_93",dr="_helperText_1voud_166",pr="_requiredIndicator_1voud_176",ur="_selectorLoading_1voud_181",mr="_selectorLoadingSpinner_1voud_189",br="_spin_1voud_1",o={selectorWrapper:tr,"selectorWrapper--fullWidth":"_selectorWrapper--fullWidth_1voud_57",selectorLabel:lr,selectorContainer:nr,selector:ir,"selector--small":"_selector--small_1voud_88",selectorIcon:cr,"selector--medium":"_selector--medium_1voud_98","selector--large":"_selector--large_1voud_108","selector--primary":"_selector--primary_1voud_118","selector--secondary":"_selector--secondary_1voud_125","selector--error":"_selector--error_1voud_135","selector--fullWidth":"_selector--fullWidth_1voud_148",helperText:dr,"helperText--error":"_helperText--error_1voud_172",requiredIndicator:pr,selectorLoading:ur,selectorLoadingSpinner:mr,spin:br};var t=(r=>(r.PRIMARY="primary",r.SECONDARY="secondary",r.TERTIARY="tertiary",r.DANGER="danger",r.SUCCESS="success",r.WARNING="warning",r))(t||{}),c=(r=>(r.SMALL="small",r.MEDIUM="medium",r.LARGE="large",r))(c||{});const s=ar.forwardRef(({options:r=[],label:n,helperText:W,error:a=!1,errorMessage:R,variant:Fe=t.PRIMARY,size:$e=c.MEDIUM,fullWidth:L=!1,loading:d=!1,disabled:T=!1,className:Be,placeholder:V,onChange:j,value:E,defaultValue:He,...M},Je)=>{const[Ke,Qe]=sr.useState(He||""),I=E!==void 0,Xe=I?E:Ke,Ze=q(o.selector,o[`selector--${Fe}`],o[`selector--${$e}`],{[o["selector--error"]]:a,[o["selector--fullWidth"]]:L,[o["selector--disabled"]]:T||d},Be),er=q(o.selectorWrapper,{[o["selectorWrapper--fullWidth"]]:L}),rr=!!n,or=(W||a&&R)&&!d;return e.jsxs("div",{className:er,children:[rr&&e.jsxs("label",{className:o.selectorLabel,children:[n,M.required&&e.jsx("span",{className:o.requiredIndicator,children:"*"})]}),e.jsxs("div",{className:o.selectorContainer,children:[e.jsxs("select",{ref:Je,className:Ze,disabled:T||d,"aria-invalid":a,"aria-describedby":a&&R?"error-message":void 0,value:Xe,onChange:i=>{I||Qe(i.target.value),j==null||j(i)},...M,children:[V&&e.jsx("option",{value:"",disabled:!0,children:V}),r.map(i=>e.jsx("option",{value:i.value,disabled:i.disabled,children:i.label},i.value))]}),d&&e.jsx("div",{className:o.selectorLoading,children:e.jsx("div",{className:o.selectorLoadingSpinner})}),!d&&e.jsx("div",{className:o.selectorIcon,children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})})})]}),or&&e.jsx("div",{className:q(o.helperText,{[o["helperText--error"]]:a}),id:a?"error-message":void 0,children:a&&R?R:W})]})});s.displayName="Selector";s.__docgenInfo={description:`Componente Selector que representa un menú desplegable con múltiples opciones.

@component
@example
// Uso básico
const options = [
  { value: '1', label: 'Opción 1' },
  { value: '2', label: 'Opción 2' },
];

<Selector 
  options={options}
  label="Selecciona una opción"
  onChange={(e) => console.log(e.target.value)}
/>

@example
// Selector con estado de error
<Selector
  options={options}
  label="Selecciona una opción"
  error={true}
  errorMessage="Selecciona una opción válida"
/>`,methods:[],displayName:"Selector",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectorOption"}],raw:"SelectorOption[]"},description:"Opciones del selector",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Valor seleccionado actualmente"},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Valor por defecto del selector"},label:{required:!1,tsType:{name:"string"},description:"Etiqueta del selector"},helperText:{required:!1,tsType:{name:"string"},description:"Texto de ayuda o descripción"},error:{required:!1,tsType:{name:"boolean"},description:`Si es true, muestra un indicador de error
@default false`,defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Mensaje de error a mostrar cuando hay un error"},variant:{required:!1,tsType:{name:"SelectorVariant"},description:`Variante visual del selector
@default 'primary'`,defaultValue:{value:"SelectorVariant.PRIMARY",computed:!0}},size:{required:!1,tsType:{name:"SelectorSize"},description:`Tamaño del selector
@default 'medium'`,defaultValue:{value:"SelectorSize.MEDIUM",computed:!0}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Si es true, el selector ocupa todo el ancho disponible
@default false`,defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:`Si es true, el selector está en estado de carga
@default false`,defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Texto a mostrar cuando no hay opciones"},readOnly:{required:!1,tsType:{name:"boolean"},description:`Si es true, el selector es de solo lectura
@default false`},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const l=[{value:"1",label:"Opción 1"},{value:"2",label:"Opción 2"},{value:"3",label:"Opción 3",disabled:!0},{value:"4",label:"Opción 4"},{value:"5",label:"Opción 5"}],gr=[{label:"Grupo 1",options:[{value:"1",label:"Opción 1"},{value:"2",label:"Opción 2"}]},{label:"Grupo 2",options:[{value:"3",label:"Opción 3"},{value:"4",label:"Opción 4",disabled:!0}]}],vr=Array.from({length:20},(r,n)=>({value:`option-${n+1}`,label:`Opción ${n+1} - Este es un texto más largo para probar el desbordamiento`})),yr={title:"Components/Selector",component:s,tags:["autodocs"],argTypes:{variant:{control:{type:"select",options:Object.values(t)}},size:{control:{type:"select",options:Object.values(c)}},disabled:{control:"boolean"},loading:{control:"boolean"},fullWidth:{control:"boolean"},error:{control:"boolean"}},args:{options:l,label:"Selecciona una opción",placeholder:"Elige una opción",variant:t.PRIMARY,size:c.MEDIUM,disabled:!1,loading:!1,fullWidth:!1,error:!1}},p={},u={args:{label:void 0}},m={args:{helperText:"Selecciona una opción de la lista"}},b={args:{error:!0,errorMessage:"Debes seleccionar una opción"}},g={args:{disabled:!0}},v={args:{loading:!0}},f={args:{fullWidth:!0}},S={args:{options:[],label:"Opciones agrupadas"},render:r=>e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:500},children:r.label}),e.jsx("select",{style:{padding:"8px",borderRadius:"4px",border:"1px solid #ccc",minWidth:"200px"},children:gr.map((n,W)=>e.jsx("optgroup",{label:n.label,children:n.options.map(a=>e.jsx("option",{value:a.value,disabled:a.disabled,children:a.label},a.value.toString()))},W))})]})},x={args:{options:vr,label:"Muchas opciones"}},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(s,{options:l,label:"Selector pequeño",size:c.SMALL}),e.jsx(s,{options:l,label:"Selector mediano (por defecto)",size:c.MEDIUM}),e.jsx(s,{options:l,label:"Selector grande",size:c.LARGE})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(s,{options:l,label:"Variante primaria (por defecto)",variant:t.PRIMARY}),e.jsx(s,{options:l,label:"Variante secundaria",variant:t.SECONDARY}),e.jsx(s,{options:l,label:"Variante de peligro",variant:t.DANGER}),e.jsx(s,{options:l,label:"Variante de éxito",variant:t.SUCCESS}),e.jsx(s,{options:l,label:"Variante de advertencia",variant:t.WARNING})]})},_={args:{defaultValue:"2",label:"Con valor por defecto"}},O={args:{label:"Campo obligatorio",required:!0}};var A,D,N,k,C;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:"{}",...(N=(D=p.parameters)==null?void 0:D.docs)==null?void 0:N.source},description:{story:"Selector básico con las opciones por defecto.",...(C=(k=p.parameters)==null?void 0:k.docs)==null?void 0:C.description}}};var z,G,U,Y,w;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: undefined
  }
}`,...(U=(G=u.parameters)==null?void 0:G.docs)==null?void 0:U.source},description:{story:"Selector sin etiqueta.",...(w=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:w.description}}};var P,F,$,B,H;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    helperText: 'Selecciona una opción de la lista'
  }
}`,...($=(F=m.parameters)==null?void 0:F.docs)==null?void 0:$.source},description:{story:"Selector con texto de ayuda.",...(H=(B=m.parameters)==null?void 0:B.docs)==null?void 0:H.description}}};var J,K,Q,X,Z;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    error: true,
    errorMessage: 'Debes seleccionar una opción'
  }
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Selector con estado de error.",...(Z=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};var ee,re,oe,ae,se;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(oe=(re=g.parameters)==null?void 0:re.docs)==null?void 0:oe.source},description:{story:"Selector deshabilitado.",...(se=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:se.description}}};var te,le,ne,ie,ce;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(ne=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ne.source},description:{story:"Selector en estado de carga.",...(ce=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:ce.description}}};var de,pe,ue,me,be;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  }
}`,...(ue=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:ue.source},description:{story:"Selector que ocupa todo el ancho disponible.",...(be=(me=f.parameters)==null?void 0:me.docs)==null?void 0:be.description}}};var ge,ve,fe,Se,xe;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    options: [],
    // No usamos las opciones agrupadas aquí ya que se renderizan manualmente
    label: 'Opciones agrupadas'
  },
  render: args => {
    // Renderizamos manualmente el select con opciones agrupadas
    return <div>
        <label style={{
        display: 'block',
        marginBottom: '8px',
        fontWeight: 500
      }}>{args.label}</label>
        <select style={{
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        minWidth: '200px'
      }}>
          {mockGroupedOptions.map((group, index) => <optgroup key={index} label={group.label}>
              {group.options.map(option => <option key={option.value.toString()} value={option.value} disabled={option.disabled}>
                  {option.label}
                </option>)}
            </optgroup>)}
        </select>
      </div>;
  }
}`,...(fe=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:fe.source},description:{story:"Selector con opciones agrupadas.",...(xe=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:xe.description}}};var ye,he,_e,Oe,We;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    options: mockLongListOptions,
    label: 'Muchas opciones'
  }
}`,...(_e=(he=x.parameters)==null?void 0:he.docs)==null?void 0:_e.source},description:{story:"Selector con muchas opciones y scroll.",...(We=(Oe=x.parameters)==null?void 0:Oe.docs)==null?void 0:We.description}}};var Re,je,qe,Le,Te;y.parameters={...y.parameters,docs:{...(Re=y.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Selector options={mockOptions} label="Selector pequeño" size={SelectorSize.SMALL} />
      <Selector options={mockOptions} label="Selector mediano (por defecto)" size={SelectorSize.MEDIUM} />
      <Selector options={mockOptions} label="Selector grande" size={SelectorSize.LARGE} />
    </div>
}`,...(qe=(je=y.parameters)==null?void 0:je.docs)==null?void 0:qe.source},description:{story:"Selector con diferentes tamaños.",...(Te=(Le=y.parameters)==null?void 0:Le.docs)==null?void 0:Te.description}}};var Ve,Ee,Me,Ie,Ae;h.parameters={...h.parameters,docs:{...(Ve=h.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Me=(Ee=h.parameters)==null?void 0:Ee.docs)==null?void 0:Me.source},description:{story:"Selector con diferentes variantes.",...(Ae=(Ie=h.parameters)==null?void 0:Ie.docs)==null?void 0:Ae.description}}};var De,Ne,ke,Ce,ze;_.parameters={..._.parameters,docs:{...(De=_.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    defaultValue: '2',
    label: 'Con valor por defecto'
  }
}`,...(ke=(Ne=_.parameters)==null?void 0:Ne.docs)==null?void 0:ke.source},description:{story:"Selector con opción por defecto seleccionada.",...(ze=(Ce=_.parameters)==null?void 0:Ce.docs)==null?void 0:ze.description}}};var Ge,Ue,Ye,we,Pe;O.parameters={...O.parameters,docs:{...(Ge=O.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    label: 'Campo obligatorio',
    required: true
  }
}`,...(Ye=(Ue=O.parameters)==null?void 0:Ue.docs)==null?void 0:Ye.source},description:{story:"Selector requerido con indicador de campo obligatorio.",...(Pe=(we=O.parameters)==null?void 0:we.docs)==null?void 0:Pe.description}}};const hr=["Default","WithoutLabel","WithHelperText","ErrorState","Disabled","Loading","FullWidth","WithOptionGroups","WithManyOptions","Sizes","Variants","WithDefaultValue","RequiredField"];export{p as Default,g as Disabled,b as ErrorState,f as FullWidth,v as Loading,O as RequiredField,y as Sizes,h as Variants,_ as WithDefaultValue,m as WithHelperText,x as WithManyOptions,S as WithOptionGroups,u as WithoutLabel,hr as __namedExportsOrder,yr as default};
