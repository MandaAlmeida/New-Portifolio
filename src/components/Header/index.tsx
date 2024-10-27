import { Container, Logo, NavLink } from "./styles";
import eu from "@/assets/eu.png"
import { MenuHeader } from "../MenuHeader";


export function Header() {
    return (
        <Container>
            <Logo src={eu} alt="logo da pagina " />
            <MenuHeader />
        </Container>
    )
}