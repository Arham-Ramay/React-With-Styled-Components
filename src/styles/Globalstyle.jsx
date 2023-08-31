import { createGlobalStyle } from "styled-components";
export const Globalstyle = createGlobalStyle`
body{
    /* background-color: lightcyan; */
    background-color: ${({theme}) => theme.color.bg};

}
`;
