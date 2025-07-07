import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-D4lIrffr.js";const b=({label:o,checked:s=!1,disabled:n=!1,onChange:c,className:e="",...t})=>{const[r,F]=g.useState(s),H=()=>{if(!n){const k=!r;F(k),c==null||c(k)}};return a.jsxs("label",{className:`check-button ${e} ${n?"disabled":""}`,children:[a.jsx("input",{type:"checkbox",checked:r,onChange:H,disabled:n,className:"check-button__input",...t}),a.jsx("span",{className:"check-button__checkmark"}),o&&a.jsx("span",{className:"check-button__label",children:o})]})};b.__docgenInfo={description:`CheckButton - Un componente de botón de verificación personalizable.

@component
@example
<CheckButton 
  label="Opción 1"
  onChange={(checked) => console.log(checked)}
  checked={false}
  disabled={false}
/>`,methods:[],displayName:"CheckButton",props:{label:{required:!1,tsType:{name:"string"},description:"Etiqueta que se muestra junto al checkbox"},checked:{required:!1,tsType:{name:"boolean"},description:`Estado del checkbox (controlado)
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Estado deshabilitado del checkbox
@default false`,defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:`Función que se ejecuta cuando cambia el estado del checkbox
@param checked - Nuevo valor del checkbox`},className:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada",defaultValue:{value:"''",computed:!1}}},composes:["Omit"]};const K={title:"Components/CheckButton",component:b,tags:["autodocs"],argTypes:{label:{control:"text",description:"Texto que se muestra junto al checkbox"},checked:{control:"boolean",description:"Estado del checkbox"},disabled:{control:"boolean",description:"Estado deshabilitado"},onChange:{action:"changed",description:"Función que se ejecuta al cambiar el estado"},className:{control:"text",description:"Clase CSS personalizada"}},args:{label:"Opción de ejemplo",checked:!1,disabled:!1}},L=[{id:"1",label:"Opción 1"},{id:"2",label:"Opción 2"},{id:"3",label:"Opción 3"}],$={display:"flex",flexDirection:"column",gap:"12px"},U={marginTop:"16px"},l={},d={args:{checked:!0,label:"Opción seleccionada"}},i={args:{disabled:!0,label:"Opción deshabilitada"}},p={args:{label:"Opción grande",className:"check-button--large"}},u={args:{label:"Opción pequeña",className:"check-button--small"}},m={render:function(s){const[n,c]=g.useState(!1);return a.jsx(b,{...s,checked:n,onChange:e=>c(e)})},args:{label:"Haz clic para cambiar"}},h={render:function(){const[s,n]=g.useState([]),c=e=>{n(t=>t.includes(e)?t.filter(r=>r!==e):[...t,e])};return a.jsxs("div",{style:$,children:[L.map(e=>a.jsx(b,{label:e.label,checked:s.includes(e.id),onChange:()=>c(e.id)},e.id)),a.jsx("div",{style:U,children:a.jsxs("p",{children:["Seleccionados: ",s.length>0?s.join(", "):"Ninguno"]})})]})},parameters:{docs:{description:{story:"Ejemplo de un grupo de checkboxes que se pueden seleccionar múltiples opciones."}}}};var f,x,C;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var S,v,y;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: 'Opción seleccionada'
  }
}`,...(y=(v=d.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var j,O,q;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Opción deshabilitada'
  }
}`,...(q=(O=i.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var N,E,T;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Opción grande',
    className: 'check-button--large'
  }
}`,...(T=(E=p.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var _,I,B;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Opción pequeña',
    className: 'check-button--small'
  }
}`,...(B=(I=u.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var z,D,G;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: function InteractiveTemplate(args) {
    const [checked, setChecked] = useState(false);
    return <CheckButton {...args} checked={checked} onChange={(isChecked: boolean) => setChecked(isChecked)} />;
  },
  args: {
    label: 'Haz clic para cambiar'
  }
}`,...(G=(D=m.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var V,R,w;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: function GroupRender() {
    const [selected, setSelected] = useState<string[]>([]);
    const handleChange = (value: string) => {
      setSelected(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
    };
    return <div style={groupContainerStyle}>
        {groupOptions.map(option => <CheckButton key={option.id} label={option.label} checked={selected.includes(option.id)} onChange={() => handleChange(option.id)} />)}
        <div style={selectedItemsStyle}>
          <p>Seleccionados: {selected.length > 0 ? selected.join(', ') : 'Ninguno'}</p>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de un grupo de checkboxes que se pueden seleccionar múltiples opciones.'
      }
    }
  }
}`,...(w=(R=h.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};const M=["Default","Checked","Disabled","Large","Small","Interactive","Group"];export{d as Checked,l as Default,i as Disabled,h as Group,m as Interactive,p as Large,u as Small,M as __namedExportsOrder,K as default};
