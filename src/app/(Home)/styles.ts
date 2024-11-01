"use client"
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const SectionInitial = styled.section`
position: relative;
width: 100%;

display: flex;
align-items: center;
justify-content: center;

gap: 105px;

padding: 28px 120px;

&::after{
    content: "";
    position: absolute;
    bottom: 0;
    
    width: 100%;
    height: 1px;

    background-color: ${({ theme }) => theme["gray-300"]}
}

@media (max-width: 1024px){
    padding: 28px 60px;
    gap: 60px;
}

@media (max-width: 640px){
    padding: 18px 16px;
    flex-direction: column;
}
`

export const ImageMain = styled(Image)`
max-width: 456px;
height: 100%;

@media (max-width: 1024px){
    max-width: 300px;
   
}
`

export const ContainerText = styled.section`
max-width: 400px;
`

export const Title = styled.h1`
font-size: 8.2rem;

@media (max-width: 1024px){
    font-size: 6.2rem;
}
`

export const Text = styled.p`
font-size: 1.8rem;
color: ${({ theme }) => theme["gray-700"]};

@media (max-width: 1024px){
    font-size: 1.4rem;
}
`

export const SectionProject = styled.section`
width: 100%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

padding: 60px 120px;

@media (max-width: 1024px){
    padding: 60px;
}

@media (max-width: 640px){
    padding: 24px 16px;
}
`

export const TextProject = styled.h2`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 40px;

    color: ${({ theme }) => theme["gray-500"]};
    font-weight: 400;

    margin-bottom: 23px;

    &::after, &::before{
    content: "";
    flex: 1;
    height: 1px;

    background-color: ${({ theme }) => theme["gray-300"]}
    }
`

export const ButtonProject = styled(Link)`
text-decoration: none;

background-color: ${({ theme }) => theme["blue-500"]};
padding: 5px 20px;

border-radius: 10px;

font-size: 2rem;
color: ${({ theme }) => theme["gray-100"]};

cursor: pointer;

&:hover{
    background-color: ${({ theme }) => theme["blue-700"]};
}

`