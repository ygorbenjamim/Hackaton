import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #9871F5;
  align-items: center;
`;

export const Header = styled.View`
  margin-top: 130px;
  width: 90%;
`;

export const Body = styled.View`
  width: 90%;
  height: 520px;
  margin-top: 50px;
  border-radius: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 25px;
  color: #fff;
`;

export const BtnArrowBack = styled.TouchableOpacity`
  position: absolute;
  top: 50px;
  left: 25px;
`;

export const Scroll = styled.ScrollView``;
export const Refresh = styled.RefreshControl``;