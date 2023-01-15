import React from 'react'
import { useRouter } from 'next/router';
import Router, { withRouter } from 'next/router'
import { forwardRef } from 'react';
import { useFormik, Formik } from 'formik';
import * as Yup from 'yup';
import Footer from '../../../components/footer2';

const RegisterStep3 = () => {
    const router = useRouter(); 
    // const formik = useFormik({
    //     initialValues: {
    //         bankName: '',
    //         bank: '',
    //         bankCode: '',
    //         accountName: '',
    //         accountNumber: '',
    //         SWIFT: '',
    //         IBAN: '',
    //         paybalAccount: '',
    //     },
    //     validationSchema: validateSchema,
    //     onSubmit: (values) => {
    //       console.log(JSON.stringify(values));
    //       // window.alert(JSON.stringify(values));
    //       localStorage.setItem('Bank Account', JSON.stringify(values));
    //       Router.push({
    //         pathname: '/register/step/4',
            

    //     });
    //     },
    //   });
  return (
    <div className='m-10'>
        <div className='p-3'>
            <img src="https://sellercenter.jumia.com.eg/templates/default/images/logo.png" alt="" />
        </div>
        <div className="bg-orange-500 mt-2 h-1"></div>
    <div>

        <h4 className='mt-4 text-2xl p-3'>Register and start selling today - create your own seller account</h4>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
        <div className='md:col-span-3 p-4 bg-gray-300'>
        <Formik
            initialValues={
              {bankName: '',
              bank: '',
              bankCode: '',
              accountName: '',
              accountNumber: '',
              SWIFT: '',
              IBAN: '',
              paybalAccount: '',}
            }
            validationSchema= {validateSchema}
            onSubmit={ (values) => {
                console.log(JSON.stringify(values));
                // window.alert(JSON.stringify(values));
                localStorage.setItem('Bank Account', JSON.stringify(values));
                Router.push({
                  pathname: '/register/step/4',
                  
      
              });
              }}
            >
      {props=>(<form onSubmit={props.handleSubmit}>
        
        
     <h2 className='text-xl mb-2'>Add Bank Account</h2>
        <Field
          dot={false}
          error={props.errors?.bankName}
          label="Bank name list"
          name="bankName"
          value={props.values.bankName}
          onChange={props.handleChange}
          type="select"
        >
            <option>-Choose an option-</option>
            <option value="NBE">NBE - National Bank of Egypt</option>
            <option value="CIB">CIB - Commercial International Bank</option>
            <option value="QNB">QNB - Qatar National Bank Alahli</option>
            <option value="MISR">MISR - Banque Misr</option>
            <option value="AAIB">AAIB - Arab African International Bank</option>
            <option value="BDC">BDC - Banque Du Caire</option>
            <option value="CAE">CAE - Credit Agricole Egypt</option>
            <option value="BOA">BOA - Bank of Alexandria</option>
            <option value="HSBC">HSBC - HSBC</option>
            <option value="FAIB">FAIB - Faisal Islamic Bank of Egypt</option>
            <option value="AUB">AUB - Ahly United Bank</option>
            <option value="AUDI">AUDI - Audi Bank</option>
            <option value="ABC">ABC - Arab Banking Corporation</option>
            <option value="ABK">ABK - Al Ahli Bank of Kuwait - Egypt</option>
            <option value="ABRK">ABRK - Al Baraka Bank Egypt</option>
            <option value="ADIB">ADIB - Abu Dhabi Islamic Bank – Egypt</option>
            <option value="AIB">AIB - Arab Investment Bank</option>
            <option value="ARAB">ARAB - Arab Bank</option>
            <option value="BBE">BBE - Attijariwafa Bank Egypt S.A.E</option>
            <option value="BLOM">BLOM - Blom Bank Egypt</option>
            <option value="CITI">CITI - Citibank</option>
            <option value="EALB">EALB - Egyptian Arab Land Bank</option>
            <option value="EDBE">EDBE - Export Development Bank of Egypt</option>
            <option value="EGB">EGB - Egyptian Gulf Bank</option>
            <option value="ENBD">ENBD - Emirates National Bank of Dubai</option>
            <option value="FAB">FAB - First Abu Dhabi Bank</option>
            <option value="HDB">HDB - Housing And Development Bank</option>
            <option value="IDB">IDB - Industrial Development Bank</option>
            <option value="MASH">MASH - Mashreq Bank</option>
            <option value="MIDB">MIDB - Misr Iran Development Bank</option>
            <option value="NBG">NBG - National Bank of Greece</option>
            <option value="NBK">NBK - National Bank Of Kuwait – Egypt</option>
            <option value="NSB">NSB - Nasser Social Bank</option>
            <option value="PDAC">PDAC - The Principal Bank for Development and Agri.</option>
            <option value="SAIB">SAIB - Societe Arabe Internationale De Banque</option>
            <option value="SCB">SCB - Suez Canal Bank</option>
            <option value="UB">UB - The United Bank</option>
            <option value="UNB">UNB - Union National Bank</option>
            <option value="ARIB">ARIB - Arab International Bank</option>
            <option value="CBE">CBE - Central Bank Of Egypt</option>
        </Field>
        <Field
            dot={false}
            error={props.errors?.bank}
            label="Bank"
            name="bank"
            value={props.values.bank}
            onChange={props.handleChange}
            type="text"
            />
        <Field
            dot={false}
            error={props.errors?.bankCode}
            label="Bank Code"
            name="bankCode"
            value={props.values.bankCode}
            onChange={props.handleChange}
            type="text"
            />
        <Field
            dot={false}
            error={props.errors?.accountName}
            label="Account Name"
            name="accountName"
            value={props.values.accountName}
            onChange={props.handleChange}
            type="text"
            />
        <Field
            dot={true}
            error={props.errors?.accountNumber}
            label="Account Number"
            name="accountNumber"
            value={props.values.accountNumber}
            onChange={props.handleChange}
            type="text"
            />
        <Field
          dot={false}
          error={props.errors?.SWIFT}
          label="SWIFT"
          name="SWIFT"
          value={props.values.SWIFT}
          onChange={props.handleChange}
          type="text"
        />
        <Field
          dot={false}
        //   error={props.errors?.SWIFTpdf}
          name="SWIFTpdf"
          value={props.values.SWIFTpdf}
          onChange={props.handleChange}
          type="file"
        />
        <Field
          dot={false}
          error={props.errors?.IBAN}
          label="IBAN"
          name="IBAN"
          value={props.values.IBAN}
          onChange={props.handleChange}
          type="text"
        />
        <Field
          dot={true}
          error={props.touched?.paybalAccount && props.errors?.paybalAccount}
          label="Paybal Account"
          name="paybalAccount"
          value={props.values.paybalAccount}
          onChange={props.handleChange}
          type="text"
        />
        
        <button
          className="mt-8 bg-black active:bg-gray-900 focus:outline-none text-white rounded px-4 py-1"
          type="submit" 
          // onClick={()=>goStep2()}
        >
          Continue
        </button>
        <button
          className="mt-8 bg-gray-500 active:bg-gray-900 focus:outline-none text-white rounded px-4 py-1"
          // type="submit" 
          // onClick={()=>goStep2()}
        >
          Back
        </button>
        
      </form>)}
      </Formik>
      </div>
      <div className='md:col-span-1 p-4 bg-gray-300 h-fit'>
          <h3>FAQ</h3>
        </div>
      </div>
    </div>
    <div className="bg-gray-400 mt-5 h-1"></div>
    <Footer/>
    </div>
  );
};

