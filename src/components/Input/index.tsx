import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}
const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [isFocus, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocused = useCallback(() => {
    setIsFocused(true);
  }, []);
  return (
    <>
      <Container isErrored={!!error} isFocused={isFocus} isFilled={isFilled}>
        {Icon && <Icon size={20} />}
        <input
          defaultValue={defaultValue}
          {...rest}
          ref={inputRef}
          onBlur={handleInputBlur}
          onFocus={handleInputFocused}
        />
        {error && (
          <Error title={error}>
            <FiAlertCircle size={20} color="#c30303" />
          </Error>
        )}
      </Container>
    </>
  );
};

export default Input;
