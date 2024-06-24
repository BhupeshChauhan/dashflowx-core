import { toast } from 'sonner';

import { Button } from '../Button';

import { SonnerComp } from './SonnerComp';

function Sonner() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo'),
          },
        })
      }
    >
      Show Toast
    </Button>
  );
}

export { Sonner, SonnerComp };
