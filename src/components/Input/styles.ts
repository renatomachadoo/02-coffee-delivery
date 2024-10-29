import styled from "styled-components";

export const InputContainer = styled.label`
    width: 100%;
    padding: 0.75rem;
    overflow: hidden;

    border: 1px solid ${(props) => props.theme["base-button"]};
    border-radius: 4px;
    background: ${(props) => props.theme["base-input"]};

    color: ${(props) => props.theme["base-text"]};

    display: flex;
    align-items: center;
    gap: 0.25rem;

    cursor: text;

    &:focus-within {
        outline: 1px solid ${(props) => props.theme["yellow-900"]};
    }

    > input{
        border: 0;
        background: transparent;
        outline: 0;

        flex: 1;
        max-width: 100%;

        &::placeholder{
            color: ${(props) => props.theme["base-label"]};
        }
    }

    > span {
        font-style: italic;
        font-size: 0.75rem;
        color: ${(props) => props.theme["base-label"]};
    }
    
`