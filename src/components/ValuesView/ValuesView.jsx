import React from 'react';
import SectionContainer from '../Shared/Sections/SectionContainer';
import SectionTitle from '../Shared/Sections/SectionTitle';
import SectionDescription from '../Shared/Sections/SectionDescription';
import Separator from '../Shared/Sections/Separator';
import texture from '../../images/textures/texture_black.png';
import textureWhite from '../../images/textures/texture_white.png';
import adaptabilidad from '../../images/values/adaptabilidad.jpg';
import comunidad from '../../images/values/comunidad.jpg';
import oportunidad from '../../images/values/oportunidad.jpg';
import responsabilidad from '../../images/values/responsabilidad.jpg';

const ValuesView = () => {
  const bgStyle = { backgroundImage: `url(${texture})`, backgroundSize: '1450px' };
  const bgWhiteStyle = { backgroundImage: `url(${textureWhite})`, backgroundSize: '1450px' };

  return (
    <div className="values-container">
      <div className="value-title-container">
        <h1>NUESTROS VALORES</h1>
      </div>
      <SectionContainer style={bgStyle}>
        <SectionTitle title="01. RESPONSABILIDAD" isLeftAligned={false} />
        <SectionDescription 
          photo={responsabilidad} 
          descriptionPoints={[
            "En raco impulsamos el éxito con estrategias innovadoras alcanzando metas medibles y superando expectativas en cada desafío propuesto."
          ]}
          isLeftAligned={false}
        />
      </SectionContainer>

      <Separator position="up" />

      <SectionContainer style={bgWhiteStyle}>
        <SectionTitle title="02. COMUNIDAD" isLeftAligned={true} />
        <SectionDescription 
          photo={comunidad} 
          descriptionPoints={[
            "Construimos conexiones auténticas, fomentando las relaciones sólidas entre deportistas, marcas y seguidores para fortalecer la comunidad deportiva."
          ]}
          isLeftAligned={true}
        />
      </SectionContainer>

      <Separator position="down" />

      <SectionContainer style={bgStyle}>
        <SectionTitle title="03. ADAPTABILIDAD" isLeftAligned={false} />
        <SectionDescription 
          photo={adaptabilidad} 
          descriptionPoints={[
            "Nos destacamos por nuestra flexibilidad y capacidad de ajustarnos a cualquier desafío, aprovechando cambios para evolucionar constantemente."
          ]}
          isLeftAligned={false}
        />
      </SectionContainer>

      <Separator position="up" />

      <SectionContainer style={bgWhiteStyle}>
        <SectionTitle title="04. OPORTUNIDADES" isLeftAligned={true} />
        <SectionDescription 
          photo={oportunidad} 
          descriptionPoints={[
            "Identificamos y capitalizamos espacios para el crecimiento y la excelencia hacia nuevas oportunidades de negocios en el mundo del deporte."
          ]}
          isLeftAligned={true}
        />
      </SectionContainer>

      <Separator position="down" />
    </div>
  );
};

export default ValuesView;

