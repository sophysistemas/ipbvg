import React, { useEffect, useState } from 'react';
//import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web'

import Input from '../../components/Input';
import Button from '../../components/Buttons/Default';

import logoImg from '../../assets/logo.png';

import { Container, Content, Background } from './styles';

import { getVerse } from '../../services/api';

interface User {
  username: string;
  password: string;
}

interface Verse {
  book: string;
  chapter: number;
  verse: number;
  description: string;
}
const SignIn: React.FC = () => {
  const history = useHistory();

  const [verses, setVerses] = useState<Verse[]>([]);

  useEffect(() => {
    const data = getVerse();
    setVerses(data);
    
    const randomVerse = verses[Math.floor(Math.random()*verses.length)];

  }, []);

  function handlerSubmit(data: User): void {
    history.push('/dashboard');
  }

  return (
    <Container>
      <Background>
        <div>
          <span>"Ora, a fé é a certeza de coisas que se esperam, a convicção de fatos que se não veem."</span><br/>
          <span>Hebreus 11.1</span>
        </div>
      </Background>
      <Content>
        <div className = "div-logo">
          <img src = { logoImg } alt = "Lima & Lima" />
        </div>
        <Form onSubmit={handlerSubmit}>
          <h1>Faça seu login</h1>

          <Input type="text" name="username" icon={FiMail} placeholder="Usuário" />
          <Input type="password" name="password" icon={FiLock} placeholder="Senha" />

          <Button type="submit" model = "primary">Entrar</Button>
        </Form>
      </Content>
    </Container>
  );
}

export default SignIn;
