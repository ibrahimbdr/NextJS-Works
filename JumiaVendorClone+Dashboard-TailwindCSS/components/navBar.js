import React from 'react';
import { signOut } from 'next-auth/react'
import {BsBell, BsEnvelope} from 'react-icons/bs';
import SidenavPage from './sideNav';
import Link from 'next/link'

export const NavbarPage = () => {
  const [dashboardMenu, setDashboardMenu] = React.useState(false);
  return (
    <Navbar className="bg-white text-gray-600">
          {/* <NavbarItem className="list-none">
            <NavbarLink href="#"><SidenavPage /></NavbarLink>
          </NavbarItem> */}
      <NavbarCollapse>
        <NavbarNav orientation="start">
      <SidenavPage />
      <NavbarBrand href="/dashboard">
        <img
          src="/logo.png"
          alt="logo"
          className="w-32"
        />
      <NavbarToggler />
        {/* <SidenavPage /> */}
      </NavbarBrand>
        </NavbarNav>
        <NavbarNav orientation="end">
          <NavbarItem>
            <NavbarLink href="#"><BsEnvelope/></NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#"><BsBell/></NavbarLink>
          </NavbarItem>
          <NavbarItem2>
            <NavbarLink href="#">
              <img src="/user.png" alt="user" className="w-9 rounded-full hover:cursor-pointer"  onClick={()=>{dashboardMenu==false?setDashboardMenu(true):setDashboardMenu(false)}}/>

              {dashboardMenu==true&&<ul className='list-unstyled absolute p-3 text-sm bg-white shadow-lg animate-modal right-1  rounded w-32'>

                <li className='text-center text-gray-900 hover:text-orange-400'><Link href='/dashboard'>My Dashboard</Link></li>
                <li className='text-center text-gray-900 hover:text-orange-400'><Link href='/dashboard/account'>My Account</Link></li>
                <li className='text-center text-gray-900 hover:text-orange-400'><span className='hover:cursor-pointer' onClick={()=>signOut()}>Log out</span></li>
              </ul>}
            </NavbarLink>
          </NavbarItem2>
        </NavbarNav>
      </NavbarCollapse>
    </Navbar>
  );
};

/* Navbar logic */

const style = {
  navbar: `sticky px-4 py-2 shadow top-0 w-full lg:flex lg:flex-row lg:items-center lg:justify-start lg:relative`,
  brand: `cursor-pointer font-bold inline-block mr-4 py-1.5 text-2xl whitespace-nowrap hover:text-gray-200`,
  toggler: `block float-right text-4xl lg:hidden focus:outline-none focus:shadow`,
  item: `whitespace-pre cursor-pointer px-4 py-3 hover:text-gray-200`,
  collapse: {
    default: `border-t border-gray-200 fixed left-0 mt-2 shadow py-2 text-center lg:border-none lg:flex lg:flex-grow lg:items-center lg:mt-0 lg:py-0 lg:relative lg:shadow-none`,
    open: `h-auto visible transition-all duration-500 ease-out w-full opacity-100 lg:transition-none`,
    close: `h-auto invisible w-0 transition-all duration-300 ease-in lg:opacity-100 lg:transition-none lg:visible`,
  },
  nav: {
    start: `block mb-0 mr-auto pl-0 lg:flex lg:mb-0 lg:pl-0`,
    middle: `block mb-0 ml-auto pl-0 lg:flex lg:pl-0 lg:mb-0 lg:mx-auto`,
    end: `block pl-0 mb-0 ml-auto lg:flex lg:pl-0 lg:mb-0`,
  },
};

const Context = React.createContext({});

const Navbar = ({ children, className }) => {
  const [open, setOpen] = React.useState(false);
  const navbarRef = React.useRef(null);

  const toggle = React.useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  // close navbar on click outside when viewport is less than 1024px
  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (window.innerWidth < 1024) {
        if (!navbarRef.current?.contains(event.target)) {
          if (!open) return;
          setOpen(false);
        }
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [open, navbarRef]);

  return (
    <Context.Provider value={{ open, toggle }}>
      <nav ref={navbarRef} className={`${className} ${style.navbar}`}>
        {children}
      </nav>
    </Context.Provider>
  );
};

const useToggle = () => React.useContext(Context);

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
const NavbarBrand = ({ children, href }) => (
  <a href={href} className={style.brand}>
    <strong>{children}</strong>
  </a>
);

const NavbarToggler = () => {
  const { toggle } = useToggle();
  return (
    <button
      type="button"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className={style.toggler}
      onClick={toggle}
    >
      &#8801;
    </button>
  );
};

const NavbarCollapse = ({ children }) => {
  const { open } = useToggle();
  return (
    <div
      style={{ backgroundColor: 'inherit' }}
      className={`${style.collapse.default}
        ${open ? style.collapse.open : style.collapse.close}`}
    >
      {children}
    </div>
  );
};

const NavbarNav = ({ children, orientation }) => (
  <ul className={style.nav[orientation]}>{children}</ul>
);

const NavbarItem = ({ children }) => <li className={"flex items-center p-9"+`${style.item}`}>{children}</li>;
const NavbarItem2 = ({ children }) => <li className={"flex items-center p-9 relative"+`${style.item}`}>{children}</li>;

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
const NavbarLink = ({ children, href, active, activeClass }) => (
  <a href={href} className={active ? activeClass : ''}>
    {children}
  </a>
);

export default NavbarPage