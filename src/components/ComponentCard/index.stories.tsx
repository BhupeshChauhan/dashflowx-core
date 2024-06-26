import type { Meta, StoryObj } from '@storybook/react';
import { ComponentCard } from '.';

const meta: Meta<typeof ComponentCard> = {
  title: 'Element/ComponentCard',
  component: ComponentCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    label: 'Alerts',
    image: (
      <svg
        width="398"
        height="200"
        viewBox="0 0 398 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd_2407_3103)">
          <g clip-path="url(#clip0_2407_3103)">
            <rect x="6" y="2" width="386" height="188" rx="8" fill="white" />
            <rect
              x="27"
              y="19.5"
              width="140"
              height="8"
              rx="2"
              fill="#D1D5DB"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M363.501 25.801C363.342 25.9603 363.125 26.0498 362.9 26.0498C362.675 26.0498 362.458 25.9603 362.299 25.801L359.5 23.0019L356.701 25.801C356.541 25.9558 356.326 26.0415 356.103 26.0395C355.88 26.0376 355.667 25.9482 355.509 25.7906C355.352 25.633 355.262 25.4198 355.26 25.197C355.259 24.9741 355.344 24.7594 355.499 24.5991L358.899 21.1991C359.058 21.0397 359.275 20.9502 359.5 20.9502C359.725 20.9502 359.942 21.0397 360.101 21.1991L363.501 24.5991C363.66 24.7585 363.75 24.9746 363.75 25.2C363.75 25.4254 363.66 25.6416 363.501 25.801Z"
              fill="#D1D5DB"
            />
            <rect x="27" y="52" width="331" height="6" rx="1" fill="#E5E7EB" />
            <rect
              x="27"
              y="63"
              width="300.688"
              height="6"
              rx="1"
              fill="#E5E7EB"
            />
            <rect
              x="27"
              y="74"
              width="315.297"
              height="6"
              rx="1"
              fill="#E5E7EB"
            />
            <rect
              x="27"
              y="85"
              width="157.066"
              height="6"
              rx="1"
              fill="#E5E7EB"
            />
            <line x1="6" y1="103.5" x2="392" y2="103.5" stroke="#E4E4E7" />
            <rect
              x="27"
              y="121.5"
              width="99"
              height="8"
              rx="2"
              fill="#D1D5DB"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M355.499 123.199C355.658 123.04 355.875 122.95 356.1 122.95C356.325 122.95 356.542 123.04 356.701 123.199L359.5 125.998L362.299 123.199C362.377 123.118 362.471 123.053 362.575 123.008C362.679 122.964 362.79 122.94 362.903 122.939C363.016 122.939 363.128 122.96 363.232 123.003C363.337 123.045 363.432 123.109 363.511 123.188C363.591 123.268 363.654 123.363 363.697 123.468C363.74 123.572 363.761 123.684 363.76 123.797C363.759 123.91 363.736 124.021 363.691 124.125C363.647 124.229 363.582 124.322 363.501 124.401L360.101 127.801C359.942 127.96 359.725 128.05 359.5 128.05C359.275 128.05 359.058 127.96 358.899 127.801L355.499 124.401C355.34 124.241 355.25 124.025 355.25 123.8C355.25 123.575 355.34 123.358 355.499 123.199Z"
              fill="#D1D5DB"
            />
            <line x1="6" y1="146.5" x2="392" y2="146.5" stroke="#E4E4E7" />
            <line x1="6" y1="146.5" x2="392" y2="146.5" stroke="#E4E4E7" />
            <rect
              x="27"
              y="164.5"
              width="115"
              height="8"
              rx="2"
              fill="#D1D5DB"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M355.499 166.199C355.658 166.04 355.875 165.95 356.1 165.95C356.325 165.95 356.542 166.04 356.701 166.199L359.5 168.998L362.299 166.199C362.377 166.118 362.471 166.053 362.575 166.008C362.679 165.964 362.79 165.94 362.903 165.939C363.016 165.939 363.128 165.96 363.232 166.003C363.337 166.045 363.432 166.109 363.511 166.188C363.591 166.268 363.654 166.363 363.697 166.468C363.74 166.572 363.761 166.684 363.76 166.797C363.759 166.91 363.736 167.021 363.691 167.125C363.647 167.229 363.582 167.322 363.501 167.401L360.101 170.801C359.942 170.96 359.725 171.05 359.5 171.05C359.275 171.05 359.058 170.96 358.899 170.801L355.499 167.401C355.34 167.241 355.25 167.025 355.25 166.8C355.25 166.575 355.34 166.358 355.499 166.199Z"
              fill="#D1D5DB"
            />
          </g>
          <rect
            x="6.5"
            y="2.5"
            width="385"
            height="187"
            rx="7.5"
            stroke="#D4D4D8"
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_2407_3103"
            x="0"
            y="0"
            width="398"
            height="200"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="3" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2407_3103"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_2407_3103"
              result="effect2_dropShadow_2407_3103"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_2407_3103"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_2407_3103">
            <rect x="6" y="2" width="386" height="188" rx="8" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
};
