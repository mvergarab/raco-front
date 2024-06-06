import React from 'react';
import footerLogo from '../../images/footer_logo.png'
import { facebook, instagram, linkedin } from '../../utils/icons';


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <img src={footerLogo} alt="Logo" id="footer-logo"/>
      </div>

      <div className="footer-column">
        <h3>Síguenos</h3>
        <div className="social-icons">
          <div className="social-icon">
            {facebook}
          </div>
          <div className="social-icon">
            {instagram}
          </div>
          <div className="social-icon">
            {linkedin}
          </div>
        </div>
      </div>

      <div className="footer-column">
          <h3>Contacto</h3>
          <p>contacto@raco.cl</p>
          <p>+569 7612 2646</p>
      </div>
    </footer>
  );
};

export default Footer;
