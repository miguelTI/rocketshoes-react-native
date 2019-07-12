import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { formatPrice } from '../../utils/format';

import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  PriceAndActionContainer,
  ProductPrice,
  AddToCartButton,
  ProductAmountContainer,
  ProductAmount,
  ButtonText,
} from './styles';

export default class Home extends Component {
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
      <Product>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <PriceAndActionContainer>
          <ProductPrice>{formatPrice(item.price)}</ProductPrice>
          <AddToCartButton>
            <ProductAmountContainer>
              <ProductAmount>1</ProductAmount>
            </ProductAmountContainer>
            <ButtonText>Adicionar</ButtonText>
          </AddToCartButton>
        </PriceAndActionContainer>
      </Product>
    );
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}
