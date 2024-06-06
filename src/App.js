import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './components/HomeView/HomeView';
import ValuesView from './components/ValuesView/ValuesView';
import ServicesView from './components/ServicesView/ServicesView'
import Navigation from './components/Shared/Navigation'
import Footer from './components/Shared/Footer';
import Form from './components/Shared/Form';

const App = () => {
  const [flashMessage, setFlashMessage] = useState('');

  const handleFlashMessage = (message) => {
    setFlashMessage(message);
    setTimeout(() => {
      setFlashMessage('');
    }, 5000); 
  };

  return (
    <BrowserRouter>
      <header>
        <Navigation />
      </header>
      <main>
        {flashMessage && <div className="flash-message">{flashMessage}</div>}
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/nosotros" element={<ValuesView />} />
          <Route path="/servicios" element={<ServicesView />} />
        </Routes>
        <Form handleFlashMessage={handleFlashMessage} />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

