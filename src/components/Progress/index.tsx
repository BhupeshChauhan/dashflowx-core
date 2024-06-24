import { ProgressComp } from './ProgressComp';

interface iProgress {
  progress: number;
  className: string;
}

function Progress({ progress, className }: iProgress) {
  return <ProgressComp value={progress} className={className} />;
}

export { Progress, ProgressComp };
