
import Image from 'next/image';

import { MainLayout } from '../../components/layouts/MainLayout';
import { Header } from '../../components/banner_info';

import {
  backGround6,
  backGroundServicio, fontRaleway, gradianteButton, sombraImg,  
} from '../../components/styles'



export default function Servicios() {
  return (
      <>
      <MainLayout>

      <Header 
      backGround={backGroundServicio}
      H2='NUESTROS'
      YellowSpan='SERVICIOS'
      styleSpan={false}
      CentradoSpan={false}
      Top={true}
       />

         {/*  SECCION 2 */}
         <div className='relative w-full pb-10'>
         <div style={backGround6} className='bg-no-repeat w-full absolute left-0 top-0'></div>

         <section style={{fontFamily:'"Anton", sans-serif',}}
           className='flex relative flex-col h-full 2xl:h-screen w-3/4 m-auto '>


            <div className='mt-32 pl-20'>

              <h2 className='text-black text-left text-4xl lg:text-5xl xl:text-7xl scale-y-75'>
                <strong className='text-yellow-500 relative right-1 bottom-1'>▼</strong>
                SERVICIOS
              </h2>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 mt-24 h-3/6 gap-y-12 2xl:gap-0'>

              <div className='flex flex-col items-center justify-center 2xl:block'> 

                <Image className='object-cover object-center h-64 2xl:m-auto shadow-2xl'  src="/assets/ser01.jpg" alt="imagen construccion" width={295} height={0} />

                <h5 className='2xl:pl-12 w-72 2xl:w-0 text-4xl 2xl:mt-3'> PERFORACIÓN DIAMANTINA </h5>

                <p className='2xl:pl-12 text-sm w-72' style={fontRaleway}>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT, SED DIAM NOMUMMY NIBH. </p>

              </div>


              <div className='flex flex-col items-center justify-center 2xl:block'>

                <Image className='object-cover object-center h-64 m-auto shadow-2xl' src="/assets/ser02.jpg" alt="imagen construccion" width={295} height={0}  />

                <h5 className='2xl:pl-12 text-4xl mt-3 w-72'>PERFORACIÓN DE CIRCULACIÓN REVERSA</h5>

                <p className='2xl:pl-12 text-sm w-72' style={fontRaleway}>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT, SED DIAM NOMUMMY NIBH. </p>

              </div>


              <div>

                <div className='h-5/6 relative'>

                <Image className='object-cover object-center h-full w-11/12 md:absolute shadow-2xl' src="/assets/ser03.jpg" alt="imagen construccion" width={295} height={0}  />

                <div style={{zIndex:'2'}} className='absolute bottom-4 sm:bottom-8'>

                  <h5 className='text-white pl-8 text-lg tracking-wider sm:tracking-normal sm:text-4xl mt-3 w-72'>ESTUDIO GEOTÉCNICO</h5>

                  <p className='text-white pl-8 text-xs sm:text-sm w-72' style={fontRaleway}>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT, SED DIAM NOMUMMY NIBH. </p>

                </div>

                <div className='h-full absolute w-11/12 bottom-0' style={sombraImg}></div>

                </div>

              </div>


              <div className='flex flex-col items-center justify-center 2xl:block'>

                <Image className='object-cover object-center h-64 m-auto shadow-2xl' src="/assets/ser04.jpg" alt="imagen construccion" width={295} height={0}  />

                <h5 className='2xl:pl-12 text-4xl mt-3 w-64'>PERFORACIÓN Y CONSTRUCCIÓN DE POZOS</h5>

                <p className='2xl:pl-12 text-sm w-72' style={fontRaleway}>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT, SED DIAM NOMUMMY NIBH.</p>

              </div>

            </div>

            <div className='mx-auto mt-10 2xl:mt-0 text-5xl text-white '>
              <button className='p-3 tracking-wider rounded-lg' style={gradianteButton}>CONTACTAR</button>
            </div>

          </section>
          </div>

      </MainLayout>
      </>
  )
}
