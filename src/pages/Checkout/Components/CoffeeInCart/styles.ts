import styled from "styled-components";

export const CoffeeInCartContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    gap: 1.25rem;

    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${(props) => props.theme["base-button"]};

    > img {
        height: 4rem;
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        > div{
            display: flex;
            gap: 0.5rem;
        }
    }

    > span{
        flex: 1;
        display: flex;
        align-self: flex-start;
        justify-content: end;

        color: ${(props) => props.theme["base-text"]};
        font-weight: bold;
    }
`

export const RemoveButton = styled.button`
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    background: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-text"]};
    padding: 0.5rem;
    border-radius: 6px;

    font-size: 0.75rem;
    line-height: 1.6;

    text-transform: uppercase;

    cursor: pointer;

    transition: background-color 0.2s;

    > svg {
        color: ${(props) => props.theme["purple-500"]};
        transition: color 0.2s;
    }

    &:hover{
        background: ${(props) => props.theme["base-hover"]};

        > svg{
            color: ${(props) => props.theme["purple-900"]};
        }
    }
`