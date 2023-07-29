import { CSSProperties } from 'react';

import camionBackGround from '../public/assets/slide.jpg'
import lineaAmarilla from '../public/assets/header-decoslide-01.svg'
import lineaAmarilla2 from '../public/assets/header-decoslide-02.svg'
import logoLide from '../public/assets/logoslide.svg'
import nosotros from '../public/assets/nosotros.png'


export const backGround1: CSSProperties = {
    backgroundImage: `url(${camionBackGround.src})`,
    color: 'rgb(255, 255, 255)',
    height: '120vh',
    fontFamily:'"Anton", sans-serif'
}

export const backGround2: CSSProperties = {
  backgroundImage: `url(${lineaAmarilla.src})`,
  zIndex:'2',
  backgroundPosition:'bottom center',
  height: '120vh',

}

export const backGround3: CSSProperties = {
  backgroundImage: `url(${logoLide.src})`,
  backgroundPosition:'top right',
  opacity:'45%',
  height: '120vh',
}

export const backGround4: CSSProperties = {
  background: 'linear-gradient( 180deg, rgba(0, 0, 0, 1) 0%, rgba(29, 29, 27, 0.5) 10.28%, rgba(29, 29, 27, 0.5) 78.56%, rgba(0, 0, 0, 1) 100% )',
  height: '120vh',

}

export const backGround5: CSSProperties = {
  backgroundImage: `url(${nosotros.src})`,
  color: 'rgb(255, 255, 255)',
  height: '100vh',
  fontFamily:'"Anton", sans-serif',
}

export const backGround6: CSSProperties = {
  backgroundImage: `url(${lineaAmarilla2.src})`,
  height: '100vh',
  zIndex:'2',
  backgroundPosition:'top left',
}

export const fontRaleway:CSSProperties = {
  fontFamily: '"Raleway", sans-serif'
}

export const sombraImg: CSSProperties = {
  background: 'linear-gradient( 180deg, rgba(0, 0, 0, 0) 50%, rgba(29, 29, 27, 0.5) 70%, rgba(29, 29, 27, 0.5) 80.56%, rgba(0, 0, 0, 0.7) 100% )',
  zIndex:'1',
}

export const gradianteButton: CSSProperties = {
  background: 'linear-gradient( 90deg, rgba(255, 169, 33, 1) 0%, rgba(255, 191, 45, 1) 50%, rgba(255, 195, 55, 1) 100% )',
  boxShadow: '0.08em 0.08em 0.3em #b1b1b1'
}

export const ClipPath: CSSProperties = {
  clipPath: 'polygon(50% 20%, 100% 0, 100% 100%, 0 100%, 0 0)'
}

export const ClipPath2: CSSProperties = {
  clipPath: 'polygon(7% 0%, 100% 0%, 93% 100%, 0% 100%)'
}

export const gradianteYellow: CSSProperties = {
  background: 'linear-gradient( 90deg, rgba(255, 169, 33, 1) 0%, rgba(255, 191, 45, 1) 50%, rgba(255, 195, 55, 1) 100% )',
}
