import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{I as m}from"./index-DtnG7Kr2.js";const c=({id:o,text:a,icon:r,size:s="MD",disabled:e=!1,onClick:t})=>{const i=()=>`imageButton ${e?"disabled":""}`,p=()=>t?"button":"submit";return n.jsx("abbr",{title:a,role:"tooltip",children:n.jsx("button",{className:i(),id:o,type:p(),name:o,disabled:e,onClick:u=>{!e&&t&&t(u)},"aria-label":a,"aria-disabled":e,children:n.jsx(m,{name:r,size:s})})})};c.__docgenInfo={description:`Componente ImageButton que muestra un botón con un ícono.
Proporciona una interfaz consistente para botones con íconos en la aplicación.

@param {ImageButtonProps} props - Propiedades del componente
@param {string} props.id - ID único para el botón
@param {string} props.text - Texto que se mostrará como título del botón
@param {IconName} props.icon - Nombre del ícono a mostrar
@param {IconSize} [props.size='MD'] - Tamaño del botón y el ícono
@param {boolean} [props.disabled=false] - Si el botón está deshabilitado
@param {(e: React.MouseEvent<HTMLButtonElement>) => void} [props.onClick] - Función que se ejecuta al hacer clic
@returns {JSX.Element} Elemento button con ícono y accesibilidad`,methods:[],displayName:"ImageButton",props:{id:{required:!0,tsType:{name:"string"},description:""},text:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"IconName"},description:""},size:{required:!1,tsType:{name:"IconSize"},description:"",defaultValue:{value:"'MD'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};export{c as I};
