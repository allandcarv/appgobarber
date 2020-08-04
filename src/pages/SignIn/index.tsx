import React from 'react';
import { Image } from 'react-native';

import { Container, Title } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu logon</Title>

      <Input name="email" icon="mail" placeholder="E-Mail" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button
        onPress={() => {
          console.log('clicked');
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default SignIn;
