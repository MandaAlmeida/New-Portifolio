"use client"
import styled from "styled-components";


export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 26px;

  width: 100%;

  padding: 50px 120px;

  @media (max-width: 1024px){
    padding: 25px 60px;
}

@media (max-width: 640px){
    padding: 25px 16px;
}
`

export const Title = styled.h3`
    font-size: 2.4rem;
    font-weight: 400;
`

export const Form = styled.form`
width: 100%;

display: grid;
grid-template-columns: repeat(2, 1fr);


justify-content: center;

gap: 40px;

@media (max-width: 1024px){
    
}

@media (max-width: 640px){
    display: flex;
    flex-direction: column;
    align-items: center;
}
`

export const Label = styled.label`
display: flex;
flex-direction: column;
width: 100%;

gap: 11px;

font-size: 1.5rem;
`

export const Input = styled.input`
height: 45px;

border: 1px solid ${(props) => props.theme["gray-800"]};

border-radius: 10px;

padding:  10px 20px;
`

export const Textarea = styled.textarea`
    height: 150px;

    border: 1px solid ${(props) => props.theme["gray-800"]};

    border-radius: 10px;

    padding:  10px 20px;

    resize: none;
`

export const Button = styled.button`
    width: 145px;
    height: 40px;

    border: 0;
    border-radius: 10px;

    background-color: ${(props) => props.theme["blue-500"]};

    color: ${(props) => props.theme["gray-100"]};

    cursor: pointer;

    grid-column: span 2;
    justify-self: center;

    &:hover{
        background-color: ${(props) => props.theme["blue-700"]};

    }
`