import styled from 'styled-components';
import { shade } from 'polished';
import singInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      text-decoration: none;
      color: #fff;
      display: block;
      margin-top: 24px;
      transition: color 0.5s ease-out;
      &:hover {
        color: ${shade(0.2, '#fff')};
      }
    }
  }
  > a {
    color: #ff9900;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-top: 16px;
    transition: color 0.5s ease-out;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${singInBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
