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
gap: 30px;


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
    gap: 30px;
    align-items: center;
}

`

export const SectionText = styled.section`
display: flex;
gap: 10px;
align-items: start;
flex-direction: column;

@media (max-width: 640px){
align-items: center;
}  
`

export const SectionSkills = styled.section`
display: flex;
align-items: center;
justify-content: center;

gap: 30px;

flex-wrap: wrap;

width: 100%;

margin-top: 30px; 
`

export const ImageMain = styled(Image)`
max-width: 456px;
height: 100%;


@media (max-width: 1024px){
    max-width: 300px;
};

@media (max-width: 640px){
max-width: 200px;
} 

`

export const Title = styled.h2`
font-size: 3.2rem;
color: ${({ theme }) => theme["gray-900"]};

@media (max-width: 1024px){
    font-size: 2.4rem;
} 
`

export const Text = styled.p`
color: ${({ theme }) => theme["gray-700"]};

@media (max-width: 1024px){
    font-size: 1.4rem;
} 
`
