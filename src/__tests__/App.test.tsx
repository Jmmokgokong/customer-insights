import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import App from '../App';

describe('App Component', () => {
  it('renders the dashboard layout', () => {
    render(<App />);

    // Check that the header is rendered
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();

    // Check that the main content area is rendered
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
});
