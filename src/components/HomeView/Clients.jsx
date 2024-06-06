import React from 'react';
import ClientCard from './ClientCard';
import ColabsCard from './ColabsCard';
import logo from '../../images/black_logo_versatile.png';
import logoFederationRoller from '../../images/clients/federation_rollers.png';
import logoFederationDance from '../../images/clients/federation_dance.png';

const Clients = () => {
  return (
    <>
      <div className="clients-container">
        <div className="title-logos-container">
          <h2>CLIENTES</h2>
          <div className="client-cards">
            <img src={logoFederationRoller} alt="Colaborator 1" className='colab'/>
            <img src={logoFederationDance} alt="Colaborator 1" className='colab'/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;