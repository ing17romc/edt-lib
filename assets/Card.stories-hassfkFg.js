import{t as e}from"./iframe-YpqvHZo3.js";import{t}from"./jsx-runtime-ChNUh70B.js";e();var n=`_card_i2djj_25`,r=`_card__image_i2djj_51`,i=`_card__content_i2djj_56`,a=`_card__title_i2djj_59`,o=`_card__subtitle_i2djj_65`,s=`_card__body_i2djj_70`,c={"story-card":`_story-card_i2djj_1`,"story-variants":`_story-variants_i2djj_6`,card:n,"card--elevated":`_card--elevated_i2djj_40`,"card--outlined":`_card--outlined_i2djj_44`,"card--filled":`_card--filled_i2djj_48`,card__image:r,card__content:i,card__title:a,card__subtitle:o,card__body:s,"card--clickable":`_card--clickable_i2djj_75`},l=function(e){return e.ELEVATED=`elevated`,e.OUTLINED=`outlined`,e.FILLED=`filled`,e}({}),u=t(),d=({children:e,title:t,subtitle:n,imageUrl:r,imageAlt:i=``,variant:a=l.ELEVATED,className:o=``,onClick:s})=>{let d=!!s,f=[c.card,c[`card--${a}`],d?c[`card--clickable`]:``,o].filter(Boolean).join(` `);return(0,u.jsxs)(`div`,{className:f,style:d?{cursor:`pointer`}:void 0,onClick:e=>{d&&(e.preventDefault(),s?.())},onKeyDown:e=>{e.key===`Enter`&&d&&(e.preventDefault(),s?.())},role:d?`button`:`article`,tabIndex:d?0:-1,"aria-label":d?t||`Tarjeta interactiva`:void 0,children:[r&&(0,u.jsx)(`img`,{src:r,alt:i,className:c.card__image,loading:`lazy`}),(0,u.jsxs)(`div`,{className:c.card__content,children:[t&&(0,u.jsx)(`h3`,{className:c.card__title,children:t}),n&&(0,u.jsx)(`p`,{className:c.card__subtitle,children:n}),(0,u.jsx)(`div`,{className:c.card__body,children:e})]})]})};d.__docgenInfo={description:`Componente Card para mostrar contenido en un contenedor con estilo de tarjeta.\r
Soporta diferentes variantes visuales y es completamente accesible.`,methods:[],displayName:`Card`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:`El contenido principal de la tarjeta`},title:{required:!1,tsType:{name:`string`},description:`Título opcional de la tarjeta`},subtitle:{required:!1,tsType:{name:`string`},description:`Subtítulo opcional de la tarjeta`},imageUrl:{required:!1,tsType:{name:`string`},description:`URL de la imagen opcional para la tarjeta`},imageAlt:{required:!1,tsType:{name:`string`},description:`Texto alternativo para la imagen`,defaultValue:{value:`''`,computed:!1}},variant:{required:!1,tsType:{name:`CardVariant`},description:`Estilo visual de la tarjeta\r
@default CardVariant.ELEVATED`,defaultValue:{value:`CardVariant.ELEVATED`,computed:!0}},className:{required:!1,tsType:{name:`string`},description:`Clase CSS personalizada`,defaultValue:{value:`''`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Evento click en la tarjeta`}}};var f={children:`Contenido de la tarjeta`,title:`Título de la tarjeta`,subtitle:`Subtítulo opcional`,imageUrl:`https://w7.pngwing.com/pngs/745/105/png-transparent-pencil-and-paper-illustration-ssc-mts-exam-test-computer-icons-educational-entrance-examination-test-paper-miscellaneous-angle-text-thumbnail.png`,imageAlt:`Imagen de ejemplo`,variant:l.ELEVATED},p={imageUrl:``,children:`Contenido sin imagen`,title:`Tarjeta sin imagen`,subtitle:`Esta tarjeta no tiene imagen`},m={children:`Contenido de la tarjeta clickeable`,title:`Tarjeta clickeable`,subtitle:`Haz clic para ver la acción`,imageAlt:`Imagen de ejemplo`,variant:l.ELEVATED,onClick:()=>console.log(`Card clicked!`)},h={children:`Contenido de tarjeta con borde`,title:`Tarjeta Outlined`,subtitle:`Variante con borde`,imageUrl:``,imageAlt:``,variant:l.OUTLINED},g={children:`Contenido de tarjeta con relleno`,title:`Tarjeta Filled`,subtitle:`Variante con relleno`,imageUrl:`https://w7.pngwing.com/pngs/745/105/png-transparent-pencil-and-paper-illustration-ssc-mts-exam-test-computer-icons-educational-entrance-examination-test-paper-miscellaneous-angle-text-thumbnail.png`,imageAlt:`Imagen de ejemplo`,variant:l.FILLED},_={variant:{control:`select`,options:Object.values(l),description:`Visual variant of the card that determines its elevation and border style.`,table:{type:{summary:Object.values(l).join(` | `)},defaultValue:{summary:l.ELEVATED}}},title:{control:`text`,description:`Main heading text displayed at the top of the card body.`,table:{type:{summary:`string`}}},subtitle:{control:`text`,description:`Optional secondary text shown beneath the title.`,table:{type:{summary:`string`}}},imageUrl:{control:`text`,description:`URL of the image rendered at the top of the card. Leave empty to hide the image area.`,table:{type:{summary:`string`}}},imageAlt:{control:`text`,description:`Accessible alt text for the card image.`,table:{type:{summary:`string`}}},children:{control:`text`,description:`Content rendered inside the card body, below the title and subtitle.`,table:{type:{summary:`ReactNode`}}},onClick:{action:`clicked`,description:`When provided, the card becomes interactive and fires this callback on click.`,table:{type:{summary:`() => void`}}},className:{control:`text`,description:`Additional CSS class names for the card root element.`,table:{type:{summary:`string`}}}},v={layout:`centered`,docs:{description:{component:`A flexible surface component used to group and display related content. Supports multiple visual variants, optional images, titles, subtitles, and an interactive (clickable) mode.`}}},y={title:`Components/Card`,component:d,tags:[`autodocs`,`card`,`surface`,`container`],args:{...f},argTypes:_,parameters:v,decorators:[e=>(0,u.jsx)(`div`,{className:c[`story-card`],children:(0,u.jsx)(e,{})})],parameters:{docs:{description:{component:`El componente \`Card\` es un contenedor versátil que muestra contenido relacionado en una superficie clara y delimitada.\r
Soporta múltiples variantes visuales, imágenes opcionales y comportamiento clickeable.\r
\r
### Características principales:\r
- Múltiples variantes visuales (elevada, outline, etc.)\r
- Soporte para imágenes opcionales\r
- Comportamiento clickeable opcional\r
- Contenido personalizable\r
\r
### Uso recomendado:\r
- Para agrupar información relacionada\r
- Como tarjetas de producto\r
- Para mostrar resúmenes de artículos\r
- Como elementos de navegación`}}}},b={args:{...f,onClick:void 0}},x={args:{...h,onClick:void 0},parameters:{docs:{description:{story:`Variante con borde que resalta el contenido sin necesidad de un fondo sólido.`}}},decorators:[e=>(0,u.jsx)(`div`,{className:`card-story`,children:(0,u.jsx)(e,{})})]},S={args:{...g,onClick:void 0},parameters:{docs:{description:{story:`Variante con fondo sólido para mayor contraste y énfasis visual.`}},backgrounds:{default:`light`}},decorators:[e=>(0,u.jsx)(`div`,{className:`card-story`,children:(0,u.jsx)(e,{})})]},C={args:{...p,onClick:void 0,children:(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{children:`Esta es una tarjeta que no incluye una imagen.`}),(0,u.jsx)(`p`,{children:`Ideal para contenido que no requiere soporte visual.`})]})},parameters:{docs:{description:{story:`Ejemplo de una tarjeta que solo muestra texto sin imagen.`}}},decorators:[e=>(0,u.jsx)(`div`,{className:`card-story`,children:(0,u.jsx)(e,{})})]},w={args:{...m,onClick:()=>alert(`Card clicked!`),title:`Tarjeta clickeable`,subtitle:`Haz clic para ver la acción`,children:(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{children:`Esta tarjeta tiene un manejador de clics.`}),(0,u.jsx)(`p`,{children:`Intenta hacer clic en cualquier parte de la tarjeta.`})]})},parameters:{docs:{description:{story:`Tarjeta que puede ser clickeada y responde a eventos de clic.`}}},decorators:[e=>(0,u.jsx)(`div`,{className:`card-story`,children:(0,u.jsx)(e,{})})]};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...mockCardProps,
    onClick: undefined
  }
}`,...b.parameters?.docs?.source},description:{story:`Tarjeta estándar con imagen y contenido básico.\r
Esta es la variante por defecto del componente Card.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
  decorators: [Story => <div className="card-story">\r
        <Story />\r
      </div>]
}`,...x.parameters?.docs?.source},description:{story:`Tarjeta con variante de borde (outlined).\r
Ideal para destacar contenido sin un fondo sólido.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
  decorators: [Story => <div className="card-story">\r
        <Story />\r
      </div>]
}`,...S.parameters?.docs?.source},description:{story:`Tarjeta con variante de relleno (filled).\r
Proporciona un fondo sólido para mayor contraste.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...mockCardWithoutImage,
    onClick: undefined,
    children: <div>\r
        <p>Esta es una tarjeta que no incluye una imagen.</p>\r
        <p>Ideal para contenido que no requiere soporte visual.</p>\r
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de una tarjeta que solo muestra texto sin imagen.'
      }
    }
  },
  decorators: [Story => <div className="card-story">\r
        <Story />\r
      </div>]
}`,...C.parameters?.docs?.source},description:{story:`Tarjeta sin imagen que muestra solo el contenido de texto.\r
Útil cuando el contenido es más importante que la imagen.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...mockClickableCard,
    onClick: () => alert('Card clicked!'),
    title: 'Tarjeta clickeable',
    subtitle: 'Haz clic para ver la acción',
    children: <div>\r
        <p>Esta tarjeta tiene un manejador de clics.</p>\r
        <p>Intenta hacer clic en cualquier parte de la tarjeta.</p>\r
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: 'Tarjeta que puede ser clickeada y responde a eventos de clic.'
      }
    }
  },
  decorators: [Story => <div className="card-story">\r
        <Story />\r
      </div>]
}`,...w.parameters?.docs?.source},description:{story:`Tarjeta clickeable que responde a eventos de clic.\r
Útil para navegación o para mostrar más detalles.`,...w.parameters?.docs?.description}}};var T=[`Default`,`Outlined`,`Filled`,`WithoutImage`,`Clickable`];export{w as Clickable,b as Default,S as Filled,x as Outlined,C as WithoutImage,T as __namedExportsOrder,y as default};