import { SeparatorComp } from '../Separator/SeparatorComp';
import { ScrollAreaComp, ScrollBar } from './ScrollAreaComp';

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

function ScrollArea() {
  return (
    <ScrollAreaComp className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            <SeparatorComp className="my-2" />
          </>
        ))}
      </div>
    </ScrollAreaComp>
  );
}

export { ScrollArea, ScrollAreaComp, ScrollBar };
