export const experienceDataSource = [
  {
    title: "Desenvolvedor Full Stack",
    company: "Sispack Software",
    companyImg: "/img/company/sispack.png",
    date: "Nov 2022 - Presente",
    description: "Atuo como Desenvolvedor Full Stack, desenvolvendo soluções completas tanto no front-end quanto no back-end, além de aplicativos móveis. Meu foco é garantir a qualidade e eficiência nas entregas, sempre buscando as melhores práticas de desenvolvimento de software. Ao longo do meu tempo na empresa, participei ativamente de mais de 7 projetos, utilizando uma ampla gama de tecnologias modernas. Alguns dos projetos que participei:",
    projects: [
      {
        name: "SINCRON",
        description: `Plataforma para gerenciamento de chamadas de enfermagem.`,
        contribution: `Desenvolvi toda a plataforma usando React e Ant Design. Implementação de controle de permissões com CASL, chamadas em tempo real via Socket.io, além de desenvolver todo o aplicativo (React Native) do paciente onde é possivel realizar pedidos.`,
        technologies: "React, React Native, Socket.io, CASL",
      },
      {
        name: "LINKAH",
        description: `Plataforma de venda de ingressos.`,
        contribution: `Responsável pelo desenvolvimento do front-end do portal e pelo fluxo de compra de ingressos, integrado com o sistema de pagamento Asaas, além de gerar os próprios ingressos.`,
        technologies: "NextJS, NestJS",
      },
      {
        name: "MAJESTIC HUB",
        description: `Hub de comunicação.`,
        contribution: `Contribuí para o desenvolvimento do portal web e desenvolvi o aplicativo móvel completo, utilizando uma abordagem offline-first com o WatermelonDB.`,
        technologies: "React Native, WatermelonDB",
      },
      {
        name: "BJJ PROTECH",
        description: `Plataforma de estudos para jiu-jitsu com vendas de cursos e planos de assinatura.`,
        contribution: `Desenvolvi o front-end, integrei a plataforma com o Leadlovers, criei a landing page e seções de depoimentos.`,
        technologies: "NextJS, NestJS",
      },
    ],
    mainTechnologies: [
      "Front-end: React, NextJS, TypeScript, Zustand, SCSS, Ant Design, Material UI, React Bootstrap.",
      "Back-end: NestJS, TypeORM, APIs RESTful.",
      "Mobile: React Native, Native Base, WatermelonDB.",
      "Outras Integrações: Asaas (meio de pagamento), AWS (S3 e RDS).",
      "Ferramentas: Jira para gestão de sprints, Git (Conventional Commits) para controle de versão.",
    ],
  },
];