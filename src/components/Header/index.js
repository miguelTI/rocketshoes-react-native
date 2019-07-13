import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import logo from '../../assets/images/logo.png';

import {
  Wrapper,
  Container,
  HomeButton,
  Logo,
  Cart,
  ItemCount,
} from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Wrapper>
      <Container>
        <HomeButton onPress={() => navigation.navigate('Home')}>
          <Logo source={logo} />
        </HomeButton>
        <Cart onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-cart" color="#FFF" size={24} />
          <ItemCount>{cartSize || 0}</ItemCount>
        </Cart>
      </Container>
    </Wrapper>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  cartSize: PropTypes.number.isRequired,
};

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
