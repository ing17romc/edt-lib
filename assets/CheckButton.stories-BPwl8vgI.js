import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./index-D4lIrffr.js";import{c as w}from"./classNames-CqjykrQM.js";var n=(s=>(s.SMALL="small",s.MEDIUM="medium",s.LARGE="large",s))(n||{});const t=({label:s,checked:o=!1,disabled:c=!1,onChange:r,size:a=n.MEDIUM,className:l="",...g})=>{const[f,V]=k.useState(o),$=()=>{if(!c){const x=!f;V(x),r==null||r(x)}},F=w("check-button",`check-button--${a}`,{"check-button--disabled":c},l);return e.jsxs("label",{className:F,children:[e.jsx("input",{type:"checkbox",checked:f,onChange:$,disabled:c,className:"check-button__input",...g}),e.jsx("span",{className:"check-button__checkmark"}),s&&e.jsx("span",{className:"check-button__label",children:s})]})};t.__docgenInfo={description:`CheckButton - Un componente de botón de verificación personalizable.

@component
@example
<CheckButton 
  label="Opción 1"
  onChange={(checked) => console.log(checked)}
  checked={false}
  disabled={false}
  size="medium"
/>

@example
// Ejemplo con diferentes tamaños
<div>
  <CheckButton label="Pequeño" size="small" />
  <CheckButton label="Mediano (predeterminado)" size="medium" />
  <CheckButton label="Grande" size="large" />
</div>

@param {string} [label] - Texto que se muestra junto al checkbox
@param {boolean} [checked=false] - Estado inicial del checkbox
@param {boolean} [disabled=false] - Si es true, el checkbox está deshabilitado
@param {Function} [onChange] - Función que se ejecuta cuando cambia el estado del checkbox
@param {'small'|'medium'|'large'} [size='medium'] - Tamaño del botón de verificación
@param {string} [className] - Clase CSS adicional para personalizar el estilo`,methods:[],displayName:"CheckButton",props:{label:{required:!1,tsType:{name:"string"},description:"Etiqueta que se muestra junto al checkbox"},checked:{required:!1,tsType:{name:"boolean"},description:`Estado del checkbox (controlado)
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Estado deshabilitado del checkbox
@default false`,defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:`Función que se ejecuta cuando cambia el estado del checkbox
@param checked - Nuevo valor del checkbox`},className:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada",defaultValue:{value:"''",computed:!1}},size:{required:!1,tsType:{name:"ButtonSize"},description:`Tamaño del botón de verificación
@default 'medium'`,defaultValue:{value:"ButtonSize.MEDIUM",computed:!0}}},composes:["Omit"]};const X={title:"Components/CheckButton",component:t,tags:["autodocs"],argTypes:{label:{control:"text",description:"Texto que se muestra junto al checkbox"},checked:{control:"boolean",description:"Estado del checkbox"},disabled:{control:"boolean",description:"Estado deshabilitado"},size:{control:"select",options:Object.values(n),description:"Tamaño del botón de verificación",defaultValue:n.MEDIUM},onChange:{action:"changed",description:"Función que se ejecuta al cambiar el estado"},className:{control:"text",description:"Clase CSS personalizada"}},args:{label:"Opción de ejemplo",checked:!1,disabled:!1}},H=[{id:"1",label:"Opción 1"},{id:"2",label:"Opción 2"},{id:"3",label:"Opción 3"}],P={display:"flex",flexDirection:"column",gap:"12px"},J={marginTop:"16px"},i={render:s=>e.jsx(t,{...s}),args:{label:"Opción predeterminada (medium)"}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{label:`Tamaño pequeño (${n.SMALL})`,size:n.SMALL}),e.jsx(t,{label:`Tamaño mediano (${n.MEDIUM}) - predeterminado`,size:n.MEDIUM}),e.jsx(t,{label:`Tamaño grande (${n.LARGE})`,size:n.LARGE})]}),parameters:{docs:{description:{story:"Ejemplo que muestra los diferentes tamaños disponibles para el botón de verificación."}}}},u={args:{disabled:!0,label:"Opción deshabilitada"}},p={args:{label:"Opción grande",className:"check-button--large"}},m={args:{label:"Opción pequeña",className:"check-button--small"}},b={render:function(o){const[c,r]=k.useState(!1);return e.jsx(t,{...o,checked:c,onChange:a=>r(a)})},args:{label:"Haz clic para cambiar"}},h={render:function(){const[o,c]=k.useState([]),r=a=>{c(l=>l.includes(a)?l.filter(g=>g!==a):[...l,a])};return e.jsxs("div",{style:P,children:[H.map(a=>e.jsx(t,{label:a.label,checked:o.includes(a.id),onChange:()=>r(a.id)},a.id)),e.jsx("div",{style:J,children:e.jsxs("p",{children:["Seleccionados: ",o.length>0?o.join(", "):"Ninguno"]})})]})},parameters:{docs:{description:{story:"Ejemplo de un grupo de checkboxes que se pueden seleccionar múltiples opciones."}}}};var S,C,v;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <CheckButton {...args} />,
  args: {
    label: 'Opción predeterminada (medium)'
  }
}`,...(v=(C=i.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var j,y,z;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <CheckButton label={\`Tamaño pequeño (\${ButtonSize.SMALL})\`} size={ButtonSize.SMALL} />
      <CheckButton label={\`Tamaño mediano (\${ButtonSize.MEDIUM}) - predeterminado\`} size={ButtonSize.MEDIUM} />
      <CheckButton label={\`Tamaño grande (\${ButtonSize.LARGE})\`} size={ButtonSize.LARGE} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo que muestra los diferentes tamaños disponibles para el botón de verificación.'
      }
    }
  }
}`,...(z=(y=d.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var E,q,M;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Opción deshabilitada'
  }
}`,...(M=(q=u.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var B,T,O;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Opción grande',
    className: 'check-button--large'
  }
}`,...(O=(T=p.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var L,I,N;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Opción pequeña',
    className: 'check-button--small'
  }
}`,...(N=(I=m.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var D,A,G;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: function InteractiveTemplate(args) {
    const [checked, setChecked] = useState(false);
    return <CheckButton {...args} checked={checked} onChange={(isChecked: boolean) => setChecked(isChecked)} />;
  },
  args: {
    label: 'Haz clic para cambiar'
  }
}`,...(G=(A=b.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var _,U,R;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(U=h.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};const Y=["Default","SizeVariations","Disabled","Large","Small","Interactive","Group"];export{i as Default,u as Disabled,h as Group,b as Interactive,p as Large,d as SizeVariations,m as Small,Y as __namedExportsOrder,X as default};
