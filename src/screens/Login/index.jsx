import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native-paper';
import { Modal, Animated } from 'react-native';
import { AuthContext } from '../../components/Autentication';
import Logo from '../../assets/logo.png';
import gifLoading from '../../assets/loading.gif';
import {
  Background,
  ImageLogo,
  Header,
  MessageError,
  BtnGreen,
  BtnRegister,
  BtnLabel,
  Footer,
  SubTitle,
  ImageModal,
  BodyModal,
  styles,
} from './style';

export default function Login({ navigation }) {
  // Variáveis de animação
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 500 }));
  const [opacity] = useState(new Animated.Value(0));
  const [loading, setLoading] = useState(false);

  // Variáveis de login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = React.useContext(AuthContext);

  // Variáveis de erro
  const [errorLogin, setErrorLogin] = useState('none');

  // Animação
  Animated.parallel([
    Animated.spring(offset.y, { toValue: 0, useNativeDriver: true }),
    Animated.timing(opacity, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }),
  ]).start();

  // Envio do formulário para requisição de login
  function sendFormLogin() {

    // Modal de loading
    /*setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1700);*/

    if(email === 'marco@gmail.com' && password === 'admin'){
      // Função para liberar as demais telas de navegação
      signIn();
    }

    // Modal de loading
    /* setErrorLogin('flex');
    setTimeout(() => {
      setErrorLogin('none');
    }, 10000); */
  }

  return (
    <Background>
      <StatusBar transparent />
      <Header>
        <ImageLogo source={Logo} />
      </Header>

      <Animated.View
        style={[
          styles.container,
          { opacity, transform: [{ translateY: offset.y }] },
        ]}
      >
        <MessageError style={{ display: errorLogin }}>
          Credenciais inválidas
        </MessageError>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          autocorrect={false}
          value={email}
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          autocorrect={false}
          secureTextEntry
          value={password}
          onChangeText={password => setPassword(password)}
        />
        <BtnGreen onPress={sendFormLogin}>
          <BtnLabel>Entrar</BtnLabel>
        </BtnGreen>
      </Animated.View>

      <Footer>
        <SubTitle>Ainda não possui sua conta?</SubTitle>

        <BtnRegister onPress={() => navigation.navigate('RegisterStepOne')}>
          <BtnLabel>Cadastrar</BtnLabel>
        </BtnRegister>
      </Footer>

      <Modal visible={loading} transparent animationType="fade">
        <BodyModal>
          <ImageModal source={gifLoading} />
        </BodyModal>
      </Modal>
    </Background>
  );
}
