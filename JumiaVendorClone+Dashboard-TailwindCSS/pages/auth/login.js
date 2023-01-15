import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import { forwardRef } from "react";
import { IoMdLock, IoMdPerson } from "react-icons/io";
import Footer from "../../components/footer2";
import { RiPriceTagFill } from "react-icons/ri";
import Router from 'next/router';

const Login = () => {
  const session = useSession();
  React.useEffect(() => {
    if(session.status === 'authenticated') Router.replace("/dashboard");
  }, [session.status]);
    const [userInfo, setUserInfo] = React.useState({email: '', password: ''})
    const handleSubmit = async (e) => {
      e.preventDefault();
      const res = await signIn("credentials", {
        email: userInfo.email,
        password: userInfo.password,
        redirect: false,
      });
      console.log(res);
    };
  return (
    <div className="m-10">
        <div className="p-3">
        <img
          src="https://sellercenter.jumia.com.eg/templates/default/images/logo.png"
          alt=""
        />
      </div>
      <div className="bg-orange-500 mt-2 h-1"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 lg:gap-0 py-10">
        <div className="hidden lg:block lg:col-span-2">
          <img
            src="https://mcusercontent.com/c38200f78fdf3ddc057323516/images/d90fe37c-f496-06a2-ba54-758cce790ed5.png"
            alt=""
          />
        </div>
        <div className="p-5 border rounded shadow">
        <form onSubmit={handleSubmit}>
        <Field
              icon={<PersonIcon />}
              label="Email"
              value={userInfo.email}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, email: target.value })
              }
              type="email"
            />
            <Field
              icon={<LockIcon />}
              label="Password"
              name="password"
              value={userInfo.password}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, password: target.value })
              }
              type="password"
            />
            <button
              className={`${BtnStyle.default} ${BtnStyle.color.teal}`}
              type="submit"
            >
              LOGIN
            </button>
            <p className='text-center mt-2'>OR</p>
                <div className="flex justify-center">
                <button className={`${BtnStyle.default2} ${BtnStyle.color.light}`}><RiPriceTagFill className="text-orange-400 pl-3 text-3xl"/><span className='ml-2'>Login as Tag Employee</span></button>
                </div>
          </form>
          </div>
       </div>
            <div className="bg-gray-400 mt-5 h-1"></div>
            <Footer />
    </div>
  )
}

export default Login

const BtnStyle = {
  default: `text-white mt-5 font-bolder focus:outline-none shadow rounded w-full px-6 py-2 font-medium transition ease-in duration-200`,
  default2: `text-gray-400 mt-3 font-thin flex items-center justify-center text-md focus:outline-none shadow-md hover:shadow-lg rounded w-10/12 px-6 py-2 font-medium transition ease-in duration-200`,
  color: {
    primary: `bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:ring-offset-blue-100`,
    success: `bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:ring-offset-green-100`,
    danger: `bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-600 focus:ring-offset-red-100`,
    dark: `bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:ring-offset-gray-100`,
    dark: `bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:ring-offset-gray-100`,
    warning: `bg-yellow-500 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 focus:ring-offset-yellow-100`,
    indigo: `bg-indigo-900 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-900 focus:ring-offset-indigo-100`,
    orange: ` bg-orange-400 focus:ring-2 focus:ring-offset-2 focus:ring-orange-200 focus:ring-offset-orange-100`,
    teal: `bg-teal-600 focus:ring-2 focus:ring-offset-2 focus:ring-teal-600 focus:ring-offset-teal-100`,
    light: ` bg-slate-100 focus:ring-2 focus:ring-offset-2 focus:ring-slate-100 focus:ring-offset-slate-50`,
  },
};

const style = {
  error: `ring-red-500 ring-1`,
  disabled: `cursor-not-allowed`,
  container: `relative mb-6 mt-3`,
  errorMessage: `text-sm text-red-500 mt-2`,
  checkboxLabel: `block overflow-hidden h-6 rounded-full bg-gray-600`,
  checkboxContainer: `relative w-10 mr-2 align-middle select-none mt-2`,
  iconContainer: `absolute flex border border-transparent left-0 top-3 h-full w-10`,
  icon: `flex items-center justify-center rounded-tl rounded-bl z-10 text-gray-400 text-lg h-full w-full`,
  checkbox: `checked:bg-blue-500 checked:right-0 focus:outline-none right-4 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer`,
  default: `text-base relative flex flex-1 w-full mt-1 rounded-md py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-1 focus:border-transparent border`,
};

const Field = forwardRef(
  (
    { disabled, dot, error, icon, label, name, type = "text", ...rest },
    ref
  ) => {
    let component;

    component = (
      <div className="relative">
        <div>
          <div className={style.iconContainer}>
            <div className={style.icon}>{icon}</div>
          </div>
          <fieldset>
            <legend>{label}</legend>
            <input
              aria-required={dot}
              aria-invalid={!!error}
              className={`${style.default} ${icon ? "pl-12" : ""}
               ${error ? style.error : "border-gray-300"}
               ${disabled ? style.disabled : ""}
            `}
              disabled={disabled}
              id={name}
              name={name}
              type={type}
              ref={ref}
              {...rest}
            />
          </fieldset>
        </div>
        {error && <ErrorIcon />}
      </div>
    );

    return (
      <div className={`${style.container} ${disabled ? "opacity-50" : ""}`}>
      
        {component}
        {error && (
          <span role="alert" className={style.errorMessage}>
            {error}
          </span>
        )}
      </div>
    );
  }
);

Field.displayName = "Field";

const ErrorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    fill="currentColor"
    className="absolute right-2 -mt-7 text-red-500"
    viewBox="0 0 1792 1792"
  >
    <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z" />
  </svg>
);

const LockIcon = () => (
  <IoMdLock className="text-3xl" />
);

const PersonIcon = () => (
  <IoMdPerson className="text-3xl" />
);
