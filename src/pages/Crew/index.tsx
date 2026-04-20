import { FC, ReactElement } from 'react';

import { RootLayout } from '../../components/Layout';

import { type Persona, fetchPersonas } from '../../types/persona';

import './index.css';

interface Props {
  persona: Persona;
}

const CrewCard: FC<Props> = ({ persona }): ReactElement => {
  return (
   <div className='crew-card-container'>
     <img src={`./assets/img/${persona.image}`} alt={persona.name}/>
       <div>
         <div>
        <h3>{persona.name}</h3>
        <span>{persona.headline}</span>
        </div>
        <p>{persona.bio}</p>
     </div>
    </div>
  );
};

const Crew: FC = (): ReactElement => {
  const personas: Persona[] = fetchPersonas();

  return (
    <RootLayout>
      <h3>Equipe</h3>

      <p>A equipe da Velouria é formada por estudantes de Engenharia da Computação do IFSP Câmpus Guarulhos, unidos por um perfil multidisciplinar e  orientação a resultados. Nosso grupo se destaca pela proatividade e pela capacidade de autodidatismo, características que nos permitem dominar novas tecnologias rapidamente para oferecer soluções sempre atualizadas.
Somamos nosso conhecimento técnico à visão de quem vivencia o problema, garantindo que cada solução seja construída com empatia, dinamismo e foco total na entrega de valor e eficiência operacional.</p>

      <div className='crew'>
      { personas.map((persona: Persona) => (
        <CrewCard persona={persona} />
      ))}
      </div>
    </RootLayout>
  );
};

export default Crew;
