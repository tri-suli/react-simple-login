import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Password from './Password';

describe('Password Input Component', () => {
    const handleOnChange = jest.fn();

    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<Password handleOnChange={handleOnChange} />);
    });

    test('renders email input field', () => {
        const component = screen.getByLabelText('Password');

        expect(component).toBeInTheDocument();
    });

    test('fires onChange event handler when typed', () => {
        const component = screen.getByTestId('password-node');

        fireEvent.change(component, { target: { value: '123456' } });

        expect(handleOnChange).toHaveBeenCalledWith('123456');
    });

    test('shows error when passed', () => {
        render(<Password handleOnChange={handleOnChange} errors={['required']} />);

        const errorElement = screen.getByText('required');

        expect(errorElement).toBeInTheDocument();
    });

    test('memo implementation', () => {
        const { rerender } = render(<Password value={''} handleOnChange={handleOnChange} />);
        const newHandleOnChange = jest.fn();

        rerender(<Password value={''} handleOnChange={newHandleOnChange} />);

        expect(newHandleOnChange).toHaveBeenCalledTimes(0);
    });
});