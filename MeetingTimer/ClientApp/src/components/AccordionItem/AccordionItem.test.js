import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import AccordionItem from './AccordionItem';

test('renders with a title', async () => {
  const testTitle = 'test';
  render(<AccordionItem title={testTitle} />);
  expect(screen.getByTestId('title')).toHaveTextContent(testTitle);
});

test('renders with content', async () => {
  const testContent = 'test content';
  render(<AccordionItem content={testContent} />);
  expect(screen.getByTestId('content')).toHaveTextContent(testContent);
});
