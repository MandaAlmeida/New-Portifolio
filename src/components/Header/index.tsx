import { Container, Logo } from "./styles";
import logo from "@/assets/logo.png"
import { MenuHeader } from "../MenuHeader";

export function Header() {
    return (
        <Container>
            <Logo src={logo} alt="logo da pagina " />
            <MenuHeader />
        </Container>
    )
}