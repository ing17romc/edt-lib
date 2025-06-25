import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{I as u}from"./index-BjEFWTkP.js";const m=({id:t,text:o,icon:r,size:l="MD",disabled:e=!1,onClick:n})=>{const i=()=>`imageButton ${e?"disabled":""}`,s=()=>n?"button":"submit";return a.jsx("abbr",{title:o,role:"tooltip",children:a.jsx("button",{className:i(),id:t,type:s(),name:t,disabled:e,onClick:c=>{!e&&n&&n(c)},"aria-label":o,"aria-disabled":e,children:a.jsx(u,{name:r,size:l})})})};m.__docgenInfo={description:`Componente ImageButton que muestra un botón con un ícono.
Proporciona una interfaz consistente para botones con íconos en la aplicación.

@param {ImageButtonProps} props - Propiedades del componente
@param {string} props.id - ID único para el botón
@param {string} props.text - Texto que se mostrará como título del botón
@param {IconName} props.icon - Nombre del ícono a mostrar
@param {IconSize} [props.size='MD'] - Tamaño del botón y el ícono
@param {boolean} [props.disabled=false] - Si el botón está deshabilitado
@param {(e: React.MouseEvent<HTMLButtonElement>) => void} [props.onClick] - Función que se ejecuta al hacer clic
@returns {JSX.Element} Elemento button con ícono y accesibilidad`,methods:[],displayName:"ImageButton",props:{id:{required:!0,tsType:{name:"string"},description:""},text:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"union",raw:`| 'add'      // Ícono de agregar
| 'remove'   // Ícono de remover
| 'edit'     // Ícono de editar
| 'delete'   // Ícono de eliminar
| 'search'   // Ícono de búsqueda
| 'save'     // Ícono de guardar
| 'cancel'   // Ícono de cancelar
| 'check'    // Ícono de verificación
| 'warning'  // Ícono de advertencia
| 'info'     // Ícono de información
| 'help'     // Ícono de ayuda
| 'close'`,elements:[{name:"literal",value:"'add'"},{name:"literal",value:"'remove'"},{name:"literal",value:"'edit'"},{name:"literal",value:"'delete'"},{name:"literal",value:"'search'"},{name:"literal",value:"'save'"},{name:"literal",value:"'cancel'"},{name:"literal",value:"'check'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'help'"},{name:"literal",value:"'close'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'SM' | 'MD' | 'LG'",elements:[{name:"literal",value:"'SM'"},{name:"literal",value:"'MD'"},{name:"literal",value:"'LG'"}]},description:"",defaultValue:{value:"'MD'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};export{m as I};
