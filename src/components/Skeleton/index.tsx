import { SkeletonComp } from './SkeletonComp';

function Skeleton() {
  return (
    <div className="flex items-center space-x-4">
      <SkeletonComp className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <SkeletonComp className="h-4 w-[250px]" />
        <SkeletonComp className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

export { Skeleton, SkeletonComp };
