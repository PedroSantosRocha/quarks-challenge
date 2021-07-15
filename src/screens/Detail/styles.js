import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px 20px;
  background-color: #121015;
`;

export const Card = styled.View`
  background-color: #1f1e25;
  height: 500px;
  border-radius: 15px;
  padding: 10px;
`;

export const LittleCard = styled.View`
  flex: 1;
  background-color: #121015;
  height: 80px;
  border-radius: 15px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 5px 0px 5px 0px;
`;

export const TextCard = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;
