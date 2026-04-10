import{r as e,t}from"./iframe-YpqvHZo3.js";import{t as n}from"./jsx-runtime-ChNUh70B.js";import{t as r}from"./types-BTwUNDvM.js";var i=e(t(),1),a=`_modalOverlay_11hnr_1`,o=`_visible_11hnr_17`,s=`_modalContainer_11hnr_22`,c=`_small_11hnr_38`,l=`_medium_11hnr_41`,u=`_large_11hnr_44`,d=`_xlarge_11hnr_47`,f=`_modalHeader_11hnr_51`,p=`_closeButton_11hnr_66`,m=`_modalContent_11hnr_89`,h=`_modalFooter_11hnr_100`,g=`_centered_11hnr_120`,_={modalOverlay:a,"modal-fade-in":`_modal-fade-in_11hnr_1`,visible:o,modalContainer:s,small:c,medium:l,large:u,xlarge:d,modalHeader:f,closeButton:p,modalContent:m,modalFooter:h,centered:g},v=n(),y=({isOpen:e,onClose:t,title:n,children:a,size:o=r.MEDIUM,showCloseButton:s=!0,closeButtonText:c=`Cerrar`,closeOnOverlayClick:l=!0,closeOnEsc:u=!0,className:d=``,style:f,footer:p,centerVertically:m=!0,preventScroll:h=!0})=>{(0,i.useEffect)(()=>(e&&h?document.body.style.overflow=`hidden`:document.body.style.overflow=`unset`,()=>{document.body.style.overflow=`unset`}),[e,h]);let g=(0,i.useCallback)(n=>{n.key===`Escape`&&e&&u&&t()},[e,t,u]);(0,i.useEffect)(()=>(e&&document.addEventListener(`keydown`,g),()=>{document.removeEventListener(`keydown`,g)}),[e,g]);let y=e=>{e.stopPropagation(),l&&t()};return e?(0,v.jsxs)(`div`,{className:`${_.modalOverlay} ${e?_.visible:``} ${m?_.centered:``}`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":n?`modal-title`:void 0,children:[(0,v.jsx)(`button`,{type:`button`,className:_.overlayButton,onClick:y,"aria-label":`Cerrar modal`}),(0,v.jsxs)(`div`,{className:`${_.modalContainer} ${_[o]} ${d}`,style:f,children:[(n||s)&&(0,v.jsxs)(`div`,{className:_.modalHeader,children:[n&&(0,v.jsx)(`h2`,{id:`modal-title`,children:n}),s&&(0,v.jsx)(`button`,{type:`button`,className:_.closeButton,onClick:t,"aria-label":c,children:`×`})]}),(0,v.jsx)(`div`,{className:_.modalContent,children:a}),p&&(0,v.jsx)(`div`,{className:_.modalFooter,children:p})]})]}):null};y.__docgenInfo={description:`Componente Modal que muestra contenido en una ventana emergente.\r
Soporta diferentes tamaños, cierre con tecla Escape y clic fuera del modal.`,methods:[],displayName:`Modal`,props:{isOpen:{required:!0,tsType:{name:`boolean`},description:`Indica si el modal está abierto o cerrado\r
@default false`},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Función que se ejecuta cuando se cierra el modal`},title:{required:!1,tsType:{name:`string`},description:`Título del modal`},children:{required:!0,tsType:{name:`ReactNode`},description:`Contenido del modal`},size:{required:!1,tsType:{name:`ComponentSize`},description:`Tamaño del modal\r
@default 'medium'`,defaultValue:{value:`ComponentSize.MEDIUM`,computed:!0}},showCloseButton:{required:!1,tsType:{name:`boolean`},description:`Indica si se debe mostrar el botón de cerrar\r
@default true`,defaultValue:{value:`true`,computed:!1}},closeButtonText:{required:!1,tsType:{name:`string`},description:`Texto personalizado para el botón de cerrar`,defaultValue:{value:`'Cerrar'`,computed:!1}},closeOnOverlayClick:{required:!1,tsType:{name:`boolean`},description:`Indica si el modal debe cerrarse al hacer clic fuera de él\r
@default true`,defaultValue:{value:`true`,computed:!1}},closeOnEsc:{required:!1,tsType:{name:`boolean`},description:`Indica si el modal debe cerrarse al presionar la tecla Escape\r
@default true`,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Clase CSS personalizada para el contenedor del modal`,defaultValue:{value:`''`,computed:!1}},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:`Estilos en línea para el contenedor del modal`},footer:{required:!1,tsType:{name:`ReactNode`},description:`Elemento que se renderiza en el pie del modal`},centerVertically:{required:!1,tsType:{name:`boolean`},description:`Indica si el modal debe centrarse verticalmente\r
@default true`,defaultValue:{value:`true`,computed:!1}},preventScroll:{required:!1,tsType:{name:`boolean`},description:`Indica si el modal debe deshabilitar el scroll del body cuando está abierto\r
@default true`,defaultValue:{value:`true`,computed:!1}}}};var b={isOpen:!0,onClose:()=>console.log(`Modal cerrado`),title:`Título del Modal`,children:(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{children:`Este es el contenido principal del modal. Puedes colocar cualquier tipo de contenido aquí, incluyendo formularios, imágenes, texto, etc.`}),(0,v.jsx)(`p`,{children:`El contenido se desplazará automáticamente si excede el tamaño máximo del modal.`})]})},x={...b,title:`Modal con Pie de Página`,footer:(0,v.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,justifyContent:`flex-end`},children:[(0,v.jsx)(`button`,{type:`button`,style:{padding:`0.5rem 1rem`,borderRadius:`4px`,border:`1px solid #ccc`},children:`Cancelar`}),(0,v.jsx)(`button`,{type:`button`,style:{padding:`0.5rem 1rem`,borderRadius:`4px`,background:`#007bff`,color:`white`,border:`none`},children:`Guardar Cambios`})]})},S={...b,title:``,showCloseButton:!1,children:`Este es un modal sin título y sin botón de cerrar. Debes proporcionar una forma de cerrarlo, como un botón personalizado en el contenido o en el pie de página.`},C={...b,title:`Modal Grande`,size:r.LARGE,children:(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{children:`Este es un modal con un tamaño personalizado (large).`}),(0,v.jsx)(`p`,{children:`Puedes elegir entre: small, medium, large o xlarge.`})]})},w={...b,title:`Modal con Contenido Largo`,children:(0,v.jsx)(`div`,{children:Array.from({length:10}).map((e,t)=>(0,v.jsxs)(`p`,{style:{marginBottom:`1rem`},children:[`Párrafo de ejemplo `,t+1,`. Este es un contenido largo para demostrar el desplazamiento dentro del modal. El contenido que exceda la altura máxima del modal generará una barra de desplazamiento.`]},t))})},T={...b,title:`Modal con Texto Personalizado`,closeButtonText:`Cerrar Ventana`,children:`Este modal tiene un texto personalizado para el botón de cierre.`},E={title:`Components/Modal`,component:y,tags:[`autodocs`],argTypes:{isOpen:{control:`boolean`,description:`Controls whether the modal is visible.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onClose:{action:`closed`,description:`Callback fired when the modal requests to be closed.`,table:{type:{summary:`() => void`}}},title:{control:`text`,description:`Heading text displayed at the top of the modal.`,table:{type:{summary:`string`}}},size:{control:`select`,options:Object.values(r),description:`Controls the maximum width of the modal dialog.`,table:{type:{summary:Object.values(r).join(` | `)},defaultValue:{summary:r.MEDIUM}}},showCloseButton:{control:`boolean`,description:`When true, renders a close button in the modal header.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},closeButtonText:{control:`text`,description:`Custom label for the close button.`,table:{type:{summary:`string`},defaultValue:{summary:`Close`}}},closeOnOverlayClick:{control:`boolean`,description:`When true, clicking outside the modal closes it.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},closeOnEsc:{control:`boolean`,description:`When true, pressing the Escape key closes the modal.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},centerVertically:{control:`boolean`,description:`When true, the modal is vertically centered in the viewport.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},preventScroll:{control:`boolean`,description:`When true, disables body scrolling while the modal is open.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},children:{control:`text`,description:`Main content rendered inside the modal body.`,table:{type:{summary:`ReactNode`}}},footer:{control:!1,description:`Optional content rendered in the modal footer (e.g. action buttons).`,table:{type:{summary:`ReactNode`}}}},parameters:{docs:{description:{component:`A dialog overlay component that renders content in a layer above the page. Supports configurable size, close behaviors, optional action footer, and focus trapping for accessibility.`}}},args:b},D={args:b,parameters:{docs:{description:{story:`Modal estándar con título, contenido y botón de cerrar.`}}}},O={args:x,parameters:{docs:{description:{story:`Modal con un pie de página personalizado que puede incluir botones de acción.`}}}},k={args:S,parameters:{docs:{description:{story:`Modal sin título ni botón de cerrar. Útil para contenido que maneja su propio cierre.`}}}},A={args:C,parameters:{docs:{description:{story:`Modal con un tamaño personalizado (small, medium, large, xlarge).`}}}},j={args:w,parameters:{docs:{description:{story:`Modal con contenido largo que genera desplazamiento vertical.`}}}},M={args:T,parameters:{docs:{description:{story:`Modal con texto personalizado para el botón de cerrar.`}}}},N={args:{...b,title:`Modal Interactivo`,children:`Usa los controles del panel de Storybook para modificar las propiedades del modal.`},parameters:{docs:{description:{story:`Ejemplo interactivo donde puedes modificar las propiedades del modal usando los controles del panel de Storybook.`}}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: baseArgs,
  parameters: {
    docs: {
      description: {
        story: 'Modal estándar con título, contenido y botón de cerrar.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: withFooter,
  parameters: {
    docs: {
      description: {
        story: 'Modal con un pie de página personalizado que puede incluir botones de acción.'
      }
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: withoutTitle,
  parameters: {
    docs: {
      description: {
        story: 'Modal sin título ni botón de cerrar. Útil para contenido que maneja su propio cierre.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: withCustomSize,
  parameters: {
    docs: {
      description: {
        story: 'Modal con un tamaño personalizado (small, medium, large, xlarge).'
      }
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: withLongContent,
  parameters: {
    docs: {
      description: {
        story: 'Modal con contenido largo que genera desplazamiento vertical.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: withCustomCloseText,
  parameters: {
    docs: {
      description: {
        story: 'Modal con texto personalizado para el botón de cerrar.'
      }
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};var P=[`Default`,`WithFooter`,`WithoutTitle`,`WithCustomSize`,`WithLongContent`,`WithCustomCloseText`,`Interactive`];export{D as Default,N as Interactive,M as WithCustomCloseText,A as WithCustomSize,O as WithFooter,j as WithLongContent,k as WithoutTitle,P as __namedExportsOrder,E as default};