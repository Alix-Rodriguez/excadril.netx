import { FC, useEffect } from 'react';
import { useForm } from "react-hook-form";


import { ScriptProps } from 'next/script';


// import { gradianteYellow } from '../styles';
import axios from 'axios';




const submit = async (date:any)=>{
  const form = {
    data:{}
  }
  form.data = date
  console.log(form)
  try {
    const response = await axios.post('https://marcelina.store/alix/api/formularios',form);
    // res.status(200).json(response.data);
    console.log(response)
  } catch (error) {
    // res.status(500).json({ message: 'Error al realizar la solicitud POST' });
    console.error("FALLO EN ENVIO DEL FORMULARIO")
  }
}

export const FormularioContacto: FC = () => {
  
  const {register, handleSubmit } = useForm()

  // useEffect(() => {
    
  //   const apiHandler = async () => {
  //    console.log("entroooo")
  //    try {
  //      const response = await axios.get('http://localhost:1337/api/pruebas');
  //      const data = response.data;
  //     console.log(data)
  //    } catch (error) {
  //      console.error(error);
  //    }
  // };

  // apiHandler();

  // }, []);
  

    return (
        <div className='mt-20 flex flex-col w-full justify-normal items-center  py-10'>

                <h2 style={{fontFamily:'"Anton", sans-serif'}} className='mb-16 text-5xl'>CONTACTO</h2>

                <form className='p-14' onSubmit={handleSubmit(submit)}>
                  <input  {...register('nombre')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-yellow-500 focus:shadow-outline"  type="text" placeholder="Username"/>
                  
                  <input {...register('email')} className="my-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-yellow-500 focus:shadow-outline"  type="email" placeholder="Email"/>
                 

                  <textarea {...register('descripcion')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-yellow-500 focus:shadow-outline" placeholder="Mensaje"  cols={30} rows={10}></textarea>


                  {/* <button className='text-lg border rounded w-full py-2 px-3 mt-5 text-white' style={gradianteYellow} type='submit'>ENVIAR</button> */}
                </form>
            </div>
      )
};
