import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Email from './Email';

describe('Email Input Component', () => {
    const handleOnChange = jest.fn();

    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<Email handleOnChange={handleOnChange} />);
    });

    test('renders email input field', () => {
        const component = screen.getByLabelText('Email');

        expect(component).toBeInTheDocument();
    });

    test('fires onChange event handler when typed', () => {
        const component = screen.getByRole('textbox');

        fireEvent.change(component, { target: { value: 'test@test.com' } });

        expect(handleOnChange).toHaveBeenCalledWith('test@test.com');
    });

    test('shows error when passed', () => {
        render(<Email handleOnChange={handleOnChange} errors={['Email is required']} />);

        const errorElement = screen.getByText('Email is required');

        expect(errorElement).toBeInTheDocument();
    });

    test('memo implementation', () => {
        const { rerender } = render(<Email value={''} handleOnChange={handleOnChange} />);
        const newHandleOnChange = jest.fn();

        rerender(<Email value={''} handleOnChange={newHandleOnChange} />);

        expect(newHandleOnChange).toHaveBeenCalledTimes(0);
    });
});