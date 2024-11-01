"use client"
import styled, { css } from "styled-components";
import { List, X } from "@phosphor-icons/react";


export type MenuStyleProps = {
    $isActiveMenu?: boolean;
}

export const NavLink = styled.ul<MenuStyleProps>`

 display: flex;
 gap: 20px;
 align-items: center;

 @media (max-width: 640px){
 ${({ $isActiveMenu, theme }) => $isActiveMenu ? css`
 position: fixed;
 top: 0;
right: 0;
z-index: 100;
 width: 50%;
 height: 100vh;
background-color: ${theme["gray-900"]};
flex-direction: column;
padding: 16px;
` : css` 
width: 0;
 height: 0; 
 font-size: 0`}
   }
`

export const ButtonMenu = styled.button`
    background-color: transparent;
    border: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16px;
`

export const CloseMenu = styled.button`
    background-color: transparent;
    border: none;
    text-align: end;
    @media (max-width: 640px){
        width: 100%;
    }
`

export const Icon = styled(List)`
    color: ${({ theme }) => theme["gray-100"]};
    font-size: 0;

    @media (max-width: 640px){
        font-size: 3rem;
    }
`


export const IconClose = styled(X) <MenuStyleProps>`
    color: ${({ theme }) => theme["gray-100"]};
    font-size: 0;

    @media (max-width: 640px){
        font-size: ${({ $isActiveMenu }) => $isActiveMenu ? 3 : 0}rem;
    }
`