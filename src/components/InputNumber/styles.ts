import styled from "styled-components";

export const InputNumberContainer = styled.div`
    width: 4.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 6px;
    
    background: ${(props) => props.theme["base-button"]};

    > input {
        max-width: 1.25rem;

        border: none;
        background: transparent;
        text-align: center;
        width: inherit;
        color: ${(props) => props.theme["base-title"]};
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme["purple-500"]};
    border: 0;
    background: transparent;
    cursor: pointer;

    transition: color 0.2s;

    &:hover{
        color: ${(props) => props.theme["purple-900"]};
    }
`