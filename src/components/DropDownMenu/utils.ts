import React from 'react';

export interface DropdownMenuItemType {
  type: 'label' | 'seperator' | 'group' | 'item' | 'subMenu';
  title?: string | React.ReactNode;
  shortcut?: string | React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  children?: DropdownMenuItemType[];
  subChildren?: DropdownMenuItemType[];
}

export const parseArrayProp = (prop: any, defaultValue: any[]) => {
  if (typeof prop === 'string') {
    try {
      return JSON.parse(prop);
    } catch (error) {
      console.warn('Failed to parse JSON prop:', prop, error);
      return defaultValue;
    }
  }
  return Array.isArray(prop) ? prop : defaultValue;
};

export const getVariantClasses = (variant: string) => {
  switch (variant) {
    case 'compact':
      return 'min-w-40 text-xs';
    case 'large':
      return 'min-w-72 text-base';
    default:
      return 'min-w-56 text-sm';
  }
};

export const getThemeClasses = (theme: string) => {
  switch (theme) {
    case 'dark':
      return 'bg-gray-900 text-white border-gray-700';
    default:
      return 'bg-white text-gray-900 border-gray-200';
  }
};

export const getSubMenuClasses = (theme: string) => {
  switch (theme) {
    case 'dark':
      return 'bg-gray-800 text-white border-gray-600';
    default:
      return 'bg-gray-50 text-gray-900 border-gray-200';
  }
};

export const getBackgroundClasses = (backgroundColor?: string, backgroundIntensity?: string) => {
  if (!backgroundColor) return '';
  
  switch (backgroundColor) {
    case 'transparent':
      return 'bg-transparent';
    case 'glass':
      return 'bg-white/10 backdrop-blur-md border-white/20';
    case 'gradient':
      return 'bg-gradient-to-br from-blue-500 to-purple-600 text-white';
    default:
      const intensity = backgroundIntensity || '500';
      return `bg-${backgroundColor}-${intensity} text-white`;
  }
};

export const isItemDisabled = (item: DropdownMenuItemType) => {
  return item.disabled === true;
};

export const createMenuItem = (type: DropdownMenuItemType['type'], options: Partial<DropdownMenuItemType> = {}): DropdownMenuItemType => ({
  type,
  ...options
});

export const createLabelItem = (title: string, shortcut?: string, onClick?: () => void): DropdownMenuItemType =>
  createMenuItem('label', { title, shortcut, onClick });

export const createSeparatorItem = (): DropdownMenuItemType =>
  createMenuItem('seperator');

export const createGroupItem = (title: string, children: DropdownMenuItemType[] = []): DropdownMenuItemType =>
  createMenuItem('group', { title, children });

export const createSubMenuItem = (title: string, children: DropdownMenuItemType[] = []): DropdownMenuItemType =>
  createMenuItem('subMenu', { title, children });
