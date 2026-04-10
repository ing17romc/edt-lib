import{r as e,t}from"./iframe-BwpCWMiM.js";import{t as n}from"./jsx-runtime-BsbbwSUz.js";import{t as r}from"./classNames-DYb3CZs3.js";import{n as i,t as a}from"./types-BTwUNDvM.js";var o=`_button_ujxwg_1`,s=`_spin_ujxwg_1`,c={button:o,"button--small":`_button--small_ujxwg_27`,"button--medium":`_button--medium_ujxwg_33`,"button--large":`_button--large_ujxwg_39`,"button--primary":`_button--primary_ujxwg_45`,"button--secondary":`_button--secondary_ujxwg_55`,"button--tertiary":`_button--tertiary_ujxwg_66`,"button--danger":`_button--danger_ujxwg_76`,"button--success":`_button--success_ujxwg_86`,"button--warning":`_button--warning_ujxwg_96`,"button--fullWidth":`_button--fullWidth_ujxwg_106`,"button--loading":`_button--loading_ujxwg_110`,spin:s},l=e(t(),1),u=n(),d=(0,l.forwardRef)(({children:e,variant:t=i.PRIMARY,size:n=a.MEDIUM,type:o=`button`,disabled:s=!1,fullWidth:l=!1,className:d,onClick:f,...p},m)=>{let h=r(c.button,c[`button--${t}`],c[`button--${n}`],{[c[`button--fullWidth`]]:l},d);return(0,u.jsx)(`button`,{ref:m,type:o,className:h,disabled:s,onClick:e=>{if(s){e.preventDefault();return}f&&f(e)},...p,children:e})});d.displayName=`Button`,d.__docgenInfo={description:`Highly customizable Button component that provides an interactive user interface\r
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
@default false`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.MouseEvent<HTMLButtonElement>) => void`,signature:{arguments:[{type:{name:`ReactMouseEvent`,raw:`React.MouseEvent<HTMLButtonElement>`,elements:[{name:`HTMLButtonElement`}]},name:`event`}],return:{name:`void`}}},description:`Button click handler`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class for the button`}},composes:[`Omit`]};export{d as t};