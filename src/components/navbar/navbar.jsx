import React,{useState} from 'react'
import { Link } from 'react-scroll';
import {FiAlignRight,FiXCircle } from "react-icons/fi";
import logo from '../../assets/SON_CAN_logo.png';

const Navbar = () => {
    require('./navbar.scss');

  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
};

  let boxClass = ["main-menu menu-right menuq1"];
  if(isMenu) {
      boxClass.push('menuq2');
  }else{
      boxClass.push('');
  }

  return (
  <header className="header__middle">
      <div className="nav-container">
          <div className="row">
              <div className="header__middle__logo">
                  <Link onClick={toggleClass} activeClass="active" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" href="#" to="">
                      <img src={logo} alt="logo" /> 
                  </Link>
              </div>
              <div className="header__middle__menus">
                  <nav className="main-nav " >

                  {isResponsiveclose === true ? <> 
                      <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                  </> : <> 
                      <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                  </>}
                  <ul className={boxClass.join(' ')}>
                  <li  className="menu-item" ><Link onClick={toggleClass} activeClass="active" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" href="#" to="home"> Inicio </Link> </li>
                  <li className="menu-item " ><Link onClick={toggleClass} activeClass="active" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" href="#servicios" to="services"> Servicios </Link> </li>
                  <li className="menu-item " ><Link onClick={toggleClass} activeClass="active" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" href="#precios" to="background"> Precios </Link> </li>
                  <li className="menu-item " ><Link onClick={toggleClass} activeClass="active" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" href="#instalaciones" to="installations"> Instalaciones </Link> </li>
                  <li className="menu-item " ><Link onClick={toggleClass} activeClass="active" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" href="#contacto" to="contact_container"> Contacto </Link> </li>
                  </ul>


                  </nav>     
              </div>   



      
      
          </div>
    </div>
  </header>
  )
}

export default Navbar