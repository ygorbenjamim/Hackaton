import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  padding-bottom: 40px;
  align-items: center;
  background-color: #9871F5;
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
`;

export const Title = styled.Text`
  height: 150px;
  font-size: 32px;
  color: #fff;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  text-align: justify;
  font-size: 17px;
  color: #fff;
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

export const BtnArrowBack = styled.TouchableOpacity`
  position: absolute;
  top: 50px;
  left: 25px;
`;