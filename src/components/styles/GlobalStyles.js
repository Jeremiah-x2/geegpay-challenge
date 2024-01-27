import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,*::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
ul{
    list-style: none;
}

h1, h2, h3,h4, h5,h6{
    color: ${(p) => p.theme.colors.color}
}

body{
    background-color: ${(p) => p.theme.colors.bgColor};
    & >div{
        display: flex;
    }
    padding-bottom: 4rem;
}

.main--container {
    flex-grow: 1;
}

@media screen and (max-width: 600px) {
    body{

        padding-bottom: 8rem;
    }
}
`;

export default GlobalStyles;
