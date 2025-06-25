import{j as a}from"./jsx-runtime-D_zvdyIk.js";const l=["add","search","edit","delete","info"],r=({name:e,size:n="MD"})=>l.includes(e)?a.jsx("div",{className:`container-icon ${n.toLowerCase()}`,role:"img","aria-label":e,children:a.jsx("div",{className:"material-icons",children:e})}):null;r.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"union",raw:`| 'add'      // Ícono de agregar
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
| 'close'`,elements:[{name:"literal",value:"'add'"},{name:"literal",value:"'remove'"},{name:"literal",value:"'edit'"},{name:"literal",value:"'delete'"},{name:"literal",value:"'search'"},{name:"literal",value:"'save'"},{name:"literal",value:"'cancel'"},{name:"literal",value:"'check'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'help'"},{name:"literal",value:"'close'"}]},description:`Nombre del ícono a mostrar
@required`},size:{required:!1,tsType:{name:"union",raw:"'SM' | 'MD' | 'LG'",elements:[{name:"literal",value:"'SM'"},{name:"literal",value:"'MD'"},{name:"literal",value:"'LG'"}]},description:`Tamaño del ícono
@default 'MD'`,defaultValue:{value:"'MD'",computed:!1}}}};export{r as I};
