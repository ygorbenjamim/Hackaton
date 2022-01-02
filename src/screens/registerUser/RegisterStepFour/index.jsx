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

export default function RegisterStepFour({ navigation }) {
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
        <Title>Estamos quase no final...</Title>
      </Header>

      <Body>
        <SubTitle>Para sua melhor segurança, digite uma senha.</SubTitle>
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
        <BtnGreen onPress={() => navigation.navigate('RegisterStepFive')}>
          <BtnLabel> Prosseguir </BtnLabel>
        </BtnGreen>
      </Footer>
    </Background>
  );
}