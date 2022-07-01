import useState from 'react';
import Component from '.';
import { renderHook, act } from '@testing-library/react-hooks';

describe('CheckButton Component', () => {
	const [value, setValue] = useState(false);

	render(
		<Component
			id='checkButton'
			label='CheckButton'
			checked={value}
			eventChange={e => setValue(e.target.checked)}
		/>
	);

	const button = screen.getByRole('input');
	await fireEvent.click(button);


});
