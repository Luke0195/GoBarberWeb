import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationErrors';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: Object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('Email obrigatório')
          .email('Informe um email válido'),
        password: Yup.string().required('Senha obrigatória'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="logo do GoBarber" />
          <Form onSubmit={handleSubmit} ref={formRef}>
            <h1> Faça seu logon </h1>
            <Input
              name="email"
              placeholder="Informe o seu email"
              icon={FiMail}
            />
            <Input
              name="password"
              type="password"
              placeholder="Informe a sua senha"
              icon={FiLock}
            />
            <Button type="submit"> Entrar</Button>
            <a href="forgot"> Esqueci minha senha</a>
          </Form>
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
