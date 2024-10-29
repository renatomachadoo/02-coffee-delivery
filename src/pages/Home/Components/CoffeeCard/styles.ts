import styled from "styled-components";

export const CoffeeContainer = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 0 1.5rem 1.25rem;

    border-top-left-radius: 0.375rem;
    border-top-right-radius: 2.25rem;
    border-bottom-left-radius: 2.25rem;
    border-bottom-right-radius: 0.375rem;

    background: ${(props) => props.theme["base-card"]};

    > img {
        margin-top: -1.25rem;
        width: 7.5rem;
    }

    .badges{
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        gap: 0.25rem;
    }

    > h3 {
        margin-top: 1rem;
        font-size: 1.25rem;
        font-family: "Baloo 2", serif;
        font-weight: 700;
    }
    
    > p {
        margin-top: 0.5rem;
        color: ${(props) => props.theme["base-label"]};
        font-size: 0.875rem;
        text-align: center;
    }
    
    .actions{
        margin-top: 2rem;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        gap: 1.5rem;

        > p {
            font-size: 0.875rem;

            span{
                margin-left: 0.25rem;
                font-size: 1.5rem;
                font-weight: 700;
                font-family: "Baloo 2", serif;
            }
        }

        > div{
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }
`

export const Badge = styled.div`
    padding: 0.25rem 0.5rem;
    background: ${(props) => props.theme["yellow-100"]};
    color: ${(props) => props.theme["yellow-900"]};
    border-radius: 999px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.625rem;
`

export const AddCartButton = styled.button`
    border: 0;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme["purple-900"]};

    padding: 0.5rem;
    cursor: pointer;

    transition: background-color 0.2s;

    &:hover{
        background: ${(props) => props.theme["purple-500"]};
    }
`