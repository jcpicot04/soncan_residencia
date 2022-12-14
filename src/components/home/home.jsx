import React from 'react'
import logo from '../../assets/animales-logo.png';
import icon1 from '../../assets/flat-1.svg';
import icon2 from '../../assets/flat-2.svg';
import icon3 from '../../assets/flat-3.svg';
import icon4 from '../../assets/flat-4.svg';
import Slide from 'react-reveal/Slide';

const Home = () => {
  require('./home.scss');

  return (
    <div className='home'>
      <div id="container-home">
        <img className='animales_logo' src={logo} alt="logo" />
        <p>El hogar perfecto para tu mejor amigo</p>
      </div>
      <div className='icons_container'>
        <div className='icons'>
          <Slide bottom duration={1500}>
              <div className='icon_container'>
                <img src={icon1}/>
                <p>Residencia canina y felina</p>
              </div>
              <div className='icon_container'>
                <img src={icon2}/>
                <p>Servicios de peluquería</p>
              </div>
              <div className='icon_container'>
                <img src={icon3}/>
                <p>Venta de alimentación para animales</p>
              </div>
              <div className='icon_container'>
                <img src={icon4}/>
                <p>Consulta veterinaria 24h</p>
              </div>
            </Slide>
        </div>
      </div>
      </div>
  )
}

export default Home