import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 12px 18px;
    border-radius: 50px;
    font-size: 1.05em;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        transform: scale(0.98);
        color: ${({theme}) => theme.colors.secondary};
        background: ${({theme}) => theme.background.tertiary};
    }
    color: ${({theme}) => theme.colors.primary};
    background: ${({theme}) => theme.background.primary};
    &:disabled {
        opacity: 0.5;
        &:hover {
            transform: initial;
            color: ${({theme}) => theme.colors.primary};
            background: ${({theme}) => theme.background.primary};
        }
    }

    @media(max-width: 768px) {
        padding: 10px 12px;
        font-size: 16px;
    }
`;