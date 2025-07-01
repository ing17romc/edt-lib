import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as v,a,b as o}from"./index-CCB7lOtn.js";import"./index-D4lIrffr.js";import"./index-_oZgBBUR.js";const r=[{value:"1",label:"Opción 1"},{value:"2",label:"Opción 2"},{value:"3",label:"Opción 3",disabled:!0},{value:"4",label:"Opción 4"},{value:"5",label:"Opción 5"}],Le=[{label:"Grupo 1",options:[{value:"1",label:"Opción 1"},{value:"2",label:"Opción 2"}]},{label:"Grupo 2",options:[{value:"3",label:"Opción 3"},{value:"4",label:"Opción 4",disabled:!0}]}],Ge=Array.from({length:20},(y,s)=>({value:`option-${s+1}`,label:`Opción ${s+1} - Este es un texto más largo para probar el desbordamiento`})),Te={title:"Components/Selector",component:o,tags:["autodocs"],argTypes:{variant:{control:{type:"select",options:Object.values(a)}},size:{control:{type:"select",options:Object.values(v)}},disabled:{control:"boolean"},loading:{control:"boolean"},fullWidth:{control:"boolean"},error:{control:"boolean"}},args:{options:r,label:"Selecciona una opción",placeholder:"Elige una opción",variant:a.PRIMARY,size:v.MEDIUM,disabled:!1,loading:!1,fullWidth:!1,error:!1}},t={},n={args:{label:void 0}},i={args:{helperText:"Selecciona una opción de la lista"}},l={args:{error:!0,errorMessage:"Debes seleccionar una opción"}},c={args:{disabled:!0}},p={args:{loading:!0}},d={args:{fullWidth:!0}},u={args:{options:[],label:"Opciones agrupadas"},render:y=>e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"8px",fontWeight:500},children:y.label}),e.jsx("select",{style:{padding:"8px",borderRadius:"4px",border:"1px solid #ccc",minWidth:"200px"},children:Le.map((s,Ae)=>e.jsx("optgroup",{label:s.label,children:s.options.map(f=>e.jsx("option",{value:f.value,disabled:f.disabled,children:f.label},f.value.toString()))},Ae))})]})},m={args:{options:Ge,label:"Muchas opciones"}},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(o,{options:r,label:"Selector pequeño",size:v.SMALL}),e.jsx(o,{options:r,label:"Selector mediano (por defecto)",size:v.MEDIUM}),e.jsx(o,{options:r,label:"Selector grande",size:v.LARGE})]})},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(o,{options:r,label:"Variante primaria (por defecto)",variant:a.PRIMARY}),e.jsx(o,{options:r,label:"Variante secundaria",variant:a.SECONDARY}),e.jsx(o,{options:r,label:"Variante de peligro",variant:a.DANGER}),e.jsx(o,{options:r,label:"Variante de éxito",variant:a.SUCCESS}),e.jsx(o,{options:r,label:"Variante de advertencia",variant:a.WARNING})]})},S={args:{defaultValue:"2",label:"Con valor por defecto"}},x={args:{label:"Campo obligatorio",required:!0}};var h,O,V,W,R;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(V=(O=t.parameters)==null?void 0:O.docs)==null?void 0:V.source},description:{story:"Selector básico con las opciones por defecto.",...(R=(W=t.parameters)==null?void 0:W.docs)==null?void 0:R.description}}};var j,D,k,E,M;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: undefined
  }
}`,...(k=(D=n.parameters)==null?void 0:D.docs)==null?void 0:k.source},description:{story:"Selector sin etiqueta.",...(M=(E=n.parameters)==null?void 0:E.docs)==null?void 0:M.description}}};var z,A,L,G,q;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    helperText: 'Selecciona una opción de la lista'
  }
}`,...(L=(A=i.parameters)==null?void 0:A.docs)==null?void 0:L.source},description:{story:"Selector con texto de ayuda.",...(q=(G=i.parameters)==null?void 0:G.docs)==null?void 0:q.description}}};var C,N,I,T,U;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    error: true,
    errorMessage: 'Debes seleccionar una opción'
  }
}`,...(I=(N=l.parameters)==null?void 0:N.docs)==null?void 0:I.source},description:{story:"Selector con estado de error.",...(U=(T=l.parameters)==null?void 0:T.docs)==null?void 0:U.description}}};var Y,F,P,_,B;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(P=(F=c.parameters)==null?void 0:F.docs)==null?void 0:P.source},description:{story:"Selector deshabilitado.",...(B=(_=c.parameters)==null?void 0:_.docs)==null?void 0:B.description}}};var H,$,w,J,K;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(w=($=p.parameters)==null?void 0:$.docs)==null?void 0:w.source},description:{story:"Selector en estado de carga.",...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,X,Z,ee,oe;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  }
}`,...(Z=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"Selector que ocupa todo el ancho disponible.",...(oe=(ee=d.parameters)==null?void 0:ee.docs)==null?void 0:oe.description}}};var re,ae,se,te,ne;u.parameters={...u.parameters,docs:{...(re=u.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:se.source},description:{story:"Selector con opciones agrupadas.",...(ne=(te=u.parameters)==null?void 0:te.docs)==null?void 0:ne.description}}};var ie,le,ce,pe,de;m.parameters={...m.parameters,docs:{...(ie=m.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    options: mockLongListOptions,
    label: 'Muchas opciones'
  }
}`,...(ce=(le=m.parameters)==null?void 0:le.docs)==null?void 0:ce.source},description:{story:"Selector con muchas opciones y scroll.",...(de=(pe=m.parameters)==null?void 0:pe.docs)==null?void 0:de.description}}};var ue,me,be,ge,Se;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Selector options={mockOptions} label="Selector pequeño" size={SelectorSize.SMALL} />
      <Selector options={mockOptions} label="Selector mediano (por defecto)" size={SelectorSize.MEDIUM} />
      <Selector options={mockOptions} label="Selector grande" size={SelectorSize.LARGE} />
    </div>
}`,...(be=(me=b.parameters)==null?void 0:me.docs)==null?void 0:be.source},description:{story:"Selector con diferentes tamaños.",...(Se=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:Se.description}}};var xe,ve,fe,ye,he;g.parameters={...g.parameters,docs:{...(xe=g.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(fe=(ve=g.parameters)==null?void 0:ve.docs)==null?void 0:fe.source},description:{story:"Selector con diferentes variantes.",...(he=(ye=g.parameters)==null?void 0:ye.docs)==null?void 0:he.description}}};var Oe,Ve,We,Re,je;S.parameters={...S.parameters,docs:{...(Oe=S.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    defaultValue: '2',
    label: 'Con valor por defecto'
  }
}`,...(We=(Ve=S.parameters)==null?void 0:Ve.docs)==null?void 0:We.source},description:{story:"Selector con opción por defecto seleccionada.",...(je=(Re=S.parameters)==null?void 0:Re.docs)==null?void 0:je.description}}};var De,ke,Ee,Me,ze;x.parameters={...x.parameters,docs:{...(De=x.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    label: 'Campo obligatorio',
    required: true
  }
}`,...(Ee=(ke=x.parameters)==null?void 0:ke.docs)==null?void 0:Ee.source},description:{story:"Selector requerido con indicador de campo obligatorio.",...(ze=(Me=x.parameters)==null?void 0:Me.docs)==null?void 0:ze.description}}};const Ue=["Default","WithoutLabel","WithHelperText","ErrorState","Disabled","Loading","FullWidth","WithOptionGroups","WithManyOptions","Sizes","Variants","WithDefaultValue","RequiredField"];export{t as Default,c as Disabled,l as ErrorState,d as FullWidth,p as Loading,x as RequiredField,b as Sizes,g as Variants,S as WithDefaultValue,i as WithHelperText,m as WithManyOptions,u as WithOptionGroups,n as WithoutLabel,Ue as __namedExportsOrder,Te as default};
