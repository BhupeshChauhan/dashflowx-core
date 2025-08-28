import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '.';

// Import the type from the component file
interface iBreadcrumbItemChild {
  title: string | JSX.Element;
  href?: string;
}

interface iBreadcrumbItem {
  id: string;
  type: 'item' | 'dropdown';
  title: string | JSX.Element;
  href?: string;
  children?: iBreadcrumbItemChild[];
  separator?: boolean;
}

const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'minimal', 'bordered', 'filled', 'gradient', 'outlined'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    separatorStyle: {
      control: 'select',
      options: ['slash', 'chevron', 'arrow', 'dot', 'custom', 'caret', 'double-chevron', 'triangle'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const sampleBreadcrumbs: iBreadcrumbItem[] = [
  { id: '1', type: 'item', title: 'Home', href: '/', separator: true },
  { id: '2', type: 'item', title: 'Products', href: '/products', separator: true },
  { id: '3', type: 'item', title: 'Electronics', href: '/products/electronics', separator: true },
  { id: '4', type: 'item', title: 'Smartphones', separator: false },
];

const sampleBreadcrumbsWithDropdown: iBreadcrumbItem[] = [
  { id: '1', type: 'item', title: 'Home', href: '/', separator: true },
  { id: '2', type: 'dropdown', title: 'Products', href: '/products', separator: true, children: [
    { title: 'Electronics', href: '/products/electronics' },
    { title: 'Clothing', href: '/products/clothing' },
    { title: 'Books', href: '/products/books' },
  ]},
  { id: '3', type: 'item', title: 'Electronics', href: '/products/electronics', separator: true },
  { id: '4', type: 'item', title: 'Smartphones', separator: false },
];

export const Basic: Story = {
  args: {
    breadcrumbList: sampleBreadcrumbs,
  },
};

export const WithDropdown: Story = {
  args: {
    breadcrumbList: sampleBreadcrumbsWithDropdown,
  },
};

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
    breadcrumbList: sampleBreadcrumbs,
  },
};

export const Minimal: Story = {
  args: {
    variant: 'minimal',
    size: 'md',
    breadcrumbList: sampleBreadcrumbs,
  },
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    size: 'md',
    breadcrumbList: sampleBreadcrumbs,
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    size: 'md',
    breadcrumbList: sampleBreadcrumbs,
  },
};

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    size: 'md',
    breadcrumbList: sampleBreadcrumbs,
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    size: 'md',
    breadcrumbList: sampleBreadcrumbs,
  },
};

export const Small: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    breadcrumbList: sampleBreadcrumbs,
  },
};

export const Large: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    breadcrumbList: sampleBreadcrumbs,
  },
};

export const SlashSeparator: Story = {
  args: {
    variant: 'default',
    size: 'md',
    separatorStyle: 'slash',
    breadcrumbList: sampleBreadcrumbs,
  },
};

export const ChevronSeparator: Story = {
  args: {
    variant: 'default',
    size: 'md',
    separatorStyle: 'chevron',
    breadcrumbList: sampleBreadcrumbs,
  },
};

export const ArrowSeparator: Story = {
  args: {
    variant: 'default',
    size: 'md',
    separatorStyle: 'arrow',
    breadcrumbList: sampleBreadcrumbs,
  },
};

export const DotSeparator: Story = {
  args: {
    variant: 'default',
    size: 'md',
    separatorStyle: 'dot',
    breadcrumbList: sampleBreadcrumbs,
  },
};

export const CaretSeparator: Story = {
  args: {
    variant: 'default',
    size: 'md',
    separatorStyle: 'caret',
    breadcrumbList: sampleBreadcrumbs,
  },
};

export const DoubleChevronSeparator: Story = {
  args: {
    variant: 'default',
    size: 'md',
    separatorStyle: 'double-chevron',
    breadcrumbList: sampleBreadcrumbs,
  },
};

export const TriangleSeparator: Story = {
  args: {
    variant: 'default',
    size: 'md',
    separatorStyle: 'triangle',
    breadcrumbList: sampleBreadcrumbs,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Breadcrumb variant="default" size="md" breadcrumbList={sampleBreadcrumbs} />
      <Breadcrumb variant="minimal" size="md" breadcrumbList={sampleBreadcrumbs} />
      <Breadcrumb variant="bordered" size="md" breadcrumbList={sampleBreadcrumbs} />
      <Breadcrumb variant="filled" size="md" breadcrumbList={sampleBreadcrumbs} />
      <Breadcrumb variant="gradient" size="md" breadcrumbList={sampleBreadcrumbs} />
      <Breadcrumb variant="outlined" size="md" breadcrumbList={sampleBreadcrumbs} />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Breadcrumb variant="default" size="sm" breadcrumbList={sampleBreadcrumbs} />
      <Breadcrumb variant="default" size="md" breadcrumbList={sampleBreadcrumbs} />
      <Breadcrumb variant="default" size="lg" breadcrumbList={sampleBreadcrumbs} />
    </div>
  ),
};

export const AllSeparators: Story = {
  render: () => (
    <div className="space-y-4">
      <Breadcrumb variant="default" size="md" separatorStyle="slash" breadcrumbList={sampleBreadcrumbs} />
      <Breadcrumb variant="default" size="md" separatorStyle="chevron" breadcrumbList={sampleBreadcrumbs} />
      <Breadcrumb variant="default" size="md" separatorStyle="arrow" breadcrumbList={sampleBreadcrumbs} />
      <Breadcrumb variant="default" size="md" separatorStyle="dot" breadcrumbList={sampleBreadcrumbs} />
      <Breadcrumb variant="default" size="md" separatorStyle="custom" breadcrumbList={sampleBreadcrumbs} />
      <Breadcrumb variant="default" size="md" separatorStyle="caret" breadcrumbList={sampleBreadcrumbs} />
      <Breadcrumb variant="default" size="md" separatorStyle="double-chevron" breadcrumbList={sampleBreadcrumbs} />
      <Breadcrumb variant="default" size="md" separatorStyle="triangle" breadcrumbList={sampleBreadcrumbs} />
    </div>
  ),
};

export const CustomStyling: Story = {
  args: {
    variant: 'bordered',
    size: 'lg',
    separatorStyle: 'chevron',
    className: 'border-blue-500 bg-blue-50',
    listClassName: 'space-x-3',
    itemClassName: 'text-blue-700 hover:text-blue-900',
    activeItemClassName: 'text-blue-900 font-bold',
    separatorClassName: 'text-blue-500',
    breadcrumbList: sampleBreadcrumbs,
  },
};
