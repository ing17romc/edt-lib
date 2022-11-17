import React from 'react'

export default {
	title: 'Static/Color'
}

const Template = (args) => {
	const dot = {
		height: '18px',
		width: '18px',
		borderRadius: '50%',
		display: 'inline-block'
	}

	const getP = (style) => <>
		<span className={style}>
			{ style }
		</span>
		{` <span className="${style}"></span>`}
		<hr></hr>
	</>

	const getSpan = (style) => <>
		<span style={dot} className={style}></span>
		{` <span className="${style}"></span>`}
		<hr></hr>
	</>

	const getVariablesColor = (style) => <>
		<span style={dot} className={style}></span>
		{` $${style}` }
		<hr></hr>
	</>

	return <>
		<h1>Font color</h1>
		<hr></hr>
		{getP('font-blue')}
		{getP('font-red')}
		{getP('font-orange')}
		{getP('font-green')}
		{getP('font-white')}
		{getP('font-yellow')}
		{getP('font-gray')}
		<h1>Background color </h1>
		<hr></hr>
		{getSpan('bg-primary-1')}
		{getSpan('bg-primary-2')}
		{getSpan('bg-primary-3')}
		{getSpan('bg-white')}
		{getSpan('bg-light-gray')}
		{getSpan('bg-gray')}
		<h1>SCSS color variables</h1>
		<hr></hr>
		{getVariablesColor('black-color')}
		{getVariablesColor('dark-gray-color')}
		{getVariablesColor('gray-color')}
		{getVariablesColor('light-gray-color')}
		{getVariablesColor('white-color')}
		{getVariablesColor('light-blue-color')}

		{getVariablesColor('dark-blue-color')}
		{getVariablesColor('red-color')}
		{getVariablesColor('orange-color')}
		{getVariablesColor('green-color')}
		{getVariablesColor('yellow-color')}

		{getVariablesColor('primary-color-1')}
		{getVariablesColor('primary-color-2')}
		{getVariablesColor('primary-color-3')}
	</>
}
export const Default = Template.bind({})
