import React from 'react'
import { OPTIONS, LEFT_OPTIONS, RIGHT_OPTIONS } from '../data'
import UI from '../../../src/components/controls'

const getCurrentPath = path => alert(path)

function App () {
	return (
		<UI.Layout
			leftOptions={LEFT_OPTIONS}
			rightOptions={RIGHT_OPTIONS}
			currentPath={LEFT_OPTIONS[0].path}
			getCurrentPath={getCurrentPath}
			footer={<p>Footer</p>}>
			<UI.Menu options={OPTIONS} getCurrentPath={getCurrentPath}/>
		</UI.Layout>
	)
}

export default App
