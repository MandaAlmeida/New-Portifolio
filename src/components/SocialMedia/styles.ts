"use client"
import styled from "styled-components";
import Image from "next/image";

export const Container = styled.ul`
 display: flex;
 gap: 20px;
 align-items: center;
`

export const List = styled.li`
    list-style: none;
`

export const Logo = styled(Image)`
    width: 25px;
    height: 25px;
`

