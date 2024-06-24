import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRight } from 'lucide-react';
import { MenuList } from '.';

const meta: Meta<typeof MenuList> = {
  title: 'molecules/MenuList',
  component: MenuList,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    menuArrays: [
      {
        id: '1',
        title: 'Dashboard',
        path: '/admin',
        active: true,
        menuIcon: <ArrowRight />,
      },
      {
        id: '2',
        title: 'Applicants',
        path: '/admin/posts',
        active: false,
        menuIcon: <ArrowRight />,
      },
      {
        id: '3',
        title: 'Clients',
        path: '/admin/posts',
        active: false,
        menuIcon: <ArrowRight />,
      },
    ],
    type: 'a',
    library: 'react',
    variant: 'basic',
  },
};

export const One: Story = {
  args: {
    menuArrays: [
      {
        id: '1',
        title: 'Dashboard',
        path: '/admin',
        active: true,
        menuIcon: <ArrowRight />,
      },
      {
        id: '2',
        title: 'Applicants',
        path: '/admin/posts',
        active: false,
        menuIcon: <ArrowRight />,
      },
      {
        id: '3',
        title: 'Clients',
        path: '/admin/posts',
        active: false,
        menuIcon: <ArrowRight />,
      },
    ],
    type: 'a',
    library: 'react',
    variant: 'one',
  },
};
