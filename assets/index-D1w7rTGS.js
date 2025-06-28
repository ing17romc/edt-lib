import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{a as i,C as p}from"./enums-Ca2RdD1G.js";const u=({id:t,title:o,disabled:e=!1,onClick:n,buttonType:a=i.PRIMARY,size:r=p.MD,className:s=""})=>l.jsx("button",{id:t,type:"button",disabled:e,onClick:n,className:`btn ${a.toLowerCase()} ${r.toLowerCase()} ${e?"disabled":""} ${s}`.trim(),"aria-disabled":e,children:o});u.__docgenInfo={description:`Componente Button que proporciona un botón estilizado y accesible.
Permite personalizar el estilo, tamaño y comportamiento del botón.

@param {ButtonProps} props - Propiedades del componente
@param {string} props.title - Texto que se mostrará en el botón (requerido)
@param {string} [props.id] - ID único para el botón
@param {boolean} [props.disabled=false] - Si el botón está deshabilitado
@param {(e: React.MouseEvent) => void} [props.onClick] - Función que se ejecuta al hacer clic
@param {ControlStyle} [props.buttonType=ControlStyle.PRIMARY] - Estilo del botón (PRIMARY o SECONDARY)
@param {ControlSize} [props.size=ControlSize.MD] - Tamaño del botón (XS, SM, MD o LG)
@returns {JSX.Element} Elemento button con estilos y comportamiento personalizados`,methods:[],displayName:"Button",props:{id:{required:!1,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"ReactEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"ReactEventHandler<HTMLButtonElement>"},description:""},buttonType:{required:!1,tsType:{name:"ControlStyle"},description:"",defaultValue:{value:"ControlStyle.PRIMARY",computed:!0}},size:{required:!1,tsType:{name:"ControlSize"},description:"",defaultValue:{value:"ControlSize.MD",computed:!0}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}},composes:["Omit"]};export{u as B};
