import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #9871F5;
`;

export const BtnMenu = styled.TouchableOpacity`
  position: absolute;
  top: 30px;
  left: 37px;
  margin-top: 10px;
`;

export const ContainerMenu = styled.View`
  height: 100px;
`;

export const Body = styled.View`
  flex: 0.7;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`;

export const ContainerText = styled.View`
  width: 85%;
  margin-bottom: 35px;
  display: flex;
  align-items: center;
`;

export const Title = styled.Text`
  width: 80%;
  font-weight: bold;
  font-size: 24px;
  color: #fff;
`;

export const SubTitle = styled.Text`
  width: 80%;
  margin-top: 30px;
  font-size: 20px;
  color: #eee;
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

export const ContainerBtnModal = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  padding-right: 20px;
`;

export const BtnModal = styled.TouchableOpacity`
  color: #000;
`;

export const BtnLabelModal = styled.Text`
  font-size: 17px;
  font-weight: bold;
  padding: 10px;
  border-radius: 30px;
  margin-bottom: 20px;
  margin-top: 20px;
  color: #000;
`;

export const BtnGreen = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 70%;
  border-radius: 7px;
  background-color: #04D361;
  padding: 13px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const BtnLabel = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const MessageSuccess = styled.Text`
  width: 85%;
  text-align: center;
  font-size: 15px;
  margin-bottom: 20px;
  color: #04D361;
`;

