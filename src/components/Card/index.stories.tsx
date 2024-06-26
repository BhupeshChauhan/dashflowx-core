import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '.';

const meta: Meta<typeof Card> = {
  title: 'Element/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    cardTitle: <>Card Title</>,
    cardDescription: <>Card Description</>,
    cardContent: <>Card Content</>,
    cardActions: <>Card Actions</>,
  },
};
