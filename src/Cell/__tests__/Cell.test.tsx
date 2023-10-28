import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Cell from '../Cell';
describe('renders learn react link', () => {
  it("should be rendered", () => {
    let value = 0;
    render(<Cell onClick={() => value = value + 1} value='test'/>);
    const valueElement = screen.findAllByDisplayValue(/test/i);
    expect(valueElement).not.toBeNull()
  })
})