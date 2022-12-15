import React from 'react'
import logo from '../../assets/SON_CAN_logo.png';

const Footer = () => {
  require('./footer.scss');

  return (
<footer>
<div class="top_header">
<section>
<span><i class="fa fa-map-marker"></i></span>
<span>Travesía de la Casa Canyada, 58, Llíria</span>
</section>
<section>
<span><i class="fa fa-phone"></i></span>
<span>(+34) 9602 7852</span>
</section>
<section>
<span><i class="fa fa-envelope"></i></span>
<span>soncan@gmail.com</span>
</section>
</div>
<span class="border-shape"></span>
<div class="bottom_content">
<section>
<a href="#"><i class="fa fa-facebook"></i></a>
<a href="#"><i class="fa fa-instagram"></i></a>
<a href="#"><i class="fa fa-twitter"></i></a>
<a href="#"><i class="fa fa-telegram"></i></a>
</section>
<section>
<a href="#">Inicio</a>
<a href="#">Quien somos</a>
<a href="#">Ayuda</a>
<a href="#">Privacidad</a>
<a href="#">Cookies</a>
<a href="#">Contacto</a>
</section>
</div>
<div class="copyright">
Copyright © 2022 SONCAN - Todos los derechos reservados
</div>
</footer>
  )
}

export default Footer