import Head from 'next/head'
import Image from 'next/image'
import HomePage from './home';

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Tag Vendor Hub</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Cairo&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Alexandria:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>

      <main>
      <HomePage/>
      </main>

      
    </div>
  )
}

export default Home
