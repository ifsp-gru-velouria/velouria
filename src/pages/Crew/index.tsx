import styled from 'styled-components';

import { RootLayout } from '../../components/Layout';

import { type Persona, fetchPersonas } from '../../types/persona';

const CrewCard = ({ persona }: { persona: Persona }) => {
    return (
        <StyledCardContainer>
        <StyledImage src={`./assets/img/${persona.image}`} alt={persona.name} />
        <div>
        <div>
        <h3>{persona.name}</h3>
        <span>{persona.headline}</span>
        </div>
        <StyledParagraph>{persona.bio}</StyledParagraph>
        </div>
        </StyledCardContainer>
    );
};

export default function Page() {
    const personas: Persona[] = fetchPersonas();

    return (
        <RootLayout>
        <h3>Equipe</h3>

        <p>A equipe da Velouria é formada por estudantes de Engenharia da Computação do IFSP Câmpus Guarulhos, unidos por um perfil multidisciplinar e  orientação a resultados. Nosso grupo se destaca pela proatividade e pela capacidade de autodidatismo, características que nos permitem dominar novas tecnologias rapidamente para oferecer soluções sempre atualizadas.
            Somamos nosso conhecimento técnico à visão de quem vivencia o problema, garantindo que cada solução seja construída com empatia, dinamismo e foco total na entrega de valor e eficiência operacional.</p>

        <StyledList>
        { personas.map((persona: Persona, index: number) => ( <CrewCard key={index} persona={persona} /> ))}
        </StyledList>
        </RootLayout>
    );
}

const StyledCardContainer = styled.div`
    align-items: start;
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const StyledImage = styled.img`
  width: 200px;
`;

const StyledParagraph = styled.p`
  margin-top: 1rem;
  text-align: justify;
`;

const StyledList = styled.div`
    padding: 1rem;
`;
