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
  backgroundColor?: 'default' | 'white' | 'gray' | 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'indigo' | 'pink' | 'orange' | 'teal' | 'cyan' | 'emerald' | 'lime' | 'amber' | 'rose' | 'violet' | 'fuchsia' | 'sky' | 'slate' | 'zinc' | 'neutral' | 'stone' | 'glass' | 'gradient-blue' | 'gradient-green' | 'gradient-purple' | 'gradient-pink' | 'gradient-orange' | 'gradient-teal' | 'gradient-cyan' | 'gradient-indigo' | 'gradient-violet' | 'gradient-rose' | 'gradient-emerald' | 'gradient-lime' | 'gradient-amber' | 'gradient-sky' | 'gradient-slate' | 'gradient-zinc' | 'gradient-neutral' | 'gradient-stone' | 'gradient-rainbow';
  backgroundIntensity?: '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  customBgColor?: string;
  variant?: 'default' | 'minimal' | 'bold';
  theme?: 'light' | 'dark' | 'primary';
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

// Background color utility functions
const getBackgroundClasses = (
  backgroundColor: NavigationMenuProps['backgroundColor'] = 'default',
  backgroundIntensity: NavigationMenuProps['backgroundIntensity'] = '500',
  customBgColor?: string
): string => {
  if (customBgColor) {
    return customBgColor;
  }

  switch (backgroundColor) {
    case 'white':
      return 'bg-white';
    case 'gray':
      return `bg-gray-${backgroundIntensity}`;
    case 'blue':
      return `bg-blue-${backgroundIntensity}`;
    case 'green':
      return `bg-green-${backgroundIntensity}`;
    case 'red':
      return `bg-red-${backgroundIntensity}`;
    case 'yellow':
      return `bg-yellow-${backgroundIntensity}`;
    case 'purple':
      return `bg-purple-${backgroundIntensity}`;
    case 'indigo':
      return `bg-indigo-${backgroundIntensity}`;
    case 'pink':
      return `bg-pink-${backgroundIntensity}`;
    case 'orange':
      return `bg-orange-${backgroundIntensity}`;
    case 'teal':
      return `bg-teal-${backgroundIntensity}`;
    case 'cyan':
      return `bg-cyan-${backgroundIntensity}`;
    case 'emerald':
      return `bg-emerald-${backgroundIntensity}`;
    case 'lime':
      return `bg-lime-${backgroundIntensity}`;
    case 'amber':
      return `bg-amber-${backgroundIntensity}`;
    case 'rose':
      return `bg-rose-${backgroundIntensity}`;
    case 'violet':
      return `bg-violet-${backgroundIntensity}`;
    case 'fuchsia':
      return `bg-fuchsia-${backgroundIntensity}`;
    case 'sky':
      return `bg-sky-${backgroundIntensity}`;
    case 'slate':
      return `bg-slate-${backgroundIntensity}`;
    case 'zinc':
      return `bg-zinc-${backgroundIntensity}`;
    case 'neutral':
      return `bg-neutral-${backgroundIntensity}`;
    case 'stone':
      return `bg-stone-${backgroundIntensity}`;
    case 'glass':
      return 'bg-white/10 backdrop-blur-md border border-white/20';
    case 'gradient-blue':
      return 'bg-gradient-to-r from-blue-500 to-blue-700';
    case 'gradient-green':
      return 'bg-gradient-to-r from-green-500 to-green-700';
    case 'gradient-purple':
      return 'bg-gradient-to-r from-purple-500 to-purple-700';
    case 'gradient-pink':
      return 'bg-gradient-to-r from-pink-500 to-pink-700';
    case 'gradient-orange':
      return 'bg-gradient-to-r from-orange-500 to-orange-700';
    case 'gradient-teal':
      return 'bg-gradient-to-r from-teal-500 to-teal-700';
    case 'gradient-cyan':
      return 'bg-gradient-to-r from-cyan-500 to-cyan-700';
    case 'gradient-indigo':
      return 'bg-gradient-to-r from-indigo-500 to-indigo-700';
    case 'gradient-violet':
      return 'bg-gradient-to-r from-violet-500 to-violet-700';
    case 'gradient-rose':
      return 'bg-gradient-to-r from-rose-500 to-rose-700';
    case 'gradient-emerald':
      return 'bg-gradient-to-r from-emerald-500 to-emerald-700';
    case 'gradient-lime':
      return 'bg-gradient-to-r from-lime-500 to-lime-700';
    case 'gradient-amber':
      return 'bg-gradient-to-r from-amber-500 to-amber-700';
    case 'gradient-sky':
      return 'bg-gradient-to-r from-sky-500 to-sky-700';
    case 'gradient-slate':
      return 'bg-gradient-to-r from-slate-500 to-slate-700';
    case 'gradient-zinc':
      return 'bg-gradient-to-r from-zinc-500 to-zinc-700';
    case 'gradient-neutral':
      return 'bg-gradient-to-r from-neutral-500 to-neutral-700';
    case 'gradient-stone':
      return 'bg-gradient-to-r from-stone-500 to-stone-700';
    case 'gradient-rainbow':
      return 'bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500';
    default:
      return 'bg-background';
  }
};

const getThemeClasses = (theme: NavigationMenuProps['theme'] = 'light'): string => {
  switch (theme) {
    case 'dark':
      return 'text-white';
    case 'primary':
      return 'text-primary';
    default:
      return 'text-foreground';
  }
};

const getVariantClasses = (variant: NavigationMenuProps['variant'] = 'default'): string => {
  switch (variant) {
    case 'minimal':
      return 'px-2 py-1 text-sm';
    case 'bold':
      return 'px-6 py-3 text-lg font-bold';
    default:
      return 'px-4 py-2';
  }
};

// Dynamic NavigationMenu Component
const NavigationMenu: React.FC<NavigationMenuProps> = ({
  items = defaultItems,
  className,
  onItemClick,
  showIcons = true,
  showBadges = true,
  backgroundColor = 'default',
  backgroundIntensity = '500',
  customBgColor,
  variant = 'default',
  theme = 'light',
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

  const backgroundClasses = getBackgroundClasses(backgroundColor, backgroundIntensity, customBgColor);
  const themeClasses = getThemeClasses(theme);
  const variantClasses = getVariantClasses(variant);

  return (
    <NavigationMenuComp className={cn(backgroundClasses, themeClasses, variantClasses, className)}>
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