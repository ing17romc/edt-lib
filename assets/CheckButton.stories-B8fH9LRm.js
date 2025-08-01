import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./index-D4lIrffr.js";import{c as w}from"./classNames-CqjykrQM.js";import{C as n}from"./types-D2sN4igU.js";const s=({label:r,checked:o=!1,disabled:t=!1,onChange:c,size:a=n.MEDIUM,className:l="",...g})=>{const[f,R]=k.useState(o),$=()=>{if(!t){const C=!f;R(C),c==null||c(C)}},F=w("check-button",`check-button--${a}`,{"check-button--disabled":t},l);return e.jsxs("label",{className:F,children:[e.jsx("input",{type:"checkbox",checked:f,onChange:$,disabled:t,className:"check-button__input",...g}),e.jsx("span",{className:"check-button__checkmark"}),r&&e.jsx("span",{className:"check-button__label",children:r})]})};s.__docgenInfo={description:`CheckButton - Un componente de botón de verificación personalizable.

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
@param checked - Nuevo valor del checkbox`},className:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada",defaultValue:{value:"''",computed:!1}},size:{required:!1,tsType:{name:"ComponentSize"},description:`Tamaño del botón de verificación
@default 'medium'`,defaultValue:{value:"ComponentSize.MEDIUM",computed:!0}}},composes:["Omit"]};const Y={title:"Components/CheckButton",component:s,tags:["autodocs"],argTypes:{label:{control:"text",description:"Texto que se muestra junto al checkbox"},checked:{control:"boolean",description:"Estado del checkbox"},disabled:{control:"boolean",description:"Estado deshabilitado"},size:{control:"select",options:Object.values(n),description:"Tamaño",table:{type:{summary:Object.values(n).join(" | ")},defaultValue:{summary:n.MEDIUM}}},onChange:{action:"changed",description:"Función que se ejecuta al cambiar el estado"},className:{control:"text",description:"Clase CSS personalizada"}},args:{label:"Opción de ejemplo",checked:!1,disabled:!1}},H=[{id:"1",label:"Opción 1"},{id:"2",label:"Opción 2"},{id:"3",label:"Opción 3"}],P={display:"flex",flexDirection:"column",gap:"12px"},J={marginTop:"16px"},i={render:r=>e.jsx(s,{...r}),args:{label:"Opción predeterminada (medium)"}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(s,{label:`Tamaño pequeño (${n.SMALL})`,size:n.SMALL}),e.jsx(s,{label:`Tamaño mediano (${n.MEDIUM}) - predeterminado`,size:n.MEDIUM}),e.jsx(s,{label:`Tamaño grande (${n.LARGE})`,size:n.LARGE})]}),parameters:{docs:{description:{story:"Ejemplo que muestra los diferentes tamaños disponibles para el botón de verificación."}}}},p={args:{disabled:!0,label:"Opción deshabilitada"}},u={args:{label:"Opción grande",className:"check-button--large"}},m={args:{label:"Opción pequeña",className:"check-button--small"}},b={render:function(o){const[t,c]=k.useState(!1);return e.jsx(s,{...o,checked:t,onChange:a=>c(a)})},args:{label:"Haz clic para cambiar"}},h={render:function(){const[o,t]=k.useState([]),c=a=>{t(l=>l.includes(a)?l.filter(g=>g!==a):[...l,a])};return e.jsxs("div",{style:P,children:[H.map(a=>e.jsx(s,{label:a.label,checked:o.includes(a.id),onChange:()=>c(a.id)},a.id)),e.jsx("div",{style:J,children:e.jsxs("p",{children:["Seleccionados: ",o.length>0?o.join(", "):"Ninguno"]})})]})},parameters:{docs:{description:{story:"Ejemplo de un grupo de checkboxes que se pueden seleccionar múltiples opciones."}}}};var x,S,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <CheckButton {...args} />,
  args: {
    label: 'Opción predeterminada (medium)'
  }
}`,...(v=(S=i.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var j,y,z;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <CheckButton label={\`Tamaño pequeño (\${ComponentSize.SMALL})\`} size={ComponentSize.SMALL} />
      <CheckButton label={\`Tamaño mediano (\${ComponentSize.MEDIUM}) - predeterminado\`} size={ComponentSize.MEDIUM} />
      <CheckButton label={\`Tamaño grande (\${ComponentSize.LARGE})\`} size={ComponentSize.LARGE} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo que muestra los diferentes tamaños disponibles para el botón de verificación.'
      }
    }
  }
}`,...(z=(y=d.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var E,q,T;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Opción deshabilitada'
  }
}`,...(T=(q=p.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var M,O,N;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Opción grande',
    className: 'check-button--large'
  }
}`,...(N=(O=u.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var B,I,D;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Opción pequeña',
    className: 'check-button--small'
  }
}`,...(D=(I=m.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var L,_,G;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: function InteractiveTemplate(args) {
    const [checked, setChecked] = useState(false);
    return <CheckButton {...args} checked={checked} onChange={(isChecked: boolean) => setChecked(isChecked)} />;
  },
  args: {
    label: 'Haz clic para cambiar'
  }
}`,...(G=(_=b.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var A,U,V;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(V=(U=h.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const Z=["Default","SizeVariations","Disabled","Large","Small","Interactive","Group"];export{i as Default,p as Disabled,h as Group,b as Interactive,u as Large,d as SizeVariations,m as Small,Z as __namedExportsOrder,Y as default};
