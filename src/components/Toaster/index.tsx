'use client';

import { useToast } from '@/lib/use-toast';
import { Button } from '../Button';
import { ToastAction } from '../Toast';
import { ToasterComp } from './ToasterComp';

function Toaster() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: 'Scheduled: Catch up ',
          description: 'Friday, February 10, 2023 at 5:57 PM',
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        });
      }}
    >
      Add to calendar
    </Button>
  );
}

export { Toaster, ToasterComp };
