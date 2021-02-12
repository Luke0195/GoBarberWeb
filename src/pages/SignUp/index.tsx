import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import imgLogo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: Object) => {
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
    } catch (error) {
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);
    }
  }, []);

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
