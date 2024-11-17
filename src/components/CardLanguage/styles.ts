"use client"
import styled from "styled-components";

export const Container = styled.li`
list-style: none;

display: flex;
align-items: center;
justify-content: center;

border: 1px solid ${({ theme }) => theme["gray-900"]};
border-radius: 10px;
padding: 5px;
`

export const Text = styled.span`
font-size: 1.0rem;
color: ${({ theme }) => theme["gray-900"]};
`