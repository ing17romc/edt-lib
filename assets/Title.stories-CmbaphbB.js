import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as p,b as m,T as t}from"./index-B5_srWU3.js";import"./index-CgfFrydU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B0pXE9zJ.js";const U={title:"Components/Title",component:t,tags:["autodocs"],parameters:{componentSubtitle:"Componente de título con múltiples variantes y tamaños"},argTypes:{size:{control:{type:"select"},options:Object.values(m),description:"Tamaño del título (h1-h6)",table:{type:{summary:"TitleSize"},defaultValue:{summary:"h1"}}},variant:{control:{type:"select"},options:Object.values(p),description:"Variante de color del título",table:{type:{summary:"TitleVariant"},defaultValue:{summary:"dark"}}},children:{control:"text",description:"Contenido del título",table:{type:{summary:"ReactNode"}}},bold:{control:"boolean",description:"Si es true, el título se muestra en negrita",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},italic:{control:"boolean",description:"Si es true, el título se muestra en cursiva",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},underline:{control:"boolean",description:"Si es true, el título se muestra subrayado",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},strikethrough:{control:"boolean",description:"Si es true, el título se muestra tachado",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},align:{control:"select",options:["left","center","right","justify"],description:"Alineación del texto",table:{type:{summary:"string"},defaultValue:{summary:"left"}}},block:{control:"boolean",description:"Si es true, el título ocupa todo el ancho disponible",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},noWrap:{control:"boolean",description:"Si es true, el texto no se rompe en varias líneas",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onClick:{action:"clicked",description:"Función que se ejecuta al hacer clic en el título",table:{type:{summary:"() => void"}}}},args:{children:"Título de ejemplo",size:m.H1,variant:p.DARK}},_={children:"Título con todas las propiedades",size:m.H2,variant:p.PRIMARY,bold:!0,italic:!0,underline:!0,strikethrough:!1,align:"center",block:!0,noWrap:!1,onClick:()=>{console.log("Title clicked")}},G={...U,title:"Components/Title"},a={},l={args:_},o={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:Object.values(m).map(r=>e.jsxs(t,{size:r,children:["Título ",r.toUpperCase()]},r))})},n={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:Object.values(p).map(r=>e.jsxs(t,{variant:r,children:["Variante ",r]},r))})},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(t,{children:"Estilo normal"}),e.jsx(t,{bold:!0,children:"Negrita"}),e.jsx(t,{italic:!0,children:"Cursiva"}),e.jsx(t,{underline:!0,children:"Subrayado"}),e.jsx(t,{strikethrough:!0,children:"Tachado"}),e.jsx(t,{bold:!0,italic:!0,children:"Negrita y cursiva"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(t,{align:"left",children:"Alineación izquierda"}),e.jsx(t,{align:"center",children:"Alineación centrada"}),e.jsx(t,{align:"right",children:"Alineación derecha"}),e.jsx(t,{align:"justify",style:{maxWidth:"300px"},children:"Texto justificado: Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})},c={render:()=>e.jsxs("div",{style:{border:"1px solid #ccc",padding:"1rem"},children:[e.jsx(t,{block:!0,style:{display:"block",backgroundColor:"#f0f0f0",padding:"8px",marginBottom:"8px"},children:"Título en bloque (ocupa todo el ancho)"}),e.jsx("p",{children:"Contenido debajo del título"})]})},d={render:()=>e.jsxs("div",{style:{width:"200px",border:"1px solid #ccc",padding:"1rem"},children:[e.jsx(t,{noWrap:!0,children:"Este texto no se romperá en varias líneas aunque sea muy largo y no quepa en el contenedor"}),e.jsx(t,{children:"Este texto sí se romperá en varias líneas si no cabe en el contenedor"}),e.jsx("p",{children:"El título de arriba debería mostrarse en una sola línea con puntos suspensivos"})]})},u={args:{children:"Haz clic en este título",onClick:()=>alert("¡Título clickeado!")}};var y,x,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var b,h,T;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: withAllPropsArgs
}`,...(T=(h=l.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var f,v,j;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      {Object.values(TitleSize).map(size => <Title key={size} size={size}>
          Título {size.toUpperCase()}
        </Title>)}
    </div>
}`,...(j=(v=o.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var k,S,C;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      {Object.values(TitleVariant).map(variant => <Title key={variant} variant={variant}>
          Variante {variant}
        </Title>)}
    </div>
}`,...(C=(S=n.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var A,V,z;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(z=(V=i.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var D,E,W;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(W=(E=s.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var q,N,O;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(O=(N=c.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var P,R,w;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(w=(R=d.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var B,H,L;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Haz clic en este título',
    onClick: () => alert('¡Título clickeado!')
  }
}`,...(L=(H=u.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};const J=["Default","WithAllProps","Sizes","Variants","TextStyles","Alignments","Block","NoWrap","Clickable"];export{s as Alignments,c as Block,u as Clickable,a as Default,d as NoWrap,o as Sizes,i as TextStyles,n as Variants,l as WithAllProps,J as __namedExportsOrder,G as default};
