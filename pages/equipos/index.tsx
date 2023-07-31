
import Image from 'next/image';

import { MainLayout } from '../../components/layouts/MainLayout';
import { Header } from '../../components/layouts/Header';

import {
  backGroundEquipos,  
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



      </MainLayout>
      </>
  )
}
