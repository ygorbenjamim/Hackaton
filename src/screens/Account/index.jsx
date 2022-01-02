import React, { useState, useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';
import {
  Background,
  Header,
  Body,
  BtnMenu,
  ImageAccount,
  BtnImage,
  BtnAccount,
  BtnHeader,
  BtnBody,
  BtnText,
  BtnSubText,
  ContainerIcon,
  Variable,
  BackgroundModal,
  HeaderModal,
  BodyModal,
  TitleModal,
  InputModal,
  BtnModalize
} from './style';

export default function EditProfile({ navigation }) {

  // variáveis para teste
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const image = require('../../assets/default-profile.png');
  const modalizeNRef = useRef(null);
  const modalizeDRef = useRef(null);

  // Função para abrir o modal para alterar o nome
  function onOpenN() {
    modalizeNRef.current?.open();
  }

  // Função para abrir o modal para alterar a descrição
  function onOpenD() {
    modalizeDRef.current?.open();
  }

  // Função para fechar o modal nome
  function onCloseN() {
    modalizeNRef.current?.close();
  }

  // Função para fechar o modal descrição
  function onCloseD() {
    modalizeDRef.current?.close();
  }

  return (
    <Background>
      <BtnMenu onPress={() => navigation.openDrawer()}>
        <Ionicons
          name="menu"
          color="#fff"
          size={35}
        />
      </BtnMenu>

      <Header>
        <ImageAccount source={image} />
        <BtnImage onPress={() => { }}>
          <Ionicons
            name="camera"
            size={35}
            color="#888"
          />
        </BtnImage>
      </Header>

      <Body>
        <BtnAccount onPress={onOpenN}>
          <BtnHeader>
            <Ionicons
              name="person"
              size={27}
              color="#fff"
            />
            <BtnText>Nome</BtnText>
            <ContainerIcon>
              <Ionicons
                name="pencil-sharp"
                size={27}
                color="#fff"
              />
            </ContainerIcon>
          </BtnHeader>
          <BtnBody>
            <Variable>{name}</Variable>
            <BtnSubText>Este nome é o que será visto pelos usuários</BtnSubText>
          </BtnBody>
        </BtnAccount>

        <BtnAccount onPress={onOpenD}>
          <BtnHeader>
            <Ionicons
              name="information-circle"
              size={27}
              color="#fff"
            />
            <BtnText>Descrição</BtnText>
            <ContainerIcon>
              <Ionicons
                name="pencil-sharp"
                size={27}
                color="#fff"
              />
            </ContainerIcon>
          </BtnHeader>
          <BtnBody>
            <Variable>{description}</Variable>
          </BtnBody>
        </BtnAccount>
      </Body>


      <Modalize
        ref={modalizeNRef}
        snapPoint={400}
        modalHeight={400}
      >
        <BackgroundModal>
          <HeaderModal>
            <TitleModal>Insira seu nome</TitleModal>
          </HeaderModal>

          <InputModal
            value={name}
            onChangeText={name => setName(name)}
          />

          <BodyModal>
            <BtnModalize onPress={onCloseN}>
              <TitleModal>Cancelar</TitleModal>
            </BtnModalize>
            <BtnModalize onPress={onCloseN}>
              <TitleModal>Salvar</TitleModal>
            </BtnModalize>
          </BodyModal>
        </BackgroundModal>
      </Modalize>

      <Modalize
        ref={modalizeDRef}
        snapPoint={400}
      >
        <BackgroundModal>
          <HeaderModal>
            <TitleModal>Insira sua breve descrição</TitleModal>
          </HeaderModal>
          <InputModal
            value={description}
            onChangeText={description => setDescription(description)}
            multiline={true}
          />
          <BodyModal>
            <BtnModalize onPress={onCloseD}>
              <TitleModal>Cancelar</TitleModal>
            </BtnModalize>
            <BtnModalize onPress={onCloseD}>
              <TitleModal>Salvar</TitleModal>
            </BtnModalize>
          </BodyModal>
        </BackgroundModal>
      </Modalize>
    </Background>
  );
}
