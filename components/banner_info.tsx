import { FC } from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


import { ScriptProps } from 'next/script';
import { backgroundColor, textColor } from './styles';




interface Props {
    backGround:{},
    buttoBool: boolean,
    YellowSpan?:string,
    h1?: string,
    span: string,
    p: string,
    position:  boolean,
}

    const gradianteSobra = {
        background: 'linear-gradient(90deg, #000 12.18%, rgba(0, 0, 0, 0.11) 47.68%, rgba(0, 0, 0, 0.11) 80.73%)'
    }

    const _gradianteSobra = {
        background: 'linear-gradient(-90deg, #000 12.18%, rgba(0, 0, 0, 0.11) 47.68%, rgba(0, 0, 0, 0.11) 80.73%)'
    }



export const Banner: FC<Props> = ({ backGround,YellowSpan,p,position, h1 , span, buttoBool }) => {

  

    return (
        <section style={{...backGround,height:'60vh'}} className={`flex flex-col relative bg-cover bg-no-repeat bg-center  bg-white justify-center`} >
{/* ${position ? 'items-start' : 'items-end'} */}
        <div style={gradianteSobra} className= {`${!position ? 'hidden' : ''} h-full w-full absolute`} ></div>

        <div style={_gradianteSobra} className= {`${position ? 'hidden' : ''} h-full w-full absolute`} ></div>

        <div className={`z-10 ${position ? 'ml-5 md:ml-20 2xl:ml-40' : 'mr-8 md:mr-16 2xl:mr-32 items-end'} gap-16 md:gap-5 2xl:gap-14 flex flex-col`} >
            <div className={`${position ? '' : 'items-end'} gap-5 flex flex-col`} >

                <h1 className=' text-lg md:text-2xl 2xl:text-4xl text-white'>
                    {h1}
                    <br />
                <span style={textColor}>{span}</span>
                </h1>
                <p className= {`text-white text-xs w-11/12 md:text-sm 2xl:text-xl md:w-1/3 ${position ? 'text-start' : 'text-end'} `} >{p}</p>
            </div>
            <div>
                <button 
                style={backgroundColor}
                className={`${!position ? 'hidden' : ''} ${buttoBool ? 'text-white md:text-sm 2xl:text-lg flex items-center text-xs rounded-lg md:py-1 px-4' : 'hidden' }`} >
                MAS INFORMACIÓN<MdOutlineKeyboardArrowRight size={40}/>
            </button>
            </div>
        </div>

    </section>
      )
};
