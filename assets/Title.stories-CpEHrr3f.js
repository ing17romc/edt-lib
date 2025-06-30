import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as se,R as ne}from"./index-D4lIrffr.js";import{c as oe}from"./index-Bckx9Gcf.js";var r=(e=>(e.H1="h1",e.H2="h2",e.H3="h3",e.H4="h4",e.H5="h5",e.H6="h6",e))(r||{}),i=(e=>(e.PRIMARY="primary",e.SECONDARY="secondary",e.DANGER="danger",e.SUCCESS="success",e.WARNING="warning",e.INFO="info",e.LIGHT="light",e.DARK="dark",e))(i||{});const ce="_title_148s8_1",a={title:ce,"title--h1":"_title--h1_148s8_9","title--h2":"_title--h2_148s8_13","title--h3":"_title--h3_148s8_17","title--h4":"_title--h4_148s8_21","title--h5":"_title--h5_148s8_25","title--h6":"_title--h6_148s8_29","title--primary":"_title--primary_148s8_33","title--secondary":"_title--secondary_148s8_36","title--danger":"_title--danger_148s8_39","title--success":"_title--success_148s8_42","title--warning":"_title--warning_148s8_45","title--info":"_title--info_148s8_48","title--light":"_title--light_148s8_51","title--dark":"_title--dark_148s8_54","title--bold":"_title--bold_148s8_57","title--italic":"_title--italic_148s8_60","title--underline":"_title--underline_148s8_63","title--strikethrough":"_title--strikethrough_148s8_66","title--left":"_title--left_148s8_69","title--center":"_title--center_148s8_72","title--right":"_title--right_148s8_75","title--justify":"_title--justify_148s8_78","title--block":"_title--block_148s8_81","title--noWrap":"_title--noWrap_148s8_85","title--clickable":"_title--clickable_148s8_90"},l=se.forwardRef(({size:e=r.H1,variant:G=i.DARK,children:L,className:M,bold:U=!1,italic:$=!1,underline:F=!1,strikethrough:J=!1,align:y="left",block:Q=!0,noWrap:X=!1,id:Z,onClick:h,style:ee,...te},le)=>{const ae=e,re=oe(a.title,a[`title--${e}`],a[`title--${G}`],{[a["title--bold"]]:U,[a["title--italic"]]:$,[a["title--underline"]]:F,[a["title--strikethrough"]]:J,[a[`title--${y}`]]:y,[a["title--block"]]:Q,[a["title--noWrap"]]:X,[a["title--clickable"]]:!!h},M),ie={...te,className:re,id:Z,onClick:h,style:ee};return ne.createElement(ae,{...ie,ref:le},L)});l.displayName="Title";l.__docgenInfo={description:"",methods:[],displayName:"Title",props:{size:{required:!1,tsType:{name:"TitleSize"},description:`Tamaño del título (corresponde a los elementos h1-h6)
@default 'h1'`,defaultValue:{value:"TitleSize.H1",computed:!0}},variant:{required:!1,tsType:{name:"TitleVariant"},description:`Variante de color del título
@default 'dark'`,defaultValue:{value:"TitleVariant.DARK",computed:!0}},children:{required:!0,tsType:{name:"ReactNode"},description:"Contenido del título"},bold:{required:!1,tsType:{name:"boolean"},description:`Si es true, el título se mostrará en negrita
@default false`,defaultValue:{value:"false",computed:!1}},italic:{required:!1,tsType:{name:"boolean"},description:`Si es true, el título se mostrará en cursiva
@default false`,defaultValue:{value:"false",computed:!1}},underline:{required:!1,tsType:{name:"boolean"},description:`Si es true, el título se mostrará subrayado
@default false`,defaultValue:{value:"false",computed:!1}},strikethrough:{required:!1,tsType:{name:"boolean"},description:`Si es true, el título se mostrará tachado
@default false`,defaultValue:{value:"false",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right' | 'justify'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"},{name:"literal",value:"'justify'"}]},description:`Alineación del texto
@default 'left'`,defaultValue:{value:"'left'",computed:!1}},block:{required:!1,tsType:{name:"boolean"},description:`Si es true, el título será un elemento de bloque
@default true`,defaultValue:{value:"true",computed:!1}},noWrap:{required:!1,tsType:{name:"boolean"},description:`Si es true, el texto no se romperá en varias líneas
@default false`,defaultValue:{value:"false",computed:!1}}}};const me={title:"Components/Title",component:l,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:Object.values(r),description:"Tamaño del título (h1-h6)",table:{type:{summary:"TitleSize"},defaultValue:{summary:"h1"}}},variant:{control:{type:"select"},options:Object.values(i),description:"Variante de color del título",table:{type:{summary:"TitleVariant"},defaultValue:{summary:"dark"}}},children:{control:"text",description:"Contenido del título",table:{type:{summary:"ReactNode"}}},bold:{control:"boolean",description:"Si es true, el título se muestra en negrita",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},italic:{control:"boolean",description:"Si es true, el título se muestra en cursiva",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},underline:{control:"boolean",description:"Si es true, el título se muestra subrayado",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},strikethrough:{control:"boolean",description:"Si es true, el título se muestra tachado",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},align:{control:"select",options:["left","center","right","justify"],description:"Alineación del texto",table:{type:{summary:"string"},defaultValue:{summary:"left"}}},block:{control:"boolean",description:"Si es true, el título ocupa todo el ancho disponible",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},noWrap:{control:"boolean",description:"Si es true, el texto no se rompe en varias líneas",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onClick:{action:"clicked",description:"Función que se ejecuta al hacer clic en el título",table:{type:{summary:"() => void"}}}},args:{children:"Título de ejemplo",size:r.H1,variant:i.DARK}},s={},n={args:{children:"Título con todas las propiedades",size:r.H2,variant:i.PRIMARY,bold:!0,italic:!0,underline:!0,strikethrough:!1,align:"center",block:!0,noWrap:!1}},o={render:()=>t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:Object.values(r).map(e=>t.jsxs(l,{size:e,children:["Título ",e.toUpperCase()]},e))})},c={render:()=>t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:Object.values(i).map(e=>t.jsxs(l,{variant:e,children:["Variante ",e]},e))})},d={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[t.jsx(l,{children:"Estilo normal"}),t.jsx(l,{bold:!0,children:"Negrita"}),t.jsx(l,{italic:!0,children:"Cursiva"}),t.jsx(l,{underline:!0,children:"Subrayado"}),t.jsx(l,{strikethrough:!0,children:"Tachado"}),t.jsx(l,{bold:!0,italic:!0,children:"Negrita y cursiva"})]})},u={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[t.jsx(l,{align:"left",children:"Alineación izquierda"}),t.jsx(l,{align:"center",children:"Alineación centrada"}),t.jsx(l,{align:"right",children:"Alineación derecha"}),t.jsx(l,{align:"justify",style:{maxWidth:"300px"},children:"Texto justificado: Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})},p={render:()=>t.jsxs("div",{style:{border:"1px solid #ccc",padding:"1rem"},children:[t.jsx(l,{block:!0,style:{display:"block",backgroundColor:"#f0f0f0",padding:"8px",marginBottom:"8px"},children:"Título en bloque (ocupa todo el ancho)"}),t.jsx("p",{children:"Contenido debajo del título"})]})},m={render:()=>t.jsxs("div",{style:{width:"200px",border:"1px solid #ccc",padding:"1rem"},children:[t.jsx(l,{noWrap:!0,children:"Este texto no se romperá en varias líneas aunque sea muy largo y no quepa en el contenedor"}),t.jsx(l,{children:"Este texto sí se romperá en varias líneas si no cabe en el contenedor"}),t.jsx("p",{children:"El título de arriba debería mostrarse en una sola línea con puntos suspensivos"})]})},f={args:{children:"Haz clic en este título",onClick:()=>alert("¡Título clickeado!")}};var g,b,_;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(_=(b=s.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var x,v,T;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Título con todas las propiedades',
    size: TitleSize.H2,
    variant: TitleVariant.PRIMARY,
    bold: true,
    italic: true,
    underline: true,
    strikethrough: false,
    align: 'center',
    block: true,
    noWrap: false
  }
}`,...(T=(v=n.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var j,k,S;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      {Object.values(TitleSize).map(size => <Title key={size} size={size}>
          Título {size.toUpperCase()}
        </Title>)}
    </div>
}`,...(S=(k=o.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var A,V,q;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      {Object.values(TitleVariant).map(variant => <Title key={variant} variant={variant}>
          Variante {variant}
        </Title>)}
    </div>
}`,...(q=(V=c.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var C,R,D;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Title>Estilo normal</Title>
      <Title bold>Negrita</Title>
      <Title italic>Cursiva</Title>
      <Title underline>Subrayado</Title>
      <Title strikethrough>Tachado</Title>
      <Title bold italic>Negrita y cursiva</Title>
    </div>
}`,...(D=(R=d.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var N,W,E;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Title align="left">Alineación izquierda</Title>
      <Title align="center">Alineación centrada</Title>
      <Title align="right">Alineación derecha</Title>
      <Title align="justify" style={{
      maxWidth: '300px'
    }}>
        Texto justificado: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Title>
    </div>
}`,...(E=(W=u.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var H,z,O;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    border: '1px solid #ccc',
    padding: '1rem'
  }}>
      <Title block style={{
      display: 'block',
      backgroundColor: '#f0f0f0',
      padding: '8px',
      marginBottom: '8px'
    }}>
        Título en bloque (ocupa todo el ancho)
      </Title>
      <p>Contenido debajo del título</p>
    </div>
}`,...(O=(z=p.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var w,I,P;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '200px',
    border: '1px solid #ccc',
    padding: '1rem'
  }}>
      <Title noWrap>
        Este texto no se romperá en varias líneas aunque sea muy largo y no quepa en el contenedor
      </Title>
      <Title>
        Este texto sí se romperá en varias líneas si no cabe en el contenedor
      </Title>
      <p>El título de arriba debería mostrarse en una sola línea con puntos suspensivos</p>
    </div>
}`,...(P=(I=m.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var B,K,Y;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Haz clic en este título',
    onClick: () => alert('¡Título clickeado!')
  }
}`,...(Y=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};const fe=["Default","WithAllProps","Sizes","Variants","TextStyles","Alignments","Block","NoWrap","Clickable"];export{u as Alignments,p as Block,f as Clickable,s as Default,m as NoWrap,o as Sizes,d as TextStyles,c as Variants,n as WithAllProps,fe as __namedExportsOrder,me as default};
