"use client"
import styled from "styled-components";
import Image from "next/image";

export const Container = styled.header`
position: sticky;
top: 0;
z-index: 100;

background-color: ${({ theme }) => theme["gray-900"]};
width: 100%;

display: flex;
align-items: center;
justify-content: space-between;

padding: 20px 120px;
box-shadow: 0px 4px 4px  rgba(0, 0, 0, 0.25);
transition: position 0.3s ease-in-out; 

@media (max-width: 1024px){
    padding: 10px 60px;
}

@media (max-width: 640px){
    padding: 10px 16px;
}
`

export const Logo = styled(Image)`
width: 50px;
height: 50px;

border-radius: 100%;
`

export const NavLink = styled.ul`
 display: flex;
 gap: 20px;
 align-items: center;
`

