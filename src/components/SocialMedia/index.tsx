import { Container, List, Logo } from "./styles";
import Link from "next/link"

import github from "@/assets/github.png"
import linkedin from "@/assets/linkedin.png"
import Whatsapp from "@/assets/Whatsapp.png"
import Instagram from "@/assets/instagram.png"

export function SocialMedia() {
    return (
        <Container>
            <List>
                <Link href="#"><Logo src={github} alt="logo do Github" /></Link>
            </List>
            <List>
                <Link href="#"><Logo src={linkedin} alt="logo do Linkedin" /></Link>
            </List>
            <List>
                <Link href="#"><Logo src={Whatsapp} alt="logo do Whatsapp" /></Link>
            </List>
            <List>
                <Link href="#"><Logo src={Instagram} alt="logo do Instagram" /></Link>
            </List>
        </Container>
    )
}