import{n as e}from"./chunk-BneVvdWh.js";import{Ht as t,_t as n,b as r,x as i}from"./iframe-BrtTKpdh.js";var a,o,s,c,l=e((()=>{t(),a=n(),o={tabs:[{key:`tab1`,label:`Information`,content:(0,a.jsx)(`div`,{children:`Content of the Information tab.`})},{key:`tab2`,label:`Details`,content:(0,a.jsx)(`div`,{children:`Content of the Details tab.`})},{key:`tab3`,label:`History`,content:(0,a.jsx)(`div`,{children:`Content of the History tab.`})}]},s={defaultActiveKey:{control:{type:`text`},description:`Key of the tab that is active by default on first render.`,table:{type:{summary:`string`}}},onChange:{action:`changed`,description:`Callback fired with the key of the newly selected tab.`,table:{type:{summary:`(key: string) => void`}}}},c={docs:{description:{component:`A tabbed navigation component that switches between labelled content panels. Supports a configurable default active tab and exposes a change callback.`}}}})),u,d,f,p,m,h,g,_;e((()=>{t(),i(),l(),u=n(),{within:d,expect:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/Tabs`,component:r,tags:[`autodocs`],args:o,argTypes:s,parameters:c},m={play:async({canvasElement:e})=>{await f(d(e).getByRole(`tablist`)).toBeInTheDocument()}},h={args:{tabs:[{key:`t1`,label:`Active`,content:(0,u.jsx)(`div`,{children:`Active tab`})},{key:`t2`,label:`Disabled`,content:(0,u.jsx)(`div`,{children:`Not accessible`}),disabled:!0},{key:`t3`,label:`Normal`,content:(0,u.jsx)(`div`,{children:`Normal tab`})}]}},g={args:{defaultActiveKey:`tab2`,tabs:[{key:`tab1`,label:`First`,content:(0,u.jsx)(`div`,{children:`Content 1`})},{key:`tab2`,label:`Second`,content:(0,u.jsx)(`div`,{children:`Content 2 (active by default)`})},{key:`tab3`,label:`Third`,content:(0,u.jsx)(`div`,{children:`Content 3`})}]}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('tablist')).toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithDisabledTab`,`DefaultActiveSecond`]}))();export{m as Default,g as DefaultActiveSecond,h as WithDisabledTab,_ as __namedExportsOrder,p as default};