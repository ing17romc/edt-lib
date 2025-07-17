import{j as e}from"./jsx-runtime-D_zvdyIk.js";const J="_card_sgj9f_1",M="_card__image_sgj9f_18",Q="_card__content_sgj9f_23",X="_card__title_sgj9f_26",Y="_card__subtitle_sgj9f_32",Z="_card__body_sgj9f_37",t={card:J,"card--elevated":"_card--elevated_sgj9f_7","card--outlined":"_card--outlined_sgj9f_11","card--filled":"_card--filled_sgj9f_15",card__image:M,card__content:Q,card__title:X,card__subtitle:Y,card__body:Z,"card--clickable":"_card--clickable_sgj9f_42"};var s=(a=>(a.ELEVATED="elevated",a.OUTLINED="outlined",a.FILLED="filled",a))(s||{});const P=({children:a,title:u,subtitle:m,imageUrl:g,imageAlt:W="",variant:H=s.ELEVATED,className:K="",onClick:r})=>{const o=!!r,B=[t.card,t[`card--${H}`],o?t["card--clickable"]:"",K].filter(Boolean).join(" "),$=p=>{p.key==="Enter"&&o&&(p.preventDefault(),r==null||r())},G=p=>{o&&(p.preventDefault(),r==null||r())};return e.jsxs("div",{className:B,style:o?{cursor:"pointer"}:void 0,onClick:G,onKeyDown:$,role:o?"button":"article",tabIndex:o?0:-1,"aria-label":o?u||"Tarjeta interactiva":void 0,children:[g&&e.jsx("img",{src:g,alt:W,className:t.card__image,loading:"lazy"}),e.jsxs("div",{className:t.card__content,children:[u&&e.jsx("h3",{className:t.card__title,children:u}),m&&e.jsx("p",{className:t.card__subtitle,children:m}),e.jsx("div",{className:t.card__body,children:a})]})]})};P.__docgenInfo={description:`Componente Card para mostrar contenido en un contenedor con estilo de tarjeta.
Soporta diferentes variantes visuales y es completamente accesible.`,methods:[],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"El contenido principal de la tarjeta"},title:{required:!1,tsType:{name:"string"},description:"Título opcional de la tarjeta"},subtitle:{required:!1,tsType:{name:"string"},description:"Subtítulo opcional de la tarjeta"},imageUrl:{required:!1,tsType:{name:"string"},description:"URL de la imagen opcional para la tarjeta"},imageAlt:{required:!1,tsType:{name:"string"},description:"Texto alternativo para la imagen",defaultValue:{value:"''",computed:!1}},variant:{required:!1,tsType:{name:"CardVariant"},description:`Estilo visual de la tarjeta
@default CardVariant.ELEVATED`,defaultValue:{value:"CardVariant.ELEVATED",computed:!0}},className:{required:!1,tsType:{name:"string"},description:"Clase CSS personalizada",defaultValue:{value:"''",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Evento click en la tarjeta"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Estilos en línea para personalizar la apariencia de la tarjeta"}}};const R={children:"Contenido de la tarjeta",title:"Título de la tarjeta",subtitle:"Subtítulo opcional",imageUrl:"https://w7.pngwing.com/pngs/745/105/png-transparent-pencil-and-paper-illustration-ssc-mts-exam-test-computer-icons-educational-entrance-examination-test-paper-miscellaneous-angle-text-thumbnail.png",imageAlt:"Imagen de ejemplo",variant:s.ELEVATED},ee={imageUrl:"",children:"Contenido sin imagen",title:"Tarjeta sin imagen",subtitle:"Esta tarjeta no tiene imagen"},ae={children:"Contenido de la tarjeta clickeable",title:"Tarjeta clickeable",subtitle:"Haz clic para ver la acción",imageAlt:"Imagen de ejemplo",variant:s.ELEVATED,onClick:()=>console.log("Card clicked!")},te={children:"Contenido de tarjeta con borde",title:"Tarjeta Outlined",subtitle:"Variante con borde",imageUrl:"",imageAlt:"",variant:s.OUTLINED},re={children:"Contenido de tarjeta con relleno",title:"Tarjeta Filled",subtitle:"Variante con relleno",imageUrl:"https://w7.pngwing.com/pngs/745/105/png-transparent-pencil-and-paper-illustration-ssc-mts-exam-test-computer-icons-educational-entrance-examination-test-paper-miscellaneous-angle-text-thumbnail.png",imageAlt:"Imagen de ejemplo",variant:s.FILLED},se={title:"Components/Card",component:P,tags:["autodocs","card","surface","container"],args:{...R},argTypes:{variant:{control:"select",options:Object.values(s),description:"Variante visual de la tarjeta",table:{type:{summary:"CardVariant"},defaultValue:{summary:"elevated"}}},title:{control:"text",description:"Título principal de la tarjeta"},subtitle:{control:"text",description:"Subtítulo opcional"},imageUrl:{control:"text",description:"URL de la imagen a mostrar en la parte superior"},imageAlt:{control:"text",description:"Texto alternativo para la imagen"},className:{control:"text",description:"Clases CSS adicionales"}},parameters:{layout:"centered",docs:{description:{component:"Un componente de tarjeta flexible que puede contener cualquier tipo de contenido."}}}},n={args:{...R,onClick:void 0}},i={args:{...te,onClick:void 0},parameters:{docs:{description:{story:"Variante con borde que resalta el contenido sin necesidad de un fondo sólido."}}},decorators:[a=>e.jsx("div",{className:"card-story",children:e.jsx(a,{})})]},c={args:{...re,onClick:void 0},parameters:{docs:{description:{story:"Variante con fondo sólido para mayor contraste y énfasis visual."}},backgrounds:{default:"light"}},decorators:[a=>e.jsx("div",{className:"card-story",children:e.jsx(a,{})})]},d={args:{...ee,onClick:void 0,children:e.jsxs("div",{children:[e.jsx("p",{children:"Esta es una tarjeta que no incluye una imagen."}),e.jsx("p",{children:"Ideal para contenido que no requiere soporte visual."})]})},parameters:{docs:{description:{story:"Ejemplo de una tarjeta que solo muestra texto sin imagen."}}},decorators:[a=>e.jsx("div",{className:"card-story",children:e.jsx(a,{})})]},l={args:{...ae,onClick:()=>alert("Card clicked!"),title:"Tarjeta clickeable",subtitle:"Haz clic para ver la acción",children:e.jsxs("div",{children:[e.jsx("p",{children:"Esta tarjeta tiene un manejador de clics."}),e.jsx("p",{children:"Intenta hacer clic en cualquier parte de la tarjeta."})]})},parameters:{docs:{description:{story:"Tarjeta que puede ser clickeada y responde a eventos de clic."}}},decorators:[a=>e.jsx("div",{className:"card-story",children:e.jsx(a,{})})]};var j,_,v,y,f;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...mockCardProps,
    onClick: undefined
  }
}`,...(v=(_=n.parameters)==null?void 0:_.docs)==null?void 0:v.source},description:{story:`Tarjeta estándar con imagen y contenido básico.
Esta es la variante por defecto del componente Card.`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.description}}};var b,x,C,h,E;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(C=(x=i.parameters)==null?void 0:x.docs)==null?void 0:C.source},description:{story:`Tarjeta con variante de borde (outlined).
Ideal para destacar contenido sin un fondo sólido.`,...(E=(h=i.parameters)==null?void 0:h.docs)==null?void 0:E.description}}};var T,k,q,S,N;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(q=(k=c.parameters)==null?void 0:k.docs)==null?void 0:q.source},description:{story:`Tarjeta con variante de relleno (filled).
Proporciona un fondo sólido para mayor contraste.`,...(N=(S=c.parameters)==null?void 0:S.docs)==null?void 0:N.description}}};var V,I,D,L,A;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
Útil para navegación o para mostrar más detalles.`,...(z=(F=l.parameters)==null?void 0:F.docs)==null?void 0:z.description}}};const ne=["Default","Outlined","Filled","WithoutImage","Clickable"];export{l as Clickable,n as Default,c as Filled,i as Outlined,d as WithoutImage,ne as __namedExportsOrder,se as default};
