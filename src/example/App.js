import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Form from './pages/Forms';
import Modals from './pages/Modals';
import Icons from './pages/Icons';
import Controls from './pages/Controls';
import Description from './pages/Description';
import Camera from './pages/Camera';
import Tables from './pages/Tables';
import NavBar from './pages/NavBar';
import Menu from './pages/Menu';

const leftOptions = [
	{ path: '/', name: 'Menu' },
	{ path: '/About', name: 'Acerca de' },
];

const APP_ICON_DEFAULT = 'list';

const options = [
	{ path: '/Forms', name: 'Formularios', icon: APP_ICON_DEFAULT },
	{ path: '/Modals', name: 'Modales', icon: APP_ICON_DEFAULT },
	{ path: '/Icons', name: 'Iconos', icon: APP_ICON_DEFAULT },
	{ path: '/Controls', name: 'Controles', icon: APP_ICON_DEFAULT },
	{ path: '/Camera', name: 'Camera', icon: APP_ICON_DEFAULT },
	{ path: '/Tables', name: 'Tables', icon: APP_ICON_DEFAULT },
];

const rightOptions = [{ path: '/Salir', name: 'Salir' }];

function App() {
	return (
		<div className='main-container bg-primary-3'>
			<Router>
				<Route
					path='/'
					render={() => (
						<NavBar
							leftOptions={leftOptions}
							rightOptions={rightOptions}
						/>
					)}
				/>
				<Route
					exact
					path='/'
					render={() => <Menu options={options} />}
				/>
				<Route
					exact
					path='/About'
					render={() => <Description description='Acerca de ...' />}
				/>
				<Route
					exact
					path='/Salir'
					render={() => <Description description='Salir ...' />}
				/>
				<Route path='/Forms' component={Form} />
				<Route exact path='/Modals' component={Modals} />
				<Route exact path='/Icons' component={Icons} />
				<Route exact path='/Controls' component={Controls} />
				<Route exact path='/Camera' component={Camera} />
				<Route exact path='/Tables' component={Tables} />
			</Router>
		</div>
	);
}

export default App;
