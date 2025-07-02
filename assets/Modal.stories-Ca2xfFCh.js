import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-D4lIrffr.js";const Q="_modalOverlay_11hnr_1",X="_visible_11hnr_17",Y="_modalContainer_11hnr_22",Z="_small_11hnr_38",ee="_medium_11hnr_41",oe="_large_11hnr_44",ae="_xlarge_11hnr_47",re="_modalHeader_11hnr_51",te="_closeButton_11hnr_66",ne="_modalContent_11hnr_89",le="_modalFooter_11hnr_100",se="_centered_11hnr_120",o={modalOverlay:Q,"modal-fade-in":"_modal-fade-in_11hnr_1",visible:X,modalContainer:Y,small:Z,medium:ee,large:oe,xlarge:ae,modalHeader:re,closeButton:te,modalContent:ne,modalFooter:le,centered:se},R=({isOpen:a,onClose:t,title:n,children:$,size:A="medium",showCloseButton:y=!0,closeButtonText:D="Cerrar",closeOnOverlayClick:H=!0,closeOnEsc:f=!0,className:G="",style:U,footer:h,centerVertically:K=!0,preventScroll:x=!0})=>{b.useEffect(()=>(a&&x?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[a,x]);const p=b.useCallback(g=>{g.key==="Escape"&&a&&f&&t()},[a,t,f]);b.useEffect(()=>(a&&document.addEventListener("keydown",p),()=>{document.removeEventListener("keydown",p)}),[a,p]);const J=g=>{g.stopPropagation(),H&&t()};return a?e.jsxs("div",{className:`${o.modalOverlay} ${a?o.visible:""} ${K?o.centered:""}`,role:"dialog","aria-modal":"true","aria-labelledby":n?"modal-title":void 0,children:[e.jsx("button",{type:"button",className:o.overlayButton,onClick:J,"aria-label":"Cerrar modal"}),e.jsxs("div",{className:`${o.modalContainer} ${o[A]} ${G}`,style:U,children:[(n||y)&&e.jsxs("div",{className:o.modalHeader,children:[n&&e.jsx("h2",{id:"modal-title",children:n}),y&&e.jsx("button",{type:"button",className:o.closeButton,onClick:t,"aria-label":D,children:"×"})]}),e.jsx("div",{className:o.modalContent,children:$}),h&&e.jsx("div",{className:o.modalFooter,children:h})]})]}):null};R.__docgenInfo={description:`Componente Modal que muestra contenido en una ventana emergente.
Soporta diferentes tamaños, cierre con tecla Escape y clic fuera del modal.`,methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:`Indica si el modal está abierto o cerrado
@default false`},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Función que se ejecuta cuando se cierra el modal"},title:{required:!1,tsType:{name:"string"},description:"Título del modal"},children:{required:!0,tsType:{name:"ReactNode"},description:"Contenido del modal"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | 'xlarge'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'xlarge'"}]},description:`Tamaño del modal
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:`Indica si se debe mostrar el botón de cerrar
@default true`,defaultValue:{value:"true",computed:!1}},closeButtonText:{required:!1,tsType:{name:"string"},description:"Texto personalizado para el botón de cerrar",defaultValue:{value:"'Cerrar'",computed:!1}},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:`Indica si el modal debe cerrarse al hacer clic fuera de él
@default true`,defaultValue:{value:"true",computed:!1}},closeOnEsc:{required:!1,tsType:{name:"boolean"},description:`Indica si el modal debe cerrarse al presionar la tecla Escape
@default true`,defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada para el contenedor del modal",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Estilos en línea para el contenedor del modal"},footer:{required:!1,tsType:{name:"ReactNode"},description:"Elemento que se renderiza en el pie del modal"},centerVertically:{required:!1,tsType:{name:"boolean"},description:`Indica si el modal debe centrarse verticalmente
@default true`,defaultValue:{value:"true",computed:!1}},preventScroll:{required:!1,tsType:{name:"boolean"},description:`Indica si el modal debe deshabilitar el scroll del body cuando está abierto
@default true`,defaultValue:{value:"true",computed:!1}}}};const r={isOpen:!0,onClose:()=>console.log("Modal cerrado"),title:"Título del Modal",children:e.jsxs("div",{children:[e.jsx("p",{children:"Este es el contenido principal del modal. Puedes colocar cualquier tipo de contenido aquí, incluyendo formularios, imágenes, texto, etc."}),e.jsx("p",{children:"El contenido se desplazará automáticamente si excede el tamaño máximo del modal."})]})},de={...r,title:"Modal con Pie de Página",footer:e.jsxs("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"flex-end"},children:[e.jsx("button",{type:"button",style:{padding:"0.5rem 1rem",borderRadius:"4px",border:"1px solid #ccc"},children:"Cancelar"}),e.jsx("button",{type:"button",style:{padding:"0.5rem 1rem",borderRadius:"4px",background:"#007bff",color:"white",border:"none"},children:"Guardar Cambios"})]})},ie={...r,title:"",showCloseButton:!1,children:"Este es un modal sin título y sin botón de cerrar. Debes proporcionar una forma de cerrarlo, como un botón personalizado en el contenido o en el pie de página."},ce={...r,title:"Modal Grande",size:"large",children:e.jsxs("div",{children:[e.jsx("p",{children:"Este es un modal con un tamaño personalizado (large)."}),e.jsx("p",{children:"Puedes elegir entre: small, medium, large o xlarge."})]})},me={...r,title:"Modal con Contenido Largo",children:e.jsx("div",{children:Array.from({length:10}).map((a,t)=>e.jsxs("p",{style:{marginBottom:"1rem"},children:["Párrafo de ejemplo ",t+1,". Este es un contenido largo para demostrar el desplazamiento dentro del modal. El contenido que exceda la altura máxima del modal generará una barra de desplazamiento."]},t))})},ue={...r,title:"Modal con Texto Personalizado",closeButtonText:"Cerrar Ventana",children:"Este modal tiene un texto personalizado para el botón de cierre."},be={title:"Components/Modal",component:R,tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"Indica si el modal está abierto o cerrado"},onClose:{action:"closed",description:"Función que se ejecuta cuando se cierra el modal"},title:{control:"text",description:"Título del modal"},size:{control:"select",options:["small","medium","large","xlarge"],description:"Tamaño del modal"},showCloseButton:{control:"boolean",description:"Indica si se muestra el botón de cerrar"},closeButtonText:{control:"text",description:"Texto personalizado para el botón de cerrar"},closeOnOverlayClick:{control:"boolean",description:"Indica si el modal se cierra al hacer clic fuera de él"},closeOnEsc:{control:"boolean",description:"Indica si el modal se cierra al presionar la tecla Escape"},centerVertically:{control:"boolean",description:"Indica si el modal debe centrarse verticalmente"},preventScroll:{control:"boolean",description:"Indica si se debe deshabilitar el scroll del body cuando el modal está abierto"}},args:r},l={args:r,parameters:{docs:{description:{story:"Modal estándar con título, contenido y botón de cerrar."}}}},s={args:de,parameters:{docs:{description:{story:"Modal con un pie de página personalizado que puede incluir botones de acción."}}}},d={args:ie,parameters:{docs:{description:{story:"Modal sin título ni botón de cerrar. Útil para contenido que maneja su propio cierre."}}}},i={args:ce,parameters:{docs:{description:{story:"Modal con un tamaño personalizado (small, medium, large, xlarge)."}}}},c={args:me,parameters:{docs:{description:{story:"Modal con contenido largo que genera desplazamiento vertical."}}}},m={args:ue,parameters:{docs:{description:{story:"Modal con texto personalizado para el botón de cerrar."}}}},u={args:{...r,title:"Modal Interactivo",children:"Usa los controles del panel de Storybook para modificar las propiedades del modal."},parameters:{docs:{description:{story:"Ejemplo interactivo donde puedes modificar las propiedades del modal usando los controles del panel de Storybook."}}}};var v,C,_;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: baseArgs,
  parameters: {
    docs: {
      description: {
        story: 'Modal estándar con título, contenido y botón de cerrar.'
      }
    }
  }
}`,...(_=(C=l.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var T,j,q;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: withFooter,
  parameters: {
    docs: {
      description: {
        story: 'Modal con un pie de página personalizado que puede incluir botones de acción.'
      }
    }
  }
}`,...(q=(j=s.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var z,M,E;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: withoutTitle,
  parameters: {
    docs: {
      description: {
        story: 'Modal sin título ni botón de cerrar. Útil para contenido que maneja su propio cierre.'
      }
    }
  }
}`,...(E=(M=d.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var S,w,I;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: withCustomSize,
  parameters: {
    docs: {
      description: {
        story: 'Modal con un tamaño personalizado (small, medium, large, xlarge).'
      }
    }
  }
}`,...(I=(w=i.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var k,B,N;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: withLongContent,
  parameters: {
    docs: {
      description: {
        story: 'Modal con contenido largo que genera desplazamiento vertical.'
      }
    }
  }
}`,...(N=(B=c.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var V,F,W;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: withCustomCloseText,
  parameters: {
    docs: {
      description: {
        story: 'Modal con texto personalizado para el botón de cerrar.'
      }
    }
  }
}`,...(W=(F=m.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var P,L,O;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(O=(L=u.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const ye=["Default","WithFooter","WithoutTitle","WithCustomSize","WithLongContent","WithCustomCloseText","Interactive"];export{l as Default,u as Interactive,m as WithCustomCloseText,i as WithCustomSize,s as WithFooter,c as WithLongContent,d as WithoutTitle,ye as __namedExportsOrder,be as default};
