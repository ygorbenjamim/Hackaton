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

export default function RegisterPStepFive({ navigation }) {
  const [confPassword, setConfPassword] = useState('');
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
        <Title>Confirme sua senha para evitar possíveis problemas.</Title>
      </Header>

      <Body>
        <SubTitle>Insira a senha novamente.</SubTitle>
        <Mask>
          <TextInputMask
            style={styles.inputMask}
            type={'custom'}
            options={{
              mask: '************'
            }}
            secureTextEntry={true}
            placeholder="Senha"
            value={confPassword}
            onChangeText={password => setConfPassword(password)}
          />
        </Mask>
      </Body>

      <Footer>
        <BtnGreen onPress={() => navigation.navigate('RegisterPStepSix')}>
          <BtnLabel> Prosseguir </BtnLabel>
        </BtnGreen>
      </Footer>
    </Background>
  );
}