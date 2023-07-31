
import Image from 'next/image';

import { MainLayout } from '../../components/layouts/MainLayout';
import { Header } from '../../components/layouts/Header';

import {
  backGroundServicio,  
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



      </MainLayout>
      </>
  )
}
