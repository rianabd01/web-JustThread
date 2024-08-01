/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
// eslint-disable-next-line object-curly-newline
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import Login from './index';

expect.extend(matchers);

describe('Login component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle username typing correctly', async () => {
    // Arrange
    render(<Login login={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Masukkan Email');

    // Action
    await userEvent.type(emailInput, 'email@email.com');

    // Assert
    expect(emailInput).toHaveValue('email@email.com');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<Login login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText(
      'Masukkan Kata Sandi',
    );

    // Action
    await userEvent.type(passwordInput, 'user112233');

    // Assert
    expect(passwordInput).toHaveValue('user112233');
  });

  it('should call login function when login button is clicked', async () => {
    // Arrange
    const mockLogin = vi.fn();
    render(<Login login={mockLogin} />);
    const emailInput = await screen.getByPlaceholderText('Masukkan Email');
    await userEvent.type(emailInput, 'email@email.com');
    const passwordInput = await screen.getByPlaceholderText(
      'Masukkan Kata Sandi',
    );
    await userEvent.type(passwordInput, 'passwordtest');
    const loginButton = await screen.getByRole('button', { type: 'submit' });

    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'email@email.com',
      password: 'passwordtest',
    });
  });
});
