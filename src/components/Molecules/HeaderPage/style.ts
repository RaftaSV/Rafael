import styled from 'styled-components';
import { mediaQueries } from 'styles/theme';

export const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${mediaQueries.desktop} {
    margin-top: -38px;
  }
  ${mediaQueries.mobile} {
    margin-top: 0;
  }
`;
export const BannerProfileImageContainerStyled = styled.div`
  position: relative;
  width: 100%;
`;

export const CoverImageStyled = styled.img`
  ${mediaQueries.desktop} {
    width: 100%;
    height: 400px;
    border-radius: 40px;
  }
  ${mediaQueries.tablet} {
    height: 300px;
    width: 100%;
    border-radius: 40px;
  }
  ${mediaQueries.mobile} {
    height: 280px;
    width: 100%;
    object-fit: fill;
    border-radius: 15px;
  }
`;

export const ImageStyled = styled.div`
  position: absolute;
  border-radius: 15px;
  padding: 10px;
  transform: translate(-10px, 10px); /* Ajusta la posición del ImageStyled */

  ${mediaQueries.desktop} {
    bottom: 0;
    left: 0;
  }
  ${mediaQueries.tablet} {
    bottom: 0;
    left: 0;
  }
  ${mediaQueries.mobile} {
    bottom: 40px;
    left: -10px;
  }
`;

export const NameStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;

  transform: translate(-10px, 10px); /* Ajusta la posición del ImageStyled */

  ${mediaQueries.desktop} {
    left: 250px;
    bottom: 0;
  }
  ${mediaQueries.tablet} {
    left: 200px;
    bottom: 20px;
  }
  ${mediaQueries.mobile} {
    left: -10px;
    bottom: 3px;
  }
`;
export const BannerProfileImageStyle = styled.div`
  background-color: ${({ theme }) => theme.colors.bgCard};
  ${mediaQueries.desktop} {
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-top: 40px;
    align-items: center;
    height: max-content;
    width: 95%;
    border-radius: 40px;
  }
  ${mediaQueries.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: max-content;
    width: 98%;
    border-radius: 30px;
  }
  ${mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: max-content;
    border-radius: 15px;
    width: 100%;
  }
`;
