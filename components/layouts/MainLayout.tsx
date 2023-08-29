import { FC } from 'react';

import Head from 'next/head';

import { Navbar } from '../NavBar';
import { ScriptProps } from 'next/script';
import { Footer } from '../Footer';





export const MainLayout: FC<ScriptProps> = ({ children }) => {

  

    return (
        <div>
          
          <Head>
            <title>Excadrill</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Anton&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
          </Head>
        
          <Navbar />
        <div style={{background: '#FFC239'}} className='absolute top-0 w-full md:h-8 2xl:h-16'></div>

          {/* <Navbar text={`${ width ? '' : ''}`} /> */}


          <main>
    
            { children }
    
          </main>     

          <Footer/>
        </div>
      )
};
