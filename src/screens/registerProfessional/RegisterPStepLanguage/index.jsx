import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text';
import {
  Background,
  Header,
  Body,
  Footer,
  Title,
  SubTitle,
  BtnGreen,
  BtnLabel,
  BtnArrowBack,
  Mask,
  BtnOptions,
  styles
} from '../style';

export default function RegisterPStepLanguage({ navigation }) {
  const [language, setLanguage] = useState('');
  const [languageTwo, setLanguageTwo] = useState('');
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
        <Title>Já que você é um(a) tradutor(a), precisamos cadastrar no mínimo duas línguas.</Title>
      </Header>

      <Body>
        <SubTitle>Quais línguas você consegue traduzir?</SubTitle>
        <Mask>
          <TextInputMask
            style={styles.inputMask}
            type={'custom'}
            options={{
              mask: 'SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS'
            }}
            placeholder="Primeira língua"
            value={language}
            onChangeText={language => setLanguage(language)}
          />
        </Mask>
        <Mask>
          <TextInputMask
            style={styles.inputMask}
            type={'custom'}
            options={{
              mask: 'SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS'
            }}
            placeholder="Segunda língua"
            value={languageTwo}
            onChangeText={languageTwo => setLanguageTwo(languageTwo)}
          />
        </Mask>
        <BtnOptions>
          <BtnLabel>Adicionar outra língua</BtnLabel>
        </BtnOptions>
      </Body>

      <Footer>
        <BtnGreen onPress={() => navigation.navigate('RegisterPStepSeven')}>
          <BtnLabel> Prosseguir </BtnLabel>
        </BtnGreen>
      </Footer>
    </Background>
  );
}