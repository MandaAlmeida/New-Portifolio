import { Skills } from "@/components/Skills";
import { Container, Section, SectionText, ImageMain, Title, Text, SectionSkills, List } from "./styles";
import { GrupSkills } from "@/dados/skills";

import Eu from "@/assets/amanda.png";
import hobbies from "@/assets/hobbies.png";



export default function About() {
    return (
        <Container>
            <Section $isSkill>
                <SectionText>
                    <Title>Sobre mim </Title>
                    <Text>
                        Olá! Meu nome é Amanda, tenho 23 anos e moro em Sete Lagoas, MG. Sou apaixonada pelo universo da tecnologia e tenho como meta me tornar uma desenvolvedora fullstack. Minha jornada na programação começou em 2022, movida pelo desejo de criar soluções inovadoras que facilitem o nosso dia a dia por meio da tecnologia.
                        <br /><br />
                        Desde o início, mergulhei no estudo de React, o que me permitiu construir uma base sólida no desenvolvimento front-end. Atualmente, estou ampliando meus conhecimentos ao me especializar em Next.js e React Native, aprofundando minha expertise para criar interfaces modernas e funcionais. Paralelamente, estou me preparando para explorar o universo do back-end, com o objetivo de desenvolver aplicações completas, eficientes e robustas.
                        <br /><br />
                        Estou animada para continuar aprendendo, crescendo e contribuindo com projetos transformadores que gerem impacto positivo no mundo.
                    </Text>
                </SectionText>
                <ImageMain src={Eu} alt="imagem de uma garota" />
            </Section>
            <Section $isSkill>
                <ImageMain src={hobbies} alt="imagem de uma garota" />
                <SectionText>
                    <Title>Fatos aleatorios</Title>
                    <List>
                        <li>
                            <Text>Amo viajar e tenho muita vontade de conhecer o mundo</Text>
                        </li>
                        <li>
                            <Text>Sou apaixonada pela beleza do céu, especialmente o pôr do sol</Text>
                        </li>
                        <li>
                            <Text> Gosto de ler livros de ficção</Text>
                        </li>
                        <li>
                            <Text>Um dos meus hobbies é fazer bichinhos de crochê</Text>
                        </li>
                        <li>
                            <Text>Quero muito melhorar meu inglês</Text>
                        </li>
                        <li>
                            <Text>Meu exercício físico preferido é andar de bicicleta</Text>
                        </li>
                        <li>
                            <Text> Adoro inventar receitas e cozinhar pratos diferentes</Text>
                        </li>
                        <li>
                            <Text>Meu passatempo favorito é criar e inventar coisas novas</Text>
                        </li>
                        <li>
                            <Text>Passar tempo de qualidade com meus amigos</Text>
                        </li>
                        <li>
                            <Text>Eu adoro explorar novos lugares, especialmente aqueles que oferecem uma experiência gastronômica única</Text>
                        </li>
                    </List>
                </SectionText>
            </Section>
            <Section >
                <Title>Minhas habilidades</Title>
                <SectionSkills>
                    {GrupSkills.map(skill => (
                        <Skills key={skill.key} img={skill.img} text={skill.text} />
                    ))}
                </ SectionSkills>

            </Section>
        </Container >
    )
}