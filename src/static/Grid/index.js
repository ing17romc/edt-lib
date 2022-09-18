import React from 'react'

/**
 * @decription TO DO
 *
 * @returns TO DO
 */

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

const Component = () => <>
	<div className='container-body' style={containerBody}>
		<div className='grid-primary' style={gridPrimary}>
			<div className='start-1 padding-v-20' style={gridElement}>
			1
			</div>
			<div className='start-2 padding-v-20' style={gridElement}>
			2
			</div>
			<div className='start-3 padding-v-20' style={gridElement}>
			3
			</div>
			<div className='start-4 padding-v-20' style={gridElement}>
			4
			</div>
			<div className='start-5 padding-v-20' style={gridElement}>
			5
			</div>
			<div className='start-6 padding-v-20' style={gridElement}>
			6
			</div>
			<div className='start-7 padding-v-20' style={gridElement}>
			7
			</div>
			<div className='start-8 padding-v-20' style={gridElement}>
			8
			</div>
			<div className='start-9 padding-v-20' style={gridElement}>
			9
			</div>
			<div className='start-10 padding-v-20' style={gridElement}>
			10
			</div>
			<div className='start-11 padding-v-20' style={gridElement}>
			11
			</div>
			<div className='start-12 padding-v-20' style={gridElement}>
			12
			</div>

			<div className='start-3 size-3 padding-v-35' style={gridElement}/>

			<div className='start-6 size-2 padding-v-35' style={gridElement}/>

			<div className='start-8 size-3 padding-v-35' style={gridElement}/>

			<div className='grid-secondary' style={gridSecondary}>
				<div className='start-1 padding-v-20' style={gridElement}>
			1
				</div>
				<div className='start-2 padding-v-20' style={gridElement}>
			2
				</div>
				<div className='start-3 padding-v-20' style={gridElement}>
			3
				</div>
				<div className='start-4 padding-v-20' style={gridElement}>
			4
				</div>
				<div className='start-5 padding-v-20' style={gridElement}>
			5
				</div>
				<div className='start-6 padding-v-20' style={gridElement}>
			6
				</div>
				<div className='start-7 padding-v-20' style={gridElement}>
			7
				</div>
				<div className='start-8 padding-v-20' style={gridElement}>
			8
				</div>
				<div className='start-9 padding-v-20' style={gridElement}>
			9
				</div>
				<div className='start-10 padding-v-20' style={gridElement}>
			10
				</div>
				<div className='start-11 padding-v-20' style={gridElement}>
			11
				</div>
				<div className='start-12 padding-v-20' style={gridElement}>
			12
				</div>
				<div className='start-13 padding-v-20' style={gridElement}>
			13
				</div>
				<div className='start-14 padding-v-20' style={gridElement}>
			14
				</div>
				<div className='start-15 padding-v-20' style={gridElement}>
			15
				</div>
				<div className='start-16 padding-v-20' style={gridElement}>
			16
				</div>
				<div className='start-17 padding-v-20' style={gridElement}>
			17
				</div>
				<div className='start-18 padding-v-20' style={gridElement}>
			18
				</div>
				<div className='start-19 padding-v-20' style={gridElement}>
			19
				</div>
				<div className='start-20 padding-v-20' style={gridElement}>
			29
				</div>

				<div className='start-3 size-6 padding-v-35' style={gridElement}/>

				<div className='start-10 size-2 padding-v-35' style={gridElement}/>

				<div className='start-13 size-6 padding-v-35' style={gridElement}/>

			</div>
		</div>

	</div>

</>

export default Component
