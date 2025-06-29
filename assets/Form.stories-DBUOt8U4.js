import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-D4lIrffr.js";import{D as y,f}from"./index-BqCdrrhq.js";import{B as C}from"./index-CEGhxr3c.js";import{C as N}from"./index-BK3gwHRx.js";import{T as O}from"./index-Do-Q0H5Z.js";import{S as B}from"./index-DS655mG4.js";import{S}from"./index-BvN6d07m.js";import{T as z}from"./index-Dp0Xzw04.js";import{T}from"./index-fIcZIRKR.js";import{T as k}from"./index-xOzdGBUs.js";import{T as E}from"./index-BLeZ2Wm7.js";import"./index-Dc97iC8r.js";import"./index-C_LCF5Wq.js";import"./index-DjI3OIqT.js";import"./index-DUXQLmfv.js";import"./index-Uj7DPBUV.js";import"./index-DnlZc6Pr.js";import"./index-DF8RCVmG.js";import"./index-C4ABM0iH.js";import"./index-CDcnP6JY.js";import"./enums-Ca2RdD1G.js";import"./index-DsJinFGm.js";const D=[{key:"0",value:"Solter@"},{key:"1",value:"Casad@"},{key:"2",value:"Viud@"}],i={Button:C,CheckButton:N,RadioButton:O,Selector:B,TextBox:z,Title:T,TextButton:k,TextArea:E,DatePicker:y,Spinner:S},n=()=>{const{getValueInput:x}=f,[a,h]=o.useState({name:"Rafael Orlando",lastName:"Márquez Cedeño",dni:"MACR860512",civilStatus:"1",gender:"",noticePrivacy:!1,description:"",birthDate:"",disabled:!1,required:!1,readOnly:!1}),[b,j]=o.useState(!1),s=()=>{const r=x();r&&h({...a,[r.label]:r.value})},g=()=>{alert("Form submitted ")};return e.jsxs(e.Fragment,{children:[e.jsx(i.Spinner,{show:b,children:"Datos Personales"}),e.jsxs("form",{onSubmit:g,children:[e.jsx("div",{className:"container-body",children:e.jsxs("div",{className:"grid-primary",children:[e.jsx("div",{className:"start-1 size-12 padding-v-20",children:e.jsx(i.Title,{title:"Cliente",children:"Cliente"})}),e.jsxs("div",{className:"grid-secondary",children:[e.jsx("div",{className:"start-1 size-9 padding-v-20",children:e.jsx("h4",{children:"Datos Personales"})}),e.jsx("div",{className:"start-13 size-4 padding-v-20",children:e.jsx(i.CheckButton,{label:"Aviso de privacidad",id:"disabled",eventChange:s,checked:a.disabled})}),e.jsx("div",{className:"size-4 padding-v-20",children:e.jsx(i.CheckButton,{label:"Aviso de privacidad",id:"readOnly",eventChange:s,checked:a.readOnly})}),e.jsx("div",{className:"size-4 padding-v-20",children:e.jsx(i.CheckButton,{label:"Aviso de privacidad",id:"required",eventChange:s,checked:a.required})}),e.jsx("div",{className:"start-1 size-3 padding-v-20",children:"Genero"}),e.jsx("div",{className:"size-5 padding-v-20",children:e.jsx(i.RadioButton,{id:"man",name:"gender",value:a.gender,label:"Hombre",eventChange:s,disabled:a.disabled,readOnly:a.readOnly})}),e.jsx("div",{className:"size-4 padding-v-20",children:e.jsx(i.RadioButton,{id:"woman",name:"gender",value:a.gender,label:"Mujer",eventChange:s,disabled:a.disabled,readOnly:a.readOnly})}),e.jsx("div",{className:"start-1 size-6 padding-v-20",children:e.jsx(i.Selector,{id:"civilStatus",value:a.civilStatus,options:D,eventChange:s,titleBottom:"Estado civil",disabled:a.disabled,readOnly:a.readOnly})}),e.jsx("div",{className:"size-6 padding-v-20",children:e.jsx(i.TextBox,{id:"dni",value:a.dni,eventChange:s,titleBottom:"Doc. Identificación",disabled:a.disabled,readOnly:a.readOnly})}),e.jsx("div",{className:"size-12 padding-v-20",children:e.jsx(i.DatePicker,{id:"birthDate",value:a.birthDate,eventChange:s,title:"Fecha de Nacimiento",disabled:a.disabled,readOnly:a.readOnly})}),e.jsx("div",{className:"start-1 size-12 padding-v-20",children:e.jsx(i.TextBox,{id:"name",value:a.name,eventChange:s,titleBottom:"Nombres",disabled:a.disabled,readOnly:a.readOnly})}),e.jsx("div",{className:"size-12 padding-v-20",children:e.jsx(i.TextBox,{id:"lastName",value:a.lastName,eventChange:s,titleBottom:"Apellidos",disabled:a.disabled,readOnly:a.readOnly})}),e.jsx("div",{className:"start-1 size-24 padding-v-20",children:e.jsx(i.TextArea,{rows:4,id:"description",value:a.description,placeholder:"Escriba aquí",eventChange:s,disabled:a.disabled,readOnly:a.readOnly})}),e.jsx("div",{className:"start-1 size-1 padding-v-20 center",children:e.jsx(i.CheckButton,{label:"Aviso de privacidad",id:"noticePrivacy",eventChange:s,checked:a.noticePrivacy,disabled:a.disabled,readOnly:a.readOnly})}),e.jsx("div",{className:"size-11 padding-v-20",children:e.jsx(i.TextButton,{id:"btnNoticePrivacy",text:"Aviso de privacidad ",onClick:()=>alert("clic Aviso privacidad"),disabled:a.disabled})})]})]})}),e.jsxs("div",{className:"grid-primary padding-v-10",children:[e.jsx("div",{className:"start-7 size-3 padding-v-10",children:e.jsx(i.Button,{title:"Cargando",type:"SECONDARY",onClick:()=>j(!0),disabled:a.disabled})}),e.jsx("div",{className:"size-3 padding-v-10",children:e.jsx(i.Button,{title:"Continue",type:"PRIMARY",disabled:a.disabled})})]})]})]})};n.__docgenInfo={description:`Form

