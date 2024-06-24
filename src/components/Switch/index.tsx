import { Label } from '../Label';
import { SwitchComp } from './SwitchComp';

function Switch() {
  return (
    <div className="flex items-center space-x-2">
      <SwitchComp id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}

export { Switch, SwitchComp };
