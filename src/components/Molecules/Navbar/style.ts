import styled from 'styled-components';
import  Container from 'components/Atoms/Conteiner';
import Button from 'components/Atoms/Button/Button';

export const NavbarNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;`;
export const NavbarStyle = styled(Container)<{ $isScrolling?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 12px 15px;
  border-radius: 15px;
  transition: background-color 0.1s ease-in-out, backdrop-filter 0.1s ease-in-out;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  z-index: ${({ theme }) => theme.zIndex.nav};
  background-color: ${({ $isScrolling, theme }) => ($isScrolling ? theme.colors.nav : 'transparent')};
  backdrop-filter: ${({ $isScrolling }) => ($isScrolling ? 'blur(10px)' : 'none')};
`;



// componente importando button

export const NavbarButton = styled(Button)`
min-width: auto;
padding: 1px 10px;
transition: color 0.3s;
margin-top: 0;
&:hover {
  opacity: 4;
  color: ${({ theme }) => theme.colors.npm};
}
 `;