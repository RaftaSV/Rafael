import styled, {keyframes} from 'styled-components';
import { mediaQueries } from 'styles/theme';

const moveRight = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
`;


export const ContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    ${mediaQueries.desktop} {
        margin-top: 30px;
    }
    ${mediaQueries.tablet} {
        margin-top: 30px;
    }
    ${mediaQueries.mobile} {
        margin-top: 40px;
    }
    &.animate {
        opacity: 1;
        animation: ${moveRight} 5s ease-out;
    }
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
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 30px;
    height: calc(55vh + 30px);
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
      margin-right: 20px;
      margin-top: -40px;
    }
    ${mediaQueries.tablet} {
      display: flex;
      flex-direction: column;
      align-items: start;
      margin-right: 20px;
      margin-top: -30px;
    }
    ${mediaQueries.mobile} {
      display: flex;
      flex-direction: column;
      margin-top: -10px;
      align-items: center;
      margin-right: 12px;
    }
`;

export const NameStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  
`;

