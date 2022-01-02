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

export default function RegisterPStepFour({ navigation }) {
  const [password, setPassword] = useState('');
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
        <Title>Você precisa de uma senha.</Title>
      </Header>

      <Body>
        <SubTitle>Digite uma senha que você consiga lembrar facilmente.</SubTitle>
        <Mask>
          <TextInputMask
            style={styles.inputMask}
            type={'custom'}
            options={{
              mask: '************************'
            }}
            secureTextEntry={true}
            placeholder="Sua senha vem aqui"
            value={password}
            onChangeText={password => setPassword(password)}
          />
        </Mask>
      </Body>

      <Footer>
        <BtnGreen onPress={() => navigation.navigate('RegisterPStepFive')}>
          <BtnLabel> Prosseguir </BtnLabel>
        </BtnGreen>
      </Footer>
    </Background>
  );
}