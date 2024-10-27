"use client"
import Image from "next/image";
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

padding: 28px 120px;

&::after{
    content: "";
    position: absolute;
    bottom: 0;
    
    width: 100%;
    height: 1px;

    background-color: ${({ theme }) => theme["gray-300"]}
}
`

export const ImageMain = styled(Image)`
width: 456px;
height: 456px;

margin-right: 105px;
`

export const ContainerText = styled.section`
max-width: 400px;
`

export const Title = styled.h1`
font-size: 8.2rem;
`

export const Text = styled.p`
font-size: 1.8rem;
color: ${({ theme }) => theme["gray-700"]};
`

export const SectionProject = styled.section`
width: 100%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

padding: 60px 120px;
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

export const ListProject = styled.ul`
width: 100%;

display: flex;
align-items: center;
justify-content: center;
gap: 50px;

margin-bottom: 62px;
`

export const ButtonProject = styled.button`
border: 0;

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