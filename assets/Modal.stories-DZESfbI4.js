import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-D4lIrffr.js";import{C as n}from"./types-D2sN4igU.js";const X="_modalOverlay_11hnr_1",Y="_visible_11hnr_17",Z="_modalContainer_11hnr_22",ee="_small_11hnr_38",oe="_medium_11hnr_41",ae="_large_11hnr_44",re="_xlarge_11hnr_47",te="_modalHeader_11hnr_51",ne="_closeButton_11hnr_66",se="_modalContent_11hnr_89",le="_modalFooter_11hnr_100",de="_centered_11hnr_120",o={modalOverlay:X,"modal-fade-in":"_modal-fade-in_11hnr_1",visible:Y,modalContainer:Z,small:ee,medium:oe,large:ae,xlarge:re,modalHeader:te,closeButton:ne,modalContent:se,modalFooter:le,centered:de},D=({isOpen:a,onClose:t,title:s,children:$,size:A=n.MEDIUM,showCloseButton:g=!0,closeButtonText:U="Cerrar",closeOnOverlayClick:H=!0,closeOnEsc:h=!0,className:G="",style:K,footer:x,centerVertically:J=!0,preventScroll:v=!0})=>{f.useEffect(()=>(a&&v?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[a,v]);const b=f.useCallback(y=>{y.key==="Escape"&&a&&h&&t()},[a,t,h]);f.useEffect(()=>(a&&document.addEventListener("keydown",b),()=>{document.removeEventListener("keydown",b)}),[a,b]);const Q=y=>{y.stopPropagation(),H&&t()};return a?e.jsxs("div",{className:`${o.modalOverlay} ${a?o.visible:""} ${J?o.centered:""}`,role:"dialog","aria-modal":"true","aria-labelledby":s?"modal-title":void 0,children:[e.jsx("button",{type:"button",className:o.overlayButton,onClick:Q,"aria-label":"Cerrar modal"}),e.jsxs("div",{className:`${o.modalContainer} ${o[A]} ${G}`,style:K,children:[(s||g)&&e.jsxs("div",{className:o.modalHeader,children:[s&&e.jsx("h2",{id:"modal-title",children:s}),g&&e.jsx("button",{type:"button",className:o.closeButton,onClick:t,"aria-label":U,children:"×"})]}),e.jsx("div",{className:o.modalContent,children:$}),x&&e.jsx("div",{className:o.modalFooter,children:x})]})]}):null};D.__docgenInfo={description:`Componente Modal que muestra contenido en una ventana emergente.
Soporta diferentes tamaños, cierre con tecla Escape y clic fuera del modal.`,methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:`Indica si el modal está abierto o cerrado
@default false`},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Función que se ejecuta cuando se cierra el modal"},title:{required:!1,tsType:{name:"string"},description:"Título del modal"},children:{required:!0,tsType:{name:"ReactNode"},description:"Contenido del modal"},size:{required:!1,tsType:{name:"ComponentSize"},description:`Tamaño del modal
@default 'medium'`,defaultValue:{value:"ComponentSize.MEDIUM",computed:!0}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:`Indica si se debe mostrar el botón de cerrar
@default true`,defaultValue:{value:"true",computed:!1}},closeButtonText:{required:!1,tsType:{name:"string"},description:"Texto personalizado para el botón de cerrar",defaultValue:{value:"'Cerrar'",computed:!1}},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:`Indica si el modal debe cerrarse al hacer clic fuera de él
@default true`,defaultValue:{value:"true",computed:!1}},closeOnEsc:{required:!1,tsType:{name:"boolean"},description:`Indica si el modal debe cerrarse al presionar la tecla Escape
@default true`,defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada para el contenedor del modal",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Estilos en línea para el contenedor del modal"},footer:{required:!1,tsType:{name:"ReactNode"},description:"Elemento que se renderiza en el pie del modal"},centerVertically:{required:!1,tsType:{name:"boolean"},description:`Indica si el modal debe centrarse verticalmente
@default true`,defaultValue:{value:"true",computed:!1}},preventScroll:{required:!1,tsType:{name:"boolean"},description:`Indica si el modal debe deshabilitar el scroll del body cuando está abierto
@default true`,defaultValue:{value:"true",computed:!1}}}};const r={isOpen:!0,onClose:()=>console.log("Modal cerrado"),title:"Título del Modal",children:e.jsxs("div",{children:[e.jsx("p",{children:"Este es el contenido principal del modal. Puedes colocar cualquier tipo de contenido aquí, incluyendo formularios, imágenes, texto, etc."}),e.jsx("p",{children:"El contenido se desplazará automáticamente si excede el tamaño máximo del modal."})]})},ie={...r,title:"Modal con Pie de Página",footer:e.jsxs("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"flex-end"},children:[e.jsx("button",{type:"button",style:{padding:"0.5rem 1rem",borderRadius:"4px",border:"1px solid #ccc"},children:"Cancelar"}),e.jsx("button",{type:"button",style:{padding:"0.5rem 1rem",borderRadius:"4px",background:"#007bff",color:"white",border:"none"},children:"Guardar Cambios"})]})},ce={...r,title:"",showCloseButton:!1,children:"Este es un modal sin título y sin botón de cerrar. Debes proporcionar una forma de cerrarlo, como un botón personalizado en el contenido o en el pie de página."},me={...r,title:"Modal Grande",size:n.LARGE,children:e.jsxs("div",{children:[e.jsx("p",{children:"Este es un modal con un tamaño personalizado (large)."}),e.jsx("p",{children:"Puedes elegir entre: small, medium, large o xlarge."})]})},ue={...r,title:"Modal con Contenido Largo",children:e.jsx("div",{children:Array.from({length:10}).map((a,t)=>e.jsxs("p",{style:{marginBottom:"1rem"},children:["Párrafo de ejemplo ",t+1,". Este es un contenido largo para demostrar el desplazamiento dentro del modal. El contenido que exceda la altura máxima del modal generará una barra de desplazamiento."]},t))})},pe={...r,title:"Modal con Texto Personalizado",closeButtonText:"Cerrar Ventana",children:"Este modal tiene un texto personalizado para el botón de cierre."},ge={title:"Components/Modal",component:D,tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"Indica si el modal está abierto o cerrado"},onClose:{action:"closed",description:"Función que se ejecuta cuando se cierra el modal"},title:{control:"text",description:"Título del modal"},size:{control:"select",options:Object.values(n),description:"Tamaño",table:{type:{summary:Object.values(n).join(" | ")},defaultValue:{summary:n.MEDIUM}}},showCloseButton:{control:"boolean",description:"Indica si se muestra el botón de cerrar"},closeButtonText:{control:"text",description:"Texto personalizado para el botón de cerrar"},closeOnOverlayClick:{control:"boolean",description:"Indica si el modal se cierra al hacer clic fuera de él"},closeOnEsc:{control:"boolean",description:"Indica si el modal se cierra al presionar la tecla Escape"},centerVertically:{control:"boolean",description:"Indica si el modal debe centrarse verticalmente"},preventScroll:{control:"boolean",description:"Indica si se debe deshabilitar el scroll del body cuando el modal está abierto"}},args:r},l={args:r,parameters:{docs:{description:{story:"Modal estándar con título, contenido y botón de cerrar."}}}},d={args:ie,parameters:{docs:{description:{story:"Modal con un pie de página personalizado que puede incluir botones de acción."}}}},i={args:ce,parameters:{docs:{description:{story:"Modal sin título ni botón de cerrar. Útil para contenido que maneja su propio cierre."}}}},c={args:me,parameters:{docs:{description:{story:"Modal con un tamaño personalizado (small, medium, large, xlarge)."}}}},m={args:ue,parameters:{docs:{description:{story:"Modal con contenido largo que genera desplazamiento vertical."}}}},u={args:pe,parameters:{docs:{description:{story:"Modal con texto personalizado para el botón de cerrar."}}}},p={args:{...r,title:"Modal Interactivo",children:"Usa los controles del panel de Storybook para modificar las propiedades del modal."},parameters:{docs:{description:{story:"Ejemplo interactivo donde puedes modificar las propiedades del modal usando los controles del panel de Storybook."}}}};var C,_,T;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: baseArgs,
  parameters: {
    docs: {
      description: {
        story: 'Modal estándar con título, contenido y botón de cerrar.'
      }
    }
  }
}`,...(T=(_=l.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var j,M,z;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: withFooter,
  parameters: {
    docs: {
      description: {
        story: 'Modal con un pie de página personalizado que puede incluir botones de acción.'
      }
    }
  }
}`,...(z=(M=d.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var q,E,S;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: withoutTitle,
  parameters: {
    docs: {
      description: {
        story: 'Modal sin título ni botón de cerrar. Útil para contenido que maneja su propio cierre.'
      }
    }
  }
}`,...(S=(E=i.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var w,I,k;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: withCustomSize,
  parameters: {
    docs: {
      description: {
        story: 'Modal con un tamaño personalizado (small, medium, large, xlarge).'
      }
    }
  }
}`,...(k=(I=c.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var V,B,N;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: withLongContent,
  parameters: {
    docs: {
      description: {
        story: 'Modal con contenido largo que genera desplazamiento vertical.'
      }
    }
  }
}`,...(N=(B=m.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var F,W,O;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: withCustomCloseText,
  parameters: {
    docs: {
      description: {
        story: 'Modal con texto personalizado para el botón de cerrar.'
      }
    }
  }
}`,...(O=(W=u.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var P,L,R;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    title: 'Modal Interactivo',
    children: 'Usa los controles del panel de Storybook para modificar las propiedades del modal.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo interactivo donde puedes modificar las propiedades del modal usando los controles del panel de Storybook.'
      }
    }
  }
}`,...(R=(L=p.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const he=["Default","WithFooter","WithoutTitle","WithCustomSize","WithLongContent","WithCustomCloseText","Interactive"];export{l as Default,p as Interactive,u as WithCustomCloseText,c as WithCustomSize,d as WithFooter,m as WithLongContent,i as WithoutTitle,he as __namedExportsOrder,ge as default};
