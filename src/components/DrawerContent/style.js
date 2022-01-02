import styled from 'styled-components';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#9871F5',
    borderTopWidth: 1,
  },
  titleColor: {
    color: '#12924c',
  },
});

export const Background = styled.View`
  flex: 1;
  background-color: #ddd9e8;
`;

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding-left: 20px;
`;

export const AvatarContent = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const InfoContent = styled.View`
  flex-direction: column;
  margin-left: 15px;
`;