import { ListProject } from "@/components/ListProject";
import { Container, ImageMain, Title, Text, ContainerText, SectionInitial, SectionProject, TextProject, ButtonProject } from "./styles";
import ImageHome from "@/assets/ImageHome.png"


export default function Home() {
    const items = [
        { id: '1', title: 'Item 1', image: ImageHome, text: ["NextJs", "JavaScript"] },
        { id: '2', title: 'Item 2', image: ImageHome, text: ["NextJs", "JavaScript"] },
        { id: '3', title: 'Item 3', image: ImageHome, text: ["NextJs", "JavaScript"] },
        { id: '4', title: 'Item 4', image: ImageHome, text: ["NextJs", "JavaScript"] },
        { id: '5', title: 'Item 5', image: ImageHome, text: ["NextJs", "JavaScript"] },
    ];
    const maxItems = 3;
    const limitedItems = items.slice(0, maxItems);
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
                <ListProject items={limitedItems} />
                <ButtonProject href={"/projetos"}>Ver mais</ButtonProject>
            </SectionProject>
        </Container>
    )
}