import React from 'react';
import { useTransition } from 'react-spring';
import { Container } from './styles';
import { ToastMessage } from '../../hooks/toast';
import Toast from './Toast/index';

interface ContainerProps {
  messages: ToastMessage[];
}
const ToastContainer: React.FC<ContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%' },
      enter: { right: '0%' },
      leave: { right: '-120%', opacity: 0.6 },
    },
  );
  return (
    <>
      <Container>
        {messagesWithTransitions.map(({ item, key, props }) => (
          <Toast key={key} style={props} message={item} />
        ))}
      </Container>
    </>
  );
};

export default ToastContainer;