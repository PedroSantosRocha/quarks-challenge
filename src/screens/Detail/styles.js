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
  margin-bottom: 30px;
`;

export const LittleCard = styled.View`
  flex: 1;
  background-color: #121015;
  height: 80px;
  border-radius: 15px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  margin: 5px 0px 5px 0px;
`;

export const TextTitleCard = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;

export const TextContentCard = styled.Text`
  color: #45bbff;
  font-size: 20px;
  font-weight: 600;
`;

export const AreaButton = styled.View`
  align-items: center;
`;
