import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

class Home extends Component {
  state = {
    products: [],
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    addToCartRequest: PropTypes.func.isRequired,
    amount: PropTypes.objectOf(PropTypes.number).isRequired,
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  renderProduct = ({ item }) => {
    const { amount } = this.props;

    return (
      <Product>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <PriceAndActionContainer>
          <ProductPrice>{item.priceFormatted}</ProductPrice>
          <AddToCartButton onPress={() => this.handleAddProduct(item.id)}>
            <ProductAmountContainer>
              <Icon name="shopping-cart" color="#FFF" size={14} />
              <ProductAmount>{amount[item.id] || 0}</ProductAmount>
            </ProductAmountContainer>
            <ButtonText>Adicionar ao carrinho</ButtonText>
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
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
          extraData={this.props}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
