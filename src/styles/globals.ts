"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    font-size: 62.5%;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    height: 100%;
    color: ${(props) => props.theme["gray-800"]};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font: 400 1.6rem 'Inter', sans-serif;
}

#__next {
        height: 100%;
    }
`;
