import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{a as i,C as p}from"./constant-cm2ucuoM.js";const m=({id:t,title:a,disabled:e=!1,onClick:o,buttonType:n=i.PRIMARY,size:r=p.MD,className:l=""})=>s.jsx("button",{id:t,type:"button",disabled:e,onClick:o,className:`btn ${n.toLowerCase()} ${r.toLowerCase()} ${e?"disabled":""} ${l}`.trim(),"aria-disabled":e,children:a});m.__docgenInfo={description:`Componente Button que proporciona un botón estilizado y accesible.
Permite personalizar el estilo, tamaño y comportamiento del botón.

@param {ButtonProps} props - Propiedades del componente
@param {string} props.title - Texto que se mostrará en el botón (requerido)
@param {string} [props.id] - ID único para el botón
@param {boolean} [props.disabled=false] - Si el botón está deshabilitado
@param {(e: React.MouseEvent) => void} [props.onClick] - Función que se ejecuta al hacer clic
@param {'PRIMARY' | 'SECONDARY' | 'DANGER' | 'SUCCESS' | 'WARNING' | 'INFO'} [props.type='PRIMARY'] - Estilo del botón
@param {'SM' | 'MD' | 'LG'} [props.size='MD'] - Tamaño del botón
@returns {JSX.Element} Elemento button con estilos y comportamiento personalizados`,methods:[],displayName:"Button",props:{id:{required:!1,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"ReactEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"ReactEventHandler<HTMLButtonElement>"},description:""},buttonType:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"ControlStyle.PRIMARY",computed:!0}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xs'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xs'"}]},description:"",defaultValue:{value:"ControlSize.MD",computed:!0}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}},composes:["Omit"]};export{m as B};
