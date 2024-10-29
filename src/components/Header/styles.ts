import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 0;

    > img {
        height: 2.5rem;
    }

    .actions{
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
`

const BaseButton = styled.button`
    border: none;
    outline: none;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    border-radius: 6px;
`

export const LocationButton = styled(BaseButton)`
    gap: 0.25rem;

    background: ${(props) => props.theme["purple-100"]};
    color: ${(props) => props.theme["purple-900"]};

    font-size: 0.875rem;
`

export const CartButton = styled(BaseButton)`
    background: ${(props) => props.theme["yellow-100"]};
    color: ${(props) => props.theme["yellow-900"]};

    position: relative;

    cursor: pointer;

    > span {
        position: absolute;
        border-radius: 50%;

        background-color: ${(props) => props.theme["yellow-900"]};
        color: ${(props) => props.theme.white};

        width: 1.25rem;
        height: 1.25rem;

        display: flex;
        align-items: center;
        justify-content: center;

        line-height: 1.3;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: -6%;

        right: -0.625rem;
        top: -0.625rem;
    }
`