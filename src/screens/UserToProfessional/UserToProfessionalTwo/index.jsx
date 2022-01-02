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

export default function UserToProfessionalTwo({ navigation }) {
  const [community, setCommunity] = useState(false);
  const [forensic, setForensic] = useState(false);
  const [doctor, setDoctor] = useState(false);
  const [lawful, setLawful] = useState(false);
  const [corporate, setCorporate] = useState(false);
  const [cultural, setCultural] = useState(false);
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
        <Title>Precisamos saber as suas áreas de atuação.</Title>
      </Header>

      <Body>
        <SubTitle>Selecione as opções clicando nelas.</SubTitle>
        <BtnOptions
          onPress={() => { community ? setCommunity(false) : setCommunity(true) }}
        >
          <BtnLabel> Comunitário </BtnLabel>
          {community ? <Ionicons name="checkmark-outline" size={16} color="#fff" /> : null}
        </BtnOptions>
        <BtnOptions
          onPress={() => { forensic ? setForensic(false) : setForensic(true) }}
        >
          <BtnLabel> Forense </BtnLabel>
          {forensic ? <Ionicons name="checkmark-outline" size={16} color="#fff" /> : null}
        </BtnOptions>
        <BtnOptions
          onPress={() => { doctor ? setDoctor(false) : setDoctor(true) }}
        >
          <BtnLabel> Médica </BtnLabel>
          {doctor ? <Ionicons name="checkmark-outline" size={16} color="#fff" /> : null}
        </BtnOptions>
        <BtnOptions
          onPress={() => { lawful ? setLawful(false) : setLawful(true) }}
        >
          <BtnLabel> Legal </BtnLabel>
          {lawful ? <Ionicons name="checkmark-outline" size={16} color="#fff" /> : null}
        </BtnOptions>
        <BtnOptions
          onPress={() => { corporate ? setCorporate(false) : setCorporate(true) }}
        >
          <BtnLabel> Corporativa </BtnLabel>
          {corporate ? <Ionicons name="checkmark-outline" size={16} color="#fff" /> : null}
        </BtnOptions>
        <BtnOptions
          onPress={() => { cultural ? setCultural(false) : setCultural(true) }}
        >
          <BtnLabel> Cultural </BtnLabel>
          {cultural ? <Ionicons name="checkmark-outline" size={16} color="#fff" /> : null}
        </BtnOptions>
      </Body>

      <Footer>
        <BtnGreen onPress={() => navigation.navigate('UserToProfessionalThree')}>
          <BtnLabel> Prosseguir </BtnLabel>
        </BtnGreen>
      </Footer>
    </Background>
  );
}