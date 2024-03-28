import type { Meta, StoryObj } from '@storybook/react';
import { DfaxNavBar } from '.';
import logo from '../../../assets/react.svg';

const meta: Meta<typeof DfaxNavBar> = {
  title: 'Components/DfaxNavBar',
  component: DfaxNavBar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    logo: (
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo} className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Dashflow X
        </span>
      </a>
    ),
    menuArrays: [
      {
        title: 'Home',
        path: '/',
        active: true,
        type: 'a',
      },
      {
        title: 'About',
        path: '/',
        active: false,
        type: 'a',
      },
      {
        title: 'Services',
        path: '/',
        active: false,
        type: 'a',
      },
    ],
  },
};
