import React from 'react';
import {
  ContextMenuCheckboxItem,
  ContextMenuComp,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from './ContextMenuComp';

interface ContextMenuProps {
  childern?: string | JSX.Element;
  items?: {
    type: 'label' | 'seperator' | 'subMenu' | 'radio' | 'checkbox';
    title?: string | JSX.Element;
    shortcut?: string | JSX.Element;
    value?: string;
    checked?: boolean;
    children?: {
      title: string | JSX.Element;
      shortcut?: string | JSX.Element;
      value?: string;
    }[];
  }[];
  className?: string;
  children?: React.ReactNode;
}

function ContextMenu({ 
  childern = 'Right-click me', 
  items = [], 
  className = '', 
  children 
}: ContextMenuProps) {
  // Ensure items is always an array
  const menuItems = Array.isArray(items) ? items : [];
  
  const renderMenuItem = (item: any, index: number) => {
    if (item.type === 'label') {
      return React.createElement(ContextMenuItem, { key: index }, [
        item.title,
        item.shortcut && React.createElement(ContextMenuShortcut, { key: 'shortcut' }, item.shortcut)
      ]);
    }
    if (item.type === 'seperator') {
      return React.createElement(ContextMenuSeparator, { key: index });
    }
    if (item.type === 'subMenu') {
      return React.createElement(ContextMenuSub, { key: index }, [
        React.createElement(ContextMenuSubTrigger, { key: 'trigger', inset: true }, item.title),
        React.createElement(ContextMenuSubContent, { key: 'content', className: 'w-48' }, 
          item.children?.map((child: any, childIndex: number) =>
            React.createElement(ContextMenuItem, { key: childIndex }, [
              child.title,
              child.shortcut && React.createElement(ContextMenuShortcut, { key: 'shortcut' }, child.shortcut)
            ])
          )
        )
      ]);
    }
    if (item.type === 'radio') {
      return React.createElement(ContextMenuRadioGroup, { key: index, value: item.value || '' }, [
        React.createElement(ContextMenuLabel, { key: 'label', inset: true }, item.title),
        React.createElement(ContextMenuSeparator, { key: 'separator' }),
        ...item.children?.map((child: any, childIndex: number) =>
          React.createElement(ContextMenuRadioItem, { key: childIndex, value: child.value || '' }, child.title)
        ) || []
      ]);
    }
    if (item.type === 'checkbox') {
      return React.createElement(ContextMenuCheckboxItem, { key: index, checked: item.checked }, [
        item.title,
        item.shortcut && React.createElement(ContextMenuShortcut, { key: 'shortcut' }, item.shortcut)
      ]);
    }
    return null;
  };

  return React.createElement(ContextMenuComp, {}, [
    React.createElement(ContextMenuTrigger, { key: 'trigger' }, children || childern),
    React.createElement(ContextMenuContent, { key: 'content', className: `min-w-56 ${className}` }, 
      menuItems.map(renderMenuItem)
    )
  ]);
}

export {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuComp,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
};
