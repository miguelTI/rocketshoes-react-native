import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

function Cart({
  navigation,
  products,
  total,
  removeFromCart,
  updateAmountRequest,
}) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
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
          <RemoveButton onPress={() => removeFromCart(item.id)}>
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

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce(
      (total, product) => total + product.price * product.amount,
      0
    )
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
