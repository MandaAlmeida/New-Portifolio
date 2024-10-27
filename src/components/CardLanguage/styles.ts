"use client"
import styled from "styled-components";

export const Container = styled.li`
list-style: none;
border: 1px solid ${({ theme }) => theme["gray-900"]};
border-radius: 10px;
padding: 5px;
`

export const Text = styled.span`
color: ${({ theme }) => theme["gray-900"]};
`