import styled from "styled-components";

export const SuccessContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding: 5rem 0;

    .title{
        h3 {
            color: ${(props) => props.theme["yellow-900"]};
            font-size: 2rem;
            font-weight: 800;
            font-family: "Baloo 2", serif;
        }

        p{
            margin-top: 0.25rem;
            color: ${(props) => props.theme["base-subtitle"]};
            font-size: 1.25rem;
        }
    }

    main{
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: 6.375rem;
        justify-content: space-between;
        align-items: flex-start;

        .order-info-container{
            width: 100%;

            border-top-left-radius: 6px;
            border-top-right-radius: 36px;
            border-bottom-left-radius: 36px;
            border-bottom-right-radius: 6px;

            padding: 1px;

            background: linear-gradient(to right, ${(props) => props.theme["yellow-500"]}, ${(props) => props.theme["purple-500"]});

            .order-info {
                width: 100%;
                padding: 2.5rem;

                display: flex;
                flex-direction: column;
                gap: 2rem;

                background: ${(props) => props.theme.background};

                border-top-left-radius: 6px;
                border-top-right-radius: 36px;
                border-bottom-left-radius: 36px;
                border-bottom-right-radius: 6px;

                > div{
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
            }
        }
    }
`