// Yup validation schema
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validateSchema = Yup.object().shape({
    bankName: Yup.string(),
    bank: Yup.string(),
    bankCode: Yup.string(),
    accountName: Yup.string(),
    accountNumber: Yup.string().required("Value is required and can't be empty"),
    SWIFT: Yup.string(),
    IBAN: Yup.string(),
    paybalAccount: Yup.string().required("Value is required and can't be empty"),
});

/*  COMPONENT LOGIC */

const style = {
  dot: `after:content-['*'] after:ml-0.5 after:text-red-500`,
  error: `ring-red-500 ring-1`,
  disabled: `cursor-not-allowed`,
  container: `relativ lg:grid lg:grid-cols-2 mb-6 mt-3`,
  errorMessage: `text-sm text-red-500 mt-2`,
  checkboxLabel: `block overflow-hidden h-6 rounded-full bg-gray-300`,
  checkboxContainer: `relative w-10 mr-2 align-middle select-none mt-2`,
  iconContainer: `absolute flex border border-transparent left-0 top-0 h-full w-10`,
  icon: `flex items-center justify-center rounded-tl rounded-bl z-10 text-gray-400 text-lg h-full w-full`,
  checkbox: `checked:bg-blue-500 checked:right-0 focus:outline-none right-4 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer`,
  default: `text-base relative flex flex-1 w-full lg:w-8/12 mt-1 rounded-md py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-1 focus:border-transparent border`,
};

