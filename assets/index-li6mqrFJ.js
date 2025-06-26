import{j as e}from"./jsx-runtime-D_zvdyIk.js";const o=({options:a,getCurrentPath:r})=>e.jsx("nav",{role:"navigation","aria-label":"Menú principal",children:e.jsx("div",{className:"grid-primary",children:a.map((n,i)=>e.jsx("div",{className:"size-3 padding-v-30",children:e.jsxs("button",{type:"button",className:"container-option",onClick:()=>r(n.path),role:"menuitem",tabIndex:0,"aria-label":n.name,children:[e.jsx("div",{className:"material-icons",children:n.icon}),e.jsx("hr",{}),e.jsx("span",{children:n.name})]})},i))})});o.__docgenInfo={description:`Componente Menu que proporciona una interfaz de navegación con íconos.
Permite mostrar opciones de navegación con íconos y manejar cambios de ruta.

@param {MenuProps} props - Propiedades del componente
@param {MenuOption[]} props.options - Lista de opciones del menú con path, icono y nombre
@param {(path: string) => void} props.getCurrentPath - Función que se ejecuta al seleccionar una opción
@returns {JSX.Element} Elemento nav con el menú de navegación`,methods:[],displayName:"Menu",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"MenuOption"}],raw:"MenuOption[]"},description:""},getCurrentPath:{required:!0,tsType:{name:"signature",type:"function",raw:"(path: string) => void",signature:{arguments:[{type:{name:"string"},name:"path"}],return:{name:"void"}}},description:""}}};export{o as M};
