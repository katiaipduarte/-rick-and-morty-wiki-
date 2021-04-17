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
            height: calc(100vh - 30rem);
            min-height: 641rem;
            padding: 0;
            flex: 1;
            padding: 25rem;

            .page-loader {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
            }

            &.centered-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                h1,
                h3 {
                    text-align: center;
                }
            }

            h1, h2, h3, h4, h5, h6, p {
                color: back;
                cursor: default;
            }

            h1 {
                font-size: 35rem;
            }

            h2 {
                font-size: 25rem;
            }

            h3 {
                font-size: 20rem;
            }
        }
    }
`;
