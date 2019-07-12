import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #141419;
  flex: 1;
`;

export const Product = styled.View`
  background: #fff;
  width: 220px;
  height: 358px;
  border-radius: 4px;
  margin: 15px;
  padding: 10px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  line-height: 21px;
  padding: 0 7px;
`;

export const PriceAndActionContainer = styled.View`
  margin-top: auto;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 21;
  padding: 0 7px;
`;

export const AddToCartButton = styled(RectButton)`
  background: #7159c1;
  border-radius: 4px;
  height: 42px;
  flex-direction: row;
  margin-top: 10px;
`;

export const ProductAmountContainer = styled.View`
  width: 53px;
  background: rgba(0, 0, 0, 0.2);
  padding: 12px;
`;

export const ProductAmount = styled.Text`
  font-size: 14px;
  color: #fff;
  text-align: right;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  width: 147px;
  text-align: center;
  color: #fff;
  padding: 12px;
  text-transform: uppercase;
  font-weight: bold;
`;
