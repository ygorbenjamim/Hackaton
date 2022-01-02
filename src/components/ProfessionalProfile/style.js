import styled from 'styled-components';

export const BtnVoid = styled.TouchableOpacity``;
export const ModalVoid = styled.Modal``;
export const Scroll = styled.ScrollView``;

export const Background = styled.View`
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const Footer = styled.View`
  margin-top: 20px;
  margin-bottom: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 90%;
`;

export const BackgroundModal = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 20px;
`;

export const HeaderModal = styled.View`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  width: 110%;
  padding: 20px 55px 20px 35px;
  background-color: #f3ecec;
  justify-content: space-between;
  align-items: center;

`;

export const BodyModal = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
`;

export const TopInfo = styled.View`
  width: 100%;
`;

export const Info = styled.View`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InfoTxt = styled.Text`
  font-size: 17px;
  margin-left: 15px;
  color: #5c5c5c;
  width: 90%;
`;

export const TitleInfoTxt = styled.Text`
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #5c5c5c;
  width: 90%;
`;

export const BtnArrowBack = styled.TouchableOpacity`
  position: absolute;
  top: 50px;
  left: 25px;
`;

export const Colunm = styled.View`
  width: 60%;
  align-items: flex-end;
  justify-content: center;
`;

export const NameModal = styled.Text`
  font-size: 17px;
  color: #1a1a1a;
  font-weight: bold;
`;

export const ProfessionalImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #fff;
`;

export const ProfessionalName = styled.Text`
  padding-left: 15px;
  font-weight: bold;
  text-align: right;
`;

export const ProfessionalLang = styled.Text`
  margin-top: 10px;
  padding-left: 15px;
  font-size: 12px;
`;

export const ProfessionalDescription = styled.Text`
  margin-top: 20px;
  width: 80%;
`;

export const BtnGreen = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 90%;
  border-radius: 7px;
  background-color: #04d361;
  padding: 13px;
  margin-top: 10px;
`;

export const BtnLabel = styled.Text`
  font-size: 17px;
  color: #fff;
  font-weight: bold;
`;

export const BackgroundMessage = styled.View`
  flex: 1;
`;

export const HeaderMessage = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: #04d361;
`;

export const ImageMessage = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 30px;
  background-color: #fff;
`;

export const TextMessage = styled.Text`
  font-size: 17px;
  margin-left: 10px;
  font-weight: bold;
  color: #fff;
`;

export const BtnBackMessage = styled.TouchableOpacity`
  padding: 15px;
`;

export const BodyMessage = styled.View`
  flex: 1;
`;

export const FooterMessage = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
  width: 100%;
`;

export const InputMessage = styled.TextInput`
  flex: 1;
  font-size: 17px;
  padding: 15px;
  border-radius: 50px;
  margin: 5px;
  background-color: #eee;
`;

export const SendMessage = styled.TouchableOpacity`
  background-color: #04d361;
  justify-content: center;
  padding: 20px;
  margin: 5px;
  border-radius: 50px;
`;