const Field = forwardRef(
  (
    { disabled, dot, error, icon, label, name, type = 'text', ...rest },
    ref,
  ) => {
    let component;

    // if you won't use select, you can delete this part
    if (type === 'select') {
      component = (
        <select
          aria-required={dot}
          aria-invalid={!!error}
          className={`${style.default} ${disabled ? style.disabled : ''}
             ${error ? style.error : 'border-gray-300'}
          `}
          disabled={disabled}
          id={name}
          name={name}
          ref={ref}
          {...rest}
        />
      );
    }

    // if you won't use textarea, you can delete this part
    if (type === 'textarea') {
      component = (
        <textarea
          aria-required={dot}
          aria-invalid={!!error}
          className={`${style.default} ${disabled ? style.disabled : ''}
             ${error ? style.error : 'border-gray-300'}
          `}
          disabled={disabled}
          id={name}
          name={name}
          ref={ref}
          {...rest}
        />
      );
    }

    // if you won't use checkbox, you can delete this part and the classes checkbox, checkboxContainer and checkboxLabel
    if (type === 'checkbox') {
      component = (
        <div className={style.checkboxContainer}>
          <input
            aria-required={dot}
            aria-invalid={!!error}
            className={`${style.checkbox} ${disabled ? style.disabled : ''}`}
            disabled={disabled}
            id={name}
            name={name}
            type="checkbox"
            {...rest}
          />
          <span className={style.checkboxLabel} />
        </div>
      );
    }

    // if you won't use input, you can delete this part
    if (type !== 'checkbox' && type !== 'select' && type !== 'textarea') {
      component = (
        <div className="relative">
          <div className={style.iconContainer}>
            <div className={style.icon}>{icon}</div>
          </div>
          <input
            aria-required={dot}
            aria-invalid={!!error}
            className={`${style.default} ${icon ? 'pl-12' : ''}
               ${error ? style.error : 'border-gray-300'}
               ${disabled ? style.disabled : ''}
            `}
            disabled={disabled}
            id={name}
            name={name}
            type={type}
            ref={ref}
            {...rest}
          />
          {error && <ErrorIcon />}
        </div>
      );
    }

    return (
      <div className={`${style.container} ${disabled ? 'opacity-50' : ''}`}>
        <label htmlFor={name} className={`text-gray-700 ${dot && style.dot}`}>
          {label}
        </label>
        {component}
        {error && (
          <span role="alert" className={style.errorMessage}>
            {error}
          </span>
        )}
      </div>
    );
  },
);

Field.displayName = 'Field';

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
  <svg
    height="20"
    width="20"
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" />
  </svg>
);

export default RegisterStep3