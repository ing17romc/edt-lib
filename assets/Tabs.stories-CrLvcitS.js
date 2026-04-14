import{a as e,n as t}from"./chunk-BneVvdWh.js";import{O as n,a as r,i,o as a}from"./iframe-BoT0I_bJ.js";var o,s,c,l,u,d=t((()=>{o=`_tabs_yhgwf_1`,s=`_tabList_yhgwf_7`,c=`_tab_yhgwf_1`,l=`_panel_yhgwf_42`,u={tabs:o,tabList:s,tab:c,"tab--active":`_tab--active_yhgwf_31`,"tab--disabled":`_tab--disabled_yhgwf_36`,panel:l}})),f,p,m,h=t((()=>{f=e(n(),1),a(),d(),p=i(),m=({tabs:e,activeKey:t,defaultActiveKey:n,onChange:i,className:a,...o})=>{let[s,c]=(0,f.useState)(n??e[0]?.key??``),l=t??s,d=e=>{t||c(e),i?.(e)},m=e.find(e=>e.key===l);return(0,p.jsxs)(`div`,{className:r(u.tabs,a),...o,children:[(0,p.jsx)(`div`,{role:`tablist`,className:u.tabList,children:e.map(e=>(0,p.jsx)(`button`,{role:`tab`,type:`button`,"aria-selected":e.key===l,"aria-controls":`panel-${e.key}`,id:`tab-${e.key}`,disabled:e.disabled,className:r(u.tab,e.key===l&&u[`tab--active`],e.disabled&&u[`tab--disabled`]),onClick:()=>!e.disabled&&d(e.key),children:e.label},e.key))}),m&&(0,p.jsx)(`div`,{role:`tabpanel`,id:`panel-${m.key}`,"aria-labelledby":`tab-${m.key}`,className:u.panel,children:m.content})]})},m.__docgenInfo={description:`Tabs component that allows navigating between multiple content sections.\r
\r
@param tabs - List of tabs with their content\r
@param activeKey - Active key (controlled mode)\r
@param defaultActiveKey - Default active key (uncontrolled mode)\r
@param onChange - Callback when changing tabs`,methods:[],displayName:`Tabs`,props:{tabs:{required:!0,tsType:{name:`Array`,elements:[{name:`TabItem`}],raw:`TabItem[]`},description:`List of tabs`},activeKey:{required:!1,tsType:{name:`string`},description:`Active tab key (controlled mode)`},defaultActiveKey:{required:!1,tsType:{name:`string`},description:`Default active tab key (uncontrolled mode)`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:`Callback when changing tabs`}},composes:[`Omit`]}})),g,_,v,y,b=t((()=>{n(),g=i(),_={tabs:[{key:`tab1`,label:`Information`,content:(0,g.jsx)(`div`,{children:`Content of the Information tab.`})},{key:`tab2`,label:`Details`,content:(0,g.jsx)(`div`,{children:`Content of the Details tab.`})},{key:`tab3`,label:`History`,content:(0,g.jsx)(`div`,{children:`Content of the History tab.`})}]},v={defaultActiveKey:{control:{type:`text`},description:`Key of the tab that is active by default on first render.`,table:{type:{summary:`string`}}},onChange:{action:`changed`,description:`Callback fired with the key of the newly selected tab.`,table:{type:{summary:`(key: string) => void`}}}},y={docs:{description:{component:`A tabbed navigation component that switches between labelled content panels. Supports a configurable default active tab and exposes a change callback.`}}}})),x,S,C,w,T,E,D,O;t((()=>{n(),h(),b(),x=i(),{within:S,expect:C}=__STORYBOOK_MODULE_TEST__,w={title:`Components/Tabs`,component:m,tags:[`autodocs`],args:_,argTypes:v,parameters:y},T={play:async({canvasElement:e})=>{await C(S(e).getByRole(`tablist`)).toBeInTheDocument()}},E={args:{tabs:[{key:`t1`,label:`Active`,content:(0,x.jsx)(`div`,{children:`Active tab`})},{key:`t2`,label:`Disabled`,content:(0,x.jsx)(`div`,{children:`Not accessible`}),disabled:!0},{key:`t3`,label:`Normal`,content:(0,x.jsx)(`div`,{children:`Normal tab`})}]}},D={args:{defaultActiveKey:`tab2`,tabs:[{key:`tab1`,label:`First`,content:(0,x.jsx)(`div`,{children:`Content 1`})},{key:`tab2`,label:`Second`,content:(0,x.jsx)(`div`,{children:`Content 2 (active by default)`})},{key:`tab3`,label:`Third`,content:(0,x.jsx)(`div`,{children:`Content 3`})}]}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('tablist')).toBeInTheDocument();
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O=[`Default`,`WithDisabledTab`,`DefaultActiveSecond`]}))();export{T as Default,D as DefaultActiveSecond,E as WithDisabledTab,O as __namedExportsOrder,w as default};