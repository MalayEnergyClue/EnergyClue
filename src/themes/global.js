import { css } from '@emotion/react';
import buildTheme from './buildTheme';

export const GlobalStyle = (host) => {
	const theme = buildTheme(host);
	return css`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: ${theme.font};
            scroll-behavior: smooth;
        }
        body, html {
            background-color: ${theme.colors.light};
            width: 100%;
            height: 100%;
            overflow-x: hidden;
        }
        button, a {
            cursor: pointer;
        }
        #hubspot-messages-iframe-container.widget-align-right iframe {
            margin-right: 30px;
            margin-bottom: 60px;
        }
        ${theme.breakPoint.mobile} {
            #hubspot-messages-iframe-container.widget-align-right {
                transition: all 0.3s ease;
                bottom: 8% !important;
            }
            #hubspot-messages-iframe-container.widget-align-right > .shadow-container.active {
                bottom: 0% !important;
            }
            #hubspot-messages-iframe-container.widget-align-right iframe {
                bottom: -8% !important;
                margin-right: auto;
                margin-bottom: auto;
            }
        }
    `;
};