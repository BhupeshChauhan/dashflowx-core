import { Typography } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';
import { DfaxAccordion } from '.';

const meta: Meta<typeof DfaxAccordion> = {
  title: 'Components/DfaxAccordion',
  component: DfaxAccordion,
  tags: ['autodocs'],
};

const itemsArray = [
  {
    id: 1,
    title: (
      <Typography as="h6" className="mb-2">
        Accordion Title 1
      </Typography>
    ),
    description: (
      <Typography as="p" className="mb-2">
        Accordion Description 1
      </Typography>
    ),
    expandIcon: (
      <svg
        version="1.0"
        className={`h-6 w-6`}
        xmlns="http://www.w3.org/2000/svg"
        width="100.000000pt"
        height="100.000000pt"
        viewBox="0 0 100.000000 100.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
          fill={'blue'}
          stroke="none"
        >
          <path
            d="M275 520 c-218 -218 -219 -219 -200 -240 l19 -21 203 203 203 203
203 -203 203 -203 19 21 c19 21 18 22 -200 240 -121 121 -222 220 -225 220 -3
0 -104 -99 -225 -220z"
          />
        </g>
      </svg>
    ),
    collapseIcon: (
      <svg
        version="1.0"
        className={`h-6 w-6`}
        xmlns="http://www.w3.org/2000/svg"
        width="90.000000pt"
        height="90.000000pt"
        viewBox="0 0 90.000000 90.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,90.000000) scale(0.100000,-0.100000)"
          fill="blue"
          stroke="none"
        >
          <path
            d="M127 623 c-4 -3 -7 -14 -7 -22 0 -21 310 -331 330 -331 8 0 87 71
174 159 158 159 179 190 132 199 -13 3 -61 -38 -162 -139 l-144 -144 -143 143
c-131 130 -162 154 -180 135z"
          />
        </g>
      </svg>
    ),
  },
  {
    id: 2,
    title: (
      <Typography as="h6" className="mb-2">
        Accordion Title 2
      </Typography>
    ),
    description: (
      <Typography as="p" className="mb-2">
        Accordion Description 2
      </Typography>
    ),

    expandIcon: (
      <svg
        version="1.0"
        className={`h-6 w-6`}
        xmlns="http://www.w3.org/2000/svg"
        width="100.000000pt"
        height="100.000000pt"
        viewBox="0 0 100.000000 100.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
          fill="blue"
          stroke="none"
        >
          <path
            d="M275 520 c-218 -218 -219 -219 -200 -240 l19 -21 203 203 203 203
203 -203 203 -203 19 21 c19 21 18 22 -200 240 -121 121 -222 220 -225 220 -3
0 -104 -99 -225 -220z"
          />
        </g>
      </svg>
    ),
    collapseIcon: (
      <svg
        version="1.0"
        className={`h-6 w-6`}
        xmlns="http://www.w3.org/2000/svg"
        width="90.000000pt"
        height="90.000000pt"
        viewBox="0 0 90.000000 90.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,90.000000) scale(0.100000,-0.100000)"
          fill="blue"
          stroke="none"
        >
          <path
            d="M127 623 c-4 -3 -7 -14 -7 -22 0 -21 310 -331 330 -331 8 0 87 71
174 159 158 159 179 190 132 199 -13 3 -61 -38 -162 -139 l-144 -144 -143 143
c-131 130 -162 154 -180 135z"
          />
        </g>
      </svg>
    ),
  },
];

export default meta;
type Story = StoryObj<typeof meta>;

export const Accordion: Story = {
  args: {
    title: ' My Accordion Title',
    description: (
      <Typography as="p" className="mb-2 text-sm">
        My Accordion Content
      </Typography>
    ),
    items: itemsArray,
    accordionClassName: '',
    titleClassName: '',
  },
};
