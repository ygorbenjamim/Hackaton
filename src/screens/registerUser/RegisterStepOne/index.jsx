import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  Background,
  Header,
  Body,
  Footer,
  Title,
  SubTitle,
  BtnGreen,
  BtnOrange,
  BtnLabel,
  BtnArrowBack
} from '../style';

export default function RegisterStepOne({ navigation }) {
  return (
    <Background>
      <BtnArrowBack onPress={() => navigation.goBack()}>
        <Ionicons
          name="arrow-back"
          size={30}
          color="#000"
        />
      </BtnArrowBack>

      <Header>
        <Title>Olá! Estamos felizes de ter você aqui em nosso aplicativo.</Title>
      </Header>

      <Body>
        <SubTitle>Clique em prosseguir que eu estarei aqui te orientando nesse cadastro.</SubTitle>
      </Body>

      <Footer>
        <BtnGreen onPress={() => navigation.navigate('RegisterStepTwo')}>
          <BtnLabel> Prosseguir </BtnLabel>
        </BtnGreen>
        <BtnOrange onPress={() => navigation.navigate('RegisterPStepTwo')}>
          <BtnLabel> Sou instrutor(a) </BtnLabel>
        </BtnOrange>
      </Footer>
    </Background>
  );
}