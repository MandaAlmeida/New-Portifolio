"use client"
import styled from "styled-components";

export const Container = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

padding: 0 120px;

@media (max-width: 1024px){
    padding: 0 60px;
}

@media (max-width: 640px){
    padding: 0 16px;
}
`

export const Title = styled.h1`
margin: 50px 0;
font-size: 4.8rem;
color: ${({ theme }) => theme["gray-900"]}
`