import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';
import {
  Background,
  Body,
  BackgroundModal,
  HeaderModal,
  TitleModal,
  InputModal,
  ContainerBtnModal,
  BtnModal,
  BtnLabelModal,
  ContainerMenu,
  ContainerText,
  Title,
  SubTitle,
  BtnGreen,
  BtnLabel,
  MessageSuccess,
  BtnMenu
} from './style';

export default function Support({ navigation }) {

  const modalizeRef = useRef(null);
  const [contact, setContact] = useState('');
  const [displaySuccess, setDisplaySuccess] = useState('none');

  // Função para abrir o modal para alterar a descrição
  function onOpen() {
    modalizeRef.current?.open();
  }
  // Função para fechar o modal descrição
  function onClose() {
    modalizeRef.current?.close();
  }

  function sendContact() {
    console.log("Foi enviado um contato de suporte");
    onClose();
    setContact('');
    setDisplaySuccess('flex');
    setTimeout(() => {
      setDisplaySuccess('none');
    }, 5000);
  }

  return (
    <Background>
      <StatusBar transparent={true} />
      <ContainerMenu>
        <BtnMenu onPress={() => navigation.openDrawer()}>
          <Ionicons
            name="menu"
            color="#fff"
            size={35}
          />
        </BtnMenu>
      </ContainerMenu>

      <Body>
        <ContainerText>
          <Title>Você precisa de ajuda ou quer relatar algum problema? </Title>

          <SubTitle>
            Por favor, entre em contato conosco relatando detalhadamente sua 
            situação e retornaremos o mais breve possível.
          </SubTitle>
        </ContainerText>

        <BtnGreen onPress={onOpen}>
          <BtnLabel>Entrar em contato</BtnLabel>
        </BtnGreen>
        <MessageSuccess
          style={{ display: displaySuccess }}
        >
          Mensagem de contato enviada!
        </MessageSuccess>
      </Body>

      <Modalize
        ref={modalizeRef}
        snapPoint={400}
      >
        <BackgroundModal>
          <HeaderModal>
            <TitleModal>Descreva sua situação.</TitleModal>
          </HeaderModal>

          <InputModal
            value={contact}
            onChangeText={contact => setContact(contact)}
            multiline={true}
          />
          <ContainerBtnModal>
            <BtnModal onPress={onClose}>
              <BtnLabelModal>Cancelar</BtnLabelModal>
            </BtnModal>
            <BtnModal onPress={sendContact}>
              <BtnLabelModal>Enviar</BtnLabelModal>
            </BtnModal>
          </ContainerBtnModal>
        </BackgroundModal>
      </Modalize>
    </Background>
  );
}
