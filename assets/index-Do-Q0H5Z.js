import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-D4lIrffr.js";import{b as t}from"./enums-Ca2RdD1G.js";const o=b.forwardRef(({id:n,name:l,label:i,disabled:e=!1,required:s=!1,readOnly:p=!1,value:r,eventChange:d,...u},m)=>{const c=()=>e?t.DISABLED:p?t.READ_ONLY:s&&!r?t.REQUIRED:"";return a.jsxs("div",{className:`radiobutton ${c()}`,children:[a.jsx("input",{type:"radio",id:n,name:l,required:s&&!e,disabled:e,value:r,checked:n===r,onChange:f=>{!p&&d&&d(f)},ref:m,"aria-label":i,"aria-disabled":e,...u}),a.jsx("label",{htmlFor:n,children:i})]})});o.displayName="RadioButton";const q=o;o.__docgenInfo={description:`Componente RadioButton que proporciona un botón de radio con múltiples opciones de configuración.
Permite crear grupos de botones de radio personalizados con diferentes estados.

@param {RadioButtonProps} props - Propiedades del componente
@param {string} props.id - ID único para el botón de radio (requerido)
@param {string} props.name - Nombre del grupo de botones de radio (requerido)
@param {string} props.label - Texto de la etiqueta del botón (requerido)
@param {boolean} [props.disabled=false] - Si el botón está deshabilitado
@param {boolean} [props.required=false] - Si el botón es requerido
@param {boolean} [props.readOnly=false] - Si el botón es de solo lectura
@param {string} props.value - Valor del botón (requerido)
@param {(e: React.ChangeEvent<HTMLInputElement>) => void} [props.eventChange] - Evento de cambio
@param {Ref<HTMLInputElement>} [props.ref] - Referencia al elemento input
@returns {JSX.Element} Elemento radio button con configuración personalizada`,methods:[],displayName:"RadioButton",props:{id:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!0,tsType:{name:"string"},description:""},eventChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},ref:{required:!1,tsType:{name:"RefObject",elements:[{name:"HTMLInputElement"}],raw:"RefObject<HTMLInputElement>"},description:""}}};export{q as T};
