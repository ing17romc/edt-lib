import{j as e}from"./jsx-runtime-D_zvdyIk.js";const J="_card_i2djj_25",M="_card__image_i2djj_51",Q="_card__content_i2djj_56",X="_card__title_i2djj_59",Y="_card__subtitle_i2djj_65",Z="_card__body_i2djj_70",t={"story-card":"_story-card_i2djj_1","story-variants":"_story-variants_i2djj_6",card:J,"card--elevated":"_card--elevated_i2djj_40","card--outlined":"_card--outlined_i2djj_44","card--filled":"_card--filled_i2djj_48",card__image:M,card__content:Q,card__title:X,card__subtitle:Y,card__body:Z,"card--clickable":"_card--clickable_i2djj_75"};var i=(a=>(a.ELEVATED="elevated",a.OUTLINED="outlined",a.FILLED="filled",a))(i||{});const R=({children:a,title:u,subtitle:m,imageUrl:j,imageAlt:H="",variant:P=i.ELEVATED,className:K="",onClick:r})=>{const o=!!r,B=[t.card,t[`card--${P}`],o?t["card--clickable"]:"",K].filter(Boolean).join(" "),$=p=>{p.key==="Enter"&&o&&(p.preventDefault(),r==null||r())},G=p=>{o&&(p.preventDefault(),r==null||r())};return e.jsxs("div",{className:B,style:o?{cursor:"pointer"}:void 0,onClick:G,onKeyDown:$,role:o?"button":"article",tabIndex:o?0:-1,"aria-label":o?u||"Tarjeta interactiva":void 0,children:[j&&e.jsx("img",{src:j,alt:H,className:t.card__image,loading:"lazy"}),e.jsxs("div",{className:t.card__content,children:[u&&e.jsx("h3",{className:t.card__title,children:u}),m&&e.jsx("p",{className:t.card__subtitle,children:m}),e.jsx("div",{className:t.card__body,children:a})]})]})};R.__docgenInfo={description:`Componente Card para mostrar contenido en un contenedor con estilo de tarjeta.
Soporta diferentes variantes visuales y es completamente accesible.`,methods:[],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"El contenido principal de la tarjeta"},title:{required:!1,tsType:{name:"string"},description:"Título opcional de la tarjeta"},subtitle:{required:!1,tsType:{name:"string"},description:"Subtítulo opcional de la tarjeta"},imageUrl:{required:!1,tsType:{name:"string"},description:"URL de la imagen opcional para la tarjeta"},imageAlt:{required:!1,tsType:{name:"string"},description:"Texto alternativo para la imagen",defaultValue:{value:"''",computed:!1}},variant:{required:!1,tsType:{name:"CardVariant"},description:`Estilo visual de la tarjeta
@default CardVariant.ELEVATED`,defaultValue:{value:"CardVariant.ELEVATED",computed:!0}},className:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada",defaultValue:{value:"''",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Evento click en la tarjeta"}}};const W={children:"Contenido de la tarjeta",title:"Título de la tarjeta",subtitle:"Subtítulo opcional",imageUrl:"https://w7.pngwing.com/pngs/745/105/png-transparent-pencil-and-paper-illustration-ssc-mts-exam-test-computer-icons-educational-entrance-examination-test-paper-miscellaneous-angle-text-thumbnail.png",imageAlt:"Imagen de ejemplo",variant:i.ELEVATED},ee={imageUrl:"",children:"Contenido sin imagen",title:"Tarjeta sin imagen",subtitle:"Esta tarjeta no tiene imagen"},ae={children:"Contenido de la tarjeta clickeable",title:"Tarjeta clickeable",subtitle:"Haz clic para ver la acción",imageAlt:"Imagen de ejemplo",variant:i.ELEVATED,onClick:()=>console.log("Card clicked!")},te={children:"Contenido de tarjeta con borde",title:"Tarjeta Outlined",subtitle:"Variante con borde",imageUrl:"",imageAlt:"",variant:i.OUTLINED},re={children:"Contenido de tarjeta con relleno",title:"Tarjeta Filled",subtitle:"Variante con relleno",imageUrl:"https://w7.pngwing.com/pngs/745/105/png-transparent-pencil-and-paper-illustration-ssc-mts-exam-test-computer-icons-educational-entrance-examination-test-paper-miscellaneous-angle-text-thumbnail.png",imageAlt:"Imagen de ejemplo",variant:i.FILLED},ie={title:"Components/Card",component:R,tags:["autodocs","card","surface","container"],args:{...W},argTypes:{variant:{control:"select",options:Object.values(i),description:"Variante visual de la tarjeta",table:{type:{summary:"CardVariant"},defaultValue:{summary:"elevated"}}},title:{control:"text",description:"Título principal de la tarjeta"},subtitle:{control:"text",description:"Subtítulo opcional"},imageUrl:{control:"text",description:"URL de la imagen a mostrar en la parte superior"},imageAlt:{control:"text",description:"Texto alternativo para la imagen"},className:{control:"text",description:"Clases CSS adicionales"}},parameters:{layout:"centered",docs:{description:{component:"Un componente de tarjeta flexible que puede contener cualquier tipo de contenido."}}},decorators:[a=>e.jsx("div",{className:t["story-card"],children:e.jsx(a,{})})]},s={args:{...W,onClick:void 0}},n={args:{...te,onClick:void 0},parameters:{docs:{description:{story:"Variante con borde que resalta el contenido sin necesidad de un fondo sólido."}}},decorators:[a=>e.jsx("div",{className:"card-story",children:e.jsx(a,{})})]},c={args:{...re,onClick:void 0},parameters:{docs:{description:{story:"Variante con fondo sólido para mayor contraste y énfasis visual."}},backgrounds:{default:"light"}},decorators:[a=>e.jsx("div",{className:"card-story",children:e.jsx(a,{})})]},d={args:{...ee,onClick:void 0,children:e.jsxs("div",{children:[e.jsx("p",{children:"Esta es una tarjeta que no incluye una imagen."}),e.jsx("p",{children:"Ideal para contenido que no requiere soporte visual."})]})},parameters:{docs:{description:{story:"Ejemplo de una tarjeta que solo muestra texto sin imagen."}}},decorators:[a=>e.jsx("div",{className:"card-story",children:e.jsx(a,{})})]},l={args:{...ae,onClick:()=>alert("Card clicked!"),title:"Tarjeta clickeable",subtitle:"Haz clic para ver la acción",children:e.jsxs("div",{children:[e.jsx("p",{children:"Esta tarjeta tiene un manejador de clics."}),e.jsx("p",{children:"Intenta hacer clic en cualquier parte de la tarjeta."})]})},parameters:{docs:{description:{story:"Tarjeta que puede ser clickeada y responde a eventos de clic."}}},decorators:[a=>e.jsx("div",{className:"card-story",children:e.jsx(a,{})})]};var g,_,v,y,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...mockCardProps,
    onClick: undefined
  }
}`,...(v=(_=s.parameters)==null?void 0:_.docs)==null?void 0:v.source},description:{story:`Tarjeta estándar con imagen y contenido básico.
Esta es la variante por defecto del componente Card.`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.description}}};var f,x,h,C,k;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...mockOutlinedCard,
    onClick: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante con borde que resalta el contenido sin necesidad de un fondo sólido.'
      }
    }
  },
  decorators: [Story => <div className="card-story">
        <Story />
      </div>]
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source},description:{story:`Tarjeta con variante de borde (outlined).
Ideal para destacar contenido sin un fondo sólido.`,...(k=(C=n.parameters)==null?void 0:C.docs)==null?void 0:k.description}}};var E,T,q,N,S;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...mockFilledCard,
    onClick: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante con fondo sólido para mayor contraste y énfasis visual.'
      }
    },
    backgrounds: {
      default: 'light'
    }
  },
  decorators: [Story => <div className="card-story">
        <Story />
      </div>]
}`,...(q=(T=c.parameters)==null?void 0:T.docs)==null?void 0:q.source},description:{story:`Tarjeta con variante de relleno (filled).
Proporciona un fondo sólido para mayor contraste.`,...(S=(N=c.parameters)==null?void 0:N.docs)==null?void 0:S.description}}};var V,I,D,L,A;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...mockCardWithoutImage,
    onClick: undefined,
    children: <div>
        <p>Esta es una tarjeta que no incluye una imagen.</p>
        <p>Ideal para contenido que no requiere soporte visual.</p>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de una tarjeta que solo muestra texto sin imagen.'
      }
    }
  },
  decorators: [Story => <div className="card-story">
        <Story />
      </div>]
}`,...(D=(I=d.parameters)==null?void 0:I.docs)==null?void 0:D.source},description:{story:`Tarjeta sin imagen que muestra solo el contenido de texto.
Útil cuando el contenido es más importante que la imagen.`,...(A=(L=d.parameters)==null?void 0:L.docs)==null?void 0:A.description}}};var U,O,w,F,z;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...mockClickableCard,
    onClick: () => alert('Card clicked!'),
    title: 'Tarjeta clickeable',
    subtitle: 'Haz clic para ver la acción',
    children: <div>
        <p>Esta tarjeta tiene un manejador de clics.</p>
        <p>Intenta hacer clic en cualquier parte de la tarjeta.</p>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: 'Tarjeta que puede ser clickeada y responde a eventos de clic.'
      }
    }
  },
  decorators: [Story => <div className="card-story">
        <Story />
      </div>]
}`,...(w=(O=l.parameters)==null?void 0:O.docs)==null?void 0:w.source},description:{story:`Tarjeta clickeable que responde a eventos de clic.
Útil para navegación o para mostrar más detalles.`,...(z=(F=l.parameters)==null?void 0:F.docs)==null?void 0:z.description}}};const se=["Default","Outlined","Filled","WithoutImage","Clickable"];export{l as Clickable,s as Default,c as Filled,n as Outlined,d as WithoutImage,se as __namedExportsOrder,ie as default};
