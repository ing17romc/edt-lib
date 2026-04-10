import{r as e,t}from"./iframe-YpqvHZo3.js";import{t as n}from"./jsx-runtime-ChNUh70B.js";import{t as r}from"./Icon-BUEZOljQ.js";var i=e(t(),1),a=`_message_1fl9s_1`,o=`_messageContent_1fl9s_23`,s=`_messageTitle_1fl9s_34`,c=`_messageIcon_1fl9s_40`,l=`_messageBody_1fl9s_52`,u=`_messageText_1fl9s_63`,d=`_closable_1fl9s_118`,f={message:a,messageContent:o,messageTitle:s,messageIcon:c,messageBody:l,messageText:u,"message-success":`_message-success_1fl9s_82`,"message-info":`_message-info_1fl9s_91`,"message-warning":`_message-warning_1fl9s_100`,"message-danger":`_message-danger_1fl9s_109`,closable:d,"message-enter":`_message-enter_1fl9s_122`,"message-enter-active":`_message-enter-active_1fl9s_127`,"message-exit":`_message-exit_1fl9s_133`,"message-exit-active":`_message-exit-active_1fl9s_138`},p=n(),m={success:`check-circle`,info:`info-circle`,warning:`exclamation-triangle`,danger:`times-circle`},h=e=>e===`warning`||e===`danger`?`alert`:`status`,g=({type:e=`info`,title:t,children:n,className:a,style:o,closable:s=!1,onClose:c,role:l,"data-testid":u=`message`,...d})=>{let[g,_]=(0,i.useState)(!0),v=l||h(e),y=v===`alert`?`assertive`:`polite`,b=(0,i.useCallback)(e=>{e.preventDefault(),_(!1),c?.()},[c]);return g?(0,p.jsxs)(`div`,{className:[f.message,f[`message-${e}`],s?f.closable:``,a||``].filter(Boolean).join(` `),style:o,role:v,"aria-live":y,"data-testid":u,...d,children:[(0,p.jsxs)(`div`,{className:f.messageContent,children:[(0,p.jsx)(`div`,{className:f.messageIcon,children:(0,p.jsx)(r,{name:m[e],"aria-hidden":`true`})}),(0,p.jsxs)(`div`,{className:f.messageText,children:[t&&(0,p.jsx)(`div`,{className:f.messageTitle,"data-testid":`message-title`,children:t}),(0,p.jsx)(`div`,{className:f.messageBody,children:n})]})]}),s&&(0,p.jsx)(`button`,{type:`button`,className:f.closeButton,onClick:b,"aria-label":`Cerrar mensaje`,"data-testid":`message-close-button`,children:(0,p.jsx)(`span`,{"aria-hidden":`true`,children:`×`})})]}):null};g.__docgenInfo={description:``,methods:[],displayName:`Message`,props:{type:{required:!1,tsType:{name:`union`,raw:`'success' | 'info' | 'warning' | 'danger'`,elements:[{name:`literal`,value:`'success'`},{name:`literal`,value:`'info'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`}]},description:`Tipo de mensaje a mostrar \r
@default 'info'`,defaultValue:{value:`'info'`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:`Título opcional que se muestra en negrita`},children:{required:!0,tsType:{name:`ReactNode`},description:`Contenido principal del mensaje`},closable:{required:!1,tsType:{name:`boolean`},description:`Permite cerrar el mensaje \r
@default false`,defaultValue:{value:`false`,computed:!1}},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:"Función que se ejecuta al cerrar el mensaje\r\nSolo se usa si `closable` es `true`"},role:{required:!1,tsType:{name:`union`,raw:`'alert' | 'status' | 'alertdialog'`,elements:[{name:`literal`,value:`'alert'`},{name:`literal`,value:`'status'`},{name:`literal`,value:`'alertdialog'`}]},description:`Rol ARIA personalizado \r
@default 'status' para info/success, 'alert' para warning/danger`},"data-testid":{required:!1,tsType:{name:`string`},description:`ID para pruebas`,defaultValue:{value:`'message'`,computed:!1}}},composes:[`HTMLAttributes`]};var _={title:`Static/Message`,component:g,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Componente para mostrar mensajes de retroalimentación al usuario con diferentes niveles de importancia.`}}},args:{children:`Mensaje de ejemplo`,title:`Título del mensaje`,type:`info`,closable:!1},argTypes:{type:{control:`select`,options:[`success`,`info`,`warning`,`danger`],description:`Tipo de mensaje`,table:{type:{summary:`string`},defaultValue:{summary:`info`}}},title:{control:`text`,description:`Título opcional`},children:{control:`text`,description:`Contenido principal`},closable:{control:`boolean`,description:`Permite cerrar el mensaje`,table:{defaultValue:{summary:`false`}}},onClose:{action:`onClose`,description:`Manejador de cierre`}}},v={},y={args:{title:`Título del mensaje`,children:`Este es un mensaje con título.`}},b={args:{title:`Mensaje importante`,children:`Este mensaje se puede cerrar.`,closable:!0}},x={render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,p.jsx)(g,{type:`success`,title:`Éxito`,children:`Operación completada correctamente.`}),(0,p.jsx)(g,{type:`info`,title:`Información`,children:`Este es un mensaje informativo.`}),(0,p.jsx)(g,{type:`warning`,title:`Advertencia`,children:`Esta acción no se puede deshacer.`}),(0,p.jsx)(g,{type:`danger`,title:`Error`,children:`Ha ocurrido un error al procesar la solicitud.`})]})},S={render:()=>(0,p.jsx)(g,{type:`info`,title:`Actualización disponible`,children:(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{children:`Nuevas características disponibles:`}),(0,p.jsxs)(`ul`,{style:{margin:`0.5rem 0 0 1rem`,paddingLeft:`1rem`},children:[(0,p.jsx)(`li`,{children:`Mejoras en el rendimiento`}),(0,p.jsx)(`li`,{children:`Nuevas funcionalidades`}),(0,p.jsx)(`li`,{children:`Correcciones de errores`})]})]})})},C={args:{title:void 0,children:`Este es un mensaje sin título. Útil para mensajes cortos y directos.`}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Título del mensaje',
    children: 'Este es un mensaje con título.'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Mensaje importante',
    children: 'Este mensaje se puede cerrar.',
    closable: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Message type="success" title="Éxito">\r
        Operación completada correctamente.\r
      </Message>\r
      <Message type="info" title="Información">\r
        Este es un mensaje informativo.\r
      </Message>\r
      <Message type="warning" title="Advertencia">\r
        Esta acción no se puede deshacer.\r
      </Message>\r
      <Message type="danger" title="Error">\r
        Ha ocurrido un error al procesar la solicitud.\r
      </Message>\r
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Message type="info" title="Actualización disponible">\r
      <div>\r
        <p>Nuevas características disponibles:</p>\r
        <ul style={{
        margin: '0.5rem 0 0 1rem',
        paddingLeft: '1rem'
      }}>\r
          <li>Mejoras en el rendimiento</li>\r
          <li>Nuevas funcionalidades</li>\r
          <li>Correcciones de errores</li>\r
        </ul>\r
      </div>\r
    </Message>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    children: 'Este es un mensaje sin título. Útil para mensajes cortos y directos.'
  }
}`,...C.parameters?.docs?.source}}};var w=[`Default`,`WithTitle`,`Closable`,`Types`,`WithCustomContent`,`WithoutTitle`];export{b as Closable,v as Default,x as Types,S as WithCustomContent,y as WithTitle,C as WithoutTitle,w as __namedExportsOrder,_ as default};