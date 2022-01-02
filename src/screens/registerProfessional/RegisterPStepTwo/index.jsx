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
  styles
} from '../style';

export default function RegisterPStepTwo({ navigation }) {
  const [nameProfessional, setNameProfessional] = useState('');
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
        <Title>Prazer, eu me chamo Pin. Pode contar comigo no que precisar!</Title>
      </Header>

      <Body>
        <SubTitle>Qual é o seu nome?</SubTitle>
        <Mask>
          <TextInputMask
            style={styles.inputMask}
            type={'custom'}
            options={{
              mask: 'SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS'
            }}
            placeholder="Seu nome vem aqui"
            value={nameProfessional}
            onChangeText={name => setNameProfessional(name)}
          />
        </Mask>
      </Body>

      <Footer>
        <BtnGreen onPress={() => navigation.navigate('RegisterPStepThree')}>
          <BtnLabel> Prosseguir </BtnLabel>
        </BtnGreen>
      </Footer>
    </Background>
  );
}