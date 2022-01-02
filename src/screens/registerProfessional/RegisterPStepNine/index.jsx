import React from 'react';
import {
  Background,
  Header,
  Body,
  Footer,
  Title,
  SubTitle,
  BtnGreen,
  BtnLabel
} from '../style';

export default function RegisterPStepNine({ navigation }) {
  return (
    <Background>
      <Header>
        <Title>Pronto!</Title>
      </Header>

      <Body>
        <SubTitle>Você foi cadastrado como instrutor e está tudo ok, clique no botão abaixo para continuar seu login.</SubTitle>
      </Body>

      <Footer>
        <BtnGreen onPress={() => navigation.navigate('Login')}>
          <BtnLabel> Login </BtnLabel>
        </BtnGreen>
      </Footer>
    </Background>
  );
}