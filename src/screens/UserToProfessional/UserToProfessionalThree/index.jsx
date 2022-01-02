import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  Background,
  Header,
  Body,
  Footer,
  BtnOptions,
  Title,
  SubTitle,
  BtnGreen,
  BtnLabel,
  BtnArrowBack
} from '../style';

export default function UserToProfessionalThree({ navigation }) {
  const [m1, setM1] = useState(false);
  const [m2, setM2] = useState(false);
  const [m3, setM3] = useState(false);
  const [m4, setM4] = useState(false);
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
        <Title>Precisamos saber os seus métodos.</Title>
      </Header>

      <Body>
        <SubTitle>Selecione as opções clicando nelas.</SubTitle>
        <BtnOptions
          onPress={() => { m1 ? setM1(false) : setM1(true) }}
        >
          <BtnLabel> Tradução oral à prima vista </BtnLabel>
          {m1 ? <Ionicons name="checkmark-outline" size={16} color="#fff" /> : null}
        </BtnOptions>
        <BtnOptions
          onPress={() => { m2 ? setM2(false) : setM2(true) }}
        >
          <BtnLabel> Chuchotage </BtnLabel>
          {m2 ? <Ionicons name="checkmark-outline" size={16} color="#fff" /> : null}
        </BtnOptions>
        <BtnOptions
          onPress={() => { m3 ? setM3(false) : setM3(true) }}
        >
          <BtnLabel> Interpretação de conferência </BtnLabel>
          {m3 ? <Ionicons name="checkmark-outline" size={16} color="#fff" /> : null}
        </BtnOptions>
        <BtnOptions
          onPress={() => { m4 ? setM4(false) : setM4(true) }}
        >
          <BtnLabel> Interpretação simutânea </BtnLabel>
          {m4 ? <Ionicons name="checkmark-outline" size={16} color="#fff" /> : null}
        </BtnOptions>
      </Body>

      <Footer>
        <BtnGreen onPress={() => navigation.navigate('UserToProfessionalFour')}>
          <BtnLabel> Prosseguir </BtnLabel>
        </BtnGreen>
      </Footer>
    </Background>
  );
}