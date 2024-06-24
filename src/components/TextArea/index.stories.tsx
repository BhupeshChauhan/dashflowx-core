import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '.';

const meta: Meta<typeof TextArea> = {
  title: 'Element/TextArea',
  component: TextArea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    placeholder: 'Insert text here',
    lable: 'Text Area',
  },
};

export const PrefixElementTextArea: Story = {
  args: {
    placeholder: 'Insert text here',
    prefixElement: (
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

export const SufixElementTextArea: Story = {
  args: {
    placeholder: 'Insert text here',
    sufixElement: (
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

export const ErrorText: Story = {
  args: {
    placeholder: 'Insert text here',
    errorMsg: 'Oh, snapp! Some error message.',
  },
};

export const SucessText: Story = {
  args: {
    placeholder: 'Insert text here',
    sucessMsg: 'Well done! Some success message.',
  },
};
