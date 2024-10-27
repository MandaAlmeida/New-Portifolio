import { CardLanguage } from "@/components/CardLanguage";
import { Container, ImageProject, ListLanguage, TitleProject } from "./styles";
import ImageHome from "@/assets/ImageHome.png"

export function CardProject() {
    return (
        <Container>
            <ImageProject src={ImageHome} alt="imagem do projeto" />
            <TitleProject>projeto</TitleProject>
            <ListLanguage>
                <CardLanguage text="React" />
                <CardLanguage text="NextJs" />
                <CardLanguage text="Java Script" />
            </ListLanguage>
        </Container>
    )
}