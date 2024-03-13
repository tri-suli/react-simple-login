import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    const linkElement = screen.getByText('Login Form');
    expect(linkElement).toBeInTheDocument();
  });

  test('renders LoginForm component', () => {
    render(<App />);
    const loginFormElement = screen.getByTestId("loginForm");
    expect(loginFormElement).toBeInTheDocument();
  });
});