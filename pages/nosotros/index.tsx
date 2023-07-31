
import Image from 'next/image';

import { MainLayout } from '../../components/layouts/MainLayout';
import { Header } from '../../components/layouts/Header';

import {
  backGroundNosotros,  
} from '../../components/styles'



export default function Nosotros() {
  return (
      <>
      <MainLayout>

      <Header 
      backGround={backGroundNosotros}
      YellowSpan='EXPERIENCIA'
      H2='MÁS DE 10 AÑOS'
      h2Opcion = 'DE'
      P1='DIAMANTINA RC, GEOTÉCNIA, CORTE DE'
      P2='MUESTRA, LOGUÉO, TOPOGRAFÍA Y MUESTREO' 
      styleSpan={true}  
      CentradoSpan={false}
      Top={true}
      />



      </MainLayout>
      </>
  )
}
