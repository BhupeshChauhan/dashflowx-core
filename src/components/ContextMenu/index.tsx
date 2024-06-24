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

interface iContextMenu {
  childern: string | JSX.Element;
  items: {
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
}
function ContextMenu({ childern, items }: iContextMenu) {
  return (
    <ContextMenuComp>
      <ContextMenuTrigger>{childern}</ContextMenuTrigger>
      <ContextMenuContent className="min-w-56">
        {items?.map((item) => {
          if (item.type === 'label') {
            return (
              <ContextMenuItem>
                {item.title}
                <ContextMenuShortcut>{item.shortcut}</ContextMenuShortcut>
              </ContextMenuItem>
            );
          }
          if (item.type === 'seperator') {
            return <ContextMenuSeparator />;
          }
          if (item.type === 'subMenu') {
            return (
              <ContextMenuSub>
                <ContextMenuSubTrigger inset>
                  {item.title}
                </ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-48">
                  {item?.children?.map((child) => (
                    <ContextMenuItem>
                      {child.title}
                      <ContextMenuShortcut>
                        {child.shortcut}
                      </ContextMenuShortcut>
                    </ContextMenuItem>
                  ))}
                </ContextMenuSubContent>
              </ContextMenuSub>
            );
          }
          if (item.type === 'radio') {
            return (
              <ContextMenuRadioGroup value={item.value || ''}>
                <ContextMenuLabel inset>{item.title}</ContextMenuLabel>
                <ContextMenuSeparator />
                {item?.children?.map((child) => (
                  <ContextMenuRadioItem value={child.value || ''}>
                    {child.title}
                  </ContextMenuRadioItem>
                ))}
              </ContextMenuRadioGroup>
            );
          }
          if (item.type === 'checkbox') {
            return (
              <ContextMenuCheckboxItem checked={item.checked}>
                {item.title}
                <ContextMenuShortcut>{item.shortcut}</ContextMenuShortcut>
              </ContextMenuCheckboxItem>
            );
          }
        })}
      </ContextMenuContent>
    </ContextMenuComp>
  );
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
