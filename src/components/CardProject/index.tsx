import { CardLanguage } from "@/components/CardLanguage";
import { Container, ImageProject, ListLanguage, TitleProject } from "./styles";
import { StaticImageData } from "next/image";

export type CardProjetType = {
    key: string;
    img: string | StaticImageData;
    title: string;
    text: string[];
}

export function CardProject({ img, title, text }: CardProjetType) {
    return (
        <Container>
            <ImageProject src={img} alt="imagem do projeto" />
            <TitleProject>{title}</TitleProject>
            <ListLanguage>
                {text.map((text) => <CardLanguage key={text.length} text={text} />)}
            </ListLanguage>
        </Container>
    )
}