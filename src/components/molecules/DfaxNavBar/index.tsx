import { NavMenu } from '@/components/atoms/NavMenu';
import { Navbar } from '@/components/atoms/Navbar';

export const DfaxNavBar = ({ logo }: any) => {
  return (
    <Navbar logo={logo}>
      <NavMenu>
        <li>
          {/* <Typography
            className={cn(
              active
                ? 'block py-2 px-3 text-white bg-primary-500 rounded md:bg-transparent md:text-primary-500 md:p-0 dark:text-white md:dark:text-blue-500'
                : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-500 md:p-0 dark:text-white md:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
            )}
            as={Link}
            to={'/'}
          >
            Home
          </Typography> */}
        </li>
      </NavMenu>
    </Navbar>
  );
};
