import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '.';

const meta: Meta<typeof Typography> = {
  title: 'Element/Typography',
  component: Typography,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    variant: 'one',
    size: 'base',
    weight: 'normal',
    align: 'center',
    italic: false,
    underline: false,
    children: 'Heading1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'two',
    size: 'base',
    weight: 'normal',
    align: 'center',
    italic: false,
    underline: false,
    children: 'Heading2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'three',
    size: 'base',
    weight: 'normal',
    align: 'center',
    italic: false,
    underline: false,
    children: 'Heading3',
  },
};

export const Heading4: Story = {
  args: {
    variant: 'four',
    size: 'base',
    weight: 'normal',
    align: 'center',
    italic: false,
    underline: false,
    children: 'Heading4',
  },
};

export const Heading5: Story = {
  args: {
    variant: 'five',
    size: 'base',
    weight: 'normal',
    align: 'center',
    italic: false,
    underline: false,
    children: 'Heading5',
  },
};

export const Heading6: Story = {
  args: {
    variant: 'six',
    size: 'base',
    weight: 'normal',
    align: 'center',
    italic: false,
    underline: false,
    children: 'Heading6',
  },
};

export const Paragraph: Story = {
  args: {
    variant: 'para',
    size: 'base',
    weight: 'normal',
    align: 'center',
    italic: false,
    underline: false,
    children: 'Paragraph',
  },
};
