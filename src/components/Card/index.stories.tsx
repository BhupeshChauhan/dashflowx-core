import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '.';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'filled', 'outlined', 'ghost', 'gradient', 'neon', 'glass'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
    },
    borderWidth: {
      control: 'select',
      options: ['0', '1', '2', '4', '8'],
    },
    animation: {
      control: 'select',
      options: ['none', 'fade', 'slide', 'bounce', 'pulse'],
    },
    maxWidth: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'],
    },
    textColor: {
      control: 'select',
      options: ['auto', 'white', 'black', 'gray', 'blue', 'green', 'red', 'yellow', 'purple', 'pink'],
    },
    backgroundColor: {
      control: 'select',
      options: ['auto', 'white', 'black', 'gray', 'blue', 'green', 'red', 'yellow', 'purple', 'pink', 'transparent'],
    },
    padding: {
      control: 'select',
      options: ['auto', 'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    margin: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    theme: {
      control: 'select',
      options: ['light', 'dark', 'auto'],
    },
    elevation: {
      control: 'select',
      options: ['0', '1', '2', '3', '4', '5'],
    },
    badgeColor: {
      control: 'select',
      options: ['blue', 'green', 'red', 'yellow', 'purple', 'pink', 'gray'],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
    cardTitle: 'Default Card',
    cardDescription: 'This is a default card with standard styling',
    cardContent: 'This card demonstrates the default variant with medium size.',
  },
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    size: 'md',
    cardTitle: 'Bordered Card',
    cardDescription: 'A card with prominent borders',
    cardContent: 'This card has enhanced border styling for better definition.',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    size: 'md',
    cardTitle: 'Filled Card',
    cardDescription: 'A card with background fill',
    cardContent: 'This card has a subtle background fill for visual interest.',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    size: 'md',
    cardTitle: 'Outlined Card',
    cardDescription: 'A card with colored outline',
    cardContent: 'This card features a blue outline for emphasis.',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
    cardTitle: 'Ghost Card',
    cardDescription: 'A transparent card',
    cardContent: 'This card has a transparent background with minimal styling.',
  },
};

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    size: 'md',
    cardTitle: 'Gradient Card',
    cardDescription: 'A card with gradient background',
    cardContent: 'This card features a beautiful blue-to-indigo gradient.',
  },
};

export const Neon: Story = {
  args: {
    variant: 'neon',
    size: 'md',
    cardTitle: 'Neon Card',
    cardDescription: 'A card with neon glow effect',
    cardContent: 'This card has a striking neon cyan glow effect.',
  },
};

export const Glass: Story = {
  args: {
    variant: 'glass',
    size: 'md',
    cardTitle: 'Glass Card',
    cardDescription: 'A card with glass morphism',
    cardContent: 'This card features a modern glass morphism design.',
  },
};

export const Small: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    cardTitle: 'Small Card',
    cardDescription: 'A compact card',
    cardContent: 'This card uses the small size variant.',
  },
};

export const Large: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    cardTitle: 'Large Card',
    cardDescription: 'A spacious card',
    cardContent: 'This card uses the large size variant with more padding.',
  },
};

export const ExtraLarge: Story = {
  args: {
    variant: 'default',
    size: 'xl',
    cardTitle: 'Extra Large Card',
    cardDescription: 'A very spacious card',
    cardContent: 'This card uses the extra large size variant with maximum padding.',
  },
};

export const WithImage: Story = {
  args: {
    variant: 'default',
    size: 'md',
    cardTitle: 'Card with Image',
    cardDescription: 'A card featuring an image',
    cardContent: 'This card includes an image at the top.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop',
    imageAlt: 'Mountain landscape',
  },
};

export const WithBadge: Story = {
  args: {
    variant: 'default',
    size: 'md',
    cardTitle: 'Card with Badge',
    cardDescription: 'A card with a status badge',
    cardContent: 'This card includes a badge in the top-right corner.',
    badge: 'New',
    badgeColor: 'green',
  },
};

export const Loading: Story = {
  args: {
    variant: 'default',
    size: 'md',
    cardTitle: 'Loading Card',
    cardDescription: 'A card in loading state',
    cardContent: 'This card shows a loading overlay.',
    loading: true,
  },
};

