import styled from 'styled-components';
import { mediaQueries } from 'styles/theme';


export const ContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const BannerProfileImageStyle = styled.div`
  background-color: ${({ theme }) => theme.colors.bgCard};
 
  ${mediaQueries.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: left;
    margin-top: 40px;
    align-items: center;
    height: 460px;
    width: 95%;
    border-radius: 40px;
  }
  ${mediaQueries.tablet} {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    height: max-content;
    width: 95%;
    border-radius: 30px;
  }
  ${mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: max-content;
    border-radius: 15px;
    width: 95%;
  }
`;

export const NameAndDescriptionStyled = styled.div`
   
    ${mediaQueries.desktop} {
      display: flex;
      flex-direction: column;
      align-items: start;
    }
    ${mediaQueries.tablet} {
      display: flex;
      flex-direction: column;
      align-items: start;
      margin-top: -10px;
    }
    ${mediaQueries.mobile} {
      display: flex;
      flex-direction: column;
      margin-top: -20px;
      margin-left: -20px;
      align-items: center;
    }
`;

export const NameStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  
`;

