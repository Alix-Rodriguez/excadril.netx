import Image from "next/image";

export const Footer = () => {


  return (
        <>
        
        <footer className="bg-black gap-28 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-7 p-10 md:gap-3 opacity-90">

            {/* PRIMER CONTAINER */}
            <div className="grid gap-7 border-b-2 pb-3  md:gap-5 justify-items-center md:grid-col-1  2xl:col-span-2 2xl:border-r-2">
                <div>
                    <Image src="/assets/logo.svg" alt="Logo de excadrill" width={180} height={0}/>
                </div>
                <div className="text-white grid grid-cols-1 gap-1">
                    <h4 className="text-4xl" style={{fontFamily:'"Anton", sans-serif'}}>LA EMPRESA</h4>
                    <ul className="text-white grid grid-cols-1 gap-1 text-xl">
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

            <div className="grid   border-b-2 pb-2 gap-5 md:px-10 md:grid-col-1 2xl:col-span-2">                
                <div className="text-white grid grid-cols-1 gap-1">
                    <h4 className="text-4xl" style={{fontFamily:'"Anton", sans-serif'}}>SERVICIOS</h4>
                    <ul className="text-white text-lg grid grid-cols-1 gap-1 sm:text-xl">
                        <li>
                            <a href="#">Estudio geotécnico</a>
                        </li>
                        
                        <li>
                            <a href="#">Perforación y construcción de pozos</a>
                        </li>

                        <li>
                            <a href="#">Perforación de diamantina</a>
                        </li>

                        <li>
                            <a href="#">Perforación de circulación reversa</a>
                        </li>
                    </ul>
                </div>

                <div className="text-white grid gap-1">
                <h4 className="text-4xl" style={{fontFamily:'"Anton", sans-serif'}}>CONTACTO</h4>

                     <ul className="text-white grid grid-cols-3 w-40">
                        <li>
                            <a href="#"><Image src="/assets/instagram.svg" alt="imagen de instagram" width={30} height={30}/> </a>
                        </li>
                        
                        <li>
                            <a href="#"><Image src="/assets/email.svg" alt="imagen de email " width={30} height={30}/> </a>
                        </li>

                        <li>
                            <a href="#"><Image src="/assets/linkedin.svg" alt="imagen de Linkedin " width={30} height={30}/></a>
                        </li>
                    </ul> 
                </div>

            </div>

            {/* TERCER CONTAINER */}

            <div className=" md:col-span-2 2xl:col-span-3 rounded-xl text-white text-center text-5xl ">
            <iframe className="rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    aria-hidden={false}
                    tabIndex={0}
                  />
            </div>

        </footer>
        
        
        </>
  );
};