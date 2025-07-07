import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as a,a as r,b as s}from"./index-BNXUg2i0.js";import"./index-D4lIrffr.js";import"./classNames-CqjykrQM.js";const O={children:"Button",disabled:!1,fullWidth:!1};Object.values(r).join(" | "),Object.values(a).join(" | ");const V=Object.values(r).map(n=>({variant:n,label:n.charAt(0).toUpperCase()+n.slice(1)})),M=Object.values(a).map(n=>({size:n,label:n.charAt(0).toUpperCase()+n.slice(1)})),A={tags:["autodocs"],argTypes:{variant:{control:{type:"select",options:Object.values(r)},description:"Variante visual del botón",table:{type:{summary:Object.values(r).join(" | ")},defaultValue:{summary:r.PRIMARY}}},size:{control:{type:"select",options:Object.values(a)},description:"Tamaño del botón",table:{type:{summary:Object.values(a).join(" | ")},defaultValue:{summary:a.MEDIUM}}},disabled:{control:{type:"boolean"},description:"Si el botón está deshabilitado",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},fullWidth:{control:{type:"boolean"},description:"Si el botón ocupa todo el ancho disponible",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onClick:{action:"clicked",description:"Función que se ejecuta al hacer clic en el botón"}},args:O},E={title:"Components/Button",...A,component:s},l={args:{children:"Button",variant:r.PRIMARY,size:a.MEDIUM}},i={render:()=>e.jsx("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",alignItems:"center"},children:V.map(({variant:n,label:t})=>e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx("div",{style:{marginBottom:"0.5rem",fontSize:"0.875rem",color:"#666"},children:t}),e.jsxs(s,{variant:n,children:[t," Button"]})]},n))}),parameters:{docs:{source:{code:null}}}},o={render:()=>e.jsx("div",{style:{display:"flex",gap:"1.5rem",alignItems:"flex-end"},children:M.map(({size:n,label:t})=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{marginBottom:"0.5rem",fontSize:"0.875rem",color:"#666"},children:t}),e.jsxs(s,{size:n,children:[n," Button"]})]},n))}),parameters:{docs:{source:{code:null}}}},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1.5rem",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("div",{style:{fontSize:"0.875rem",color:"#666"},children:"Disabled"}),e.jsx(s,{disabled:!0,children:"Disabled Button"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",width:"100%",maxWidth:"300px"},children:[e.jsx("div",{style:{fontSize:"0.875rem",color:"#666"},children:"Full Width"}),e.jsx(s,{fullWidth:!0,children:"Full Width Button"})]})]}),parameters:{docs:{source:{code:null}}}},c={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:V.map(({variant:n,label:t})=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"0.75rem",fontSize:"0.875rem",color:"#666",fontWeight:"500"},children:[t," Variant"]}),e.jsx("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:M.map(({size:m,label:u})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:[e.jsx("div",{style:{fontSize:"0.75rem",color:"#888"},children:u}),e.jsx(s,{variant:n,size:m,children:u})]},`${n}-${m}`))})]},n))}),parameters:{docs:{source:{code:null}}}};var p,v,y;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: ButtonVariant.PRIMARY,
    size: ButtonSize.MEDIUM
  }
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var f,x,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      {variants.map(({
      variant,
      label
    }) => <div key={variant} style={{
      marginBottom: '1rem'
    }}>
          <div style={{
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        color: '#666'
      }}>
            {label}
          </div>
          <Button variant={variant}>
            {label} Button
          </Button>
        </div>)}
    </div>,
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  }
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var g,h,j;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'flex-end'
  }}>
      {sizes.map(({
      size,
      label
    }) => <div key={size} style={{
      textAlign: 'center'
    }}>
          <div style={{
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        color: '#666'
      }}>
            {label}
          </div>
          <Button size={size}>
            {size} Button
          </Button>
        </div>)}
    </div>,
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  }
}`,...(j=(h=o.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var B,z,S;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>
        <div style={{
        fontSize: '0.875rem',
        color: '#666'
      }}>Disabled</div>
        <Button disabled>Disabled Button</Button>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      width: '100%',
      maxWidth: '300px'
    }}>
        <div style={{
        fontSize: '0.875rem',
        color: '#666'
      }}>Full Width</div>
        <Button fullWidth>Full Width Button</Button>
      </div>
    </div>,
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  }
}`,...(S=(z=d.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var D,W,I;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>
      {variants.map(({
      variant,
      label: variantLabel
    }) => <div key={variant}>
          <div style={{
        marginBottom: '0.75rem',
        fontSize: '0.875rem',
        color: '#666',
        fontWeight: '500'
      }}>
            {variantLabel} Variant
          </div>
          <div style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
      }}>
            {sizes.map(({
          size,
          label: sizeLabel
        }) => <div key={\`\${variant}-\${size}\`} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
                <div style={{
            fontSize: '0.75rem',
            color: '#888'
          }}>{sizeLabel}</div>
                <Button variant={variant} size={size}>
                  {sizeLabel}
                </Button>
              </div>)}
          </div>
        </div>)}
    </div>,
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  }
}`,...(I=(W=c.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};const F=["Default","Variants","Sizes","States","Combinations"];export{c as Combinations,l as Default,o as Sizes,d as States,i as Variants,F as __namedExportsOrder,E as default};
