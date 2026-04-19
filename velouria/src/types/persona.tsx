export interface Persona {
  bio: string;
  headline: string;
  image: string;
  name: string;
}

export const fetchPersonas = (): Persona[] => {
  return [
{
    name: "Natália",
    headline: "Estagiária",
    image: "natalia.png",
    bio: "Sou estudante de Engenharia da Computação e possuo interesse em desenvolvimento backend, análise de dados e infraestrutura em nuvem. Gosto de trabalhar com automação de processos, utilizando linguagens como C#/.NET e Python, além de orquestrar serviços na AWS. No projeto da startup, atuo como desenvolvedor do sistema, sendo responsável pela criação da lógica da aplicação e pelo gerenciamento de toda a infraestrutura de nuvem."
  },
  {
    name: "Fernanda",
    headline: "Bolsista",
    image: "fernanda.png",
    bio: "Sou estudante de Engenharia da Computação com perfil analítico e foco em Desenvolvimento de Sistemas. Atuo de forma proativa na concepção de soluções tecnológicas, unindo o raciocínio lógico para a resolução de problemas complexos à capacidade de antecipação de falhas e gestão de riscos em projetos de software."
  },
  {
    name: "Renan",
    headline: "Estudante",
    image: "renan.png",
    bio: "Sou estudante de engenharia da computação. Atuo pautado pela execução e entrega de resultados tangíveis, priorizando a funcionalidade e a eficiência em cada projeto"
  },
  {
    name: "Gisele",
    headline: "Data science intern",
    image: "gisele.png",
    bio: "Data science intern"
  },
  {
    name: "Samuel",
    headline: "Estagiário de P&D na Nanocomm S.A.",
    image: "samuel.png",
    bio: "Estagiário de P&D na Nanocomm S.A."
  }
  ];
};
