import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-D4lIrffr.js";import{D as m}from"./index-Tvm3Kq4A.js";import"./enums-Ca2RdD1G.js";const M={title:"Controls/DatePicker",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text",description:"Unique identifier for the date picker"},title:{control:"text",description:"Label text displayed above the date picker"},value:{control:"text",description:"Current date value in MM/DD/YYYY format"},disabled:{control:"boolean",description:"If true, the date picker is disabled"},readOnly:{control:"boolean",description:"If true, the date picker is read-only"},required:{control:"boolean",description:"If true, the date picker is required"},eventChange:{action:"dateChanged",description:"Callback function called when the date changes"}}},a=e=>{const[n,p]=I.useState(""),u=g=>{p(g)};return t.jsxs("div",{style:{width:"300px"},children:[t.jsx(m,{...e,value:n,eventChange:u}),t.jsxs("div",{style:{marginTop:"1rem",fontSize:"0.875rem"},children:[t.jsx("strong",{children:"Selected Date:"})," ",n||"None"]})]})},r={id:"date-picker",title:"Select a Date",value:"",disabled:!1,readOnly:!1,required:!1},s={render:e=>t.jsx(a,{...e}),args:{...r,id:"default-date-picker"}},i={render:e=>t.jsx(a,{...e}),args:{...r,id:"with-initial-value",title:"Birth Date"}},d={render:e=>t.jsx(a,{...e}),args:{...r,id:"disabled-date-picker",title:"Disabled Date Picker",disabled:!0}},o={render:e=>t.jsx(a,{...e}),args:{...r,id:"readonly-date-picker",title:"Read Only Date",readOnly:!0}},c={render:e=>t.jsx(a,{...e}),args:{...r,id:"required-date-picker",title:"Appointment Date",required:!0}},l={render:e=>{const n=()=>{const[p,u]=I.useState(""),g=B=>{u(B)};return t.jsxs("div",{style:{width:"300px"},children:[t.jsx("p",{style:{fontSize:"0.875rem",marginBottom:"1rem"},children:"This example shows a date picker with a custom date range (2000-2030)."}),t.jsx(m,{...e,value:p,eventChange:g})]})};return t.jsx(n,{})},args:{...r,id:"custom-range-date-picker",title:"Custom Date Range"}};var h,D,k;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <DatePickerWithState {...args} />,
  args: {
    ...baseArgs,
    id: 'default-date-picker'
  }
}`,...(k=(D=s.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var x,b,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <DatePickerWithState {...args} />,
  args: {
    ...baseArgs,
    id: 'with-initial-value',
    title: 'Birth Date'
  }
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,y,S;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <DatePickerWithState {...args} />,
  args: {
    ...baseArgs,
    id: 'disabled-date-picker',
    title: 'Disabled Date Picker',
    disabled: true
  }
}`,...(S=(y=d.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var C,j,P;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <DatePickerWithState {...args} />,
  args: {
    ...baseArgs,
    id: 'readonly-date-picker',
    title: 'Read Only Date',
    readOnly: true
  }
}`,...(P=(j=o.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var R,q,w;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <DatePickerWithState {...args} />,
  args: {
    ...baseArgs,
    id: 'required-date-picker',
    title: 'Appointment Date',
    required: true
  }
}`,...(w=(q=c.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var W,A,O;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    // Create a proper component to use hooks
    const DateRangePicker = () => {
      const [date, setDate] = useState('');
      const handleDateChange = (value: string) => {
        setDate(value);
      };
      return <div style={{
        width: '300px'
      }}>
          <p style={{
          fontSize: '0.875rem',
          marginBottom: '1rem'
        }}>
            This example shows a date picker with a custom date range (2000-2030).
          </p>
          <DatePicker {...args} value={date} eventChange={handleDateChange} />
        </div>;
    };
    return <DateRangePicker />;
  },
  args: {
    ...baseArgs,
    id: 'custom-range-date-picker',
    title: 'Custom Date Range'
  }
}`,...(O=(A=l.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};const V=["Default","WithInitialValue","Disabled","ReadOnly","Required","WithCustomDateRange"];export{s as Default,d as Disabled,o as ReadOnly,c as Required,l as WithCustomDateRange,i as WithInitialValue,V as __namedExportsOrder,M as default};
