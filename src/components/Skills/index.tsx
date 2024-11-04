import { StaticImageData } from "next/image";
import { Container, ImageSkills, Text } from "./styles";

type Props = {
    text: string;
    img: string | StaticImageData;
}

export function Skills({ text, img }: Props) {
    return (
        <Container>
            <ImageSkills src={img} alt="Imagem de linguagens de programação" />
            <Text>{text}</Text>
        </Container>
    )
}