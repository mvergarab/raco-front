import React, { useState } from 'react';
import texture from '../../images/textures/raco_logos_complete.png'

const Form = ({ handleFlashMessage }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
  });

  const bgStyle = { 
    backgroundImage: `url(${texture})`,
    backgroundSize: '1450px ',  
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('this is the form data', formData)
    
    try {
      const response = await fetch('http://localhost:3001/api/leads', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Lead created successfully:', data);
    
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
        handleFlashMessage('Gracias por tu interés, correremos a atenderte');
      } else {
        console.error('Failed to create lead:', response.statusText);
        handleFlashMessage('Tuvimos un problema, lo solucionaremos al instante');
      }
    } catch (error) {
      console.error('Error creating lead:', error);
    }
  };

  return (
    <div className="form-view-container">
      <h1>Contáctanos</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-container">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="name" 
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="institucion">Institución / Empresa:</label>
          <input
            type="text"
            id="institucion"
            name="company" 
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            name="phone" 
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit" id="submit-button">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
