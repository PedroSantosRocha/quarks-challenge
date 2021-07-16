import styled from 'styled-components/native';

export const FavoriteButton = styled.TouchableOpacity`
  background-color: transparent;
  border-radius: 15px;
  padding: 10px;
  width: 50%;
  border: 1px;
  border-color: #45bbff;
`;

export const FavoriteButtonDisabled = styled.TouchableOpacity`
  background-color: #45bbff;
  border-radius: 15px;
  padding: 10px;
  width: 50%;
`;

export const Title = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

export const TitleDisabled = styled.Text`
  color: #1f1e25;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
