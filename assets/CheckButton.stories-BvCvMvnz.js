import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./index-D4lIrffr.js";const h=({label:o,checked:n=!1,disabled:s=!1,onChange:c,className:b="",...e})=>{const[t,g]=k.useState(n),w=()=>{if(!s){const f=!t;g(f),c==null||c(f)}};return a.jsxs("label",{className:`check-button ${b} ${s?"disabled":""}`,children:[a.jsx("input",{type:"checkbox",checked:t,onChange:w,disabled:s,className:"check-button__input",...e}),a.jsx("span",{className:"check-button__checkmark"}),o&&a.jsx("span",{className:"check-button__label",children:o})]})};h.__docgenInfo={description:`CheckButton - Un componente de botón de verificación personalizable.

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
@param checked - Nuevo valor del checkbox`},className:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada",defaultValue:{value:"''",computed:!1}}},composes:["HTMLAttributes"]};const M={title:"Components/CheckButton",component:h,tags:["autodocs"],argTypes:{label:{control:"text",description:"Texto que se muestra junto al checkbox"},checked:{control:"boolean",description:"Estado del checkbox"},disabled:{control:"boolean",description:"Estado deshabilitado"},onChange:{action:"changed",description:"Función que se ejecuta al cambiar el estado"},className:{control:"text",description:"Clase CSS personalizada"}},args:{label:"Opción de ejemplo",checked:!1,disabled:!1}},r={},l={args:{checked:!0,label:"Opción seleccionada"}},d={args:{disabled:!0,label:"Opción deshabilitada"}},i={args:{label:"Opción grande",className:"check-button--large"}},p={args:{label:"Opción pequeña",className:"check-button--small"}},F=o=>{const[n,s]=k.useState(!1);return a.jsx(h,{...o,checked:n,onChange:c=>s(c)})},u={render:F,args:{label:"Haz clic para cambiar"}},m={render:function(){const[n,s]=k.useState([]),c=e=>{s(t=>t.includes(e)?t.filter(g=>g!==e):[...t,e])},b=[{id:"1",label:"Opción 1"},{id:"2",label:"Opción 2"},{id:"3",label:"Opción 3"}];return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[b.map(e=>a.jsx(h,{label:e.label,checked:n.includes(e.id),onChange:()=>c(e.id)},e.id)),a.jsx("div",{style:{marginTop:"16px"},children:a.jsxs("p",{children:["Seleccionados: ",n.length>0?n.join(", "):"Ninguno"]})})]})}};var x,C,v;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(v=(C=r.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var S,j,y;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: 'Opción seleccionada'
  }
}`,...(y=(j=l.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var O,N,q;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Opción deshabilitada'
  }
}`,...(q=(N=d.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var T,_,E;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Opción grande',
    className: 'check-button--large'
  }
}`,...(E=(_=i.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var B,D,I;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Opción pequeña',
    className: 'check-button--small'
  }
}`,...(I=(D=p.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var z,G,V;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: InteractiveTemplate,
  args: {
    label: 'Haz clic para cambiar'
  }
}`,...(V=(G=u.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var H,L,R;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: function GroupRender() {
    const [selected, setSelected] = useState<string[]>([]);
    const handleChange = (value: string) => {
      setSelected(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
    };
    const options = [{
      id: '1',
      label: 'Opción 1'
    }, {
      id: '2',
      label: 'Opción 2'
    }, {
      id: '3',
      label: 'Opción 3'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        {options.map(option => <CheckButton key={option.id} label={option.label} checked={selected.includes(option.id)} onChange={() => handleChange(option.id)} />)}
        <div style={{
        marginTop: '16px'
      }}>
          <p>Seleccionados: {selected.length > 0 ? selected.join(', ') : 'Ninguno'}</p>
        </div>
      </div>;
  }
}`,...(R=(L=m.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const U=["Default","Checked","Disabled","Large","Small","Interactive","Group"];export{l as Checked,r as Default,d as Disabled,m as Group,u as Interactive,i as Large,p as Small,U as __namedExportsOrder,M as default};
