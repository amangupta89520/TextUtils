import styled from "styled-components";

export const StyledNav = styled.nav`
    background: ${({theme}) => theme.background.primary};
    color: ${({theme}) => theme.colors.primary};
    padding: 15px 0;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.2);
    position: sticky;
    top: 0;
    width: 100%;

    img {
        margin-left: auto;
        height: 40px;
        width: 40px;
        cursor: pointer;
        filter: ${({theme}) => theme.imageFilter};
    }
`;