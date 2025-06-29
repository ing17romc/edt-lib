import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as z,A as c}from"./index-CNg3QlUR.js";import{C as t,b as A}from"./enums-Ca2RdD1G.js";const T=({id:u,text:l,icon:h,size:v=t.MD,disabled:n=!1,onClick:r})=>{const B=()=>`imageButton ${n?A.DISABLED:""}`,E=()=>r?"button":"submit";return i.jsx("abbr",{title:l,role:"tooltip",children:i.jsx("button",{className:B(),id:u,type:E(),name:u,disabled:n,onClick:L=>{!n&&r&&r(L)},"aria-label":l,"aria-disabled":n,children:i.jsx(z,{name:h,size:v})})})};T.__docgenInfo={description:`Componente ImageButton que muestra un botón con un ícono.
Proporciona una interfaz consistente para botones con íconos en la aplicación.

@param {ImageButtonProps} props - Propiedades del componente
@param {string} props.id - ID único para el botón
@param {string} props.text - Texto que se mostrará como título del botón
@param {IconName} props.icon - Nombre del ícono a mostrar
@param {IconSize} [props.size='MD'] - Tamaño del botón y el ícono
@param {boolean} [props.disabled=false] - Si el botón está deshabilitado
@param {(e: React.MouseEvent<HTMLButtonElement>) => void} [props.onClick] - Función que se ejecuta al hacer clic
@returns {JSX.Element} Elemento button con ícono y accesibilidad`,methods:[],displayName:"ImageButton",props:{id:{required:!0,tsType:{name:"string"},description:""},text:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"union",raw:"ActionIcons | AlertIcons | AudioAndVideoIcons | CommunicationIcons | ContentIcons | DeviceIcons | EditorIcons | FileIcons | HardwareIcons | ImageIcons | NavigationIcons | NotificationIcons | SocialIcons",elements:[{name:"ActionIcons"},{name:"AlertIcons"},{name:"AudioAndVideoIcons"},{name:"CommunicationIcons"},{name:"ContentIcons"},{name:"DeviceIcons"},{name:"EditorIcons"},{name:"FileIcons"},{name:"HardwareIcons"},{name:"ImageIcons"},{name:"NavigationIcons"},{name:"NotificationIcons"},{name:"SocialIcons"}]},description:""},size:{required:!1,tsType:{name:"ControlSize"},description:"",defaultValue:{value:"ControlSize.MD",computed:!0}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};const V={title:"Controls/ImageButton",component:T,parameters:{layout:"centered",docs:{description:{component:"A button component that displays an icon with optional text. It can be used for various actions in the application."}}},argTypes:{id:{control:"text",description:"Unique identifier for the button",table:{type:{summary:"string"},defaultValue:{summary:"required"}}},text:{control:"text",description:"Text to display as the button label",table:{type:{summary:"string"},defaultValue:{summary:"required"}}},icon:{control:"select",options:Object.values(c),description:"Icon to display on the button",table:{type:{summary:"IconName"},defaultValue:{summary:"required"}}},size:{control:"select",options:Object.values(t),description:"Size of the button and icon",table:{type:{summary:"IconSize"},defaultValue:{summary:t.MD}}},disabled:{control:"boolean",description:"Whether the button is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onClick:{action:"clicked",description:"Click event handler",table:{type:{summary:"function"},defaultValue:{summary:"undefined"}}}}},e={args:{id:"default-button",text:"Click me",icon:c.ADD,size:t.MD,disabled:!1}},o={args:{...e.args,id:"disabled-button",text:"Disabled Button",disabled:!0}},a={args:{...e.args,id:"large-button",text:"Large Button",size:t.LG}},s={args:{...e.args,id:"custom-icon-button",text:"Settings",icon:c.SETTINGS}};var m,d,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: 'default-button',
    text: 'Click me',
    icon: ALL_ICONS.ADD,
    size: ControlSize.MD,
    disabled: false
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var b,I,g;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: 'disabled-button',
    text: 'Disabled Button',
    disabled: true
  }
}`,...(g=(I=o.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var f,y,S;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: 'large-button',
    text: 'Large Button',
    size: ControlSize.LG
  }
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var D,C,x;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: 'custom-icon-button',
    text: 'Settings',
    icon: ALL_ICONS.SETTINGS
  }
}`,...(x=(C=s.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const j=["Default","Disabled","Large","WithCustomIcon"];export{e as Default,o as Disabled,a as Large,s as WithCustomIcon,j as __namedExportsOrder,V as default};
