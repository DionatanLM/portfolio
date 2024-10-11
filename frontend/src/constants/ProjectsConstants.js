import { images } from "../../next.config";

export const projects = [
  {
    id: 1,
    name: "Fox Delivery",
    slug: "fox-delivery",
    description:
      "A Fox Delivery visa fornecer aos restaurantes a facilidade de obter motoboys, a todo momento. A plataforma vai direcionar os entregadores que estiverem mais próximos para fazer a sua entrega com agilidade.",
    image: "/img/projects/fox.png",
    images: ['https://github.com/DionatanLM/FoxDelivery/blob/main/src/bannerFox.jpg?raw=true'],
    urlGithub: "https://github.com/DionatanLM/foxdelivery",
    description_all: [' O projeto Fox Delivery irá fornecer a restaurantes 🍽️ a facilidade de obter motoboys, a todo momento. A plataforma vai direcionar os entregadores que estiverem mais próximos para fazer a sua entrega com agilidade.',
      '🛵 Para os motoboys será desenvolvido uma aplicativo mobile onde será possível trabalhar sendo um entregador da Fox Delivery. No aplicativo será possível aceitar e recusar corridas e ver seus ganhos durante o mês'
    ],
    technologies: [
      'Javascript',
      'TypeScript',
      'ReactJS',
      'React Native',
      'Expo',
      'SCSS (Sass)',
      'Bootstrap',
      'NextJS',
      'NestJS',
      'TypeORM',
      'MySQL',
      'Amazon RDS',
      'Socket.io',
      'GitHub',
    ],
  },
  {
    id: 2,
    slug: "balna-sc",
    name: "Balna SC",
    description:
      "🏆 2° Colocação Hackaton 2022.2 CESUSC. \n \n O projeto visa fornecer fácil acesso a balneabilidade das praias do estado de Santa Catarina.",
    image: "/img/projects/balna.png",
    images: ['https://github.com/gabrielhz/BalnaSC/blob/master/img/Balnasc.png?raw=true', 'https://github.com/gabrielhz/BalnaSC/blob/master/screenStart.PNG?raw=true', 'https://github.com/gabrielhz/BalnaSC/blob/master/screenMap.PNG?raw=true'],
    urlGithub: "https://github.com/DionatanLM/balnasc",
    description_all: [
      'O projeto visa fornecer fácil acesso a balneabilidade das praias do estado de Santa Cataria. Por meio de uma interface amigável ao usuário, será demarcado no mapa a localização da praia bem como a qualidade da água (própria ou imprópria para banho).',
      'Segundo a OMS no mundo, 6,3% das mortes ainda são causadas por doenças decorrentes da má qualidade da água. No total, são 3,5 milhões de mortes por ano no mundo que poderiam ser evitadas.',
      'O BALNASC tem como motivação a informação e prevenção de demais complicações por ingestão ou contato com uma água imprópria ao banho, visando assim uma melhora na saúde pública, e consequentemente, o descongestionamento do sistema de saúde.',
      '🏆 2° Colocação Hackaton 2022.2 CESUSC'
    ],
    technologies: [
      'JavaScript',
      'NodeJS',
      'SQLite',
      'Express',
      'GitHub',
    ],
  },
  {
    id: 3,
    slug: "food-explorer",
    name: "Food Explorer",
    description:
      "O Food Explorer é uma aplicação interativa e completa que simula a experiência de um restaurante fictício. Ele foi projetado para proporcionar uma jornada gastronômica única.",
    image: "/img/projects/foodexplorer.png",
    images: ['https://github.com/DionatanLM/FoodExplorer/blob/main/frontend/src/assets/imgPage.png?raw=true'],
    urlGithub: "https://github.com/DionatanLM/foodexplorer",
    description_all: [
      'O Food Explorer é uma aplicação interativa e completa que simula a experiência de um restaurante fictício. Ele foi projetado para proporcionar uma jornada gastronômica única, permitindo que os usuários explorem pratos deliciosos, conheçam seus detalhes, ingredientes e sabores, e até mesmo efetuem pagamentos de maneira conveniente.',
      'O projeto foi desenvolvido com o intuito de aprimorar minhas habilidades em desenvolvimento web, utilizando as tecnologias mais modernas do mercado.',
    ],
    technologies: [
      'JavaScript',
      'ReactJS',
      'Vite',
      'Styled Components',
      'React Router Dom',
      'Axios',
      'GitHub',
    ],

  },
];
