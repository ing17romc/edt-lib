import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-D4lIrffr.js";import{B as j}from"./index-DEGu--FC.js";import{C as f}from"./index-Dcj-BqIm.js";import{T as C}from"./index-hLzBVWZp.js";import{S as N}from"./index-B03DPvBP.js";import{S as k}from"./index-BFvASQ2C.js";import{T as O}from"./index-Dp0Xzw04.js";import{T as B}from"./index-BNkp-o0C.js";import{T as S}from"./index-xOzdGBUs.js";import{T as z}from"./index-BeE6wSqK.js";import{D as T}from"./index-qADxr97m.js";import"./index-Dc97iC8r.js";import"./index-Bi8F1KeS.js";import"./index-fQHAykBT.js";import"./index-BjEFWTkP.js";import"./index-li6mqrFJ.js";import"./index-BGoeR8wK.js";import"./index-CjC-LfzO.js";import"./index-D548qw57.js";import"./constant-znG4q3vV.js";import"./index-DsJinFGm.js";import"./index-J4r_aoTu.js";const E=[{key:"0",value:"Solter@"},{key:"1",value:"Casad@"},{key:"2",value:"Viud@"}],D=t=>{if(t&&t.target){if(t.target.tagName.toLowerCase()==="input")return t.target.type.toLowerCase()==="checkbox"?{key:t.target.name,value:t.target.checked}:t.target.type.toLowerCase()==="radio"?{key:t.target.name,value:t.target.id}:{key:t.target.name,value:t.target.value};if(t.target.tagName.toLowerCase()==="button")return{key:t.target.id,value:""};if(t.target.tagName.toLowerCase()==="textarea"||t.target.tagName.toLowerCase()==="select")return{key:t.target.id,value:t.target.value}}else return t?{key:t.id,value:t.value}:null},A={getValueInput:D},i={Button:j,CheckButton:f,RadioButton:C,Selector:N,TextBox:O,Title:B,TextButton:S,TextArea:z,DatePicker:T,Spinner:k},o=()=>{const{getValueInput:t}=A,[a,x]=l.useState({name:"Rafael Orlando",lastName:"Márquez Cedeño",dni:"MACR860512",civilStatus:"1",gender:"",noticePrivacy:!1,description:"",birthDate:"",disabled:!1,required:!1,readOnly:!1}),[h,b]=l.useState(!1),s=()=>{const n=t();n&&x({...a,[n.label]:n.value})},y=()=>{alert("Form submitted ")};return e.jsxs(e.Fragment,{children:[e.jsx(i.Spinner,{show:h,children:"Datos Personales"}),e.jsxs("form",{onSubmit:y,children:[e.jsx("div",{className:"container-body",children:e.jsxs("div",{className:"grid-primary",children:[e.jsx("div",{className:"start-1 size-12 padding-v-20",children:e.jsx(i.Title,{title:"Cliente",children:"Cliente"})}),e.jsxs("div",{className:"grid-secondary",children:[e.jsx("div",{className:"start-1 size-9 padding-v-20",children:e.jsx("h4",{children:"Datos Personales"})}),e.jsx("div",{className:"start-13 size-4 padding-v-20",children:e.jsx(i.CheckButton,{label:"Aviso de privacidad",id:"disabled",eventChange:s,checked:a.disabled})}),e.jsx("div",{className:"size-4 padding-v-20",children:e.jsx(i.CheckButton,{label:"Aviso de privacidad",id:"readOnly",eventChange:s,checked:a.readOnly})}),e.jsx("div",{className:"size-4 padding-v-20",children:e.jsx(i.CheckButton,{label:"Aviso de privacidad",id:"required",eventChange:s,checked:a.required})}),e.jsx("div",{className:"start-1 size-3 padding-v-20",children:"Genero"}),e.jsx("div",{className:"size-5 padding-v-20",children:e.jsx(i.RadioButton,{id:"man",name:"gender",value:a.gender,label:"Hombre",eventChange:s,disabled:a.disabled,readOnly:a.readOnly})}),e.jsx("div",{className:"size-4 padding-v-20",children:e.jsx(i.RadioButton,{id:"woman",name:"gender",value:a.gender,label:"Mujer",eventChange:s,disabled:a.disabled,readOnly:a.readOnly})}),e.jsx("div",{className:"start-1 size-6 padding-v-20",children:e.jsx(i.Selector,{id:"civilStatus",value:a.civilStatus,options:E,eventChange:s,titleBottom:"Estado civil",disabled:a.disabled,readOnly:a.readOnly})}),e.jsx("div",{className:"size-6 padding-v-20",children:e.jsx(i.TextBox,{id:"dni",value:a.dni,eventChange:s,titleBottom:"Doc. Identificación",disabled:a.disabled,readOnly:a.readOnly})}),e.jsx("div",{className:"size-12 padding-v-20",children:e.jsx(i.DatePicker,{id:"birthDate",value:a.birthDate,eventChange:s,title:"Fecha de Nacimiento",disabled:a.disabled,readOnly:a.readOnly})}),e.jsx("div",{className:"start-1 size-12 padding-v-20",children:e.jsx(i.TextBox,{id:"name",value:a.name,eventChange:s,titleBottom:"Nombres",disabled:a.disabled,readOnly:a.readOnly})}),e.jsx("div",{className:"size-12 padding-v-20",children:e.jsx(i.TextBox,{id:"lastName",value:a.lastName,eventChange:s,titleBottom:"Apellidos",disabled:a.disabled,readOnly:a.readOnly})}),e.jsx("div",{className:"start-1 size-24 padding-v-20",children:e.jsx(i.TextArea,{rows:4,id:"description",value:a.description,placeholder:"Escriba aquí",eventChange:s,disabled:a.disabled,readOnly:a.readOnly})}),e.jsx("div",{className:"start-1 size-1 padding-v-20 center",children:e.jsx(i.CheckButton,{label:"Aviso de privacidad",id:"noticePrivacy",eventChange:s,checked:a.noticePrivacy,disabled:a.disabled,readOnly:a.readOnly})}),e.jsx("div",{className:"size-11 padding-v-20",children:e.jsx(i.TextButton,{id:"btnNoticePrivacy",text:"Aviso de privacidad ",onClick:()=>alert("clic Aviso privacidad"),disabled:a.disabled})})]})]})}),e.jsxs("div",{className:"grid-primary padding-v-10",children:[e.jsx("div",{className:"start-7 size-3 padding-v-10",children:e.jsx(i.Button,{title:"Cargando",type:"SECONDARY",onClick:()=>b(!0),disabled:a.disabled})}),e.jsx("div",{className:"size-3 padding-v-10",children:e.jsx(i.Button,{title:"Continue",type:"PRIMARY",disabled:a.disabled})})]})]})]})};o.__docgenInfo={description:`Form

