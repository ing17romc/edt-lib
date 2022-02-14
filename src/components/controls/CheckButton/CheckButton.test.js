import React from 'react';
import Component from '.';
import { render, screen, cleanup } from '@testing-library/react';

afterEach(cleanup);

const handleEvent = jest.fn();
const componentDefaultProps = {
	id: 'testComp',
	checked: false,
	eventChange: handleEvent,
};

describe('Test CheckButton Component', () => {
	test('', () => {
		render(<Component {...componentDefaultProps} />);
		// screen.debug();
		const component = screen.getByRole('checkbox');

		expect(component).toBeInTheDocument();
		expect(component.getAttribute('type')).toBe('checkbox');
		expect(component).toBeChecked();
	});
});
