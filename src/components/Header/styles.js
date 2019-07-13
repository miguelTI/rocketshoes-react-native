import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  flex-direction: row;
  background: #141419;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.Image`
  width: 185px;
  height: 24px;
`;

export const Cart = styled(RectButton)`
  width: 30px;
  height: 30px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  min-width: 18px;
  min-height: 18px;
  border-radius: 9px;
  overflow: hidden;
  position: absolute;
  top: 0px;
  right: 0px;
  background: #7159c1;
  color: #fff;
  text-align: center;
  padding: 2px;
  font-size: 12px;
`;
