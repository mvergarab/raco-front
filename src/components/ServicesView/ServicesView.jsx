import React from 'react';
import SectionContainer from '../Shared/Sections/SectionContainer';
import SectionTitle from '../Shared/Sections/SectionTitle';
import SectionDescription from '../Shared/Sections/SectionDescription';
import Separator from '../Shared/Sections/Separator';
import texture from '../../images/textures/texture_black.png';
import textureWhite from '../../images/textures/texture_white.png';

import federation from '../../images/brands/raco_federation.png';
import mkt from '../../images/brands/raco_mkt.png';
import events from '../../images/brands/raco_events.png';
import consulting from '../../images/brands/raco_consulting.png';
import athletes from '../../images/brands/raco_athletes.png';
import global from '../../images/brands/raco_global.png';

import federationPhoto from '../../images/services/services_fed.jpg';
import mktPhoto from '../../images/services/services_mkt.jpg';
import eventsPhoto from '../../images/services/services_events.jpg';
import consultingPhoto from '../../images/services/services_consulting.jpg';
import athletesPhoto from '../../images/services/services_deportistas.jpg';
import globalPhoto from '../../images/services/services_global.jpg';

const ServicesView = () => {
  const bgStyle = { backgroundImage: `url(${texture})`, backgroundSize: '1450px' };
  const bgWhiteStyle = { backgroundImage: `url(${textureWhite})`, backgroundSize: '1450px' };

  return (
    <div className="values-container">
      <SectionContainer style={bgStyle}>
        <SectionTitle title="ADMINISTRACIÓN Y CONSULTORÍA FEDERATIVA" isLeftAligned={false} />
        <SectionDescription 
          photo={federationPhoto} 
          descriptionPoints={[
            "01. ADMINISTRACIÓN Y GESTIÓN DE LOS RECURSOS",
            "02. GESTIÓN DE PROYECTOS",
            "03. BACK OFFICE CORPORATIVO"
          ]}
          isLeftAligned={false}
        />
      </SectionContainer>

      <Separator position="up" />

      <SectionContainer style={bgWhiteStyle}>
        <SectionTitle title="GESTIÓN DE INVERSIÓN PÚBLICA Y PLANES DE PATROCINIO" isLeftAligned={true} />
        <SectionDescription 
          photo={mktPhoto} 
          descriptionPoints={[
            "01. NUEVAS VÍAS DE FINANCIAMIENTO PÚBLICO",
            "02. ACUERDOS DE PATROCINIO",
            "03. RETORNOS A LA INVERSIÓN"
          ]}
          isLeftAligned={true}
        />
      </SectionContainer>

      <Separator position="down" />

      <SectionContainer style={bgStyle}>
        <SectionTitle title="PRODUCCIÓN DE EVENTOS" isLeftAligned={false} />
        <SectionDescription 
          photo={eventsPhoto} 
          descriptionPoints={[
            "01. EXPERIENCIA Y EFICIENCIA",
            "02. CREATIVIDAD Y PERSONALIZACIÓN",
            "03. COMUNICACIÓN Y DIFUSIÓN"
          ]}
          isLeftAligned={false}
        />
      </SectionContainer>

      <Separator position="up" />

      <SectionContainer style={bgWhiteStyle}>
        <SectionTitle title="MANAGEMENT Y REPRESENTACIÓN DE DEPORTISTAS" isLeftAligned={true} />
        <SectionDescription 
          photo={athletesPhoto} 
          descriptionPoints={[
            "01. NUEVAS OPORTUNIDADES COMERCIALES",
            "02. ASESORAMIENTO ESTRATÉGICO",
            "03. SOCIAL MEDIA MANAGEMENT"
          ]}
          isLeftAligned={true}
        />
      </SectionContainer>

      <Separator position="down" />

      <SectionContainer style={bgStyle}>
        <SectionTitle title="ESTRATEGIAS DE POSICIONAMIENTO" isLeftAligned={false} />
        <SectionDescription 
          photo={consultingPhoto} 
          descriptionPoints={[
            "01. PARTNERSHIPS ESTRATÉGICOS",
            "02. ESTRATEGIAS DE POSICIONAMIENTO"
          ]}
          isLeftAligned={false}
        />
      </SectionContainer>

      <Separator position="up" />

      <SectionContainer style={bgWhiteStyle}>
        <SectionTitle title="EXPANSIÓN INTERNACIONAL DEL DEPORTE" isLeftAligned={true} />
        <SectionDescription 
          photo={globalPhoto} 
          descriptionPoints={[
            "01. ANÁLISIS DE MERCADO GLOBAL",
            "02. ESTRATEGIAS DE EXPANSIÓN GLOBAL"
          ]}
          isLeftAligned={true}
        />
      </SectionContainer>

      <Separator position="down" />
    </div>
  );
};

export default ServicesView;






