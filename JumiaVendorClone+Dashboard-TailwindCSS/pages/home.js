import React from 'react'
import { signIn } from 'next-auth/react';
import styles from '../styles/dashboard.module.css';
import { forwardRef } from 'react';
import Header from '../components/header';
import Footer from '../components/footer1';
import { useContext } from "react";
import AppContext from "../context/AppContext";
import {CiUser, CiDeliveryTruck} from 'react-icons/ci';
import {BsGraphUp} from 'react-icons/bs';

const HomePage = () => {
    const value = useContext(AppContext);
    let { languageSelected } = value.state;
    let { 
    homeMainSentence,
    homeNewSeller,
    homeSignSeller,
    homeRegister,
    homeLogin,
    homePageSubSentence1,
    homePageSubSentence2,
    homePageCardTitle1,
    homePageCardBody1,
    homePageCardButton1,
    homePageCardTitle2,
    homePageCardBody2,
    homePageCardButton2,
    homePageCardTitle3,
    homePageCardBody3,
    homePageCardButton3,
    homePageSubSentence3,
    homePageSubSentence4,
    homePageSubSentence5,
    homePageSubSentence6,
    homePageCardTitle4,
    homePageCardButton4,
    homePageCardTitle5,
    homePageCardButton5,
    homeContact,
} = value.state.languages;
  return (
    <div>
        <Header/>
        <div className=' mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2' >
                <div className='flex items-center' style={{zIndex: '1000'}}>
                   <img className='object-fill' src="https://sell.jumia.com/wp-content/uploads/2022/02/91375-lMmtoU-2048x1633.png" alt="" /> 
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className={`mb-10 text-4xl md:text-5xl font-bold ${languageSelected=='en' ? 'md:text-left' : 'md:text-right'} text-center mx-auto leading-normal md:leading-normal`} style={{color: '#ffaa00', maxWidth: '600px'}}>{homeMainSentence}</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 justify-center' style={{zIndex: '1000'}} {...(languageSelected=='en' ? {dir: 'ltr'} : {dir: 'rtl'})}>
                        <div className='text-center my-5'>
                            <h6 style={{color: '#ffaa00'}}>{homeNewSeller}</h6>
                            <Button>{homeRegister}</Button>
                        </div>
                        <div className='text-center my-5'>
                            <h6 style={{color: '#ffaa00'}}>{homeSignSeller}</h6>
                            <button onClick={()=>signIn()} className={`${BtnStyle.default} ${BtnStyle.color.dark}`}>{homeLogin}</button>
                            {/* <Button2 onClick={()=>signIn()}>{homeLogin}</Button2> */}
                            {/* <button onClick={()=>signIn()}>{homeLogin}</button> */}
                        </div>
                    </div>
                </div>
            </div>
                <div className={`${styles.bgImg}` + 'min-w-full lg:block hidden -mt-44'}>
                {/* <svg className='min-w-full' height='300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
	                <path fill="#ffaa00" d="M0,6V0h1000v100L0,6z"></path>
                </svg> */}
                <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffaa00" fillOpacity="1" d="M0,32L1440,256L1440,320L0,320Z"></path></svg>
                
                </div>
            <div style={{backgroundColor: '#ffaa00'}}>
                <h2 className='text-center pt-5 text-3xl md:text-4xl' style={{color: '#fff',fontWeight: '600',textShadow: '4px 2px 0px rgb(0 0 0 / 30%)'}}>{homePageSubSentence1}</h2>
                <p className='text-center mt-4' style={{color: '#fff'}}>{homePageSubSentence2}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-around p-8" style={{fontSize: '15px', fontWeight: '300', color: 'grey'}} {...(languageSelected=='en' ? {dir: 'ltr'} : {dir: 'rtl'})}>
            <Card className='mx-8 my-8' style={{boxShadow: '15px 12px 10px 0px rgb(0 0 0 / 50%)'}}>
                <div className='flex justify-center p-2'>
                    <CiUser style={{fontSize: '130px', fontWeight: '100', color: '#ffaa00'}}/>
                </div>
                <CardBody className='text-center'>
                    <div>
                        <CardTitle style={{color: '#ffaa00'}}>{homePageCardTitle1}</CardTitle>
                        <CardText className='text-start'>
                        {homePageCardBody1}
                        </CardText>
                    </div>
                    <div className='mt-2 flex justify-center'><Button>{homePageCardButton1}</Button></div>
                </CardBody>
            </Card>

            <Card className='mx-8 my-8' style={{boxShadow: '15px 12px 10px 0px rgb(0 0 0 / 50%)'}}>
                <div className='flex justify-center p-2'>
                    <CiDeliveryTruck style={{fontSize: '130px', fontWeight: '100', color: '#ffaa00'}}/>
                </div>
                <CardBody className='text-center'>
                    <div>
                        <CardTitle style={{color: '#ffaa00'}}>{homePageCardTitle2}</CardTitle>
                        <CardText className='text-start'>
                        {homePageCardBody2}
                        </CardText>
                    </div>
                    <div className='mt-2 flex justify-center'><Button>{homePageCardButton2}</Button></div>
                </CardBody>
            </Card>

            <Card className='mx-8 my-8' style={{boxShadow: '15px 12px 10px 0px rgb(0 0 0 / 50%)'}}>
                <div className='flex justify-center p-2'>
                    <BsGraphUp style={{fontSize: '130px', fontWeight: '100', color: '#ffaa00'}}/>
                </div>
                <CardBody className='text-center'>
                    <div>
                        <CardTitle  style={{color: '#ffaa00'}}>{homePageCardTitle3}</CardTitle>
                        <CardText className='text-start'>
                        {homePageCardBody3}
                        </CardText>
                    </div>
                    <div className='mt-2 flex justify-center '><Button>{homePageCardButton3}</Button></div>
                </CardBody>
            </Card>
            </div>
            <h2 className='text-center text-3xl md:text-4xl' style={{color: '#fff', fontWeight: '600'}}>{homePageSubSentence3}</h2>
            <p className='text-center mt-4' style={{color: '#fff'}}>{homePageSubSentence4}</p>

            <div className="grid md:grid-cols-3 grid-cols-1" {...(languageSelected=='en' ? {dir: 'ltr'} : {dir: 'rtl'})}>
                <div className='flex justify-center'><img className='p-10 w-4/6 md:w-full' {...(languageSelected=='en' ? {src: "https://sell.jumia.com/wp-content/uploads/2022/04/1.png"} : {src: "https://sell.jumia.com/wp-content/uploads/2022/02/jumia-pickk1-0XqEpW.png"})} alt="" /></div>
                <div className='flex justify-center'><img className='p-10 w-4/6 md:w-full' {...(languageSelected=='en' ? {src: "https://sell.jumia.com/wp-content/uploads/2022/04/2.png"} : {src: "https://sell.jumia.com/wp-content/uploads/2022/02/jumia-pickk2.png"})} alt="" /></div>
                <div className='flex justify-center'><img className='p-10 w-4/6 md:w-full' {...(languageSelected=='en' ? {src: "https://sell.jumia.com/wp-content/uploads/2022/04/3.png"} : {src: "https://sell.jumia.com/wp-content/uploads/2022/02/jumia-pickk3-M3liNm.png"})} alt="" /></div>
            </div>
            </div>
            <div className='bgImg2 min-w-full border-hidden'>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path fill="#ffaa00"  d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
                c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
                c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
            </svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffaa00" fillOpacity="1" d="M0,224L40,229.3C80,235,160,245,240,229.3C320,213,400,171,480,144C560,117,640,107,720,128C800,149,880,203,960,208C1040,213,1120,171,1200,138.7C1280,107,1360,85,1400,74.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
                
            </div>

            <div className='rounded p-8 m-6 shadow-lg '>
            <h2 className='text-center text-3xl md:text-4xl' style={{color: '#ffaa00',fontWeight: '600'}}>{homePageSubSentence5}</h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-2 grid-cols-1' {...(languageSelected=='en' ? {dir: 'ltr'} : {dir: 'rtl'})}>
                <div className='p-4 flex justify-center'><iframe src="https://www.youtube.com/embed/5a3ASgr9z4E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <div className='p-4 flex justify-center'><iframe src="https://www.youtube.com/embed/4Qsw4Wb5o0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <div className='p-4 flex justify-center'><iframe src="https://www.youtube.com/embed/71PNukAKz9w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </div>
            </div>
            <h2 className='text-center text-3xl md:text-4xl mt-5' style={{color: '#ffaa00',fontSize: '30px',fontWeight: '600'}}>{homePageSubSentence6}</h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-20 grid-cols-1 p-4 px-16" style={{fontSize: '15px', fontWeight: '300', color: 'grey'}} {...(languageSelected=='en' ? {dir: 'ltr'} : {dir: 'rtl'})}>
                <Card className='m-10' style={{boxShadow: '15px 12px 10px 0px rgb(0 0 0 / 50%)'}}>
                    <CardBody2>
                        <CardTitle2>{homePageCardTitle4}</CardTitle2>
                        
                        <Button>{homePageCardButton4}</Button>
                    </CardBody2>
                </Card>

                <Card className='m-10' style={{boxShadow: '15px 12px 10px 0px rgb(0 0 0 / 50%)'}}>

                    <CardBody2>
                        <CardTitle2>{homePageCardTitle5}</CardTitle2>
                        
                        <Button>{homePageCardButton5}</Button>
                    </CardBody2>
                </Card>

        </div>
                <div className='text-center'>
                    <Button className={"rounded-full shadow-lg my-2 border-hidden"+`${styles.registerHome}`} style={{fontSize: '20px', fontWeight: '300'}}>{homeContact}</Button></div>
            </div> 
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fcb900" fillOpacity="1" d="M0,32L1440,256L1440,320L0,320Z"></path></svg> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fcb900" fillOpacity="1" d="M0,64L1440,288L1440,320L0,320Z"></path></svg> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fcb900" fillOpacity="1" d="M0,224L40,229.3C80,235,160,245,240,229.3C320,213,400,171,480,144C560,117,640,107,720,128C800,149,880,203,960,208C1040,213,1120,171,1200,138.7C1280,107,1360,85,1400,74.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg> */}
        <Footer />
    </div>
  )
}

