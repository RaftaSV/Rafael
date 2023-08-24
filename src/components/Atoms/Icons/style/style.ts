// iconStyles.js
import { css } from 'styled-components'; // Asegúrate de tener styled-components instalado
import { mediaQueries } from 'styles/theme'; // Ajusta la ruta según tu estructura de carpetas

export const iconStyle = css`
  width: 2em;
  height: 2em;

  ${mediaQueries.mobile} {
    width: 1.25em;
    height: 1.25em;
  }

  ${mediaQueries.tablet} {
    width: 1.75em;
    height: 1.75em;
  }
`;
