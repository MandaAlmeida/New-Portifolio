"use client"
import styled from "styled-components";

export const List = styled.ul`
width: 100%;

display: grid;
grid-template-columns: repeat(3, 1fr);
justify-items: center;

gap: 30px;

margin: 0 auto;
margin-bottom: 62px;

@media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
}


@media (max-width: 640px) {
    grid-template-columns: 1fr; 
}
`
