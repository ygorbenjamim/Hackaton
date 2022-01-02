import React from 'react';
import { StatusBar } from 'expo-status-bar';
import HomeImage from '../../assets/home-image.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Background,
  Header,
  Body,
  Title,
  SubTitle,
  ContainerRow,
  BtnSerch,
  BtnProf,
  BtnLabel,
  ContainerMenu,
  BtnMenu,
  ImageHome
} from './style';

export default function Home({ navigation }) {
  return (
    <Background>
      <StatusBar transparent={true} />
      <ContainerMenu>
        <BtnMenu onPress={() => navigation.openDrawer()}>
          <Icon
            name="menu"
            color="white"
            size={35}
          />
        </BtnMenu>
      </ContainerMenu>
      <Header>
        <ImageHome source={HomeImage} />
      </Header>

      <Body>
        <Title>Seja bem vindo!</Title>
        <SubTitle>Estamos a sua disposição</SubTitle>

        <ContainerRow>
          <BtnSerch onPress={() => navigation.navigate('ShowResults')}>
            <Icon
              name="account-search"
              size={35}
              color="white"
            />
            <BtnLabel>Buscar</BtnLabel>
          </BtnSerch>

          <BtnProf onPress={() => navigation.navigate('Translator')}>
            <Icon
              name="account-tie-outline"
              size={35}
              color="white"
            />
            <BtnLabel>Cadastrar</BtnLabel>
          </BtnProf>
        </ContainerRow>
      </Body>
    </Background>
  );
}
