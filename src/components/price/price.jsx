import React from 'react'
import { Link } from 'react-scroll';

const Price = () => {
  require('./price.scss');

  return (
<div class="background">
  <div class="container">
    <div class="panel pricing-table">
      <div class="pricing-plan">
        <img src="https://www.svgrepo.com/show/26767/wedding-house.svg" alt="" class="pricing-img"/>
        <h2 class="pricing-header">ALOJAMIENTO</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Tarifa más barata</li>
          <li class="pricing-features-item">Amplios espacios</li>
        </ul>
        <span class="pricing-price">16€/noche</span>
        <Link spy={true} smooth={true} offset={-70} duration={500} to="contact_container"><a href="#/" class="pricing-button">Saber más</a></Link>
      </div>
      
      <div class="pricing-plan">
        <img src="https://www.svgrepo.com/show/166867/dog.svg" alt="" class="pricing-img"/>
        <h2 class="pricing-header">PELUQUERÍA</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Máximas calidades</li>
          <li class="pricing-features-item">Variedad de cuidados</li>
        </ul>
        <span class="pricing-price">Consultar</span>
        <Link spy={true} smooth={true} offset={-70} duration={500} to="contact_container"><a href="#/" class="pricing-button">Saber más</a></Link>
      </div>
      
      <div class="pricing-plan">
        <img src="https://www.svgrepo.com/show/20673/car.svg" alt="" class="pricing-img"/>
        <h2 class="pricing-header">TRANSPORTE</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Furgoneta equipada</li>
          <li class="pricing-features-item">Primer viaje gratuito</li>
        </ul>
        <span class="pricing-price">1€/km</span>
        <Link spy={true} smooth={true} offset={-70} duration={500} to="contact_container"><a href="#/" class="pricing-button">Saber más</a></Link>
      </div>
      
    </div>
  </div>
</div>
  )
}

export default Price