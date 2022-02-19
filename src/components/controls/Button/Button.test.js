import React from 'react';
import Component from '.';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
// import renderer from 'react-test-renderer';

afterEach(cleanup);

const TITLE = 'Test Component';

const handleEvent = jest.fn();
const buttonDefaultProps = {
	onClick: handleEvent,
	title: TITLE,
};

const onSubmit = jest.fn(e => e.preventDefault());
const formDefaultProps = {
	onSubmit,
	'data-testid': 'form',
};

describe('Button Component', () => {
	describe('Tests when the component is BUTTON', () => {
		/*
	test('Component: Renders correctly', () => {
		const tree = renderer
			.create(<Component {...buttonDefaultProps} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
*/
		test('Should not click when the component is DISABLED', async () => {
			render(<Component {...buttonDefaultProps} disabled={true} />);
			// screen.debug();
			const button = screen.getByRole('button');
			await fireEvent.click(button);

			expect(button).toBeInTheDocument();
			expect(button.getAttribute('type')).toBe('button');
			expect(button).toBeDisabled();
			expect(handleEvent).not.toHaveBeenCalled();
		});

		test('Should click when the component is ENABLED', async () => {
			render(<Component {...buttonDefaultProps} />);
			// screen.debug();
			const button = screen.getByRole('button');
			await fireEvent.click(button);

			expect(button).toBeInTheDocument();
			expect(button.getAttribute('type')).toBe('button');
			expect(button).not.toBeDisabled();
			expect(handleEvent).toHaveBeenCalledTimes(1);
		});
	});
	describe('Tests when the component is SUBMIT', () => {
		/*
	test('Submit: Renders correctly', () => {
		const tree = renderer.create(<Component title={TITLE} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
*/
		test('Should not click when the component is DISABLED', async () => {
			render(
				<form {...formDefaultProps}>
					<Component title={TITLE} disabled={true} />
				</form>
			);
			// screen.debug();
			const submitDisable = screen.getByRole('button');
			await fireEvent.click(submitDisable);

			expect(submitDisable).toBeInTheDocument();
			expect(submitDisable.getAttribute('type')).toBe('submit');
			expect(submitDisable).toBeDisabled();
			expect(onSubmit).not.toHaveBeenCalled();
		});

		test('Should click when the component is ENABLED', async () => {
			render(
				<form {...formDefaultProps}>
					<Component title={TITLE} />
				</form>
			);
			// screen.debug();
			const submit = screen.getByRole('button');
			await fireEvent.click(submit);

			expect(submit).toBeInTheDocument();
			expect(submit.getAttribute('type')).toBe('submit');
			expect(submit).not.toBeDisabled();
			expect(onSubmit).toHaveBeenCalledTimes(1);
		});
	});
});
