
import Image from 'next/image';

import { MainLayout } from '../../components/layouts/MainLayout';
import { Header } from '../../components/layouts/Header';

import {
  backGroundEquipos, gradianteButton,  
} from '../../components/styles'



export default function Equipos() {
  return (
      <>
      <MainLayout>

      <Header 
      backGround={backGroundEquipos}
      H2='RELACIÓN DE EQUIPOS'
      h2Opcion='DE'
      YellowSpan='PERFORACIÓN'
      styleSpan={false}
      CentradoSpan={false}
      Top={true}
       />

      <section className='w-4/6 m-auto pt-24 pb-60'>
      <div className="h-auto mt-4 -mb-3">
            <div className="bg-yellow-melon content not-prose relative  rounded-xl overflow-hidden ">
              <div className="relative rounded-xl overflow-auto">
                <div className="shadow-sm overflow-hidden my-8">
                  <table className="table-auto border-collapse w-full text-sm">
                    <thead>
                      <tr>
                        <th className=" font-normal p-4 pl-8 pt-0 pb-3   text-center">
                          ÍTEM
                        </th>
                        <th className=" font-normal p-4 pt-0 pb-3   text-left">
                          DESCRIPCIÓN
                        </th>
                        <th className=" font-normal p-4 pt-0 pb-3   text-center">
                          CANTIDAD
                        </th>
                        <th className=" font-normal p-4 pr-8 pt-0 pb-3   text-center">
                          AÑO DE FABRICACIÓN
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white ">
                      <tr className='border-2 border-yellow-melon'>
                        <td className=" p-4 pl-8 font-medium   text-center">
                          {1}
                        </td>
                        <td className=" p-4 font-medium  text-left">
                          MÁQUINA DE PERFORACIÓN MONTADA SOBRE ORUGA <br />
                          MARCA: EPIROC <br />
                          MODELO: 140
                        </td>
                        <td className="text-center p-4 font-medium  ">
                          1
                        </td>
                        <td className="text-center p-4 pr-8 font-medium ">
                          2022
                        </td>
                      </tr>
                      <tr className='border-2 border-yellow-melon'>
                        <td className="text-center font-medium p-4 pl-8 ">
                          {2}
                        </td>
                        <td className=" p-4  font-medium text-left">
                          MÁQUINA DE PERFORACIÓN MONTADA SOBRE ORUGA <br />
                          MARCA: EPIROC <br />
                          MODELO: CS14
                        </td>
                        <td className="text-center font-medium p-4 ">
                          1
                        </td>
                        <td className="text-center font-medium p-4 pr-8 ">
                          2022
                        </td>
                      </tr>
                      <tr className='border-2 border-yellow-melon'>
                        <td className="text-center font-medium  p-4 pl-8 ">
                          {3}
                        </td>
                        <td className=" p-4 font-medium text-left">
                          MÁQUINA DE PERFORACIÓN MONTADA SOBRE ORUGA <br />
                          MARCA: EPIROC <br />
                          MODELO: CS14
                        </td>
                        <td className="text-center font-medium p-4 ">
                          1
                        </td>
                        <td className="text-center font-medium p-4 pr-8 ">
                          2022
                        </td>
                      </tr>
                      <tr className='border-2 border-yellow-melon'>
                        <td className="text-center  font-medium p-4 pl-8 ">
                          {4}
                        </td>
                        <td className=" p-4 font-medium text-left">
                          MÁQUINA DE PERFORACIÓN MONTADA SOBRE ORUGA <br />
                          MARCA: EPIROC <br />
                          MODELO: CS14
                        </td>
                        <td className="text-center font-medium p-4 ">
                          1
                        </td>
                        <td className="text-center  font-medium p-4 pr-8 ">
                          2022
                        </td>
                      </tr>
                      <tr className='border-2 border-yellow-melon'>
                        <td className="text-center font-medium  p-4 pl-8 ">
                          {5}
                        </td>
                        <td className=" p-4 font-medium text-left">
                          MÁQUINA DE PERFORACIÓN MONTADA SOBRE ORUGA <br />
                          MARCA: EPIROC <br />
                          MODELO: CS14
                        </td>
                        <td className="text-center font-medium p-4 ">
                          1
                        </td>
                        <td className="text-center font-medium p-4 pr-8 ">
                          2022
                        </td>
                      </tr>
                      <tr className='border-2 border-yellow-melon'>
                        <td className="text-center font-medium p-4 pl-8 ">
                          {6}
                        </td>
                        <td className=" p-4 font-medium text-left">
                          MÁQUINA DE PERFORACIÓN MONTADA SOBRE ORUGA <br />
                          MARCA: EPIROC <br />
                          MODELO: CS14
                        </td>
                        <td className="text-center font-medium p-4 ">
                          1
                        </td>
                        <td className="text-center font-medium p-4 pr-8 ">
                          2022
                        </td>
                      </tr>
                      <tr className='border-2 border-yellow-melon'>
                        <td className="text-center font-medium p-4 pl-8 ">
                          {7}
                        </td>
                        <td className=" p-4 font-medium text-left">
                          MÁQUINA DE PERFORACIÓN MONTADA SOBRE ORUGA <br />
                          MARCA: EPIROC <br />
                          MODELO: CS14
                        </td>
                        <td className="text-center p-4 font-medium">
                          1
                        </td>
                        <td className="text-center p-4 pr-8 font-medium">
                          2022
                        </td>
                      </tr>
                      <tr className='border-2 border-yellow-melon'>
                        <td className="text-center  p-4 pl-8 font-medium">
                          {8}
                        </td>
                        <td className=" p-4 font-medium text-left">
                          MÁQUINA DE PERFORACIÓN MONTADA SOBRE ORUGA <br />
                          MARCA: EPIROC <br />
                          MODELO: CS14
                        </td>
                        <td className="text-center p-4 font-medium">
                          1
                        </td>
                        <td className="text-center p-4 pr-8 font-medium">
                          2022
                        </td>
                      </tr>
                      <tr className='border-2 border-yellow-melon'>
                        <td className="text-center  p-4 pl-8 font-medium">
                          {9}
                        </td>
                        <td className=" p-4 font-medium text-left">
                          MÁQUINA DE PERFORACIÓN MONTADA SOBRE ORUGA <br />
                          MARCA: EPIROC <br />
                          MODELO: CS14
                        </td>
                        <td className="text-center p-4 font-medium">
                          1
                        </td>
                        <td className="text-center p-4 pr-8 font-medium">
                          2022
                        </td>
                      </tr>
                      <tr className='border-2 border-yellow-melon'>
                        <td className="text-center  p-4 pl-8 font-medium">
                          {10}
                        </td>
                        <td className=" p-4 font-medium text-left">
                          MÁQUINA DE PERFORACIÓN MONTADA SOBRE ORUGA <br />
                          MARCA: EPIROC <br />
                          MODELO: CS14
                        </td>
                        <td className="text-center p-4 font-medium">
                          1
                        </td>
                        <td className="text-center p-4 pr-8 font-medium">
                          2022
                        </td>
                      </tr>                      
                      <tr className='border-2 border-yellow-melon'>
                        <td className="text-center  p-4 pl-8 font-medium">
                          {11}
                        </td>
                        <td className=" p-4 font-medium text-left">
                          MÁQUINA DE PERFORACIÓN MONTADA SOBRE ORUGA <br />
                          MARCA: EPIROC <br />
                          MODELO: 140
                        </td>
                        <td className="text-center p-4 font-medium">
                          1
                        </td>
                        <td className="text-center p-4 pr-8 font-medium">
                          2022
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
            </div>
          </div>
          <div style={{fontFamily:'"Anton", sans-serif'}} className='flex pt-64 justify-center mx-auto mt-10 2xl:mt-0 text-5xl text-white '>
              <button className='p-3 tracking-wider rounded-lg' style={gradianteButton}>CONTACTAR</button>
          </div>
      </section>

      </MainLayout>
      </>
  )
}
