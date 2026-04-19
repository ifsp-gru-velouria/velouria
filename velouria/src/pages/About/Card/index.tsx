import { FC, ReactElement } from 'react';

interface Properties {
  description: string;
  headline: string;
  name: string;
}

export const Card: FC<Properties> = ({ description, name, headline }): ReactElement => {
  return (
    <div>
      <h4>{name}</h4>
      <p>{headline}</p>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};
