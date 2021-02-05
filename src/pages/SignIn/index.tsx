import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styled';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="logo do GoBarber" />
          <form>
            <h1> Faça seu logon </h1>
            <Input
              name="email"
              placeholder="Informe o seu email"
              icon={FiMail}
            />
            <Input
              name="password"
              placeholder="Informe a sua senha"
              icon={FiLock}
            />
            <Button type="submit"> Entrar</Button>
            <a href="forgot"> Esqueci minha senha</a>
          </form>
          <a href="createAccount">
            <FiLogIn size={20} />
            Criar Conta
          </a>
        </Content>
        <Background />
      </Container>
    </>
  );
};

export default SignIn;
