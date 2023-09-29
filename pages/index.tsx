import { CSSProperties } from 'react';

import Image from 'next/image';

import { MainLayout } from '../components/layouts/MainLayout';
import { Header } from '../components/layouts/Header';

import {
  backGround1,
  // backGround2,
  // backGround3,
  // backGround4,
  backGround5,
  backGround6,
  fontRaleway,
  sombraImg,
  gradianteButton,
  ClipPath,
  ClipPath2,
  gradianteYellow

} from '../components/styles'
import { FormularioContacto } from '@/components/layouts/FormularioContacto';



export default function Home() {
  return (
      <>
      <MainLayout>

      <Header 
      backGround={backGround1}
      YellowSpan='EXPERIENCIA'
      H2='MÁS DE 10 AÑOS'
      h2Opcion = 'DE'
      P1='DIAMANTINA RC, GEOTÉCNIA, CORTE DE'
      P2='MUESTRA, LOGUÉO, TOPOGRAFÍA Y MUESTREO' 
      styleSpan={true}  
      CentradoSpan={false}
      Top={true}
      />


        


        {/*  SECCION 2 */}

          <section style={{...backGround5,backgroundColor:'#fcc43c'}} className='relative bg-cover bg-center h-screen bg-no-repeat'>
            <div 
            className='bg-black absolute top-5 sm:left-1/3  bg-opacity-75 p-7 sm:top-1/4 2xl:bg-inherit 2xl:left-2/3 '>
              <h3 className='text-2xl md:text-5xl md:scale-90 tracking-wider text-left'>NOSOTROS</h3>
              <p style={fontRaleway} className=' text-sm  leading-4   md:text-xl md:leading-7 font-normal'>
                   Somos una empresa especializada y con
                    <br />
                  amplia experiencia; constituida para brindar
                   <br />
                  servicios en el sector minero y construcción. 
                  <br />
                  Fue fundada hace más de 10 años y desde
                  <br />
                  entonces sus operaciones han tenido un
                   <br />
                  crecimiento sostenido.
              </p>

              <a style={fontRaleway} className='text-lg font-medium underline leading-8 ' href="#">Más información</a>
            </div>
          <div style={backGround6} className='bg-no-repeat w-6/12 absolute left-0 '></div>
          </section>

        {/*  SECCION 3 */}

          <section style={{fontFamily:'"Anton", sans-serif'}}
           className='flex flex-col h-full 2xl:h-screen w-3/4 m-auto '>

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

                <div className='h-5/6 w-[80%] m-auto relative'>

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
              <button className=' p-2 2xl:p-3  tracking-wider text-[1.5rem] 2xl:text-[2rem] rounded-lg' style={gradianteButton}>CONTACTAR</button>
            </div>

          </section>

         {/* SECCION 4

          <section style={{...ClipPath,...gradianteYellow}} className='h-screen relative overflow-hidden'>

            <h2 style={ {fontFamily:'"Anton", sans-serif',}} className='text-black text-4xl top-44 left-20 text-left lg:top-72 lg:left-36 lg:text-7xl scale-y-90 absolute'>
              <strong className='text-white relative right-1 bottom-1'>▼</strong>
              EQUIPOS DE 
              <br />
              <span className='relative top-1 left-20 text-white'>PERFORACIÓN</span>
            </h2>

            <div style={{borderTopLeftRadius:'10rem'}} className='absolute bottom-0 right-0 bg-white h-2/5 w-2/4 '></div>
            <Image className='absolute bottom-0 object-cover right-0 lg:h-96' src="/assets/equipo-01.png" alt='imagen de contruccion' width={1200} height={0}/>
          </section> */}

        {/*  SECCION 5 */}

          <section className='h-full w-full' >

            <div className='mt-20 px-5 flex flex-col items-center justify-center w-full'>

      
              <div style={{...ClipPath2,...gradianteYellow}} className=' py-3 px-20'>
                <h5 style={fontRaleway} className=' text-sm sm:text-3xl font-medium tracking-wider'>
                NUESTROS PRINCIPALES <strong className='text-white'>CLIENTES</strong>
                </h5>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-28 mt-12'>
                <Image className='2xl:h-72 h-44 2xl:w-72 object-contain' src="/assets/cliente01.jpg" alt='logo de empresas' width={292} height={0} ></Image>
                <Image className='2xl:h-72 h-44 2xl:w-72 object-contain' src="/assets/cliente02.jpg" alt='logo de empresas' width={292} height={0} ></Image>
                <Image className='2xl:h-72 h-44 2xl:w-72 object-contain' src="/assets/cliente03.png" alt='logo de empresas' width={292} height={0} ></Image>
                <Image className='2xl:h-72 h-44 2xl:w-72 object-contain' src="/assets/cliente04.png" alt='logo de empresas' width={292} height={0} ></Image>
              </div>

            </div>

            <div className='bg-gray-100'>
            <FormularioContacto/>
            </div>

           


          </section>

      </MainLayout>
      </>
  )
}
