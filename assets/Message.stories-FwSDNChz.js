import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u,R as $}from"./index-D4lIrffr.js";import{c as G}from"./index-_oZgBBUR.js";import{b as g}from"./index-kIl7L5_b.js";const J="_message_1pdmn_1",K="_messageContent_1pdmn_19",Q="_messageIcon_1pdmn_30",X="_messageBody_1pdmn_45",Y="_messageBodyTitle_1pdmn_49",Z="_messageBodyText_1pdmn_56",ee="_messageTitle_1pdmn_74",se="_messageText_1pdmn_80",ae="_messageCloseButton_1pdmn_86",ne="_closable_1pdmn_196",a={message:J,messageContent:K,messageIcon:Q,messageBody:X,messageBodyTitle:Y,messageBodyText:Z,messageTitle:ee,messageText:se,messageCloseButton:ae,"message-success":"_message-success_1pdmn_120","message-info":"_message-info_1pdmn_139","message-warning":"_message-warning_1pdmn_158","message-danger":"_message-danger_1pdmn_177",closable:ne,"message-enter":"_message-enter_1pdmn_216","message-enter-active":"_message-enter-active_1pdmn_220","message-exit":"_message-exit_1pdmn_225","message-exit-active":"_message-exit-active_1pdmn_229"},n=({type:s="info",title:l,children:c,className:q,style:D,closable:m=!1,onClose:d,role:H,"data-testid":P="message",...V})=>{const[W,A]=u.useState(!0),p=H||(s==="warning"||s==="danger"?"alert":"status"),L={success:"check-circle",info:"info-circle",warning:"exclamation-triangle",danger:"times-circle"},O=u.useCallback(U=>{U.preventDefault(),A(!1),d&&d()},[d]);if(!W)return null;const F=G(a.message,{[a[`message-${s}`]]:s,[a.closable]:m},q);return e.jsx("div",{className:F,style:D,role:p,"aria-live":p==="alert"?"assertive":"polite","data-testid":P,...V,children:e.jsxs("div",{className:a.messageContent,children:[e.jsx("div",{className:a.messageIcon,children:e.jsx(g,{name:L[s],"aria-hidden":"true"})}),e.jsxs("div",{className:a.messageBody,children:[l&&e.jsx("strong",{className:a.messageTitle,"data-testid":"message-title",children:l}),e.jsx("div",{className:a.messageText,"data-testid":"message-content",children:c})]}),m&&e.jsx("button",{type:"button",className:a.closeButton,onClick:O,"aria-label":"Cerrar mensaje","data-testid":"message-close-button",children:e.jsx(g,{name:"times","aria-hidden":"true"})})]})})};n.__docgenInfo={description:`Componente Message

Muestra un mensaje con diferentes estilos según su tipo (éxito, info, advertencia, peligro).
Soporta títulos, cierre opcional, y es completamente accesible.`,methods:[],displayName:"Message",props:{type:{required:!1,tsType:{name:"union",raw:"'success' | 'info' | 'warning' | 'danger'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:`Tipo de mensaje a mostrar
@default 'info'`,defaultValue:{value:"'info'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:`Título del mensaje (opcional)
Si se proporciona, se muestra en negrita al principio del mensaje`},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Contenido principal del mensaje"},closable:{required:!1,tsType:{name:"boolean"},description:`Indica si el mensaje puede ser cerrado por el usuario
@default false`,defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Función que se ejecuta cuando el usuario cierra el mensaje\nSolo se usa si `closable` es `true`"},role:{required:!1,tsType:{name:"union",raw:"'alert' | 'status' | 'alertdialog'",elements:[{name:"literal",value:"'alert'"},{name:"literal",value:"'status'"},{name:"literal",value:"'alertdialog'"}]},description:`Rol ARIA para accesibilidad
@default 'status' para info/success, 'alert' para warning/error`},"data-testid":{required:!1,tsType:{name:"string"},description:"ID único para propósitos de prueba",defaultValue:{value:"'message'",computed:!1}}}};const oe=[{type:"success",title:"¡Operación exitosa!",content:"Los cambios se han guardado correctamente."},{type:"info",title:"Información importante",content:"Este es un mensaje informativo para el usuario."},{type:"warning",title:"Advertencia",content:"Esta acción no se puede deshacer."},{type:"danger",title:"Error",content:"Ha ocurrido un error al procesar la solicitud."}];jest.fn();jest.fn(),$.Fragment;const de={title:"Static/Message",component:n,tags:["autodocs"],args:{type:"info",children:"Mensaje de ejemplo",title:"Título del mensaje",closable:!1,"data-testid":"message-story"},argTypes:{type:{control:"select",options:["success","info","warning","danger"],description:"Tipo de mensaje a mostrar",table:{type:{summary:"string"},defaultValue:{summary:"info"}}},title:{control:"text",description:"Título opcional del mensaje",table:{type:{summary:"string"}}},children:{control:"text",description:"Contenido principal del mensaje",table:{type:{summary:"ReactNode"}}},closable:{control:"boolean",description:"Indica si el mensaje puede ser cerrado",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onClose:{action:"closed",description:"Función que se ejecuta al cerrar el mensaje",table:{type:{summary:"() => void"}}},className:{control:"text",description:"Clase CSS personalizada",table:{type:{summary:"string"}}},style:{control:"object",description:"Estilos en línea",table:{type:{summary:"CSSProperties"}}}},parameters:{layout:"padded",docs:{description:{component:"Un componente que muestra mensajes de estado (éxito, información, advertencia y peligro) para proporcionar retroalimentación visual clara a los usuarios. Incluye soporte para iconos, cierre opcional y es completamente accesible."}}}},o={args:{type:"info",children:"Mensaje de ejemplo",title:"Título del mensaje",closable:!1,"data-testid":"message-story"},parameters:{docs:{description:{story:'Mensaje básico con la configuración por defecto. Por defecto es de tipo "info".'}}}},t={render:()=>e.jsx("div",{style:{display:"grid",gap:"1.5rem",maxWidth:"800px",margin:"0 auto"},children:oe.map(({type:s,title:l,content:c})=>e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#333"},children:s.charAt(0).toUpperCase()+s.slice(1)}),e.jsx(n,{type:s,title:l,style:{marginBottom:"1rem"},children:c}),e.jsxs(n,{type:s,closable:!0,onClose:()=>console.log(`Mensaje ${s} cerrado`),children:[c," (cerrable)"]})]},s))}),parameters:{docs:{description:{story:"Ejemplos de los diferentes tipos de mensajes disponibles, incluyendo versiones cerrables de cada uno."}}}},r={render:()=>e.jsxs("div",{style:{display:"grid",gap:"1.5rem",maxWidth:"800px",margin:"0 auto"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#333"},children:"Mensaje con enlace personalizado"}),e.jsxs(n,{type:"success",title:"¡Operación exitosa!",style:{marginBottom:"1rem"},children:["El proceso se ha completado correctamente. Puedes ver los resultados en la sección de ",e.jsx("button",{onClick:()=>{console.log("Navegando a la sección de informes")},style:{background:"none",border:"none",color:"inherit",textDecoration:"underline",padding:0,font:"inherit",cursor:"pointer",outline:"inherit",fontWeight:"bold"},children:"informes"}),"."]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#333"},children:"Mensaje con contenido personalizado"}),e.jsx(n,{type:"info",title:"Nueva característica disponible",closable:!0,onClose:()=>console.log("Mensaje de característica cerrado"),children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("span",{children:"🎉"}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 0.5rem 0"},children:"Hemos mejorado la interfaz de usuario."}),e.jsx("p",{style:{margin:0},children:"¡Descubre las novedades en el panel de control!"})]})]})})]})]}),parameters:{docs:{description:{story:"Ejemplos de mensajes con contenido HTML personalizado y estilos adicionales."}}}},i={args:{type:"info",children:"Este es un mensaje sin título. Útil para mensajes cortos y directos.",title:void 0,closable:!1,"data-testid":"message-story"},parameters:{docs:{description:{story:"Ejemplo de un mensaje sin título, mostrando solo el contenido."}}}};var y,j,f,h,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: 'info',
    children: 'Mensaje de ejemplo',
    title: 'Título del mensaje',
    closable: false,
    'data-testid': 'message-story'
  },
  parameters: {
    docs: {
      description: {
        story: 'Mensaje básico con la configuración por defecto. Por defecto es de tipo "info".'
      }
    }
  }
}`,...(f=(j=o.parameters)==null?void 0:j.docs)==null?void 0:f.source},description:{story:`Mensaje predeterminado

Ejemplo básico de un mensaje con las configuraciones por defecto.`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.description}}};var b,v,_,M,T;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '1.5rem',
    maxWidth: '800px',
    margin: '0 auto'
  }}>
      {mockMessages.map(({
      type,
      title,
      content
    }) => <div key={type}>
          <h3 style={{
        margin: '0 0 0.5rem 0',
        color: '#333'
      }}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </h3>
          <Message type={type} title={title} style={{
        marginBottom: '1rem'
      }}>
            {content}
          </Message>
          
          <Message type={type} closable onClose={() => console.log(\`Mensaje \${type} cerrado\`)}>
            {content} (cerrable)
          </Message>
        </div>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Ejemplos de los diferentes tipos de mensajes disponibles, incluyendo versiones cerrables de cada uno.'
      }
    }
  }
}`,...(_=(v=t.parameters)==null?void 0:v.docs)==null?void 0:_.source},description:{story:`Tipos de mensaje disponibles

Muestra los diferentes estilos de mensaje según su tipo.`,...(T=(M=t.parameters)==null?void 0:M.docs)==null?void 0:T.description}}};var C,E,B,N,S;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '1.5rem',
    maxWidth: '800px',
    margin: '0 auto'
  }}>
      {/* Mensaje con enlace personalizado */}
      <div>
        <h3 style={{
        margin: '0 0 0.5rem 0',
        color: '#333'
      }}>Mensaje con enlace personalizado</h3>
        <Message type="success" title="¡Operación exitosa!" style={{
        marginBottom: '1rem'
      }}>
          {\`El proceso se ha completado correctamente. Puedes ver los resultados en la sección de \`}
          <button onClick={() => {
          // Simular la navegación a la sección de informes
          console.log('Navegando a la sección de informes');
        }} style={{
          background: 'none',
          border: 'none',
          color: 'inherit',
          textDecoration: 'underline',
          padding: 0,
          font: 'inherit',
          cursor: 'pointer',
          outline: 'inherit',
          fontWeight: 'bold'
        }}>
            informes
          </button>
          {'.'}
        </Message>
      </div>
      
      {/* Mensaje con iconos personalizados */}
      <div>
        <h3 style={{
        margin: '0 0 0.5rem 0',
        color: '#333'
      }}>Mensaje con contenido personalizado</h3>
        <Message type="info" title="Nueva característica disponible" closable onClose={() => console.log('Mensaje de característica cerrado')}>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
            <span>🎉</span>
            <div>
              <p style={{
              margin: '0 0 0.5rem 0'
            }}>Hemos mejorado la interfaz de usuario.</p>
              <p style={{
              margin: 0
            }}>¡Descubre las novedades en el panel de control!</p>
            </div>
          </div>
        </Message>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Ejemplos de mensajes con contenido HTML personalizado y estilos adicionales.'
      }
    }
  }
}`,...(B=(E=r.parameters)==null?void 0:E.docs)==null?void 0:B.source},description:{story:`Mensaje con contenido personalizado

Ejemplos de mensajes con contenido HTML personalizado y estilos adicionales.`,...(S=(N=r.parameters)==null?void 0:N.docs)==null?void 0:S.description}}};var z,I,w,R,k;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    type: 'info',
    children: 'Este es un mensaje sin título. Útil para mensajes cortos y directos.',
    title: undefined,
    closable: false,
    'data-testid': 'message-story'
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de un mensaje sin título, mostrando solo el contenido.'
      }
    }
  }
}`,...(w=(I=i.parameters)==null?void 0:I.docs)==null?void 0:w.source},description:{story:"Mensaje sin título",...(k=(R=i.parameters)==null?void 0:R.docs)==null?void 0:k.description}}};const me=["Default","TiposDeMensaje","ContenidoPersonalizado","SinTitulo"];export{r as ContenidoPersonalizado,o as Default,i as SinTitulo,t as TiposDeMensaje,me as __namedExportsOrder,de as default};
