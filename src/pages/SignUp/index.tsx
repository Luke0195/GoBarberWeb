import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';

import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import imgLogo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import { Container, Content, Background } from './styles';
import api from '../../services/api';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
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

        await api.post('/users', data);

        history.push('/dashboard');
        addToast({
          type: 'info',
          title: 'Usuário cadastrado com sucesso',
          description:
            'Você será redirecionado para página de login em  instantes',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Por favor verifique as informações inseridas.',
        });
      }
    },

    [addToast, history],
  );

  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={imgLogo} alt="Logo do GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
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
          <Link to="/">
            <FiArrowLeft size={20} />
            Voltar para logon
          </Link>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
