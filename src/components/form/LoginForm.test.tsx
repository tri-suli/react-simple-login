import { render, fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import LoginForm from './LoginForm';
import * as api from '../../services/api';
import React from 'react';

jest.mock('../../services/api', () => ({
    login: jest.fn()
}));

describe('LoginForm', () => {
    beforeAll(() => {
        global.alert = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders login form and allows valid submissions', async () => {

        render(<LoginForm />);

        const emailInput = await screen.findByRole('textbox', {
            name: /email/i
        });
        const passwordInput = screen.getByTestId('password-node');
        const submitButton = screen.getByRole('button', {
            name: /login/i
        });

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();

        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            fireEvent.change(emailInput, { target: { value: 'test@email.com' } });
            fireEvent.change(passwordInput, { target: { value: 'testPassword' } });
        });

        expect(emailInput.value).toBe('test@email.com');
        expect(passwordInput.value).toBe('testPassword');

        (api.login as jest.MockedFunction<typeof api.login>).mockResolvedValue(true);

        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            fireEvent.click(submitButton);
        });

        // make sure alert with login successful is called
        expect(window.alert).toHaveBeenCalledWith('Login Success!');
    });
});