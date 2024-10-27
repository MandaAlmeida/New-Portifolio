"use client"
import styled from "styled-components";
import Image from "next/image"

export const Container = styled.li`
display: flex;
flex-direction: column;
gap: 20px;

cursor: pointer;

box-shadow: 0 1px 4px 0px rgba(0, 0, 0, 0.2);
border-radius: 10px;

padding: 20px;

flex: 1;
max-height: 367px;

&:hover{
    box-shadow:  0px 4px 8px 0px rgba(0, 0, 0, 0.2)
}
`

export const ImageProject = styled(Image)`
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 10px;
`

export const TitleProject = styled.h4`
   font-size: 2rem;
   font-weight: 400;
    color: ${({ theme }) => theme["gray-900"]};
`

export const ListLanguage = styled.ul`
display: flex;
align-items: center;
justify-content: start;

gap: 10px;
`