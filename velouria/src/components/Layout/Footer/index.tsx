import './index.css';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <span>&copy; {year} Velouria. Todos os direitos reservados.</span>
    </footer>
  );
};
