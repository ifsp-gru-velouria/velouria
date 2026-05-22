import { FC, ReactElement } from 'react';

import { RootLayout } from '../../components/Layout';

import { Card } from './Card';

import './index.css';

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

const SWOT: FC = (): ReactElement => {
  return (
    <RootLayout>
      <h1 className="title">Análise S.W.O.T</h1>

      <div className="items__container">
      {items.map((item: Item, index: number) => (
        <Card items={item.items} title={item.title} />
      ))}
      </div>
      
    </RootLayout>
  );
};

export default SWOT;
