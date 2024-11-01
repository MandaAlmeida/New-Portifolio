"use client"
import styled, { css } from "styled-components";
import Image from "next/image";



type Props = {
    $isSkill?: boolean
}

export const Container = styled.main`
display: flex;
flex-direction: column;
`

export const Section = styled.section<Props>`
display: flex;
flex-direction: column;
align-items: start;


${({ $isSkill }) => $isSkill === true && css`
display: grid;
grid-template-columns: repeat(2, 1fr);
align-items: center;
justify-items: center;

&::after{
    content: "";
    position: absolute;
    bottom: 0;

    width: 100%;
    height: 1px;

    background-color: ${({ theme }) => theme["gray-300"]}
}

@media (max-width: 640px){
    grid-template-columns: 1fr;
}
`};


position: relative;

padding: 70px 120px;

@media (max-width: 1024px){
    padding: 70px 60px;
}

@media (max-width: 640px){
    padding: 24px;
}

`

export const SectionText = styled.section`
display: flex;
gap: 10px;
align-items: start;
flex-direction: column;

`
export const ImageMain = styled(Image)`
max-width: 456px;
height: 100%;

@media (max-width: 1024px){
    max-width: 300px;
   
}
`

export const Title = styled.h2`
font-size: 3.2rem;
color: ${({ theme }) => theme["gray-900"]};
`

export const Text = styled.p`
color: ${({ theme }) => theme["gray-700"]}
`
