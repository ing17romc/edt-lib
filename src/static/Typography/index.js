import React from 'react'

/**
 * @decription TO DO
 *
 * @returns TO DO
 */

const getH = number => '<h' + number + '></h' + number + '>'
const getP = (style, text) => <>
	<p className={style}>
		{'<p className="' + style + '">' + (text || '') + '</p>'}
	</p>
	<hr></hr>
</>

const text = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'

const Component = () => <>
	<h1>Headings</h1>
	<hr></hr>
	<h1>{getH(1)}</h1>
	<hr></hr>
	<h2>{getH(2)}</h2>
	<hr></hr>
	<h3>{getH(3)}</h3>
	<hr></hr>
	<h4>{getH(4)}</h4>
	<hr></hr>
	<h5>{getH(5)}</h5>
	<hr></hr>
	<h6>{getH(6)}</h6>
	<hr></hr>
	<h1>Paragraphs</h1>
	<hr></hr>
	{getP('font-22')}
	{getP('font-20')}
	{getP('font-18')}
	{getP('font-16')}
	{getP('font-14')}
	{getP('font-12')}
	{getP('font-10')}
	{getP('font-8')}
	{getP('font-22 strong')}
	{getP('font-22 line-spacing', text)}
	{getP('font-22 line-spacing-simple', text)}
	{getP('font-22 line-spacing-doble', text)}
	{getP('font-22 line-spacing-triple', text)}
</>

export default Component
