import React from 'react';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import imgLogo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={imgLogo} alt="Logo do GoBarber" />
          <form>
            <h1> Faça seu cadastro </h1>
            <Input name="name" placeholder="Nome" icon={FiUser} />
            <Input name="email" placeholder="E-mail" icon={FiMail} />
            <Input name="password" placeholder="Senha" icon={FiLock} />
            <Button type="submit"> Cadastrar</Button>
          </form>
          <a href="home">
            <FiArrowLeft size={20} />
            Voltar para logon
          </a>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
