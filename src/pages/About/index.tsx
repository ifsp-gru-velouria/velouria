import { FC, ReactElement } from 'react';

import { RootLayout } from '../../components/Layout';

import { Card } from './Card';

interface CardData {
  description: string;
  headline: string;
  name: string;
}

const data: CardData[] = [
  {
    description: 'Utilizando nossa força em análise de dados e proatividade multidisciplinar, a startup realizará consultorias técnicas para identificar processos ineficientes em organizações sociais e pequenos empreendimentos. O objetivo é desenhar arquiteturas de software criativas que transformem essas dores em ecossistemas digitais escaláveis. ',
    headline: 'Diagnóstico técnico para identificar gargalos operacionais e desenhar estratégias de transformação digital personalizadas',
    name: 'Consultoria',
  },
  {
    description: 'A Velouria promoverá a transferência de conhecimento técnico para a comunidade do entorno do Câmpus Guarulhos, com foco especial em instituições de ensino público e pequenos empreendedores locais. O objetivo é democratizar o acesso a ferramentas digitais que otimizem o dia a dia desses grupos. ',
    headline: 'Workshops e treinamentos práticos de ferramentas digitais',
    name: 'Capacitação',
  },
  {
    description: 'Apoio na criação de interfaces e sistemas de controle que conectem hardware e software. Implementaremos algoritmos e sistemas personalizados que resolvam gargalos operacionais em cadeias produtivas, transformando dados brutos em informações estratégicas para a tomada de decisão técnica.',
    headline: 'Aplicação de conhecimento em hardware e software para resolver desafios',
    name: 'Projetos de engenharia',
  },
  {
    description: 'Prestação de serviços de configuração de redes, segurança da informação (Prevenção) e manutenção de sistemas já existentes, garantindo que a tecnologia seja um facilitador, e não um obstáculo, para o trabalho social.',
    headline: 'Desenvolvimento de sistemas sob medida',
    name: 'Prestação de serviços',
  }
];

const About: FC = (): ReactElement => {
  return (
    <RootLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1rem' }}>
      <h3>Quem Somos</h3>

      <p>A Velouria é uma startup acadêmica criada como parte do projeto de Curricularização da Extensão do IFSP Câmpus Guarulhos. Formada por estudantes de Engenharia da Computação, nossa iniciativa busca aplicar o conhecimento técnico da universidade para resolver problemas reais da comunidade local. </p>

      <p>Como um projeto de extensão, nossa missão é promover a troca de conhecimento entre o instituto e a sociedade, oferecendo serviços que auxiliem no desenvolvimento tecnológico de instituições e pequenos negócios da região.</p>

      <p>As ações de extensão são a ponte que conecta o conhecimento gerado dentro do IFSP Câmpus Guarulhos às necessidades da comunidade externa. No contexto da Velouria, essas ações transformam o aprendizado acadêmico de engenharia em soluções práticas para quem precisa de tecnologia, mas não tem acesso fácil a ela. Elas são:</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h3>Ações de Extensão</h3>

      {data.map((card: CardData, index: number) => (
        <Card description={card.description} headline={card.headline} name={card.name} />
      ))}
      </div>
    </RootLayout>
  );
};

export default About;
