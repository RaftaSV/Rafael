// iconStyles.js
import { css } from 'styled-components'; // Asegúrate de tener styled-components instalado
import { mediaQueries } from 'styles/theme'; // Ajusta la ruta según tu estructura de carpetas

export const iconStyle = css`
  width: 2em;
  height: 2em;

  ${mediaQueries.mobile} {
    width: 1.7em;
    height: 1.7em;
  }

  ${mediaQueries.tablet} {
    width: 1.8em;
    height: 1.8em;
  }
`;
