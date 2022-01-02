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
  BtnLabel,
  BtnArrowBack
} from './style';

export default function Translator({ navigation }) {
  return (
    <Background>
      <BtnArrowBack
        onPress={() => navigation.goBack()}
      >
        <Ionicons
          name="arrow-back"
          size={30}
          color="#fff"
        />
      </BtnArrowBack>

      <Header>
        <Title>Quer ser um tradutor, intérprete ou ambos?</Title>
      </Header>

      <Body>
        <SubTitle>
          Primeiro você precisa se cadastrar
          como um(a) instrutor(a) para
          poder oferecer seus serviços em
          nosso aplicativo.
        </SubTitle>
      </Body>

      <Footer>
        <BtnGreen onPress={() => navigation.navigate('UserToProfessionalOne')}>
          <BtnLabel> Vamos lá </BtnLabel>
        </BtnGreen>
      </Footer>
    </Background>
  );
}
