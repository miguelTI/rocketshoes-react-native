import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #141419;
  flex: 1;
`;

export const Product = styled.View`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 15px;
  padding: 10px;
`;

export const ProductImage = styled.Image`
  width: 250;
  height: 250;
  margin: auto;
`;

export const ProductTitle = styled.Text`
  flex: 1;
  font-size: 16px;
  line-height: 21px;
  padding: 0 7px;
`;

export const PriceAndActionContainer = styled.View`
  flex: 1;
  margin-top: auto;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 21;
  padding: 0 7px;
  margin-top: 5px;
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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProductAmount = styled.Text`
  font-size: 14px;
  color: #fff;
  text-align: right;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  flex: 1;
  text-align: center;
  color: #fff;
  padding: 12px;
  text-transform: uppercase;
  font-weight: bold;
`;
