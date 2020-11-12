import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  model: string;
}

const Button: React.FC<ButtonProps> = ({ children, model, ...rest }) => (
    <Container model = { model } {...rest }>
        { children }
    </Container>
);

export default Button;
