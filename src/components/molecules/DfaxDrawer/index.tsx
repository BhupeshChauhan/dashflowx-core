import { Button } from '@/components';
import Drawer from '@/components/atoms/Drawer';
import { useState } from 'react';

interface iDfaxDrawer {
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

export const DfaxDrawer: React.FC<iDfaxDrawer> = ({
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
      <Drawer
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
