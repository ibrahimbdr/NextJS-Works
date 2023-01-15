import React from 'react'
import Link from 'next/link';
import { forwardRef } from 'react';
import { Formik } from 'formik';
import { useContext } from "react";
import AppContext from "../context/AppContext";

const Footer = () => {
    const value = useContext(AppContext);
    let { languageSelected } = value.state;
    let { navbarLanguageLink } = value.state.languages;
    
    function setLang(lan){
        languageSelected=='en'?value.setLanguageSelected("ar"):value.setLanguageSelected("en");
        // value.setLanguageSelected('ar');
        console.log(languageSelected);
    }
  return (
    <div className='flex flex-col md:flex-row justify-between text-sm text-gray-600 font-light'>
        <div className='flex flex-col justify-center'>
            <div className='flex flex-wrap my-1'>
                <Link href="#" className="mx-3">Vendor Hub</Link>
                <Link href="#" className="mx-3">About Jumia</Link>
                <Link href="#" className="mx-3">News</Link>
                <Link href="#" className="mx-3">Contact</Link>
                <Link href="#" className="mx-3">Policies</Link>
                <Link href="#" className="mx-3">Customer Protection Policy</Link>
            </div>
            <div className='flex flex-wrap my-1'>
                <Link href="#" className="mx-3">Packaging Guidelines</Link>
                <Link href="#" className="mx-3">Size Guides</Link>
                <Link href="#" className="mx-3">Quality Check Guidelines</Link>
                <Link href="#" className="mx-3">Drop off Locations</Link>
                <Link href="#" className="mx-3">Studio Services</Link>
            </div>
            <div className='flex flex-wrap my-1'>
                <Link href="#" className="mx-3">Sell on Jumia</Link>
                <Link href="#" className="mx-3">Content Guidelines</Link>
                <Link href="/" className="mx-3">Home</Link>
            </div>
        </div>
        <div className='flex items-start mt-5 md:mt-0'>
            <Formik
            initialValues={{
                lang: languageSelected
            }}
            >
                {props=>(<form className='flex items-center'>
                    <label htmlFor='lang' className='mr-1'>
                        {languageSelected=="en"? "Language" : "اللغة"}
                    </label>
                    <select 
                        className='border border-2 m-1 p-1 h-fit'
                        name="lang"
                        value={languageSelected}
                        onChange={()=>setLang(props.values.lang)}
                        type="text"
                        >
                <option value="ar">
                    English
                </option>
                <option value="en">
                    (مصر) لغة عربية
                </option>
            </select>
                </form>)}
            </Formik>
            {/* <Link href='#' className='flex items-center' onClick={() => setLang()}>{languageSelected=="en"?<>{navbarLanguageLink}</>:<>{navbarLanguageLink}</>}</Link> */}
        </div>
    </div>
  )
}

export default Footer
