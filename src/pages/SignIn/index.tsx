import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationErrors';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Informe um email válido'),
          password: Yup.string().required('Senha obrigatória'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        await signIn({
          email: data.email,
          password: data.password,
        });

        addToast({
          type: 'sucess',
          title: 'Autenticado com Sucesso',
          description: 'Seja bem-vindo ao GoBarber',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
        }
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, verique as credenciais',
        });
      }
    },
    [signIn, addToast],
  );

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
            <Button type="submit">Entrar</Button>
            <a href="forgot"> Esqueci minha senha</a>
          </Form>
          <Link to="/signup">
            <FiLogIn size={20} />
            Criar Conta
          </Link>
        </Content>
        <Background />
      </Container>
    </>
  );
};

export default SignIn;
