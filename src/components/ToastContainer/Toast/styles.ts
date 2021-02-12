import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ToastProps {
  type?: 'sucess' | 'error' | 'info';
  hasdescription: boolean;
}

const toastTypeVaritions = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,

  sucess: css`
    background: #53a653;
    color: #fff;
  `,

  error: css`
    background: #dc3545;
    color: #fff;
  `,
};

export const Container = styled(animated.div)<ToastProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  background: #ebf8ff;
  border-radius: 8px;
  color: #3172b7;
  ${(props) => toastTypeVaritions[props.type || 'info']}

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 24px;
    }
  }
  > svg {
    margin: 4px 12px 0 0;
  }

  button {
    position: absolute;
    top: 19px;
    right: 16px;
    border: 0;
    background: transparent;
    display: flex;
    align-items: center;
    color: inherit;
  }

  & + div {
    margin-top: 16px;
  }

  ${(props) =>
    !props.hasdescription &&
    css`
      align-items: center;
      margin-top: 0;
    `}
`;
