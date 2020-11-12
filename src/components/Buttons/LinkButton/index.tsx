import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

interface Props{
  description: string;
  title: string;
  model: string;
  linkRoute: string;
}

const LinkButton: React.FC<Props> = ({ description, title, model, linkRoute }) => (
  <Container model = { model }>
    <Link to = { linkRoute }  title = { title } >{ description }</Link>
  </Container>
);

export default LinkButton;
