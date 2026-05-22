import { FC, ReactElement } from 'react';

import './index.css';

interface Properties {
  items: string[];
  title: string;
}

export const Card: FC<Properties> = ({ items, title }): ReactElement => {
  return (
    <div className="card__container">
      <h1 className="card__title">{title}</h1>

      <ul className="card__list">
      {items.map((item: string, index: number) => (
        <li key={index}>{item}</li>
      ))}
      </ul>
    </div>
  );
};
