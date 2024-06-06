import React, {useState} from 'react';
import ClientCard from './ClientCard';
import ColabsCard from './ColabsCard';

const ColabClients = () => {
    
  return (
    <>
      <div className='clients-colab-container'> 
        <div className="clients-container">
            <h2>Nuestros Clientes</h2>
            <div className="cards-secondary-container">
               
            </div>
        </div>
        
        <div className="colaborators-container">
          <h2>Nuestros Colaboradores</h2>
          <div className="cards-secondary-container">
           
          </div>
        </div>
      </div>
    </>  
  );
};

export default ColabClients;
