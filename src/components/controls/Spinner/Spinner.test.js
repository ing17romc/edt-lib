import React from 'react'
import Component from './'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

const CLASS_NAME = 'container-load'

describe('Spinner Component', () => {
	test('Should render correctly', async () => {
		const { container } = render(<Component />)
		// expect(container.firstChild.classList.contains(CLASS_NAME)).toBe(true);
		expect(container.firstChild).toHaveClass(CLASS_NAME)
	})
})
