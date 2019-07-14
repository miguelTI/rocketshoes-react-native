import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../utils/format';
import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';

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

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function renderProduct({ item }) {
    return (
      <Product key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <PriceAndActionContainer>
          <ProductPrice>{item.priceFormatted}</ProductPrice>
          <AddToCartButton onPress={() => handleAddProduct(item.id)}>
            <ProductAmountContainer>
              <Icon name="shopping-cart" color="#FFF" size={14} />
              <ProductAmount>{amount[item.id] || 0}</ProductAmount>
            </ProductAmountContainer>
            <ButtonText>Adicionar ao carrinho</ButtonText>
          </AddToCartButton>
        </PriceAndActionContainer>
      </Product>
    );
  }

  return (
    <Container>
      <FlatList
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct}
        extraData={amount}
      />
    </Container>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  item: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
    priceFormatted: PropTypes.string,
  }),
};

Home.defaultProps = {
  item: {
    id: 0,
    image: '',
    title: '',
    price: 0,
  },
};
