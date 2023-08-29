import Image from "next/image";
import { textColor } from './styles';

export const Footer = () => {


  return (
        <>
        
        <footer className="bg-black gap-28 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-7 p-10 md:p-20 md:gap-3">

            {/* PRIMER CONTAINER */}
            <div className="grid gap-7 border-b-2 pb-3 justify-items-center md:grid-col-1  2xl:col-span-2 2xl:border-r-2 2xl:border-b-0 ">
                <div>
                    <Image src="/assets/logo-blanco.svg" alt="Logo de excadrill" width={200} height={0}/>
                </div>
                <div className="text-white grid grid-cols-1 gap-10">
                    <div>
                    <h4 className="text-4xl" style={{fontFamily:'"Anton", sans-serif'}}>LA EMPRESA</h4>
                    <hr style={{borderTop:'7px solid #FFC239',width:'65%'}} className="mt-2 rounded" />
                    </div>

                    <ul style={{fontFamily:'"Rubik", sans-serif'}} className="text-white opacity-70 grid grid-cols-1 gap-1 text-xl">
                        <li>
                            <a href="#">Quiénes Somos</a>
                        </li>
                        
                        <li>
                            <a href="#">Misión y Visión</a>
                        </li>

                        <li>
                            <a href="#">Certificaciones</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* SEGUNDO CONTAINER */}

            <div className="grid items-center 2xl:border-b-0 border-b-2 pb-2  md:px-10 md:grid-col-1 2xl:col-span-2">                
                <div className="text-white grid grid-cols-1 items-center">
                    <h4 className="text-2xl" style={{...textColor,fontFamily:'"Anton", sans-serif'}}>CONTACTO</h4>

                    <ul style={{fontFamily:'"Rubik", sans-serif'}} className="text-white text-lg grid grid-cols-1 gap-3 sm:text-xl">
                        <li className="flex gap-2">
                            <Image src="./assets/icon_1.svg" alt="icono de llamada" width={32} height={32} />
                            <div>
                                <h6>Llámanos </h6>
                                <h5>958 545 9272 - 959 259 517</h5>
                            </div>
                        </li>
                        <li className="flex gap-2">
                            <Image src="./assets/icon_2.svg" alt="icono de mensaje" width={32} height={32} />
                            <div>
                                <h6>Correo electrónico</h6>
                                <h5>www.excadrillinternacional.com</h5>
                            </div>
                        </li>
                        <li className="flex gap-2 mt-1">
                            <Image src="./assets/icon_1.svg" alt="icono de llamada" width={32} height={32} />
                            <div>
                                <h6>Ubicación</h6>
                                <h5>Jr. Cajamarquilla 670, San Juan de Lurigancho - Lima Oficina principal: Urb. Cercado Cal. Jerusalén 128 - Arequipa</h5>
                            </div>
                        </li>
                        
                    </ul>
                </div>

                <div className="text-white grid gap-4">
                <h4 className="text-2xl tracking-wider"
                 style={{...textColor,fontFamily:'"Anton", sans-serif'}}>REDES</h4>

                     <ul className="text-white grid grid-cols-3 w-40">
                        <li>
                            <a href="#"><Image src="/assets/insta.svg" alt="imagen de instagram" width={30} height={30}/> </a>
                        </li>
                        
                        <li>
                            <a href="#"><Image src="/assets/in.svg" alt="imagen de email " width={30} height={30}/> </a>
                        </li>
                    </ul> 
                </div>

            </div>

            {/* TERCER CONTAINER */}

            <div className=" md:col-span-2 2xl:col-span-3 rounded-xl text-white text-center text-5xl ">
            <iframe  className="radius"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                    width="100%"
                    height="400"
                    style={{ border: 0, backdropFilter:'blur(2.5px)' }}
                    allowFullScreen
                    aria-hidden={false}
                    tabIndex={0}
                  />
            </div>

        </footer>
        
        
        </>
  );
};