import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  background: #141419;
  flex: 1;
  margin: 0;
  padding: 20px;
`;

export const Products = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 15px;
  max-height: ${Dimensions.get('screen').height - 45}px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RemoveButton = styled(RectButton)``;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductDetails = styled.View`
  width: 163px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  line-height: 18px;
`;

export const ProductPrice = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-weight: bold;
`;

export const PriceInfo = styled.View`
  background: #eee;
  border-radius: 4px;
  height: 40px;
  padding: 7px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Amount = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UpdateAmountButton = styled(RectButton)``;

export const AmountInput = styled.TextInput`
  width: 50px;
  height: 26px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
  padding-left: 10px;
  margin: 0 5px;
`;

export const AmountPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const TotalInfo = styled.View`
  align-items: center;
`;

export const TotalTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #999;
  margin-bottom: 5px;
  text-transform: uppercase;
`;

export const TotalPrice = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const FinishButton = styled(RectButton)`
  background: #7159c1;
  border-radius: 4px;
  height: 42px;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
`;