Componente de formulario para captura y edición de datos personales.
Incluye campos de texto, selectores, botones y controles de privacidad.
Utiliza controles personalizados y estado local para gestionar los datos del usuario.

@param {} props - Propiedades del componente (actualmente no recibe props)
@returns {JSX.Element} Formulario interactivo de datos personales`,methods:[],displayName:"Form"};const ae={title:"Examples/Form",component:n,tags:["autodocs","examples"],parameters:{componentSubtitle:"Formulario de datos personales",docs:{description:{component:`
Componente de formulario interactivo que incluye:
- Campos de texto para nombre, apellido, DNI, etc.
- Selectores para estado civil y género
- Checkbox para aceptar términos y condiciones
- Validación de campos requeridos
- Manejo de envío de formulario
        `}}}},d={args:{},parameters:{docs:{description:{story:"Vista por defecto del formulario con valores iniciales"}}}},t={render:()=>e.jsxs("div",{children:[e.jsx("p",{children:"Este es un ejemplo de cómo se vería el formulario deshabilitado."}),e.jsx("div",{style:{pointerEvents:"none",opacity:.6},children:e.jsx(n,{})})]}),parameters:{docs:{description:{story:"Ejemplo de formulario en estado deshabilitado"}}}};var l,c,m;d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Vista por defecto del formulario con valores iniciales'
      }
    }
  }
}`,...(m=(c=d.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,v,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    // Este ejemplo muestra cómo se vería el formulario deshabilitado
    // En una implementación real, esto se controlaría mediante props
    return <div>
        <p>Este es un ejemplo de cómo se vería el formulario deshabilitado.</p>
        <div style={{
        pointerEvents: 'none',
        opacity: 0.6
      }}>
          <Form />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de formulario en estado deshabilitado'
      }
    }
  }
}`,...(u=(v=t.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};const ie=["Default","Disabled"];export{d as Default,t as Disabled,ie as __namedExportsOrder,ae as default};
