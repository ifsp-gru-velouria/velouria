import { FC, ReactElement } from 'react';

import { Link } from '../../components/Link';

const NotFound: FC = (): ReactElement => {
  return (
    <div>
      <div>Ops! Página não encontrada</div>
      <Link href='/'>Voltar</Link>
    </div>
  );
};

export default NotFound;
