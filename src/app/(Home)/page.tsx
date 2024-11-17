import { ListProject } from "@/components/ListProject";
import { GrupProjects } from "@/dados/projects";
import Image from "@/assets/image.png";

import { Container, ImageMain, Title, Text, ContainerText, SectionInitial, SectionProject, TextProject, ButtonProject } from "./styles";


export default function Home() {
    const maxItems = 3;
    const limitedItems = GrupProjects.slice(0, maxItems);

    return (
        <Container>
            <SectionInitial>
                <ImageMain src={Image} alt="imagem de uma menina programando em seu computador" />
                <ContainerText>
                    <Title>&lt;coder&gt;</Title>
                    <Text>Desenvolvedor front-end que transforma designs em interfaces dinâmicas, intuitivas e responsivas, com código limpo e performance otimizada.</Text>
                </ContainerText>
            </SectionInitial>
            <SectionProject>
                <TextProject>Principais Projetos</TextProject>
                <ListProject items={limitedItems} />
                <ButtonProject href={"/projetos"}>Ver mais</ButtonProject>
            </SectionProject>
        </Container>
    )
}