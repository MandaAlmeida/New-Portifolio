"use client"
import styled from "styled-components";

export const Container = styled.main`
flex: 1;

height: 100%;
`

export const Section = styled.section`
position: relative;

display: flex;
justify-content: center;

flex-direction: column;
gap: 30px;

padding: 50px 120px;

&::after{
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;

    width: 100%;
    height: 1px;

    background-color: ${({ theme }) => theme["gray-300"]}
}

@media (max-width: 1024px){
    padding: 25px 60px;
}

@media (max-width: 640px){
    padding: 25px 16px;
    align-items: center;
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