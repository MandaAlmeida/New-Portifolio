"use client"
import styled from "styled-components";

export const Container = styled.footer`
width: 100%;

display: flex;
align-items: center;
justify-content: space-between;

padding: 20px 120px;

box-shadow: 0px -4px 4px  rgba(0, 0, 0, 0.25);

@media (max-width: 1024px){
    padding: 10px 60px;
}

@media (max-width: 640px){
    height: 80px;
    padding: 10px 16px;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
}

`

export const Text = styled.span`
    color: ${({ theme }) => theme["gray-300"]};
    font-weight: 400;

`