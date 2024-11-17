import { useState } from "react";
import { NavLink, Icon, ButtonMenu, CloseMenu, IconClose } from "./styles";
import { CreateLink } from "@/components/CreateLink";

export function MenuHeader() {
    const [activeMenu, setActiveMenu] = useState(false)

    function handleMenuMobile() {
        setActiveMenu(!activeMenu)
    }


    return (
        <>
            <ButtonMenu onClick={handleMenuMobile}><Icon /></ButtonMenu>
            <NavLink $isActiveMenu={activeMenu}>
                <CloseMenu onClick={handleMenuMobile}><IconClose $isActiveMenu={activeMenu} /></CloseMenu>
                <CreateLink text="Inicio" href="/" />
                <CreateLink text="Sobre mim" href="/sobremim" />
                <CreateLink text="Projetos" href="/projetos" />
                <CreateLink text="Contato" href="/contato" />
            </NavLink>
        </>
    )
}