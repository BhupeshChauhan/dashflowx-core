import {
  CommandComp,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from './CommandComp';

interface iCommand {
  suggestionsItems: {
    title: string;
    shortcut?: string;
  }[];
  items: {
    title: string;
    shortcut?: string;
    childs: {
      title: string;
      shortcut?: string;
    }[];
  }[];
}

function Command({ suggestionsItems, items }: iCommand) {
  return (
    <CommandComp className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          {suggestionsItems?.map((suggestion) => (
            <CommandItem>
              <span>{suggestion.title}</span>
              {suggestion.shortcut && (
                <CommandShortcut>{suggestion.shortcut}</CommandShortcut>
              )}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        {items?.map((item) => (
          <CommandGroup heading={item.title}>
            {item?.childs?.map((child) => (
              <CommandItem>
                <span>{child.title}</span>
                {child.shortcut && (
                  <CommandShortcut>{child.shortcut}</CommandShortcut>
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandComp>
  );
}

export {
  Command,
  CommandComp,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
};
