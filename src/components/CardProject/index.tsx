import { CardLanguage } from "@/components/CardLanguage";
import { Button, Container, Section, ImageProject, ListLanguage, TitleProject } from "./styles";
import { StaticImageData } from "next/image";


type Language = {
    id: number;
    name: string;
}

export type CardProjetType = {
    key: string;
    img: string | StaticImageData;
    title: string;
    language: Language[];
    link: string;
    gitHub: string;
}



export function CardProject({ img, title, language, link, gitHub }: CardProjetType) {
    return (
        <Container>
            <ImageProject src={img} alt="imagem do projeto" />
            <TitleProject>{title}</TitleProject>
            <ListLanguage>
                {language.map((text) => <CardLanguage key={text.id} text={text.name} />)}
            </ListLanguage>
            <Section>

                <Button type="PRIMARY" href={gitHub} target="_blank" rel="noopener noreferrer">GitHub
                </Button>
                <Button type="SECONDARY" href={link} target="_blank" rel="noopener noreferrer">Ver projeto
                </Button>
            </Section>
        </Container>
    )
}