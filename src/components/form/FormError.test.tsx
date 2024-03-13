import React from 'react';
import { render, screen } from '@testing-library/react';

import FormError from './FormError';

describe('FormError Component', () => {
    it('renders the provided error messages', () => {
        const errors = ['Error One', 'Error Two'];
        render(<FormError errors={errors} />);

        errors.forEach((error) => {
            expect(screen.getByText(error)).toBeInTheDocument();
        });
    });

    it('does not re-render when props have not changed', () => {
        const errors = ['Error One', 'Error Two'];
        const props = { errors };
        const { rerender } = render(<FormError {...props} />);

        // Save a reference to the existing output
        const initialRender = screen.getByText('Error One');

        // New props don't cause a re-render
        rerender(<FormError {...props} />);
        expect(screen.getByText('Error One')).toBe(initialRender);
    });

    it('re-renders when props length have changed', () => {
        const errorsFirstRender = ['Error One', 'Error Two'];
        const errorsSecondRender = ['Error Three', 'Error Four', 'Error Five'];
        const { rerender } = render(<FormError errors={errorsFirstRender} />);

        expect(screen.getByText('Error One')).toBeInTheDocument();

        rerender(<FormError errors={errorsSecondRender} />);

        errorsSecondRender.forEach(message => {
            expect(screen.getByText(message)).toBeInTheDocument();
        });
        errorsFirstRender.forEach(message => {
            expect(screen.queryByText(message)).not.toBeInTheDocument();
        });
    });
});
