import React from 'react'
import Link from 'next/link';
import { signOut } from "next-auth/react";
import ArabicFlag from './arabicFlag';
import EnglishFlag from './englishFlag';
import { useContext } from "react";
// import { useRouter } from 'next/router';
import { UseSession, useSession } from 'next-auth/react';
import AppContext from "../context/AppContext";
import {GrClose, GrMenu} from 'react-icons/gr';

const Header = () => {
  const {status, data} = useSession();
    // const router = useRouter()
    const [dashboardMenu, setDashboardMenu] = React.useState(false);
    const value = useContext(AppContext);
    let { languageSelected } = value.state;
    let { navbarRegisterLink, navbarHomeLink, navbarShippingPageLink,
        navbarSellingExpensesPageLink, navbarLanguageLink } = value.state.languages;
        function setLang(){
            languageSelected=='en'?value.setLanguageSelected("ar"):value.setLanguageSelected("en");
        }
  return (
    <Navbar>
         <div className='flex justify-between items-center w-full' {...(languageSelected=='en' ? {dir: 'ltr'} : {dir: 'rtl'})}>
         <div className='flex items-center order-2 lg:order-1' {...(languageSelected=='en' ? {dir: 'ltr'} : {dir: 'rtl'})} style={{height: 'fit-content'}}>
         <Link href='/register/step/1' className={'btn p-3 bg-orange-400 text-white rounded-full shadow-lg my-4'} style={{height: 'fit-content'}}>{navbarRegisterLink}</Link>
         <ul className='hidden lg:flex lg:items-center  text-orange-400' {...(languageSelected=='en' ? {dir: 'ltr'} : {dir: 'rtl'})}>
        
        <li className='mx-4'>
            <Link href='/'>{navbarHomeLink}</Link>
        </li>
        <li className='mx-4'>
            <Link href='/protected'>{navbarShippingPageLink}</Link>
        </li>
        <li className='mx-4'>
            <Link href='#'>{navbarSellingExpensesPageLink}</Link>
        </li>
        <li className='mx-4'>
        <Link href='#' className='flex items-center' onClick={() => setLang()}>{languageSelected=="en"?<><ArabicFlag/>{navbarLanguageLink}</>:<>{navbarLanguageLink}<EnglishFlag/></>}</Link>
        </li>
        {status==='authenticated' && <li className='mx-4 relative'>
            <span className='hover:cursor-pointer' onClick={()=>{dashboardMenu==false?setDashboardMenu(true):setDashboardMenu(false)}}><img src="/user_2.png" alt="user" className="w-9 rounded-full"/>
              {dashboardMenu==true&&<ul className='list-unstyled absolute p-3 text-sm bg-white shadow-lg animate-modal -left-10 top-10 rounded w-32'>
                <li className='text-center'><Link href='/dashboard'>My Dashboard</Link></li>
                <li className='text-center'><Link href='/dashboard/account'>My Account</Link></li>
                <li className='text-center'><span className='hover:cursor-pointer' onClick={()=>signOut()}>Log out</span></li>
              </ul>}
            </span>
        </li>}
    </ul>
        
         </div>
        <div className=' order-1 lg:order-2'>
        <img
                src="/logo.png"
                alt="logo"
                className="w-32 block md-hidden"
            />
        </div>
        <NavbarToggler/>
         </div>
         <NavbarCollapse>
        <ul className='lg:hidden text-start text-orange-400 p-0 border-0'  {...(languageSelected=='en' ? {dir: 'ltr'} : {dir: 'rtl'})}>
        
            <li className='border-t-2 border-b-2 p-2'>
                <Link href='#'>{navbarHomeLink}</Link>
            </li>
            <li className='border-b-2 p-2'>
                <Link href='#'>{navbarShippingPageLink}</Link>
            </li>
            <li className='border-b-2 p-2'>
                <Link href='#'>{navbarSellingExpensesPageLink}</Link>
            </li>
            <li className='border-b-2 p-2'>
                <Link href='#' className='flex items-center' onClick={() => setLang()}>{languageSelected=="en"?<><ArabicFlag/>{navbarLanguageLink}</>:<>{navbarLanguageLink}<EnglishFlag/></>}</Link>
            </li>
            {status==='authenticated' && <li className='border-b-2 p-2'>
                <li><Link href='/dashboard'>My Dashboard</Link></li>
        </li>}
        {status==='authenticated' && <li className='border-b-2 p-2'>
                <li><Link href='/dashboard/account'>My Account</Link></li>
        </li>}
        {status==='authenticated' && <li className='border-b-2 p-2'>
                <li><span className='hover:cursor-pointer' onClick={()=>signOut()}>Log out</span></li>
        </li>}
        </ul>
        </NavbarCollapse>
    </Navbar>
 
  )
}

const style = {
    navbar: `sticky bg-white pl-2 py-2 shadow top-0 w-full lg:flex lg:flex-row lg:items-center lg:justify-start lg:sticky`,
    brand: `cursor-pointer font-bold inline-block mr-4 py-1.5 text-2xl whitespace-nowrap hover:text-gray-200`,
    toggler: `block order-3 text-orange-400 lg:order-0 float-right text-4xl lg:hidden focus:outline-none focus:shadow`,
    item: `whitespace-pre cursor-pointer px-4 py-3 hover:text-gray-200`,
    collapse: {
      default: `border-0 bg-slate-150 fixed left-0 mt-2 shadow text-center lg:border-none lg:flex lg:flex-grow lg:items-center lg:mt-0 lg:py-0 lg:relative lg:shadow-none`,
      open: `h-auto visible sticky transition-all duration-500 ease-out opacity-100 lg:transition-none`,
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
  const [menu, setMenu] = React.useState(false);
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
      <nav ref={navbarRef} className={`${className} ${style.navbar}`} style={{zIndex: '9999'}}>
        {children}
      </nav>
    </Context.Provider>
  );
};

const useToggle = () => React.useContext(Context);

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
        {/* &#x58; */}
        {/* {open? <>&#8801;</> : <>&#x58;</> } */}
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

export default Header