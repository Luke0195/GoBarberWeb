import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  color: #312e38;
  height: 56px;
  border-radius: 10px;
  padding: 0 16px;
  border: 0;
  width: 100%;
  background: #ff9900;
  font-weight: 500;
  margin-top: 16px;
  transition: background 0.8s ease-out;

  &:hover {
    background: ${shade(0.2, '#ff9900')};
  }
`;
