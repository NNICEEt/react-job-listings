import styled from "styled-components";

interface TextProps {
    fontWeight?: number
    color?: string
    size?: number
}

const Text = styled.div<TextProps>`
    color: ${props => props.color || "#000"};
    font-size: ${props => `${props.size}px` || '16px'};
    font-weight: ${props => props.fontWeight || 500};
`;

export default Text;