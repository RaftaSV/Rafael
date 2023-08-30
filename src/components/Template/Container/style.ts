import styled from 'styled-components';

export const Container = styled.div `
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  margin-top: 60px;
`;

export const StyleWrapper = styled.div `
  width: 95%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bgCard};
    border-radius: 40px;
`;
