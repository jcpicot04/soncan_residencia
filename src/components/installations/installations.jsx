import React from 'react'
import inst1 from '../../assets/inst1.jpg';
import inst2 from '../../assets/inst2.webp';
import inst3 from '../../assets/inst3.jpg';
import inst4 from '../../assets/inst4.jpg';

const Installations = () => {
  require('./installations.scss');

  return (
    <div className='installations'>
        <h1>INSTALACIONES</h1>
        <h3>Recinto diseñado para la comodidad y seguridad de sus mascotas</h3>
        <div className='installations__images'>
                <img className='installations-img' src={inst1}/>
                <img className='installations-img' src={inst2}/>
        </div>
            <div className='installations__images'>
                <img className='installations-img' src={inst3}/>
                <img className='installations-img' src={inst4}/>
            </div>
        </div>
  )
}

export default Installations