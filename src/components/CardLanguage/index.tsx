import { Container, Text } from "./styles";

type Props = {
    text: string
}

export function CardLanguage({ text }: Props) {
    return (
        <Container>
            <Text>{text}</Text>
        </Container>
    )
}