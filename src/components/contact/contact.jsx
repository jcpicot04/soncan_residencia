import React from 'react'

const Contact = () => {
  require('./contact.scss');

  return (
    <div className="contact_container">
        <div className="contact_row">
                <h1>CONTACTO</h1>
        </div>
        <div className="contact_row">
                <h4>Estaremos encantados de ayudarte</h4>
        </div>
        <div className="contact_row input-container">
                <div className="col-xs-12">
                    <div className="styled-input wide">
                        <input type="text" required />
                        <label>Nombre</label> 
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="styled-input">
                        <input type="text" required />
                        <label>Email</label> 
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="styled-input" style={{float:"right"}}>
                        <input type="text" required />
                        <label>Número de teléfono</label> 
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className="styled-input wide">
                        <textarea required></textarea>
                        <label>Mensaje</label>
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className="btn-lrg submit-btn">Enviar</div>
                </div>
        </div>
    </div>

  )
}

export default Contact