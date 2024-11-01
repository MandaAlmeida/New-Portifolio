import { CardLanguage } from "@/components/CardLanguage";
import { Container, ImageProject, ListLanguage, TitleProject } from "./styles";
import ImageHome from "@/assets/ImageHome.png"
import { StaticImageData } from "next/image";

export type CardProjetType = {
    id: string;
    image: StaticImageData;
    title: string;
    text: string[];
}

export function CardProject({ image, title, text }: CardProjetType) {
    return (
        <Container>
            <ImageProject src={image} alt="imagem do projeto" />
            <TitleProject>{title}</TitleProject>
            <ListLanguage>
                {text.map((text) => <CardLanguage key={text.length} text={text} />)}
            </ListLanguage>
        </Container>
    )
}