import { Button } from '@/components';
import { useState } from 'react';
import { DrawerComp } from './DrawerComp';

interface iDrawer {
  header?: JSX.Element;
  contentElement: JSX.Element;
  footer?: JSX.Element;
  anchorOrigin: {
    horizontal: string;
    vertical: string;
  };
  key: string;
  className: string;
  containerClassName?: string;
  headerClassName?: string;
  footerClassName?: string;
}

export const Drawer: React.FC<iDrawer> = ({
  header,
  contentElement,
  footer,
  anchorOrigin,
  key,
  className,
}) => {
  const [open, setopen] = useState(false);
  const handleClose = () => {
    setopen(false);
  };
  const handleOpen = () => {
    setopen(true);
  };
  return (
    <>
      <Button variant="solid" color="primary" onClick={handleOpen}>
        Open Drawer
      </Button>
      <DrawerComp
        header={header}
        contentElement={contentElement}
        footer={footer}
        anchorOrigin={anchorOrigin}
        key={key}
        isOpen={open}
        handleClose={handleClose}
        className={className}
      />
    </>
  );
};
