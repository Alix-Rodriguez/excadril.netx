
import Image from 'next/image';

import { MainLayout } from '../../components/layouts/MainLayout';
import { Header } from '../../components/layouts/Header';

import {
  ClipPath,
  backGround6,
  backGroundNosotros,
  fontRaleway,
  gradianteYellow,
} from '../../components/styles'



export default function Nosotros() {
  return (
    <>
      <MainLayout>

        {/*  SECCION 1 */}

        <Header
          backGround={backGroundNosotros}
          YellowSpan='EXPERIENCIA'
          H2='MÁS DE 10 AÑOS'
          h2Opcion='DE'
          P1='DIAMANTINA RC, GEOTÉCNIA, CORTE DE'
          P2='MUESTRA, LOGUÉO, TOPOGRAFÍA Y MUESTREO'
          styleSpan={true}
          CentradoSpan={false}
          Top={true}
        />

        {/*  SECCION 2 */}

        <section className=' relative '>
          <div style={backGround6} className='bg-no-repeat w-screen absolute left-0 '></div>
          <div style={{ height: '32rem' }}
            className='flex w-full flex-col gap-7  justify-end  items-center'>
            <p style={fontRaleway} className=' text-xs w-4/5 leading-4 md:w-3/4 xl:w-2/4 text-justify md:text-base md:leading-7  lg:text-lg font-semibold '>
              EXCADRILL INTERNACIONAL es una empresa especializada y con amplia experiencia; constrituida para brindar servicios en el sector Minero y construcción. Fue fundada hace mas de 10 años y desde entonces sus operaciones han tenido un crecimiento sostenido. Venimos ejecutando proyectos de perforación en superficie e interior mina.
            </p>
            <p style={fontRaleway} className=' text-xs  w-4/5 leading-4 md:w-3/4 xl:w-2/4 text-justify  md:text-base md:leading-7 font-semibold lg:text-lg '>
              Contamos con un capital humano entre profesionales y técnicos con experiencia, lo que nos da nuestra principal ventaja competitiva en el mercado, Para la ejecución de los sondajes contamos con máquinas perforadoras de última generación y con tecnología de vanguardia. Consientes que los nuevos tiempos exigen una gestión eficiente y dinámica, estamos comprometidos con un proceso de mejora y optimización de procesos, y para ello contamos con un sistema de gestión que ha mejorado el desempeño de nuestros colaboradores y el compromiso hacia el logro de la cultura de seguridad. Todo esto hace de EXCADRILL INTERNACIONAL sea un socio estratégico importante para la minería y construcción.
            </p>
          </div>
        </section>

        {/*  SECCION 3 */}

        <section style={{ ...ClipPath, ...gradianteYellow }} className=' h-full gap-10 pb-20 pt-10 md:pb-0 md:pt-0 sm:h-screen relative grid grid-cols-1 md:grid-cols-2 justify-center items-center  overflow-hidden'>
          <div className='flex flex-col justify-center pt-40 md:pt-0 items-center gap-7 md:border-r-4 '>
            <Image className='w-1/4 lg:w-64' src='/assets/VISION.png' alt=' ' width={150} height={150}></Image>
            <h3 style={{ fontFamily: '"Anton", sans-serif' }} className='text-3xl lg:text-5xl scale-90 text-white'>VISIÓN</h3>
            <p style={fontRaleway} className='text-sm w-3/5 text-center lg:text-2xl font-normal text-white '>Ser una empresa lider en perforación a nivel latinoamericano, siendo reconocida como la solución e minería y construcción; por nuestra experiencia y compromiso con nuestros clientes.</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-7'>
            <Image className='w-1/4 lg:w-64' src='/assets/MISION.png' alt=' ' width={150} height={150}></Image>
            <h3 style={{ fontFamily: '"Anton", sans-serif' }} className='text-3xl lg:text-5xl scale-90 text-white'>MISIÓN</h3>
            <p style={fontRaleway} className='text-sm w-4/5 text-center lg:text-2xl font-normal text-white '>Proveer los servicios de perforación orientada a la satisfacción de nuestros clientes, garantizado por nuestro personal con amplia experiencia y equipos de alta tecnología, cumpliendo con estándares en seguridad, salud ocupacional, medio ambiente y calidad, que nos permiten lograr excelentes resultados.</p>
          </div>
        </section>


        {/*  SECCION 4 */}

        <section className='p-3 2xl:p-0 sm:p-10 md:p-10 w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center '>

          <div className="flex flex-col justify-center items-center gap-6 ">
            <div style={fontRaleway} className='relative font-semibold text-black text-sm sm:text-lg p-1 pl-20 gap-4 flex flex-col'>
            <h3 style={{ fontFamily: '"Anton", sans-serif' }} className='font-normal border-4 tracking-wider border-yellow-500 text-yellow-500 w-max p-2 text-3xl sm:text-5xl'>FORTALEZAS</h3>
              <p>▶ Recursos Humanos</p>
              <p>▶ Equipo de Perforación</p>
              <p>▶ Diamantina</p>
              <p>▶ Gestión logística e infraestructura</p>
              <p>▶ Estabilidad </p>
            <h3 style={{ fontFamily: '"Anton", sans-serif', letterSpacing: '.5rem' }} className='-rotate-90 absolute border-4 border-yellow-500 text-yellow-500 w-max p-3 px-12 scale-90 -left-20 sm:-left-36 top-20 sm:top-28
                 text-2xl sm:text-5xl'>VALORES</h3>
            </div>
          </div>

          <div className="sm:p-5 lg:p-0">
            <Image className='w-full object-cover object-center lg:w-11/12 xl:w-9/12' src='/assets/ser01.jpg' alt=' ' width={150} height={450}></Image>
          </div>

        </section>

      </MainLayout>
    </>
  )
}
