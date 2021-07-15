import styled from 'styled-components/native';

export const Container = styled.View`
  height: 130px;
  background-color: #1f1e25;
  align-items: center;
  padding: 10px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const SubTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

export const FavoriteButton = styled.TouchableOpacity`
  background-color: coral;
  height: 20px;
  width: 100px;
  border-radius: 15px;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  text-align: center;
`;
