import styled from 'styled-components/native';

export const Background = styled.View`
  display: flex;
  flex: 1;
  background-color: #9871F5;
`;

export const Header = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageHome = styled.Image`
  height: 250px;
  width: 267px;
  margin-top: 120px;
`;

export const Body = styled.View`
  flex: 1;
  margin-top: 150px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: #fff;
  margin-left: 45px;
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  color: #fff;
  margin-left: 45px;
  font-weight: bold;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

export const BtnSerch = styled.TouchableOpacity`
  background-color: #8257E5;
  flex-direction: row;
  align-items: center;
  width: 50%;
  padding-left: 45px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const BtnProf = styled.TouchableOpacity`
  background-color: #04D361;
  flex-direction: row;
  align-items: center;
  width: 50%;
  padding-left: 45px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const BtnLabel = styled.Text`
  font-size: 17px;
  color: #fff;
  font-weight: bold;
`;

export const ContainerMenu = styled.View`
  height: 100px;
`;

export const BtnMenu = styled.TouchableOpacity`
  position: absolute;
  top: 30px;
  left: 37px;
  margin-top: 10px;
`;