// const Button = forwardRef(({ color, children, ...props }, ref) => (
//     <button
//       ref={ref}
//       className={'bg-orange-500 focus:ring-2 focus:ring-offset-2 focus:ring-orange-300 focus:ring-offset-orange-100'+`${BtnStyle.default}`}
//       {...props}
//     >
//       {children}
//     </button>
//   ));

  function Button({ children }) {
    return (
      <button className={`${BtnStyle.default} ${BtnStyle.color.orange}`}>
        {children}
      </button>
    );
  }

  function Button2({ children }, target) {
    return (
      <button  onClick={() => target} className={`${BtnStyle.default} ${BtnStyle.color.dark}`}>
        {children}
      </button>
    );
  }
  
  /* You can replace those colors with your own*/
  const BtnStyle = {
    default: `text-white w-fit mt-5 font-normal focus:outline-none shadow rounded-full px-6 py-2 font-medium transition ease-in duration-200`,
    color: {
      primary: `bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:ring-offset-blue-100`,
      success: `bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:ring-offset-green-100`,
      danger: `bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-600 focus:ring-offset-red-100`,
      dark: `bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:ring-offset-gray-100`,
      dark: `bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:ring-offset-gray-100`,
      warning: `bg-yellow-500 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 focus:ring-offset-yellow-100`,
      indigo: `bg-indigo-900 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-900 focus:ring-offset-indigo-100`,
      orange: ` bg-orange-400 focus:ring-2 focus:ring-offset-2 focus:ring-orange-200 focus:ring-offset-orange-100`,
    },
  }
  const style = {

    card: `relative flex flex-col bg-slate-50 rounded-lg`,
    cardBody: `block flex-grow flex-shrink p-5 flex flex-col justify-between`,
    cardBody2: `block flex-grow flex-shrink p-5 py-11 flex flex-col items-center justify-center`,
    cardTitle: `font-medium text-center text-gray-700 mb-3`,
    cardTitle2: `font-normal text-lg text-orange-400 mb-3 text-center`,
    cardText: `text-gray-500`,
  };
  
  const inlineStyle = {
    boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)',
  };
  
  function Card({ children }) {
    return (
      <div className={style.card} style={inlineStyle}>
        {children}
      </div>
    );
  }
  
  function CardBody({ children }) {
    return <div className={style.cardBody}>{children}</div>;
  }

  function CardBody2({ children }) {
    return <div className={style.cardBody2}>{children}</div>;
  }
  
  function CardTitle({ children }) {
    return <div className={style.cardTitle}>{children}</div>;
  }

  function CardTitle2({ children }) {
    return <div className={style.cardTitle2}>{children}</div>;
  }
  
  function CardText({ children }) {
    return <div className={style.cardText}>{children}</div>;
  }

  

export default HomePage;