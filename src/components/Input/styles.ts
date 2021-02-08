import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}
export const Container = styled.div<ContainerProps>`
  width: 100%;
  background: #232129;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 16px;
  color: #666360;
  border: 2px solid #232129;
  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
  & + div {
    margin-top: 16px;
  }
`;
