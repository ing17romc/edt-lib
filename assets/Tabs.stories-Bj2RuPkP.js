import{r as e,t}from"./iframe-YpqvHZo3.js";import{t as n}from"./jsx-runtime-ChNUh70B.js";import{t as r}from"./classNames-DYb3CZs3.js";var i=e(t(),1),a=`_tabs_12jes_1`,o=`_tabList_12jes_7`,s=`_tab_12jes_1`,c=`_panel_12jes_42`,l={tabs:a,tabList:o,tab:s,"tab--active":`_tab--active_12jes_31`,"tab--disabled":`_tab--disabled_12jes_36`,panel:c},u=n(),d=({tabs:e,activeKey:t,defaultActiveKey:n,onChange:a,className:o,...s})=>{let[c,d]=(0,i.useState)(n??e[0]?.key??``),f=t??c,p=e=>{t||d(e),a?.(e)},m=e.find(e=>e.key===f);return(0,u.jsxs)(`div`,{className:r(l.tabs,o),...s,children:[(0,u.jsx)(`div`,{role:`tablist`,className:l.tabList,children:e.map(e=>(0,u.jsx)(`button`,{role:`tab`,type:`button`,"aria-selected":e.key===f,"aria-controls":`panel-${e.key}`,id:`tab-${e.key}`,disabled:e.disabled,className:r(l.tab,e.key===f&&l[`tab--active`],e.disabled&&l[`tab--disabled`]),onClick:()=>!e.disabled&&p(e.key),children:e.label},e.key))}),m&&(0,u.jsx)(`div`,{role:`tabpanel`,id:`panel-${m.key}`,"aria-labelledby":`tab-${m.key}`,className:l.panel,children:m.content})]})};d.__docgenInfo={description:`Componente Tabs que permite navegar entre varias secciones de contenido.\r
\r
@param tabs - Listado de pestañas con su contenido\r
@param activeKey - Key activo (modo controlado)\r
@param defaultActiveKey - Key activo por defecto (modo no controlado)\r
@param onChange - Callback al cambiar de pestaña`,methods:[],displayName:`Tabs`,props:{tabs:{required:!0,tsType:{name:`Array`,elements:[{name:`TabItem`}],raw:`TabItem[]`},description:`Lista de pestañas`},activeKey:{required:!1,tsType:{name:`string`},description:`Key del tab activo (modo controlado)`},defaultActiveKey:{required:!1,tsType:{name:`string`},description:`Key del tab activo por defecto (modo no controlado)`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:`Callback al cambiar de pestaña`}},composes:[`HTMLAttributes`]};var f={title:`Components/Tabs`,component:d,tags:[`autodocs`],args:{tabs:[{key:`tab1`,label:`Information`,content:(0,u.jsx)(`div`,{children:`Content of the Information tab.`})},{key:`tab2`,label:`Details`,content:(0,u.jsx)(`div`,{children:`Content of the Details tab.`})},{key:`tab3`,label:`History`,content:(0,u.jsx)(`div`,{children:`Content of the History tab.`})}]},argTypes:{defaultActiveKey:{control:`text`,description:`Key of the tab that is active by default on first render.`,table:{type:{summary:`string`}}},onChange:{action:`changed`,description:`Callback fired with the key of the newly selected tab.`,table:{type:{summary:`(key: string) => void`}}}},parameters:{docs:{description:{component:`A tabbed navigation component that switches between labelled content panels. Supports a configurable default active tab and exposes a change callback.`}}}},p={},m={args:{tabs:[{key:`t1`,label:`Active`,content:(0,u.jsx)(`div`,{children:`Active tab`})},{key:`t2`,label:`Disabled`,content:(0,u.jsx)(`div`,{children:`Not accessible`}),disabled:!0},{key:`t3`,label:`Normal`,content:(0,u.jsx)(`div`,{children:`Normal tab`})}]}},h={args:{defaultActiveKey:`tab2`,tabs:[{key:`tab1`,label:`First`,content:(0,u.jsx)(`div`,{children:`Content 1`})},{key:`tab2`,label:`Second`,content:(0,u.jsx)(`div`,{children:`Content 2 (active by default)`})},{key:`tab3`,label:`Third`,content:(0,u.jsx)(`div`,{children:`Content 3`})}]}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      key: 't1',
      label: 'Active',
      content: <div>Active tab</div>
    }, {
      key: 't2',
      label: 'Disabled',
      content: <div>Not accessible</div>,
      disabled: true
    }, {
      key: 't3',
      label: 'Normal',
      content: <div>Normal tab</div>
    }]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    defaultActiveKey: 'tab2',
    tabs: [{
      key: 'tab1',
      label: 'First',
      content: <div>Content 1</div>
    }, {
      key: 'tab2',
      label: 'Second',
      content: <div>Content 2 (active by default)</div>
    }, {
      key: 'tab3',
      label: 'Third',
      content: <div>Content 3</div>
    }]
  }
}`,...h.parameters?.docs?.source}}};var g=[`Default`,`WithDisabledTab`,`DefaultActiveSecond`];export{p as Default,h as DefaultActiveSecond,m as WithDisabledTab,g as __namedExportsOrder,f as default};