import { ImageMain } from "../styles";
import { Container, Section, SectionText, Title, Text } from "./styles";
import ImageHome from "@/assets/ImageHome.png"


export default function About() {
    return (
        <Container>
            <Section $isSkill>
                <SectionText>
                    <Title>Sobre mim </Title>
                    <Text>Olá! Meu nome é Amanda, tenho 23 anos e moro em Sete Lagoas, MG. Sou apaixonada pelo mundo da tecnologia e tenho como objetivo me tornar uma desenvolvedora fullstack. Desde 2022, iniciei minha jornada na programação, buscando criar soluções que facilitem nosso cotidiano com o uso da tecnologia. Comecei focando em React, e tenho evoluído cada vez mais nesse caminho.
                        <br />
                        Atualmente, estou empenhada em me especializar em Next.js e React Native para aprimorar minhas habilidades no front-end. Meu próximo passo é mergulhar no back-end, o que me permitirá desenvolver aplicativos e sites cada vez mais completos e robustos. Estou animada para continuar crescendo nessa área e contribuir com projetos inovadores e impactantes.</Text>
                </SectionText>
                <ImageMain src={ImageHome} alt="imagem de uma garota" /></Section>
            <Section $isSkill>
                <ImageMain src={ImageHome} alt="imagem de uma garota" />
                <SectionText>
                    <Title>Fatos aleatorios </Title>
                    <Text>Amo viajar e tenho muita vontade de conhecer o mundo<br />
                        Sou apaixonada pela beleza do céu, especialmente o pôr do sol<br />
                        Gosto de ler livros de ficção<br />
                        Um dos meus hobbies é fazer bichinhos de crochê<br />
                        Quero muito melhorar meu inglês<br />
                        Meu exercício físico preferido é andar de bicicleta<br />
                        Adoro inventar receitas e cozinhar pratos diferentes<br />
                        Meu passatempo favorito é criar e inventar coisas novas</Text>
                </SectionText>
            </Section>

            <Section >
                <Title>Minhas habilidades</Title>
            </Section>
        </Container >
    )
}