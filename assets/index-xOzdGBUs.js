import{j as i}from"./jsx-runtime-D_zvdyIk.js";const l=({id:n,text:a,disabled:e=!1,onClick:t,type:o="PRIMARY"})=>{const r=()=>`textButton ${o} ${e?"DISABLED":""}`;return i.jsx("button",{className:r(),id:n,type:t?"button":"submit",name:n,disabled:e,"aria-disabled":e,onClick:s=>{!e&&t&&t(s)},children:a})};l.__docgenInfo={description:`Componente TextButton que muestra un botón de texto con diferentes estilos.
Permite crear botones de texto con diferentes estados y funcionalidades.

@param {TextButtonProps} props - Propiedades del componente
@param {string} props.id - ID único para el botón (requerido)
@param {string} props.text - Texto que se mostrará en el botón (requerido)
@param {boolean} [props.disabled=false] - Si el botón está deshabilitado
@param {(e: React.MouseEvent) => void} [props.onClick] - Función que se ejecuta al hacer clic
@param {ControlStyle} [props.type='PRIMARY'] - Estilo del botón (PRIMARY, SECONDARY, DANGER, SUCCESS, WARNING, INFO)
@returns {JSX.Element} Elemento button con texto y estilos personalizados`,methods:[],displayName:"TextButton",props:{id:{required:!0,tsType:{name:"string"},description:""},text:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},type:{required:!1,tsType:{name:"union",raw:"'PRIMARY' | 'SECONDARY' | 'DANGER' | 'SUCCESS' | 'WARNING' | 'INFO'",elements:[{name:"literal",value:"'PRIMARY'"},{name:"literal",value:"'SECONDARY'"},{name:"literal",value:"'DANGER'"},{name:"literal",value:"'SUCCESS'"},{name:"literal",value:"'WARNING'"},{name:"literal",value:"'INFO'"}]},description:"",defaultValue:{value:"'PRIMARY'",computed:!1}}}};export{l as T};
