import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styled';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="logo do GoBarber" />
          <form>
            <h1> Faça seu logon </h1>
            <input type="text" placeholder="E-mail" />
            <input type="password" placeholder="Password" />
            <button type="submit"> Entrar</button>
            <a href="forgot"> Esqueci minha senha</a>
          </form>
          <a href="createAccount">
            <FiLogIn />
            Criar Conta
          </a>
        </Content>
        <Background />
      </Container>
    </>
  );
};

export default SignIn;