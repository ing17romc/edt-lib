import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as z}from"./index-D4lIrffr.js";import{D as g}from"./index-qADxr97m.js";const Y={title:"Controls/DatePicker",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text",description:"Unique identifier for the date picker"},title:{control:"text",description:"Label text displayed above the date picker"},value:{control:"text",description:"Current date value in MM/DD/YYYY format"},disabled:{control:"boolean",description:"If true, the date picker is disabled"},readOnly:{control:"boolean",description:"If true, the date picker is read-only"},required:{control:"boolean",description:"If true, the date picker is required"},eventChange:{action:"dateChanged",description:"Callback function called when the date changes"}}},s=e=>{const[a,p]=z.useState(""),m=r=>{var n;p(r),(n=e.eventChange)==null||n.call(e,r)};return t.jsxs("div",{style:{width:"300px"},children:[t.jsx(g,{...e,value:a,eventChange:m}),t.jsxs("div",{style:{marginTop:"1rem",fontSize:"0.875rem"},children:[t.jsx("strong",{children:"Selected Date:"})," ",a||"None"]})]})},i={render:e=>t.jsx(s,{...e}),args:{id:"default-date-picker",title:"Select a Date",value:""}},d={render:e=>t.jsx(s,{...e}),args:{id:"with-initial-value",title:"Birth Date",value:"5/15/1990"}},o={render:e=>t.jsx(s,{...e}),args:{id:"disabled-date-picker",title:"Disabled Date Picker",value:"1/1/2023",disabled:!0}},c={render:e=>t.jsx(s,{...e}),args:{id:"readonly-date-picker",title:"Read Only Date",value:"12/25/2023",readOnly:!0}},l={render:e=>t.jsx(s,{...e}),args:{id:"required-date-picker",title:"Appointment Date",value:"",required:!0}},u={render:e=>{const[a,p]=z.useState(""),m=r=>{var n;p(r),(n=e.eventChange)==null||n.call(e,r)};return t.jsxs("div",{style:{width:"300px"},children:[t.jsx("p",{style:{fontSize:"0.875rem",marginBottom:"1rem"},children:"This example shows a date picker with a custom date range (2000-2030)."}),t.jsx(g,{...restArgs,value:a,eventChange:m}),t.jsxs("div",{style:{marginTop:"1rem",fontSize:"0.875rem"},children:[t.jsx("strong",{children:"Selected Date:"})," ",a||"None"]})]})},args:{id:"custom-range-date-picker",title:"Custom Date Range",value:""}};var h,D,v;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <DatePickerWithState {...args} />,
  args: {
    id: 'default-date-picker',
    title: 'Select a Date',
    value: ''
  }
}`,...(v=(D=i.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var k,x,S;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <DatePickerWithState {...args} />,
  args: {
    id: 'with-initial-value',
    title: 'Birth Date',
    value: '5/15/1990'
  }
}`,...(S=(x=d.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var y,f,C;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <DatePickerWithState {...args} />,
  args: {
    id: 'disabled-date-picker',
    title: 'Disabled Date Picker',
    value: '1/1/2023',
    disabled: true
  }
}`,...(C=(f=o.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var b,j,P;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <DatePickerWithState {...args} />,
  args: {
    id: 'readonly-date-picker',
    title: 'Read Only Date',
    value: '12/25/2023',
    readOnly: true
  }
}`,...(P=(j=c.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var R,w,W;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <DatePickerWithState {...args} />,
  args: {
    id: 'required-date-picker',
    title: 'Appointment Date',
    value: '',
    required: true
  }
}`,...(W=(w=l.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var q,O,T;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => {
    const [date, setDate] = useState('');
    const handleDateChange = (value: string) => {
      setDate(value);
      args.eventChange?.(value);
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
        <DatePicker {...restArgs} value={date} eventChange={handleDateChange} />
        <div style={{
        marginTop: '1rem',
        fontSize: '0.875rem'
      }}>
          <strong>Selected Date:</strong> {date || 'None'}
        </div>
      </div>;
  },
  args: {
    id: 'custom-range-date-picker',
    title: 'Custom Date Range',
    value: ''
  }
}`,...(T=(O=u.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const E=["Default","WithInitialValue","Disabled","ReadOnly","Required","WithCustomDateRange"];export{i as Default,o as Disabled,c as ReadOnly,l as Required,u as WithCustomDateRange,d as WithInitialValue,E as __namedExportsOrder,Y as default};
