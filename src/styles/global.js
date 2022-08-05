import styled,{ createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        background-color: ${props => props.theme.background};
        font-family: "IBM Plex Sans Arabic", sans-serif;
        font-family: "Poppins", sans-serif;
        font-family: "Roboto", sans-serif;
        color: ${props => props.theme.font};
        scroll-behavior: smooth;
    }
    a{
        list-style: none;
    }
    ul{
        list-style: none;
    }
`;