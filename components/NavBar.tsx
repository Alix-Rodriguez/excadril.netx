import { ActiveLink } from './ActiveLink';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import Logo from '../public/assets/logo.svg'

const menuItems = [

  {
      id:1,     
      text: 'NOSOTROS',
      href: '/nosotros'
  },
  {
      id:2,  
      text: 'SERVICIOS',
      href: '/servicios'
  },
  {
      id:3,  
      text: 'EQUIPOS',
      href: '/equipos'
  },
  {
      id:4,  
      text: 'CONTACTO',
      href: '/contactos'
  },
];

// const [img,SetImg]=useState(true)




export const Navbar = () => {

    const [click,setClick] = useState<Boolean>(true)
    const [width,setWidth] = useState<Boolean>(false)

   useEffect(() => {
     function handleResize() {
       if (window.innerWidth > 768) {
         setWidth(false);
       }else{
         setWidth(true);
       }
       console.log("object")
     }
     window.addEventListener('resize', handleResize);
     if (window.innerWidth > 768) {
        setWidth(false);
      }else{
        setWidth(true);
      }
     return () => window.removeEventListener('resize', handleResize);

   }, []);

 
    const { asPath } = useRouter();
    // if(asPath == '/') 

  return (
    <>
    <nav style={{fontFamily: '"Raleway", sans-serif',fontStyle:'oblique'}}  
    className={`absolute z-10 w-full items-center justify-between md:justify-around px-9 flex mt-16 ${width ? '' : '   flex-col lg:flex-row  justify-center '}`} >
        <Link href="/" legacyBehavior>
            <a className='basis-1/5 mb-5'>
            <Image className='scale-150 sm:scale-100'  src={Logo} alt='Logo' width={150} height={0}></Image>  
            </a>
        </Link>
        <ul className=' hidden items-center md:flex justify-around basis-1/2 md:min-w-max'>

        {
            menuItems.map( ({ id ,text, href }) => (
                <li key={ href }>
                    <ActiveLink  id={id} text={ text } href={ href } />    
                </li>
                ))
                
        }
            <li className={`md:ml-4 lg:ml-16  text-white text-2xl`}>
               PE ▼
            </li>   
         </ul>
        
        <div className='bg-yellow-500   md:hidden '>
        <RxHamburgerMenu onClick={()=> setClick(!click) } className={`text-white ${ click ? '' : 'hidden'}`} size="3rem" />
        </div>
        

    </nav>

        {/* menu adaptado */}
        <nav className={`bg-black flex flex-col rounded-ee-full md:hidden justify-around items-center opacity-90 fixed z-20 h-screen w-screen 
          ${ !click ? '' : '-translate-x-full'}`}>
        <Link href="/" legacyBehavior>
            <a className=''>
            <Image className='scale-125'  src={Logo} alt='Logo' width={150} height={0}></Image>  
            </a>
        </Link>
        <div className='bg-yellow-500 absolute top-10 right-10  md:hidden '>
        <GrClose onClick={()=> setClick(!click) } className={`animate-pulse ${ !click ? '' : 'hidden'}`} size="3rem"/>
        </div>
        
        <ul className=' flex basis-96 pr-12  flex-col md:hidden items-center justify-around '>

        {
          menuItems.map( ({ id ,text, href }) => (
            <li key={ href }>
                    <ActiveLink  id={id} text={ text } href={ href } />    
                </li>
                ))
                
        }
            <li className={`md:ml-4 lg:ml-16  text-white text-2xl`}>
               PE ▼
            </li>   
         </ul>
      </nav>
    </>
  );
};
