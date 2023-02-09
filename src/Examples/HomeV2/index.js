import React from 'react'
import { OPTIONS, LEFT_OPTIONS, RIGHT_OPTIONS } from '../data'
import UI from '../../../src/components/controls'

const getCurrentPath = path => alert(path)

function App () {
	return (
		<UI.LayoutV2
			leftOptions={LEFT_OPTIONS}
			rightOptions={RIGHT_OPTIONS}
			getCurrentPath={getCurrentPath}
			sideOptions={OPTIONS}
		>
			<UI.Menu options={OPTIONS} getCurrentPath={getCurrentPath}/>
		</UI.LayoutV2>
	)
}

export default App
