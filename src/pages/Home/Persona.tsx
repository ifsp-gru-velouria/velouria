import styled from 'styled-components';

import Link from '../../components/Link';

import { type Persona, fetchPersonas } from '../../types/persona';

interface Properties {
    headline: string;
    image: string;
    name: string;
}

function PersonaCard({ headline, image, name }: Properties) {
    return (
        <Card>
        <StyledImage src={`./assets/img/${image}`} alt={name} />
        <StyledPersonaName>{name}</StyledPersonaName>
        <StyledParagraph>{headline}</StyledParagraph>
        <StyledLink href='#/equipe'>Ver mais</StyledLink>
        </Card>
    );
}

export default function PersonaList() {
    const personas: Persona[] = fetchPersonas();

    return (
        <StyledContainer>
        {personas.map((persona: Persona, index: number) => (
            <PersonaCard headline={persona.headline} image={persona.image} key={index} name={persona.name} />
        ))}
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
     align-items: center;
 display: flex;
 gap: 12;
 justify-content: space-around;
 flex-wrap: wrap;

`;

const Card = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 280px;
`;

const StyledImage = styled.img`
    border-radius: 100%;
    width: 160px;
`;

const StyledLink = styled(Link)`
    color: white;
    font-size: .8rem;
    font-weight: bold;
`;

const StyledParagraph = styled.p`
    color: #BFACB5;
  text-align: center;
  text-overflow: ellipsis;

`;

const StyledPersonaName = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
`;
