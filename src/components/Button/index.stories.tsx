import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Element/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    children: 'Button',
    fullwidth: false,
    size: 'md',
    startIcon: <></>,
    endIcon: <></>,
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
    fullwidth: false,
    size: 'md',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button',
    fullwidth: false,
    size: 'md',
  },
};

export const Fullwidth: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    children: 'Button',
    fullwidth: true,
    size: 'md',
  },
};

export const StartIconButton: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    children: 'Button',
    fullwidth: false,
    size: 'md',
    startIcon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 20"
      >
        <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
      </svg>
    ),
  },
};

export const EndIconButton: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    children: 'Button',
    fullwidth: false,
    size: 'md',
    endIcon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 20"
      >
        <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
      </svg>
    ),
  },
};
