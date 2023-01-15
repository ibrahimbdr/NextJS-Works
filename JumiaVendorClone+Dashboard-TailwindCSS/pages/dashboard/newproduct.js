import React from 'react'
import { useSession } from 'next-auth/react';
import Router from 'next/router';
import { forwardRef } from 'react';
import { useFormik, Formik } from 'formik';
import * as Yup from 'yup';
import { FiDollarSign } from 'react-icons/fi';
import NavbarPage from '../../components/navBar';
import Footer from '../../components/footer';

const newproduct = () => {
  const { data: session, status } = useSession({
    required: true,
  })
    const [token, setToken] = React.useState('')
    React.useEffect(() => {
      if(status === 'unauthenticated') Router.replace("/auth/login");
    }, [status]);
    const [fileState, setFileState] = React.useState({});
    if(status === 'loading'){
      return <div className='h-screen w-screen flex justify-center items-center'><Spinner color="#f59e0b" className="h-12" /></div>
    }

    if(status === 'authenticated'){
      

    return (
      <div className=" bg-gray-200">
        
      <div className='bg-white'>
          <NavbarPage />
      </div>
      <section className="antialiased font-sans bg-gray-200 min-h-screen">
          <div className="container mx-auto px-4 sm:px-8">
              <div className="py-8">
                  <div>
                      <h2 className="text-2xl font-semibold leading-tight">New Product</h2>
                  </div>
        <div className='flex justify-center w-full'>

      
            <Formik
            initialValues= {{
            title: '',
            title_ar: '',
            brand: '',
            brand_ar: '',
            category: '',
            category_ar: '',
            price: '',
            quantity: '',
            description: '',
            description_ar: '',
            specifications: '',
            specifications_ar: '',
            mImage: '',
            aImages: '',
            }}
            validationSchema= {validateSchema}
            onSubmit={ async(values) => {
              console.log(JSON.stringify(values))
              console.log(session.user.accessToken)
              // const file = values.mImage[0];
              // console.log(file);
              const res = await fetch("http://localhost:4444/product", {
                method: 'POST',
                body: JSON.stringify(values),
                headers: { 
                  "Content-Type": "application/json",
                  "authorization": session.user.accessToken
              }
        })

                // const user = await res.json();
                // console.log(user);
            }}
            >
        {props => (
      <form onSubmit={props.handleSubmit} className="w-4/5" method='post' encType='multipart/form-data'>
        <Field
          dot={true}
          error={props.touched?.title && props.errors?.title}
          label="Title (Latin)"
          name="title"
          onChange={props.handleChange}
          type="text"
        />
        <Field
          dot={true}
          error={props.touched?.title_ar && props.errors?.title_ar}
          label="Title (Arabic)"
          name="title_ar"
          onChange={props.handleChange}
          type="text"
        />
        <Field
          dot={true}
          error={props.touched?.brand && props.errors?.brand}
          label="Brand (Latin)"
          name="brand"
          onChange={props.handleChange}
          type="text"
        />
        <Field
          dot={true}
          error={props.touched?.brand_ar && props.errors?.brand_ar}
          label="Brand (Arabic)"
          name="brand_ar"
          onChange={props.handleChange}
          type="text"
        />
        <Field
          dot={true}
          error={props.touched?.category && props.errors?.category}
          label="Category (Latin)"
          name="category"
          onChange={props.handleChange}
          type="select"
          >
            <option>-Select Product Category-</option>
            <option value="Supermarket">Supermarket</option>
            <option value="Fashion">Fashion</option>
            <option value="Health & Beauty">Health & Beauty</option>
            <option value="Baby Products">Baby Products</option>
            <option value="Phones & Tablets">Phones & Tablets</option>
            <option value="Home & Office">Home & Office</option>
            <option value="Electronics">Electronics</option>
            <option value="Computing">Computing</option>
            <option value="Sporting Goods">Sporting Goods</option>
            <option value="Gaming">Gaming</option>
            <option value="Automobile">Automobile</option>
          </Field>
          <Field
          dot={true}
          error={props.touched?.category_ar && props.errors?.category_ar}
          label="Category (Arabic)"
          name="category_ar"
          onChange={props.handleChange}
          type="select"
          >
            <option>-اختر التصنيف-</option>
            <option value="بقالة">بقالة</option>
            <option value="أزياء">أزياء</option>
            <option value="الصحة و الجمال">الصحة و الجمال</option>
            <option value="منتجات العناية بالأطفال">منتجات العناية بالأطفال</option>
            <option value="موبايلات و تابلت">موبايلات و تابلت</option>
            <option value="المنزل و المكتب">المنزل و المكتب</option>
            <option value="إلكترونيات">إلكترونيات</option>
            <option value="الكومبيوتر">الكومبيوتر</option>
            <option value="مستلزمات رياضية">مستلزمات رياضية</option>
            <option value="العاب">العاب</option>
            <option value="مستلزمات السيارات و الموتوسيكلات">مستلزمات السيارات و الموتوسيكلات</option>
          </Field>
        <Field
          dot={true}
          error={props.touched?.price && props.errors?.price}
          icon={<PriceIcon />}
          label="Price"
          name="price"
          onChange={props.handleChange}
          type="text"
        />
        <Field
          dot={true}
          error={props.touched?.quantity && props.errors?.quantity}
          label="Quantity"
          name="quantity"
          onChange={props.handleChange}
          type="text"
        />
        <Field
          dot={true}
          error={props.touched?.description && props.errors?.description}
          label="Description (Latin)"
          name="description"
          onChange={props.handleChange}
          type="textarea"
        />
        <Field
          dot={true}
          error={props.touched?.description && props.errors?.description}
          label="Description (Arabic)"
          name="description_ar"
          onChange={props.handleChange}
          type="textarea"
        />
        <Field
          dot={true}
          error={props.touched?.specifications && props.errors?.specifications}
          label="Specifications (Latin)"
          name="specifications"
          onChange={props.handleChange}
          type="text"
        />
        <Field
          dot={true}
          error={props.touched?.specifications_ar && props.errors?.specifications_ar}
          label="Specifications (Arabic)"
          name="specifications_ar"
          onChange={props.handleChange}
          type="text"
        />
        {/* <Field
          dot={true}
          error={props.touched?.mImage && props.errors?.mImage}
          label="Main Image"
          name="mImage"
          onChange={props.handleChange}
          type="file"
        /> */}
        <Field
          dot={true}
          error={props.touched?.mImage && props.errors?.mImage}
          label="Main Image (URL)"
          name="mImage"
          onChange={props.handleChange}
          type="text"
        />
        {/* <Field
          dot={false}
          error={props.touched?.aImages && props.errors?.aImages}
          label="Addtional Images"
          name="aImages"
          onChange={props.handleChange}
          type="file"
          // multiple="multiple"
        /> */}
        <Field
          dot={false}
          error={props.touched?.aImages && props.errors?.aImages}
          label="Addtional Images (URL)"
          name="aImages"
          onChange={props.handleChange}
          type="text"
          // multiple="multiple"
        />
        <button
          className="mt-8 bg-gray-300 hover:bg-orange-400 hover:text-white text-gray-800  active:bg-orange-300 focus:outline-none rounded px-4 py-1"
          type="submit"
        >
          Add Product
        </button>
      </form>)}
            </Formik>
            </div>
        </div>
        </div>
        <Footer/>
        </section>
        </div>
    )
    }
}

