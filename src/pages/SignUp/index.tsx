import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import * as Yup from 'yup';
import imgLogo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: Object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('Email obrigatório')
          .email('Informe um email válido'),
        password: Yup.string().min(6, 'Minimo 6 caracteres'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={imgLogo} alt="Logo do GoBarber" />
          <Form onSubmit={handleSubmit}>
            <h1> Faça seu cadastro </h1>
            <Input name="name" placeholder="Nome" icon={FiUser} type="text" />
            <Input
              name="email"
              placeholder="E-mail"
              icon={FiMail}
              type="text"
            />
            <Input
              name="password"
              placeholder="Senha"
              icon={FiLock}
              type="password"
            />
            <Button type="submit"> Cadastrar</Button>
          </Form>
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
