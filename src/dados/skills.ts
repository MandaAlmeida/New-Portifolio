import { StaticImageData } from "next/image"

import Git from "@/assets/skills/gitLogo.png"
import javascript from "@/assets/skills/javascriptLogo.png"
import nextjs from "@/assets/skills/nextjsLogo.png"
import node from "@/assets/skills/nodeLogo.png"
import react from "@/assets/skills/reactLogo.png"
import sass from "@/assets/skills/sassLogo.png"
import Styled from "@/assets/skills/StyledLogo.png"
import tailwind from "@/assets/skills/tailwindLogo.png"
import typescript from "@/assets/skills/typescriptLogo.png"

type SkillType = {
    key: string;
    text: string;
    img: StaticImageData;
};

export const GrupSkills: SkillType[] = [
    {
        key: "1",
        text: 'Git',
        img: Git
    },
    {
        key: "2",
        text: 'JavaScript',
        img: javascript
    },
    {
        key: "3",
        text: 'Next.js',
        img: nextjs
    },
    {
        key: "4",
        text: 'Node.js',
        img: node
    },
    {
        key: "5",
        text: 'React',
        img: react
    },
    {
        key: "6",
        text: 'Sass',
        img: sass
    },
    {
        key: "7",
        text: 'Styled Components',
        img: Styled
    },
    {
        key: "8",
        text: 'Tailwind CSS',
        img: tailwind
    },
    {
        key: "9",
        text: 'TypeScript',
        img: typescript
    }
];