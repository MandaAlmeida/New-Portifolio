import { ColorTypeStyleProps, Container, LinkList, LinkTypeStyleProps, List, Logo, Text } from "./styles";

import github from "@/assets/socialMedia/github.png"
import linkedin from "@/assets/socialMedia/linkedin.png"
import Whatsapp from "@/assets/socialMedia/whatsApp.png"
import Instagram from "@/assets/socialMedia/instagram.png"

type Props = {
    type?: LinkTypeStyleProps;
    color?: ColorTypeStyleProps;
}

export function SocialMedia({ type = "PRIMARY" }: Props) {
    return (
        <Container type={type}>
            <List type={type}>
                <LinkList type={type} href="https://github.com/MandaAlmeida" target="_blank" rel="noopener noreferrer">
                    <Logo type={type} src={github} alt="logo do Github" />
                    <Text color="GITHUB" type={type}>Github</Text>
                </LinkList>
            </List>
            <List type={type}>
                <LinkList type={type} href="https://www.linkedin.com/in/amanda-almeida-bab4541ab/" target="_blank" rel="noopener noreferrer">
                    <Logo type={type} src={linkedin} alt="logo do Linkedin" />
                    <Text color="LINKEDIN" type={type}>Linkedin</Text>
                </LinkList>
            </List>
            <List type={type}>
                <LinkList type={type} href="http://api.whatsapp.com/send?1=pt_BR&phone=5531999632923" target="_blank" rel="noopener noreferrer">
                    <Logo type={type} src={Whatsapp} alt="logo do Whatsapp" />
                    <Text color="WHATSAPP" type={type}>Whatsapp</Text>
                </LinkList>
            </List>
            <List type={type}>
                <LinkList type={type} href="https://www.instagram.com/connect_dreamss/" target="_blank" rel="noopener noreferrer">
                    <Logo type={type} src={Instagram} alt="logo do Instagram" />
                    <Text type={type}>Instagram</Text>
                </LinkList>
            </List>
        </Container>
    )
}