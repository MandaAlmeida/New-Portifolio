"use client"
import styled from "styled-components";
import Image from "next/image";

export const Container = styled.section`
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 20px;

    @media (max-width: 640px){
        gap: 10px;
} 
`

export const ImageSkills = styled(Image)`
    width: 40px;
    height: 40px;

    @media (max-width: 640px){
        width: 30px;
        height: 30px;
} 
`

export const Text = styled.span`
 color: ${({ theme }) => theme["gray-700"]};
 font-size: 1.6rem;

 @media (max-width: 640px){
    font-size: 1.2rem;
} 
`