import styled from 'styled-components';

import { RootLayout } from '../../components/Layout';

import Card from './Card';

interface Item {
  items: string[];
  title: string;
}

const items: Item[] = [
  { title: "Forças", items: [
    "Proatividade e multidisciplinaridade",
    "Autodidatismo",
    "Análise de dados",
    "Conhecimento técnico",
  ] },
  { title: "Fraquezas", items: [
    "Gestão de tempo",
    "Ansiedade",
    "Delegar posições",
  ] },
  { title: "Oportunidades", items: [
    "Pesquisa com instituições",
    "Cursos",
    "Demandas",
  ] },
  { title: "Ameaças", items: [
    "Tempo",
    "Sobrecarga",
    "Custos",
  ], },
];

export default function Page() {
  return (
    <RootLayout>
      <StyledTitle>Análise S.W.O.T</StyledTitle>

      <StyledContainer>
      {items.map((item: Item, index: number) => (
        <Card key={index} items={item.items} title={item.title} />
      ))}
      </StyledContainer>
      
    </RootLayout>
  );
}

const StyledTitle = styled.h1`
  text-align: center; 
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

`;
