import { ActiveLink } from './ActiveLink';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {useEffect, useState } from 'react';
import activeLink from './activeLink.module.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";

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
      href: '/contacto'
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
    <nav style={{fontFamily: '"Raleway", sans-serif',fontStyle:'oblique'}}  
    className={`absolute z-10 w-full items-center justify-between flex mt-16 ${width ? 'px-9' : '   flex-col lg:flex-row  justify-center '}`} >
        <Link href="/" legacyBehavior>
            <a className='basis-1/5 mb-5'>
            <Image src="/assets/Logo.svg" alt='Logo' width={150} height={0}></Image>  
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
            <li className={`md:ml-4 lg:ml-16  ${activeLink.navLetras}`}>
               PE ▼
            </li>   
         </ul>
        
        <div className='bg-yellow-500 md:hidden'>
        <RxHamburgerMenu onClick={()=> setClick(!click) } className={`text-white ${ click ? '' : 'hidden'}`} size="3rem" />
        <GrClose onClick={()=> setClick(!click) } className={`text-white ${ !click ? '' : 'hidden'}`} size="3rem"/>
        </div>
        
    </nav>
  );
};
