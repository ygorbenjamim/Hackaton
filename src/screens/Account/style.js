import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  align-items: center;
  background-color: #9871F5;
`;

export const Header = styled.View`
  flex: 0.25;
  width: 100%;
  padding: 10px;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  margin-top: 60px;
`;

export const BtnMenu = styled.TouchableOpacity`
  position: absolute;
  top: 30px;
  left: 37px;
  margin-top: 10px;
`;

export const ImageAccount = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  border-width: 1px;
  border-color: #888;
`;

export const BtnImage = styled.TouchableOpacity`
  position: absolute;
  right: 33%;
  bottom: 2%;
  background-color: #ddd;
  padding: 10px;
  border-radius: 30px;
`;

export const BtnAccount = styled.TouchableOpacity`
  padding: 15px;
  width: 80%;
`;

export const BtnHeader = styled.View`
  flex-direction: row;
`;

export const BtnBody = styled.View`
  width: 75%;
  margin-left: 42px;
`;

export const BtnText = styled.Text`
  font-size: 18px;
  margin-left: 15px;
  color: #fff;
  font-weight: bold;
`;

export const BtnSubText = styled.Text`
  font-size: 15px;
  color: #fff;
`;

export const ContainerIcon = styled.View`
  position: absolute;
  left: 91%;
`;

export const Variable = styled.Text`
  font-size: 17px;
  color: #fff;
  margin-bottom: 15px;
`;

export const BackgroundModal = styled.View`
  flex: 1;
  height: 400px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const HeaderModal = styled.View`
  width: 100%;
  padding-left: 20px;
`;

export const BodyModal = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  padding-right: 20px;
`;

export const TitleModal = styled.Text`
  font-size: 17px;
  font-weight: bold;
  padding: 10px;
  border-radius: 30px;
  margin-bottom: 20px;
  margin-top: 20px;
  color: #000;
`;

export const InputModal = styled.TextInput`
  width: 90%;
  background-color: #E5E5E5;
  border-radius: 7px;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 17px;
`;

export const BtnModalize = styled.TouchableOpacity`
  color: #000;
`;
