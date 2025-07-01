import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as p,a as m,b as r}from"./index-DCiYrqKS.js";import"./index-D4lIrffr.js";import"./index-_oZgBBUR.js";const _={title:"Components/Title",component:r,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:Object.values(m),description:"Tamaño del título (h1-h6)",table:{type:{summary:"TitleSize"},defaultValue:{summary:"h1"}}},variant:{control:{type:"select"},options:Object.values(p),description:"Variante de color del título",table:{type:{summary:"TitleVariant"},defaultValue:{summary:"dark"}}},children:{control:"text",description:"Contenido del título",table:{type:{summary:"ReactNode"}}},bold:{control:"boolean",description:"Si es true, el título se muestra en negrita",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},italic:{control:"boolean",description:"Si es true, el título se muestra en cursiva",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},underline:{control:"boolean",description:"Si es true, el título se muestra subrayado",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},strikethrough:{control:"boolean",description:"Si es true, el título se muestra tachado",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},align:{control:"select",options:["left","center","right","justify"],description:"Alineación del texto",table:{type:{summary:"string"},defaultValue:{summary:"left"}}},block:{control:"boolean",description:"Si es true, el título ocupa todo el ancho disponible",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},noWrap:{control:"boolean",description:"Si es true, el texto no se rompe en varias líneas",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onClick:{action:"clicked",description:"Función que se ejecuta al hacer clic en el título",table:{type:{summary:"() => void"}}}},args:{children:"Título de ejemplo",size:m.H1,variant:p.DARK}},a={},l={args:{children:"Título con todas las propiedades",size:m.H2,variant:p.PRIMARY,bold:!0,italic:!0,underline:!0,strikethrough:!1,align:"center",block:!0,noWrap:!1}},n={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:Object.values(m).map(t=>e.jsxs(r,{size:t,children:["Título ",t.toUpperCase()]},t))})},o={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:Object.values(p).map(t=>e.jsxs(r,{variant:t,children:["Variante ",t]},t))})},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{children:"Estilo normal"}),e.jsx(r,{bold:!0,children:"Negrita"}),e.jsx(r,{italic:!0,children:"Cursiva"}),e.jsx(r,{underline:!0,children:"Subrayado"}),e.jsx(r,{strikethrough:!0,children:"Tachado"}),e.jsx(r,{bold:!0,italic:!0,children:"Negrita y cursiva"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{align:"left",children:"Alineación izquierda"}),e.jsx(r,{align:"center",children:"Alineación centrada"}),e.jsx(r,{align:"right",children:"Alineación derecha"}),e.jsx(r,{align:"justify",style:{maxWidth:"300px"},children:"Texto justificado: Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})},c={render:()=>e.jsxs("div",{style:{border:"1px solid #ccc",padding:"1rem"},children:[e.jsx(r,{block:!0,style:{display:"block",backgroundColor:"#f0f0f0",padding:"8px",marginBottom:"8px"},children:"Título en bloque (ocupa todo el ancho)"}),e.jsx("p",{children:"Contenido debajo del título"})]})},d={render:()=>e.jsxs("div",{style:{width:"200px",border:"1px solid #ccc",padding:"1rem"},children:[e.jsx(r,{noWrap:!0,children:"Este texto no se romperá en varias líneas aunque sea muy largo y no quepa en el contenedor"}),e.jsx(r,{children:"Este texto sí se romperá en varias líneas si no cabe en el contenedor"}),e.jsx("p",{children:"El título de arriba debería mostrarse en una sola línea con puntos suspensivos"})]})},u={args:{children:"Haz clic en este título",onClick:()=>alert("¡Título clickeado!")}};var y,x,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var g,h,T;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(T=(h=l.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var f,v,j;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      {Object.values(TitleSize).map(size => <Title key={size} size={size}>
          Título {size.toUpperCase()}
        </Title>)}
    </div>
}`,...(j=(v=n.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var k,S,V;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      {Object.values(TitleVariant).map(variant => <Title key={variant} variant={variant}>
          Variante {variant}
        </Title>)}
    </div>
}`,...(V=(S=o.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var z,C,A;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(A=(C=i.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var D,W,E;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(E=(W=s.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var q,N,O;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(O=(N=c.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var R,H,B;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(H=d.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var P,w,I;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: 'Haz clic en este título',
    onClick: () => alert('¡Título clickeado!')
  }
}`,...(I=(w=u.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const F=["Default","WithAllProps","Sizes","Variants","TextStyles","Alignments","Block","NoWrap","Clickable"];export{s as Alignments,c as Block,u as Clickable,a as Default,d as NoWrap,n as Sizes,i as TextStyles,o as Variants,l as WithAllProps,F as __namedExportsOrder,_ as default};
