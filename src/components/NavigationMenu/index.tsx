import * as React from 'react';

import { cn } from '@/lib/utils';
import {
  NavigationMenuComp,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from './NavigationMenuComp';

// Types
export interface NavigationMenuItemType {
  id: string;
  title: string;
  href?: string;
  description?: string;
  type: 'link' | 'dropdown';
  items?: NavigationMenuItemType[];
  disabled?: boolean;
  icon?: React.ReactNode;
  badge?: string | number;
  onClick?: () => void;
}

export interface NavigationMenuProps {
  items?: NavigationMenuItemType[];
  className?: string;
  onItemClick?: (item: NavigationMenuItemType) => void;
  showIcons?: boolean;
  showBadges?: boolean;
}

// Default items
const defaultItems: NavigationMenuItemType[] = [
  {
    id: 'getting-started',
    title: 'Getting started',
    type: 'dropdown',
    items: [
      {
        id: 'intro',
        title: 'Introduction',
        href: '/docs',
        description: 'Re-usable components built using Radix UI and Tailwind CSS.',
        type: 'link'
      },
      {
        id: 'installation',
        title: 'Installation',
        href: '/docs/installation',
        description: 'How to install dependencies and structure your app.',
        type: 'link'
      },
      {
        id: 'typography',
        title: 'Typography',
        href: '/docs/primitives/typography',
        description: 'Styles for headings, paragraphs, lists...etc',
        type: 'link'
      }
    ]
  },
  {
    id: 'components',
    title: 'Components',
    type: 'dropdown',
    items: [
      {
        id: 'alert-dialog',
        title: 'Alert Dialog',
        href: '/docs/primitives/alert-dialog',
        description: 'A modal dialog that interrupts the user with important content and expects a response.',
        type: 'link'
      },
      {
        id: 'hover-card',
        title: 'Hover Card',
        href: '/docs/primitives/hover-card',
        description: 'For sighted users to preview content available behind a link.',
        type: 'link'
      },
      {
        id: 'progress',
        title: 'Progress',
        href: '/docs/primitives/progress',
        description: 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
        type: 'link'
      },
      {
        id: 'scroll-area',
        title: 'Scroll-area',
        href: '/docs/primitives/scroll-area',
        description: 'Visually or semantically separates content.',
        type: 'link'
      },
      {
        id: 'tabs',
        title: 'Tabs',
        href: '/docs/primitives/tabs',
        description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
        type: 'link'
      },
      {
        id: 'tooltip',
        title: 'Tooltip',
        href: '/docs/primitives/tooltip',
        description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
        type: 'link'
      }
    ]
  },
  {
    id: 'documentation',
    title: 'Documentation',
    href: '/docs',
    type: 'link'
  }
];

// Dynamic NavigationMenu Component
const NavigationMenu: React.FC<NavigationMenuProps> = ({
  items = defaultItems,
  className,
  onItemClick,
  showIcons = true,
  showBadges = true,
}) => {
  const handleItemClick = (item: NavigationMenuItemType) => {
    if (item.disabled) return;
    
    if (item.onClick) {
      item.onClick();
    }
    
    if (onItemClick) {
      onItemClick(item);
    }
  };

  const renderMenuItem = (item: NavigationMenuItemType) => {
    if (item.type === 'dropdown' && item.items) {
      return (
        <NavigationMenuItem key={item.id}>
          <NavigationMenuTrigger>
            <div className="flex items-center space-x-2">
              {showIcons && item.icon && (
                <span className="flex-shrink-0">{item.icon}</span>
              )}
              <span>{item.title}</span>
              {showBadges && item.badge && (
                <span className="ml-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {item.items.map((subItem) => (
                <ListItem
                  key={subItem.id}
                  title={subItem.title}
                  href={subItem.href}
                  onClick={() => handleItemClick(subItem)}
                  disabled={subItem.disabled}
                >
                  {subItem.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }

    if (item.type === 'link') {
      return (
        <NavigationMenuItem key={item.id}>
          <NavigationMenuLink 
            className={navigationMenuTriggerStyle()}
            href={item.href}
            onClick={() => handleItemClick(item)}
          >
            <div className="flex items-center space-x-2">
              {showIcons && item.icon && (
                <span className="flex-shrink-0">{item.icon}</span>
              )}
              <span>{item.title}</span>
              {showBadges && item.badge && (
                <span className="ml-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </div>
          </NavigationMenuLink>
        </NavigationMenuItem>
      );
    }

    return null;
  };

  return (
    <NavigationMenuComp className={className}>
      <NavigationMenuList>
        {items.map(renderMenuItem)}
      </NavigationMenuList>
    </NavigationMenuComp>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { disabled?: boolean }
>(({ className, title, children, disabled, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            disabled && 'opacity-50 cursor-not-allowed',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export {
  NavigationMenu,
  NavigationMenuComp,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
};