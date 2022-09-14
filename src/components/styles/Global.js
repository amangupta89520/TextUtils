import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700&display=swap');

    * {
        margin: 0;
        padding: 0;
    }

    body {
        background: ${({theme}) => theme.background.secondary};
        font-family: 'Raleway', sans-serif;
        font-size: 1.1em;
        height: 100vh;
        width: 100vw;
        color: ${({theme}) => theme.colors.secondary};
        /* color: red; */
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;