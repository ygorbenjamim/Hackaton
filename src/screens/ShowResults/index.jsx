import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import ProfessionalProfile from '../../components/ProfessionalProfile';
import {
  Background,
  Header,
  Body,
  Title,
  BtnArrowBack,
  Scroll,
  Refresh,
} from './style';

export default function ShowResults({ navigation }) {
  const [mounted, setMounted] = useState(false);
  if (mounted) setMounted(false);

  // Simulação do registro em banco de dados
  const listProf = [
    {
      id: 1,
      name: 'José Augusto Lopes',
      description:
        'Bacharel em Letras Francês. Experiência com interpretação comunitária e médica. Um ano de serviço junto à ACNUR na República Democrática do Congo.',
      image: '1',
      email: 'augusto.lopes90@gmail.com',
      number: '83988636175',
      city: 'Rio de Janeiro',
      translator: 1,
      sworn: 0,
      interpreter: 1,
      community: 1,
      forensic: 0,
      doctor: 1,
      lawful: 0,
      corporate: 0,
      cultural: 1,
      primaVista: 1,
      chuchotage: 0,
      interConf: 0,
      interSimu: 1,
      langName: 'Português / Francês',
      day: 'Segunda - Quinta',
      hour: '13h - 17h'
    },
    {
      id: 2,
      name: 'Maristela Correia',
      description:
        'Bacharel em Relações Internacionais. Especialização em Mediação Linguística. Experiência como tradutora e intérprete junto à ONG Aldeias Infantis S.O.S Brasil.',
      image: '4',
      email: 'correiamaristela@outlook.com',
      number: '83988288084',
      city: 'João Pessoa',
      translator: 1,
      sworn: 0,
      interpreter: 1,
      community: 1,
      forensic: 0,
      doctor: 0,
      lawful: 0,
      corporate: 0,
      cultural: 1,
      primaVista: 1,
      chuchotage: 0,
      interConf: 0,
      interSimu: 1,
      langName: 'Português / Espanhol',
      day: 'Terça',
      hour: '15h - 18h'
    },
    {
      id: 3,
      name: 'Shmuel Gabay ',
      description:
        'Graduando em Letras Português (licenciatura). Experiência com acolhimento de refugiados sírios em São Paulo. ',
      image: '2',
      email: 'shmuel.gabayy@gmail.com',
      number: '83988535642',
      city: 'Santo André',
      translator: 1,
      sworn: 0,
      interpreter: 1,
      community: 1,
      forensic: 0,
      doctor: 1,
      lawful: 0,
      corporate: 0,
      cultural: 1,
      primaVista: 1,
      chuchotage: 0,
      interConf: 1,
      interSimu: 1,
      langName: 'Hebraico / Português / Árabe',
      day: 'Sexta',
      hour: '09h - 18h'
    },
  ];

  // Variável para renderizar o componente ProfessionalProfile
  const Show = listProf.map(professional => {
    const name = professional.name.split(' ');
    const userName = `${name[0]} ${name[1]}`;
    // Exibe apenas os usuários com cpf cadastrado
    return (
      <ProfessionalProfile
        key={professional.id}
        name={userName}
        description={professional.description}
        image={professional.image}
        email={professional.email}
        number={professional.number}
        city={professional.city}
        translator={professional.translator}
        sworn={professional.sworn}
        interpreter={professional.interpreter}
        community={professional.community}
        forensic={professional.forensic}
        doctor={professional.doctor}
        lawful={professional.lawful}
        corporate={professional.corporate}
        cultural={professional.cultural}
        primaVista={professional.primaVista}
        chuchotage={professional.chuchotage}
        interConf={professional.interConf}
        interSimu={professional.interSimu}
        langName={professional.langName}
        day={professional.day}
        hour={professional.hour}
      />
    );
  });

  return (
    <Background>
      <StatusBar transparent />
      <BtnArrowBack onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="#fff" />
      </BtnArrowBack>

      <Header>
        <Title> Profissionais</Title>
        <Title> Disponíveis</Title>
      </Header>

      <Body>
        <Scroll
          refreshControl={
            <Refresh refreshing={mounted} onRefresh={() => setMounted(true)} />
          }
        >
          {Show}
        </Scroll>
      </Body>
    </Background>
  );
}
