import React from 'react';
// eslint-disable-next-line object-curly-newline
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import Register from './index';

/**
 * skenario testing
 *
 * ## Register component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when sign up button is clicked
 */

expect.extend(matchers);

describe('Register component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle name typing correctly', async () => {
    // Arrange
    render(<Register register={() => {}} />);
    const nameInput = await screen.getByPlaceholderText('Masukkan nama');

    // Action
    await userEvent.type(nameInput, 'Dico');

    // Assert
    expect(nameInput).toHaveValue('Dico');
  });
  it('should handle email typing correctly', async () => {
    // Arrange
    render(<Register register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Masukkan Email');

    // Action
    await userEvent.type(emailInput, 'email@email.com');

    // Assert
    expect(emailInput).toHaveValue('email@email.com');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<Register register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText(
      'Masukkan Kata Sandi',
    );

    // Action
    await userEvent.type(passwordInput, 'user112233');

    // Assert
    expect(passwordInput).toHaveValue('user112233');
  });

  it('should call register function when login button is clicked', async () => {
    // Arrange
    const mockRegister = vi.fn();
    render(<Register register={mockRegister} />);
    const nameInput = await screen.getByPlaceholderText('Masukkan nama');
    await userEvent.type(nameInput, 'Dico');
    const emailInput = await screen.getByPlaceholderText('Masukkan Email');
    await userEvent.type(emailInput, 'email@email.com');
    const passwordInput = await screen.getByPlaceholderText(
      'Masukkan Kata Sandi',
    );
    await userEvent.type(passwordInput, 'passwordtest');
    const registerButton = await screen.getByRole('button', { type: 'submit' });

    // Action
    await userEvent.click(registerButton);

    // Assert
    expect(mockRegister).toBeCalledWith({
      name: 'Dico',
      email: 'email@email.com',
      password: 'passwordtest',
    });
  });
});
