import { CardProjetType } from "@/components/CardProject";
import agenda from "@/assets/projetos/agenda.png";
import esports from "@/assets/projetos/esports.png";
import pontoTuristico from "@/assets/projetos/pontoTuristico.png";
import portfolio from "@/assets/projetos/portfolio.png";
import smartFinance from "@/assets/projetos/smartFinance.png";
import timer from "@/assets/projetos/timer.png";

export const GrupProjects: CardProjetType[] = [
    {
        key: '1',
        title: 'Ponto turistico',
        img: pontoTuristico,
        link: "https://ponto-turistico-versel.vercel.app/",
        gitHub: "https://github.com/MandaAlmeida/Ponto-turistico/tree/main",
        language: [
            { id: 1, name: "Html" },
            { id: 2, name: "Sass" },
            { id: 3, name: "JavaScript" }
        ]
    },
    {
        key: '2',
        title: 'Agenda',
        img: agenda,
        link: "https://agenda-amandaalmeida.vercel.app/",
        gitHub: "https://github.com/MandaAlmeida/Agenda",
        language: [
            { id: 1, name: "Html" },
            { id: 2, name: "Sass" },
            { id: 3, name: "JavaScript" }
        ]
    },
    {
        key: '3',
        title: 'Esports',
        img: esports,
        link: "https://nlw-web-ignite.vercel.app/",
        gitHub: "https://github.com/MandaAlmeida/NLW-Ignite-Web/tree/main",
        language: [
            { id: 1, name: "ReactJs" },
            { id: 2, name: "TypeScript" },
            { id: 3, name: "Sass" }
        ]
    },
    {
        key: '4',
        title: 'Smart Financas',
        img: smartFinance,
        link: "https://smart-financas.vercel.app/user/VMEJcPBHOeQb0B3kmzUm3FeVbVa2",
        gitHub: "https://github.com/MandaAlmeida/smart-financas",
        language: [
            { id: 1, name: "NextJs" },
            { id: 2, name: "Styled Components" },
        ]
    },
    {
        key: '5',
        title: 'Timer',
        img: timer,
        link: "https://ignite-timer-ivory-ten.vercel.app/",
        gitHub: "https://github.com/MandaAlmeida/IgniteTimer",
        language: [
            { id: 1, name: "ReactJs" },
            { id: 2, name: "Styled Components" },
        ]
    },
    {
        key: '6',
        title: 'Portfolio',
        img: portfolio,
        link: "https://new-portifolio-amber.vercel.app/",
        gitHub: "https://github.com/MandaAlmeida/New-Portifolio",
        language: [
            { id: 1, name: "NextJs" },
            { id: 2, name: "Styled Components" },
        ]
    },
];