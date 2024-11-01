import { ListProject } from "@/components/ListProject";
import { Container, Title } from "./styles";
import ImageHome from "@/assets/ImageHome.png"

export default function Home() {
    const items = [
        { id: '1', title: 'Item 1', image: ImageHome, text: ["NextJs", "JavaScript"] },
        { id: '2', title: 'Item 2', image: ImageHome, text: ["NextJs", "JavaScript"] },
        { id: '3', title: 'Item 3', image: ImageHome, text: ["NextJs", "JavaScript"] },
        { id: '4', title: 'Item 4', image: ImageHome, text: ["NextJs", "JavaScript"] },
        { id: '5', title: 'Item 5', image: ImageHome, text: ["NextJs", "JavaScript"] },
        { id: '6', title: 'Item 6', image: ImageHome, text: ["NextJs", "JavaScript"] },
    ];

    return (
        <Container>
            <Title>Projetos</Title>
            <ListProject items={items} />
        </Container>
    )
}