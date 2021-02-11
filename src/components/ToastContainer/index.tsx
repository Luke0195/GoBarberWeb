import React from 'react';

import { Container } from './styles';
import { ToastMessage } from '../../hooks/toast';
import Toast from './Toast/index';

interface ContainerProps {
  messages: ToastMessage[];
}
const ToastContainer: React.FC<ContainerProps> = ({ messages }) => {
  return (
    <>
      <Container>
        {messages.map((message) => (
          <Toast key={message.id} message={message} />
        ))}
      </Container>
    </>
  );
};

export default ToastContainer;
