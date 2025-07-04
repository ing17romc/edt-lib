import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as P}from"./index-B0pXE9zJ.js";import"./_commonjsHelpers-CqkleIqs.js";const V="_message_1p87p_1",l={message:V,"message-success":"_message-success_1p87p_12","message-info":"_message-info_1p87p_17","message-warning":"_message-warning_1p87p_22","message-danger":"_message-danger_1p87p_27"},a=({type:s="info",title:i,children:d,className:z,style:q})=>{const D=P(l.message,{[l[`message-${s}`]]:s},z);return e.jsxs("div",{className:D,style:q,"data-testid":"message",children:[i&&e.jsx("strong",{"data-testid":"message-title",children:i})," ",e.jsx("span",{"data-testid":"message-content",children:d})]})};a.__docgenInfo={description:"",methods:[],displayName:"Message",props:{type:{required:!1,tsType:{name:"union",raw:"'success' | 'info' | 'warning' | 'danger'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:`Tipo de mensaje a mostrar
@default 'info'`,defaultValue:{value:"'info'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Título del mensaje (opcional)"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Contenido del mensaje"},className:{required:!1,tsType:{name:"string"},description:"Clases CSS adicionales"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Estilos en línea"}}};const H=[{type:"success",title:"¡Éxito!",content:"La operación se completó correctamente."},{type:"info",title:"Información",content:"Este es un mensaje informativo."},{type:"warning",title:"Advertencia",content:"Esta acción requiere su atención."},{type:"danger",title:"Error",content:"Ha ocurrido un error inesperado."}],p=["success","info","warning","danger"],c={type:"info",title:"Título del mensaje",children:"Contenido del mensaje de ejemplo."},A={type:{control:{type:"select"},options:p,description:"Tipo de mensaje a mostrar",table:{type:{summary:p.map(s=>`'${s}'`).join(" | ")},defaultValue:{summary:"info"}}},title:{control:{type:"text"},description:"Título opcional del mensaje",table:{type:{summary:"string"}}},children:{control:{type:"text"},description:"Contenido del mensaje",table:{type:{summary:"ReactNode"}}},className:{control:{type:"text"},description:"Clases CSS adicionales",table:{type:{summary:"string"}}}},B={title:"Static/Message",component:a,tags:["autodocs"],args:c,argTypes:{...A},parameters:{layout:"padded",docs:{description:{component:"Un componente que muestra mensajes de estado (éxito, información, advertencia y peligro) para proporcionar retroalimentación visual clara a los usuarios."}}}},n={args:{...c}},o={render:()=>e.jsx("div",{style:{display:"grid",gap:"1rem"},children:H.map(({type:s,title:i,content:d})=>e.jsx(a,{type:s,title:i,children:d},s))}),parameters:{docs:{description:{story:"Ejemplos de los diferentes tipos de mensajes disponibles."}}}},t={render:()=>e.jsxs("div",{style:{display:"grid",gap:"1rem"},children:[e.jsxs(a,{type:"success",title:"¡Operación exitosa!",style:{marginBottom:"1rem"},children:["El proceso se ha completado correctamente. Puedes ver los resultados en la sección de"," ",e.jsx("button",{onClick:()=>{console.log("Navegando a la sección de informes")},style:{background:"none",border:"none",color:"inherit",textDecoration:"underline",padding:0,font:"inherit",cursor:"pointer",outline:"inherit"},children:"informes"}),"."]}),e.jsx(a,{type:"info",title:"Nueva característica disponible",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("span",{children:"🎉"}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 0.5rem 0"},children:"Hemos mejorado la interfaz de usuario."}),e.jsx("button",{type:"button",onClick:()=>console.log("Ver novedades"),style:{background:"none",border:"1px solid currentColor",color:"inherit",borderRadius:"4px",padding:"0.25rem 0.5rem",cursor:"pointer",fontSize:"0.875rem"},children:"Ver novedades"})]})]})})]}),parameters:{docs:{description:{story:"Ejemplos de mensajes con contenido HTML personalizado y estilos adicionales."}}}},r={args:{...c,title:void 0,children:"Este es un mensaje sin título. Útil para mensajes cortos y directos."},parameters:{docs:{description:{story:"Ejemplo de un mensaje sin título, mostrando solo el contenido."}}}};var m,u,g,y,j;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source},description:{story:"Mensaje predeterminado",...(j=(y=n.parameters)==null?void 0:y.docs)==null?void 0:j.description}}};var f,v,x,h,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '1rem'
  }}>
      {mockMessages.map(({
      type,
      title,
      content
    }) => <Message key={type} type={type} title={title}>
          {content}
        </Message>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Ejemplos de los diferentes tipos de mensajes disponibles.'
      }
    }
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source},description:{story:"Tipos de mensaje disponibles",...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.description}}};var T,_,C,M,S;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '1rem'
  }}>
      <Message type="success" title="¡Operación exitosa!" style={{
      marginBottom: '1rem'
    }}>
        El proceso se ha completado correctamente. Puedes ver los resultados en la sección de{' '}
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
        outline: 'inherit'
      }}>
          informes
        </button>.
      </Message>
      
      <Message type="info" title="Nueva característica disponible">
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
            <button type="button" onClick={() => console.log('Ver novedades')} style={{
            background: 'none',
            border: '1px solid currentColor',
            color: 'inherit',
            borderRadius: '4px',
            padding: '0.25rem 0.5rem',
            cursor: 'pointer',
            fontSize: '0.875rem'
          }}>
              Ver novedades
            </button>
          </div>
        </div>
      </Message>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Ejemplos de mensajes con contenido HTML personalizado y estilos adicionales.'
      }
    }
  }
}`,...(C=(_=t.parameters)==null?void 0:_.docs)==null?void 0:C.source},description:{story:"Mensaje con contenido personalizado",...(S=(M=t.parameters)==null?void 0:M.docs)==null?void 0:S.description}}};var E,k,N,R,w;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    title: undefined,
    children: 'Este es un mensaje sin título. Útil para mensajes cortos y directos.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de un mensaje sin título, mostrando solo el contenido.'
      }
    }
  }
}`,...(N=(k=r.parameters)==null?void 0:k.docs)==null?void 0:N.source},description:{story:"Mensaje sin título",...(w=(R=r.parameters)==null?void 0:R.docs)==null?void 0:w.description}}};const $=["Default","TiposDeMensaje","ContenidoPersonalizado","SinTitulo"];export{t as ContenidoPersonalizado,n as Default,r as SinTitulo,o as TiposDeMensaje,$ as __namedExportsOrder,B as default};
