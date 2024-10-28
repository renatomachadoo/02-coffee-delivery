import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const AboutContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 3.5rem;
    padding: 5.75rem 0;

    .info-wrapper {
        width: 37.75rem;

        h1 {
            font-family: "Baloo 2", serif;
            font-weight: 800;
            font-size: 3rem;
            line-height: 1.3;
            color: ${(props) => props.theme["base-title"]};
        }

        p {
            margin-top: 1rem;
            font-size: 1.25rem;
            color: ${(props) => props.theme["base-subtitle"]};
        }

        .benefits-grid{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            column-gap: 2.5rem;
            row-gap: 1.25rem;
            margin-top: 4.125rem;

            > div {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                color: ${(props) => props.theme["base-text"]};
                font-size: 1rem;
            }
        }
    }

    .img-wrapper {
        flex: 1;
        img {
            width: 100%;
        }
    }
`