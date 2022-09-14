import styled from "styled-components";

export const StyledAlert = styled.div`
    background: ${({theme}) => theme.background.tertiary};
    margin: 8px;
    padding: 15px;
    border-radius: 4px;
    width: 99.2%;
    box-sizing: border-box;
    position: fixed;
`;