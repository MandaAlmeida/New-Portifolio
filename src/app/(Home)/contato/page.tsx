import { SocialMedia } from "@/components/SocialMedia";
import { Container, Title, Text, Section } from "./styles";
import { Email } from "@/components/Email";

export default function Contact() {
    return (
        <Container>
            <Title>Contato</Title>
            <Text>Entre em contato comigo através das redes sociais ou envie-me um e-mail.</Text>
            <SocialMedia type="SECONDARY" />

            <Email />
        </Container>
    )
}