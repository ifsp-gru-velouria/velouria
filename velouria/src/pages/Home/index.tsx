import { FC, ReactElement } from 'react';

import { RootLayout } from '../../components/Layout';

import { PersonaList } from './Persona';

import './index.css';

const Home: FC = (): ReactElement => {
  return (
    <RootLayout>
     <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem'  }}>
      <div>
        <figure className='hero__container'>
          <img className='hero__image' src='./assets/img/hero.png' alt='foto marota'/>
          <figcaption className='hero__caption'>Membros (da esquerda para a direita) - Samuel, Natália, Gisele, Renan e Fernanda</figcaption>
        </figure>
      </div>

      <div>
      <h3>Missão</h3>
      <p>Desenvolver soluções de software personalizadas que resolvam gargalos operacionais complexos,
entregando ferramentas digitais que capacitem nossos clientes a superar desafios de mercado com
eficiência.</p>

      <h3>Visão</h3>
      <p>Ser referência em desenvolvimento ágil e arquitetura de software criativa, transformando
problemas de negócios em ecossistemas digitais escaláveis e de alto desempenho.</p>

      <h3>Valores</h3>
      <ul>
        <li><p>Inovação Centrada no Problema: Priorizar a criação de códigos e arquiteturas que tragam respostas
reais para as dores do cliente.</p></li>
        <li><p>Agilidade e Adaptabilidade: Responder rapidamente às mudanças e necessidades dos usuários,
utilizando metodologias que favoreçam a entrega contínua</p></li>
        <li><p>Co-criação: Trabalhar lado a lado com a comunidade ou cliente para construir a solução ideal.</p></li>
        <li><p>Prevenção: Antecipar vulnerabilidades e riscos antes que se tornem problemas.</p></li>
      </ul>
      </div>
      
      <div>
      <h3>Serviços oferecidos</h3>
      <ul>
        <li>Desenvolvimento Sob Medida: Criação de softwares únicos, aplicativos mobile e sistemas web personalizados.</li>
        <li>Consultoria e Prototipagem: Auxílio na validação de ideias, análise de mercado e planejamento técnico antes do desenvolvimento.</li>
      </ul>
      </div>

      <div>
      <h3>Quem é quem?</h3>
      <p>Clique em <strong><em>ver mais</em></strong> para conhecer um pouco mais nossa equipe.</p>
      <div>
        <PersonaList />
      </div>
      </div>
      
      <div>
      <h3>Venha nos visitar</h3>
      <p>Gostaria de marcar uma visita? Entre em contato e nos encontre no endereço abaixo.</p>
      <div>
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.5997156013464!2d-46.53996632372854!3d-23.438822657103568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef51fbe5f8681%3A0x1f8cf929993dc97!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20de%20S%C3%A3o%20Paulo%20IFSP%20Guarulhos!5e0!3m2!1spt-BR!2sbr!4v1776446514027!5m2!1spt-BR!2sbr" width="600" height="450" />
      </div>
      </div>
      </div>
    </RootLayout>
  );
};

export default Home;
