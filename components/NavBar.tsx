import { ActiveLink } from './ActiveLink';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import Logo2 from '../public/assets/logo.svg'

const menuItems = [
  {
    id: 1,
    text: 'INICIO',
    href: '/'
  },
  {
    id: 2,
    text: 'NOSOTROS',
    href: '/nosotros'
  },
  {
    id: 3,
    text: 'SERVICIOS',
    href: '/servicios'
  },
  {
    id: 4,
    text: 'EQUIPOS',
    href: '/equipos'
  },
  {
    id: 5,
    text: 'CONTACTO',
    href: '/contactos'
  },
];





export const Navbar = () => {

  const [img, setImg] = useState<Boolean>(true)
  const [click, setClick] = useState<Boolean>(true)
  const [width, setWidth] = useState<Boolean>(false)
  const { asPath } = useRouter();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setWidth(false);
      } else {
        setWidth(true);
      }
      console.log("object")
    }
    window.addEventListener('resize', handleResize);

    if (window.innerWidth > 768) {
      setWidth(false);
    } else {
      setWidth(true);
    }

    if (asPath == '/') {
      setImg(true)
    } else {
      setImg(false)
    }

    return () => window.removeEventListener('resize', handleResize);

  }, []);






  return (
    <>
      <nav style={{ fontFamily: '"Raleway", sans-serif', fontStyle: 'oblique' }}
        className={`absolute z-10 w-full items-center justify-between lg:justify-around px-9 flex mt-16 `} >
        <Link href="/" legacyBehavior>
          <a className='basis-2/5 md:basis-1/5 mb-5'>
            <Image className={`scale-150 md:w-80 sm:scale-100 object-cover`}
              src={Logo2} alt='Logo' width={350} height={150}></Image>
          </a>
        </Link>
        <ul className=' hidden items-center lg:flex justify-around basis-1/2 md:min-w-max'>

          {
            menuItems.map(({ id, text, href }) => (
              <li key={href}>
                <ActiveLink id={id} text={text} href={href} />
              </li>
            ))

          }
          <li className={`md:ml-4 lg:ml-16  text-white md:text-xs 2xl:text-2xl`}>
            PE ▼
          </li>
        </ul>

        <div className='bg-yellow-500   lg:hidden '>
          <RxHamburgerMenu onClick={() => setClick(!click)} className={`text-white ${click ? '' : 'hidden'}`} size="2.5rem" />
        </div>


      </nav>

      {/* menu adaptado */}
      <nav className={`bg-white flex flex-col rounded-ee-full lg:hidden justify-center gap-14 items-center opacity-95 fixed z-20 h-screen w-screen 
          ${!click ? '' : '-translate-x-full'}`}>
        <Link href="/" legacyBehavior>
          <a className=''>
            <Image className='scale-125' src={Logo2} alt='Logo' width={150} height={0}></Image>
          </a>
        </Link>
        <div className='bg-yellow-500 absolute top-10 right-10  lg:hidden '>
          <GrClose onClick={() => setClick(!click)} className={`animate-pulse ${!click ? '' : 'hidden'}`} size="2.5rem" />
        </div>

        <ul className=' flex basis-96 pr-12  flex-col lg:hidden items-center justify-around '>

          {
            menuItems.map(({ id, text, href }) => (
              <li key={href}>
                <ActiveLink id={id} text={text} href={href} />
              </li>
            ))

          }
          <li className={`md:ml-4 lg:ml-16 text-black lg:text-white text-2xl`}>
            PE ▼
          </li>
        </ul>
      </nav>
    </>
  );
};
