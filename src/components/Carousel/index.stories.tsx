import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from '.';

const meta: Meta<typeof Carousel> = {
  title: 'Element/Carousel',
  component: Carousel,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    items: [
      {
        id: '1',
        content: <div>1</div>,
      },
      {
        id: '2',
        content: <div>2</div>,
      },
      {
        id: '3',
        content: <div>3</div>,
      },
      {
        id: '4',
        content: <div>4</div>,
      },
      {
        id: '5',
        content: <div>5</div>,
      },
      {
        id: '6',
        content: <div>6</div>,
      },
    ],
  },
};
