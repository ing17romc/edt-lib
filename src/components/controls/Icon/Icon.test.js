import React from 'react';
import Component from './';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

const CLASS_NAME = 'container-icon';

describe('Test Icon Component', () => {
	test('Renders correctly', async () => {
		const { container } = render(<Component name='add' />);
		expect(container.firstChild).toHaveClass(CLASS_NAME);
	});
});