export const Clickable: Story = {
  args: {
    variant: 'default',
    size: 'md',
    cardTitle: 'Clickable Card',
    cardDescription: 'A card that appears clickable',
    cardContent: 'This card has hover effects and appears interactive.',
    clickable: true,
    hover: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'default',
    size: 'md',
    cardTitle: 'Disabled Card',
    cardDescription: 'A card that is disabled',
    cardContent: 'This card is in a disabled state.',
    disabled: true,
  },
};

export const CustomRounded: Story = {
  args: {
    variant: 'default',
    size: 'md',
    cardTitle: 'Custom Rounded Card',
    cardDescription: 'A card with custom border radius',
    cardContent: 'This card has a custom rounded corner style.',
    rounded: 'full',
  },
};

export const CustomBorderWidth: Story = {
  args: {
    variant: 'default',
    size: 'md',
    cardTitle: 'Custom Border Width',
    cardDescription: 'A card with thick borders',
    cardContent: 'This card has a custom border width.',
    borderWidth: '4',
  },
};

export const WithAnimation: Story = {
  args: {
    variant: 'default',
    size: 'md',
    cardTitle: 'Animated Card',
    cardDescription: 'A card with animation effects',
    cardContent: 'This card includes animation effects.',
    animation: 'bounce',
  },
};

export const CustomColors: Story = {
  args: {
    variant: 'default',
    size: 'md',
    cardTitle: 'Custom Colors',
    cardDescription: 'A card with custom text and background colors',
    cardContent: 'This card uses custom color schemes.',
    textColor: 'blue',
    backgroundColor: 'yellow',
  },
};

export const CustomPadding: Story = {
  args: {
    variant: 'default',
    size: 'md',
    cardTitle: 'Custom Padding',
    cardDescription: 'A card with custom padding',
    cardContent: 'This card has custom padding settings.',
    padding: '2xl',
  },
};

export const CustomMargin: Story = {
  args: {
    variant: 'default',
    size: 'md',
    cardTitle: 'Custom Margin',
    cardDescription: 'A card with custom margin',
    cardContent: 'This card has custom margin settings.',
    margin: '2xl',
  },
};

export const DarkTheme: Story = {
  args: {
    variant: 'default',
    size: 'md',
    cardTitle: 'Dark Theme Card',
    cardDescription: 'A card with dark theme',
    cardContent: 'This card uses the dark theme.',
    theme: 'dark',
  },
};

export const AutoTheme: Story = {
  args: {
    variant: 'default',
    size: 'md',
    cardTitle: 'Auto Theme Card',
    cardDescription: 'A card that adapts to system theme',
    cardContent: 'This card automatically adapts to light/dark mode.',
    theme: 'auto',
  },
};

export const CustomElevation: Story = {
  args: {
    variant: 'default',
    size: 'md',
    cardTitle: 'Custom Elevation',
    cardDescription: 'A card with custom shadow',
    cardContent: 'This card has a custom elevation level.',
    elevation: '5',
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'default',
    size: 'md',
    cardTitle: 'Full Width Card',
    cardDescription: 'A card that spans the full width',
    cardContent: 'This card takes up the full available width.',
    fullWidth: true,
  },
};

export const MaxWidth: Story = {
  args: {
    variant: 'default',
    size: 'md',
    cardTitle: 'Max Width Card',
    cardDescription: 'A card with maximum width constraint',
    cardContent: 'This card has a maximum width constraint.',
    maxWidth: 'lg',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 max-w-6xl">
      <Card variant="default" size="md" cardTitle="Default" cardDescription="Default variant" />
      <Card variant="bordered" size="md" cardTitle="Bordered" cardDescription="Bordered variant" />
      <Card variant="filled" size="md" cardTitle="Filled" cardDescription="Filled variant" />
      <Card variant="outlined" size="md" cardTitle="Outlined" cardDescription="Outlined variant" />
      <Card variant="ghost" size="md" cardTitle="Ghost" cardDescription="Ghost variant" />
      <Card variant="gradient" size="md" cardTitle="Gradient" cardDescription="Gradient variant" />
      <Card variant="neon" size="md" cardTitle="Neon" cardDescription="Neon variant" />
      <Card variant="glass" size="md" cardTitle="Glass" cardDescription="Glass variant" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-6 max-w-4xl">
      <Card variant="default" size="sm" cardTitle="Small" cardDescription="Small size" />
      <Card variant="default" size="md" cardTitle="Medium" cardDescription="Medium size" />
      <Card variant="default" size="lg" cardTitle="Large" cardDescription="Large size" />
      <Card variant="default" size="xl" cardTitle="Extra Large" cardDescription="Extra large size" />
    </div>
  ),
};

