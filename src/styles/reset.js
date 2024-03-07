import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
    *{
    text-decoration: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--font-primary);
    }
    button{
        cursor: pointer;
        background: transparent;
        border: none;
        outline: none;
    }

    ul, li{
        list-style: none;
    }
`;