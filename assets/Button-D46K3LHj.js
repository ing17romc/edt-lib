import{a as e,n as t}from"./chunk-BneVvdWh.js";import{O as n,a as r,i,o as a}from"./iframe-BoT0I_bJ.js";import{n as o,r as s,t as c}from"./types-SSqGpC_M.js";var l,u,d,f=t((()=>{l=`_button_170wf_1`,u=`_spin_170wf_1`,d={button:l,"button--small":`_button--small_170wf_27`,"button--medium":`_button--medium_170wf_33`,"button--large":`_button--large_170wf_39`,"button--primary":`_button--primary_170wf_45`,"button--secondary":`_button--secondary_170wf_55`,"button--tertiary":`_button--tertiary_170wf_66`,"button--danger":`_button--danger_170wf_76`,"button--success":`_button--success_170wf_86`,"button--warning":`_button--warning_170wf_96`,"button--fullWidth":`_button--fullWidth_170wf_106`,"button--loading":`_button--loading_170wf_110`,spin:u}})),p,m,h,g=t((()=>{p=e(n(),1),a(),f(),s(),m=i(),h=(0,p.forwardRef)(({children:e,variant:t=o.PRIMARY,size:n=c.MEDIUM,type:i=`button`,disabled:a=!1,fullWidth:s=!1,className:l,onClick:u,...f},p)=>{let h=r(d.button,d[`button--${t}`],d[`button--${n}`],{[d[`button--fullWidth`]]:s},l);return(0,m.jsx)(`button`,{ref:p,type:i,className:h,disabled:a,onClick:e=>{if(a){e.preventDefault();return}u&&u(e)},...f,children:e})}),h.displayName=`Button`,h.__docgenInfo={description:`Highly customizable Button component that provides an interactive user interface\r
with multiple style variants, sizes, and states.\r
\r
@component\r
\r
@example\r
// Basic example\r
<Button onClick={() => console.log('Click')}>\r
  Primary Button\r
</Button>\r
\r
@example\r
// Button with secondary variant and large size\r
<Button variant="secondary" size="large">\r
  Secondary Action\r
</Button>\r
\r
@example\r
// Disabled full-width button\r
<Button \r
  variant="danger" \r
  disabled \r
  fullWidth\r
  onClick={handleDelete}\r
>\r
  Delete permanently\r
</Button>\r
\r
@example\r
// Submit button in a form\r
<form onSubmit={handleSubmit}>\r
  <Button type="submit">Submit</Button>\r
</form>`,methods:[],displayName:`Button`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:`Button content (text or React elements)`},variant:{required:!1,tsType:{name:`ComponentVariant`},description:`Visual variant of the button\r
@default 'primary'`,defaultValue:{value:`ComponentVariant.PRIMARY`,computed:!0}},size:{required:!1,tsType:{name:`ComponentSize`},description:`Button size\r
@default 'medium'`,defaultValue:{value:`ComponentSize.MEDIUM`,computed:!0}},fullWidth:{required:!1,tsType:{name:`boolean`},description:`If true, the button takes up the full available width\r
@default false`,defaultValue:{value:`false`,computed:!1}},type:{required:!1,tsType:{name:`union`,raw:`'button' | 'submit' | 'reset'`,elements:[{name:`literal`,value:`'button'`},{name:`literal`,value:`'submit'`},{name:`literal`,value:`'reset'`}]},description:`HTML button type\r
@default 'button'`,defaultValue:{value:`'button'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`If true, the button is disabled\r
@default false`,defaultValue:{value:`false`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:`If true, the button is loading\r
@default false`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.MouseEvent<HTMLButtonElement>) => void`,signature:{arguments:[{type:{name:`ReactMouseEvent`,raw:`React.MouseEvent<HTMLButtonElement>`,elements:[{name:`HTMLButtonElement`}]},name:`event`}],return:{name:`void`}}},description:`Button click handler`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class for the button`}},composes:[`Omit`]}}));export{g as n,h as t};