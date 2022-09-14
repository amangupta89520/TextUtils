import styled from "styled-components";

export const StyledTextForm = styled.div`
    margin-top: 15px;
    .content > .top {
        width: 100%;
        margin-bottom: 20px;
        height: 50px;
        @media(max-width: 768px) {
            flex-direction: column;
            height: 80px;
        }
    }
    textarea {
        width: 100%;
        padding: 15px;
        height: 300px;
        box-sizing: border-box;
        border-radius: 4px;
        font-size: 1.2em;
        &:focus {
            outline-color: ${({theme}) => theme.background.primary};
        }
        color: ${({theme}) => theme.colors.secondary};
        margin-bottom: 20px;
        background: ${({theme}) => theme.background.tertiary};
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
        border: none;
    }
`;

export const StyledTextSummary = styled.div`
    margin-top: 40px;
    padding-bottom: 40px;
    ul {
        margin-top: 30px;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        & > li {

        }
    }
`;