export const AllRounded: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6 max-w-6xl">
      <Card variant="default" size="md" rounded="none" cardTitle="No Rounded" cardDescription="No border radius" />
      <Card variant="default" size="md" rounded="sm" cardTitle="Small Rounded" cardDescription="Small border radius" />
      <Card variant="default" size="md" rounded="md" cardTitle="Medium Rounded" cardDescription="Medium border radius" />
      <Card variant="default" size="md" rounded="lg" cardTitle="Large Rounded" cardDescription="Large border radius" />
      <Card variant="default" size="md" rounded="xl" cardTitle="Extra Large Rounded" cardDescription="Extra large border radius" />
      <Card variant="default" size="md" rounded="full" cardTitle="Full Rounded" cardDescription="Fully rounded corners" />
    </div>
  ),
};

export const AllBorderWidths: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6 max-w-6xl">
      <Card variant="default" size="md" borderWidth="0" cardTitle="No Border" cardDescription="No border" />
      <Card variant="default" size="md" borderWidth="1" cardTitle="Thin Border" cardDescription="Thin border" />
      <Card variant="default" size="md" borderWidth="2" cardTitle="Medium Border" cardDescription="Medium border" />
      <Card variant="default" size="md" borderWidth="4" cardTitle="Thick Border" cardDescription="Thick border" />
      <Card variant="default" size="md" borderWidth="8" cardTitle="Extra Thick Border" cardDescription="Extra thick border" />
    </div>
  ),
};

export const AllElevations: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6 max-w-6xl">
      <Card variant="default" size="md" elevation="0" cardTitle="No Shadow" cardDescription="No elevation" />
      <Card variant="default" size="md" elevation="1" cardTitle="Small Shadow" cardDescription="Small elevation" />
      <Card variant="default" size="md" elevation="2" cardTitle="Medium Shadow" cardDescription="Medium elevation" />
      <Card variant="default" size="md" elevation="3" cardTitle="Large Shadow" cardDescription="Large elevation" />
      <Card variant="default" size="md" elevation="4" cardTitle="Extra Large Shadow" cardDescription="Extra large elevation" />
      <Card variant="default" size="md" elevation="5" cardTitle="Maximum Shadow" cardDescription="Maximum elevation" />
    </div>
  ),
};

export const NoMargin: Story = {
  args: {
    variant: 'default',
    size: 'md',
    cardTitle: 'No Margin Card',
    cardDescription: 'A card with no margin',
    cardContent: 'This card has no margin applied.',
    margin: 'none',
  },
};

export const WithMargin: Story = {
  args: {
    variant: 'default',
    size: 'md',
    cardTitle: 'With Margin Card',
    cardDescription: 'A card with custom margin',
    cardContent: 'This card has custom margin applied.',
    margin: 'lg',
  },
};

export const CompactSpacing: Story = {
  args: {
    variant: 'default',
    size: 'md',
    cardTitle: 'Compact Spacing Card',
    cardDescription: 'A card with reduced margins and spacing',
    cardContent: 'This card demonstrates the improved spacing with reduced title margin.',
    margin: 'none',
    padding: 'md',
  },
};

export const WithImageCompact: Story = {
  args: {
    variant: 'default',
    size: 'md',
    cardTitle: 'Card with Image',
    cardDescription: 'A card with image and compact spacing',
    cardContent: 'This card shows the improved spacing when an image is present.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop',
    imageAlt: 'Mountain landscape',
    margin: 'none',
  },
};

export const NoDefaultMargins: Story = {
  args: {
    variant: 'default',
    size: 'md',
    cardTitle: 'No Default Margins',
    cardDescription: 'This card has explicit margin resets applied',
    cardContent: 'All text elements now have m-0 p-0 to override browser defaults.',
    margin: 'none',
    className: 'border-2 border-red-200',
  },
};
