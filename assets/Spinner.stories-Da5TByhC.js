import{j as s}from"./jsx-runtime-D_zvdyIk.js";const a=({show:o})=>s.jsx("div",{className:`container-load${o?"":" hidden"}`,"data-testid":"spinner-container",children:o&&s.jsx("div",{className:"loading",role:"status","aria-label":"Cargando..."})});a.displayName="Spinner";a.__docgenInfo={description:`Componente Spinner que muestra un indicador de carga.
Este componente proporciona una animación visual para indicar que algo está cargando.

@param {SpinnerProps} props - Propiedades del componente
@param {boolean} props.show - Si el spinner debe mostrarse o no
@returns {JSX.Element} Elemento que muestra o no el spinner de carga`,methods:[],displayName:"Spinner",props:{show:{required:!0,tsType:{name:"boolean"},description:`Controla si el spinner es visible o no
@default false`}}};const m={title:"Controls/Spinner",component:a,tags:["autodocs","controls"],parameters:{componentSubtitle:"Componente de carga",docs:{description:{component:"Un indicador visual que muestra que se está realizando una operación de carga."}}},argTypes:{show:{description:"Controla si el spinner es visible o no",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},e={args:{show:!0}},n={args:{show:!1},parameters:{docs:{description:{story:"El spinner no se muestra cuando la propiedad `show` es falsa."}}}};var r,t,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    show: true
  }
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var p,d,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    show: false
  },
  parameters: {
    docs: {
      description: {
        story: 'El spinner no se muestra cuando la propiedad \`show\` es falsa.'
      }
    }
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const u=["Default","Hidden"];export{e as Default,n as Hidden,u as __namedExportsOrder,m as default};
