import React from 'react'
import { OPTIONS, LEFT_OPTIONS, RIGHT_OPTIONS } from '../data'
import { UI } from '../../'

function App () {
	return (
		<div className='main-container bg-primary-3'>
			<UI.NavBar leftOptions={LEFT_OPTIONS} rightOptions={RIGHT_OPTIONS} correntPath={LEFT_OPTIONS[0].path}/>
			<UI.Menu options={OPTIONS} />
		</div>
	)
}

export default App
