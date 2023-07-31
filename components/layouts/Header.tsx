import { FC } from 'react';


import { ScriptProps } from 'next/script';
import { backGround2, backGround3, backGround4, gradianteYellow } from '../styles';


interface Props {
    backGround:{},
    YellowSpan:string,
    H2?: string,
    h2Opcion?: string,
    P1?: string,
    P2?:  string,
    styleSpan: boolean,
    CentradoSpan: boolean,
    Top:boolean,
}




export const Header: FC<Props> = ({ backGround,YellowSpan,P1,P2, H2 , h2Opcion, styleSpan, CentradoSpan , Top}) => {

  

    return (
        <section style={backGround} className='flex flex-col relative bg-cover bg-no-repeat bg-center  items-center bg-white justify-center '>
              
        <h2 style={{zIndex:'2'}} className={`tracking-widest ${Top ? 'md:top-16' : ''}  lg:top-0 text-5xl  2xl:text-7xl relative md:text-6xl`} >

        {H2} 
        <br />
        {h2Opcion} <span style={gradianteYellow} className={` absolute p-1 ${styleSpan ? 'right-6' : ''} ${CentradoSpan ? 'right-20' : '' }`} >{YellowSpan}</span>
        </h2>

        <h3 style={{zIndex:'2',fontFamily: '"Raleway",sans-serif'}} 
        className='2xl:text-4xl md:text-2xl leading-relaxed text-center mt-20 text-white font-medium'>

       { P1 }
        <br />
       { P2 }
        </h3>

    <div style={backGround2} className=' w-6/12 left-0 absolute bg-no-repeat '></div>
    <div style={backGround3} className=' w-full absolute bg-no-repeat'></div>
    <div style={backGround4} className=' w-full absolute '></div>
    </section>
      )
};
