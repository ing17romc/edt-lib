import React from 'react'
import { OPTIONS, LEFT_OPTIONS, RIGHT_OPTIONS } from '../data'
import UI from '../../../src/components/controls'

function App () {
	return (
		<UI.Layaout
			leftOptions={LEFT_OPTIONS}
			rightOptions={RIGHT_OPTIONS}
			currentPath={LEFT_OPTIONS[0].path}
			getCurrentPath={e => console.log(e)}
			footer={<p>footer</p>}>
			<UI.Menu options={OPTIONS} getCurrentPath={e => console.log(e)}/>
		</UI.Layaout>
	)
}

export default App
