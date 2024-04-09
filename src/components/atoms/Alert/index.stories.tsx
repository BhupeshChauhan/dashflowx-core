import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '.';
import { Button } from '../Button';

const meta: Meta<typeof Alert> = {
  title: 'Element/Aleart',
  component: Alert,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    children: (
      <div>
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again
      </div>
    ),
  },
};

export const SecoundarySolid: Story = {
  args: {
    variant: 'solid',
    color: 'secondary',
    children: (
      <div>
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again
      </div>
    ),
  },
};

export const SuccessSolid: Story = {
  args: {
    variant: 'solid',
    color: 'success',
    children: (
      <div>
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again
      </div>
    ),
  },
};

export const ErrorSolid: Story = {
  args: {
    variant: 'solid',
    color: 'error',
    children: (
      <div>
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again
      </div>
    ),
  },
};

export const Outline: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    children: (
      <div>
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again
      </div>
    ),
  },
};

export const Action: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    children: (
      <div>
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again
      </div>
    ),
    actions: (
      <Button color="primary" size="md" variant="solid">
        Button
      </Button>
    ),
  },
};

export const ActionEndIcon: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    children: (
      <div>
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again
      </div>
    ),
    actions: (
      <Button color="primary" size="md" variant="solid">
        Button
      </Button>
    ),
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

export const StartIconButton: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    children: (
      <div>
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again
      </div>
    ),
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
    children: (
      <div>
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again
      </div>
    ),
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
