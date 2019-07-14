import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';
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

export default function Cart() {
  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce(
        (sumTotal, product) => sumTotal + product.price * product.amount,
        0
      )
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function renderProduct({ item }) {
    return (
      <>
        <ProductInfo>
          <ProductImage source={{ uri: item.image }} />
          <ProductDetails>
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{formatPrice(item.price)}</ProductPrice>
          </ProductDetails>
          <RemoveButton
            onPress={() => dispatch(CartActions.removeFromCart(item.id))}
          >
            <Icon name="remove-shopping-cart" color="#7159C1" size={24} />
          </RemoveButton>
        </ProductInfo>
        <PriceInfo>
          <Amount>
            <UpdateAmountButton onPress={() => decrement(item)}>
              <Icon name="remove-circle-outline" color="#7159C1" size={20} />
            </UpdateAmountButton>
            <AmountInput>{item.amount}</AmountInput>
            <UpdateAmountButton onPress={() => increment(item)}>
              <Icon name="add-circle-outline" color="#7159C1" size={20} />
            </UpdateAmountButton>
          </Amount>
          <AmountPrice>{item.subtotal}</AmountPrice>
        </PriceInfo>
      </>
    );
  }

  return (
    <Container>
      <Products>
        <FlatList
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={renderProduct}
        />
        <TotalInfo>
          <TotalTitle>Total</TotalTitle>
          <TotalPrice>{total}</TotalPrice>
        </TotalInfo>
        <FinishButton>
          <ButtonText>Finalizar Pedido</ButtonText>
        </FinishButton>
      </Products>
    </Container>
  );
}

Cart.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  item: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    amount: PropTypes.number,
    subtotal: PropTypes.string,
  }),
};

Cart.defaultProps = {
  item: {
    id: 0,
    image: '',
    title: '',
    price: 0,
    amount: 0,
    subtotal: '',
  },
};
