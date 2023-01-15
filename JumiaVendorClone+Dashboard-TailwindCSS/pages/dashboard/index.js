import React from 'react';
import Head from 'next/head';
import Image from 'next/image'
import { getCsrfToken } from "next-auth/react"
import { useSession } from 'next-auth/react';
import Router from 'next/router';
import { forwardRef } from 'react';
// import CardPage from '../../components/card';
import NavbarPage from '../../components/navBar';
import {GiReceiveMoney} from 'react-icons/gi';
import {FaTasks, FaTrophy} from 'react-icons/fa';
import {RiShoppingBag2Fill} from 'react-icons/ri';
import styles from '../../styles/dashboard.module.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import Footer from '../../components/footer';

const index = () => {
  // <Head>
  //       <title>My Dashboard</title>
  //       <link rel="icon" href="/favicon.png" />
  // </Head>

  const { data: session, status } = useSession()
  

  React.useEffect(() => {
    if(status === 'unauthenticated') Router.replace("/auth/login");
  }, [status, session]);
    
    if(status === 'loading'){
      return <div className='h-screen w-screen flex justify-center items-center'><Spinner color="#f59e0b" className="h-12" /></div>
    }
    if(status === 'authenticated'){ 
      ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
        );
        
      const options = {
          responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            // text: 'Chart.js Line Chart',
          },
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Sellings',
            data:  [20, 50, 30, 100, 120, 90, 200],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          
        ],
      };
      return (
        <div className=" bg-gray-200">
        
        <div className='bg-white'>
            <NavbarPage />
        </div>
        <section className="antialiased font-sans bg-gray-200 min-h-screen" >
            <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                    <div>
                        <h2 className="text-2xl font-semibold leading-tight">Dashboard</h2>
                    </div>
        
        <div className='flex flex-wrap justify-between items-center'>
          
          <div className="m-1 p-1">
            <div className={style.card} style={inlineStyle}>
              <GiReceiveMoney className="text-7xl p-1 text-green-400"/>
              <div className={style.cardBody}>
              <div className={style.cardTitle}>
              Earnings
              </div>
              <div className={style.cardText}>
              EGP 0
              </div>
              </div>
            </div>
          
          </div>
          <div className="m-1 p-1">
            <div className={style.card} style={inlineStyle}>
              <FaTasks className="text-7xl p-1 text-red-400"/>
              <div className={style.cardBody}>
              <div className={style.cardTitle}>
              Orders
              </div>
              <div className={style.cardText}>
              0
              </div>
              </div>
            </div>
          
          </div>
          <div className="m-1 p-1">
            <div className={style.card} style={inlineStyle}>
              <RiShoppingBag2Fill className="text-7xl p-1 text-blue-400"/>
              <div className={style.cardBody}>
              <div className={style.cardTitle}>
              Products
              </div>
              <div className={style.cardText}>
              0
              </div>
              </div>
            </div>
          
          </div>
          <div className="m-1 p-1">
            <div className={style.card} style={inlineStyle}>
              <FaTrophy className="text-7xl p-1 text-yellow-400"/>
              <div className={style.cardBody}>
              <div className={style.cardTitle}>
              Best Selling
              </div>
              <div className={style.cardText}>
              Playstation 5
              </div>
              </div>
            </div>
          
          </div>
        </div>

        <div className='grid grid-cols-1 mx-2 mt-8  shadow'>
        
        <div className='p-4 shadow rounded bg-white h-72 flex justify-center'>
        <Line
            options={options} data={data}
        />
        </div>
        </div>
        <div className='grid grid-cols-1 mx-2 mt-8  shadow'>
            <div className='flex justify-center items-center p-4 rounded bg-white overflow-x-scroll'>    
            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Product
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Category
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Added at
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Quantity
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 w-10 h-10">
                                                    <img className="w-full h-full rounded-full"
                                                        src="https://m.media-amazon.com/images/I/71PMC4DWWFL.jpg"
                                                        alt="" />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        Playstation 5
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">Gaming</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                13/12/2022
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <span
                                                className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                <span aria-hidden
                                                    className={`absolute inset-0 bg-green-200 opacity-50 rounded-full`}></span>
                                                <span className="relative">50</span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 w-10 h-10">
                                                    <img className="w-full h-full rounded-full"
                                                        src="https://m.media-amazon.com/images/I/71PMC4DWWFL.jpg"
                                                        alt="" />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        Playstation 5
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">Gaming</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                13/12/2022
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <span
                                                className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                <span aria-hidden
                                                    className={`absolute inset-0 bg-green-200 opacity-50 rounded-full`}></span>
                                                <span className="relative">50</span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 w-10 h-10">
                                                    <img className="w-full h-full rounded-full"
                                                        src="https://m.media-amazon.com/images/I/71PMC4DWWFL.jpg"
                                                        alt="" />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        Playstation 5
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">Gaming</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                13/12/2022
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <span
                                                className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                <span aria-hidden
                                                    className={`absolute inset-0 bg-green-200 opacity-50 rounded-full`}></span>
                                                <span className="relative">50</span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 w-10 h-10">
                                                    <img className="w-full h-full rounded-full"
                                                        src="https://m.media-amazon.com/images/I/71PMC4DWWFL.jpg"
                                                        alt="" />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        Playstation 5
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">Gaming</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                13/12/2022
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <span
                                                className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                <span aria-hidden
                                                    className={`absolute inset-0 bg-green-200 opacity-50 rounded-full`}></span>
                                                <span className="relative">50</span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 w-10 h-10">
                                                    <img className="w-full h-full rounded-full"
                                                        src="https://m.media-amazon.com/images/I/71PMC4DWWFL.jpg"
                                                        alt="" />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        Playstation 5
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">Gaming</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                13/12/2022
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <span
                                                className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                <span aria-hidden
                                                    className={`absolute inset-0 bg-green-200 opacity-50 rounded-full`}></span>
                                                <span className="relative">50</span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 w-10 h-10">
                                                    <img className="w-full h-full rounded-full"
                                                        src="https://m.media-amazon.com/images/I/71PMC4DWWFL.jpg"
                                                        alt="" />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        Playstation 5
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">Gaming</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                13/12/2022
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <span
                                                className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                <span aria-hidden
                                                    className={`absolute inset-0 bg-green-200 opacity-50 rounded-full`}></span>
                                                <span className="relative">50</span>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
            </div>
        </div>
        </div>
    </div>
        <Footer/>
    </section>
    </div>
  )
}
}

export default index

const style = {
  card: `relative w-56 h-40 bg-gray-50 flex justify-center items-center rounded-lg`,
  cardBody: `flex flex-col items-center justify-center`,
  cardTitle: `text-xl font-semibold text-gray-700 mb-3`,
  cardText: `text-xl font-semibold text-gray-300 mb-3`,
  icon: `text-8xl text-gray-400`,
};

const inlineStyle = {
  boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)',
};


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