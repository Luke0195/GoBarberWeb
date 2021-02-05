import styled from 'styled-components';
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

    input {
      width: 100%;
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;

      & + input {
        margin-top: 8px;
      }
    }

    button {
      color: #312e38;
      height: 56px;
      border-radius: 10px;
      padding: 0 16px;
      border: 0;
      width: 100%;
      background: #ff9900;
      font-weight: 500;
      margin-top: 16px;
    }

    a {
      text-decoration: none;
      color: #fff;
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
