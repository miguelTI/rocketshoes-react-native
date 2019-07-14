import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import logo from '../../assets/images/logo.png';

import {
  Wrapper,
  Container,
  HomeButton,
  Logo,
  Cart,
  ItemCount,
} from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

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
};
