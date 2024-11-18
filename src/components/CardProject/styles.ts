"use client"
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY"

type Props = {
    type?: ButtonTypeStyleProps
}

export const Container = styled.li`
cursor: pointer;


display: flex;
flex-direction: column;
gap: 15px;

box-shadow: 0 1px 4px 0px rgba(0, 0, 0, 0.2);
border-radius: 10px;

padding: 20px;

width: 100%;
max-width: 373px;
max-height: 367px;

&:hover{
    box-shadow:  0px 4px 8px 0px rgba(0, 0, 0, 0.2)
}

@media (max-width: 640px){
    width: 90%;
    max-width: 100%;
}
`

export const ImageProject = styled(Image)`
    width: 100%;
    max-height: 180px;
    object-fit: cover;
    border-radius: 10px;
`

export const TitleProject = styled.h4`
   font-size: 2rem;
   font-weight: 400;
    color: ${({ theme }) => theme["gray-900"]};
`
export const Section = styled.section`
display: flex;
align-items: center;
justify-content: space-between;
`

export const ListLanguage = styled.ul`
display: flex;
align-items: center;
justify-content: start;

flex-wrap: wrap;

gap: 10px;
`

export const Button = styled(Link) <Props>`
    text-decoration: none;

    background-color: ${({ theme, type }) => type === "PRIMARY" ? theme["blue-500"] : "transpatent"};

    padding: 5px;

    
    border-radius: 10px;
    
    text-align: center;
    
    font-size: 1.6rem;
    color: ${({ theme, type }) => type === "PRIMARY" ? theme["gray-100"] : theme["gray-800"]};

    border: solid transparent ;
    border-width: ${({ type }) => type === "SECONDARY" ? 1 : 0}px;

    &:hover{
        background-color: ${({ theme, type }) => type === "PRIMARY" ? theme["blue-700"] : "transparent"};
        border-color: ${({ theme, type }) => type === "PRIMARY" ? theme["gray-100"] : theme["gray-800"]};
}
`