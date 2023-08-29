import { CSSProperties } from 'react';

import Image from 'next/image';

import { MainLayout } from '../components/layouts/MainLayout';
import { Banner } from '../components/banner_info';

import {
  backGround1,
  backGroundBanner1,
  backGroundBanner2,
} from '../components/styles'

// import { FormularioContacto } from '@/components/layouts/FormularioContacto';



export default function Home() {
  return (
    <>
      <MainLayout>

        <div style={backGround1} className='flex background-white justify-center items-center lg:items-end'>

          <div className=' w-11/12 md:w-3/4'>
            <Banner
              buttoBool={true}
              h1='SOLUCIONES EN'
              span='PERFORACIONES'
              backGround={backGroundBanner1}
              p='Excadrill Internacional, brinda diversos servicios en perforación desde el año 2010, mejorando sus resultados de manera progresiva con cada proyecto realizado, es así que hemos logrado determinar el punto óptimo de operación, considerando los parámetros'
              position={true}
            />
          </div>



        </div>


        {/* SECCION 2 */}


        {/* SECCION 3 */}


        {/* SECCION 4 */}
        

        <section className='flex justify-center items-end'>
          <div className='w-11/12 md:w-3/4'>
            <Banner
              buttoBool={false}
              h1='RELACIONES'
              span='COMUNITARIAS'
              backGround={backGroundBanner2}
              p='Excadrill Internacional dentro de sus compromisos, tiene el respeto a las costumbres, tradiciones y actividades de las comunidades, así como la protección ambiental en la gestión operacional. Además en coordinación con nuestros clientes, contratamos personal de comunidades, contribuyendo al desarrollo sostenible y mejora de la calidad de vida y convivencia en armonia con las comunidades'
              position={false}
            />
          </div>

        </section>

      </MainLayout>
    </>
  )
}
