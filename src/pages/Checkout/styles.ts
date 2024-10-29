import styled from "styled-components";

export const CheckoutContainer = styled.div`
    width: 100%;
    padding: 2.5rem 0;

    display: grid;
    grid-template-columns: 40rem auto;
    gap: 2rem;

    h3 {
        ${(props) => props.theme["base-subtitle"]}
        line-height: 1.3;
        font-weight: 700;
        font-family: "Baloo 2", serif;
        font-size: 1.125rem;
    }

    > main {
        display: flex;
        flex-direction: column;

        .address{
            margin-top: 1rem;
            width: 100%;
            padding: 2.5rem;
            background: ${(props) => props.theme["base-card"]};
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            gap: 2rem;

            > header {
                display: flex;
                align-items: flex-start;
                gap: 0.5rem;

                svg {
                    color: ${(props) => props.theme["yellow-900"]};
                }

                div {
                    p {
                        color: ${(props) => props.theme["base-subtitle"]};
                    }

                    span{
                        color: ${(props) => props.theme["base-text"]};
                        font-size: 0.875rem;
                    }
                }
            }

            .inputs-container{
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 1rem;

                .cols-3{
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 0.75rem;
                }

                .cols-2{
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    gap: 0.75rem;
                }

                .cols-2-auto{
                    width: 100%;
                    display: grid;
                    grid-template-columns: auto 3.75rem;
                    gap: 0.75rem;
                }
            }
        }

        .payment{
            margin-top: 0.75rem;
            width: 100%;
            padding: 2.5rem;
            background: ${(props) => props.theme["base-card"]};
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            gap: 2rem;

            > header {
                display: flex;
                align-items: flex-start;
                gap: 0.5rem;

                svg {
                    color: ${(props) => props.theme["purple-500"]};
                }

                div {
                    p {
                        color: ${(props) => props.theme["base-subtitle"]};
                    }

                    span{
                        color: ${(props) => props.theme["base-text"]};
                        font-size: 0.875rem;
                    }
                }
            }
            
            .payment-method {
                width: 100%;
                display: grid;
                gap: 0.75rem;
                grid-template-columns: 1fr 1fr 1fr;

                button {
                    border: 0;
                    width: 100%;

                    display: flex;
                    align-items: center;
                    justify-content: start;
                    gap: 0.75rem;
                    padding: 1rem;

                    border-radius: 6px;
                    background: ${(props) => props.theme["base-button"]};
                    text-transform: uppercase;

                    font-size: 0.75rem;
                    line-height: 1.6;

                    color: ${(props) => props.theme["base-text"]};

                    cursor: pointer;

                    transition: background-color 0.2s;

                    svg {
                        color: ${(props) => props.theme["purple-500"]};
                    }

                    &:hover{
                        background: ${(props) => props.theme["base-hover"]};
                    }
                }

                .payment-method-selected{
                    background: ${(props) => props.theme["purple-100"]};
                    border: 1px solid ${(props) => props.theme["purple-500"]};
                }
            }
        }
    }

    > aside {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        > div {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;

            background: ${(props) => props.theme["base-card"]};
            padding: 2.5rem;
            
            border-top-left-radius: 6px;
            border-top-right-radius: 44px;

            border-bottom-left-radius: 44px;
            border-bottom-right-radius: 6px;

            footer{
                div{
                    display: flex;
                    justify-content: space-between;

                    span{
                        color: ${(props) => props.theme["base-text"]};
                        font-size: 0.875rem;
                    }

                    p{
                        color: ${(props) => props.theme["base-text"]};
                        font-size: 1rem;
                    }
                }

                div + div{
                    margin-top: 0.75rem;
                }

                .title{
                    p{
                        color: ${(props) => props.theme["base-subtitle"]};
                        font-size: 1.25rem;
                        font-weight: bold;
                    }
                }

                .confirm-checkout-btn{
                    margin-top: 1.5rem;
                    border: 0;

                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 6px;
                    background: ${(props) => props.theme["yellow-500"]};
                    color: ${(props) => props.theme.white};
                    font-size: 0.875rem;
                    font-weight: bold;
                    line-height: 1.6;
                    text-transform: uppercase;
                    padding: 0.75rem;
                    cursor: pointer;

                    transition: background-color 0.2s;

                    &:hover{
                        background: ${(props) => props.theme["yellow-900"]};
                    }
                }

            }
        }
    }
`