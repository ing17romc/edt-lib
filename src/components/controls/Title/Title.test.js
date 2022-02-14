import React from 'react';
import Component from '.';
import { render, screen, cleanup } from '@testing-library/react';

afterEach(cleanup);

const TITLE = 'Test Component';

const componentDefaultProps = {
	label: TITLE,
};

describe('Test Title Component', () => {
	test('Title is primary', async () => {
		const { container } = render(<Component {...componentDefaultProps} />);
		// screen.debug();
		const text = screen.getByText(TITLE);
		expect(text).toBeInTheDocument();
		const h2 = container.querySelector('h2');
		expect(h2).toBeInTheDocument();
	});

	test('Title is secundary', async () => {
		const { container } = render(
			<Component {...componentDefaultProps} secundary={true} />
		);
		// screen.debug();
		const text = screen.getByText(TITLE);
		expect(text).toBeInTheDocument();
		const h4 = container.querySelector('h4');
		expect(h4).toBeInTheDocument();
	});
});
