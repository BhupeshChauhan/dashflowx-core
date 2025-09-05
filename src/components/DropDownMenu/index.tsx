import React from 'react';
import { Button } from '../Button';
import {
  DropdownMenuCheckboxItem,
  DropdownMenuComp,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './DropdownMenuComp';
import { 
  getVariantClasses, 
  getThemeClasses, 
  getSubMenuClasses,
  getBackgroundClasses
} from './utils';

interface iDropDownMenuItemsSubChildren {
  title: string | JSX.Element;
}

interface iDropDownMenuItemsChildren {
  type: 'item' | 'subMenu';
  title: string | JSX.Element;
  shortcut?: string | JSX.Element;
  subChildren?: iDropDownMenuItemsSubChildren[];
}
interface iDropDownMenuItems {
  type: 'label' | 'seperator' | 'group' | 'item';
  title?: string | JSX.Element;
  shortcut?: string | JSX.Element;
  children?: iDropDownMenuItemsChildren[];
}

interface iDropDownMenu {
  actionButton: string;
  dropdownItems: iDropDownMenuItems[];
  backgroundColor?: string;
  backgroundIntensity?: string;
  customBgColor?: string;
  variant?: 'default' | 'compact' | 'large';
  theme?: 'light' | 'dark';
  className?: string;
}

function DropdownMenu({ 
  actionButton, 
  dropdownItems,
  backgroundColor,
  backgroundIntensity,
  customBgColor,
  variant = 'default',
  theme = 'light',
  className = ''
}: iDropDownMenu) {
  // Generate background classes
  const backgroundClasses = getBackgroundClasses(backgroundColor, backgroundIntensity);
  const themeClasses = getThemeClasses(theme);
  const variantClasses = getVariantClasses(variant);
  const subMenuClasses = getSubMenuClasses(theme);
  
  // Combine all classes
  const contentClasses = `${backgroundClasses} ${themeClasses} ${variantClasses} ${className}`.trim();
  
  // Apply custom background color if provided
  const contentStyle = customBgColor ? { backgroundColor: customBgColor } : {};
  
  return (
    <DropdownMenuComp>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{actionButton}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={contentClasses} style={contentStyle}>
        {dropdownItems?.map((dropdownItem, index) => {
          if (dropdownItem.type === 'label') {
            return <DropdownMenuLabel key={index}>{dropdownItem.title}</DropdownMenuLabel>;
          }
          if (dropdownItem.type === 'seperator') {
            return <DropdownMenuSeparator key={index} />;
          }
          if (dropdownItem.type === 'item') {
            return (
              <DropdownMenuItem key={index}>
                {dropdownItem.title}
                {dropdownItem.shortcut && (
                  <DropdownMenuShortcut>
                    {dropdownItem.shortcut}
                  </DropdownMenuShortcut>
                )}
              </DropdownMenuItem>
            );
          }
          if (dropdownItem.type === 'group') {
            return (
              <DropdownMenuGroup key={index}>
                {dropdownItem?.children?.map((child, childIndex) => (
                  <React.Fragment key={childIndex}>
                    {child.type === 'item' && (
                      <DropdownMenuItem>
                        {child.title}
                        {child.shortcut && (
                          <DropdownMenuShortcut>
                            {child.shortcut}
                          </DropdownMenuShortcut>
                        )}
                      </DropdownMenuItem>
                    )}
                    {child.type === 'subMenu' && (
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          {child.title}
                        </DropdownMenuSubTrigger>
                        {child.shortcut && (
                          <DropdownMenuShortcut>
                            {child.shortcut}
                          </DropdownMenuShortcut>
                        )}
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent className={subMenuClasses}>
                            {child?.subChildren?.map((subChild, subIndex) => (
                              <DropdownMenuItem key={subIndex}>
                                {subChild.title}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                    )}
                  </React.Fragment>
                ))}
              </DropdownMenuGroup>
            );
          }
          return null;
        })}
      </DropdownMenuContent>
    </DropdownMenuComp>
  );
}

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuComp,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
};
