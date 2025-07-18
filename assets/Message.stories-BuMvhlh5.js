import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-D4lIrffr.js";import{b as $}from"./index-C6cZFqFD.js";import"./classNames-CqjykrQM.js";const G="_message_1fl9s_1",J="_messageContent_1fl9s_23",K="_messageTitle_1fl9s_34",Q="_messageIcon_1fl9s_40",U="_messageBody_1fl9s_52",X="_messageText_1fl9s_63",Y="_closable_1fl9s_118",s={message:G,messageContent:J,messageTitle:K,messageIcon:Q,messageBody:U,messageText:X,"message-success":"_message-success_1fl9s_82","message-info":"_message-info_1fl9s_91","message-warning":"_message-warning_1fl9s_100","message-danger":"_message-danger_1fl9s_109",closable:Y,"message-enter":"_message-enter_1fl9s_122","message-enter-active":"_message-enter-active_1fl9s_127","message-exit":"_message-exit_1fl9s_133","message-exit-active":"_message-exit-active_1fl9s_138"},Z={success:"check-circle",info:"info-circle",warning:"exclamation-triangle",danger:"times-circle"},ee=t=>t==="warning"||t==="danger"?"alert":"status",a=({type:t="info",title:m,children:V,className:B,style:D,closable:u=!1,onClose:r,role:W,"data-testid":R="message",...L})=>{const[k,z]=g.useState(!0),p=W||ee(t),H=p==="alert"?"assertive":"polite",O=g.useCallback(F=>{F.preventDefault(),z(!1),r==null||r()},[r]);if(!k)return null;const P=[s.message,s[`message-${t}`],u?s.closable:"",B||""].filter(Boolean).join(" ");return e.jsxs("div",{className:P,style:D,role:p,"aria-live":H,"data-testid":R,...L,children:[e.jsxs("div",{className:s.messageContent,children:[e.jsx("div",{className:s.messageIcon,children:e.jsx($,{name:Z[t],"aria-hidden":"true"})}),e.jsxs("div",{className:s.messageText,children:[m&&e.jsx("div",{className:s.messageTitle,"data-testid":"message-title",children:m}),e.jsx("div",{className:s.messageBody,children:V})]})]}),u&&e.jsx("button",{type:"button",className:s.closeButton,onClick:O,"aria-label":"Cerrar mensaje","data-testid":"message-close-button",children:e.jsx("span",{"aria-hidden":"true",children:"×"})})]})};a.__docgenInfo={description:"",methods:[],displayName:"Message",props:{type:{required:!1,tsType:{name:"union",raw:"'success' | 'info' | 'warning' | 'danger'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:`Tipo de mensaje a mostrar 
@default 'info'`,defaultValue:{value:"'info'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Título opcional que se muestra en negrita"},children:{required:!0,tsType:{name:"ReactNode"},description:"Contenido principal del mensaje"},closable:{required:!1,tsType:{name:"boolean"},description:`Permite cerrar el mensaje 
@default false`,defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Función que se ejecuta al cerrar el mensaje\nSolo se usa si `closable` es `true`"},role:{required:!1,tsType:{name:"union",raw:"'alert' | 'status' | 'alertdialog'",elements:[{name:"literal",value:"'alert'"},{name:"literal",value:"'status'"},{name:"literal",value:"'alertdialog'"}]},description:`Rol ARIA personalizado 
@default 'status' para info/success, 'alert' para warning/danger`},"data-testid":{required:!1,tsType:{name:"string"},description:"ID para pruebas",defaultValue:{value:"'message'",computed:!1}}},composes:["HTMLAttributes"]};const ne={title:"Static/Message",component:a,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Componente para mostrar mensajes de retroalimentación al usuario con diferentes niveles de importancia."}}},args:{children:"Mensaje de ejemplo",title:"Título del mensaje",type:"info",closable:!1},argTypes:{type:{control:"select",options:["success","info","warning","danger"],description:"Tipo de mensaje",table:{type:{summary:"string"},defaultValue:{summary:"info"}}},title:{control:"text",description:"Título opcional"},children:{control:"text",description:"Contenido principal"},closable:{control:"boolean",description:"Permite cerrar el mensaje",table:{defaultValue:{summary:"false"}}},onClose:{action:"onClose",description:"Manejador de cierre"}}},n={},i={args:{title:"Título del mensaje",children:"Este es un mensaje con título."}},o={args:{title:"Mensaje importante",children:"Este mensaje se puede cerrar.",closable:!0}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(a,{type:"success",title:"Éxito",children:"Operación completada correctamente."}),e.jsx(a,{type:"info",title:"Información",children:"Este es un mensaje informativo."}),e.jsx(a,{type:"warning",title:"Advertencia",children:"Esta acción no se puede deshacer."}),e.jsx(a,{type:"danger",title:"Error",children:"Ha ocurrido un error al procesar la solicitud."})]})},c={render:()=>e.jsx(a,{type:"info",title:"Actualización disponible",children:e.jsxs("div",{children:[e.jsx("p",{children:"Nuevas características disponibles:"}),e.jsxs("ul",{style:{margin:"0.5rem 0 0 1rem",paddingLeft:"1rem"},children:[e.jsx("li",{children:"Mejoras en el rendimiento"}),e.jsx("li",{children:"Nuevas funcionalidades"}),e.jsx("li",{children:"Correcciones de errores"})]})]})})},d={args:{title:void 0,children:"Este es un mensaje sin título. Útil para mensajes cortos y directos."}};var f,j,_;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(_=(j=n.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var x,v,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Título del mensaje',
    children: 'Este es un mensaje con título.'
  }
}`,...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var y,T,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Mensaje importante',
    children: 'Este mensaje se puede cerrar.',
    closable: true
  }
}`,...(b=(T=o.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var M,C,E;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Message type="success" title="Éxito">
        Operación completada correctamente.
      </Message>
      <Message type="info" title="Información">
        Este es un mensaje informativo.
      </Message>
      <Message type="warning" title="Advertencia">
        Esta acción no se puede deshacer.
      </Message>
      <Message type="danger" title="Error">
        Ha ocurrido un error al procesar la solicitud.
      </Message>
    </div>
}`,...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var w,N,I;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Message type="info" title="Actualización disponible">
      <div>
        <p>Nuevas características disponibles:</p>
        <ul style={{
        margin: '0.5rem 0 0 1rem',
        paddingLeft: '1rem'
      }}>
          <li>Mejoras en el rendimiento</li>
          <li>Nuevas funcionalidades</li>
          <li>Correcciones de errores</li>
        </ul>
      </div>
    </Message>
}`,...(I=(N=c.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var q,S,A;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: undefined,
    children: 'Este es un mensaje sin título. Útil para mensajes cortos y directos.'
  }
}`,...(A=(S=d.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const ie=["Default","WithTitle","Closable","Types","WithCustomContent","WithoutTitle"];export{o as Closable,n as Default,l as Types,c as WithCustomContent,i as WithTitle,d as WithoutTitle,ie as __namedExportsOrder,ne as default};
