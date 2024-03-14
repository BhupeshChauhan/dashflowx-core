import { Button } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';
import { DfaxSnackbar } from '.';

const meta: Meta<typeof DfaxSnackbar> = {
  title: 'Components/DfaxSnackbar',
  component: DfaxSnackbar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    autoHideDuration: 1000,
    message: (
      <div>
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again
      </div>
    ),
    variant: 'solid',
    color: 'primary',
    SnackbarClassName: '',
    anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
    key: 'leftbottom',
  },
};

export const TopLeft: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    autoHideDuration: 1000,
    message: (
      <div>
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again
      </div>
    ),
    variant: 'outlined',
    color: 'primary',
    SnackbarClassName: '',
    anchorOrigin: { horizontal: 'left', vertical: 'top' },
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
    key: 'lefttop',
  },
};

export const TopRight: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    autoHideDuration: 1000,
    message: (
      <div>
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again
      </div>
    ),
    variant: 'solid',
    color: 'primary',
    SnackbarClassName: '',
    anchorOrigin: { horizontal: 'right', vertical: 'top' },
    key: 'righttop',
  },
};

export const ButttomRight: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    autoHideDuration: 1000,
    message: (
      <div>
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again
      </div>
    ),
    variant: 'solid',
    color: 'primary',
    SnackbarClassName: '',
    anchorOrigin: { horizontal: 'right', vertical: 'buttom' },
    key: 'rightbuttom',
  },
};
