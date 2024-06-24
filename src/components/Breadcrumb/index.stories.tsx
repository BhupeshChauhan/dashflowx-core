import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '.';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Element/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    breadcrumbList: [
      {
        id: '1',
        type: 'item',
        title: 'Home',
        href: '/',
        separator: true,
      },
      {
        id: '2',
        type: 'dropdown',
        title: 'Dropdown',
        children: [
          {
            title: 'Item 1',
          },
          {
            title: 'Item 2',
          },
          {
            title: 'Item 3',
          },
          {
            title: 'Item 4',
          },
          {
            title: 'Item 5',
          },
        ],
      },
      {
        id: '3',
        type: 'item',
        title: 'About',
        href: '/about',
        separator: true,
      },
      {
        id: '4',
        type: 'item',
        title: 'Contact',
        href: '/contact',
      },
    ],
  },
};
