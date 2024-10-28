import styled from "styled-components";

const BACKGROUND_COLORS = {
    yellow : "yellow-500",
    darkYellow: "yellow-900",
    purple : "purple-500",
    gray: "base-text"
} as const

export interface BackgroundProps {
    backgroundColor: keyof typeof BACKGROUND_COLORS
}

export const BackgroundIconContainer = styled.div<BackgroundProps>`
    border-radius: 100%;
    padding: 0.5rem;
    background: ${(props) => props.theme[BACKGROUND_COLORS[props.backgroundColor]]};
    color: ${(props) => props.theme.white};

    display: flex;
    align-items: center;
    justify-content: center;
`