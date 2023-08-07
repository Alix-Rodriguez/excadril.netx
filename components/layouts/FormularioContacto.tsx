import { FC } from 'react';


import { ScriptProps } from 'next/script';
import { gradianteYellow } from '../styles';








export const FormularioContacto: FC = () => {

  

    return (
        <div className='mt-20 flex flex-col w-full justify-normal items-center  py-10'>

                <h2 style={{fontFamily:'"Anton", sans-serif'}} className='mb-16 text-5xl'>CONTACTO</h2>

                <form className='p-14' action="">
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-yellow-500 focus:shadow-outline" id="" type="text" placeholder="Username"/>
                  
                  <input className="my-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-yellow-500 focus:shadow-outline" id="" type="email" placeholder="Email"/>
                 

                  <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-yellow-500 focus:shadow-outline" placeholder="Mensaje" name="" id="" cols={30} rows={10}></textarea>


                  <button className='text-lg border rounded w-full py-2 px-3 mt-5 text-white' style={gradianteYellow} type='submit'>ENVIAR</button>
                </form>
            </div>
      )
};
