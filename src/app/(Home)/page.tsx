import { CardProject } from "@/components/CardProject";
import { Container, ImageMain, Title, Text, ContainerText, SectionInitial, SectionProject, ListProject, TextProject, ButtonProject } from "./styles";
import ImageHome from "@/assets/ImageHome.png"


export default function Home() {
    return (
        <Container>
            <SectionInitial>
                <ImageMain src={ImageHome} alt="imagem de uma menina programando em seu computador" />
                <ContainerText>
                    <Title>&lt;coder&gt;</Title>
                    <Text>Desenvolvedor front-end que transforma designs em interfaces dinâmicas, intuitivas e responsivas, com código limpo e performance otimizada.</Text>
                </ContainerText>
            </SectionInitial>
            <SectionProject>
                <TextProject>Principais Projetos</TextProject>
                <ListProject>
                    <CardProject />
                    <CardProject />
                    <CardProject />
                </ListProject>
                <ButtonProject>Ver mais</ButtonProject>
            </SectionProject>
        </Container>
    )
}