import styled from 'styled-components';
import { mediaQueries } from 'styles/theme';
export const BannerNavStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
export const NameStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
    ${mediaQueries.tablet} {
      padding-left: 20px;
    }
    ${mediaQueries.desktop} {
        padding-left: 20px;
    }
    ${mediaQueries.mobile} {
        padding-left: 5px;
    }
  
`;
