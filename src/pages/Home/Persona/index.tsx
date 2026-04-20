import { FC, ReactElement } from 'react';

import { Link } from '../../../components/Link';

import { type Persona, fetchPersonas } from '../../../types/persona';

import './index.css';

interface Properties {
  headline: string;
  image: string;
  name: string;
}

export const PersonaCard: FC<Properties> = ({ headline, image, name }): ReactElement => {
  return (
    <div className='persona'>
      <img src={`./assets/img/${image}`} alt={name} />
      <span>{name}</span>
      <p>{headline}</p>
      <Link className='persona__link' href='#/equipe'>Ver mais</Link>
    </div>
  );
};

export const PersonaList = () => {
  const personas: Persona[] = fetchPersonas();

  return (
    <div className='container'>
      {personas.map((persona: Persona, index: number) => (
        <PersonaCard headline={persona.headline} image={persona.image} key={index} name={persona.name} />
      ))}
    </div>
  );
};
