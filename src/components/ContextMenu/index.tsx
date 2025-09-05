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
  childern?: string | React.ReactNode;
  items?: {
    type: 'label' | 'seperator' | 'subMenu' | 'radio' | 'checkbox';
    title?: string | React.ReactNode;
    shortcut?: string | React.ReactNode;
    value?: string;
    checked?: boolean;
    children?: {
      title: string | React.ReactNode;
      shortcut?: string | React.ReactNode;
      value?: string;
    }[];
  }[];
  className?: string;
  children?: React.ReactNode;
}

// ContextMenu component using proper TSX syntax
const SimpleContextMenu = ({ 
  childern = 'Right-click me', 
  items = [], 
  className = '', 
  children 
}: ContextMenuProps) => {
  // Ensure items is always an array
  const menuItems = Array.isArray(items) ? items : [];
  
  const renderMenuItem = (item: any, index: number) => {
    if (item.type === 'label') {
      return (
        <ContextMenuItem key={index}>
          {item.title}
          {item.shortcut && <ContextMenuShortcut>{item.shortcut}</ContextMenuShortcut>}
        </ContextMenuItem>
      );
    }
    
    if (item.type === 'seperator') {
      return <ContextMenuSeparator key={index} />;
    }
    
    if (item.type === 'subMenu') {
      return (
        <ContextMenuSub key={index}>
          <ContextMenuSubTrigger inset>
            {item.title}
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            {item.children?.map((child: any, childIndex: number) => (
              <ContextMenuItem key={childIndex}>
                {child.title}
                {child.shortcut && <ContextMenuShortcut>{child.shortcut}</ContextMenuShortcut>}
              </ContextMenuItem>
            ))}
          </ContextMenuSubContent>
        </ContextMenuSub>
      );
    }
    
    if (item.type === 'radio') {
      return (
        <ContextMenuRadioGroup key={index} value={item.value || ''}>
          <ContextMenuLabel inset>{item.title}</ContextMenuLabel>
          <ContextMenuSeparator />
          {item.children?.map((child: any, childIndex: number) => (
            <ContextMenuRadioItem key={childIndex} value={child.value || ''}>
              {child.title}
            </ContextMenuRadioItem>
          ))}
        </ContextMenuRadioGroup>
      );
    }
    
    if (item.type === 'checkbox') {
      return (
        <ContextMenuCheckboxItem key={index} checked={item.checked}>
          {item.title}
          {item.shortcut && <ContextMenuShortcut>{item.shortcut}</ContextMenuShortcut>}
        </ContextMenuCheckboxItem>
      );
    }
    
    return null;
  };

  return (
    <ContextMenuComp>
      <ContextMenuTrigger>
        {children || childern}
      </ContextMenuTrigger>
      <ContextMenuContent className={`min-w-56 ${className}`}>
        {menuItems.map(renderMenuItem)}
      </ContextMenuContent>
    </ContextMenuComp>
  );
};

// Export as ContextMenu for backward compatibility
const ContextMenu = SimpleContextMenu;

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
