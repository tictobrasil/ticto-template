import * as React from 'react';
import { describe, expect, test } from "vitest";
import { Button }from './';
import { render, screen } from "@testing-library/react";

describe('Render Button', () => {
  test('Should be Button exist', () => {
    render(<Button />);
    const existComponent = screen.getByText(`Button`);
    expect(existComponent).toBeTruthy();
  });
});