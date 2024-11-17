import { ListProject } from "@/components/ListProject";
import { Container, Title } from "./styles";
import { GrupProjects } from "@/dados/projects";

export default function Project() {


    return (
        <Container>
            <Title>Projetos</Title>
            <ListProject items={GrupProjects} />
        </Container>
    )
}