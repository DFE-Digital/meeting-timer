import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';

import Timer from './Timer';

jest.mock(
  './react-countdown-circle-timer',
  () =>
    function DummyCountDownCircleTimer(props) {
      const { remainingTime } = props;
      return <div data-testid="timer">{remainingTime}</div>;
    }
);

describe('timer started', () => {
  test('it should start the countdown', async () => {
    act(() => {
      render(<Timer timeInSeconds={10} />);
    });

    expect('0:10').toBe('0:10');
  });
});
