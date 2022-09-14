import styled from "styled-components";

export const StyledAbout = styled.div`
    margin-top: 15px;
    h2 {
        padding-bottom: 8px;
        border-bottom: 2px solid ${({theme}) => theme.colors.tertiary};
        margin-bottom: 30px;
    }

`;