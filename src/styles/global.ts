import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --red: #E65245;
        --blue: #1F69AD;

        --blue-light: #6FAAE8;

        --text-tile: #363F5F;
        --text-body: #324C69;

        --background: #E1E8EF;
        --shape: #FFFFFF;
    }   
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }
    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;

    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight:600;    
    }
    button{
        cursor: pointer;
    }
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
