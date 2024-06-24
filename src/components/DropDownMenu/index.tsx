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
  type: 'label' | 'seperator' | 'group';
  title?: string | JSX.Element;
  shortcut?: string | JSX.Element;
  children?: iDropDownMenuItemsChildren[];
}

interface iDropDownMenu {
  actionButton: string;
  dropdownItems: iDropDownMenuItems[];
}

function DropDownMenu({ actionButton, dropdownItems }: iDropDownMenu) {
  return (
    <DropdownMenuComp>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{actionButton}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {dropdownItems?.map((dropdownItem) => {
          if (dropdownItem.type === 'label') {
            return <DropdownMenuLabel>{dropdownItem.title}</DropdownMenuLabel>;
          }
          if (dropdownItem.type === 'seperator') {
            return <DropdownMenuSeparator />;
          }
          if (dropdownItem.type === 'group') {
            return (
              <DropdownMenuGroup>
                {dropdownItem?.children?.map((child) => (
                  <>
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
                          <DropdownMenuSubContent>
                            {child?.subChildren?.map((subChild) => (
                              <DropdownMenuItem>
                                {subChild.title}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                    )}
                  </>
                ))}
              </DropdownMenuGroup>
            );
          }
        })}
      </DropdownMenuContent>
    </DropdownMenuComp>
  );
}

export {
  DropDownMenu,
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
