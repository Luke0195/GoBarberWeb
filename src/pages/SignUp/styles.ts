import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import signUpBackground from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const moveUp = keyframes`


0%{
  transform: translateX(20px);
  opacity: 0.3;
}

100%{
  transform: translateY(0)
}
`;
export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${moveUp} 2s ease-out;

  h1 {
    margin: 24px;
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
  }

  a {
    display: block;
    margin-top: 8px;
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: color 0.8s ease-out;
    &:hover {
      color: ${shade(0.2, '#fff')};
    }

    svg {
      margin-right: 10px;
    }
  }
`;
