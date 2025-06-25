import{j as s}from"./jsx-runtime-D_zvdyIk.js";const i=({id:t,title:n,disabled:e=!1,onClick:a,type:o="PRIMARY",size:l="MD"})=>s.jsx("button",{id:t,className:`${o.toLowerCase()} ${l.toLowerCase()}`,type:a?"button":"submit",onClick:r=>{!e&&a&&a(r)},disabled:e,"aria-disabled":e,children:n});i.__docgenInfo={description:`Componente Button que proporciona un botón estilizado y accesible.
Permite personalizar el estilo, tamaño y comportamiento del botón.

@param {ButtonProps} props - Propiedades del componente
@param {string} props.title - Texto que se mostrará en el botón (requerido)
@param {string} [props.id] - ID único para el botón
@param {boolean} [props.disabled=false] - Si el botón está deshabilitado
@param {(e: React.MouseEvent) => void} [props.onClick] - Función que se ejecuta al hacer clic
@param {'PRIMARY' | 'SECONDARY' | 'DANGER' | 'SUCCESS' | 'WARNING' | 'INFO'} [props.type='PRIMARY'] - Estilo del botón
@param {'SM' | 'MD' | 'LG'} [props.size='MD'] - Tamaño del botón
@returns {JSX.Element} Elemento button con estilos y comportamiento personalizados`,methods:[],displayName:"Button",props:{id:{required:!1,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"ReactEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"ReactEventHandler<HTMLButtonElement>"},description:""},type:{required:!1,tsType:{name:"union",raw:"'PRIMARY' | 'SECONDARY' | 'DANGER' | 'SUCCESS' | 'WARNING' | 'INFO'",elements:[{name:"literal",value:"'PRIMARY'"},{name:"literal",value:"'SECONDARY'"},{name:"literal",value:"'DANGER'"},{name:"literal",value:"'SUCCESS'"},{name:"literal",value:"'WARNING'"},{name:"literal",value:"'INFO'"}]},description:"",defaultValue:{value:"'PRIMARY'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'SM' | 'MD' | 'LG'",elements:[{name:"literal",value:"'SM'"},{name:"literal",value:"'MD'"},{name:"literal",value:"'LG'"}]},description:"",defaultValue:{value:"'MD'",computed:!1}}}};export{i as B};
