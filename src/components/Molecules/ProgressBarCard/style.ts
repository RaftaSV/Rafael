import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 325px;
    height: 110px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.nav};
    margin: 10px;
    padding-left: 10px;
    padding-right: 10px;
`;

export const ProgressBarSkill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;


export const ImageStyle = styled.img`
    width: 80px;
    height: 70px;
`;