export default newproduct

// Yup validation schema
const validateSchema = Yup.object().shape({
    title: Yup.string().required('Field is required'),
    title_ar: Yup.string().required('Field is required'),
    brand: Yup.string().required('Field is required'),
    brand_ar: Yup.string().required('Field is required'),
    category: Yup.string().required('Field is required'),
    category_ar: Yup.string().required('Field is required'),
    price: Yup.string().required('Field is required'),
    quantity: Yup.string().required('Field is required'),
    description: Yup.string().required('Field is required'),
    description_ar: Yup.string().required('Field is required'),
    specifications: Yup.string().required('Field is required'),
    specifications_ar: Yup.string().required('Field is required'),
    mImage: Yup.string(),
    aImages: Yup.string(),
  });
  
  /*  COMPONENT LOGIC */
  
  const style = {
    dot: `after:content-['*'] after:ml-0.5 after:text-red-500`,
    error: `ring-red-500 ring-1`,
    disabled: `cursor-not-allowed`,
    container: `relative mb-6 mt-3`,
    errorMessage: `text-sm text-red-500 mt-2`,
    checkboxLabel: `block overflow-hidden h-6 rounded-full bg-gray-300`,
    checkboxContainer: `relative w-10 mr-2 align-middle select-none mt-2`,
    iconContainer: `absolute flex border border-transparent left-0 top-0 h-full w-10`,
    icon: `flex items-center justify-center rounded-tl rounded-bl z-10 text-gray-400 text-lg h-full w-full`,
    checkbox: `checked:bg-blue-500 checked:right-0 focus:outline-none right-4 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer`,
    default: `text-base relative flex flex-1 w-full mt-1 rounded-md py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-1 focus:border-transparent border`,
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
          <label htmlFor={name} className={`text-gray-900 ${dot && style.dot}`}>
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

  const PriceIcon = () => (
    <FiDollarSign className="text-3xl"/>
  );

  const Spinner = ({ color, className }) => (
    <svg
      fill={color}
      viewBox="0 0 1792 1792"
      className={`${className} flex-no-shrink animate-spin`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1760 896q0 176-68.5 336t-184 275.5-275.5 184-336 68.5-336-68.5-275.5-184-184-275.5-68.5-336q0-213 97-398.5t265-305.5 374-151v228q-221 45-366.5 221t-145.5 406q0 130 51 248.5t136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5q0-230-145.5-406t-366.5-221v-228q206 31 374 151t265 305.5 97 398.5z" />
    </svg>
  );