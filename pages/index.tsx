import { CSSProperties } from 'react';

import Image from 'next/image';

import { MainLayout } from '../components/layouts/MainLayout';
import camionBackGround from '../public/assets/slide.jpg'
import lineaAmarilla from '../public/assets/header-decoslide-01.svg'
import lineaAmarilla2 from '../public/assets/header-decoslide-02.svg'
import logoLide from '../public/assets/logoslide.svg'
import nosotros from '../public/assets/nosotros.png'




const backGround1: CSSProperties = {
    backgroundImage: `url(${camionBackGround.src})`,
    color: 'rgb(255, 255, 255)',
    height: '120vh',
    fontFamily:'"Anton", sans-serif'
}

const backGround2: CSSProperties = {
  backgroundImage: `url(${lineaAmarilla.src})`,
  zIndex:'2',
  backgroundPosition:'bottom center',
  height: '120vh',

}

const backGround3: CSSProperties = {
  backgroundImage: `url(${logoLide.src})`,
  backgroundPosition:'top right',
  opacity:'45%',
  height: '120vh',
}

const backGround4: CSSProperties = {
  background: 'linear-gradient( 180deg, rgba(0, 0, 0, 1) 0%, rgba(29, 29, 27, 0.5) 10.28%, rgba(29, 29, 27, 0.5) 78.56%, rgba(0, 0, 0, 1) 100% )',
  height: '120vh',

}

const backGround5: CSSProperties = {
  backgroundImage: `url(${nosotros.src})`,
  color: 'rgb(255, 255, 255)',
  height: '100vh',
  fontFamily:'"Anton", sans-serif',
}

const backGround6: CSSProperties = {
  backgroundImage: `url(${lineaAmarilla2.src})`,
  height: '100vh',
  zIndex:'2',
  backgroundPosition:'top left',
}

const fontRaleway:CSSProperties = {
  fontFamily: '"Raleway", sans-serif'
}

const sombraImg: CSSProperties = {
  background: 'linear-gradient( 180deg, rgba(0, 0, 0, 0) 50%, rgba(29, 29, 27, 0.5) 70%, rgba(29, 29, 27, 0.5) 80.56%, rgba(0, 0, 0, 0.7) 100% )',
  zIndex:'1',
}

const gradianteButton: CSSProperties = {
  background: 'linear-gradient( 90deg, rgba(255, 169, 33, 1) 0%, rgba(255, 191, 45, 1) 50%, rgba(255, 195, 55, 1) 100% )',
  boxShadow: '0.08em 0.08em 0.3em #b1b1b1'
}

const ClipPath: CSSProperties = {
  clipPath: 'polygon(50% 20%, 100% 0, 100% 100%, 0 100%, 0 0)'
}

const ClipPath2: CSSProperties = {
  clipPath: 'polygon(7% 0%, 100% 0%, 93% 100%, 0% 100%)'
}

const gradianteYellow: CSSProperties = {
  background: 'linear-gradient( 90deg, rgba(255, 169, 33, 1) 0%, rgba(255, 191, 45, 1) 50%, rgba(255, 195, 55, 1) 100% )',
}


export default function Home() {
  return (
      <>
      <MainLayout>

        {/* SECCION 1 */}
          <section style={backGround1} className='flex flex-col relative bg-cover bg-no-repeat bg-center  items-center bg-white justify-center '>
              
              <h2 style={{zIndex:'2'}} className='tracking-widest md:top-16 lg:top-0 text-5xl  2xl:text-7xl relative md:text-6xl'>

              MÁS DE 10 AÑOS 
              <br />
              DE <span style={gradianteYellow} className=' absolute p-1 right-6'>EXPERIENCIA</span>
              </h2>

              <h3 style={{zIndex:'2',fontFamily: '"Raleway",sans-serif'}} 
              className='2xl:text-4xl md:text-2xl leading-relaxed text-center mt-20 text-white font-medium'>
      
              DIAMANTINA RC, GEOTÉCNIA, CORTE DE 
              <br />
              MUESTRA, LOGUÉO, TOPOGRAFÍA Y MUESTREO
              </h3>

          <div style={backGround2} className=' w-6/12 left-0 absolute bg-no-repeat '></div>
          <div style={backGround3} className=' w-full absolute bg-no-repeat'></div>
          <div style={backGround4} className=' w-full absolute '></div>
          </section>

        {/*  SECCION 2 */}

          <section style={{...backGround5,}} className='bg-yellow-500 relative bg-cover bg-center h-screen bg-no-repeat'>
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

        {/*  SECCION 4 */}

          <section style={{...ClipPath,...gradianteYellow}} className='h-screen relative overflow-hidden'>

            <h2 style={ {fontFamily:'"Anton", sans-serif',}} className='text-black text-4xl top-44 left-20 text-left lg:top-72 lg:left-36 lg:text-7xl scale-y-90 absolute'>
              <strong className='text-white relative right-1 bottom-1'>▼</strong>
              EQUIPOS DE 
              <br />
              <span className='relative top-1 left-20 text-white'>PERFORACIÓN</span>
            </h2>

            <div style={{borderTopLeftRadius:'10rem'}} className='absolute bottom-0 right-0 bg-white h-2/5 w-2/4 '></div>
            <Image className='absolute bottom-0 right-0 lg:h-96' src="/assets/equipo-01.png" alt='imagen de contruccion' width={1200} height={0}/>
          </section>

        {/*  SECCION 5 */}

          <section className='h-full w-full' >

            <div className='mt-20 flex flex-col items-center justify-center w-full'>

      
              <div style={{...ClipPath2,...gradianteYellow}} className=' py-3 px-20'>
                <h5 style={fontRaleway} className=' text-sm sm:text-3xl font-medium tracking-wider'>
                NUESTROS PRINCIPALES <strong className='text-white'>CLIENTES</strong>
                </h5>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-28 mt-12'>
                <Image className='h-72 w-72 object-contain' src="/assets/cliente01.jpg" alt='logo de empresas' width={292} height={0} ></Image>
                <Image className='h-72 w-72 object-contain' src="/assets/cliente02.jpg" alt='logo de empresas' width={292} height={0} ></Image>
                <Image className='h-72 w-72 object-contain' src="/assets/cliente03.png" alt='logo de empresas' width={292} height={0} ></Image>
                <Image className='h-72 w-72 object-contain' src="/assets/cliente04.png" alt='logo de empresas' width={292} height={0} ></Image>
              </div>

            </div>

            <div className='mt-20 flex flex-col w-full justify-normal items-center bg-gray-100 py-10'>

                <h2 style={{fontFamily:'"Anton", sans-serif'}} className='mb-16 text-5xl'>CONTACTO</h2>

                <form className='p-14' action="">
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-yellow-500 focus:shadow-outline" id="" type="text" placeholder="Username"/>
                  
                  <input className="my-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-yellow-500 focus:shadow-outline" id="" type="email" placeholder="Email"/>
                 

                  <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-yellow-500 focus:shadow-outline" placeholder="Mensaje" name="" id="" cols={30} rows={10}></textarea>
                </form>
            </div>


          </section>

      </MainLayout>
      </>
  )
}
