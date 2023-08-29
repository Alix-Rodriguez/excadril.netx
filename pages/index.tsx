import { CSSProperties } from "react";

import Image from "next/image";

import { MainLayout } from "../components/layouts/MainLayout";
import { Header } from "../components/layouts/Header";
import img_empatia from "../components/images/EMPATÍA.png";
import img_integridad from "../components/images/INTEGRIDAD.png";
import img_lealtad from "../components/images/LEALTAD.png";
import img_responsabilidad from "../components/images/RESPONSABILIDAD.png";
import img_seguridad from "../components/images/SEGURIDAD.png";

// import {
//   backGround1,
//   // backGround2,
//   // backGround3,
//   // backGround4,
//   backGround5,
//   backGround6,
//   fontRaleway,
//   sombraImg,
//   gradianteButton,
//   ClipPath,
//   ClipPath2,
//   gradianteYellow

// } from '../components/styles'

// import { FormularioContacto } from '@/components/layouts/FormularioContacto';

export default function Home() {
  const items = [
    { title: "RESPONSABILIDAD", image: img_responsabilidad },
    { title: "EMPATÍA", image: img_empatia },
    { title: "LEALTAD", image: img_lealtad },
    { title: "INTEGRIDAD", image: img_integridad },
    { title: "SEGURIDAD", image: img_seguridad },
  ];
  return (
    <>
      <MainLayout>
        {/* <Header 
      backGround={backGround1}
      YellowSpan='EXPERIENCIA'
      H2='MÁS DE 10 AÑOS'
      h2Opcion = 'DE'
      P1='DIAMANTINA RC, GEOTÉCNIA, CORTE DE'
      P2='MUESTRA, LOGUÉO, TOPOGRAFÍA Y MUESTREO' 
      styleSpan={true}  
      CentradoSpan={false}
      Top={true}
      /> */}

        {/* SECCION 2 */}

        <div
          className="h-96 py-20 lg:flex md:block sm:block items-center justify-center mx-auto"
          style={{ width: "1050px" }}
        >
          {/* Izquierda */}
          <div className="relative flex flex-col justify-center lg:w-1/2 md:w-full sm:w-full h-80 overflow-hidden bg-estilo-A">
            <div
              className="absolute -top-full -right-5 w-5 h-screen bg-white transform origin-center"
              style={{ transform: "rotate(-30deg)" }}
            ></div>
            <div className="p-8 flex flex-col lg:items-start">
              <h2 className="text-white text-center font-black titulo-A">
                MISIÓN
              </h2>
              <div className="h-6"></div>
              <p className="text-white text-center font-rubik parrafo-A">
                Impulsar el crecimiento económico, asociándonos con nuestros
                clientes para la realización de sus proyectos de exploración y
                producción, desarrollando nuevos y mejores servicios de
                perforación para minería e industrias.
              </p>
            </div>
          </div>
          {/* Derecha */}
          <div className="relative flex flex-col justify-center lg:w-1/2 md:w-full sm:w-full h-80 overflow-hidden bg-estilo-A">
            <div
              className="absolute -top-full -left-0 w-5 h-screen bg-white transform origin-center "
              style={{ transform: "rotate(-30deg)" }}
            ></div>
            <div className="p-8 flex flex-col lg:items-end">
              <h2 className="text-white text-center font-black titulo-A">
                VISIÓN
              </h2>
              <div className="h-6"></div>
              <p className="text-white text-center font-rubik parrafo-A">
                Ser reconocidos como el proveedor líder en soluciones de
                perforación, por nuestras operaciones seguras, productivas y de
                valor sostenible, contribuyendo en la construcción de un futuro
                mejor
              </p>
            </div>
          </div>
        </div>

        {/* SECCION 3 */}
        
        <div
          className="py-20"
        >
        <div
          className="lg:flex md:block sm:block flex items-start  bg-yellow-300 mx-auto"
          style={{ width: "1546px", height: "573px" }}
        >
          {/* Columna Izquierda */}
          <div
            className="relative flex flex-col overflow-hidden bg-black"
            style={{ left: "0", width: "400px", height: "573px" }}
          >
            <div className="p-8">
              <h2 className="text-white text-left font-black">Columna 1</h2>
              <div className="h-6"></div>
              <p className="text-white text-left font-rubik">
                Contenido de la columna 1.
              </p>
            </div>
          </div>

          {/* Columna Central */}
          <div
            className="relative flex flex-col justify-between            bg-estilo-A paralelogramo"
            style={{ left: "-235px", width: "450px", height: "573px" }}
          >
            <div
              className="absolute -top-0 left-0 w-5  bg-white transform origin-center"
              style={{ height: "573px" }}
            ></div>
            {items.map((item, index) => (
              <div key={index}>
                <div
                  className="py-4 px-12 flex items-center"
                  style={{ transform: "skew(30deg)" }}
                >
                  <p className="text-white font-rubik font-bold text-2xl mr-auto">
                    {item.title}
                  </p>
                  <div className="ml-auto">
                    <Image
                      src={item.image}
                      alt=""
                      className="border-white border-2 rounded-full"
                      style={{ backgroundColor: "white" }}
                    />
                  </div>
                </div>
                <div className="h-4 bg-white"></div>
              </div>
            ))}

            <div
              className="absolute -top-0 right-0 w-5 bg-white transform origin-center"
              style={{ height: "573px" }}
            ></div>
          </div>
        </div>
</div>
        {/* SECCION 4 */}
        
      </MainLayout>
    </>
  );
}