Componente de formulario para captura y edición de datos personales.
Incluye campos de texto, selectores, botones y controles de privacidad.
Utiliza controles personalizados y estado local para gestionar los datos del usuario.

@param {} props - Propiedades del componente (actualmente no recibe props)
@returns {JSX.Element} Formulario interactivo de datos personales`,methods:[],displayName:"Form"};const te={title:"Examples/Form",component:o,tags:["autodocs","examples"],parameters:{componentSubtitle:"Formulario de datos personales",docs:{description:{component:`
Componente de formulario interactivo que incluye:
- Campos de texto para nombre, apellido, DNI, etc.
- Selectores para estado civil y género
- Checkbox para aceptar términos y condiciones
- Validación de campos requeridos
- Manejo de envío de formulario
        `}}}},r={args:{},parameters:{docs:{description:{story:"Vista por defecto del formulario con valores iniciales"}}}},d={render:()=>e.jsxs("div",{children:[e.jsx("p",{children:"Este es un ejemplo de cómo se vería el formulario deshabilitado."}),e.jsx("div",{style:{pointerEvents:"none",opacity:.6},children:e.jsx(o,{})})]}),parameters:{docs:{description:{story:"Ejemplo de formulario en estado deshabilitado"}}}};var c,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Vista por defecto del formulario con valores iniciales'
      }
    }
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var v,u,g;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(g=(u=d.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const ie=["Default","Disabled"];export{r as Default,d as Disabled,ie as __namedExportsOrder,te as default};
