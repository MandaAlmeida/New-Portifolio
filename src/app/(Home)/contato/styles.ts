"use client"
import styled from "styled-components";

export const Container = styled.main`
padding: 0 120px;

margin: 50px 0;

flex: 1;

display: flex;
align-items: center;
justify-content: center;

flex-direction: column;
gap: 30px;

height: 100%;

@media (max-width: 640px){
   padding: 0 16px;
 }
`

export const Section = styled.section`

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