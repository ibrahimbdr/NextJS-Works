import React from 'react';
import {AiFillHome, AiFillFileAdd, AiFillSetting, AiOutlineMenu} from 'react-icons/ai';
import {MdBorderColor} from 'react-icons/md';
import {GiShoppingBag} from 'react-icons/gi';
import {HiDocumentReport} from 'react-icons/hi';
import {BsFillEnvelopeFill} from 'react-icons/bs';
import Link from 'next/link';

const SidenavPage = () => {
  const [open, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <>
      <button
        type="button"
        aria-disabled={open}
        disabled={open}
        onClick={toggle}
        className="text-dark focus:outline-none m-1.5 px-6 py-2 font-medium bg-transparent rounded-full"
      >
        <AiOutlineMenu/>
      </button>
      <Sidenav open={open} toggle={toggle}>
      <div className='flex justify-center items-center pb-7'>
      <img
          src="/logo.png"
          alt="logo"
          className="w-32"
        />
      </div>
      <h6 className='pl-1 pb-1 text-left text-white' >Dashboards</h6>
        <SidenavItem href="/dashboard/">
          <AiFillHome/>
          <span className="pl-2">Summary</span>
        </SidenavItem>
        <h6 className='pl-1 pb-1 text-left text-white' >Pages</h6>
        <SidenavItem href="/dashboard/inbox">
          <BsFillEnvelopeFill/>
          <span className="pl-2">Inbox</span>
        </SidenavItem>
        <SidenavItem href="/dashboard/products">
          <GiShoppingBag/>
          <span className="pl-2">Products</span>
        </SidenavItem>
        <SidenavItem href="/dashboard/orders">
          <MdBorderColor/>
          <span className="pl-2">Orders</span>
        </SidenavItem>
        <SidenavItem href="/dashboard/newproduct">
          <AiFillFileAdd/>
          <span className="pl-2">New Product</span>
        </SidenavItem>
        <SidenavItem href="/dashboard/reports">
          <HiDocumentReport/>
          <span className="pl-2">Reports</span>
        </SidenavItem>
        <h6 className='pl-1 pb-1 text-left text-white' >Account</h6>
        <SidenavItem href="/dashboard/account">
          <AiFillSetting/>
          <span className="pl-2">Settings</span>
        </SidenavItem>
      </Sidenav>
    </>
  );
};

/* Sidenav logic */

const style = {
  item: `flex justify-start cursor-pointer font-medium hover:text-orange-500 ml-8 mb-10`,
  closeIcon: `absolute top-1 focus:outline-none right-3 text-3xl text-white cursor-pointer`,
  sidenav: {
    open: `w-7/12 md:w-60 bg-gray-400 text-gray-800 overflow-x-hidden`,
    close: `w-0 bg-gray-400 text-white overflow-x-hidden`,
    default: `h-screen fixed z-20 top-0 left-0 transition-all ease duration-200`,
  },
};

function Sidenav({ open, toggle, children }) {
  const ref = React.useRef(null);

  //close on click outside
  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        if (!open) return;
        toggle(false);
      }
    };
    window.addEventListener('mousedown', handleOutsideClick);
    return () => window.removeEventListener('mousedown', handleOutsideClick);
  }, [open, ref]);

  return (
    <aside
      ref={ref}
      className={`${style.sidenav.default} 
        ${open ? style.sidenav.open : style.sidenav.close}`}
    >
      <button aria-label="Close" className={style.closeIcon} onClick={toggle}>
        &times;
      </button>
      <div className="mt-12">{children}</div>
    </aside>
  );
}

function SidenavItem({ children, href }) {
  return (
    <Link href={href}  legacyBehavior>
    <a className={style.item}>
      {children}
    </a>
    </Link>
  );
}

export default SidenavPage