
import Image from 'next/image';

import { MainLayout } from '../../components/layouts/MainLayout';
import { Header } from '../../components/layouts/Header';

import {
  backGroundContactos,  
} from '../../components/styles'



export default function Contacto() {
  return (
      <>
      <MainLayout>

      <Header 
      backGround={backGroundContactos}
      H2='TRABAJEMOS'
      YellowSpan='JUNTOS'
      P1='Cuéntanos sobre tu proyecto y nos'
      P2='comunicaremos contigo para resolver tus dudas'
      styleSpan={false}
      CentradoSpan={true}
      Top={false}
       />



      </MainLayout>
      </>
  )
}
