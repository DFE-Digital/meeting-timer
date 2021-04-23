import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Session from './Session';

describe('begin session clicked', () => {
  test('it should show session id when the API returns a session', async () => {
    const sessionId = 1;
    const fakeSessionData = {
      sessionId,
    };
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeSessionData),
      })
    );

    render(<Session />);
    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('Begin session'));
    expect(screen.getByTestId('loading')).toBeInTheDocument();

    await waitFor(() => screen.getByTestId('session'));
    expect(screen.getByTestId('session')).toBeInTheDocument();
    expect(screen.getByTestId('session')).toHaveTextContent(
      `Started session number ${sessionId}`
    );
    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
  });

  test('it should show an error message when the API return an error', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue(new Error('API error'));

    render(<Session />);
    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('Begin session'));
    expect(screen.getByTestId('loading')).toBeInTheDocument();

    await waitFor(() => screen.getByTestId('error'));
    expect(screen.getByTestId('error')).toBeInTheDocument();
    expect(screen.getByTestId('error')).toHaveTextContent(
      'There has been an error'
    );
    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
  });
});
