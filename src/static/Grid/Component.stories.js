import React from 'react'

export default {
	title: 'Static/Grid'
}

const containerBody = {
	border: '1px solid red'
}

const gridPrimary = {
	border: '1px solid green'
}

const gridSecondary = {
	border: '1px solid pink'
}

const gridElement = {
	border: '1px solid purple',
	backgroundColor: 'pink'
}

const Template = (args) => <>
	<div className='container-body' style={containerBody}>
		<div className='grid-primary  padding-v-20 ' style={gridPrimary}>

			<div className='start-1 size-12 padding-v-20 center' style={gridElement}>
			[1-12]
			</div>
			<>
				<div className='start-1 size-6 padding-v-20 center' style={gridElement}>
			[1-6]
				</div>
				<div className='size-6 padding-v-20 center' style={gridElement}>
			[7-12]
				</div>
			</>
			<>
				<div className='start-1 size-4 padding-v-20 center' style={gridElement}>
			[1-4]
				</div>
				<div className='size-4 padding-v-20 center' style={gridElement}>
			[5-8]
				</div>
				<div className='size-4 padding-v-20 center' style={gridElement}>
			[9-12]
				</div>
			</>
			<>
				<div className='start-1 size-3 padding-v-20 center' style={gridElement}>
			[1-3]
				</div>
				<div className='size-3 padding-v-20 center' style={gridElement}>
			[4-6]
				</div>
				<div className='size-3 padding-v-20 center' style={gridElement}>
			[7-9]
				</div>
				<div className='size-3 padding-v-20 center' style={gridElement}>
			[10-12]
				</div>
			</>
			<>
				<div className='start-1 size-2 padding-v-20 center' style={gridElement}>
				[1-2]
				</div>
				<div className='size-2 padding-v-20 center' style={gridElement}>
			[3-4]
				</div>
				<div className='size-2 padding-v-20 center' style={gridElement}>
			[5-6]
				</div>
				<div className='size-2 padding-v-20 center' style={gridElement}>
			[7-8]
				</div>
				<div className='size-2 padding-v-20 center' style={gridElement}>
			[9-10]
				</div>
				<div className='size-2 padding-v-20 center' style={gridElement}>
			[11-12]
				</div>
			</>
			<>
				<div className='start-1 padding-v-20 center' style={gridElement}>
			1
				</div>
				<div className='start-2 padding-v-20 center' style={gridElement}>
			2
				</div>
				<div className='start-3 padding-v-20 center' style={gridElement}>
			3
				</div>
				<div className='start-4 padding-v-20 center' style={gridElement}>
			4
				</div>
				<div className='start-5 padding-v-20 center' style={gridElement}>
			5
				</div>
				<div className='start-6 padding-v-20 center' style={gridElement}>
			6
				</div>
				<div className='start-7 padding-v-20 center' style={gridElement}>
			7
				</div>
				<div className='start-8 padding-v-20 center' style={gridElement}>
			8
				</div>
				<div className='start-9 padding-v-20 center' style={gridElement}>
			9
				</div>
				<div className='start-10 padding-v-20 center' style={gridElement}>
			10
				</div>
				<div className='start-11 padding-v-20 center' style={gridElement}>
			11
				</div>
				<div className='start-12 padding-v-20 center' style={gridElement}>
			12
				</div>
			</>
			<div className='grid-secondary  padding-v-20 ' style={gridSecondary}>
				<div className='start-1 size-24 padding-v-20 center' style={gridElement}>
				[1-24]
				</div>
				<div className='start-1 size-12 padding-v-20 center' style={gridElement}>
				[1-12]
				</div>
				<div className='size-12 padding-v-20 center' style={gridElement}>
				[13-24]
				</div>

				<div className='start-1 size-6 padding-v-20 center' style={gridElement}>
				[1-6]
				</div>
				<div className='size-6 padding-v-20 center' style={gridElement}>
				[7-12]
				</div>
				<div className='size-6 padding-v-20 center' style={gridElement}>
				[13-18]
				</div>
				<div className='size-6 padding-v-20 center' style={gridElement}>
				[19-24]
				</div>
				<>
					<div className='start-1 padding-v-20 center' style={gridElement}>
				1
					</div>
					<div className='start-2 padding-v-20 center' style={gridElement}>
				2
					</div>
					<div className='start-3 padding-v-20 center' style={gridElement}>
				3
					</div>
					<div className='start-4 padding-v-20 center' style={gridElement}>
				4
					</div>
					<div className='start-5 padding-v-20 center' style={gridElement}>
				5
					</div>
					<div className='start-6 padding-v-20 center' style={gridElement}>
				6
					</div>
					<div className='start-7 padding-v-20 center' style={gridElement}>
				7
					</div>
					<div className='start-8 padding-v-20 center' style={gridElement}>
				8
					</div>
					<div className='start-9 padding-v-20 center' style={gridElement}>
				9
					</div>
					<div className='start-10 padding-v-20 center' style={gridElement}>
				10
					</div>
					<div className='start-11 padding-v-20 center' style={gridElement}>
				11
					</div>
					<div className='start-12 padding-v-20 center' style={gridElement}>
				12
					</div>
					<div className='start-13 padding-v-20 center' style={gridElement}>
				13
					</div>
					<div className='start-14 padding-v-20 center' style={gridElement}>
				14
					</div>
					<div className='start-15 padding-v-20 center' style={gridElement}>
				15
					</div>
					<div className='start-16 padding-v-20 center' style={gridElement}>
				16
					</div>
					<div className='start-17 padding-v-20 center' style={gridElement}>
				17
					</div>
					<div className='start-18 padding-v-20 center' style={gridElement}>
				18
					</div>
					<div className='start-19 padding-v-20 center' style={gridElement}>
				19
					</div>
					<div className='start-20 padding-v-20 center' style={gridElement}>
				20
					</div>
					<div className='start-21 padding-v-20 center' style={gridElement}>
				21
					</div>
					<div className='start-22 padding-v-20 center' style={gridElement}>
				22
					</div>
					<div className='start-23 padding-v-20 center' style={gridElement}>
				23
					</div>
					<div className='start-24 padding-v-20 center' style={gridElement}>
				24
					</div>
				</>
			</div>
		</div>

	</div>

</>

export const Default = Template.bind({})
