import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/images/logo.png';

import { Wrapper, Container, Logo, Cart, ItemCount } from './styles';

export default function Header({ navigation, cartSize }) {
  return (
    <Wrapper>
      <Container>
        <Logo source={logo} />
        <Cart onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cartSize || 0}</ItemCount>
        </Cart>
      </Container>
    </Wrapper>
  );
}
