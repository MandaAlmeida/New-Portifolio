"use client"
import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";

export type LinkTypeStyleProps = "PRIMARY" | "SECONDARY";
export type ColorTypeStyleProps = "GITHUB" | "LINKEDIN" | "WHATSAPP" | "INSTAGRAM";

type Props = {
    type?: LinkTypeStyleProps;
    color?: ColorTypeStyleProps;
}

export const Container = styled.ul<Props>`
 display: ${({ type }) => type === "SECONDARY" ? "grid" : "flex"};
 grid-template-columns: repeat(2, 1fr);
 flex-wrap: wrap;
 gap: ${({ type }) => type === "SECONDARY" ? 60 : 20}px;
 align-items: center;

 @media (max-width: 640px){
    display: flex;
    align-items: center;
    justify-content: center;
 }
`

export const List = styled.li<Props>`
    list-style: none;
    width: ${({ type }) => type === "SECONDARY" ? 160 : 25}px;
    height: ${({ type }) => type === "SECONDARY" ? 45 : 25}px;
`

export const LinkList = styled(Link) <Props>`
text-decoration: none;
width: 100%;
height: 100%;


${({ type }) => type === "SECONDARY" && css`
   display: flex; 
   align-items: center;
   gap: 16px;
`}
`

export const Logo = styled(Image) <Props>`
   width: ${({ type }) => type === "SECONDARY" ? 45 : 25}px;
   height: ${({ type }) => type === "SECONDARY" ? 45 : 25}px;

   @media (max-width: 640px){
   width: 25px;
   height: 25px;
 }
`

export const Text = styled.p<Props>`
font-size: ${({ type }) => type === "SECONDARY" ? (1.6) : 0}rem;
color: ${({ color }) => color === "GITHUB" ? "#1B1F23" : color === "WHATSAPP" ? "#00C364" : color === "LINKEDIN" ? "#007AB9" : "transparent"};
background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d, #FFDD55);
background-clip: text; 
font-weight: 700;

@media (max-width: 1024px){
    font-size: ${({ type }) => type === "SECONDARY" ? (1.4) : 0}rem;
} 
`

