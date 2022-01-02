import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  Background,
  Header,
  Body,
  Footer,
  ContainerRow,
  BtnOptions,
  Title,
  SubTitle,
  Question,
  BtnGreen,
  BtnLabelQ,
  BtnLabel,
  BtnArrowBack,
  BtnOptionsQ,
  YesNo,
} from '../style';

export default function UserToProfessionalOne({ navigation }) {
  const [translator, setTranslator] = useState(null);
  const [sworn, setSworn] = useState(null);
  const [interpreter, setInterpreter] = useState(null);
  return (
    <Background>
      <BtnArrowBack onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="#000" />
      </BtnArrowBack>

      <Header>
        <Title>Precisamos saber as suas qualificações.</Title>
      </Header>

      <Body>
        <SubTitle>Selecione as opções clicando nelas.</SubTitle>
        <ContainerRow>
          <BtnOptionsQ
            onPress={() => {
              translator ? setTranslator(false) : setTranslator(true);
            }}
          >
            <BtnLabelQ> Sou tradutor(a) </BtnLabelQ>
            {translator ? (
              <Ionicons
                name="checkmark-circle-outline"
                size={32}
                color="#fff"
              />
            ) : (
              <Ionicons name="close-circle" size={32} color="#fff" />
            )}
          </BtnOptionsQ>
          <BtnOptionsQ
            onPress={() => {
              interpreter ? setInterpreter(false) : setInterpreter(true);
            }}
          >
            <BtnLabelQ> Sou intérprete </BtnLabelQ>
            {interpreter ? (
              <Ionicons
                name="checkmark-circle-outline"
                size={32}
                color="#fff"
              />
            ) : (
              <Ionicons name="close-circle" size={32} color="#fff" />
            )}
          </BtnOptionsQ>
        </ContainerRow>
        {translator ? (
          <YesNo>
            <Question> Tradutor(a) juramentado(a)? </Question>
            <BtnOptions
              onPress={() => {
                sworn ? setSworn(false) : setSworn(true);
              }}
            >
              {sworn ? <BtnLabel> Sim </BtnLabel> : <BtnLabel> Não </BtnLabel>}
            </BtnOptions>
          </YesNo>
        ) : null}
      </Body>

      <Footer>
        <BtnGreen
          onPress={() => {
            translator
              ? navigation.navigate('UserToProfessionalLanguage')
              : navigation.navigate('UserToProfessionalTwo');
          }}
        >
          <BtnLabel> Prosseguir </BtnLabel>
        </BtnGreen>
      </Footer>
    </Background>
  );
}
