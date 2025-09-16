import type { Meta, StoryObj } from '@storybook/react';
import { NavigationMenu } from '.';

const meta: Meta<typeof NavigationMenu> = {
  title: 'Element/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
  argTypes: {
    showIcons: {
      control: { type: 'boolean' },
    },
    showBadges: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};

export const WithCustomItems: Story = {
  args: {
    items: [
      {
        id: 'products',
        title: 'Products',
        type: 'dropdown',
        items: [
          {
            id: 'web-app',
            title: 'Web App',
            href: '/products/web',
            description: 'Full-featured web application',
            type: 'link',
            badge: 'New'
          },
          {
            id: 'mobile-app',
            title: 'Mobile App',
            href: '/products/mobile',
            description: 'Native mobile applications',
            type: 'link'
          }
        ]
      },
      {
        id: 'pricing',
        title: 'Pricing',
        href: '/pricing',
        type: 'link'
      },
      {
        id: 'contact',
        title: 'Contact',
        href: '/contact',
        type: 'link',
        disabled: true
      }
    ],
    showIcons: true,
    showBadges: true,
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        href: '/dashboard',
        type: 'link',
        icon: '📊'
      },
      {
        id: 'analytics',
        title: 'Analytics',
        type: 'dropdown',
        icon: '📈',
        items: [
          {
            id: 'reports',
            title: 'Reports',
            href: '/analytics/reports',
            description: 'View detailed reports',
            type: 'link',
            icon: '📋'
          },
          {
            id: 'metrics',
            title: 'Metrics',
            href: '/analytics/metrics',
            description: 'Key performance metrics',
            type: 'link',
            icon: '📊'
          }
        ]
      },
      {
        id: 'settings',
        title: 'Settings',
        href: '/settings',
        type: 'link',
        icon: '⚙️'
      }
    ],
    showIcons: true,
    showBadges: true,
  },
};

export const WithBadges: Story = {
  args: {
    items: [
      {
        id: 'notifications',
        title: 'Notifications',
        type: 'dropdown',
        badge: 5,
        items: [
          {
            id: 'unread',
            title: 'Unread',
            href: '/notifications/unread',
            description: 'Unread notifications',
            type: 'link',
            badge: 3
          },
          {
            id: 'all',
            title: 'All Notifications',
            href: '/notifications/all',
            description: 'All notifications',
            type: 'link'
          }
        ]
      },
      {
        id: 'messages',
        title: 'Messages',
        href: '/messages',
        type: 'link',
        badge: '12'
      },
      {
        id: 'tasks',
        title: 'Tasks',
        href: '/tasks',
        type: 'link',
        badge: 'New'
      }
    ],
    showIcons: true,
    showBadges: true,
  },
};