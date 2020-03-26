export function loadLists() {
  return [
    {
      title: "Tarefas",
      creatable: true,
      cards: [
        {
          id: 1,
          content: "Estudar módulo 01 de NodeJS",
          labels: ["#054baf"],
          user: "https://avatars3.githubusercontent.com/u/54491980?v=4"
        },
        {
          id: 2,
          content: "Botar pra jogo nas ranqueadas de Humberto",
          labels: ["#054baf"],
          user: "https://avatars3.githubusercontent.com/u/54491980?v=4"
        },
        {
          id: 3,
          content: "Estudar módulo 03 de React Native",
          labels: ["#054baf"],
          user: "https://avatars3.githubusercontent.com/u/54491980?v=4"
        },
        {
          id: 4,
          content: 'Botar pra jogo"',
          labels: ["#054baf"],
          user: "https://avatars3.githubusercontent.com/u/54491980?v=4"
        },
        {
          id: 5,
          content: "Fazer deploy ReactJS",
          labels: ["#054baf"],
          user: "https://avatars3.githubusercontent.com/u/54491980?v=4"
        }
      ]
    },
    {
      title: "Fazendo",
      creatable: false,
      cards: [
        {
          id: 6,
          content: "Estudando Styled-Components",
          labels: ["#d0680f"],
          user: "https://avatars3.githubusercontent.com/u/54491980?v=4"
        }
      ]
    },
    {
      title: "Erros para ajustar",
      creatable: false,
      cards: [
        {
          id: 14,
          content: "Falha na autenticação do login",
          labels: ["#de0101"],
          user: "https://avatars3.githubusercontent.com/u/54491980?v=4"
        }
      ]
    },

    {
      title: "Aplicações em fase de Homologação",
      creatable: false,
      cards: [
        {
          id: 15,
          content: "Falha na autenticação do login",
          labels: ["#20a5bb"],
          user: "https://avatars3.githubusercontent.com/u/54491980?v=4"
        }
      ]
    },

    {
      title: "Pausado",
      creatable: false,
      cards: [
        {
          id: 7,
          content: "Trolando as raqueadas",
          labels: ["#5b0986"],
          user: "https://avatars3.githubusercontent.com/u/54491980?v=4"
        },
        {
          id: 8,
          content: "Parei de dormir",
          labels: ["#5b0986"],
          user: "https://avatars3.githubusercontent.com/u/54491980?v=4"
        },
        {
          id: 9,
          content: "Ajustes no ST1254 P-Sanar",
          labels: ["#5b0986"]
        }
      ]
    },
    {
      title: "Concluído",
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: "Estressar Humberto",
          labels: ["#16a71b"]
        },
        {
          id: 12,
          content: "Entrar na call com voz de Robô",
          labels: ["#16a71b"]
        },
        {
          id: 13,
          content:
            'Feito "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: ["#16a71b"]
        }
      ]
    }
  ];
}
