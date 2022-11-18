import React from 'react'
import { OPTIONS, LEFT_OPTIONS, RIGHT_OPTIONS } from '../data'
import UI from '../../../src/components/controls'

function App () {
	return (
		<div className='main-container bg-primary-3'>
			<UI.NavBar leftOptions={LEFT_OPTIONS} rightOptions={RIGHT_OPTIONS} correntPath={LEFT_OPTIONS[0].path} getCurrentPath={e => console.log(e)}/>
			<UI.Menu options={OPTIONS} getCurrentPath={e => console.log(e)}/>
		</div>
	)
}

export default App
