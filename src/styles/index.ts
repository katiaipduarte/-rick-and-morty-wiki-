import { createGlobalStyle } from 'styled-components';
import { ResetCSS } from './reset-css';
import { Typography } from './typography';

export const GlobalStyle = createGlobalStyle`
    ${ResetCSS}
    ${Typography}

    body {
        min-width: 360rem;
        min-height: 660rem;
        display: flex;
        flex-direction: column;

        #root {
            min-width: 360rem;
            min-height: 641rem;
        }

        main {
            display: flex;
            margin: 0 auto;
            max-width: 1080rem;
            padding: 0rem 60rem;
            flex-direction: column;

            h1, h2, h3, h4, h5, h6, p {
                color: back;
                cursor: default;
            }
        }
    }
`;
