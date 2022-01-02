import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

import {
  BtnVoid,
  ModalVoid,
  Scroll,
  Background,
  Header,
  Footer,
  BackgroundModal,
  HeaderModal,
  BodyModal,
  TopInfo,
  Info,
  Row,
  InfoTxt,
  TitleInfoTxt,
  BtnArrowBack,
  Colunm,
  NameModal,
  ProfessionalImage,
  ProfessionalName,
  ProfessionalLang,
  ProfessionalDescription,
  BtnGreen,
  BackgroundMessage,
  HeaderMessage,
  BodyMessage,
  ImageMessage,
  TextMessage,
  BtnBackMessage,
  FooterMessage,
  InputMessage,
  SendMessage,
  BtnLabel,
} from './style';

import Profile1 from '../../assets/1-profile.jpg';
import Profile2 from '../../assets/2-profile.jpg';
import Profile3 from '../../assets/3-profile.jpg';
import Profile4 from '../../assets/4-profile.jpg';
import Profile5 from '../../assets/5-profile.jpg';
import DefaultProfile from '../../assets/default-profile.png';

export default function ProfessionalProfile({
  name,
  description,
  image,
  email,
  number,
  city,
  translator,
  sworn,
  interpreter,
  community,
  forensic,
  doctor,
  lawful,
  corporate,
  cultural,
  primaVista,
  chuchotage,
  interConf,
  interSimu,
  langName,
  day,
  hour
}) {
  const [controlModal, setControlModal] = useState(false);
  const [controlMessage, setControlMessage] = useState(false);
  const [pImage, setPImage] = useState(DefaultProfile);
  const [mounted, setMounted] = useState(true);

  if (mounted) {
    if (image === '1') setPImage(Profile1);
    if (image === '2') setPImage(Profile2);
    if (image === '3') setPImage(Profile3);
    if (image === '4') setPImage(Profile4);
    if (image === '5') setPImage(Profile5);
    if (image === '6') setPImage(DefaultProfile);
    setMounted(false);
  }

  const checkQualification = () => {
    if (sworn === 1) {
      return (
        <>
          <Ionicons name="checkmark-circle" size={30} color="#04D361" />
          <InfoTxt>Tradutor Juramentado</InfoTxt>
        </>
      );
    }
    if (translator === 1 && sworn === 0) {
      return (
        <>
          <Ionicons name="checkmark-circle" size={30} color="#04D361" />
          <InfoTxt>Tradutor não juramentado</InfoTxt>
        </>
      );
    }
    if (translator === 0) {
      return (
        <>
          <Ionicons name="close-circle" size={30} color="#ff3333" />
          <InfoTxt>Tradutor</InfoTxt>
        </>
      );
    }
  };

  return (
    <Background>
      <Header>
        <BtnVoid onPress={() => setControlModal(true)}>
          <ProfessionalImage source={pImage} />
        </BtnVoid>
        <BtnVoid onPress={() => setControlModal(true)}>
          <ProfessionalName> {name} </ProfessionalName>
          <ProfessionalLang> {langName} </ProfessionalLang>
        </BtnVoid>
      </Header>

      <ProfessionalDescription>{description}</ProfessionalDescription>

      <Footer>
        <BtnGreen onPress={() => setControlModal(true)}>
          <BtnLabel> Mais informações </BtnLabel>
        </BtnGreen>
      </Footer>

      <ModalVoid visible={controlModal} animationType="fade">
        <Scroll>
          <BackgroundModal>
            <BtnArrowBack onPress={() => setControlModal(false)}>
              <Ionicons name="arrow-back" size={30} color="#000" />
            </BtnArrowBack>

            <HeaderModal>
              <ProfessionalImage source={pImage} />
              <Colunm>
                <NameModal>{name}</NameModal>
                <BtnGreen onPress={() => { Linking.openURL(`https://api.whatsapp.com/send?phone=55${number}`) }}>
                  <BtnLabel>Whatsapp</BtnLabel>
                </BtnGreen>
              </Colunm>
            </HeaderModal>

            <BodyModal>
              <TopInfo>
                <Row>
                  <Ionicons color="#d65050" name="mail" size={30} />
                  <InfoTxt>{email}</InfoTxt>
                </Row>
                <Row>
                  <Ionicons color="#888" name="call" size={30} />
                  <InfoTxt>{number}</InfoTxt>
                </Row>
                <Row>
                  <Ionicons color="#a78bea" name="location" size={30} />
                  <InfoTxt>{city}</InfoTxt>
                </Row>
              </TopInfo>

              <Info>
                <TitleInfoTxt>Qualificações:</TitleInfoTxt>

                <Row>{checkQualification()}</Row>

                <Row>
                  {interpreter ? (
                    <Ionicons
                      name="checkmark-circle"
                      size={30}
                      color="#04D361"
                    />
                  ) : (
                    <Ionicons name="close-circle" size={30} color="#ff3333" />
                  )}
                  <InfoTxt>Intérprete</InfoTxt>
                </Row>
              </Info>

              <Info>
                <TitleInfoTxt>Áreas de atuação:</TitleInfoTxt>
                <Row>
                  {community === 1 ? (
                    <>
                      <Ionicons
                        name="checkmark-circle"
                        size={30}
                        color="#04D361"
                      />
                      <InfoTxt>Comunitária</InfoTxt>
                    </>
                  ) : null}
                </Row>
                <Row>
                  {forensic === 1 ? (
                    <>
                      <Ionicons
                        name="checkmark-circle"
                        size={30}
                        color="#04D361"
                      />
                      <InfoTxt>Forense</InfoTxt>
                    </>
                  ) : null}
                </Row>
                <Row>
                  {doctor === 1 ? (
                    <>
                      <Ionicons
                        name="checkmark-circle"
                        size={30}
                        color="#04D361"
                      />
                      <InfoTxt>Médica</InfoTxt>
                    </>
                  ) : null}
                </Row>
                <Row>
                  {lawful === 1 ? (
                    <>
                      <Ionicons
                        name="checkmark-circle"
                        size={30}
                        color="#04D361"
                      />
                      <InfoTxt>Legal</InfoTxt>
                    </>
                  ) : null}
                </Row>
                <Row>
                  {corporate === 1 ? (
                    <>
                      <Ionicons
                        name="checkmark-circle"
                        size={30}
                        color="#04D361"
                      />
                      <InfoTxt>Corporativa</InfoTxt>
                    </>
                  ) : null}
                </Row>
                <Row>
                  {cultural === 1 ? (
                    <>
                      <Ionicons
                        name="checkmark-circle"
                        size={30}
                        color="#04D361"
                      />
                      <InfoTxt>Cultural</InfoTxt>
                    </>
                  ) : null}
                </Row>
              </Info>

              <Info>
                <TitleInfoTxt>Métodos:</TitleInfoTxt>
                <Row>
                  {primaVista === 1 ? (
                    <>
                      <Ionicons
                        name="checkmark-circle"
                        size={30}
                        color="#04D361"
                      />
                      <InfoTxt>Tradução à prima vista</InfoTxt>
                    </>
                  ) : null}
                </Row>
                <Row>
                  {chuchotage === 1 ? (
                    <>
                      <Ionicons
                        name="checkmark-circle"
                        size={30}
                        color="#04D361"
                      />
                      <InfoTxt>Chuchotage</InfoTxt>
                    </>
                  ) : null}
                </Row>
                <Row>
                  {interConf === 1 ? (
                    <>
                      <Ionicons
                        name="checkmark-circle"
                        size={30}
                        color="#04D361"
                      />
                      <InfoTxt>Interpretação de conferência</InfoTxt>
                    </>
                  ) : null}
                </Row>
                <Row>
                  {interSimu === 1 ? (
                    <>
                      <Ionicons
                        name="checkmark-circle"
                        size={30}
                        color="#04D361"
                      />
                      <InfoTxt>Interpretação simutânes</InfoTxt>
                    </>
                  ) : null}
                </Row>
              </Info>
              <Info>
                <TitleInfoTxt>Disponibilidade:</TitleInfoTxt>
                <Row>
                  <Ionicons
                    name="calendar-outline"
                    size={30}
                    color="#04D361"
                  />
                  <InfoTxt>{day}</InfoTxt>
                </Row>
                <Row>
                  <Ionicons
                    name="stopwatch-outline"
                    size={30}
                    color="#04D361"
                  />
                  <InfoTxt>{hour}</InfoTxt>
                </Row>
              </Info>
            </BodyModal>
          </BackgroundModal>
        </Scroll>
      </ModalVoid>
    </Background>
  );
}
