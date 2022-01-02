import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar, Title, Caption, Drawer } from 'react-native-paper';
import { AuthContext } from '../Autentication';
import DefaultProfile from '../../assets/default-profile.png'
import {
  Background,
  Container,
  Header,
  AvatarContent,
  InfoContent,
  styles
} from './style';

export default function DrawerContent({ ...props }) {

  // Variáveis de controle
  const { signOut } = React.useContext(AuthContext);

  function logOut() {
    signOut();
    props.navigation.closeDrawer(true);
  }

  return (
    <Background>
      <DrawerContentScrollView {...props}>
        <Container>
          <Header>
            <AvatarContent>
              <Avatar.Image
                style={{ backgroundColor: '#fff', color: '#fff'}}
                source={DefaultProfile}
                size={64}
              />
              <InfoContent>
                <Title style={styles.titleColor}>Marco Gomez</Title>
                <Caption style={{ color: '#888' }}>marco@gmail.com</Caption>
              </InfoContent>
            </AvatarContent>
          </Header>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Início"
              labelStyle={{color: '#9871F5'}}
              icon={({ size }) => (
                <Icon name="home-outline"
                  color={'#9871F5'}
                  size={size}
                />
              )}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              label="Conta"
              labelStyle={{color: '#9871F5'}}
              icon={({ size }) => (
                <Icon name="account-outline"
                  color={'#9871F5'}
                  size={size}
                />
              )}
              onPress={() => {
                props.navigation.navigate('Account');
              }}
            />
            <DrawerItem
              label="Suporte"
              labelStyle={{color: '#9871F5'}}
              icon={({ size }) => (
                <Icon name="account-check-outline"
                  color={'#9871F5'}
                  size={size}
                />
              )}
              onPress={() => {
                props.navigation.navigate('Support');
              }}
            />
          </Drawer.Section>
        </Container>
      </DrawerContentScrollView>

      {/* Botão para logout */}
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          label="Sair"
          labelStyle={{color: '#9871F5'}}
          icon={({ size }) => (
            <Icon name="exit-to-app"
              color={'#9871F5'}
              size={size}
            />
          )}
          onPress={logOut}
        />
      </Drawer.Section>
    </Background>
  );
}
