import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Pagination } from '.';

const meta: Meta<typeof Pagination> = {
  title: 'Element/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1, max: 100 },
    },
    totalPages: {
      control: { type: 'number', min: 1, max: 100 },
    },
    totalItems: {
      control: { type: 'number', min: 0, max: 1000 },
    },
    itemsPerPage: {
      control: { type: 'number', min: 1, max: 100 },
    },
    showFirstLast: {
      control: { type: 'boolean' },
    },
    showPrevNext: {
      control: { type: 'boolean' },
    },
    showEllipsis: {
      control: { type: 'boolean' },
    },
    maxVisiblePages: {
      control: { type: 'number', min: 3, max: 10 },
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'minimal', 'compact', 'extended'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    showInfo: {
      control: { type: 'boolean' },
    },
    showPageSize: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    showPrevNext: true,
    showEllipsis: true,
    maxVisiblePages: 5,
  },
};

export const WithFirstLast: Story = {
  args: {
    currentPage: 5,
    totalPages: 20,
    showFirstLast: true,
    showPrevNext: true,
    showEllipsis: true,
    maxVisiblePages: 5,
  },
};

export const Minimal: Story = {
  args: {
    currentPage: 3,
    totalPages: 8,
    variant: 'minimal',
    showPrevNext: true,
    showEllipsis: false,
    maxVisiblePages: 3,
  },
};

export const Compact: Story = {
  args: {
    currentPage: 2,
    totalPages: 6,
    variant: 'compact',
    showPrevNext: true,
    showEllipsis: false,
    maxVisiblePages: 4,
  },
};

export const Extended: Story = {
  args: {
    currentPage: 7,
    totalPages: 25,
    variant: 'extended',
    showFirstLast: true,
    showPrevNext: true,
    showEllipsis: true,
    maxVisiblePages: 7,
  },
};

export const WithInfo: Story = {
  args: {
    currentPage: 3,
    totalPages: 15,
    totalItems: 150,
    itemsPerPage: 10,
    showInfo: true,
    showPrevNext: true,
    showEllipsis: true,
    maxVisiblePages: 5,
  },
};

export const WithPageSize: Story = {
  args: {
    currentPage: 2,
    totalPages: 20,
    totalItems: 200,
    itemsPerPage: 10,
    showPageSize: true,
    pageSizeOptions: [5, 10, 20, 50],
    showPrevNext: true,
    showEllipsis: true,
    maxVisiblePages: 5,
  },
};

export const FullFeatured: Story = {
  args: {
    currentPage: 5,
    totalPages: 30,
    totalItems: 300,
    itemsPerPage: 10,
    showFirstLast: true,
    showPrevNext: true,
    showEllipsis: true,
    maxVisiblePages: 7,
    showInfo: true,
    showPageSize: true,
    pageSizeOptions: [10, 20, 50, 100],
    variant: 'extended',
    size: 'lg',
  },
};

export const SmallSize: Story = {
  args: {
    currentPage: 2,
    totalPages: 8,
    size: 'sm',
    showPrevNext: true,
    showEllipsis: true,
    maxVisiblePages: 3,
  },
};

export const LargeSize: Story = {
  args: {
    currentPage: 4,
    totalPages: 12,
    size: 'lg',
    showPrevNext: true,
    showEllipsis: true,
    maxVisiblePages: 5,
  },
};

export const Disabled: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    disabled: true,
    showPrevNext: true,
    showEllipsis: true,
    maxVisiblePages: 5,
  },
};

// Interactive Demo
export const InteractiveDemo: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const totalItems = 150;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Interactive Pagination Demo</h3>
          <p className="text-sm text-gray-600">
            Current Page: {currentPage} | Items per Page: {itemsPerPage} | Total Items: {totalItems}
          </p>
        </div>
        
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          onPageSizeChange={setItemsPerPage}
          showFirstLast={true}
          showPrevNext={true}
          showEllipsis={true}
          maxVisiblePages={5}
          showInfo={true}
          showPageSize={true}
          pageSizeOptions={[5, 10, 20, 50]}
          variant="extended"
        />
      </div>
    );
  },
};