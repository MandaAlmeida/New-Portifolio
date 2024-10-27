"use clients"
import { usePathname } from "next/navigation";
import { Container, LinkTypeStyleProps, Text } from "./styles";
import { LinkProps } from "next/link"
import { useEffect, useState } from "react";

type Props = LinkProps & LinkTypeStyleProps & {
   text: string;
}

export function CreateLink({ text, type = "PRIMARY", $isActive = false, ...rest }: Props) {
   const [activePage, setActivePage] = useState(false)
   const pathname = usePathname()
   console.log(pathname)

   useEffect(() => {
      const normalizedPathname = pathname === '/' ? 'INICIO' : pathname.replace('/', '').toUpperCase();
      const normalizedTitle = text.replace(" ", '').toUpperCase();

      setActivePage(normalizedPathname === normalizedTitle);
   }, [pathname, text]);






   return (
      <Container><Text type={type} $isActive={activePage}  {...rest}>{text}</Text></Container>
   )
}