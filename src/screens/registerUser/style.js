import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputMask: {
    width: '100%', // Largura
    borderRadius: 5, // Arredondamento das bordas
    marginTop: 40,
    fontSize: 17, // Tamanho da fonte
    height: 58,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  }
});

export const Background = styled.View`
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  flex: 0.5;
  width: 80%;
  justify-content: flex-end;
  margin-top: 100px;
`;

export const Body = styled.View`
  flex: 1;
  width: 80%;
`;

export const Footer = styled.View`
  align-items: center;
  width: 90%;
  margin-bottom: 20px;
`;

export const Mask = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  padding-Bottom: 50px;
  font-size: 25px;
  color: #000;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  text-align: justify;
  font-size: 17px;
  color: #000;
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

export const BtnOrange = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 90%;
  border-radius: 7px;
  background-color: #ffc966;
  padding: 13px;
  margin-bottom: 10px;
  margin-top: 10px;
`;


export const BtnLabel = styled.Text`
  font-size: 17px;
  color: #fff;
  font-weight: bold;
`;

export const BtnArrowBack = styled.TouchableOpacity`
  position: absolute;
  top: 50px;
  left: 25px;
`;