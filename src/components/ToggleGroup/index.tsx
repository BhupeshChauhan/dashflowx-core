import { ToggleComp, toggleVariants } from './Toggle';
import { ToggleGroupComp, ToggleGroupItem } from './ToggleGroupComp';

function ToggleGroup() {
  return (
    <ToggleGroupComp type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold"></ToggleGroupItem>
      <ToggleGroupItem
        value="italic"
        aria-label="Toggle italic"
      ></ToggleGroupItem>
      <ToggleGroupItem
        value="strikethrough"
        aria-label="Toggle strikethrough"
      ></ToggleGroupItem>
    </ToggleGroupComp>
  );
}

export {
  ToggleComp,
  ToggleGroup,
  ToggleGroupComp,
  ToggleGroupItem,
  toggleVariants,
};
