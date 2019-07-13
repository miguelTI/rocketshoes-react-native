import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../utils/format';
import {
  Container,
  Products,
  ProductInfo,
  ProductDetails,
  ProductImage,
  ProductTitle,
  ProductPrice,
  PriceInfo,
  Amount,
  UpdateAmountButton,
  AmountInput,
  AmountPrice,
  RemoveButton,
  TotalInfo,
  TotalTitle,
  TotalPrice,
  FinishButton,
  ButtonText,
} from './styles';

class Cart extends Component {
  state = {
    products: [
      {
        id: 1,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 179.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
      {
        id: 2,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 139.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
      {
        id: 3,
        title: 'Tênis Adidas Duramo Lite 2.0',
        price: 219.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
      },
    ],
  };

  renderProduct = ({ item }) => {
    return (
      <>
        <ProductInfo>
          <ProductImage source={{ uri: item.image }} />
          <ProductDetails>
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{formatPrice(item.price)}</ProductPrice>
          </ProductDetails>
          <RemoveButton>
            <Icon name="remove-shopping-cart" color="#7159C1" size={24} />
          </RemoveButton>
        </ProductInfo>
        <PriceInfo>
          <Amount>
            <UpdateAmountButton>
              <Icon name="remove-circle-outline" color="#7159C1" size={20} />
            </UpdateAmountButton>
            <AmountInput>3</AmountInput>
            <UpdateAmountButton>
              <Icon name="add-circle-outline" color="#7159C1" size={20} />
            </UpdateAmountButton>
          </Amount>
          <AmountPrice>{formatPrice(539)}</AmountPrice>
        </PriceInfo>
      </>
    );
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <Products>
          <FlatList
            data={products}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderProduct}
          />
          <TotalInfo>
            <TotalTitle>Total</TotalTitle>
            <TotalPrice>{formatPrice(1619.1)}</TotalPrice>
          </TotalInfo>
          <FinishButton>
            <ButtonText>Finalizar Pedido</ButtonText>
          </FinishButton>
        </Products>
      </Container>
    );
  }
}

export default Cart;
