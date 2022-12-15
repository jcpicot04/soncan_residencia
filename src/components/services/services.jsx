import React from 'react'
import Fade from 'react-reveal/Fade';
import service1 from '../../assets/service1.webp';
import service2 from '../../assets/service2.webp';
import service3 from '../../assets/service3.webp';
import service4 from '../../assets/service4.webp';
const Services = () => {
  require('./services.scss');

  return (
    <div className='services'>
        <h1>SERVICIOS</h1>
       <div className='service'>
        <img className='service-img' src={service1}/>
        <Fade left>
        <div className='service-text left'>
        <h2>Residencia canina y felina</h2>
        <p className='service-description'>Contamos con 36 boxes con bebedero automático, completamente cubiertos y protegidos del sol, (18 boxes de 2×3 m., 18 boxes de 1,50×3 m., 8 gateras cubiertas), amplios parques de recreo y pistas.</p>
        </div>
        </Fade>
       </div>
       <div className='service'>
       <Fade right>
       <div className='service-text right'>
        <h2>Servicio de peluquería</h2>
        <p className='service-description'>Durante su estancia en nuestras instalaciones ofrecemos servicios de peluquería así como lavado,peinado,secado,etc...</p>
        </div>
        </Fade>
        <img className='service-img' src={service2}/>
       </div>
       <div className='service'>
        <img className='service-img' src={service3}/>
        <Fade left>
        <div className='service-text left'>
        <h2>Venta de alimentación para animales</h2>
        <p className='service-description'>Ofrecemos una amplia variedad de alimentos de la mejor calidad para caninos y felinos, tanto para su alimentación durante su estancia en nuestras instalaciones como para venta al público.</p>
        </div>
        </Fade>
       </div>
       <div className='service'>
       <Fade right>
        <div className='service-text right'>
            <h2>Consulta veterinaria 24h</h2>
            <p className='service-description'>Contamos con servicio veterinario 24/7 para atender cualquier problema que pueda tener un animal en nuestras instalaciones lo antes posible, con nosotros está seguro.</p>
        </div>
        </Fade>
        <img className='service-img' src={service4}/>
       </div>
    </div>
  )
}

export default Services