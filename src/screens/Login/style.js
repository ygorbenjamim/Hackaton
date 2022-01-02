import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '90%'
  },
  input: {
    width: '90%',
    marginBottom: 10,
    fontSize: 17,
  }
});

export const Background = styled.View`
  flex: 1;
  padding-bottom: 40px;
  align-items: center;
  background-color: #9871F5;
`;

export const Header = styled.View`
  flex: 0.5;
  justify-content: center;
  margin-top: 50px;
`;

export const Footer = styled.View`
  bottom: 35px;
  width: 90%;
  align-items: center;
`;

export const BodyModal = styled.View`
  flex: 1;
  background-color: #000;
  align-items: center;
  justify-content: center;
  opacity: 0.3;
`;

export const ImageModal = styled.Image`
  width: 64px;
  height: 64px;
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
  padding: 10px;
  border-radius: 30px;
  margin-top: 20px;
  color: #fff;
`;

export const BtnRegister = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 90%;
  border-radius: 7px;
  background-color: #a78bea;
  padding: 13px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const ImageLogo = styled.Image`
  width: 170px;
  height: 92px;
`;

export const MessageError = styled.Text`
  width: 85%;
  text-align: center;
  font-size: 15px;
  margin-bottom: 20px;
  color: red;
`;

export const Input = styled.TextInput`
  width: 90%;
  background-color: #E5E5E5;
  border-radius: 7px;
  margin-bottom: 10px;
  font-size: 17px;
`;

export const BtnGreen = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 90%;
  border-radius: 7px;
  background-color: #04D361;
  padding: 13px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const BtnLabel = styled.Text`
  font-size: 17px;
  color: #fff;
  font-weight: bold;
`;