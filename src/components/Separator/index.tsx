import { SeparatorComp } from './SeparatorComp';

interface iSeparator {
  orientation: 'horizontal' | 'vertical';
}
function Separator({ orientation }: iSeparator) {
  return <SeparatorComp orientation={orientation} />;
}
export { Separator, SeparatorComp };
