"use client"
import styled from "styled-components";
import Link from "next/link";

export type LinkTypeStyleProps = { type?: "PRIMARY" | "SECONDARY", $isActive?: boolean; };




export const Container = styled.li`
    list-style: none;

`

export const Text = styled(Link) <LinkTypeStyleProps>`
    text-decoration: none;
    color: ${({ theme, type, $isActive }) => $isActive && type === "PRIMARY" ? theme["blue-500"] : $isActive && type === "SECONDARY" ? theme["gray-600"] : type === "SECONDARY" ? theme["gray-300"] : theme["gray-100"]};
    font-weight: ${({ type }) => type === "PRIMARY" ? 700 : 400};

    &:hover{
        color: ${({ theme, type }) => type === "PRIMARY" ? theme["blue-800"] : theme["gray-900"]};
    }

    &::after{
        content: "";

        display: block;
        width: 100%;
        height: 1px;
        background-color: ${({ theme, type, $isActive }) => $isActive && type === "PRIMARY" ? theme["blue-500"] : "transparent"};
    }

    &:hover::after{
        background-color: ${({ theme, type, $isActive }) => $isActive && type === "PRIMARY" ? theme["blue-700"] : "transparent"};
    }
`