import React from 'react';
// eslint-disable-next-line object-curly-newline
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import ThreadInput from './index';
/**
 * scenario testing
 *
 * ## Register component
 *   - should handle title typing correctly
 *   - should handle body typing correctly
 *   - should handle category typing correctly
 *   - should call addThread function when send button is clicked
 */
expect.extend(matchers);

describe('ThreadInput component', () => {
  afterEach(() => {
    cleanup();
  });
  it('should handle title typing correctly', async () => {
    // Arrange
    render(<ThreadInput addThread={() => {}} />);

    const titleInput = await screen.getByPlaceholderText(
      'Apa yang ingin kamu bagi',
    );

    // Action
    await userEvent.type(titleInput, 'Judulnya');

    // Assert
    expect(titleInput).toHaveValue('Judulnya');
  });

  it('should handle body typing correctly', async () => {
    // Arrange
    render(<ThreadInput addThread={() => {}} />);

    const bodyInput = await screen.getByPlaceholderText('Ceritakan disini');

    // Action
    await userEvent.type(bodyInput, 'Halo selamat datang');

    // Assert
    expect(bodyInput).toHaveValue('Halo selamat datang');
  });
  it('should handle category typing correctly', async () => {
    // Arrange
    render(<ThreadInput addThread={() => {}} />);

    const categoryInput = await screen.getByPlaceholderText('kategori');

    // Action
    await userEvent.type(categoryInput, 'threadbiasa');

    // Assert
    expect(categoryInput).toHaveValue('threadbiasa');
  });

  it('should call addThread function when login button is clicked', async () => {
    // Arrange
    const mockAddThread = vi.fn();
    render(<ThreadInput addThread={mockAddThread} />);
    const titleInput = await screen.getByPlaceholderText(
      'Apa yang ingin kamu bagi',
    );
    await userEvent.type(titleInput, 'Belajar testing');
    const bodyInput = await screen.getByPlaceholderText('Ceritakan disini');
    await userEvent.type(bodyInput, 'Bagaimana ya caranya');
    const categoryInput = await screen.getByPlaceholderText('kategori');
    await userEvent.type(categoryInput, 'react');

    const sendButton = await screen.getByRole('button', { type: 'submit' });

    // Action
    await userEvent.click(sendButton);

    // Assert
    expect(mockAddThread).toBeCalledWith({
      title: 'Belajar testing',
      body: 'Bagaimana ya caranya',
      category: 'react',
    });
  });
});
